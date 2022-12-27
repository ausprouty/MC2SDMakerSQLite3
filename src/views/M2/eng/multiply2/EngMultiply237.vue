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
                        <div class="chapter_number ltr"><h1>37.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership and Fear</h1></div>
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

<p class="back"><span><span>Our vision is: <em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></span></span></p>

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
	<li><span><span>Ask the group to tell the story from last week.</span></span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch Matthew 14:22-33 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Matthew 14:22-33</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Walks on the Water</h3>

<p><sup class="versenum">22&nbsp;</sup>Immediately Jesus made the disciples get into the boat and go on ahead of him to the other side, while he dismissed the crowd.<sup class="versenum">23&nbsp;</sup>After he had dismissed them, he went up on a mountainside by himself to pray. Later that night, he was there alone,<sup class="versenum">24&nbsp;</sup>and the boat was already a considerable distance from land, buffeted by the waves because the wind was against it.</p>

<p><sup class="versenum">25&nbsp;</sup>Shortly before dawn Jesus went out to them, walking on the lake.<sup class="versenum">26&nbsp;</sup>When the disciples saw him walking on the lake, they were terrified. &ldquo;It&rsquo;s a ghost,&rdquo; they said, and cried out in fear.</p>

<p><sup class="versenum">27&nbsp;</sup>But Jesus immediately said to them: &ldquo;Take courage! It is I. Don&rsquo;t be afraid.&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;Lord, if it&rsquo;s you,&rdquo; Peter replied, &ldquo;tell me to come to you on the water.&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>&ldquo;Come,&rdquo; he said.</p>

<p>Then Peter got down out of the boat, walked on the water and came toward Jesus.<sup class="versenum">30&nbsp;</sup>But when he saw the wind, he was afraid and, beginning to sink, cried out, &ldquo;Lord, save me!&rdquo;</p>

<p><sup class="versenum">31&nbsp;</sup>Immediately Jesus reached out his hand and caught him. &ldquo;You of little faith,&rdquo; he said, &ldquo;why did you doubt?&rdquo;</p>

<p><sup class="versenum">32&nbsp;</sup>And when they climbed into the boat, the wind died down.<sup class="versenum">33&nbsp;</sup>Then those who were in the boat worshiped him, saying, &ldquo;Truly you are the Son of God.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/237.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 14:22-33&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li><span><span>What caught your attention or what did you like best? Why?</span></span></li>
	<li><span><span>What is new or has developed at this point in Jesus story?</span></span></li>
	<li><span><span>What do we learn about the humanity or divinity of Jesus from this passage?</span></span></li>
	<li><span><span>How can we live differently now that we know this story?</span></span></li>
</ul>

<p><span><span>Additional Questions:</span></span></p>

<ul class="up">
	<li><span><span>What are his followers learning?</span></span></li>
	<li><span><span>What is Jesus modeling to us about life and ministry or godly leadership?</span></span></li>
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

<p class="up">Jesus made His disciples go out in the boat to cross the water, while He sought time alone with the Father. Amazingly, He intentionally sent them into a storm and watched his leaders struggle for a while. Then Jesus joined the disciples by walking on the water to where they were. Being tired and afraid, they started screaming &ldquo;It&rsquo;s a ghost!&rdquo; As Jesus tries to comfort them, Peter shows his bold faith by wanting to go be with Jesus out on the water. Peter did well until he took his eyes off Jesus. As Peter cries out to be saved, Jesus immediately rescues him. The twelve apostles knew they were in the presence of the Son of God and responded by worshipping Him.</p>

</div>



<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Mark 6:45-52</span>;&nbsp;</span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">45&nbsp;</sup>Immediately Jesus made his disciples get into the boat and go on ahead of him to Bethsaida, while he dismissed the crowd.<sup class="versenum">46&nbsp;</sup>After leaving them, he went up on a mountainside to pray.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">47&nbsp;</sup>Later that night, the boat was in the middle of the lake, and he was alone on land.<sup class="versenum">48&nbsp;</sup>He saw the disciples straining at the oars, because the wind was against them. Shortly before dawn he went out to them, walking on the lake. He was about to pass by them,<sup class="versenum">49&nbsp;</sup>but when they saw him walking on the lake, they thought he was a ghost. They cried out,<sup class="versenum">50&nbsp;</sup>because they all saw him and were terrified.</span></p>

	<p><span class="for-enrichment">Immediately he spoke to them and said, &ldquo;Take courage! It is I. Don&rsquo;t be afraid.&rdquo;<sup class="versenum">51&nbsp;</sup>Then he climbed into the boat with them, and the wind died down. They were completely amazed,<sup class="versenum">52&nbsp;</sup>for they had not understood about the loaves; their hearts were hardened.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment"><span class="popup-link" @click = "popUp('pop4')"> John 6:16-21</span>.</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">16&nbsp;</sup>When evening came, his disciples went down to the lake,<sup class="versenum">17&nbsp;</sup>where they got into a boat and set off across the lake for Capernaum. By now it was dark, and Jesus had not yet joined them.<sup class="versenum">18&nbsp;</sup>A strong wind was blowing and the waters grew rough.<sup class="versenum">19&nbsp;</sup>When they had rowed about three or four miles, they saw Jesus approaching the boat, walking on the water; and they were frightened.<sup class="versenum">20&nbsp;</sup>But he said to them, &ldquo;It is I; don&rsquo;t be afraid.&rdquo;<sup class="versenum">21&nbsp;</sup>Then they were willing to take him into the boat, and immediately the boat reached the shore where they were heading.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
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

			<td class="social" @click="share('lesson', 'Leadership and Fear: ', '/content/M2/eng/multiply2/multiply237.html')">
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