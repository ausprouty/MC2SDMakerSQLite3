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
                        <div class="chapter_number ltr"><h1>38.</h1></div>
                        <div class="chapter_title ltr"><h1>Harvest of a transformed life</h1></div>
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

<p class="up">Read or watch Mark 7:31-8:9 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Mark 7:31-8:9</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Heals a Deaf and Mute Man</h3>

<p><sup class="versenum">31&nbsp;</sup>Then Jesus left the vicinity of Tyre and went through Sidon, down to the Sea of Galilee and into the region of the Decapolis.<sup class="versenum">32&nbsp;</sup>There some people brought to him a man who was deaf and could hardly talk, and they begged Jesus to place his hand on him.</p>

<p><sup class="versenum">33&nbsp;</sup>After he took him aside, away from the crowd, Jesus put his fingers into the man&rsquo;s ears. Then he spit and touched the man&rsquo;s tongue.<sup class="versenum">34&nbsp;</sup>He looked up to heaven and with a deep sigh said to him, <em>&ldquo;Ephphatha!&rdquo;</em> (which means &ldquo;Be opened!&rdquo;).<sup class="versenum">35&nbsp;</sup>At this, the man&rsquo;s ears were opened, his tongue was loosened and he began to speak plainly.</p>

<p><sup class="versenum">36&nbsp;</sup>Jesus commanded them not to tell anyone. But the more he did so, the more they kept talking about it.<sup class="versenum">37&nbsp;</sup>People were overwhelmed with amazement. &ldquo;He has done everything well,&rdquo; they said. &ldquo;He even makes t</p>

<h3>Jesus Feeds the Four Thousand</h3>

<p><sup class="versenum">8:1 </sup>During those days another large crowd gathered. Since they had nothing to eat, Jesus called his disciples to him and said,<sup class="versenum">2&nbsp;</sup>&ldquo;I have compassion for these people; they have already been with me three days and have nothing to eat.<sup class="versenum">3&nbsp;</sup>If I send them home hungry, they will collapse on the way, because some of them have come a long distance.&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>His disciples answered, &ldquo;But where in this remote place can anyone get enough bread to feed them?&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;How many loaves do you have?&rdquo; Jesus asked.</p>

<p>&ldquo;Seven,&rdquo; they replied.</p>

<p><sup class="versenum">6&nbsp;</sup>He told the crowd to sit down on the ground. When he had taken the seven loaves and given thanks, he broke them and gave them to his disciples to distribute to the people, and they did so.<sup class="versenum">7&nbsp;</sup>They had a few small fish as well; he gave thanks for them also and told the disciples to distribute them.<sup class="versenum">8&nbsp;</sup>The people ate and were satisfied. Afterward the disciples picked up seven basketfuls of broken pieces that were left over.<sup class="versenum">9&nbsp;</sup>About four thousand were present.&nbsp;</p>

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/238.mp4" type="button" class="external-movie">
         Watch &nbsp;Mark 7:31-8:9&nbsp;</button>
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

<p class="up">Jesus prioritized the training and development of His future movement leaders. He withdraws with them north to Tyre and Sidon, out of their country, and away from the pressures of ministry. Then they travel across and back down to the foreign territory of the Decapolis on the eastern side of Lake Galilee. This is the first visit to this area since the demon-possessed man was saved and sent back to share his story with family and friends. What a contrast to the previous visit when the people asked Jesus to go away! Now, as news about Him spreads, thousands gather to hear His teaching and experience His power in their own lives. They do not even go home to eat or sleep. After 3 days, Jesus involves His team in another learning experience of His great compassion for all people and His power to provide. They learn that the witness of one transformed life can open the door to entire groups of new people. As they participate in the miraculous feeding of over 4000 people they see Jesus&rsquo; compassion for all nations.</p>

</div>

<p class="up"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Matthew 15:29-38</span> </span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">29&nbsp;</sup>Jesus left there and went along the Sea of Galilee. Then he went up on a mountainside and sat down.<sup class="versenum">30&nbsp;</sup>Great crowds came to him, bringing the lame, the blind, the crippled, the mute and many others, and laid them at his feet; and he healed them.<sup class="versenum">31&nbsp;</sup>The people were amazed when they saw the mute speaking, the crippled made well, the lame walking and the blind seeing. And they praised the God of Israel.</p>

<p><sup class="versenum">32&nbsp;</sup>Jesus called his disciples to him and said, &ldquo;I have compassion for these people; they have already been with me three days and have nothing to eat. I do not want to send them away hungry, or they may collapse on the way.&rdquo;</p>

<p><sup class="versenum">33&nbsp;</sup>His disciples answered, &ldquo;Where could we get enough bread in this remote place to feed such a crowd?&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>&ldquo;How many loaves do you have?&rdquo; Jesus asked.</p>

<p>&ldquo;Seven,&rdquo; they replied, &ldquo;and a few small fish.&rdquo;</p>

<p><sup class="versenum">35&nbsp;</sup>He told the crowd to sit down on the ground.<sup class="versenum">36&nbsp;</sup>Then he took the seven loaves and the fish, and when he had given thanks, he broke them and gave them to the disciples, and they in turn to the people.<sup class="versenum">37&nbsp;</sup>They all ate and were satisfied. Afterward the disciples picked up seven basketfuls of broken pieces that were left over.<sup class="versenum">38&nbsp;</sup>The number of those who ate was four thousand men, besides women and children.</p>
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

			<td class="social" @click="share('lesson', 'Harvest of a transformed life: ', '/content/M2/eng/multiply2/multiply238.html')">
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