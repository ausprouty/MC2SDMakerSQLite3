import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/styles/appGlobal.css";
import "./assets/styles/cardGlobal.css";
import "./assets/styles/mc2Global.css";

import App from "./App.vue";
import router from "./router";

import { Capacitor } from '@capacitor/core'
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite'
import {
  defineCustomElements as jeepSqlite,
  applyPolyfills,
} from 'jeep-sqlite/loader'

applyPolyfills().then(() => {
  jeepSqlite(window)
})
window.addEventListener('DOMContentLoaded', async () => {
  const platform = Capacitor.getPlatform()
  const sqlite = new SQLiteConnection(CapacitorSQLite)

  const app = createApp(App).use(router)
  try {
    if (platform === 'web') {
      // Create the 'jeep-sqlite' Stencil component
      const jeepSqlite = document.createElement('jeep-sqlite')
      document.body.appendChild(jeepSqlite)
      await customElements.whenDefined('jeep-sqlite')
      // Initialize the Web store
      await sqlite.initWebStore()
    }
    // example: database creation with standard SQLite statements
    //-->> if needed not required
    const ret = await sqlite.checkConnectionsConsistency()
    console.log(`after checkConnectionsConsistency ${ret.result}`)
    const isConn = (await sqlite.isConnection('db_mc2')).result
    console.log(`after isConnection ${isConn}`)
    let db
    if (ret.result && isConn) {
      db = await sqlite.retrieveConnection('db_mc2')
    } else {
      db = await sqlite.createConnection('db_mc2', false, 'no-encryption', 1)
    }
    console.log(`after create/retrieveConnection ${JSON.stringify(db)}`)
    await db.open()
    console.log(`db.open()`)
    const createTable = `
        CREATE TABLE IF NOT EXISTS notes (
            page   VARCHAR NOT NULL,
            noteid VARCHAR NOT NULL,
            note TEXT,
            CONSTRAINT note_index PRIMARY KEY (page, noteid)
        ); `
    const res = await db.execute(createTable)
    if (res.changes && res.changes.changes && res.changes.changes < 0) {
      throw new Error(`Error: execute failed`)
    }
    await sqlite.closeConnection('db_mc2')

    router.isReady().then(() => {
      app.mount('#app')
    })
  } catch (err) {
    console.log(`Error: ${err}`)
    throw new Error(`Error: ${err}`)
  }
})

