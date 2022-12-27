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
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>We Have a Choice</h1></div>
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

<p><span><span><span>Jesus life, death and resurrection is God&rsquo;s provision that gives us a way to restore our relationship with God. This story is about how we can have a right relationship with Him.</span></span></span></p>

</div>

<h2><br />
Read</h2>

<ul>
	<li class="indent">Read John 3:1-21 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read John 3:1-21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Teaches Nicodemus</h3>

<p><sup class="versenum">1 </sup>Now there was a Pharisee, a man named Nicodemus who was a member of the Jewish ruling council.<sup class="versenum">2&nbsp;</sup>He came to Jesus at night and said, &ldquo;Rabbi, we know that you are a teacher who has come from God. For no one could perform the signs you are doing if God were not with him.&rdquo;</p>

<p><sup class="versenum">3&nbsp;</sup>Jesus replied, &ldquo;Very truly I tell you, no one can see the kingdom of God unless they are born again.&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>&ldquo;How can someone be born when they are old?&rdquo; Nicodemus asked. &ldquo;Surely they cannot enter a second time into their mother&rsquo;s womb to be born!&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>Jesus answered, &ldquo;Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit.<sup class="versenum">6&nbsp;</sup>Flesh gives birth to flesh, but the Spirit gives birth to spirit.<sup class="versenum">7&nbsp;</sup>You should not be surprised at my saying, &lsquo;You must be born again.&rsquo;<sup class="versenum">8&nbsp;</sup>The wind blows wherever it pleases. You hear its sound, but you cannot tell where it comes from or where it is going. So it is with everyone born of the Spirit.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;How can this be?&rdquo; Nicodemus asked.</p>

<p><sup class="versenum">10&nbsp;</sup>&ldquo;You are Israel&rsquo;s teacher,&rdquo; said Jesus, &ldquo;and do you not understand these things?<sup class="versenum">11&nbsp;</sup>Very truly I tell you, we speak of what we know, and we testify to what we have seen, but still you people do not accept our testimony.<sup class="versenum">12&nbsp;</sup>I have spoken to you of earthly things and you do not believe; how then will you believe if I speak of heavenly things?<sup class="versenum">13&nbsp;</sup>No one has ever gone into heaven except the one who came from heaven&mdash;the Son of Man.<sup class="versenum">14&nbsp;</sup>Just as Moses lifted up the snake in the wilderness, so the Son of Man must be lifted up,<sup class="versenum">15&nbsp;</sup>that everyone who believes may have eternal life in him.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.<sup class="versenum">17&nbsp;</sup>For God did not send his Son into the world to condemn the world, but to save the world through him.<sup class="versenum">18&nbsp;</sup>Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God&rsquo;s one and only Son.<sup class="versenum">19&nbsp;</sup>This is the verdict: Light has come into the world, but people loved darkness instead of light because their deeds were evil.<sup class="versenum">20&nbsp;</sup>Everyone who does evil hates the light, and will not come into the light for fear that their deeds will be exposed.<sup class="versenum">21&nbsp;</sup>But whoever lives by the truth comes into the light, so that it may be seen plainly that what they have done has been done in the sight of God.</p>
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

<p><span><span><span>As we have learned from all of our stories, Jesus is the promised messiah. Those who put their faith in Him will have eternal life. Read Romans 3:20, Romans 10:8-10. Highlight how someone can express their faith in Jesus.</span></span></span></p>

<p><span><span><span>If you want to be in right relationship to God and have your shame removed, you can express your desire through this prayer. &ldquo;Heavenly Father, I am in need of you. I confess that I have sought honor apart from you. As a result, I have dishonored you and my heart is impure. I thank you that Jesus willingly entered into my shame, took it upon himself and invites me to share in his honor. I believe in Jesus alone for honor and adoption into your family. I desire to follow you with my whole being. Make me the person you want me to be.&rdquo;</span></span></span></p>

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


<h2>This is the last story of the prophets and Jesus.</h2>

<p>&nbsp;</p>


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

			<td class="social" @click="share('lesson', 'We Have a Choice: ', '/content/M2/eng/prophet/prophet09.html')">
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