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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply3-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>44.</h1></div>
                        <div class="chapter_title ltr"><h1>Paul Arrested</h1></div>
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

<p class="back">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (Philippians 2:11b; 1 Timothy 2:4-6a)</p>

</div>

<h2 class="back">Caring for each other</h2>

<p><em>Minister to one another&rsquo;s needs in prayer, biblical counsel and encouragement. </em></p>

<ul>
	<li>Ask each person to tell one highlight and explain one challenge they experienced this week.</li>
	<li>Ask, &ldquo;What do you want Jesus to do for you this week?&rdquo; Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating&nbsp; Faithfulness</h2>

<p>Encourage loving accountability to obey Jesus</p>

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

<p class="back"><em>Share BIG vision &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li class="up">Ask the group to tell the story from last week.</li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch Acts 21:27-36 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 21:27-36</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul Arrested</h3>

<p><sup class="versenum">27&nbsp;</sup>When the seven days were nearly over, some Jews from the province of Asia saw Paul at the temple. They stirred up the whole crowd and seized him,<sup class="versenum">28&nbsp;</sup>shouting, &ldquo;Fellow Israelites, help us! This is the man who teaches everyone everywhere against our people and our law and this place. And besides, he has brought Greeks into the temple and defiled this holy place.&rdquo;<sup class="versenum">29&nbsp;</sup>(They had previously seen Trophimus the Ephesian in the city with Paul and assumed that Paul had brought him into the temple.)</p>

<p><sup class="versenum">30&nbsp;</sup>The whole city was aroused, and the people came running from all directions. Seizing Paul, they dragged him from the temple, and immediately the gates were shut.<sup class="versenum">31&nbsp;</sup>While they were trying to kill him, news reached the commander of the Roman troops that the whole city of Jerusalem was in an uproar.<sup class="versenum">32&nbsp;</sup>He at once took some officers and soldiers and ran down to the crowd. When the rioters saw the commander and his soldiers, they stopped beating Paul.</p>

<p><sup class="versenum">33&nbsp;</sup>The commander came up and arrested him and ordered him to be bound with two chains. Then he asked who he was and what he had done.<sup class="versenum">34&nbsp;</sup>Some in the crowd shouted one thing and some another, and since the commander could not get at the truth because of the uproar, he ordered that Paul be taken into the barracks.<sup class="versenum">35&nbsp;</sup>When Paul reached the steps, the violence of the mob was so great he had to be carried by the soldiers.<sup class="versenum">36&nbsp;</sup>The crowd that followed kept shouting, &ldquo;Get rid of him!&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/344.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 21:27-36&nbsp;</button>
    <div class="collapsed"></div>

<p class="up">Discovery Discussion (Everyone answers)</p>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in the story?</li>
	<li>What is being modeled about a Spirit-dependent life, making disciples or leadership?</li>
	<li>How can we live differently now that we know this story?</li>
</ul>

<p><em>Additional questions you can use:</em></p>

<ul>
	<li>How are Jesus&rsquo; followers continuing His work of making disciples and church planting?</li>
	<li>How is the gospel impacting people and society?</li>
	<li>What barriers or obstacles were overcome and how were they overcome?</li>
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
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">Jews from the province of Asia were very familiar with Paul and Trophimus from Paul&rsquo;s long stay in Ephesus. They saw an opportunity to try to stop Paul, so they stirred up the crowd against him. When they came against Paul, he was actually in the temple practicing purification that the Jewish law required. The Jews&rsquo; accusations were false, but their actions demonstrated the common misunderstandings about what Paul was teaching. The Jews were so passionate about their religion that they quickly moved to respond with violence. The Lord used the Roman authorities to rescue Paul from the mob. The prophecies made by the Spirit came true (<span class="popup-link" @click = "popUp('pop1')"> Acts 21:4</span>,&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">4&nbsp;</sup>We sought out the disciples there and stayed with them seven days. Through the Spirit they urged Paul not to go on to Jerusalem.</p>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop2')"> Acts 24:11</span>)&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">11&nbsp;</sup>You can easily verify that no more than twelve days ago I went up to Jerusalem to worship.</p>
</div>
</div>
<!-- end bible --></div>
and Paul was bound in chains by the Gentiles. Even in the midst of violent persecution, the Lord fulfilled His purpose by protecting Paul&rsquo;s life.

<p>&nbsp;</p>

</div>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practice needed skills or previous topics to help prepare to minister to others:<br />
	o Prayer, Care, Share<br />
	o Gospel<br />
	o Foundational Bible Studies.</li>
</ul>

</div>

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
        @keyup="this.addNote('note2Text')"
        id="note2Text"
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

			<td class="social" @click="share('lesson', 'Paul Arrested: ', '/content/M2/eng/multiply3/multiply344.html')">
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