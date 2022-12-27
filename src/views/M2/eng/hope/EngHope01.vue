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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>Hope for the Rejected</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOK BACK</span></div>
</div>

<div>
<h2>Caring for one another</h2>

<ul>
	<li>What has been a highlight this week?</li>
	<li>What has been a challenge this week?</li>
	<li>What do you want Jesus to do for you this week?</li>
	<li>Briefly pray for&nbsp; Jesus to meet the needs that are shared.</li>
</ul>

<h2>Celebrate Faithfulness</h2>
<em>*There will be no accountability for Lesson 1, the first time the group meets.</em></div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOK UP</span></div>
</div>

<h2>Discover the Bible together</h2>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2><span><span><span>+ Context</span></span></span></h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p><span><span><span>The Pharisees were the religious leaders of their day. They were very careful to not associate with sinful people. In this story, a sinful woman approaches Jesus. The Pharisee is shocked that Jesus does not send her away.</span></span></span></p>

</div>

<h2>Read</h2>

<ul>
	<li class="flush">Read Luke 7:36-50 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 7:36-50</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

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
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/hope/01.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 7:36-50&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="indent">Discovery Discussion</h2>

<ul>
	<li>What caught your attention (or what did you like best) and why?</li>
	<li>What do we learn about Jesus?</li>
	<li>What do we learn about people?</li>
	<li>Who do you most identify with in the story the most&nbsp; and why?</li>
	<li>What keeps you from following Jesus today?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2><span><span><span>+ Summary</span></span></span></h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p><span><span><span>Jesus accepts the woman. The Pharisee rejects the woman and wants to send her away. Jesus tells a story to help the Pharisee understand forgiveness. He uses the woman as an example of someone who is experiencing forgiveness. He then speaks to the woman telling her that her sins are forgiven.</span></span></span></p>

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

<h2>Choose something to obey together</h2>

<ul>
	<li>How can we follow this teaching?</li>
	<li>Is there someone we can serve in simple ways this week?</li>
	<li>Who can you tell this story to this week?</li>
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

			<td class="social" @click="share('lesson', 'Hope for the Rejected: ', '/content/M2/eng/hope/hope01.html')">
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