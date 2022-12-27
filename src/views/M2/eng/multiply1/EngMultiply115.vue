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
                        <div class="chapter_number ltr"><h1>16.</h1></div>
                        <div class="chapter_title ltr"><h1>Giving with Purpose</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 15: Giving with Purpose -->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="back">Read. <span class="popup-link" @click = "popUp('pop1')"> Hebrews 4:14-16 </span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">14&nbsp;</sup>Therefore, since we have a great high priest who has ascended into heaven, Jesus the Son of God, let us hold firmly to the faith we profess.<sup class="versenum">15&nbsp;</sup>For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are&mdash;yet he did not sin.<sup class="versenum">16&nbsp;</sup>Let us then approach God&rsquo;s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.</p>
	</div>
	</div>
	<!-- end bible --></div>
	and sing songs&nbsp;</li>
	<li class="back">Use a Statement of Faith about Jesus like <span class="popup-link" @click = "popUp('pop2')"> Philippians 2:11</span>b
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
	and&nbsp;&nbsp;<span class="popup-link" @click = "popUp('pop3')"> 1 Timothy 2:4-6</span>a

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people.&nbsp;</p>
	</div>
	</div>
	<!-- end bible --></div>
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
	<li class="nobreak-final-final">One day Jesus sent out His followers to minister to people in the surrounding villages.&nbsp; When they returned they were so excited about all that God had done through them, &ldquo;Lord, even the demons obey us when we use your name!&rdquo; After Jesus celebrated with them, He gave them this perspective: &ldquo;But don&rsquo;t rejoice because evil spirits obey you; rejoice because your names are registered in heaven.&rdquo; (<span class="popup-link" @click = "popUp('pop4')"> Luke 10:17-20</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">17&nbsp;</sup>The seventy-two returned with joy and said, &ldquo;Lord, even the demons submit to us in your name.&rdquo;</p>

	<p><sup class="versenum">18&nbsp;</sup>He replied, &ldquo;I saw Satan fall like lightning from heaven.<sup class="versenum">19&nbsp;</sup>I have given you authority to trample on snakes and scorpions and to overcome all the power of the enemy; nothing will harm you.<sup class="versenum">20&nbsp;</sup>However, do not rejoice that the spirits submit to you, but rejoice that your names are written in heaven.&rdquo;</p>
	</div>
	</div>
	<!-- end bible --></div>
	Jesus reminds us that our joy is not found in results but that we know Him!&nbsp;</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">The early church was committed to one another. They were meeting together regularly, and many new people were coming to Christ. After a time of persecution, they prayed for boldness and the Lord helped them speak the gospel boldly. This story about the believers in Jerusalem shows their commitment to one another.&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch Acts 4:32-37 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Acts 4:32-37</button><div class="collapsed" id ="Text0">

<p><sup>32&nbsp;</sup>All the believers were one in heart and mind. No one claimed that any of their possessions was their own, but they shared everything they had.<sup class="versenum">33&nbsp;</sup>With great power the apostles continued to testify to the resurrection of the Lord Jesus. And God&rsquo;s grace was so powerfully at work in them all<sup class="versenum">34&nbsp;</sup>that there were no needy persons among them. For from time to time those who owned land or houses sold them, brought the money from the sales<sup class="versenum">35&nbsp;</sup>and put it at the apostles&rsquo; feet, and it was distributed to anyone who had need.</p>

<p><sup class="versenum">36&nbsp;</sup>Joseph, a Levite from Cyprus, whom the apostles called Barnabas (which means &ldquo;son of encouragement&rdquo;),<sup class="versenum">37&nbsp;</sup>sold a field he owned and brought the money and put it at the apostles&rsquo; feet.</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/115.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 4:32-37&nbsp;</button>
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
	<li class="nobreak-final-final">Even from the beginning of the church, the believers cared for one another&rsquo;s needs by giving. We learn from this story that we should give willingly, not under compulsion. This is clearly stated in <span class="popup-link" @click = "popUp('pop5')"> 2 Corinthians 9:7</span>.&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">7&nbsp;</sup>Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.</p>
	</div>
	</div>
	</div>
	</li>
	<li class="nobreak-final-final">Read<span class="popup-link" @click = "popUp('pop6')">  Acts 11:27-29</span>.&nbsp;
	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">27&nbsp;</sup>During this time some prophets came down from Jerusalem to Antioch.<sup class="versenum">28&nbsp;</sup>One of them, named Agabus, stood up and through the Spirit predicted that a severe famine would spread over the entire Roman world. (This happened during the reign of Claudius.)<sup class="versenum">29&nbsp;</sup>The disciples, as each one was able, decided to provide help for the brothers and sisters living in Judea.</p>
	</div>
	</div>
	<!-- end bible --></div>
	The early church also gave to believers in other churches. This shows us that our giving can be used for needs outside of our own church.</li>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop7')"> Luke 8:1-3</span>.&nbsp;
	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>After this, Jesus traveled about from one town and village to another, proclaiming the good news of the kingdom of God. The Twelve were with him,<sup class="versenum">2&nbsp;</sup>and also some women who had been cured of evil spirits and diseases: Mary (called Magdalene) from whom seven demons had come out;<sup class="versenum">3&nbsp;</sup>Joanna the wife of Chuza, the manager of Herod&rsquo;s household; Susanna; and many others. These women were helping to support them out of their own means.</p>
	</div>
	</div>
	<!-- end bible --></div>
	This story shows us that giving is also used for taking the gospel to other places and spread God&rsquo;s message.</li>
	<li class="nobreak-final-final">In <span class="popup-link" @click = "popUp('pop8')"> 1 Corinthians 16:2</span>,&nbsp;
	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">2&nbsp;</sup>On the first day of every week, each one of you should set aside a sum of money in keeping with your income, saving it up, so that when I come no collections will have to be made.</p>
	</div>
	</div>
	<!-- end bible --></div>
	Paul encourages people to practice giving each week to be used for these purposes.&nbsp;</li>
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
	<li>Discuss how giving will be handled.</li>
	<li>Identify needs where your giving can be used.</li>
	<li>Remember Jesus&rsquo; sacrifice through communion if appropriate.</li>
	<li>Practice any skill or topic from previous lessons to help prepare to minister to others. &nbsp;</li>
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

			<td class="social" @click="share('lesson', 'Giving with Purpose: ', '/content/M2/eng/multiply1/multiply115.html')">
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