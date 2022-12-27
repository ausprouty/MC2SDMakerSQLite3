import { ref } from "vue";
// PLUGIN IMPORTS
import { Plugins } from "@capacitor/core";
import "@capacitor-community/sqlite";
import { SQLiteConnection } from "@capacitor-community/sqlite";

const { CapacitorSQLite } = Plugins;

const database = ref<any>(null);
const contacts = ref<any>(null);

const sqliteService = () => {
  const databaseInitialized = ref(false);
  // INIT DATABASE

  const initDbTable = async () => {
    const CREATE_TABLE =
     `CREATE TABLE IF NOT EXISTS notes (
            page   VARCHAR NOT NULL,
            noteid VARCHAR NOT NULL,
            note TEXT,
            CONSTRAINT note_index PRIMARY KEY (page, noteid)
        ); `
    const resp = await database.value?.query(CREATE_TABLE);

    if (resp.message) {
      throw new Error(resp?.message);
    }
    console.log("Table Created ", resp);
    return true;
  };

  const addNote = async () => {


    const resp = await database.value?.run(
      "INSERT INTO contacts (first_name, last_name, email) " +
        "VALUES(?, ?, ?);",
      ["Allen", "Saunders", "allen@mail.com"]
    );
    if (resp.message) {
      throw new Error(resp?.message);
    }
    console.log("Test User Created ", resp);
    return true;
  };

  const loadContactData = async () => {
    try {
      const resp = await (database as any).value?.query(
        "SELECT * FROM contacts;"
      );
      contacts.value = resp.values;
      return true;
    } catch (e) {
      alert("Error Loading Contacts");
    }
  };



  /**
   *
   */
  const getContactById = async (contactId: string) => {
    const result = await database.value?.query(
      "SELECT * FROM contacts WHERE id = ?;",
      [contactId]
    );
    return result.values[0];
  };

  /**
   *
   * @param firstName
   * @param lastName
   * @param email
   */
  const createContact = async (
    firstName: string,
    lastName: string,
    email: string
  ) => {
    const resp = await (database as any).value?.query(
      "INSERT INTO contacts (first_name, last_name, email) " + "VALUES(?,?,?)",
      [firstName, lastName, email]
    );
    await loadContactData();
    return resp;
  };

  /**
   *
   * @param firstName
   * @param lastName
   * @param email
   * @param contactId
   */
  const updateContact = async (
    firstName: string,
    lastName: string,
    email: string,
    contactId: string
  ) => {
    const resp = await (database as any).value?.query(
      "UPDATE contacts SET first_name=?, last_name=?, email=? " + "WHERE id=?",
      [firstName, lastName, email, contactId]
    );

    await loadContactData();
    return resp;
  };
  /**
   * called to startup the database in the application
   */
  const databaseStartup = async () => {
    const sqlite = new SQLiteConnection(CapacitorSQLite);
    const db = await sqlite.createConnection(
      "ionic-vue-db",
      false,
      "no-encryption",
      1
    );

    if (!db) throw new Error("NO DATABASE");
    await db?.open();
    database.value = db;

    await initDbTable();
    // only run once !! - await addTestUser();

    console.log("database opened", db);
    databaseInitialized.value = true;

    await loadContactData();
  };

  return {
    // FUNCTIONS
    databaseStartup,
    loadContactData,
    deleteContactById,
    getContactById,
    createContact,
    updateContact,

    // PROPS
    databaseInitialized,
    contacts,
    database,
  };
};

export default sqliteService;
