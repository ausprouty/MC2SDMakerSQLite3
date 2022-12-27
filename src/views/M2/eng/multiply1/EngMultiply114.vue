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
                        <div class="chapter_number ltr"><h1>15.</h1></div>
                        <div class="chapter_title ltr"><h1>Remembering Jesus Sacrifice</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 14: Remembering Jesus Sacrifice-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	<li class="back">Read <span class="popup-link" @click = "popUp('pop1')"> Matthew 10:28-30</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">28&nbsp;</sup>Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.<sup class="versenum">29&nbsp;</sup>Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father&rsquo;s care.<sup class="versenum">30&nbsp;</sup>And even the very hairs of your head are all numbered.</p>
	</div>
	</div>
	<!-- end bible --></div>
	and sing songs.&nbsp;</li>
	<li class="back">Use a Statement of Faith about Jesus, like<span class="popup-link" @click = "popUp('pop2')">  Philippians 2:11</span>b;
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
<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop4')"> Hebrews 10:19-25</span>.&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">19&nbsp;</sup>Therefore, brothers and sisters, since we have confidence to enter the Most Holy Place by the blood of Jesus,<sup class="versenum">20&nbsp;</sup>by a new and living way opened for us through the curtain, that is, his body,<sup class="versenum">21&nbsp;</sup>and since we have a great priest over the house of God,<sup class="versenum">22&nbsp;</sup>let us draw near to God with a sincere heart and with the full assurance that faith brings, having our hearts sprinkled to cleanse us from a guilty conscience and having our bodies washed with pure water.<sup class="versenum">23&nbsp;</sup>Let us hold unswervingly to the hope we profess, for he who promised is faithful.<sup class="versenum">24&nbsp;</sup>And let us consider how we may spur one another on toward love and good deeds,<sup class="versenum">25&nbsp;</sup>not giving up meeting together, as some are in the habit of doing, but encouraging one another&mdash;and all the more as you see the Day approaching.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;The Lord did not call us to be alone. He called us to be together. We face many challenges and we need encouragement and accountability to obey the Lord. Following Jesus is best done in community. We need each other so let&rsquo;s not quit meeting together!&nbsp;</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">God gave the Jews a special celebration called the Passover to remember how He delivered them from slavery in Egypt. The night before Jesus died on the cross, He celebrated the Passover with His disciples and explained how the Passover pointed to Him.&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch Luke 22:14-20 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 22:14-20</button><div class="collapsed" id ="Text0">

<p><sup>14&nbsp;</sup>When the hour came, Jesus and his apostles reclined at the table.<sup class="versenum">15&nbsp;</sup>And he said to them, &ldquo;I have eagerly desired to eat this Passover with you before I suffer.<sup class="versenum">16&nbsp;</sup>For I tell you, I will not eat it again until it finds fulfillment in the kingdom of God.&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>After taking the cup, he gave thanks and said, &ldquo;Take this and divide it among you.<sup class="versenum">18&nbsp;</sup>For I tell you I will not drink again from the fruit of the vine until the kingdom of God comes.&rdquo;</p>

<p><sup class="versenum">19&nbsp;</sup>And he took bread, gave thanks and broke it, and gave it to them, saying, &ldquo;This is my body given for you; do this in remembrance of me.&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>In the same way, after the supper he took the cup, saying, &ldquo;This cup is the new covenant in my blood, which is poured out for you.</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/114.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 22:14-20&nbsp;</button>
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
<p class="up">Jesus modelled to His followers a way to remember His sacrificial death on the cross. [Take a piece of bread] The bread represents His body that was broken for us. [Show them wine or juice] The drink represents His blood that was shed for us and opened a new way to relate to God. He also commanded them to keep practicing it.&nbsp;</p>

<ul>
	<li class="nobreak-final-final">In <span class="popup-link" @click = "popUp('pop5')"> 1 Corinthians 11:23-30</span>,&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">23&nbsp;</sup>For I received from the Lord what I also passed on to you: The Lord Jesus, on the night he was betrayed, took bread,<sup class="versenum">24&nbsp;</sup>and when he had given thanks, he broke it and said, &ldquo;This is my body, which is for you; do this in remembrance of me.&rdquo;<sup class="versenum">25&nbsp;</sup>In the same way, after supper he took the cup, saying, &ldquo;This cup is the new covenant in my blood; do this, whenever you drink it, in remembrance of me.&rdquo;<sup class="versenum">26&nbsp;</sup>For whenever you eat this bread and drink this cup, you proclaim the Lord&rsquo;s death until he comes.</p>

	<p><sup class="versenum">27&nbsp;</sup>So then, whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord.<sup class="versenum">28&nbsp;</sup>Everyone ought to examine themselves before they eat of the bread and drink from the cup.<sup class="versenum">29&nbsp;</sup>For those who eat and drink without discerning the body of Christ eat and drink judgment on themselves.<sup class="versenum">30&nbsp;</sup>That is why many among you are weak and sick, and a number of you have fallen asleep.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;we see that as Paul started new churches, he taught all new believers how to obey Jesus&rsquo; command.&nbsp;</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p>Practice the Lord&rsquo;s supper. Use what local church leaders have given or use the suggested practice below.&nbsp;&nbsp; &nbsp;</p>

<ul>
	<li>Read <span class="popup-link" @click = "popUp('pop6')"> 1 Corinthians 11:23-30</span>

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">23&nbsp;</sup>For I received from the Lord what I also passed on to you: The Lord Jesus, on the night he was betrayed, took bread,<sup class="versenum">24&nbsp;</sup>and when he had given thanks, he broke it and said, &ldquo;This is my body, which is for you; do this in remembrance of me.&rdquo;<sup class="versenum">25&nbsp;</sup>In the same way, after supper he took the cup, saying, &ldquo;This cup is the new covenant in my blood; do this, whenever you drink it, in remembrance of me.&rdquo;<sup class="versenum">26&nbsp;</sup>For whenever you eat this bread and drink this cup, you proclaim the Lord&rsquo;s death until he comes.</p>

	<p><sup class="versenum">27&nbsp;</sup>So then, whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord.<sup class="versenum">28&nbsp;</sup>Everyone ought to examine themselves before they eat of the bread and drink from the cup.<sup class="versenum">29&nbsp;</sup>For those who eat and drink without discerning the body of Christ eat and drink judgment on themselves.<sup class="versenum">30&nbsp;</sup>That is why many among you are weak and sick, and a number of you have fallen asleep.</p>
	</div>
	</div>
	<!-- end bible --></div>
	.</li>
	<li>Pause and give them time to confess their sins and talk to the Lord.</li>
	<li>Give the bread, tell them this represents His body that was broken for us. Eat it together.</li>
	<li>Give the drink. Tell them this represents His blood that was shed for us. Drink it together.</li>
	<li>Pray and thank the Lord for what He has done for us.</li>
</ul>

</div>

<h2 class="forward">Going on the Mission</h2>

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

			<td class="social" @click="share('lesson', 'Remembering Jesus Sacrifice: ', '/content/M2/eng/multiply1/multiply114.html')">
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