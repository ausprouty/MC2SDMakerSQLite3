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
                        <div class="chapter_number ltr"><h1>12.</h1></div>
                        <div class="chapter_title ltr"><h1>Being a Witness </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 11: Being a witness-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop1')"> Psalm 95:1-7</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<p><sup class="versenum">1&nbsp;</sup>Come, let us sing for joy to the <span class="small-caps">Lord;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;let us shout aloud to the Rock of our salvation.<br />
	<sup class="versenum">2&nbsp;</sup>Let us come before him with thanksgiving<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and extol him with music and song.</span></p>
	</div>

	<p><sup class="versenum">3&nbsp;</sup>For the <span class="small-caps">Lord is the great God,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;the great King above all gods.<br />
	<sup class="versenum">4&nbsp;</sup>In his hand are the depths of the earth,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and the mountain peaks belong to him.<br />
	<sup class="versenum">5&nbsp;</sup>The sea is his, for he made it,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and his hands formed the dry land.</span></p>
	</div>

	<p><sup class="versenum">6&nbsp;</sup>Come, let us bow down in worship,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;let us kneel before the <span class="small-caps">Lord our Maker;<br />
	<sup class="versenum">7&nbsp;</sup>for he is our God<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and we are the people of his pasture,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;the flock under his care.</span></p>
	</div>

	<p>Today, if only you would hear his voice,</p>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	and sing songs.</li>
</ul>

</div>

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
<ul>
	<li class="nobreak-final-final"><span class="back">In the book of Acts, we see how believers trained others to be trainers of others. One of the first followers of Jesus was a man named Barnabas. He found a new believer named Paul and helped him. Paul found a young believer named Timothy and took Timothy with him to share the gospel in many places. Later, Paul wrote to Timothy that he should train faithful men in the churches to find other younger Christians to train. Read <span class="popup-link" @click = "popUp('pop2')"> 2 Timothy 2:2</span>.&nbsp;</span>

	<div class="popup invisible" id="pop2"><span class="back"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="back"><sup class="versenum">2&nbsp;</sup>And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.</span></p>
	</div>
	</div>
	</div>

	<p>&nbsp;Jesus to Barnabas to Paul to Timothy to faithful men to other younger Christians. All Christians are called to train trainers who can train trainers to train others. In this way the gospel spreads rapidly!</p>
	</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p><span class="up">After Jesus was raised from the dead, He continued teaching His disciples about God&rsquo;s Kingdom. During His last meeting with them, He reinforced the mission they were being called to and about the help that would be provided to them.</span></p>

</div>

<h2 class="up">Read</h2>

<p><span class="up">Read or watch Acts 1:1-8 two times as everyone listens</span></p>

<button id="Button0" type="button" class="collapsible bible">Read Acts 1:1-8</button><div class="collapsed" id ="Text0">

<p><span class="up"><sup class="versenum">1</sup> In my former book, Theophilus, I wrote about all that Jesus began to do and to teach<sup class="versenum"> 2 </sup>until the day he was taken up to heaven, after giving instructions through the Holy Spirit to the apostles he had chosen.<sup class="versenum">3 </sup>After his suffering, he presented himself to them and gave many convincing proofs that he was alive. He appeared to them over a period of forty days and spoke about the kingdom of God.<sup class="versenum">4 </sup>On one occasion, while he was eating with them, he gave them this command: &ldquo;Do not leave Jerusalem, but wait for the gift my Father promised, which you have heard me speak about.<sup class="versenum">5 </sup>For John baptized with water, but in a few days you will be baptized with the Holy Spirit.&rdquo;</span></p>

<p><span class="up"><sup class="versenum">6 </sup>Then they gathered around him and asked him, &ldquo;Lord, are you at this time going to restore the kingdom to Israel?&rdquo;</span></p>

<p><span class="up"><sup class="versenum">7 </sup>He said to them: &ldquo;It is not for you to know the times or dates the Father has set by his own authority.<sup class="versenum">8 </sup>But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;</span></p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/111.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 1:1-8&nbsp;</button>
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
<p class="up">To follow Jesus means that we will obey His command to be His witnesses. But we can only do what is needed with the help of the power of the Holy Spirit in our lives. Only as He empowers us, can we be effective witnesses. God&rsquo;s desire is that we witness to everyone--those like us and those not like us; those near to us and those who live all over the world. Knowing how to share the gospel is a key skill in field 2 of the Kingdom Growth Process.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Remind them: Success in witnessing is simply taking the initiative to share Christ in the power of the Holy Spirit and leaving the results to God.</li>
	<li>Review the Spiritual Breathing principle and give personal opportunity to Exhale and Inhale</li>
	<li>Give time for praying to be controlled and empowered by the Holy Spirit</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you will take the initiative to minister to this week.
	<ul class="forward">
		<li>Use what you learned this week with at least 3 of these people.</li>
	</ul>
	</li>
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

<div class="for-enrichment">
<p>For further enrichment: Read <em><!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/tc/tc05', '#1')">
    Transferable Concept #5: How you can be a fruitful witness 
</span>
<!-- end linkInternal sdcard-->
</em> and discuss with another group member.</p>
</div>


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

			<td class="social" @click="share('lesson', 'Being a Witness : ', '/content/M2/eng/multiply1/multiply111.html')">
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