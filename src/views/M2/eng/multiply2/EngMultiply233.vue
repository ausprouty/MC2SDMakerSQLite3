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
                        <div class="chapter_number ltr"><h1>33.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership and Spiritual Strongholds</h1></div>
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

<ul>
	<li class="up">Read or watch Mark 5:1-20 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Mark 5:1-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Restores a Demon-Possessed Man</h3>

<p><sup class="versenum">1 </sup>They went across the lake to the region of the Gerasenes.<sup class="versenum">2&nbsp;</sup>When Jesus got out of the boat, a man with an impure spirit came from the tombs to meet him.<sup class="versenum">3&nbsp;</sup>This man lived in the tombs, and no one could bind him anymore, not even with a chain.<sup class="versenum">4&nbsp;</sup>For he had often been chained hand and foot, but he tore the chains apart and broke the irons on his feet. No one was strong enough to subdue him.<sup class="versenum">5&nbsp;</sup>Night and day among the tombs and in the hills he would cry out and cut himself with stones.</p>

<p><sup class="versenum">6&nbsp;</sup>When he saw Jesus from a distance, he ran and fell on his knees in front of him.<sup class="versenum">7&nbsp;</sup>He shouted at the top of his voice, &ldquo;What do you want with me, Jesus, Son of the Most High God? In God&rsquo;s name don&rsquo;t torture me!&rdquo;<sup class="versenum">8&nbsp;</sup>For Jesus had said to him, &ldquo;Come out of this man, you impure spirit!&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>Then Jesus asked him, &ldquo;What is your name?&rdquo;</p>

<p>&ldquo;My name is Legion,&rdquo; he replied, &ldquo;for we are many.&rdquo;<sup class="versenum">10&nbsp;</sup>And he begged Jesus again and again not to send them out of the area.</p>

<p><sup class="versenum">11&nbsp;</sup>A large herd of pigs was feeding on the nearby hillside.<sup class="versenum">12&nbsp;</sup>The demons begged Jesus, &ldquo;Send us among the pigs; allow us to go into them.&rdquo;<sup class="versenum">13&nbsp;</sup>He gave them permission, and the impure spirits came out and went into the pigs. The herd, about two thousand in number, rushed down the steep bank into the lake and were drowned.</p>

<p><sup class="versenum">14&nbsp;</sup>Those tending the pigs ran off and reported this in the town and countryside, and the people went out to see what had happened.<sup class="versenum">15&nbsp;</sup>When they came to Jesus, they saw the man who had been possessed by the legion of demons, sitting there, dressed and in his right mind; and they were afraid.<sup class="versenum">16&nbsp;</sup>Those who had seen it told the people what had happened to the demon-possessed man&mdash;and told about the pigs as well.<sup class="versenum">17&nbsp;</sup>Then the people began to plead with Jesus to leave their region.</p>

<p><sup class="versenum">18&nbsp;</sup>As Jesus was getting into the boat, the man who had been demon-possessed begged to go with him.<sup class="versenum">19&nbsp;</sup>Jesus did not let him, but said, &ldquo;Go home to your own people and tell them how much the Lord has done for you, and how he has had mercy on you.&rdquo;<sup class="versenum">20&nbsp;</sup>So the man went away and began to tell in the Decapolis how much Jesus had done for him. And all the people were amazed.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/233.mp4" type="button" class="external-movie">
         Watch &nbsp;Mark 5:1-20&nbsp;</button>
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

<p class="up">Jesus takes his leaders in training out of their comfort zone into the Gentile region of Decapolis, across the other side of the Lake. This was another country. This particular area is known for spiritual darkness because of a wild and violent demon-possessed man who terrorized the area. He lived in exile on the fringe of society among the tombs. On this &ldquo;foreign mission trip&rdquo; Jesus models to his leadership team His heart for all people, His mission to the whole world, and the reality that no one is beyond Jesus&rsquo; power to save. This demon-possessed man seems to be the main reason the Father led Jesus to make this trip. Not only is the man transformed, but he becomes a most unlikely person of peace sent to testify of Jesus to his family and friends. Jesus transforms the life of one person who in turn becomes the insider to share the Gospel into a whole new population.</p>

</div>

<p class="up"><span class="for-enrichment">For Further Study <span class="popup-link" @click = "popUp('pop3')"> Luke 8:26-39</span> </span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">26&nbsp;</sup>They sailed to the region of the Gerasenes, which is across the lake from Galilee.<sup class="versenum">27&nbsp;</sup>When Jesus stepped ashore, he was met by a demon-possessed man from the town. For a long time this man had not worn clothes or lived in a house, but had lived in the tombs.<sup class="versenum">28&nbsp;</sup>When he saw Jesus, he cried out and fell at his feet, shouting at the top of his voice, &ldquo;What do you want with me, Jesus, Son of the Most High God? I beg you, don&rsquo;t torture me!&rdquo;<sup class="versenum">29&nbsp;</sup>For Jesus had commanded the impure spirit to come out of the man. Many times it had seized him, and though he was chained hand and foot and kept under guard, he had broken his chains and had been driven by the demon into solitary places.</p>

<p><sup class="versenum">30&nbsp;</sup>Jesus asked him, &ldquo;What is your name?&rdquo;</p>

<p>&ldquo;Legion,&rdquo; he replied, because many demons had gone into him.<sup class="versenum">31&nbsp;</sup>And they begged Jesus repeatedly not to order them to go into the Abyss.</p>

<p><sup class="versenum">32&nbsp;</sup>A large herd of pigs was feeding there on the hillside. The demons begged Jesus to let them go into the pigs, and he gave them permission.<sup class="versenum">33&nbsp;</sup>When the demons came out of the man, they went into the pigs, and the herd rushed down the steep bank into the lake and was drowned.</p>

<p><sup class="versenum">34&nbsp;</sup>When those tending the pigs saw what had happened, they ran off and reported this in the town and countryside,<sup class="versenum">35&nbsp;</sup>and the people went out to see what had happened. When they came to Jesus, they found the man from whom the demons had gone out, sitting at Jesus&rsquo; feet, dressed and in his right mind; and they were afraid.<sup class="versenum">36&nbsp;</sup>Those who had seen it told the people how the demon-possessed man had been cured.<sup class="versenum">37&nbsp;</sup>Then all the people of the region of the Gerasenes asked Jesus to leave them, because they were overcome with fear. So he got into the boat and left.</p>

<p><sup class="versenum">38&nbsp;</sup>The man from whom the demons had gone out begged to go with him, but Jesus sent him away, saying,<sup class="versenum">39&nbsp;</sup>&ldquo;Return home and tell how much God has done for you.&rdquo; So the man went away and told all over town how much Jesus had done for him.</p>
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

			<td class="social" @click="share('lesson', 'Leadership and Spiritual Strongholds: ', '/content/M2/eng/multiply2/multiply233.html')">
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