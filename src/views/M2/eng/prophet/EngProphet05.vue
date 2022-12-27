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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>The Prophets David and Isaiah</h1></div>
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
<div id="Summary0" class="summary"><h2>+ Context</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>God sent many leaders and prophets to His people to help them follow His ways and to tell them of His plans.&nbsp; This story is from a message he sent through the prophet David and the prophet Isaiah</p>

</div>

<h2><br />
Read</h2>

<ul>
	<li class="indent">Read Isaiah 53, Psalm 2 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Isaiah 53</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<div>
<div>
<p><sup class="versenum">1 </sup>Who has believed our message<br />
&nbsp;&nbsp;&nbsp;&nbsp;and to whom has the arm of the <span class="small-caps">Lord been revealed?<br />
<sup class="versenum">2&nbsp;</sup>He grew up before him like a tender shoot,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and like a root out of dry ground.<br />
He had no beauty or majesty to attract us to him,<br />
&nbsp;&nbsp;&nbsp;&nbsp;nothing in his appearance that we should desire him.<br />
<sup class="versenum">3&nbsp;</sup>He was despised and rejected by mankind,<br />
&nbsp;&nbsp;&nbsp;&nbsp;a man of suffering, and familiar with pain.<br />
Like one from whom people hide their faces<br />
&nbsp;&nbsp;&nbsp;&nbsp;he was despised, and we held him in low esteem.</span></p>
</div>

<p><sup class="versenum">4&nbsp;</sup>Surely he took up our pain<br />
&nbsp;&nbsp;&nbsp;&nbsp;and bore our suffering,<br />
yet we considered him punished by God,<br />
&nbsp;&nbsp;&nbsp;&nbsp;stricken by him, and afflicted.<br />
<sup class="versenum">5&nbsp;</sup>But he was pierced for our transgressions,<br />
&nbsp;&nbsp;&nbsp;&nbsp;he was crushed for our iniquities;<br />
the punishment that brought us peace was on him,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and by his wounds we are healed.<br />
<sup class="versenum">6&nbsp;</sup>We all, like sheep, have gone astray,<br />
&nbsp;&nbsp;&nbsp;&nbsp;each of us has turned to our own way;<br />
and the <span class="small-caps">Lord has laid on him<br />
&nbsp;&nbsp;&nbsp;&nbsp;the iniquity of us all.</span></p>
</div>

<p><sup class="versenum">7&nbsp;</sup>He was oppressed and afflicted,<br />
&nbsp;&nbsp;&nbsp;&nbsp;yet he did not open his mouth;<br />
he was led like a lamb to the slaughter,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and as a sheep before its shearers is silent,<br />
&nbsp;&nbsp;&nbsp;&nbsp;so he did not open his mouth.<br />
<sup class="versenum">8&nbsp;</sup>By oppression and judgment he was taken away.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Yet who of his generation protested?<br />
For he was cut off from the land of the living;<br />
&nbsp;&nbsp;&nbsp;&nbsp;for the transgression of my people he was punished.<br />
<sup class="versenum">9&nbsp;</sup>He was assigned a grave with the wicked,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and with the rich in his death,<br />
though he had done no violence,<br />
&nbsp;&nbsp;&nbsp;&nbsp;nor was any deceit in his mouth.</p>
</div>

<p><sup class="versenum">10&nbsp;</sup>Yet it was the <span class="small-caps">Lord&rsquo;s will to crush him and cause him to suffer,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and though the <span class="small-caps">Lord makes his life an offering for sin,<br />
he will see his offspring and prolong his days,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the will of the <span class="small-caps">Lord will prosper in his hand.<br />
<sup class="versenum">11&nbsp;</sup>After he has suffered,<br />
&nbsp;&nbsp;&nbsp;&nbsp;he will see the light of life and be satisfied;<br />
by his knowledge my righteous servant will justify many,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and he will bear their iniquities.<br />
<sup class="versenum">12&nbsp;</sup>Therefore I will give him a portion among the great,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and he will divide the spoils with the strong,<br />
because he poured out his life unto death,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and was numbered with the transgressors.<br />
For he bore the sin of many,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and made intercession for the transgressors.</span></span></span></p>
</div>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button1" type="button" class="collapsible bible">Read Psalm 2</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<p><sup class="versenum">1&nbsp;</sup>Why do the nations conspire<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the peoples plot in vain?<br />
<sup class="versenum">2&nbsp;</sup>The kings of the earth rise up<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the rulers band together<br />
&nbsp;&nbsp;&nbsp;&nbsp;against the <span class="small-caps">Lord and against his anointed, saying,<br />
<sup class="versenum">3&nbsp;</sup>&ldquo;Let us break their chains<br />
&nbsp;&nbsp;&nbsp;&nbsp;and throw off their shackles.&rdquo;</span></p>

<p><sup class="versenum">4&nbsp;</sup>The One enthroned in heaven laughs;<br />
&nbsp;&nbsp;&nbsp;&nbsp;the Lord scoffs at them.<br />
<sup class="versenum">5&nbsp;</sup>He rebukes them in his anger<br />
&nbsp;&nbsp;&nbsp;&nbsp;and terrifies them in his wrath, saying,<br />
<sup class="versenum">6&nbsp;</sup>&ldquo;I have installed my king<br />
&nbsp;&nbsp;&nbsp;&nbsp;on Zion, my holy mountain.&rdquo;</p>

<p><sup class="versenum">7&nbsp;</sup>I will proclaim the <span class="small-caps">Lord&rsquo;s decree:</span></p>

<p>He said to me, &ldquo;You are my son;<br />
&nbsp;&nbsp;&nbsp;&nbsp;today I have become your father.<br />
<sup class="versenum">8&nbsp;</sup>Ask me,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and I will make the nations your inheritance,<br />
&nbsp;&nbsp;&nbsp;&nbsp;the ends of the earth your possession.<br />
<sup class="versenum">9&nbsp;</sup>You will break them with a rod of iron;<br />
&nbsp;&nbsp;&nbsp;&nbsp;you will dash them to pieces like pottery.&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>Therefore, you kings, be wise;<br />
&nbsp;&nbsp;&nbsp;&nbsp;be warned, you rulers of the earth.<br />
<sup class="versenum">11&nbsp;</sup>Serve the <span class="small-caps">Lord with fear<br />
&nbsp;&nbsp;&nbsp;&nbsp;and celebrate his rule with trembling.<br />
<sup class="versenum">12&nbsp;</sup>Kiss his son, or he will be angry<br />
&nbsp;&nbsp;&nbsp;&nbsp;and your way will lead to your destruction,<br />
for his wrath can flare up in a moment.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Blessed are all who take refuge in him.</span></p>
<!-- end bible -->

<p class="bible"></p>

</div>

<h2>Discovery Discussion</h2>

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
<div id="Summary1" class="summary"><h2>+ Summary</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>Highlight that Isaiah and David told of a Messiah that God would send. Through the Prophets, David and Isaiah, the Lord revealed that the Messiah would be crushed by God and offered as a sacrifice for the sins of the world. He would also be known as the Son of God.</p>

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
	<li>The next story is about Jesus.</li>
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

			<td class="social" @click="share('lesson', 'The Prophets David and Isaiah: ', '/content/M2/eng/prophet/prophet05.html')">
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