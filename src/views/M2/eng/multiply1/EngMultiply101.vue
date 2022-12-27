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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>Assurance of Salvation</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 1: Assurance of Salvation -->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">Read Psalm 118:28 &ldquo;You are my God and I will praise you.&rdquo;</p>

<div>
<ul class="back">
	<li>What can we thank or praise God for today?</li>
</ul>
</div>

</div>

<div>
<ul class="back">
</ul>

<h2 class="back">Caring for each other</h2>

<ul class="back">
	<li>What is one highlight from this week?</li>
	<li>What is one challenge from this past week?</li>
	<li>What do you want Jesus to do for you this week?</li>
</ul>

<h2 class="back">Celebrating God&rsquo;s Faithfulness</h2>

<ul class="back">
	<li>Were you able to tell anyone about your decision to follow Christ?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">God loves people! The Bible tells us God&rsquo;s desire is that all people are saved and come to understand the truth (<span class="popup-link" @click = "popUp('pop1')"> 1 Timothy 2:4</span>).&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.</p>
	</div>
	</div>
	<!-- end bible --></div>
	The gospel is not only for you but for all your friends and family. God loves them and will use you to pass on what you are learning about Jesus so that they can follow Jesus also. As we journey together, it will be exciting to see what God will do in the lives of those around us.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">Jesus was teaching that he is the good shepherd who lays down his life for his sheep (v 11). He also said, &ldquo;I know my sheep and my sheep know me,&rdquo; and &ldquo;I have come that they may have life and have it to the full.&rdquo; However, many of the Jews don&rsquo;t believe him, and doubt His claims. This is where our story begins.</p>

</div>

<h2 class="up">Read&nbsp;</h2>

<p class="up">Read or watch<strong>&nbsp;John 10:22-30</strong> two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read John 10:22-30</button><div class="collapsed" id ="Text0">

<p><sup>22&nbsp;</sup>Then came the Festival of Dedication at Jerusalem. It was winter,<sup class="versenum">23&nbsp;</sup>and Jesus was in the temple courts walking in Solomon&rsquo;s Colonnade.<sup class="versenum">24&nbsp;</sup>The Jews who were there gathered around him, saying, &ldquo;How long will you keep us in suspense? If you are the Messiah, tell us plainly.&rdquo;</p>

<p><sup class="versenum">25&nbsp;</sup>Jesus answered, &ldquo;I did tell you, but you do not believe. The works I do in my Father&rsquo;s name testify about me,<sup class="versenum">26&nbsp;</sup>but you do not believe because you are not my sheep.<sup class="versenum">27&nbsp;</sup>My sheep listen to my voice; I know them, and they follow me.<sup class="versenum">28&nbsp;</sup>I give them eternal life, and they shall never perish; no one will snatch them out of my hand.<sup class="versenum">29&nbsp;</sup>My Father, who has given them to me, is greater than all; no one can snatch them out of my Father&rsquo;s hand.<sup class="versenum">30&nbsp;</sup>I and the Father are one.&rdquo;</p>

<p><!-- end bible --></p>

</div>

<button id="MC2/eng/video/multiply1/101.mp4" type="button" class="external-movie">
         Watch &nbsp;John 10:22-30&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion</h2>

<ul class="up">
	<li>What caught your attention (or what did you like best) and why?</li>
	<li>What did you learn about Jesus?&nbsp;</li>
	<li>What did you learn about people?</li>
	<li>How will you obey Jesus now that you know this?&nbsp;</li>
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

<p class="up">On the cross Jesus, the good shepherd, laid down his life as a sacrifice for your sins. As one of his sheep, he wants you to know that you have eternal life and you will never perish. You are safe in his hands and no one, including Satan himself, can snatch you away.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul>
	<li class="forward">Practice sharing the gospel</li>
	<li class="forward">Discuss together what to do when someone says YES to the gospel.</li>
</ul>

</div>

<ul>
</ul>

<h2 class="forward">Going on the Mission</h2>

<ul class="forward">
	<li>Have them create an Oikos List by writing the names of 10 or more people they know.</li>
	<li>Identify 5 people from your Oikos List with whom you will tell the story or share the gospel with this week. (use &ldquo;I will __ by __&rdquo;)</li>
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

			<td class="social" @click="share('lesson', 'Assurance of Salvation: ', '/content/M2/eng/multiply1/multiply101.html')">
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