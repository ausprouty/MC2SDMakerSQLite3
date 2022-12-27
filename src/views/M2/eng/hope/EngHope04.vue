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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>Hope Forgives</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson">
<div>
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOK BACK</span></div>
</div>

<div>
<h2>Caring for one another</h2>
</div>

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

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOK UP</span></div>
</div>

<h2>Discover the Bible together</h2>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Context</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>Peter asks Jesus how many times must I forgive my brother or sister who sins against me. Jesus tells Peter a story to help him understand how much God wants us to forgive others.</p>

</div>

<h2><span><span><span><span>Read</span></span></span></span></h2>

<ul>
	<li>
	<p><span><span><span><span>Read or watch </span></span></span></span>Matthew 18:21-35<span><span><span><span> two times as others listen.</span></span></span></span></p>
	</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Matthew 18:21-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Parable of the Unmerciful Servant</h3>

<p><sup class="versenum">21&nbsp;</sup>Then Peter came to Jesus and asked, &ldquo;Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Jesus answered, &ldquo;I tell you, not seven times, but seventy-seven times.</p>

<p><sup class="versenum">23&nbsp;</sup>&ldquo;Therefore, the kingdom of heaven is like a king who wanted to settle accounts with his servants.<sup class="versenum">24&nbsp;</sup>As he began the settlement, a man who owed him ten thousand bags of gold was brought to him.<sup class="versenum">25&nbsp;</sup>Since he was not able to pay, the master ordered that he and his wife and his children and all that he had be sold to repay the debt.</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;At this the servant fell on his knees before him. &lsquo;Be patient with me,&rsquo; he begged, &lsquo;and I will pay back everything.&rsquo;<sup class="versenum">27&nbsp;</sup>The servant&rsquo;s master took pity on him, canceled the debt and let him go.</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;But when that servant went out, he found one of his fellow servants who owed him a hundred silver coins. He grabbed him and began to choke him. &lsquo;Pay back what you owe me!&rsquo; he demanded.</p>

<p><sup class="versenum">29&nbsp;</sup>&ldquo;His fellow servant fell to his knees and begged him, &lsquo;Be patient with me, and I will pay it back.&rsquo;</p>

<p><sup class="versenum">30&nbsp;</sup>&ldquo;But he refused. Instead, he went off and had the man thrown into prison until he could pay the debt.<sup class="versenum">31&nbsp;</sup>When the other servants saw what had happened, they were outraged and went and told their master everything that had happened.</p>

<p><sup class="versenum">32&nbsp;</sup>&ldquo;Then the master called the servant in. &lsquo;You wicked servant,&rsquo; he said, &lsquo;I canceled all that debt of yours because you begged me to.<sup class="versenum">33&nbsp;</sup>Shouldn&rsquo;t you have had mercy on your fellow servant just as I had on you?&rsquo;<sup class="versenum">34&nbsp;</sup>In anger his master handed him over to the jailers to be tortured, until he should pay back all he owed.</p>

<p><sup class="versenum">35&nbsp;</sup>&ldquo;This is how my heavenly Father will treat each of you unless you forgive your brother or sister from your heart.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/hope/04.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 18:21-35&nbsp;</button>
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

<p>Forgiving others is a very important part of following Jesus. Jesus helps Peter learn that God wants us to continually forgive others because we have experienced God&rsquo;s forgiveness. Since we are forgiven, we must also forgive others. We do not count how many times we are mistreated. We forgive rather than count sins against us. We can do this because we have been forgiven by God for our many sins.</p>


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

			<td class="social" @click="share('lesson', 'Hope Forgives: ', '/content/M2/eng/hope/hope04.html')">
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