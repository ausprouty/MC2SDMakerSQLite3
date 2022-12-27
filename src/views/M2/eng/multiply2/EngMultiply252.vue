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
                        <div class="chapter_number ltr"><h1>52.</h1></div>
                        <div class="chapter_title ltr"><h1>Obedient Leadership</h1></div>
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
	<li class="back">reminding them of what God wants to do through them,</li>
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

<p class="up">Read or watch Matthew 28:16-20 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Matthew 28:16-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Great Commission</h3>

<p><sup class="versenum">16&nbsp;</sup>Then the eleven disciples went to Galilee, to the mountain where Jesus had told them to go.<sup class="versenum">17&nbsp;</sup>When they saw him, they worshiped him; but some doubted.<sup class="versenum">18&nbsp;</sup>Then Jesus came to them and said, &ldquo;All authority in heaven and on earth has been given to me.<sup class="versenum">19&nbsp;</sup>Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,<sup class="versenum">20&nbsp;</sup>and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/252.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 28:16-20&nbsp;</button>
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

<ul>
	<li class="nobreak-final-final">Peter leads the group to the mountain where Jesus meets with them. They worship Him as the risen savior of the world. It is here that Jesus sums up His life&rsquo;s work and gives them one simple command &ndash; make disciples! All of their training has prepared them for this. Jesus says &ldquo;Go&rdquo; which literally means, &ldquo;as you go through life, make disciples.&rdquo; In the daily activities of life, we should invest in others. He says that this is for everyone, every culture, every tribe, every tongue. The movement of disciple-making should cover the whole world. Jesus promises that He will always be with us as we obey this command. This is the lifestyle that Jesus is asking us to have. Significantly, this event takes place &ldquo;on a mountain in Galilee&rdquo; overlooking the landscape where they were called and trained for His mission, and from where they could see surrounding nations. Jesus&rsquo; final appearance would be a few days later when he ascends from the Mount of Olives, just outside Jerusalem (<span class="popup-link" @click = "popUp('pop3')"> Acts 1 :1-11</span>).

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>In my former book, Theophilus, I wrote about all that Jesus began to do and to teach<sup class="versenum">2&nbsp;</sup>until the day he was taken up to heaven, after giving instructions through the Holy Spirit to the apostles he had chosen.<sup class="versenum">3&nbsp;</sup>After his suffering, he presented himself to them and gave many convincing proofs that he was alive. He appeared to them over a period of forty days and spoke about the kingdom of God.<sup class="versenum">4&nbsp;</sup>On one occasion, while he was eating with them, he gave them this command: &ldquo;Do not leave Jerusalem, but wait for the gift my Father promised, which you have heard me speak about.<sup class="versenum">5&nbsp;</sup>For John baptized with water, but in a few days you will be baptized with the Holy Spirit.&rdquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>Then they gathered around him and asked him, &ldquo;Lord, are you at this time going to restore the kingdom to Israel?&rdquo;</p>

	<p><sup class="versenum">7&nbsp;</sup>He said to them: &ldquo;It is not for you to know the times or dates the Father has set by his own authority.<sup class="versenum">8&nbsp;</sup>But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;</p>

	<p><sup class="versenum">9&nbsp;</sup>After he said this, he was taken up before their very eyes, and a cloud hid him from their sight.</p>

	<p><sup class="versenum">10&nbsp;</sup>They were looking intently up into the sky as he was going, when suddenly two men dressed in white stood beside them.<sup class="versenum">11&nbsp;</sup>&ldquo;Men of Galilee,&rdquo; they said, &ldquo;why do you stand here looking into the sky? This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven.&rdquo;</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;As he ascends, he reminds them to wait in Jerusalem to be filled with the Holy Spirit, who would empower them to carry on His work.</li>
</ul>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop4')"> Mark 16:19-20</span>;&nbsp;</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><em><sup class="versenum">19&nbsp;</sup>After the Lord Jesus had spoken to them, he was taken up into heaven</em> <em>and he sat at the right hand of God.</em><em><sup class="versenum">20&nbsp;</sup>Then the disciples went out and preached everywhere, and the Lord worked with them and confirmed his word by the signs</em> <em>that accompanied it.</em></span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop5')"> Luke 24:50-53</span>;&nbsp;</span>

	<div class="popup invisible" id="pop5"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">50&nbsp;</sup>When he had led them out to the vicinity of Bethany, he lifted up his hands and blessed them.<sup class="versenum">51&nbsp;</sup>While he was blessing them, he left them and was taken up into heaven.<sup class="versenum">52&nbsp;</sup>Then they worshiped him and returned to Jerusalem with great joy.<sup class="versenum">53&nbsp;</sup>And they stayed continually at the temple, praising God.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop6')"> Acts 1:1-11</span>.</span>

	<div class="popup invisible" id="pop6"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">1 </sup>In my former book, Theophilus, I wrote about all that Jesus began to do and to teach<sup class="versenum">2&nbsp;</sup>until the day he was taken up to heaven, after giving instructions through the Holy Spirit to the apostles he had chosen.<sup class="versenum">3&nbsp;</sup>After his suffering, he presented himself to them and gave many convincing proofs that he was alive. He appeared to them over a period of forty days and spoke about the kingdom of God.<sup class="versenum">4&nbsp;</sup>On one occasion, while he was eating with them, he gave them this command: &ldquo;Do not leave Jerusalem, but wait for the gift my Father promised, which you have heard me speak about.<sup class="versenum">5&nbsp;</sup>For John baptized with water, but in a few days you will be baptized with the Holy Spirit.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">6&nbsp;</sup>Then they gathered around him and asked him, &ldquo;Lord, are you at this time going to restore the kingdom to Israel?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">7&nbsp;</sup>He said to them: &ldquo;It is not for you to know the times or dates the Father has set by his own authority.<sup class="versenum">8&nbsp;</sup>But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">9&nbsp;</sup>After he said this, he was taken up before their very eyes, and a cloud hid him from their sight.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">10&nbsp;</sup>They were looking intently up into the sky as he was going, when suddenly two men dressed in white stood beside them.<sup class="versenum">11&nbsp;</sup>&ldquo;Men of Galilee,&rdquo; they said, &ldquo;why do you stand here looking into the sky? This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven.&rdquo;</span></p>
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

			<td class="social" @click="share('lesson', 'Obedient Leadership: ', '/content/M2/eng/multiply2/multiply252.html')">
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