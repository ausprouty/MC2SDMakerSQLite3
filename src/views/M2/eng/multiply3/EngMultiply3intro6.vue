<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    let notes = await SQLiteService.notes(this.$route.name)
    for (var i = 0; i< notes.length; i++){
      var noteid = notes[i].noteid
      document.getElementById(noteid).value =notes[i].note
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
<h1>Period 6: Representing the Movement of Jesus</h1>
<div id="showVideoOptions"></div>
  <p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/eng/multiply3/Trip4.png" 
    zoom="/images/zoom/eng/multiply3/Trip4.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/images/eng/multiply3/Trip4.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p>[57- 62 AD]</p>

<h2>Summary:</h2>

<p>After laying the foundation of 6-7 movement centers across the eastern part of the Roman Empire, Paul&rsquo;s role now shifts to opportunities to defend the faith. This period is marked by long journeys, prison, dangerous circumstances, and legal defenses before the highest government leaders in Judea and Rome.</p>

<h2>Letters written during this period</h2>

<ul>
	<li>Colossians, 60-62 AD</li>
	<li>Philemon, 60-62 AD</li>
	<li>Ephesians, 60-62 AD</li>
	<li>Philippians, 60-62 AD</li>
</ul>


<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/images/standard//OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social" @click="share('languages', '', '')">
				  <img class="social" src="@/assets/images/standard/languages.png" />
			  </td>
			  
			<td class="social"  @click="share('android', 'eng', '')">
				<img  class="social" src="@/assets/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Period 6: Representing the Movement of Jesus: ', '/content/M2/eng/multiply3/multiply3intro6.html')">
				<img class="social" src="@/assets/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org</p>
</div>

<!-- end mc2 sdcard languageFooter -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->