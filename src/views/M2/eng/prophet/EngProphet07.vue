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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-prophet-index')">
        <img src="@/assets/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus is Powerful</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<h2>Caring for one another</h2>

<ul>
	<li><span>What has been a highlight this week?</span></li>
	<li><span>What has been a challenge this week?</span></li>
	<li><span>What do you want Isa to do for you this week?</span></li>
	<li><span>Briefly pray for Isa to meet the needs that are shared.</span></li>
</ul>

<h2>Celebrate Faithfulness</h2>

<ul>
	<li>Do you remember the story about Isa from last week?</li>
	<li>Were you able to share the story with someone last week?</li>
</ul>

<h2>Motivation and Encouragement</h2>

<ul>
	<li>Encourage each other to keep obeying Allah and remind each other of the importance of sharing the stories with others.</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2><span><span><span>+ Context</span></span></span></h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p><span><span><span>As Jesus went throughout Israel, He taught the people and He cared for people. But His followers were learning a lot about His identity. They saw Him do many miracles that revealed who He was.</span></span></span></p>

</div>

<h2><br />
Read</h2>

<ul>
	<li class="indent">Read Luke 5:17-26 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 5:17-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Forgives and Heals a Paralyzed Man</h3>

<p><sup class="versenum">17&nbsp;</sup>One day Jesus was teaching, and Pharisees and teachers of the law were sitting there. They had come from every village of Galilee and from Judea and Jerusalem. And the power of the Lord was with Jesus to heal the sick.<sup class="versenum">18&nbsp;</sup>Some men came carrying a paralyzed man on a mat and tried to take him into the house to lay him before Jesus.<sup class="versenum">19&nbsp;</sup>When they could not find a way to do this because of the crowd, they went up on the roof and lowered him on his mat through the tiles into the middle of the crowd, right in front of Jesus.</p>

<p><sup class="versenum">20&nbsp;</sup>When Jesus saw their faith, he said, &ldquo;Friend, your sins are forgiven.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>The Pharisees and the teachers of the law began thinking to themselves, &ldquo;Who is this fellow who speaks blasphemy? Who can forgive sins but God alone?&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Jesus knew what they were thinking and asked, &ldquo;Why are you thinking these things in your hearts?<sup class="versenum">23&nbsp;</sup>Which is easier: to say, &lsquo;Your sins are forgiven,&rsquo; or to say, &lsquo;Get up and walk&rsquo;?<sup class="versenum">24&nbsp;</sup>But I want you to know that the Son of Man has authority on earth to forgive sins.&rdquo; So he said to the paralyzed man, &ldquo;I tell you, get up, take your mat and go home.&rdquo;<sup class="versenum">25&nbsp;</sup>Immediately he stood up in front of them, took what he had been lying on and went home praising God.<sup class="versenum">26&nbsp;</sup>Everyone was amazed and gave praise to God. They were filled with awe and said, &ldquo;We have seen remarkable things today.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<h2><br />
Discovery Discussion</h2>

<ul>
	<li>What caught your attention in this story?</li>
	<li>What do you think is the main idea of this story?</li>
	<li>What do we learn about God?</li>
	<li>What do we learn about man&rsquo;s relationship to God?</li>
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


<h2>Read, Tell and Correct</h2>

<ul>
	<li>Read the story again. Have someone tell the story and ask the group to help if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2><span><span><span>+ Summary</span></span></span></h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p><span><span><span>Jesus showed His power in many ways. Jesus not only showed His power over sickness, but also His power to forgive sins. Later, He showed His power over nature by calming a storm (Luke 8:22-25) and even over death by raising Lazarus from the dead (John 11:1-44). Jesus revealed that He has power to give eternal life to those who believe in Him. His followers began to learn that He was the promised Messiah, the Son of God.</span></span></span></p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<h2>Choose something to obey together</h2>

<ul>
	<li>How can we follow this teaching?</li>
	<li>Is there anyone we can serve practically this week?</li>
	<li>Who is someone you could share this story with this week?</li>
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


<h2>Set a time to meet for the next story.</h2>

<ul>
	<li>The next story is about the end of Jesus&#39; life.</li>
	<li>When do you want to meet again?</li>
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

			<td class="social" @click="share('lesson', 'Jesus is Powerful: ', '/content/M2/eng/prophet/prophet07.html')">
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