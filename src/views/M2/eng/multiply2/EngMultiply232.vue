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
                        <div class="chapter_number ltr"><h1>32.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership and Faith</h1></div>
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
	<li>Ask, &ldquo;What do you want Jesus to do for you this week?&rdquo; Pray for each other&rsquo;s needs.</li>
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

<p class="up">Read or watch Mark 4:35-41 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Mark 4:35-41</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Calms the Storm</h3>

<p><sup class="versenum">35&nbsp;</sup>That day when evening came, he said to his disciples, &ldquo;Let us go over to the other side.&rdquo;<sup class="versenum">36&nbsp;</sup>Leaving the crowd behind, they took him along, just as he was, in the boat. There were also other boats with him.<sup class="versenum">37&nbsp;</sup>A furious squall came up, and the waves broke over the boat, so that it was nearly swamped.<sup class="versenum">38&nbsp;</sup>Jesus was in the stern, sleeping on a cushion. The disciples woke him and said to him, &ldquo;Teacher, don&rsquo;t you care if we drown?&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>He got up, rebuked the wind and said to the waves, &ldquo;Quiet! Be still!&rdquo; Then the wind died down and it was completely calm.</p>

<p><sup class="versenum">40&nbsp;</sup>He said to his disciples, &ldquo;Why are you so afraid? Do you still have no faith?&rdquo;</p>

<p><sup class="versenum">41&nbsp;</sup>They were terrified and asked each other, &ldquo;Who is this? Even the wind and the waves obey him!&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/232.mp4" type="button" class="external-movie">
         Watch &nbsp;Mark 4:35-41&nbsp;</button>
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

<p class="up">As the movement grew, Jesus had a hard time finding a place to rest undisturbed. He was so tired that he slept through a storm on the lake! Yes, Jesus got tired just like we do. He was fully human and became like us, His own creations (<span class="popup-link" @click = "popUp('pop3')"> Hebrews 2:17</span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">17&nbsp;</sup>For this reason he had to be made like them, fully human in every way, in order that he might become a merciful and faithful high priest in service to God, and that he might make atonement for the sins of the people.</p>
</div>
</div>
<!-- end bible --></div>
). Jesus started to use the Lake of Galilee as a place to escape and rest with His leaders. A strong wind and furious storm brought water into the boat. The new leaders were struck with fear and cried out to Jesus for help. He rebuked them for not having faith. He expected them to trust that He would not let harm come to them.



</div>



<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop4')"> Luke 8:22-25</span>;&nbsp;</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">22&nbsp;</sup>One day Jesus said to his disciples, &ldquo;Let us go over to the other side of the lake.&rdquo; So they got into a boat and set out.<sup class="versenum">23&nbsp;</sup>As they sailed, he fell asleep. A squall came down on the lake, so that the boat was being swamped, and they were in great danger.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">24&nbsp;</sup>The disciples went and woke him, saying, &ldquo;Master, Master, we&rsquo;re going to drown!&rdquo;</span></p>

	<p><span class="for-enrichment">He got up and rebuked the wind and the raging waters; the storm subsided, and all was calm.<sup class="versenum">25&nbsp;</sup>&ldquo;Where is your faith?&rdquo; he asked his disciples.</span></p>

	<p><span class="for-enrichment">In fear and amazement they asked one another, &ldquo;Who is this? He commands even the winds and the water, and they obey him.&rdquo;</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment"><span class="popup-link" @click = "popUp('pop5')"> Matthew 8:18-27</span>.&nbsp;</span>

	<div class="popup invisible" id="pop5"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<h3><span class="for-enrichment">The Cost of Following Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">18&nbsp;</sup>When Jesus saw the crowd around him, he gave orders to cross to the other side of the lake.<sup class="versenum">19&nbsp;</sup>Then a teacher of the law came to him and said, &ldquo;Teacher, I will follow you wherever you go.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">20&nbsp;</sup>Jesus replied, &ldquo;Foxes have dens and birds have nests, but the Son of Man has no place to lay his head.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">21&nbsp;</sup>Another disciple said to him, &ldquo;Lord, first let me go and bury my father.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">22&nbsp;</sup>But Jesus told him, &ldquo;Follow me, and let the dead bury their own dead.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">23&nbsp;</sup>Then he got into the boat and his disciples followed him.<sup class="versenum">24&nbsp;</sup>Suddenly a furious storm came up on the lake, so that the waves swept over the boat. But Jesus was sleeping.<sup class="versenum">25&nbsp;</sup>The disciples went and woke him, saying, &ldquo;Lord, save us! We&rsquo;re going to drown!&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">26&nbsp;</sup>He replied, &ldquo;You of little faith, why are you so afraid?&rdquo; Then he got up and rebuked the winds and the waves, and it was completely calm.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">27&nbsp;</sup>The men were amazed and asked, &ldquo;What kind of man is this? Even the winds and the waves obey him!&rdquo;</span></p>
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

			<td class="social" @click="share('lesson', 'Leadership and Faith: ', '/content/M2/eng/multiply2/multiply232.html')">
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