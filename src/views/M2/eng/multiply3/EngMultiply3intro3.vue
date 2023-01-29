<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp } from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare } from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';

export default {
  components: {
    VueImageZoomer
  },
  methods: {
    async addNote (noteid) {
      var noteText = document.getElementById(noteid).value
      var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
      document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn (gotoPath) {
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack (returnto) {
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp (verse) {
      usePopUp(verse)
    },
    share (what, v1, v2) {
      useShare(what, v1, v2)
    },
    vuePush (id) {
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted () {
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    let notes = await SQLiteService.notes(this.$route.name)
    for (var i = 0; i < notes.length; i++) {
      var noteid = notes[i].noteid
      document.getElementById(noteid).value = notes[i].note
    }
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply3-index')">
      <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
  </div>
  <div class="page_content ltr">
    <h1>Period 3: Expanding to New Territories</h1>
    <div id="showVideoOptions"></div>

    <vue-image-zoomer regular="/images/zoom/Trip1.png" zoom="/images/zoom/Trip1.png" :zoom-amount="3"
      img-class="img-fluid" alt="Trip 1 Map">
      <img src="@/assets/images/eng/multiply3/Trip1.png" img-class="img-fluid" />
    </vue-image-zoomer>

    <p>(1st Missionary Journey from Antioch) [46-48 AD]</p>

    <h2><br />
      Summary</h2>

    <p>This period covers the travel of the first mission team that the Spirit sent from the church in Antioch. It is
      marked by miracles, teaching in Synagogues, persecution and church planting among new peoples. Examples of making
      disciples in different context and situations are found in this period.</p>

    <h2>Letters written during this Period</h2>

    <ul>
      <li>Galatians, 48 AD</li>
    </ul>


    <!-- begin mc2 sdcard languageFooter -->

    <div class="languages" id="languages"><img class="languages"
        src="@/assets/images/standard//OtherLanguagesTop.png" /></div>
    <table class="social">
      <tbody>
        <tr>
          <td class="social" @click="share('languages', '', '')">
            <img class="social" src="@/assets/images/standard/languages.png" />
          </td>

          <td class="social" @click="share('android', 'eng', '')">
            <img class="social" src="@/assets/images/standard/android.png" />
          </td>

          <td class="social"
            @click="share('lesson', 'Period 3: Expanding to New Territories: ', '/content/M2/eng/multiply3/multiply3intro3.html')">
            <img class="social" src="@/assets/images/standard/Share.png" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="footer">
      <p class="footer">MC2</p>
      <p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org
      </p>
    </div>

    <!-- end mc2 sdcard languageFooter -->
  </div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->