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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply2-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus as a Boy</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back"><em>Read a scripture and sing worship songs.</em></p>

<ul>
	<li class="nobreak-final-final">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (<span class="popup-link" @click = "popUp('pop1')"> Philippians 2:11</span>b;&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6</span>a).&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people.&nbsp;</p>
	</div>
	</li>
</ul>

</div>

<h2 class="back">Caring for each other</h2>

<p><em>Minister to one another&rsquo;s needs in prayer, biblical counsel and encouragement. </em></p>

<ul>
	<li>Ask each person to tell one highlight and explain one challenge they experienced this week.</li>
	<li>Ask, &ldquo;What do you want Jesus to do for you this week?&rdquo; Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating&nbsp; Faithfulness</h2>

<p><em>Encourage loving accountability to obey Jesus</em></p>

<ul class="back">
	<li>Ask, &ldquo;What happened as you trusted God with your goals and I will statements?&rdquo;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back"><em>Choose a way to cast vision for who they can become in Christ or what God can do through them by:</em></p>

<ul>
	<li class="back">a scripture that reminds them of the Father&rsquo;s Heart and of the end vision.</li>
	<li class="back">reflecting on the changes in their life since they started following Christ</li>
	<li class="back">reminding them of what God wants to do through them</li>
</ul>

<p class="back">Our vision is:<em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></p>

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


</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li class="up"><span>Ask the group to tell the story from last week.</span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch Matthew 2:19-23 and Luke 2:39-52 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Matthew 2:19-23</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Return to Nazareth</h3>

<p><sup class="versenum">19&nbsp;</sup>After Herod died, an angel of the Lord appeared in a dream to Joseph in Egypt<sup class="versenum">20&nbsp;</sup>and said, &ldquo;Get up, take the child and his mother and go to the land of Israel, for those who were trying to take the child&rsquo;s life are dead.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>So he got up, took the child and his mother and went to the land of Israel.<sup class="versenum">22&nbsp;</sup>But when he heard that Archelaus was reigning in Judea in place of his father Herod, he was afraid to go there. Having been warned in a dream, he withdrew to the district of Galilee,<sup class="versenum">23&nbsp;</sup>and he went and lived in a town called Nazareth. So was fulfilled what was said through the prophets, that he would be called a Nazarene.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/204.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 2:19-23&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Read Luke 2:39-52</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<p><sup class="versenum">39&nbsp;</sup>When Joseph and Mary had done everything required by the Law of the Lord, they returned to Galilee to their own town of Nazareth.<sup class="versenum">40&nbsp;</sup>And the child grew and became strong; he was filled with wisdom, and the grace of God was on him.</p>

<h3>The Boy Jesus at the Temple</h3>

<p><sup class="versenum">41&nbsp;</sup>Every year Jesus&rsquo; parents went to Jerusalem for the Festival of the Passover.<sup class="versenum">42&nbsp;</sup>When he was twelve years old, they went up to the festival, according to the custom.<sup class="versenum">43&nbsp;</sup>After the festival was over, while his parents were returning home, the boy Jesus stayed behind in Jerusalem, but they were unaware of it.<sup class="versenum">44&nbsp;</sup>Thinking he was in their company, they traveled on for a day. Then they began looking for him among their relatives and friends.<sup class="versenum">45&nbsp;</sup>When they did not find him, they went back to Jerusalem to look for him.<sup class="versenum">46&nbsp;</sup>After three days they found him in the temple courts, sitting among the teachers, listening to them and asking them questions.<sup class="versenum">47&nbsp;</sup>Everyone who heard him was amazed at his understanding and his answers.<sup class="versenum">48&nbsp;</sup>When his parents saw him, they were astonished. His mother said to him, &ldquo;Son, why have you treated us like this? Your father and I have been anxiously searching for you.&rdquo;</p>

<p><sup class="versenum">49&nbsp;</sup>&ldquo;Why were you searching for me?&rdquo; he asked. &ldquo;Didn&rsquo;t you know I had to be in my Father&rsquo;s house?&rdquo;<sup class="versenum">50&nbsp;</sup>But they did not understand what he was saying to them.</p>

<p><sup class="versenum">51&nbsp;</sup>Then he went down to Nazareth with them and was obedient to them. But his mother treasured all these things in her heart.<sup class="versenum">52&nbsp;</sup>And Jesus grew in wisdom and stature, and in favor with God and man.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/204-1.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 2:41-52&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li><span>What caught your attention or what did you like best? Why?</span></li>
	<li><span>What is new or has developed at this point in Jesus story?</span></li>
	<li><span>What do we learn about the humanity or divinity of Jesus from this passage?</span></li>
	<li><span>How can we live differently now that we know this story?</span></li>
</ul>

<p><span>Additional Questions:</span></p>

<ul class="up">
	<li><span>What are his followers learning?</span></li>
	<li><span>What is Jesus modeling to us about life and ministry or godly leadership?</span></li>
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


<h2 class="up">Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">Each year Jesus&rsquo; family would make a pilgrimage to Jerusalem to celebrate Passover with family and friends. This year was special because at age 12, Jesus could ask questions and interact with the religious leaders of His day. <span class="popup-link" @click = "popUp('pop4')"> Luke 2:40</span>

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">40&nbsp;</sup>And the child grew and became strong; he was filled with wisdom, and the grace of God was on him.</p>
	</div>
	</div>
	<!-- end bible --></div>
	summarizes Jesus&rsquo; boyhood until age 12. <span class="popup-link" @click = "popUp('pop3')"> Luke 2:52</span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">52&nbsp;</sup>And Jesus grew in wisdom and stature, and in favor with God and man.</p>
	</div>
	</div>
	<!-- end bible --></div>
	summarizes his growth toward manhood which covers the time at approximately age 18 until he was about 30.</li>
</ul>

</div>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<h2 class="forward">Preparing for the Mission</h2>

<ul class="forward">
	<li>Practice needed skills or previous topics to help prepare to minister to others:
	<ul>
		<li>Prayer, Care, Share</li>
		<li>Gospel</li>
		<li>Foundational Bible Studies.</li>
	</ul>
	</li>
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify people or places you will take the initiative to minister to this week.</li>
	<li>Write &ldquo;I will by when&rdquo; statements and share with your small group.</li>
</ul>

<!-- begin note sdcard -->
<div class="note-div">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note sdcard -->


<h2 class="forward">Praying For the Mission</h2>

<ul class="forward">
	<li>Commit everyone&#39;s goals to the Lord. Ask the Lord to help us be faithful and use us to start a movement of disciple-makers.</li>
</ul>

<h2>Benediction (optional)</h2>


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

			<td class="social" @click="share('lesson', 'Jesus as a Boy: ', '/content/M2/eng/multiply2/multiply204.html')">
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