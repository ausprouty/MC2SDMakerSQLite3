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
                        <div class="chapter_number ltr"><h1>47.</h1></div>
                        <div class="chapter_title ltr"><h1>The Plot to Kill Paul</h1></div>
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
	<li class="up">Read or watch Acts 23:12-35&nbsp; two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 23:12-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>The Plot to Kill Paul</h3>

<p><sup class="versenum">12&nbsp;</sup>The next morning some Jews formed a conspiracy and bound themselves with an oath not to eat or drink until they had killed Paul.<sup class="versenum">13&nbsp;</sup>More than forty men were involved in this plot.<sup class="versenum">14&nbsp;</sup>They went to the chief priests and the elders and said, &ldquo;We have taken a solemn oath not to eat anything until we have killed Paul.<sup class="versenum">15&nbsp;</sup>Now then, you and the Sanhedrin petition the commander to bring him before you on the pretext of wanting more accurate information about his case. We are ready to kill him before he gets here.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>But when the son of Paul&rsquo;s sister heard of this plot, he went into the barracks and told Paul.</p>

<p><sup class="versenum">17&nbsp;</sup>Then Paul called one of the centurions and said, &ldquo;Take this young man to the commander; he has something to tell him.&rdquo;<sup class="versenum">18&nbsp;</sup>So he took him to the commander.</p>

<p>The centurion said, &ldquo;Paul, the prisoner, sent for me and asked me to bring this young man to you because he has something to tell you.&rdquo;</p>

<p><sup class="versenum">19&nbsp;</sup>The commander took the young man by the hand, drew him aside and asked, &ldquo;What is it you want to tell me?&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>He said: &ldquo;Some Jews have agreed to ask you to bring Paul before the Sanhedrin tomorrow on the pretext of wanting more accurate information about him.<sup class="versenum">21&nbsp;</sup>Don&rsquo;t give in to them, because more than forty of them are waiting in ambush for him. They have taken an oath not to eat or drink until they have killed him. They are ready now, waiting for your consent to their request.&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>The commander dismissed the young man with this warning: &ldquo;Don&rsquo;t tell anyone that you have reported this to me.&rdquo;</p>

<h3>Paul Transferred to Caesarea</h3>

<p><sup class="versenum">23&nbsp;</sup>Then he called two of his centurions and ordered them, &ldquo;Get ready a detachment of two hundred soldiers, seventy horsemen and two hundred spearmen to go to Caesarea at nine tonight.<sup class="versenum">24&nbsp;</sup>Provide horses for Paul so that he may be taken safely to Governor Felix.&rdquo;</p>

<p><sup class="versenum">25&nbsp;</sup>He wrote a letter as follows:</p>

<p><sup class="versenum">26&nbsp;</sup>Claudius Lysias,</p>

<p>To His Excellency, Governor Felix:</p>

<p>Greetings.</p>

<p><sup class="versenum">27&nbsp;</sup>This man was seized by the Jews and they were about to kill him, but I came with my troops and rescued him, for I had learned that he is a Roman citizen.<sup class="versenum">28&nbsp;</sup>I wanted to know why they were accusing him, so I brought him to their Sanhedrin.<sup class="versenum">29&nbsp;</sup>I found that the accusation had to do with questions about their law, but there was no charge against him that deserved death or imprisonment.<sup class="versenum">30&nbsp;</sup>When I was informed of a plot to be carried out against the man, I sent him to you at once. I also ordered his accusers to present to you their case against him.</p>
</div>

<p><sup class="versenum">31&nbsp;</sup>So the soldiers, carrying out their orders, took Paul with them during the night and brought him as far as Antipatris.<sup class="versenum">32&nbsp;</sup>The next day they let the cavalry go on with him, while they returned to the barracks.<sup class="versenum">33&nbsp;</sup>When the cavalry arrived in Caesarea, they delivered the letter to the governor and handed Paul over to him.<sup class="versenum">34&nbsp;</sup>The governor read the letter and asked what province he was from. Learning that he was from Cilicia,<sup class="versenum">35&nbsp;</sup>he said, &ldquo;I will hear your case when your accusers get here.&rdquo; Then he ordered that Paul be kept under guard in Herod&rsquo;s palace.</p>
<!-- end bible -->

<p class="bible"></p>
</div>


<button id="MC2/eng/video/multiply3/347.mp4" type="button" class="external-movie">
         Watch Acts 23:12-35</button>
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

<p class="up">For Paul&rsquo;s entire Christian life, the Jews who rejected Jesus also rejected him and the gospel. We are reminded of Jesus&rsquo; teaching, &ldquo;if they reject you, they reject me, and the one who sent me&rdquo; (<span class="popup-link" @click = "popUp('pop1')"> Luke 10:16</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">16&nbsp;</sup>&ldquo;Whoever listens to you listens to me; whoever rejects you rejects me; but whoever rejects me rejects him who sent me.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
The Jews viewed Paul as a blasphemer and his message as a threat to their own self-serving nationalistic view of God&rsquo;s purpose. We see God&rsquo;s sovereignty through the use of Paul&rsquo;s nephew learning about the plot to have him assassinated. In response, the commander sent 470 Roman troops to transport Paul safely the 112 km (70 miles) to the seaside city of Caesarea. Governor Felix kept him under guard in the summer palace of former King Herod the Great (<span class="popup-link" @click = "popUp('pop2')"> Matthew 2:1</span>;&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">1 </sup>After Jesus was born in Bethlehem in Judea, during the time of King Herod, Magi from the east came to Jerusalem</p>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop3')"> Luke 1:5</span>).&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">5&nbsp;</sup>In the time of Herod king of Judea there was a priest named Zechariah, who belonged to the priestly division of Abijah; his wife Elizabeth was also a descendant of Aaron.</p>
</div>
</div>
<!-- end bible --></div>
This example from Paul&rsquo;s life shows us that the Lord is with those who pursue His Kingdom purpose and that the safest place to be is in the Father&rsquo;s will.

<p>&nbsp;</p>

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

			<td class="social" @click="share('lesson', 'The Plot to Kill Paul: ', '/content/M2/eng/multiply3/multiply347.html')">
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