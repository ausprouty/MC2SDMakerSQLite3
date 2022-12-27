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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>Hope Through Death</h1></div>
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

<p>Hatred towards Jesus grew until he was arrested. People to untrue lies about him. People hated Jesus so much that they would rather have a murderer released than for Jesus to be released.</p>

</div>

<h2><span><span><span><span>Read</span></span></span></span></h2>

<ul>
	<li>
	<p><span><span><span><span>Read or watch </span></span></span></span>Luke 22:66-23:25<span><span><span><span> two times as others listen.</span></span></span></span></p>
	</li>
</ul>
</div>

<button id="Button0" type="button" class="collapsible bible">Read Luke 22:66-23:25</button><div class="collapsed" id ="Text0">

<h3>Jesus Before Pilate and Herod</h3>

<p><sup class="versenum">66&nbsp;</sup>At daybreak the council of the elders of the people, both the chief priests and the teachers of the law, met together, and Jesus was led before them.<sup class="versenum">67&nbsp;</sup>&ldquo;If you are the Messiah,&rdquo; they said, &ldquo;tell us.&rdquo;</p>

<p>Jesus answered, &ldquo;If I tell you, you will not believe me,<sup class="versenum">68&nbsp;</sup>and if I asked you, you would not answer.<sup class="versenum">69&nbsp;</sup>But from now on, the Son of Man will be seated at the right hand of the mighty God.&rdquo;</p>

<p><sup class="versenum">70&nbsp;</sup>They all asked, &ldquo;Are you then the Son of God?&rdquo;</p>

<p>He replied, &ldquo;You say that I am.&rdquo;</p>

<p><sup class="versenum">71&nbsp;</sup>Then they said, &ldquo;Why do we need any more testimony? We have heard it from his own lips.&rdquo;</p>

<p><sup class="versenum">23:1 </sup>Then the whole assembly rose and led him off to Pilate.<sup class="versenum">2&nbsp;</sup>And they began to accuse him, saying, &ldquo;We have found this man subverting our nation. He opposes payment of taxes to Caesar and claims to be Messiah, a king.&rdquo;</p>

<p><sup class="versenum">3&nbsp;</sup>So Pilate asked Jesus, &ldquo;Are you the king of the Jews?&rdquo;</p>

<p>&ldquo;You have said so,&rdquo; Jesus replied.</p>

<p><sup class="versenum">4&nbsp;</sup>Then Pilate announced to the chief priests and the crowd, &ldquo;I find no basis for a charge against this man.&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>But they insisted, &ldquo;He stirs up the people all over Judea by his teaching. He started in Galilee and has come all the way here.&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>On hearing this, Pilate asked if the man was a Galilean.<sup class="versenum">7&nbsp;</sup>When he learned that Jesus was under Herod&rsquo;s jurisdiction, he sent him to Herod, who was also in Jerusalem at that time.</p>

<p><sup class="versenum">8&nbsp;</sup>When Herod saw Jesus, he was greatly pleased, because for a long time he had been wanting to see him. From what he had heard about him, he hoped to see him perform a sign of some sort.<sup class="versenum">9&nbsp;</sup>He plied him with many questions, but Jesus gave him no answer.<sup class="versenum">10&nbsp;</sup>The chief priests and the teachers of the law were standing there, vehemently accusing him.<sup class="versenum">11&nbsp;</sup>Then Herod and his soldiers ridiculed and mocked him. Dressing him in an elegant robe, they sent him back to Pilate.<sup class="versenum">12&nbsp;</sup>That day Herod and Pilate became friends&mdash;before this they had been enemies.</p>

<p><sup class="versenum">13&nbsp;</sup>Pilate called together the chief priests, the rulers and the people,<sup class="versenum">14&nbsp;</sup>and said to them, &ldquo;You brought me this man as one who was inciting the people to rebellion. I have examined him in your presence and have found no basis for your charges against him.<sup class="versenum">15&nbsp;</sup>Neither has Herod, for he sent him back to us; as you can see, he has done nothing to deserve death.<sup class="versenum">16&nbsp;</sup>Therefore, I will punish him and then release him.&rdquo;<sup class="versenum">[17]&nbsp;</sup></p>

<p><sup class="versenum">18&nbsp;</sup>But the whole crowd shouted, &ldquo;Away with this man! Release Barabbas to us!&rdquo;<sup class="versenum">19&nbsp;</sup>(Barabbas had been thrown into prison for an insurrection in the city, and for murder.)</p>

<p><sup class="versenum">20&nbsp;</sup>Wanting to release Jesus, Pilate appealed to them again.<sup class="versenum">21&nbsp;</sup>But they kept shouting, &ldquo;Crucify him! Crucify him!&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>For the third time he spoke to them: &ldquo;Why? What crime has this man committed? I have found in him no grounds for the death penalty. Therefore I will have him punished and then release him.&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>But with loud shouts they insistently demanded that he be crucified, and their shouts prevailed.<sup class="versenum">24&nbsp;</sup>So Pilate decided to grant their demand.<sup class="versenum">25&nbsp;</sup>He released the man who had been thrown into prison for insurrection and murder, the one they asked for, and surrendered Jesus to their will.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/hope/05.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 22:66-23:25&nbsp;</button>
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

<p>Pilate recognized that Jesus was not guilty and should not die. He tried to release Jesus but the people rejected Jesus&rsquo; release. They preferred to release the man Barabbas who had murdered others.</p>

<p>Jesus put his hope in God his Father rather than in Pilate or the crowds of people. His hope gave him confidence to face his own death through crucifixion.</p>

<p>We can have hope that frees us from fear of others and even from fear of death.</p>

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

			<td class="social" @click="share('lesson', 'Hope Through Death: ', '/content/M2/eng/hope/hope05.html')">
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