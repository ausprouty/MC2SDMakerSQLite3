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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>Hope Rose from the Dead</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson">
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

<p>Jesus rose from the dead. His followers had a very hard time understanding this. People do not come back to life from the dead. Jesus used this resurrection to help his followers understand better about the things of heaven.</p>

</div>

<h2><span><span><span><span>Read</span></span></span></span></h2>

<ul>
	<li>
	<p><span><span><span><span>Read or watch </span></span></span></span>Luke 24:1-20<span><span><span><span> two times as others listen.</span></span></span></span></p>
	</li>
</ul>
</div>

<button id="Button0" type="button" class="collapsible bible">Read Luke 24:1-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Has Risen</h3>

<p><sup class="versenum">1 </sup>On the first day of the week, very early in the morning, the women took the spices they had prepared and went to the tomb.<sup class="versenum">2&nbsp;</sup>They found the stone rolled away from the tomb,<sup class="versenum">3&nbsp;</sup>but when they entered, they did not find the body of the Lord Jesus.<sup class="versenum">4&nbsp;</sup>While they were wondering about this, suddenly two men in clothes that gleamed like lightning stood beside them.<sup class="versenum">5&nbsp;</sup>In their fright the women bowed down with their faces to the ground, but the men said to them, &ldquo;Why do you look for the living among the dead?<sup class="versenum">6&nbsp;</sup>He is not here; he has risen! Remember how he told you, while he was still with you in Galilee:<sup class="versenum">7&nbsp;</sup>&lsquo;The Son of Man must be delivered over to the hands of sinners, be crucified and on the third day be raised again.&rsquo; &rdquo;<sup class="versenum">8&nbsp;</sup>Then they remembered his words.</p>

<p><sup class="versenum">9&nbsp;</sup>When they came back from the tomb, they told all these things to the Eleven and to all the others.<sup class="versenum">10&nbsp;</sup>It was Mary Magdalene, Joanna, Mary the mother of James, and the others with them who told this to the apostles.<sup class="versenum">11&nbsp;</sup>But they did not believe the women, because their words seemed to them like nonsense.<sup class="versenum">12&nbsp;</sup>Peter, however, got up and ran to the tomb. Bending over, he saw the strips of linen lying by themselves, and he went away, wondering to himself what had happened.</p>

<h3>On the Road to Emmaus</h3>

<p><sup class="versenum">13&nbsp;</sup>Now that same day two of them were going to a village called Emmaus, about seven miles from Jerusalem.<sup class="versenum">14&nbsp;</sup>They were talking with each other about everything that had happened.<sup class="versenum">15&nbsp;</sup>As they talked and discussed these things with each other, Jesus himself came up and walked along with them;<sup class="versenum">16&nbsp;</sup>but they were kept from recognizing him.</p>

<p><sup class="versenum">17&nbsp;</sup>He asked them, &ldquo;What are you discussing together as you walk along?&rdquo;</p>

<p>They stood still, their faces downcast.<sup class="versenum">18&nbsp;</sup>One of them, named Cleopas, asked him, &ldquo;Are you the only one visiting Jerusalem who does not know the things that have happened there in these days?&rdquo;</p>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;What things?&rdquo; he asked.</p>

<p>&ldquo;About Jesus of Nazareth,&rdquo; they replied. &ldquo;He was a prophet, powerful in word and deed before God and all the people.<sup class="versenum">20&nbsp;</sup>The chief priests and our rulers handed him over to be sentenced to death, and they crucified him;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/hope/06.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 24:1-20&nbsp;</button>
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

<p>Jesus gives us hope after death. He was the first to be resurrected from the dead. He gained victory over death. He promises that we will be like him and will live after we die. We do not need to fear death. We will live with him in heaven forever.</p>

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

			<td class="social" @click="share('lesson', 'Hope Rose from the Dead: ', '/content/M2/eng/hope/hope06.html')">
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