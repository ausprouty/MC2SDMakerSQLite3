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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply2-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>27.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership Expectations</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back"><em>Read a scripture and sing worship songs.</em></p>

<ul>
	<li class="nobreak-final-final">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (<span class="popup-link" @click = "popUp('pop1')"> Philippians 2:11</span>b;&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6</span>a).&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people.&nbsp;</p>
	</div>
	</li>
</ul>

</div>

<h2 class="back">Caring for each other</h2>

<p><em>Minister to one another&rsquo;s needs in prayer, biblical counsel and encouragement. </em></p>

<ul>
	<li>Ask each person to tell one highlight and explain one challenge they experienced this week.</li>
	<li>Ask, &ldquo;What do you want Jesus to do for you this week?&rdquo; Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating&nbsp; Faithfulness</h2>

<p><em>Encourage loving accountability to obey Jesus</em></p>

<ul class="back">
	<li>Ask, &ldquo;What happened as you trusted God with your goals and I will statements?&rdquo;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back"><em>Choose a way to cast vision for who they can become in Christ or what God can do through them by:</em></p>

<ul>
	<li class="back">a scripture that reminds them of the Father&rsquo;s Heart and of the end vision.</li>
	<li class="back">reflecting on the changes in their life since they started following Christ</li>
	<li class="back">reminding them of what God wants to do through them.</li>
</ul>

<p class="back"><span>Our vision is: <em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></span></p>

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


</div>

<ul>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li><span>Ask the group to tell the story from last week.</span></li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch Luke 6:20-26 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 6:20-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">20&nbsp;</sup>Looking at his disciples, he said:</p>

<p>&ldquo;Blessed are you who are poor,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for yours is the kingdom of God.<br />
<sup class="versenum">21&nbsp;</sup>Blessed are you who hunger now,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for you will be satisfied.<br />
Blessed are you who weep now,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for you will laugh.<br />
<sup class="versenum">22&nbsp;</sup>Blessed are you when people hate you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;when they exclude you and insult you<br />
&nbsp;&nbsp;&nbsp;&nbsp;and reject your name as evil,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;because of the Son of Man.</p>

<p><sup class="versenum">23&nbsp;</sup>&ldquo;Rejoice in that day and leap for joy, because great is your reward in heaven. For that is how their ancestors treated the prophets.</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;But woe to you who are rich,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for you have already received your comfort.<br />
<sup class="versenum">25&nbsp;</sup>Woe to you who are well fed now,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for you will go hungry.<br />
Woe to you who laugh now,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for you will mourn and weep.<br />
<sup class="versenum">26&nbsp;</sup>Woe to you when everyone speaks well of you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for that is how their ancestors treated the false prophets.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/227.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 6:20-26&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li><span>What caught your attention or what did you like best? Why?</span></li>
	<li><span>What is new or has developed at this point in Jesus story?</span></li>
	<li><span>What do we learn about the humanity or divinity of Jesus from this passage?</span></li>
	<li><span>How can we live differently now that we know this story?</span></li>
</ul>

<p><span>Additional Questions:</span></p>

<ul class="up">
	<li><span>What are his followers learning?</span></li>
	<li><span>What is Jesus modeling to us about life and ministry or godly leadership?</span></li>
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


<h2 class="up">Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">After appointing the 12 leaders, Jesus then teaches his disciples about the expectations of the Kingdom. A key principle in leadership is to state expectations clearly. What characterizes kingdom living and true community? Jesus explains a list of qualities that are in sharp contrast to the attitudes of the rest of society. These qualities were demonstrated by the example of His own life. The lifestyle of leaders and of the Kingdom community must reflect the character and priorities of Jesus, not those of the world.</p>

</div>

<p class="up"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Matthew 5:1-12</span> </span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<div>
<h3>Introduction to the Sermon on the Mount</h3>

<p><sup class="versenum">1 </sup>Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him,<sup class="versenum">2&nbsp;</sup>and he began to teach them.</p>

<p>He said:</p>

<p><sup class="versenum">3&nbsp;</sup>&ldquo;Blessed are the poor in spirit,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for theirs is the kingdom of heaven.<br />
<sup class="versenum">4&nbsp;</sup>Blessed are those who mourn,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for they will be comforted.<br />
<sup class="versenum">5&nbsp;</sup>Blessed are the meek,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for they will inherit the earth.<br />
<sup class="versenum">6&nbsp;</sup>Blessed are those who hunger and thirst for righteousness,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for they will be filled.<br />
<sup class="versenum">7&nbsp;</sup>Blessed are the merciful,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for they will be shown mercy.<br />
<sup class="versenum">8&nbsp;</sup>Blessed are the pure in heart,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for they will see God.<br />
<sup class="versenum">9&nbsp;</sup>Blessed are the peacemakers,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for they will be called children of God.<br />
<sup class="versenum">10&nbsp;</sup>Blessed are those who are persecuted because of righteousness,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for theirs is the kingdom of heaven.</p>
</div>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me.<sup class="versenum">12&nbsp;</sup>Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you.</p>
</div>
</div>
<!-- end bible --></div>



<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<h2 class="forward">Preparing for the Mission</h2>

<ul class="forward">
	<li>Practice needed skills or previous topics to help prepare to minister to others:
	<ul>
		<li>Prayer, Care, Share</li>
		<li>Gospel</li>
		<li>Foundational Bible Studies.</li>
	</ul>
	</li>
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify people or places you will take the initiative to minister to this week.</li>
	<li>Write &ldquo;I will by when&rdquo; statements and share with your small group.</li>
</ul>

<!-- begin note sdcard -->
<div class="note-div">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note sdcard -->


<h2 class="forward">Praying For the Mission</h2>

<ul class="forward">
	<li>Commit everyone&#39;s goals to the Lord. Ask the Lord to help us be faithful and use us to start a movement of disciple-makers.</li>
</ul>

<h2>Benediction (optional)</h2>


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

			<td class="social" @click="share('lesson', 'Leadership Expectations: ', '/content/M2/eng/multiply2/multiply227.html')">
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