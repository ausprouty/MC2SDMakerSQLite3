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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply3-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>48.</h1></div>
                        <div class="chapter_title ltr"><h1>Paul Gives Testimony to Roman Governor Felix</h1></div>
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

<p class="back">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (Philippians 2:11b; 1 Timothy 2:4-6a)</p>

</div>

<h2 class="back">Caring for each other</h2>

<p><em>Minister to one another&rsquo;s needs in prayer, biblical counsel and encouragement. </em></p>

<ul>
	<li>Ask each person to tell one highlight and explain one challenge they experienced this week.</li>
	<li>Ask, &ldquo;What do you want Jesus to do for you this week?&rdquo; Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating&nbsp; Faithfulness</h2>

<p>Encourage loving accountability to obey Jesus</p>

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

<p class="back"><em>Share BIG vision &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li class="up">Ask the group to tell the story from last week.</li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch Acts 24:1-27 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 24:1-27</button><div class="collapsed" id ="Text0">

<h3>Paul&rsquo;s Trial Before Felix</h3>

<p><sup class="versenum=">1</sup> Five days later the high priest Ananias went down to Caesarea with some of the elders and a lawyer named Tertullus, and they brought their charges against Paul before the governor.<sup class="versenum">2&nbsp;</sup>When Paul was called in, Tertullus presented his case before Felix: &ldquo;We have enjoyed a long period of peace under you, and your foresight has brought about reforms in this nation.<sup class="versenum">3&nbsp;</sup>Everywhere and in every way, most excellent Felix, we acknowledge this with profound gratitude.<sup class="versenum">4&nbsp;</sup>But in order not to weary you further, I would request that you be kind enough to hear us briefly.</p>

<p>&nbsp;</p>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;We have found this man to be a troublemaker, stirring up riots among the Jews all over the world. He is a ringleader of the Nazarene sect<sup class="versenum">6&nbsp;</sup>and even tried to desecrate the temple; so we seized him.<sup class="versenum">[7]&nbsp;</sup><sup class="versenum">8&nbsp;</sup>By examining him yourself you will be able to learn the truth about all these charges we are bringing against him.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>The other Jews joined in the accusation, asserting that these things were true.</p>

<p><sup class="versenum">10&nbsp;</sup>When the governor motioned for him to speak, Paul replied: &ldquo;I know that for a number of years you have been a judge over this nation; so I gladly make my defense.<sup class="versenum">11&nbsp;</sup>You can easily verify that no more than twelve days ago I went up to Jerusalem to worship.<sup class="versenum">12&nbsp;</sup>My accusers did not find me arguing with anyone at the temple, or stirring up a crowd in the synagogues or anywhere else in the city.<sup class="versenum">13&nbsp;</sup>And they cannot prove to you the charges they are now making against me.<sup class="versenum">14&nbsp;</sup>However, I admit that I worship the God of our ancestors as a follower of the Way, which they call a sect. I believe everything that is in accordance with the Law and that is written in the Prophets,<sup class="versenum">15&nbsp;</sup>and I have the same hope in God as these men themselves have, that there will be a resurrection of both the righteous and the wicked.<sup class="versenum">16&nbsp;</sup>So I strive always to keep my conscience clear before God and man.</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;After an absence of several years, I came to Jerusalem to bring my people gifts for the poor and to present offerings.<sup class="versenum">18&nbsp;</sup>I was ceremonially clean when they found me in the temple courts doing this. There was no crowd with me, nor was I involved in any disturbance.<sup class="versenum">19&nbsp;</sup>But there are some Jews from the province of Asia, who ought to be here before you and bring charges if they have anything against me.<sup class="versenum">20&nbsp;</sup>Or these who are here should state what crime they found in me when I stood before the Sanhedrin&mdash;<sup class="versenum">21&nbsp;</sup>unless it was this one thing I shouted as I stood in their presence: &lsquo;It is concerning the resurrection of the dead that I am on trial before you today.&rsquo;&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Then Felix, who was well acquainted with the Way, adjourned the proceedings. &ldquo;When Lysias the commander comes,&rdquo; he said, &ldquo;I will decide your case.&rdquo;<sup class="versenum">23&nbsp;</sup>He ordered the centurion to keep Paul under guard but to give him some freedom and permit his friends to take care of his needs.</p>

<p><sup class="versenum">24&nbsp;</sup>Several days later Felix came with his wife Drusilla, who was Jewish. He sent for Paul and listened to him as he spoke about faith in Christ Jesus.<sup class="versenum">25&nbsp;</sup>As Paul talked about righteousness, self-control and the judgment to come, Felix was afraid and said, &ldquo;That&rsquo;s enough for now! You may leave. When I find it convenient, I will send for you.&rdquo;<sup class="versenum">26&nbsp;</sup>At the same time he was hoping that Paul would offer him a bribe, so he sent for him frequently and talked with him.</p>

<p><sup class="versenum">27&nbsp;</sup>When two years had passed, Felix was succeeded by Porcius Festus, but because Felix wanted to grant a favor to the Jews, he left Paul in prison.</p>
<!-- end bible -->

<p class="bible"></p>
</div>


<button id="MC2/eng/video/multiply3/348.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 24:1-27&nbsp;</button>
    <div class="collapsed"></div>

<p class="up">Discovery Discussion (Everyone answers)</p>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in the story?</li>
	<li>What is being modeled about a Spirit-dependent life, making disciples or leadership?</li>
	<li>How can we live differently now that we know this story?</li>
</ul>

<p><em>Additional questions you can use:</em></p>

<ul>
	<li>How are Jesus&rsquo; followers continuing His work of making disciples and church planting?</li>
	<li>How is the gospel impacting people and society?</li>
	<li>What barriers or obstacles were overcome and how were they overcome?</li>
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
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">The Jewish persecutors were violent and prejudiced. The Romans were open-minded and went out of their way to operate by law and order. Paul is trapped between two powers: Jerusalem and Rome, religious and civil, hostile and friendly. Although powerless and vulnerable, he is confident that the Romans have no complaint against him and that the Jews have no legal case. He also has confidence in the Lord&rsquo;s promise that he will testify in Rome. The Jewish lawyer, Tertullus, dishonestly flatters the Roman Governor and then accuses Paul of three crimes: causing riots, being a Christian ringleader, and profaning the Jewish Temple in Jerusalem. Paul affirmed four points: I worship the God of our fathers, I believe everything that agrees with the Law, I have the same hope in God as these men, and I strive as much as they do to keep my conscience clear. Paul used the opportunity to teach the governor about faith in Jesus, righteousness, self-control and judgement. He modeled for us how to be a faithful, bold, yet very respectful witness in any circumstance.</p>

</div>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practice needed skills or previous topics to help prepare to minister to others:<br />
	o Prayer, Care, Share<br />
	o Gospel<br />
	o Foundational Bible Studies.</li>
</ul>

</div>

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
        @keyup="this.addNote('note2Text')"
        id="note2Text"
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

			<td class="social" @click="share('lesson', 'Library: ', '/content/M2/eng/multiply3/multiply348.html')">
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