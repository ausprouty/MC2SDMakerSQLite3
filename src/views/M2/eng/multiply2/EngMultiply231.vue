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
                        <div class="chapter_number ltr"><h1>31.</h1></div>
                        <div class="chapter_title ltr"><h1>Forgiveness and Leadership</h1></div>
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

<p class="up">Read or watch Luke 7:36 - 8:3 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 7:36-8:3</button><div class="collapsed" id ="Text0">
<!-- begin bible --><!-- end bible --><!-- begin bible -->

<h3>Jesus Anointed by a Sinful Woman</h3>

<p><sup class="versenum">36&nbsp;</sup>When one of the Pharisees invited Jesus to have dinner with him, he went to the Pharisee&rsquo;s house and reclined at the table.<sup class="versenum">37&nbsp;</sup>A woman in that town who lived a sinful life learned that Jesus was eating at the Pharisee&rsquo;s house, so she came there with an alabaster jar of perfume.<sup class="versenum">38&nbsp;</sup>As she stood behind him at his feet weeping, she began to wet his feet with her tears. Then she wiped them with her hair, kissed them and poured perfume on them.</p>

<p><sup class="versenum">39&nbsp;</sup>When the Pharisee who had invited him saw this, he said to himself, &ldquo;If this man were a prophet, he would know who is touching him and what kind of woman she is&mdash;that she is a sinner.&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>Jesus answered him, &ldquo;Simon, I have something to tell you.&rdquo;</p>

<p>&ldquo;Tell me, teacher,&rdquo; he said.</p>

<p><sup class="versenum">41&nbsp;</sup>&ldquo;Two people owed money to a certain moneylender. One owed him five hundred denarii, and the other fifty.<sup class="versenum">42&nbsp;</sup>Neither of them had the money to pay him back, so he forgave the debts of both. Now which of them will love him more?&rdquo;</p>

<p><sup class="versenum">43&nbsp;</sup>Simon replied, &ldquo;I suppose the one who had the bigger debt forgiven.&rdquo;</p>

<p>&ldquo;You have judged correctly,&rdquo; Jesus said.</p>

<p><sup class="versenum">44&nbsp;</sup>Then he turned toward the woman and said to Simon, &ldquo;Do you see this woman? I came into your house. You did not give me any water for my feet, but she wet my feet with her tears and wiped them with her hair.<sup class="versenum">45&nbsp;</sup>You did not give me a kiss, but this woman, from the time I entered, has not stopped kissing my feet.<sup class="versenum">46&nbsp;</sup>You did not put oil on my head, but she has poured perfume on my feet.<sup class="versenum">47&nbsp;</sup>Therefore, I tell you, her many sins have been forgiven&mdash;as her great love has shown. But whoever has been forgiven little loves little.&rdquo;</p>

<p><sup class="versenum">48&nbsp;</sup>Then Jesus said to her, &ldquo;Your sins are forgiven.&rdquo;</p>

<p><sup class="versenum">49&nbsp;</sup>The other guests began to say among themselves, &ldquo;Who is this who even forgives sins?&rdquo;</p>

<p><sup class="versenum">50&nbsp;</sup>Jesus said to the woman, &ldquo;Your faith has saved you; go in peace.&rdquo;</p>

<h3>The Parable of the Sower</h3>

<p><sup class="versenum">8:1 </sup>After this, Jesus traveled about from one town and village to another, proclaiming the good news of the kingdom of God. The Twelve were with him,<sup class="versenum">2&nbsp;</sup>and also some women who had been cured of evil spirits and diseases: Mary (called Magdalene) from whom seven demons had come out;<sup class="versenum">3&nbsp;</sup>Joanna the wife of Chuza, the manager of Herod&rsquo;s household; Susanna; and many others. These women were helping to support them out of their own means.</p>
<!-- end bible --><!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/231.mp4" type="button" class="external-movie">
         Watch Luke 7:36-8:3</button>
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

<p class="up">Jesus meets Simon, a curious Pharisee living in Capernaum, who had been following His ministry. Simon invites Jesus to his house along with many other Pharisees. Jesus accepts the invitation for the divine appointment arranged by the Father to reach out to these religious, self-righteous men. As the evening begins, Jesus is not offered the hospitality of washing, which is normally given to dinner guests. So the Father sent a sinful woman to do these things for Jesus. Jesus took the opportunity to teach the men about the heart of those who receive forgiveness: they are honest with their need and they are humble. Simon had learned how to cover up his sins. We need to be careful to live with integrity, accepting God&rsquo;s forgiveness for our sins and not hiding them like Simon.</p>

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

			<td class="social" @click="share('lesson', 'Forgiveness and Leadership: ', '/content/M2/eng/multiply2/multiply231.html')">
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