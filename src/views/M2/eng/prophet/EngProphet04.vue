<script>
import { useAddNote, useShowNotes} from "@/assets/javascript/notes.js"
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    addNote(){
      useAddNote(this.$route.name)
    },
    goToPageAndSetReturn(goto){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: goto,
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
  mounted() {
    useFindSummaries()
    useFindCollapsible()
    let route_path = this.$route.path
    localStorage.setItem("returnpage", route_path)
    let last = route_path.lastIndexOf('/')
    let series_path = route_path.substr(0, last)
    useRevealMedia(series_path)
    useShowNotes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('eng-prophet-index')">
        <img src="@/assets/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>The Prophet Moses</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<h2>Caring for one another</h2>

<ul>
	<li><span>What has been a highlight this week?</span></li>
	<li><span>What has been a challenge this week?</span></li>
	<li><span>What do you want Isa to do for you this week?</span></li>
	<li><span>Briefly pray for Isa to meet the needs that are shared.</span></li>
</ul>

<h2>Celebrate Faithfulness</h2>

<ul>
	<li>Do you remember the story about Isa from last week?</li>
	<li>Were you able to share the story with someone last week?</li>
</ul>

<h2>Motivation and Encouragement</h2>

<ul>
	<li>Encourage each other to keep obeying Allah and remind each other of the importance of sharing the stories with others.</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Context</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>The descendants of Jacob, Abraham&rsquo;s grandson, settled in Egypt. They were enslaved by the Egyptians as their numbers increased. God sent Moses to Pharaoh, king of Egypt, to demand their freedom. Each time Pharaoh rejected God&rsquo;s demands, He sent disasters as punishments upon Egypt. This happened ten times. The final punishment was for God to kill all of the firstborn sons and firstborn cattle throughout the land.</p>

</div>

<h2><br />
Read</h2>

<ul>
	<li class="indent">Read Exodus 12:1-12, Exodus 12:28-30 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Exodus 12:1-12</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Passover and the Festival of Unleavened Bread</h3>

<p><sup class="versenum">1 </sup>The <span class="small-caps">Lord said to Moses and Aaron in Egypt,<sup class="versenum">2&nbsp;</sup>&ldquo;This month is to be for you the first month, the first month of your year.<sup class="versenum">3&nbsp;</sup>Tell the whole community of Israel that on the tenth day of this month each man is to take a lamb for his family, one for each household.<sup class="versenum">4&nbsp;</sup>If any household is too small for a whole lamb, they must share one with their nearest neighbor, having taken into account the number of people there are. You are to determine the amount of lamb needed in accordance with what each person will eat.<sup class="versenum">5&nbsp;</sup>The animals you choose must be year-old males without defect, and you may take them from the sheep or the goats.<sup class="versenum">6&nbsp;</sup>Take care of them until the fourteenth day of the month, when all the members of the community of Israel must slaughter them at twilight.<sup class="versenum">7&nbsp;</sup>Then they are to take some of the blood and put it on the sides and tops of the doorframes of the houses where they eat the lambs.<sup class="versenum">8&nbsp;</sup>That same night they are to eat the meat roasted over the fire, along with bitter herbs, and bread made without yeast.<sup class="versenum">9&nbsp;</sup>Do not eat the meat raw or boiled in water, but roast it over a fire&mdash;with the head, legs and internal organs.<sup class="versenum">10&nbsp;</sup>Do not leave any of it till morning; if some is left till morning, you must burn it.<sup class="versenum">11&nbsp;</sup>This is how you are to eat it: with your cloak tucked into your belt, your sandals on your feet and your staff in your hand. Eat it in haste; it is the <span class="small-caps">Lord&rsquo;s Passover.</span></span></p>

<p><sup class="versenum">12&nbsp;</sup>&ldquo;On that same night I will pass through Egypt and strike down every firstborn of both people and animals, and I will bring judgment on all the gods of Egypt. I am the <span class="small-caps">Lord. </span></p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button1" type="button" class="collapsible bible">Read Exodus 12:28-30</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<p><sup class="versenum">28&nbsp;</sup>The Israelites did just what the <span class="small-caps">Lord commanded Moses and Aaron.</span></p>

<p><sup class="versenum">29&nbsp;</sup>At midnight the <span class="small-caps">Lord struck down all the firstborn in Egypt, from the firstborn of Pharaoh, who sat on the throne, to the firstborn of the prisoner, who was in the dungeon, and the firstborn of all the livestock as well.<sup class="versenum">30&nbsp;</sup>Pharaoh and all his officials and all the Egyptians got up during the night, and there was loud wailing in Egypt, for there was not a house without someone dead.</span></p>
<!-- end bible -->

<p class="bible"></p>

</div>

<h2>Discovery Discussion</h2>

<ul>
	<li>What caught your attention in this story?</li>
	<li>What do you think is the main idea of this story?</li>
	<li>What do we learn about God?</li>
	<li>What do we learn about man&rsquo;s relationship to God?</li>
</ul>

<!-- begin note sdcard -->
<div class="note-div">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note sdcard -->


<h2>Read, Tell and Correct</h2>

<ul>
	<li>Read the story again. Have someone tell the story and ask the group to help if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ Summary</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>There was only one way to avoid this catastrophe. Only those who obeyed God&rsquo;s requirement would be saved. God commanded Abraham&rsquo;s children to sacrifice an unblemished lamb and put its blood on their doorposts. There was weeping throughout the land of Egypt as the firstborn sons and cattle of each family died. God mercifully passed over those who had sacrificed a lamb, and they were saved. With this final punishment, Pharaoh allowed the people to go free from Egypt.</p>

<p>After they left Egypt, God also gave The Law to the people so that man could understand the kind of life God required from them.&nbsp; The Day of Atonement was God&rsquo;s provision for man so that relationship with Him can be restored.</p>

<p>Read Hebrews 9:22: &ldquo;In fact, the law requires that nearly everything be cleansed with blood, and without the shedding of blood there is no forgiveness of sin.&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<h2>Choose something to obey together</h2>

<ul>
	<li>How can we follow this teaching?</li>
	<li>Is there anyone we can serve practically this week?</li>
	<li>Who is someone you could share this story with this week?</li>
</ul>

<!-- begin note sdcard -->
<div class="note-div">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note sdcard -->


<h2>Set a time to meet for the next story.</h2>

<ul>
	<li>The next story is about the Prophets David and Isaiah.</li>
	<li>When do you want to meet again?</li>
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

			<td class="social" @click="share('lesson', 'The Prophet Moses: ', '/content/M2/eng/prophet/prophet04.html')">
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