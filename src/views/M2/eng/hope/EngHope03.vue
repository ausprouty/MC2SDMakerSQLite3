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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-hope-index')">
        <img src="@/assets/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>Hope Changes Things</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOK BACK</span></div>
</div>

<div>
<div>
<h2>Caring for one another</h2>

<ul>
	<li>What has been a highlight this week?</li>
	<li>What has been a challenge this week?</li>
	<li>What do you want Jesus to do for you this week?</li>
	<li>Briefly pray for&nbsp; Jesus to meet the needs that are shared.</li>
</ul>

<h2>Celebrate Faithfulness</h2>

<ul>
	<li><span style="color:#000000">How did you obey Jesus last week?</span></li>
	<li><span style="color:#000000">Who <span class="gmail_default">did</span>&nbsp;you share the story with last week?&nbsp;&nbsp;</span></li>
</ul>

<h2>Motivation and Encouragement</h2>

<ul>
	<li>Encourage each other to keep obeying Jesus and remind each other of the importance of sharing the stories with others.</li>
</ul>
</div>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOK UP</span></div>
</div>

<h2>Discover the Bible together</h2>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Context</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>Zacchaeus was a dishonest man whose curiosity led him to Jesus Christ. His name means &quot;pure one&quot; or &quot;innocent&quot; in Hebrew. He was a short man. He wanted to see Jesus. Zacchaeus had to climb a tree to catch a glimpse of Jesus passing by.</p>

</div>

<h2><span><span><span><span>Read</span></span></span></span></h2>

<ul>
	<li>
	<p><span><span><span><span>Read or watch </span></span></span></span>Luke 19:1-10<span><span><span><span> two times as others listen.</span></span></span></span></p>
	</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 19:1-10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Zacchaeus the Tax Collector</h3>

<p><sup class="versenum">1 </sup>Jesus entered Jericho and was passing through.<sup class="versenum">2&nbsp;</sup>A man was there by the name of Zacchaeus; he was a chief tax collector and was wealthy.<sup class="versenum">3&nbsp;</sup>He wanted to see who Jesus was, but because he was short he could not see over the crowd.<sup class="versenum">4&nbsp;</sup>So he ran ahead and climbed a sycamore-fig tree to see him, since Jesus was coming that way.</p>

<p><sup class="versenum">5&nbsp;</sup>When Jesus reached the spot, he looked up and said to him, &ldquo;Zacchaeus, come down immediately. I must stay at your house today.&rdquo;<sup class="versenum">6&nbsp;</sup>So he came down at once and welcomed him gladly.</p>

<p><sup class="versenum">7&nbsp;</sup>All the people saw this and began to mutter, &ldquo;He has gone to be the guest of a sinner.&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>But Zacchaeus stood up and said to the Lord, &ldquo;Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>Jesus said to him, &ldquo;Today salvation has come to this house, because this man, too, is a son of Abraham.<sup class="versenum">10&nbsp;</sup>For the Son of Man came to seek and to save the lost.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/hope/03.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 19:1-10&nbsp;</button>
    <div class="collapsed"></div>

<h2><span><span><span><span>Discovery Discussion</span></span></span></span></h2>

<ul>
	<li><span><span><span><span>What caught your attention in this story and why?</span></span></span></span></li>
	<li><span><span><span><span>What do we learn about Jesus?</span></span></span></span></li>
	<li><span><span><span><span>What do we learn about people?</span></span></span></span></li>
	<li><span><span><span><span>Who do you most identify with in the story the most and why?</span></span></span></span></li>
	<li><span><span><span><span>What keeps you from following Jesus today?</span></span></span></span></li>
</ul>

<h2><span><span><span><span>Read, Tell and Correct</span></span></span></span></h2>

<ul>
	<li><span><span><span><span>Read the story again. Ask someone to tell the story from memory. The group can help if necessary.</span></span></span></span></li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ Summary</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>Zacchaeus was curious about Jesus. He wanted to learn more. Jesus accepted him and went to his house to eat and to talk. Zacchaeus hoped to be a different person. This hope and his trust in Jesus made changes in his life. He returned money from those he had corruptly mistreated. He showed the evidences of a changed life.</p>

</div>

<p>&nbsp;</p>

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


<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOK FORWARD</span></div>
</div>

<h2>Practice</h2>

<ul>
	<li>Pair up and practice telling the story together</li>
</ul>

<h2><span><span><span><span>Choose something to obey together</span></span></span></span></h2>

<ul>
	<li><span><span><span>How can we follow this teaching?</span></span></span></li>
	<li><span><span><span>Is there anyone we can serve in simple ways this week?</span></span></span></li>
	<li><span><span><span>Who is someone in your life that you think needs to hear this story?</span></span></span></li>
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


<h2>Pray</h2>

<ul>
	<li>Thank God for the time together and ask God to help each one to know HIm better.</li>
</ul>


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

			<td class="social" @click="share('lesson', 'Hope Changes Things: ', '/content/M2/eng/hope/hope03.html')">
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