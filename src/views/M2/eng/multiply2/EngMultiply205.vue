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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus as a Young Man and Carpenter/Builder</h1></div>
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
	<li class="back">reminding them of what God wants to do through them</li>
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
	<li class="up"><span>Ask the group to tell the story from last week.</span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch Matthew 13:55-56,&nbsp; Psalm 69:7-12 and Mark 6:3 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Matthew 13:55-56</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">55&nbsp;</sup>&ldquo;Isn&rsquo;t this the carpenter&rsquo;s son? Isn&rsquo;t his mother&rsquo;s name Mary, and aren&rsquo;t his brothers James, Joseph, Simon and Judas?<sup class="versenum">56&nbsp;</sup>Aren&rsquo;t all his sisters with us? Where then did this man get all these things?&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/205.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 13:55-56&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Read Psalm 69:7-12</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<p><sup class="versenum">7&nbsp;</sup>For I endure scorn for your sake,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and shame covers my face.<br />
<sup class="versenum">8&nbsp;</sup>I am a foreigner to my own family,<br />
&nbsp;&nbsp;&nbsp;&nbsp;a stranger to my own mother&rsquo;s children;<br />
<sup class="versenum">9&nbsp;</sup>for zeal for your house consumes me,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the insults of those who insult you fall on me.<br />
<sup class="versenum">10&nbsp;</sup>When I weep and fast,<br />
&nbsp;&nbsp;&nbsp;&nbsp;I must endure scorn;<br />
<sup class="versenum">11&nbsp;</sup>when I put on sackcloth,<br />
&nbsp;&nbsp;&nbsp;&nbsp;people make sport of me.<br />
<sup class="versenum">12&nbsp;</sup>Those who sit at the gate mock me,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and I am the song of the drunkards.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button2" type="button" class="collapsible bible">Read Mark 6:3</button><div class="collapsed" id ="Text2">
<!-- begin bible -->

<p><sup class="versenum">3&nbsp;</sup>Isn&rsquo;t this the carpenter? Isn&rsquo;t this Mary&rsquo;s son and the brother of James, Joseph, Judas and Simon? Aren&rsquo;t his sisters here with us?&rdquo; And they took offense at him.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

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

<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop3')"> Hebrews 5:8-9</span>.&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">8&nbsp;</sup>Son though he was, he learned obedience from what he suffered<sup class="versenum">9&nbsp;</sup>and, once made perfect, he became the source of eternal salvation for all who obey him</p>
	</div>
	</div>
	<!-- end bible --></div>
	We don&rsquo;t have a lot of information about Jesus&rsquo; teenage life, but we can assume he grew up in normal Jewish conditions. He was the oldest brother of a large family (<span class="popup-link" @click = "popUp('pop4')"> Mark 6:3</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">3&nbsp;</sup>Isn&rsquo;t this the carpenter? Isn&rsquo;t this Mary&rsquo;s son and the brother of James, Joseph, Judas and Simon? Aren&rsquo;t his sisters here with us?&rdquo; And they took offense at him.</p>
	</div>
	</div>
	<!-- end bible --></div>
	He would have joined Joseph learning the family trade of being a builder. The bible says that just like us &ldquo;He learned obedience&rdquo; (<span class="popup-link" @click = "popUp('pop5')"> Hebrews 5:8</span>).&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">8&nbsp;</sup>Son though he was, he learned obedience from what he suffered</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;In other words, he accepted correction and responded appropriately. He was insulted and ignored by His brothers. After Joseph died, Jesus, being the oldest son, would become the main provider for the family until His public ministry started.</li>
</ul>

</div>

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

			<td class="social" @click="share('lesson', 'Jesus as a Young Man and Carpenter/Builder: ', '/content/M2/eng/multiply2/multiply205.html')">
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