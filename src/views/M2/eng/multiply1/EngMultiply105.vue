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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>Growing through God's Word</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 5: Growing through God's Word-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p class="back">Read Rev 7:12 &ldquo;Let&rsquo;s honour and worship the Lord through a song.&rdquo;&nbsp;</p>

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
	<li class="nobreak-final-final">God has given us every spiritual blessing through Jesus. He has adopted us into His family and calls us His children. &ldquo;You were included in Christ when you heard the word of truth, the gospel of your salvation. Having believed, you were marked in Him with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance.&rdquo; (<span class="popup-link" @click = "popUp('pop1')"> Ephesians 3:13-14a</span>).

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">13&nbsp;</sup>I ask you, therefore, not to be discouraged because of my sufferings for you, which are your glory.</p>

	<p><sup class="versenum">14&nbsp;</sup>For this reason I kneel before the Father,</p>
	</div>
	</div>
	<!-- end bible --></div>
	What an amazing gift! This is God&rsquo;s promise for you.&nbsp;</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">After Jesus&rsquo; resurrection, He appeared to His disciples many times during a 40-day period. One of the times He appeared while they were meeting in a large room and He explained the importance of His Word.&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch Luke 24:36-49 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 24:36-49</button><div class="collapsed" id ="Text0">

<p><sup>36&nbsp;</sup>While they were still talking about this, Jesus himself stood among them and said to them, &ldquo;Peace be with you.&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>They were startled and frightened, thinking they saw a ghost.<sup class="versenum">38&nbsp;</sup>He said to them, &ldquo;Why are you troubled, and why do doubts rise in your minds?<sup class="versenum">39&nbsp;</sup>Look at my hands and my feet. It is I myself! Touch me and see; a ghost does not have flesh and bones, as you see I have.&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>When he had said this, he showed them his hands and feet.<sup class="versenum">41&nbsp;</sup>And while they still did not believe it because of joy and amazement, he asked them, &ldquo;Do you have anything here to eat?&rdquo;<sup class="versenum">42&nbsp;</sup>They gave him a piece of broiled fish,<sup class="versenum">43&nbsp;</sup>and he took it and ate it in their presence.</p>

<p><sup class="versenum">44&nbsp;</sup>He said to them, &ldquo;This is what I told you while I was still with you: Everything must be fulfilled that is written about me in the Law of Moses, the Prophets and the Psalms.&rdquo;</p>

<p><sup class="versenum">45&nbsp;</sup>Then he opened their minds so they could understand the Scriptures.<sup class="versenum">46&nbsp;</sup>He told them, &ldquo;This is what is written: The Messiah will suffer and rise from the dead on the third day,<sup class="versenum">47&nbsp;</sup>and repentance for the forgiveness of sins will be preached in his name to all nations, beginning at Jerusalem.<sup class="versenum">48&nbsp;</sup>You are witnesses of these things.<sup class="versenum">49&nbsp;</sup>I am going to send you what my Father has promised; but stay in the city until you have been clothed with power from on high.&rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/105.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 24:36-49&nbsp;</button>
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
<p class="up">Jesus wants us to understand God&rsquo;s Word and what it teaches us about Him. Jesus&rsquo; life fulfilled the promises in God&rsquo;s Word. He wants us to tell others about what we learn.&nbsp;</p>

<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop2')"> 2 Timothy 3:16-17</span>,&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">16&nbsp;</sup>All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness,<sup class="versenum">17&nbsp;</sup>so that the servant of God may be thoroughly equipped for every good work.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop3')"> Romans 10:17</span>&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">17&nbsp;</sup>Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.</p>
	</div>
	</div>
	<!-- end bible --></div>
	and <span class="popup-link" @click = "popUp('pop4')"> Hebrews 4:12</span>

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">12&nbsp;</sup>For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.</p>
	</div>
	</div>
	<!-- end bible --></div>
	to highlight truths about God&rsquo;s Word.&nbsp;</li>
</ul>

<p class="up">Reading the Bible each day is an important part of getting to know Jesus.&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Make a commitment to read at least one chapter from the Word of God each day, beginning with the Gospel of John.</li>
	<li>Pray that the Holy Spirit will teach you through His Word, read the chapter, and then answer three questions: &nbsp;
	<ul class="forward">
		<li>What is this passage about? &nbsp;</li>
		<li>How can I apply it? &nbsp;</li>
		<li>Who can I help using this passage?&nbsp; &nbsp;</li>
	</ul>
	</li>
	<li>Meditate on what the Holy Spirit has taught about the meaning of this passage.</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul>
	<li class="forward">Identify 5 people from your Network List with whom you will tell the story or share the gospel this week.</li>
	<li class="forward">Write &ldquo;I will by when&rdquo; statements and tell them to your small group.</li>
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

<div class="for-enrichment">
<p>For further enrichment: Read&nbsp;<!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/tc/tc01', '#1')">
    Transferable Concept #1: How You Can Be Sure You Are A Christian 
</span>
<!-- end linkInternal sdcard-->
 and discuss with another group member.</p>
</div>


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

			<td class="social" @click="share('lesson', 'Growing through God\'s Word: ', '/content/M2/eng/multiply1/multiply105.html')">
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