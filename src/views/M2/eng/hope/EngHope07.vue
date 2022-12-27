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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>Hope is Waiting for You</h1></div>
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

<p>This story of the lost son is one of the most famous stories in the Bible. The younger son asks his father to give him his inheritance. Then he wastes everything in wild living. He finally decides to return home and beg his father to treat him like one of the workers because he is not worthy to be a son. The father&rsquo;s response is very surprising.</p>

</div>

<h2><span><span><span><span>Read</span></span></span></span></h2>

<ul>
	<li>
	<p><span><span><span><span>Read or watch </span></span></span></span>Luke 15:11-32<span><span><span><span> two times as others listen.</span></span></span></span></p>
	</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 15:11-32</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Parable of the Lost Son</h3>

<p><sup class="versenum">11&nbsp;</sup>Jesus continued: &ldquo;There was a man who had two sons.<sup class="versenum">12&nbsp;</sup>The younger one said to his father, &lsquo;Father, give me my share of the estate.&rsquo; So he divided his property between them.</p>

<p><sup class="versenum">13&nbsp;</sup>&ldquo;Not long after that, the younger son got together all he had, set off for a distant country and there squandered his wealth in wild living.<sup class="versenum">14&nbsp;</sup>After he had spent everything, there was a severe famine in that whole country, and he began to be in need.<sup class="versenum">15&nbsp;</sup>So he went and hired himself out to a citizen of that country, who sent him to his fields to feed pigs.<sup class="versenum">16&nbsp;</sup>He longed to fill his stomach with the pods that the pigs were eating, but no one gave him anything.</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;When he came to his senses, he said, &lsquo;How many of my father&rsquo;s hired servants have food to spare, and here I am starving to death!<sup class="versenum">18&nbsp;</sup>I will set out and go back to my father and say to him: Father, I have sinned against heaven and against you.<sup class="versenum">19&nbsp;</sup>I am no longer worthy to be called your son; make me like one of your hired servants.&rsquo;<sup class="versenum">20&nbsp;</sup>So he got up and went to his father.</p>

<p>&ldquo;But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;The son said to him, &lsquo;Father, I have sinned against heaven and against you. I am no longer worthy to be called your son.&rsquo;</p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;But the father said to his servants, &lsquo;Quick! Bring the best robe and put it on him. Put a ring on his finger and sandals on his feet.<sup class="versenum">23&nbsp;</sup>Bring the fattened calf and kill it. Let&rsquo;s have a feast and celebrate.<sup class="versenum">24&nbsp;</sup>For this son of mine was dead and is alive again; he was lost and is found.&rsquo; So they began to celebrate.</p>

<p><sup class="versenum">25&nbsp;</sup>&ldquo;Meanwhile, the older son was in the field. When he came near the house, he heard music and dancing.<sup class="versenum">26&nbsp;</sup>So he called one of the servants and asked him what was going on.<sup class="versenum">27&nbsp;</sup>&lsquo;Your brother has come,&rsquo; he replied, &lsquo;and your father has killed the fattened calf because he has him back safe and sound.&rsquo;</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;The older brother became angry and refused to go in. So his father went out and pleaded with him.<sup class="versenum">29&nbsp;</sup>But he answered his father, &lsquo;Look! All these years I&rsquo;ve been slaving for you and never disobeyed your orders. Yet you never gave me even a young goat so I could celebrate with my friends.<sup class="versenum">30&nbsp;</sup>But when this son of yours who has squandered your property with prostitutes comes home, you kill the fattened calf for him!&rsquo;</p>

<p><sup class="versenum">31&nbsp;</sup>&ldquo;&lsquo;My son,&rsquo; the father said, &lsquo;you are always with me, and everything I have is yours.<sup class="versenum">32&nbsp;</sup>But we had to celebrate and be glad, because this brother of yours was dead and is alive again; he was lost and is found.&rsquo;&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/hope/07.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 15:11-32&nbsp;</button>
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

<p>The lost son hoped that his father would forgive him enough to let him be a worker. But the father had been hoping the son would return. He welcomed him back and restored him as a son.</p>

<p>Jesus tells this story of the lost son to show how much God the Father loves us. This is a story of hope from both the lost son and the loving father. It is the story of God and his love for us. God is hoping we will turn back and come to him. As we put our hope in God&rsquo;s forgiveness and mercy, we can expect him to accept us as sons like the father in the story.</p>

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

<h2>This is the last story of hope in this series.</h2>


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

			<td class="social" @click="share('lesson', 'Hope is Waiting for You: ', '/content/M2/eng/hope/hope07.html')">
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