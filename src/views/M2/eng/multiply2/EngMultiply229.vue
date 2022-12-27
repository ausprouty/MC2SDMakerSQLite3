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
                        <div class="chapter_number ltr"><h1>29.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership and Authority</h1></div>
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

<p class="up">Read or watch Luke 7:1-10 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 7:1-10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Faith of the Centurion</h3>

<p><sup class="versenum">1 </sup>When Jesus had finished saying all this to the people who were listening, he entered Capernaum.<sup class="versenum">2&nbsp;</sup>There a centurion&rsquo;s servant, whom his master valued highly, was sick and about to die.<sup class="versenum">3&nbsp;</sup>The centurion heard of Jesus and sent some elders of the Jews to him, asking him to come and heal his servant.<sup class="versenum">4&nbsp;</sup>When they came to Jesus, they pleaded earnestly with him, &ldquo;This man deserves to have you do this,<sup class="versenum">5&nbsp;</sup>because he loves our nation and has built our synagogue.&rdquo;<sup class="versenum">6&nbsp;</sup>So Jesus went with them.</p>

<p>He was not far from the house when the centurion sent friends to say to him: &ldquo;Lord, don&rsquo;t trouble yourself, for I do not deserve to have you come under my roof.<sup class="versenum">7&nbsp;</sup>That is why I did not even consider myself worthy to come to you. But say the word, and my servant will be healed.<sup class="versenum">8&nbsp;</sup>For I myself am a man under authority, with soldiers under me. I tell this one, &lsquo;Go,&rsquo; and he goes; and that one, &lsquo;Come,&rsquo; and he comes. I say to my servant, &lsquo;Do this,&rsquo; and he does it.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>When Jesus heard this, he was amazed at him, and turning to the crowd following him, he said, &ldquo;I tell you, I have not found such great faith even in Israel.&rdquo;<sup class="versenum">10&nbsp;</sup>Then the men who had been sent returned to the house and found the servant well.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/229.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 7:1-10&nbsp;</button>
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

<p class="up">Jesus finished teaching his disciples. Travelling back to Capernaum he meets a Roman Centurion, a military officer in charge of 100 men. This Roman military leader showed unusual love and compassion for his sick slave by asking for Jesus&rsquo; help. The Centurion&rsquo;s job was to maintain order, enforce the laws, and make sure the taxes were being collected. But God used the Centurion to instruct the leaders of the movement. They learned:</p>

<ol>
	<li class="up">A leader loves those they are leading;</li>
	<li class="up">A leader leads with humility, realizing that he is not worthy of honor;</li>
	<li class="up">A leader leads by faith, not trusting in what he can see but in the invisible God</li>
	<li class="up">A leader never forgets that he is under authority and that he will give an account for the people placed under his care. Jesus was amazed to meet a man like this.</li>
</ol>

</div>

<p class="up"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Matthew 8:5-13</span> </span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">5&nbsp;</sup>When Jesus had entered Capernaum, a centurion came to him, asking for help.<sup class="versenum">6&nbsp;</sup>&ldquo;Lord,&rdquo; he said, &ldquo;my servant lies at home paralyzed, suffering terribly.&rdquo;</p>

<p><sup class="versenum">7&nbsp;</sup>Jesus said to him, &ldquo;Shall I come and heal him?&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>The centurion replied, &ldquo;Lord, I do not deserve to have you come under my roof. But just say the word, and my servant will be healed.<sup class="versenum">9&nbsp;</sup>For I myself am a man under authority, with soldiers under me. I tell this one, &lsquo;Go,&rsquo; and he goes; and that one, &lsquo;Come,&rsquo; and he comes. I say to my servant, &lsquo;Do this,&rsquo; and he does it.&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>When Jesus heard this, he was amazed and said to those following him, &ldquo;Truly I tell you, I have not found anyone in Israel with such great faith.<sup class="versenum">11&nbsp;</sup>I say to you that many will come from the east and the west, and will take their places at the feast with Abraham, Isaac and Jacob in the kingdom of heaven.<sup class="versenum">12&nbsp;</sup>But the subjects of the kingdom will be thrown outside, into the darkness, where there will be weeping and gnashing of teeth.&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>Then Jesus said to the centurion, &ldquo;Go! Let it be done just as you believed it would.&rdquo; And his servant was healed at that moment.</p>
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

			<td class="social" @click="share('lesson', 'Leadership and Authority: ', '/content/M2/eng/multiply2/multiply229.html')">
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