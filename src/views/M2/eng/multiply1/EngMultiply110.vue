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
                        <div class="chapter_number ltr"><h1>11.</h1></div>
                        <div class="chapter_title ltr"><h1>My Story</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 10: My Story-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop1')"> Romans 11:33-36</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">33&nbsp;</sup>Oh, the depth of the riches of the wisdom and knowledge of God!<br />
	&nbsp;&nbsp;&nbsp;&nbsp;How unsearchable his judgments,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and his paths beyond tracing out!<br />
	<sup class="versenum">34&nbsp;</sup>&ldquo;Who has known the mind of the Lord?<br />
	&nbsp;&nbsp;&nbsp;&nbsp;Or who has been his counselor?&rdquo;<br />
	<sup class="versenum">35&nbsp;</sup>&ldquo;Who has ever given to God,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;that God should repay them?&rdquo;<br />
	<sup class="versenum">36&nbsp;</sup>For from him and through him and for him are all things.<br />
	&nbsp;&nbsp;&nbsp;&nbsp;To him be the glory forever! Amen.</p>
	<!-- end bible --></div>
	and sing 1-2 songs.</li>
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
	<li class="nobreak-final-final">In<span class="popup-link" @click = "popUp('pop2')">  John 3:8</span>,&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	
	<p><sup class="versenum">8&nbsp;</sup>The wind blows wherever it pleases. You hear its sound, but you cannot tell where it comes from or where it is going. So it is with everyone born of the Spirit.&rdquo;</p>
	
	<!-- end bible --></div>
	the Spirit of God is described as a wind. We cannot control Him or make Him move; He blows where He wills. We cannot create movements, only the Spirit of God can. But we can position ourselves so that when He does move, we are ready to move with Him. The simple skills you&rsquo;ve been learning help do just that. The good news is this: the Spirit of God is at work everywhere! Let&rsquo;s keep preparing ourselves and praying for the Spirit to move.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">Paul had been arrested because he was falsely accused by the Jewish leaders of breaking a temple law. During his defence before the Governor, Paul shared the story of how he came to know Christ.</p>

</div>

<h2 class="up">Read</h2>

<p>Read or watch Acts 22:1-21 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Acts 22:1-21</button><div class="collapsed" id ="Text0">

<p><sup>1&nbsp;</sup>&ldquo;Brothers and fathers, listen now to my defense.&rdquo;</p>

<p><sup>2&nbsp;</sup>When they heard him speak to them in Aramaic, they became very quiet.</p>

<p class="bible">Then Paul said:<sup class="versenum">3&nbsp;</sup>&ldquo;I am a Jew, born in Tarsus of Cilicia, but brought up in this city. I studied under Gamaliel and was thoroughly trained in the law of our ancestors. I was just as zealous for God as any of you are today.<sup class="versenum">4&nbsp;</sup>I persecuted the followers of this Way to their death, arresting both men and women and throwing them into prison,<sup class="versenum">5&nbsp;</sup>as the high priest and all the Council can themselves testify. I even obtained letters from them to their associates in Damascus, and went there to bring these people as prisoners to Jerusalem to be punished.</p>

<p><sup class="versenum">6&nbsp;</sup>&ldquo;About noon as I came near Damascus, suddenly a bright light from heaven flashed around me.<sup class="versenum">7&nbsp;</sup>I fell to the ground and heard a voice say to me, &lsquo;Saul! Saul! Why do you persecute me?&rsquo;</p>

<p><sup class="versenum">8&nbsp;</sup>&ldquo;&lsquo;Who are you, Lord?&rsquo; I asked.</p>

<p>&ldquo; &lsquo;I am Jesus of Nazareth, whom you are persecuting,&rsquo; he replied.<sup class="versenum">9&nbsp;</sup>My companions saw the light, but they did not understand the voice of him who was speaking to me.</p>

<p><sup class="versenum">10&nbsp;</sup>&ldquo;&lsquo;What shall I do, Lord?&rsquo; I asked.</p>

<p>&ldquo; &lsquo;Get up,&rsquo; the Lord said, &lsquo;and go into Damascus. There you will be told all that you have been assigned to do.&rsquo;<sup class="versenum">11&nbsp;</sup>My companions led me by the hand into Damascus, because the brilliance of the light had blinded me.</p>

<p><sup class="versenum">12&nbsp;</sup>&ldquo;A man named Ananias came to see me. He was a devout observer of the law and highly respected by all the Jews living there.<sup class="versenum">13&nbsp;</sup>He stood beside me and said, &lsquo;Brother Saul, receive your sight!&rsquo; And at that very moment I was able to see him.</p>

<p><sup class="versenum">14&nbsp;</sup>&ldquo;Then he said: &lsquo;The God of our ancestors has chosen you to know his will and to see the Righteous One and to hear words from his mouth.<sup class="versenum">15&nbsp;</sup>You will be his witness to all people of what you have seen and heard.<sup class="versenum">16&nbsp;</sup>And now what are you waiting for? Get up, be baptized and wash your sins away, calling on his name.&rsquo;</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;When I returned to Jerusalem and was praying at the temple, I fell into a trance<sup class="versenum">18&nbsp;</sup>and saw the Lord speaking to me. &lsquo;Quick!&rsquo; he said. &lsquo;Leave Jerusalem immediately, because the people here will not accept your testimony about me.&rsquo;</p>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;&lsquo;Lord,&rsquo; I replied, &lsquo;these people know that I went from one synagogue to another to imprison and beat those who believe in you.<sup class="versenum">20&nbsp;</sup>And when the blood of your martyr Stephen was shed, I stood there giving my approval and guarding the clothes of those who were killing him.&rsquo;</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;Then the Lord said to me, &lsquo;Go; I will send you far away to the Gentiles.&rsquo; &rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/110.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 22:1-21&nbsp;</button>
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

<p class="up">Paul&rsquo;s story (testimony) can be summarized in 3 parts:</p>

<ul>
	<li class="up">his life before meeting Christ,</li>
	<li class="up">how he met Christ, and&nbsp;</li>
	<li class="up">his life after meeting Christ.&nbsp;</li>
</ul>

<p class="up">This pattern is still an effective way to tell others what Jesus has done in our lives. Our stories are a powerful witness of the benefits of knowing the Lord.&nbsp;This is the first skill in Field 2 of the Kingdom Growth process.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li>Give a modern example by telling your own story and highlighting the 3 parts</li>
	<li>Practice sharing their story with a partner</li>
	<li>Have them choose 1 word that describes the 3 parts of their story</li>
	<li>Have them expand it by writing down 2-3 sentences for each of the 3 parts</li>
	<li>Let them practice telling their story with a partner. After 3 minutes, have them give feedback and then switch.</li>
	<li>If time allows, have them switch partners and repeat the same process</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you will take the initiative to minister to this week.
	<ul>
		<li>Use what you learned this week with at least 3 of these people.</li>
	</ul>
	</li>
	<li>Write &ldquo;I will by when&rdquo; statements and tell them to your small group.</li>
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

			<td class="social" @click="share('lesson', 'My Story: ', '/content/M2/eng/multiply1/multiply110.html')">
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