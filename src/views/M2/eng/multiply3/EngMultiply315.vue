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
                        <div class="chapter_number ltr"><h1>15.</h1></div>
                        <div class="chapter_title ltr"><h1>The Spirit Directs Philip to a Strategic Person of Peace</h1></div>
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
	<li class="up">Read or watch Acts 8:26-40 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 8:26-40</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Philip and the Ethiopian</h3>

<p><sup class="versenum">26&nbsp;</sup>Now an angel of the Lord said to Philip, &ldquo;Go south to the road&mdash;the desert road&mdash;that goes down from Jerusalem to Gaza.&rdquo;<sup class="versenum">27&nbsp;</sup>So he started out, and on his way he met an Ethiopian eunuch, an important official in charge of all the treasury of the Kandake (which means &ldquo;queen of the Ethiopians&rdquo;). This man had gone to Jerusalem to worship,<sup class="versenum">28&nbsp;</sup>and on his way home was sitting in his chariot reading the Book of Isaiah the prophet.<sup class="versenum">29&nbsp;</sup>The Spirit told Philip, &ldquo;Go to that chariot and stay near it.&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>Then Philip ran up to the chariot and heard the man reading Isaiah the prophet. &ldquo;Do you understand what you are reading?&rdquo; Philip asked.</p>

<p><sup class="versenum">31&nbsp;</sup>&ldquo;How can I,&rdquo; he said, &ldquo;unless someone explains it to me?&rdquo; So he invited Philip to come up and sit with him.</p>

<p><sup class="versenum">32&nbsp;</sup>This is the passage of Scripture the eunuch was reading:</p>

<p>&ldquo;He was led like a sheep to the slaughter,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and as a lamb before its shearer is silent,<br />
&nbsp;&nbsp;&nbsp;&nbsp;so he did not open his mouth.<br />
<sup class="versenum">33&nbsp;</sup>In his humiliation he was deprived of justice.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Who can speak of his descendants?<br />
&nbsp;&nbsp;&nbsp;&nbsp;For his life was taken from the earth.&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>The eunuch asked Philip, &ldquo;Tell me, please, who is the prophet talking about, himself or someone else?&rdquo;<sup class="versenum">35&nbsp;</sup>Then Philip began with that very passage of Scripture and told him the good news about Jesus.</p>

<p><sup class="versenum">36&nbsp;</sup>As they traveled along the road, they came to some water and the eunuch said, &ldquo;Look, here is water. What can stand in the way of my being baptized?&rdquo;<sup class="versenum">[37]&nbsp;</sup><sup class="versenum">38&nbsp;</sup>And he gave orders to stop the chariot. Then both Philip and the eunuch went down into the water and Philip baptized him.<sup class="versenum">39&nbsp;</sup>When they came up out of the water, the Spirit of the Lord suddenly took Philip away, and the eunuch did not see him again, but went on his way rejoicing.<sup class="versenum">40&nbsp;</sup>Philip, however, appeared at Azotus and traveled about, preaching the gospel in all the towns until he reached Caesarea.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/315.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 8:26-40&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

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
<p class="up">The Spirit interrupted Philip&rsquo;s successful ministry in Samaria by sending him to the southernmost point of Israel to meet a very strategic person of peace. Philip showed his obedient heart and a sensitivity to the Spirit by going without knowing the details of why he was being sent. The Ethiopian leader he met was a non-Jewish man who had accepted the Jewish faith. As a non-Jewish person and a eunuch (someone who had been castrated in order to serve a female court), he would not be considered fully acceptable to the Jewish faith. But Jesus was ready to accept him! The Lord had been preparing the Ethiopian&rsquo;s heart and used Philip to tell him the good news. Philip followed the same pattern of baptism that he learned while in Jerusalem and also used in Samaria. The Ethiopian believed and was immediately baptized. Philip shared the gospel in all the cities along the coast of Israel. He finally settled in Caesarea, which was the large international port city of Israel and the seat of Roman power in the province.</p>

</div>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>Practice needed skills or previous topics to help prepare to minister to others:</p>

<ul>
	<li>Prayer, Care, Share</li>
	<li>Gospel</li>
	<li>Foundational Bible Studies.</li>
</ul>

</div>

<ul class="forward">
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

			<td class="social" @click="share('lesson', 'Library: ', '/content/M2/eng/multiply3/multiply315.html')">
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