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
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>Real Faith</h1></div>
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

<p class="up">Read or watch John 4:43-54 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 4:43-54</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Heals an Official&rsquo;s Son</h3>

<p><sup class="versenum">43&nbsp;</sup>After the two days he left for Galilee.<sup class="versenum">44&nbsp;</sup>(Now Jesus himself had pointed out that a prophet has no honor in his own country.)<sup class="versenum">45&nbsp;</sup>When he arrived in Galilee, the Galileans welcomed him. They had seen all that he had done in Jerusalem at the Passover Festival, for they also had been there.</p>

<p><sup class="versenum">46&nbsp;</sup>Once more he visited Cana in Galilee, where he had turned the water into wine. And there was a certain royal official whose son lay sick at Capernaum.<sup class="versenum">47&nbsp;</sup>When this man heard that Jesus had arrived in Galilee from Judea, he went to him and begged him to come and heal his son, who was close to death.</p>

<p><sup class="versenum">48&nbsp;</sup>&ldquo;Unless you people see signs and wonders,&rdquo; Jesus told him, &ldquo;you will never believe.&rdquo;</p>

<p><sup class="versenum">49&nbsp;</sup>The royal official said, &ldquo;Sir, come down before my child dies.&rdquo;</p>

<p><sup class="versenum">50&nbsp;</sup>&ldquo;Go,&rdquo; Jesus replied, &ldquo;your son will live.&rdquo;</p>

<p>The man took Jesus at his word and departed.<sup class="versenum">51&nbsp;</sup>While he was still on the way, his servants met him with the news that his boy was living.<sup class="versenum">52&nbsp;</sup>When he inquired as to the time when his son got better, they said to him, &ldquo;Yesterday, at one in the afternoon, the fever left him.&rdquo;</p>

<p><sup class="versenum">53&nbsp;</sup>Then the father realized that this was the exact time at which Jesus had said to him, &ldquo;Your son will live.&rdquo; So he and his whole household believed.</p>

<p><sup class="versenum">54&nbsp;</sup>This was the second sign Jesus performed after coming from Judea to Galilee.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/214.mp4" type="button" class="external-movie">
         Watch &nbsp;John 4:43-54&nbsp;</button>
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

<p class="up">Jesus travels north to his hometown of Nazareth in the district of Galilee. Word of His outburst at the temple had spread and all the people are wondering about Him. While Jesus revisited Cana, some of the news about Him reached a desperate royal official in the large city of Capernaum. This official was most likely a Roman who hoped Jesus could heal his child. Up until now, there was no record of Jesus healing anyone, but that did not stop this man from putting his faith in Jesus. When Jesus promised that his child was healed, the royal official believed and obeyed Jesus. The result was that his son was healed and his whole family believed and were saved. Faith is taking Jesus at His word, believing Him and then acting in obedience.</p>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">Further Study: <span class="popup-link" @click = "popUp('pop3')"> Matthew 4:17</span>; </span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --> </span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>From that time on Jesus began to preach, &ldquo;Repent, for the kingdom of heaven has come near.&rdquo;</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --></span></div>
	<span class="for-enrichment"> &nbsp;<span class="popup-link" @click = "popUp('pop4')"> Mark 1:14-15</span>;&nbsp; </span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --> </span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">14&nbsp;</sup>After John was put in prison, Jesus went into Galilee, proclaiming the good news of God.<sup class="versenum">15&nbsp;</sup>&ldquo;The time has come,&rdquo; he said. &ldquo;The kingdom of God has come near. Repent and believe the good news!&rdquo;</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --></span></div>
	<span class="for-enrichment"><span class="popup-link" @click = "popUp('pop5')"> Luke 4:14-15</span>.&nbsp; </span>

	<div class="popup invisible" id="pop5"><span class="for-enrichment"><!-- begin bible --> </span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">14&nbsp;</sup>Jesus returned to Galilee in the power of the Spirit, and news about him spread through the whole countryside.<sup class="versenum">15&nbsp;</sup>He was teaching in their synagogues, and everyone praised him.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --></span></div>
	</li>
</ul>

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

			<td class="social" @click="share('lesson', 'Real Faith: ', '/content/M2/eng/multiply2/multiply214.html')">
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