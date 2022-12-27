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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply1-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>Kingdom Growth Process</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 8: Kingdom Growth Process-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="back">Read <span class="popup-link" @click = "popUp('pop1')"> Psalm 92:1-2</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<div>
	<h4>A psalm. A song. For the Sabbath day.</h4>

	<p><sup class="versenum">1&nbsp;</sup>It is good to praise the <span class="small-caps">Lord<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and make music to your name, O Most High,<br />
	<sup class="versenum">2&nbsp;</sup>proclaiming your love in the morning<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and your faithfulness at night,</span></p>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	and sing 1-2 songs</li>
</ul>

</div>

<ul>
</ul>

<h2 class="back">Caring for each other</h2>

<ul class="back">
	<li>What is one highlight from this week?</li>
	<li>What is one challenge from this past week?</li>
	<li>What do you want Jesus to do for you this week?</li>
	<li>Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating God&#39;s Faithfulness</h2>

<ul class="back">
	<li>What happened as you trusted God with your goals and <em>I will</em> statements?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">All of us face fears.&nbsp; Even Jesus&rsquo; best leaders found in the bible faced fears.&nbsp; One of the young leaders who struggled with fears was Timothy.&nbsp; His mentor, Paul, encouraged him by reminded him of the gift of the Holy Spirit in his life.&nbsp; Paul wrote to him in a letter, &ldquo;God did not give us a spirit of fear, but a spirit of power, of love and of self-discipline. (2 Timothy 1:7).&nbsp; Because this is true, we do not have to be ashamed or afraid to talk about Jesus and what he has done for us.&nbsp; Let&rsquo;s keep encouraging each other to live by what is true of us.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">As Jesus trained his disciples for ministry, he taught them many spiritual principles about the Kingdom of God.&nbsp; These teachings were given in parables. On one occasion, Jesus shared a parable that described how the Kingdom of God grows.</p>

</div>

<h2 class="up">Read</h2>

<p>Read or watch Mark 4:26-29 two times as everyone listens.</p>

<button id="Button0" type="button" class="collapsible bible">Read Mark 4:26-29</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<p><sup class="versenum">26&nbsp;</sup>He also said, &ldquo;This is what the kingdom of God is like. A man scatters seed on the ground.<sup class="versenum">27&nbsp;</sup>Night and day, whether he sleeps or gets up, the seed sprouts and grows, though he does not know how.<sup class="versenum">28&nbsp;</sup>All by itself the soil produces grain&mdash;first the stalk, then the head, then the full kernel in the head.<sup class="versenum">29&nbsp;</sup>As soon as the grain is ripe, he puts the sickle to it, because the harvest has come.&rdquo;</p>
</div>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply1/108B.mp4" type="button" class="external-movie">
         Watch &nbsp;Mark 4:26-29&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention (or what did you like best) and why?</li>
	<li>What did you learn about Jesus?</li>
	<li>What did you learn about people?</li>
	<li>How will you obey Jesus now that you know this?</li>
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


<h2 class="up">Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>[Use the 4 Fields diagram to explain]</p>

<p style="text-align:center"><img alt="4 fields kingdom growth process" src="@/assets/images/eng/custom/4fields_complete.jpg" style="width:100%" /></p>

<p>From this story we learn that there is a process of how the Kingdom Grows.&nbsp; It can be illustrated by 4 kinds of fields.&nbsp;</p>

<ul>
	<li>Field 1 &ndash; the farmer goes to an empty field (this is called entry strategy).</li>
	<li>Field 2 &ndash; the farmer sows seed (this is called evangelism).&nbsp;</li>
	<li>Field 3 &ndash; the seed grows (this is called discipleship).&nbsp;</li>
	<li>Field 4 &ndash; the harvest is gathered together (this is called church or group formation).&nbsp;</li>
</ul>

<p>Jesus also shared that there is an unseen actor behind the scenes causing the growth (we know this to be the Holy Spirit).&nbsp; Both the farmer and Spirit work together.&nbsp; This parable helps us understand what the Kingdom of God is like.</p>

<p>&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li>Practice telling the story and drawing the 4 fields Kingdom Growth Process.</li>
</ul>

<p style="text-align:center"><img alt="" src="@/assets/images/eng/custom/4fields.png" style="height:155px; width:200px" /></p>

<ul class="forward">
	<li>Update your Network List with names of additional people if needed.</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you can pray and care for using the Amazing Question.</li>
	<li>Write &ldquo;I will by when&rdquo; statements and share with your small group.</li>
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


<h2 class="forward">Praying for the Mission</h2>

<ul class="forward">
	<li>Commit everyone&#39;s goals to the Lord. Ask the Lord to help us be faithful and use us to start a movement of disciple-makers.</li>
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

			<td class="social" @click="share('lesson', 'Kingdom Growth Process: ', '/content/M2/eng/multiply1/multiply108B.html')">
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