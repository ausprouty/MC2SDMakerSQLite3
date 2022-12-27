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
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>Committing to One Another </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 13: Commiting to one another-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop1')"> Psalm 100</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<h4>A psalm. For giving grateful praise.</h4>

	<p><sup class="versenum">1&nbsp;</sup>Shout for joy to the <span class="small-caps">Lord, all the earth.<br />
	<sup class="versenum">2&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;Worship the <span class="small-caps">Lord with gladness;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;come before him with joyful songs.<br />
	<sup class="versenum">3&nbsp;</sup>Know that the <span class="small-caps">Lord is God.<br />
	&nbsp;&nbsp;&nbsp;&nbsp;It is he who made us, and we are his;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;we are his people, the sheep of his pasture.</span></span></span></p>
	</div>

	<p><sup class="versenum">4&nbsp;</sup>Enter his gates with thanksgiving<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and his courts with praise;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;give thanks to him and praise his name.<br />
	<sup class="versenum">5&nbsp;</sup>For the <span class="small-caps">Lord is good and his love endures forever;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;his faithfulness continues through all generations.</span></p>
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
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop2')"> Ephesians 2:1-10</span>.&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>As for you, you were dead in your transgressions and sins,<sup class="versenum">2&nbsp;</sup>in which you used to live when you followed the ways of this world and of the ruler of the kingdom of the air, the spirit who is now at work in those who are disobedient.<sup class="versenum">3&nbsp;</sup>All of us also lived among them at one time, gratifying the cravings of our flesh and following its desires and thoughts. Like the rest, we were by nature deserving of wrath.<sup class="versenum">4&nbsp;</sup>But because of his great love for us, God, who is rich in mercy,<sup class="versenum">5&nbsp;</sup>made us alive with Christ even when we were dead in transgressions&mdash;it is by grace you have been saved.<sup class="versenum">6&nbsp;</sup>And God raised us up with Christ and seated us with him in the heavenly realms in Christ Jesus,<sup class="versenum">7&nbsp;</sup>in order that in the coming ages he might show the incomparable riches of his grace, expressed in his kindness to us in Christ Jesus.<sup class="versenum">8&nbsp;</sup>For it is by grace you have been saved, through faith&mdash;and this is not from yourselves, it is the gift of God&mdash;<sup class="versenum">9&nbsp;</sup>not by works, so that no one can boast.<sup class="versenum">10&nbsp;</sup>For we are God&rsquo;s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.</p>
	</div>
	</div>
	<!-- end bible --></div>
	Isn&rsquo;t it amazing? We were dead in our sins, but God has made us alive. He did all of this so that you could accomplish the good works He has prepared for you. Our lives are full of purpose and meaning!&nbsp;</li>
</ul>

<p class="back">Let&rsquo;s encourage each by reminding ourselves of these truths.&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">During a Jewish feast called Pentecost, Jews from all over the world were in Jerusalem. God sent the Holy Spirit on 120 of His followers who had gathered together. Through the Spirit&rsquo;s power, the 120 followers began speaking in the languages of the visitors from all over the world. Peter began preaching to a crowd about the death and resurrection of Jesus, proving He was the Messiah. As a result, 3,000 people believed and were baptized. But what came next after they believed?&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch Acts 2:41-47 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Acts 2:41-47</button><div class="collapsed" id ="Text0">

<p><sup>41&nbsp;</sup>Those who accepted his message were baptized, and about three thousand were added to their number that day.</p>

<p><sup class="versenum">42&nbsp;</sup>They devoted themselves to the apostles&rsquo; teaching and to fellowship, to the breaking of bread and to prayer.<sup class="versenum">43&nbsp;</sup>Everyone was filled with awe at the many wonders and signs performed by the apostles.<sup class="versenum">44&nbsp;</sup>All the believers were together and had everything in common.<sup class="versenum">45&nbsp;</sup>They sold property and possessions to give to anyone who had need.<sup class="versenum">46&nbsp;</sup>Every day they continued to meet together in the temple courts. They broke bread in their homes and ate together with glad and sincere hearts,<sup class="versenum">47&nbsp;</sup>praising God and enjoying the favor of all the people. And the Lord added to their number daily those who were being saved.</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/113.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 2:42-47&nbsp;</button>
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
<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop3')"> Matthew 16:18</span>.&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">18&nbsp;</sup>And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.</p>
	</div>
	</div>
	<!-- end bible --></div>
	The Holy Spirit led the early believers to meet together regularly for worship, prayer, fellowship, study of God&rsquo;s word, loving one another and reaching out to those who did not yet know Christ. In every location of the book of Acts, people became followers of Christ and they made this same commitment to one another. This is a description of a local church!&nbsp;The gathering together of believers is also the main outcome of the Kingdom Growth process.&nbsp; Each new group of believers should work towards repeating the process in other new places.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul>
	<li class="forward">Practice drawing the church health circle as an easy way to remember all the characteristics of church. Include: worship, fellowship, studying God&rsquo;s word, prayer, Lord&rsquo;s Supper, baptism, ministry, witness, giving and caring leaders.</li>
	<li class="forward">Discuss the following: &ldquo;Does this group want to make that same commitment to one another? To be the Lord&rsquo;s church in this place?&rdquo;&nbsp;</li>
</ul>

</div>

<ul>
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul>
	<li class="forward">What is God revealing as your next steps this week with him and others?</li>
	<li class="forward">Share this step with the group and ask someone to pray for you as you take this step in the power of the Holy Spirit.</li>
	<li class="forward">Commit everyone&rsquo;s goals to the Lord. Ask the Lord to help us be faithful and use us to start a movement of people living the MyFriends Lifestyle.&nbsp;</li>
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
<p>For further enrichment: Read <!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/tc/tc08', '#1')">
    Transferable Concept #8: How to Love By Faith 
</span>
<!-- end linkInternal sdcard-->
 and discuss with another group member.</p>
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

			<td class="social" @click="share('lesson', 'Committing to One Another : ', '/content/M2/eng/multiply1/multiply113.html')">
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