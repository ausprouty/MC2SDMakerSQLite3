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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus fully God becomes fully man</h1></div>
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
	<div>
	<div>
	<div>
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6</span>a).&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people.&nbsp;</p>
	</div>
	</div>
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



<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li><span><span>Ask the group to tell the story from last week.</span></span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch John 1:1-14 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 1:1-14</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Word Became Flesh</h3>

<p><sup class="versenum">1 </sup>In the beginning was the Word, and the Word was with God, and the Word was God.<sup class="versenum">2&nbsp;</sup>He was with God in the beginning.<sup class="versenum">3&nbsp;</sup>Through him all things were made; without him nothing was made that has been made.<sup class="versenum">4&nbsp;</sup>In him was life, and that life was the light of all mankind.<sup class="versenum">5&nbsp;</sup>The light shines in the darkness, and the darkness has not overcome it.</p>

<p><sup class="versenum">6&nbsp;</sup>There was a man sent from God whose name was John.<sup class="versenum">7&nbsp;</sup>He came as a witness to testify concerning that light, so that through him all might believe.<sup class="versenum">8&nbsp;</sup>He himself was not the light; he came only as a witness to the light.</p>

<p><sup class="versenum">9&nbsp;</sup>The true light that gives light to everyone was coming into the world.<sup class="versenum">10&nbsp;</sup>He was in the world, and though the world was made through him, the world did not recognize him.<sup class="versenum">11&nbsp;</sup>He came to that which was his own, but his own did not receive him.<sup class="versenum">12&nbsp;</sup>Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God&mdash;<sup class="versenum">13&nbsp;</sup>children born not of natural descent, nor of human decision or a husband&rsquo;s will, but born of God.</p>

<p><sup class="versenum">14&nbsp;</sup>The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/201.mp4" type="button" class="external-movie">
         Watch &nbsp;John 1:1-14&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in Jesus story?</li>
	<li>What do we learn about the humanity or divinity of Jesus from this passage?</li>
	<li>How can we live differently now that we know this story?</li>
</ul>

<p>Additional Questions:</p>

<ul class="up">
	<li>What are his followers learning?</li>
	<li>What is Jesus modeling to us about life and ministry or godly leadership?</li>
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
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop3')"> Philippians 2:5-11</span>.&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<p><sup class="versenum">5&nbsp;</sup>In your relationships with one another, have the same mindset as Christ Jesus:</p>

	<p><sup class="versenum">6&nbsp;</sup>Who, being in very nature God,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;did not consider equality with God something to be used to his own advantage;<br />
	<sup class="versenum">7&nbsp;</sup>rather, he made himself nothing<br />
	&nbsp;&nbsp;&nbsp;&nbsp;by taking the very nature of a servant,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;being made in human likeness.<br />
	<sup class="versenum">8&nbsp;</sup>And being found in appearance as a man,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;he humbled himself<br />
	&nbsp;&nbsp;&nbsp;&nbsp;by becoming obedient to death&mdash;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;even death on a cross!</p>
	</div>

	<p><sup class="versenum">9&nbsp;</sup>Therefore God exalted him to the highest place<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and gave him the name that is above every name,<br />
	<sup class="versenum">10&nbsp;</sup>that at the name of Jesus every knee should bow,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;in heaven and on earth and under the earth,<br />
	<sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;God almighty took on human form. He chose to begin as a baby and not as a grown man. The Bible says that He &ldquo;made himself nothing&rdquo; and put on a body to live here with us. However, He never ceased to be fully God. He was still all-powerful, all-knowing, all-present. Yet He veiled His deity and limited Himself and His powers to become a real human.</li>
</ul>

</div>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ The Prayer-Care-Share Lifestyle</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>At its heart, the Prayer-Care-Share (PCS) is a&nbsp;lifestyle&nbsp;demonstrating the gospel&nbsp;by loving our&nbsp;neighbors combined with the proclamation of the&nbsp;gospel as the&nbsp;Lord gives opportunity, all&nbsp;undergirded by prayer.</p>

<p>To live a PCS lifestyle we&nbsp;allow&nbsp;the Holy Spirit to live in&nbsp;and work through us&nbsp;in the following ways&hellip;</p>

<h2><br />
&hellip; PRAYING for others</h2>

<p>Prayer is the first and best thing we can do for&nbsp;the&nbsp;people in our networks (those among whom you do life with - where you live, learn, work, and play).&nbsp;As we&nbsp;pray for people, it is common for God to put it on&nbsp;our hearts to show His&nbsp;love in&nbsp;tangible ways.&hellip;</p>

<h2>&hellip; CARING for others</h2>

<p>You have heard the phrase that people don&rsquo;t care how much you know until&nbsp;they know how much you care. Acts of kindness or care can open ways to&nbsp;communicate the gospel. Those living a PCS lifestyle, respond to the Spirit&rsquo;s&nbsp;leading in prayer to show care for people around them.</p>

<h2>&hellip;.SHARING THE GOSPEL with others</h2>

<p>As we pray for people and demonstrate care in tangible ways, God will often&nbsp;open up doors for us to have&nbsp;spiritual conversations. The ultimate act of love is&nbsp;sharing the gospel of&nbsp;Christ with people in our&nbsp;networks.&nbsp;</p>

<p>The PCS lifestyle is a rhythm of life where we put the&nbsp;needs and interests of&nbsp;others above ourselves because of what Jesus has done for us.</p>

</div>

<h2 class="forward">Preparing for the Mission</h2>

<ul>
	<li>Practice needed skills or previous topics to help prepare to minister to others:
	<ul>
		<li>Prayer, Care, Share</li>
		<li>Gospel</li>
		<li>Foundational Bible Studies (<!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/multiply1/index', '#1')">
    Multiply 1 
</span>
<!-- end linkInternal sdcard-->
)</li>
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

			<td class="social" @click="share('lesson', 'Jesus fully God becomes fully man: ', '/content/M2/eng/multiply2/multiply201.html')">
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