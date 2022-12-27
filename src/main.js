import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/styles/appGLOBAL.css";
import "./assets/styles/cardGLOBAL.css";
import "./assets/styles/mc2GLOBAL.css";



import { Capacitor } from "@capacitor/core";
import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

window.addEventListener("DOMContentLoaded", async () => {
  const platform = Capacitor.getPlatform();
  const sqlite = new SQLiteConnection(CapacitorSQLite);

  const app = createApp(App).use(router);
  try {

    // example: database creation with standard SQLite statements
    //-->> if needed not required
    const ret = await sqlite.checkConnectionsConsistency();
    console.log(`after checkConnectionsConsistency ${ret.result}`);
    const isConn = (await sqlite.isConnection("db_tab3")).result;
    console.log(`after isConnection ${isConn}`);
    let db;
    if (ret.result && isConn) {
      db = await sqlite.retrieveConnection("db_tab3");
    } else {
      db = await sqlite.createConnection("db_tab3", false, "no-encryption", 1);
    }
    console.log(`after create/retrieveConnection ${JSON.stringify(db)}`);

    await db.open();
    console.log(`db.open()`);
    const query = `
    CREATE TABLE IF NOT EXISTS test (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
    );
    `;
    const res = await db.execute(query);
    if (res.changes && res.changes.changes && res.changes.changes < 0) {
      throw new Error(`Error: execute failed`);
    }
    await sqlite.closeConnection("db_tab3");
    // if needed not required --<<

    router.isReady().then(() => {
      app.mount("#app");
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    throw new Error(`Error: ${err}`);
  }
});
