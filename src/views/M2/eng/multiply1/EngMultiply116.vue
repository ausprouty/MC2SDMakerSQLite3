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
                        <div class="chapter_number ltr"><h1>17.</h1></div>
                        <div class="chapter_title ltr"><h1>Cost of Discipleship </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 16: Cost of Discipleship -->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	<li class="back">Read <span class="popup-link" @click = "popUp('pop1')"> Hebrews 13:14-15</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">14&nbsp;</sup>For here we do not have an enduring city, but we are looking for the city that is to come.</p>

	<p><sup class="versenum">15&nbsp;</sup>Through Jesus, therefore, let us continually offer to God a sacrifice of praise&mdash;the fruit of lips that openly profess his name.</p>
	</div>
	</div>
	<!-- end bible --></div>
	and sing songs.&nbsp;</li>
	<li class="back">Use a Statement of Faith about Jesus like<span class="popup-link" @click = "popUp('pop2')">  Philippians 2:11</span>b +
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<div>
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop3')"> 1 Timothy 2:4-6</span>a

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people.&nbsp;</p>
	</div>
	</div>
	</div>
	</li>
</ul>

</div>

<ul>
</ul>

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

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p class="back">God&rsquo;s heart is for all the lost. Yet, so many places around us do not have followers of Jesus to be a light for the community and show God&rsquo;s love to the people there. As followers of Jesus, we are called by God to align our hearts to His heart for ALL the lost. We need to pursue a big vision that will reach all lost communities around us. We are trusting God to use us to bring &ldquo;a church for every village and community and the gospel for every person!&rdquo;&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">Large crowds were beginning to follow Jesus. They heard of the miraculous healings and the feedings of the multitudes. They were attracted to Him because of the benefits they hoped to receive from Him. But Jesus knew their hearts. He knew they really were not willing to follow Him unconditionally. He wanted them to recognize that to follow Him meant to surrender everything to Him.&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch Luke 14:25-33 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 14:25-33</button><div class="collapsed" id ="Text0">

<p><sup>25&nbsp;</sup>Large crowds were traveling with Jesus, and turning to them he said:<sup class="versenum">26&nbsp;</sup>&ldquo;If anyone comes to me and does not hate father and mother, wife and children, brothers and sisters&mdash;yes, even their own life&mdash;such a person cannot be my disciple.<sup class="versenum">27&nbsp;</sup>And whoever does not carry their cross and follow me cannot be my disciple.</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;Suppose one of you wants to build a tower. Won&rsquo;t you first sit down and estimate the cost to see if you have enough money to complete it?<sup class="versenum">29&nbsp;</sup>For if you lay the foundation and are not able to finish it, everyone who sees it will ridicule you,<sup class="versenum">30&nbsp;</sup>saying, &lsquo;This person began to build and wasn&rsquo;t able to finish.&rsquo;</p>

<p><sup class="versenum">31&nbsp;</sup>&ldquo;Or suppose a king is about to go to war against another king. Won&rsquo;t he first sit down and consider whether he is able with ten thousand men to oppose the one coming against him with twenty thousand?<sup class="versenum">32&nbsp;</sup>If he is not able, he will send a delegation while the other is still a long way off and will ask for terms of peace.<sup class="versenum">33&nbsp;</sup>In the same way, those of you who do not give up everything you have cannot be my disciples.</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/116.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 14:25-33&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention (or what did you like best) and why?</li>
	<li>What did you learn about Jesus?</li>
	<li>What did you learn about people?</li>
	<li>How will you obey Jesus now that you know this?</li>
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
	<li class="nobreak-final-final">When we follow Christ, the benefits are eternal and beyond compare: forgiveness of sins, salvation, and security in the King of Kings and Lord of Lords. But being a disciple of Jesus will not make you exempt from pain and trials. Because we live in an evil world, following Christ will also bring you persecution and challenges. Anyone who desires to live a godly life in Jesus will be persecuted by others. But let&rsquo;s be encouraged by Peter, one of Jesus&rsquo; closest friends, read <span class="popup-link" @click = "popUp('pop4')"> 1 Peter 4:12-16</span>&nbsp;and

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">12&nbsp;</sup>Dear friends, do not be surprised at the fiery ordeal that has come on you to test you, as though something strange were happening to you.<sup class="versenum">13&nbsp;</sup>But rejoice inasmuch as you participate in the sufferings of Christ, so that you may be overjoyed when his glory is revealed.<sup class="versenum">14&nbsp;</sup>If you are insulted because of the name of Christ, you are blessed, for the Spirit of glory and of God rests on you.<sup class="versenum">15&nbsp;</sup>If you suffer, it should not be as a murderer or thief or any other kind of criminal, or even as a meddler.<sup class="versenum">16&nbsp;</sup>However, if you suffer as a Christian, do not be ashamed, but praise God that you bear that name.</p>
	</div>
	</div>
	<!-- end bible --></div>
	and <span class="popup-link" @click = "popUp('pop5')"> 1 Peter 4:19</span>.

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">19&nbsp;</sup>So then, those who suffer according to God&rsquo;s will should commit themselves to their faithful Creator and continue to do good.</p>
	</div>
	</div>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practice any skill or topic from previous lessons to help prepare to minister to others.</li>
	<li>Practice giving, as agreed upon.</li>
	<li>Remember Jesus&rsquo; sacrifice through communion, if appropriate.</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you will take the initiative to minister to this week.</li>
	<li>Write &ldquo;I will by when&rdquo; statements and tell them to your small group.</li>
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


<h2 class="forward">Praying for the Mission</h2>

<ul class="forward">
	<li>Commit everyone&#39;s goals to the Lord. Ask the Lord to help us be faithful and use us to start a movement of disciple-makers.</li>
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

			<td class="social" @click="share('lesson', 'Cost of Discipleship : ', '/content/M2/eng/multiply1/multiply116.html')">
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