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
                        <div class="chapter_number ltr"><h1>41.</h1></div>
                        <div class="chapter_title ltr"><h1>Visits to Strengthen the Churches (Macedonia and Achaia)</h1></div>
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
	<li class="nobreak-final-final">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (<span class="popup-link" @click = "popUp('pop1')"> Philippians 2:11</span>b;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	</div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6a)</span></li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people. This has now been witnessed to at the proper time.</p>
</div>

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
	<li class="up">Read or watch Acts 20:1-12 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 20:1-12</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Through Macedonia and Greece</h3>

<p><sup class="versenum">1 </sup>When the uproar had ended, Paul sent for the disciples and, after encouraging them, said goodbye and set out for Macedonia.<sup class="versenum">2&nbsp;</sup>He traveled through that area, speaking many words of encouragement to the people, and finally arrived in Greece,<sup class="versenum">3&nbsp;</sup>where he stayed three months. Because some Jews had plotted against him just as he was about to sail for Syria, he decided to go back through Macedonia.<sup class="versenum">4&nbsp;</sup>He was accompanied by Sopater son of Pyrrhus from Berea, Aristarchus and Secundus from Thessalonica, Gaius from Derbe, Timothy also, and Tychicus and Trophimus from the province of Asia.<sup class="versenum">5&nbsp;</sup>These men went on ahead and waited for us at Troas.<sup class="versenum">6&nbsp;</sup>But we sailed from Philippi after the Festival of Unleavened Bread, and five days later joined the others at Troas, where we stayed seven days.</p>

<h3>Eutychus Raised From the Dead at Troas</h3>

<p><sup class="versenum">7&nbsp;</sup>On the first day of the week we came together to break bread. Paul spoke to the people and, because he intended to leave the next day, kept on talking until midnight.<sup class="versenum">8&nbsp;</sup>There were many lamps in the upstairs room where we were meeting.<sup class="versenum">9&nbsp;</sup>Seated in a window was a young man named Eutychus, who was sinking into a deep sleep as Paul talked on and on. When he was sound asleep, he fell to the ground from the third story and was picked up dead.<sup class="versenum">10&nbsp;</sup>Paul went down, threw himself on the young man and put his arms around him. &ldquo;Don&rsquo;t be alarmed,&rdquo; he said. &ldquo;He&rsquo;s alive!&rdquo;<sup class="versenum">11&nbsp;</sup>Then he went upstairs again and broke bread and ate. After talking until daylight, he left.<sup class="versenum">12&nbsp;</sup>The people took the young man home alive and were greatly comforted.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/341.mp4" type="button" class="external-movie">
         Watch Acts 20:1-12</button>
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

<p class="up">As was his practice, Paul revisited the churches he started to encourage them and give them more teaching. He first went to Macedonia to visit the churches in the cities of Philippi, Thessalonica and Berea. During his stay, he wrote another letter to the Corinthians. After several months in Macedonia, Paul traveled to Achaia to visit the believers in Corinth. Before leaving for Jerusalem, he wrote a letter to the churches in Rome to let them know about his travel plans and to explain the gospel more deeply to them (<span class="popup-link" @click = "popUp('pop1')"> Romans 1:11</span>,&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">11&nbsp;</sup>I long to see you so that I may impart to you some spiritual gift to make you strong&mdash;</p>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop2')"> Romans 15:28</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">28&nbsp;</sup>So after I have completed this task and have made sure that they have received this contribution, I will go to Spain and visit you on the way.</p>
</div>
</div>
<!-- end bible --></div>
We see how Paul was always expanding his ministry team, developing leaders for the harvest from the harvest field. Seven people are mentioned who came from other movement centers. We learn from Paul&rsquo;s letters that he created unity among the different churches by collecting an offering to help the poor believers in Jerusalem (<span class="popup-link" @click = "popUp('pop3')"> 2 Corinthians 8:1-7</span>,&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">1 </sup>And now, brothers and sisters, we want you to know about the grace that God has given the Macedonian churches.<sup class="versenum">2&nbsp;</sup>In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity.<sup class="versenum">3&nbsp;</sup>For I testify that they gave as much as they were able, and even beyond their ability. Entirely on their own,<sup class="versenum">4&nbsp;</sup>they urgently pleaded with us for the privilege of sharing in this service to the Lord&rsquo;s people.<sup class="versenum">5&nbsp;</sup>And they exceeded our expectations: They gave themselves first of all to the Lord, and then by the will of God also to us.<sup class="versenum">6&nbsp;</sup>So we urged Titus, just as he had earlier made a beginning, to bring also to completion this act of grace on your part.<sup class="versenum">7&nbsp;</sup>But since you excel in everything&mdash;in faith, in speech, in knowledge, in complete earnestness and in the love we have kindled in you&mdash;see that you also excel in this grace of giving.</p>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop4')"> Romans 15:25-26</span>).&nbsp;

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">25&nbsp;</sup>Now, however, I am on my way to Jerusalem in the service of the Lord&rsquo;s people there.<sup class="versenum">26&nbsp;</sup>For Macedonia and Achaia were pleased to make a contribution for the poor among the Lord&rsquo;s people in Jerusalem.</p>
</div>
</div>
<!-- end bible --></div>
He linked leaders and churches together to help them see that they were part of a bigger movement (<span class="popup-link" @click = "popUp('pop7')"> 1 Thessalonians 2:14</span>;

<div class="popup invisible" id="pop7"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">14&nbsp;</sup>For you, brothers and sisters, became imitators of God&rsquo;s churches in Judea, which are in Christ Jesus: You suffered from your own people the same things those churches suffered from the Jews</p>
</div>
</div>
<!-- end bible --></div>
&nbsp; <span class="popup-link" @click = "popUp('pop6')"> 2 Thessalonians 1:4</span>).&nbsp;

<div class="popup invisible" id="pop6"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">4&nbsp;</sup>Therefore, among God&rsquo;s churches we boast about your perseverance and faith in all the persecutions and trials you are enduring.</p>
</div>
</div>
<!-- end bible --></div>

<p><br />
The letter to the Romans can be read here.</p>

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

			<td class="social" @click="share('lesson', 'Visits to Strengthen the Churches (Macedonia and Achaia): ', '/content/M2/eng/multiply3/multiply341.html')">
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