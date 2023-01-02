<template>
    <div class="note-div">
        <form class="auto_submit_item">
            <textarea v-model="noteText" class="textarea" :style="{ height: textHeight + 'px' }" @keyup="this.addNote()"></textarea>
        </form>
    </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

export default {
    name: "NoteTaker",
    props:{noteId:String},
    data: function () {
        return {
            noteText: 'Bpoiiu',
            textHeight:80,
        }
    },
    methods:{
        async addNote(){
            //console.log (this.noteId)
            console.log(this.noteText)
            var height = this.calcNoteHeight(this.noteText)
            //console.log (height)
            this.textHeight= height
            const app = getCurrentInstance();
            const sqlite = app?.appContext.config.globalProperties.$sqlite;
            console.log (sqlite)
           // console.log ("* After  useSQLite definition *\n");
            //let retNoEncryption = await this.noEncryptionTest(sqlite);

            console.log(retNoEncryption)

        },
        // Dealing with Textarea Height
        // from https://css-tricks.com/auto-growing-inputs-textareas/
        calcNoteHeight(value) {
            let numberOfLineBreaks = (value.match(/\n/g) || []).length
            //console.log('linebreakd = ' + numberOfLineBreaks)
            // look for long lines
            var longLines = 0
            var extraLines = 0
            var lineMax = window.innerWidth / 7
           // console.log('linemax = ' + lineMax)
            const line = value.split('/\n')
            var len = line.length
            for (var i = 0; i < len; i++) {
                if (line[i].length > lineMax) {
                    extraLines = Math.round(line[i].length / lineMax)
                    longLines += extraLines
                }
            }
            // min-height + lines x line-height + padding + border
            let newHeight = 80 + (numberOfLineBreaks + longLines) * 20
            return newHeight
        },

    },
    async mounted(){
        //console.log ('i Entered note taker created')
        const sqlite = new SQLiteConnection(CapacitorSQLite);
        //console.log('i past const sqlite')
        try {
            console.log('I am trying')
            const ret = await sqlite.checkConnectionsConsistency();
            console.log(`after checkConnectionsConsistency ${ret.result}`);
            console.log(ret.result)
            const isConn = (await sqlite.isConnection("db_mc2notes")).result;
            console.log(`after isConnection ${isConn}`);
            let db;
            if (ret.result && isConn) {
                console.log ("I am retreiving connection")
                db = await sqlite.retrieveConnection("db_mc2notes");
            } else {
                console.log("I am creating  connection")
                db = await sqlite.createConnection("db_mc2notes", false, "no-encryption", 1);
            }
            console.log(`after create/retrieveConnection ${JSON.stringify(db)}`);
            //await db.open();
            //console.log(`db.open()`);

            const query = 'SELECT note FROM notes WHERE page=? AND noteid = ?'
            let values = ['eng-multiply201', '1']
            let res = await db.execute(query, values);
            console.log(res)
            //await sqlite.closeConnection("db_mc2notes");
        } catch (err) {
            console.log(`Error: ${err}`);
            throw new Error(`Error: ${err}`);
        }

    }
};

</script>
