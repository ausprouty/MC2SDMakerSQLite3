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
  const app = createApp(App).use(router);
  var noteSource = localStorage.getItem('mc2NoteSource')
  if (noteSource != 'localstorage'){
    const sqlite = new SQLiteConnection(CapacitorSQLite);

    try {
      const ret = await sqlite.checkConnectionsConsistency();
      const isConn = (await sqlite.isConnection("db_mc2notes")).result;
      let db;
      if (ret.result && isConn) {
        db = await sqlite.retrieveConnection("db_mc2notes");
      } else {
        db = await sqlite.createConnection("db_mc2notes", false, "no-encryption", 1);
      }
      await db.open();
      const query = `
      CREATE TABLE IF NOT EXISTS notes (
            page   VARCHAR NOT NULL,
            noteid VARCHAR NOT NULL,
            note TEXT,
            CONSTRAINT note_index PRIMARY KEY (page, noteid)
        ); `
      const res = await db.execute(query);
      if (res.changes && res.changes.changes && res.changes.changes < 0) {
        throw new Error(`Error: execute failed`);
      }
      await sqlite.closeConnection("db_mc2notes");
      localStorage.setItem('mc2NoteSource', 'database')
    } catch (err) {
      localStorage.setItem('mc2NoteSource', 'localstorage')
    }
  }
  router.isReady().then(() => {
      app.mount("#app");
    });
});
