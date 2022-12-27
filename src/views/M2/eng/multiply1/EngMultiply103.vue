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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply1-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>Keeping in step with the Spirit</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 3: Keeping in step with the Spirit-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p class="back">Psalm 66:4 &ldquo;Everything on earth will worship you; they will sing your praises ... in glorious songs.&rdquo; Let&rsquo;s pause and praise God with a simple song</p>

</div>

<h2 class="back">Caring for each other</h2>

<ul class="back">
	<li>What is one highlight from this week?</li>
	<li>What is one challenge from this past week?</li>
	<li>What do you want Jesus to do for you this week?</li>
	<li>Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating God&#39;s Faithfulness</h2>

<ul class="back">
	<li>What happened as you trusted God with your goals and <em>I will</em> statements?</li>
</ul>

<ul class="back">
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p class="back">One day a woman went to visit her neighbour. As they were talking, she shared the gospel with her neighbour and her neighbour placed her faith in Christ. But then the woman started crying. &ldquo;My husband just died two weeks ago. Why didn&rsquo;t you tell me this sooner?&rdquo; You see, we never know when people&rsquo;s last day will be. That&rsquo;s why we must share the gospel when we have the chance.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">When we place our faith in Jesus, God&rsquo;s Spirit begins to live inside of us. He is called the Holy Spirit, the Spirit of Truth and our Helper. His ministry in our lives is so important that we will take time to study our relationship with Him.&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read&nbsp;1 Corinthians 2:14-3:3 two times as everyone listens.</p>

<button id="Button0" type="button" class="collapsible bible">Read 1 Corinthians 2:14-3:3</button><div class="collapsed" id ="Text0">
<sup>14&nbsp;</sup>The person without the Spirit does not accept the things that come from the Spirit of God but considers them foolishness, and cannot understand them because they are discerned only through the Spirit.<sup class="versenum">15&nbsp;</sup>The person with the Spirit makes judgments about all things, but such a person is not subject to merely human judgments,<sup class="versenum">16&nbsp;</sup>for,

<p>&ldquo;Who has known the mind of the Lord<br />
&nbsp;&nbsp;&nbsp;&nbsp;so as to instruct him?&rdquo;</p>

<p>But we have the mind of Christ.</p>

<p><sup class="versenum">3:1&nbsp;</sup>Brothers and sisters, I could not address you as people who live by the Spirit but as people who are still worldly&mdash;mere infants in Christ.<sup class="versenum">2&nbsp;</sup>I gave you milk, not solid food, for you were not yet ready for it. Indeed, you are still not ready.<sup class="versenum">3&nbsp;</sup>You are still worldly. For since there is jealousy and quarreling among you, are you not worldly? Are you not acting like mere humans?</p>

<p></p>
<!-- end bible -->

</div>

<h2 class="up">Discovery Discussion</h2>

<ul class="up">
	<li>What caught your attention (or what did you like best) and why?</li>
	<li>What did you learn about the Holy Spirit?&nbsp;</li>
	<li>What did you learn about people?</li>
	<li>How will you obey Jesus now that you know this?&nbsp;</li>
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


<h2 class="up">Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Though all Christians have the Spirit living in them, not all Christians are directed and empowered by the Spirit. When we trust in our own efforts or take control of our lives, the Bible calls us carnal and we don&rsquo;t experience an abundant or fruitful life. Read <span class="popup-link" @click = "popUp('pop1')"> Galatians 5:22-24</span>.&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">22&nbsp;</sup>But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness,<sup class="versenum">23&nbsp;</sup>gentleness and self-control. Against such things there is no law.<sup class="versenum">24&nbsp;</sup>Those who belong to Christ Jesus have crucified the flesh with its passions and desires.</p>
	</div>
	</div>
	<!-- end bible --></div>
	We can use 3 circles to help us remember the 3 types of people described in 1 Corinthians.</li>
</ul>

<h2 class="up"><img alt="3 circles" src="@/assets/images/eng/tc/transferable-concepts-image-20.png" /></h2>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><p>+ Preparing for Mission</p></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p class="forward">Review Spiritual Breathing</p>

<ul class="forward">
	<li>Exhale &ndash; <span class="popup-link" @click = "popUp('pop2')"> 1 John 1:9</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">9&nbsp;</sup>If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.</p>
	</div>
	</div>
	<!-- end bible --></div>
	confess our sins, agree to change our attitude or actions</li>
	<li>Inhale &ndash; surrender control of your life to Christ</li>
	<li>Pray to be controlled and empowered by the Holy Spirit</li>
</ul>

<div class="gospel-prayer">
<p class="forward"><em>Father, I need you. I acknowledge that I have been in control of my life; and that I have sinned against you. Thank you for forgiving my sins through Christ&rsquo;s death on the cross. I invite you to take control of my life and fill me with your Holy Spirit. I pray this is the name of Jesus as an expression of my faith. Thank you for taking control of my life and filling me with your Holy Spirit.</em></p>
</div>

<ul class="forward">
	<li>Practice drawing the 3 circles and teaching the Spiritual Breathing principle</li>
</ul>

</div>

<h2 class="forward">&nbsp;</h2>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Who can you tell what you have learned about the Holy Spirit?&rdquo; &nbsp;(use &ldquo;I will __ by __&rdquo;)</li>
	<li>Identify additional faith actions they will take with others (use &ldquo;I will __ by __&rdquo;).</li>
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


<h2 class="forward">Praying for the Mission&nbsp;</h2>

<ul class="forward">
	<li>Commit everyone&rsquo;s goals to the Lord. Ask the Lord to help us be faithful and use us to start a movement of disciple-makers.</li>
</ul>

<div class="for-enrichment">
<p>For further enrichment: Read <!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/tc/tc03', '#1')">
    Transferable Concept #3: How you can be filled with the Holy Spirit  
</span>
<!-- end linkInternal sdcard-->
and discuss with another group member.&nbsp;</p>
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

			<td class="social" @click="share('lesson', 'Keeping in step with the Spirit: ', '/content/M2/eng/multiply1/multiply103.html')">
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