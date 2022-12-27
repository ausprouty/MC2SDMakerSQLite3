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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>The Prophet Adam</h1></div>
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

<p class="indent">God created the first man and woman. This story is about the prophet Adam.</p>

</div>

<h2>Read</h2>

<ul>
	<li class="indent">Read Genesis 2:15-3:21 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Genesis 2:15-3:21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">15&nbsp;</sup>The <span class="small-caps">Lord God took the man and put him in the Garden of Eden to work it and take care of it.<sup class="versenum">16&nbsp;</sup>And the <span class="small-caps">Lord God commanded the man, &ldquo;You are free to eat from any tree in the garden;<sup class="versenum">17&nbsp;</sup>but you must not eat from the tree of the knowledge of good and evil, for when you eat from it you will certainly die.&rdquo;</span></span></p>

<p><sup class="versenum">18&nbsp;</sup>The <span class="small-caps">Lord God said, &ldquo;It is not good for the man to be alone. I will make a helper suitable for him.&rdquo;</span></p>

<p><sup class="versenum">19&nbsp;</sup>Now the <span class="small-caps">Lord God had formed out of the ground all the wild animals and all the birds in the sky. He brought them to the man to see what he would name them; and whatever the man called each living creature, that was its name.<sup class="versenum">20&nbsp;</sup>So the man gave names to all the livestock, the birds in the sky and all the wild animals.</span></p>

<p>But for Adam no suitable helper was found.<sup class="versenum">21&nbsp;</sup>So the <span class="small-caps">Lord God caused the man to fall into a deep sleep; and while he was sleeping, he took one of the man&rsquo;s ribs and then closed up the place with flesh.<sup class="versenum">22&nbsp;</sup>Then the <span class="small-caps">Lord God made a woman from the rib he had taken out of the man, and he brought her to the man.</span></span></p>

<p><sup class="versenum">23&nbsp;</sup>The man said,</p>

<p>&ldquo;This is now bone of my bones<br />
&nbsp;&nbsp;&nbsp;&nbsp;and flesh of my flesh;<br />
she shall be called &lsquo;woman,&rsquo;<br />
&nbsp;&nbsp;&nbsp;&nbsp;for she was taken out of man.&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>That is why a man leaves his father and mother and is united to his wife, and they become one flesh.</p>

<p><sup class="versenum">25&nbsp;</sup>Adam and his wife were both naked, and they felt no shame.</p>

<h3>The Fall</h3>

<p><sup class="versenum">3:1 </sup>Now the serpent was more crafty than any of the wild animals the <span class="small-caps">Lord God had made. He said to the woman, &ldquo;Did God really say, &lsquo;You must not eat from any tree in the garden&rsquo;?&rdquo;</span></p>

<p><sup class="versenum">2&nbsp;</sup>The woman said to the serpent, &ldquo;We may eat fruit from the trees in the garden,<sup class="versenum">3&nbsp;</sup>but God did say, &lsquo;You must not eat fruit from the tree that is in the middle of the garden, and you must not touch it, or you will die.&rsquo;&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>&ldquo;You will not certainly die,&rdquo; the serpent said to the woman.<sup class="versenum">5&nbsp;</sup>&ldquo;For God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil.&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it.<sup class="versenum">7&nbsp;</sup>Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves.</p>

<p><sup class="versenum">8&nbsp;</sup>Then the man and his wife heard the sound of the <span class="small-caps">Lord God as he was walking in the garden in the cool of the day, and they hid from the <span class="small-caps">Lord God among the trees of the garden.<sup class="versenum">9&nbsp;</sup>But the <span class="small-caps">Lord God called to the man, &ldquo;Where are you?&rdquo;</span></span></span></p>

<p><sup class="versenum">10&nbsp;</sup>He answered, &ldquo;I heard you in the garden, and I was afraid because I was naked; so I hid.&rdquo;</p>

<p><sup class="versenum">11&nbsp;</sup>And he said, &ldquo;Who told you that you were naked? Have you eaten from the tree that I commanded you not to eat from?&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>The man said, &ldquo;The woman you put here with me&mdash;she gave me some fruit from the tree, and I ate it.&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>Then the <span class="small-caps">Lord God said to the woman, &ldquo;What is this you have done?&rdquo;</span></p>

<p>The woman said, &ldquo;The serpent deceived me, and I ate.&rdquo;</p>

<p><sup class="versenum">14&nbsp;</sup>So the <span class="small-caps">Lord God said to the serpent, &ldquo;Because you have done this,</span></p>

<p>&ldquo;Cursed are you above all livestock<br />
&nbsp;&nbsp;&nbsp;&nbsp;and all wild animals!<br />
You will crawl on your belly<br />
&nbsp;&nbsp;&nbsp;&nbsp;and you will eat dust<br />
&nbsp;&nbsp;&nbsp;&nbsp;all the days of your life.<br />
<sup class="versenum">15&nbsp;</sup>And I will put enmity<br />
&nbsp;&nbsp;&nbsp;&nbsp;between you and the woman,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and between your offspring and hers;<br />
he will crush your head,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and you will strike his heel.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>To the woman he said,</p>

<p>&ldquo;I will make your pains in childbearing very severe;<br />
&nbsp;&nbsp;&nbsp;&nbsp;with painful labor you will give birth to children.<br />
Your desire will be for your husband,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and he will rule over you.&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>To Adam he said, &ldquo;Because you listened to your wife and ate fruit from the tree about which I commanded you, &lsquo;You must not eat from it,&rsquo;</p>

<p>&ldquo;Cursed is the ground because of you;<br />
&nbsp;&nbsp;&nbsp;&nbsp;through painful toil you will eat food from it<br />
&nbsp;&nbsp;&nbsp;&nbsp;all the days of your life.<br />
<sup class="versenum">18&nbsp;</sup>It will produce thorns and thistles for you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and you will eat the plants of the field.<br />
<sup class="versenum">19&nbsp;</sup>By the sweat of your brow<br />
&nbsp;&nbsp;&nbsp;&nbsp;you will eat your food<br />
until you return to the ground,<br />
&nbsp;&nbsp;&nbsp;&nbsp;since from it you were taken;<br />
for dust you are<br />
&nbsp;&nbsp;&nbsp;&nbsp;and to dust you will return.&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>Adam named his wife Eve, because she would become the mother of all the living.</p>

<p><sup class="versenum">21&nbsp;</sup>The <span class="small-caps">Lord God made garments of skin for Adam and his wife and clothed them. </span></p>
<!-- end bible -->

<p class="bible"></p>

<p>&nbsp;</p>

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
<div id="Summary1" class="summary"><h2>+ Summary</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>This is an important story. Even though Adam and Eve disobeyed God, God still loved them and took the skin of an innocent animal to provide a covering for their shame.</p>

<p>Read Leviticus 17:11 &ldquo;For the life of a creature is in the blood, and I have given it to you to pay the penalty for your yourselves on the altar; it is the blood that makes payment for ones life.&rdquo;</p>

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
	<li>The next story is about the&nbsp; Prophet Noah.</li>
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

			<td class="social" @click="share('lesson', 'The Prophet Adam: ', '/content/M2/eng/prophet/prophet01.html')">
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