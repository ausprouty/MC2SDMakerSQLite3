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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>Talking with God</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 6: Talking with God-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">Read Psalm 100:2 &ldquo;Worship the Lord with gladness. Come before Him, singing with joy.&rdquo; Let&rsquo;s learn a song we can use to worship the Lord.&nbsp;</p>

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
	<li>Were you able to tell anyone about your decision to follow Christ?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">As Jesus went through all the towns and villages, he saw the needs of the people and had compassion on them. He said to his disciples, &quot;The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.&quot; God wants all people to know him and his love. He wants to use us and He will also raise up more workers from the harvest we will reap. Let&rsquo;s keep asking God to send more workers to lead people to know Him.&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">Even though Jesus was busy in ministry, he spent a lot of time talking to the Father. As his followers watched him, they too wanted to learn how to talk to the Father. Today we will learn what he told them.&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch Luke 11:1-13&nbsp;two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 11:1-13</button><div class="collapsed" id ="Text0">

<p><sup class="versenum">1&nbsp;</sup>One day Jesus was praying in a certain place. When he finished, one of his disciples said to him, &ldquo;Lord, teach us to pray, just as John taught his disciples.&rdquo;</p>

<p><sup class="versenum">2&nbsp;</sup>He said to them, &ldquo;When you pray, say:</p>

<div class="poetry top-05">
<p>&ldquo;&lsquo;Father,<br />
hallowed be your name,<br />
your kingdom come.<br />
<sup class="versenum">3&nbsp;</sup>Give us each day our daily bread.<br />
<sup class="versenum">4&nbsp;</sup>Forgive us our sins,<br />
&nbsp;&nbsp;&nbsp;&nbsp;for we also forgive everyone who sins against us.<br />
And lead us not into temptation.&rsquo;&rdquo;</p>
</div>

<p><sup class="versenum">5&nbsp;</sup>Then Jesus said to them, &ldquo;Suppose you have a friend, and you go to him at midnight and say, &lsquo;Friend, lend me three loaves of bread;<sup class="versenum">6&nbsp;</sup>a friend of mine on a journey has come to me, and I have no food to offer him.&rsquo;<sup class="versenum">7&nbsp;</sup>And suppose the one inside answers, &lsquo;Don&rsquo;t bother me. The door is already locked, and my children and I are in bed. I can&rsquo;t get up and give you anything.&rsquo;<sup class="versenum">8&nbsp;</sup>I tell you, even though he will not get up and give you the bread because of friendship, yet because of your shameless audacity he will surely get up and give you as much as you need.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;So I say to you: Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.<sup class="versenum">10&nbsp;</sup>For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.</p>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;Which of you fathers, if your son asks for a fish, will give him a snake instead?<sup class="versenum">12&nbsp;</sup>Or if he asks for an egg, will give him a scorpion?<sup class="versenum">13&nbsp;</sup>If you then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give the Holy Spirit to those who ask him!&rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/106.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 11:1-13&nbsp;</button>
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

<p class="up">Prayer is simply talking to our heavenly Father. We can use these four points to summarize what Jesus taught:&nbsp;</p>

<ol class="up">
	<li><strong>P</strong>raise Him and keep Him the center;</li>
	<li><strong>R</strong>equest what you need from Him;</li>
	<li><strong>A</strong>cknowledge your sins;</li>
	<li><strong>Y</strong>ield your life to His will and to His Kingdom.</li>
</ol>

<p class="up">We can be confident that He hears us and that His heart is to give us good things.&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for the Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li>Practice praying using the 4 points of the summary.</li>
	<li>Practice sharing the gospel, about the Holy Spirit, Bible study, or any previous lesson</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you will tell the story or share the gospel this week.</li>
	<li>Write &ldquo;I will by when&rdquo; statements and tell them to your small group.</li>
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
<p>For further enrichment: Read <!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/tc/tc01', '#1')">
     Transferable Concept #1: How You Can Be Sure You Are A Christian  
</span>
<!-- end linkInternal sdcard-->
 and discuss with another group member</p>
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

			<td class="social" @click="share('lesson', 'Talking with God: ', '/content/M2/eng/multiply1/multiply106.html')">
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