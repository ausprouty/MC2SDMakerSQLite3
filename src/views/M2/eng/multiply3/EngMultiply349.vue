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
                        <div class="chapter_number ltr"><h1>49.</h1></div>
                        <div class="chapter_title ltr"><h1>Paul Gives Testimony to the new Roman Governor Festus:</h1></div>
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
	<li class="up">Read or watch Acts 25:1-22 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 25:1-22</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul&rsquo;s Trial Before Festus</h3>

<p><sup class="versenum">1 </sup>Three days after arriving in the province, Festus went up from Caesarea to Jerusalem,<sup class="versenum">2&nbsp;</sup>where the chief priests and the Jewish leaders appeared before him and presented the charges against Paul.<sup class="versenum">3&nbsp;</sup>They requested Festus, as a favor to them, to have Paul transferred to Jerusalem, for they were preparing an ambush to kill him along the way.<sup class="versenum">4&nbsp;</sup>Festus answered, &ldquo;Paul is being held at Caesarea, and I myself am going there soon.<sup class="versenum">5&nbsp;</sup>Let some of your leaders come with me, and if the man has done anything wrong, they can press charges against him there.&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>After spending eight or ten days with them, Festus went down to Caesarea. The next day he convened the court and ordered that Paul be brought before him.<sup class="versenum">7&nbsp;</sup>When Paul came in, the Jews who had come down from Jerusalem stood around him. They brought many serious charges against him, but they could not prove them.</p>

<p><sup class="versenum">8&nbsp;</sup>Then Paul made his defense: &ldquo;I have done nothing wrong against the Jewish law or against the temple or against Caesar.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>Festus, wishing to do the Jews a favor, said to Paul, &ldquo;Are you willing to go up to Jerusalem and stand trial before me there on these charges?&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>Paul answered: &ldquo;I am now standing before Caesar&rsquo;s court, where I ought to be tried. I have not done any wrong to the Jews, as you yourself know very well.<sup class="versenum">11&nbsp;</sup>If, however, I am guilty of doing anything deserving death, I do not refuse to die. But if the charges brought against me by these Jews are not true, no one has the right to hand me over to them. I appeal to Caesar!&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>After Festus had conferred with his council, he declared: &ldquo;You have appealed to Caesar. To Caesar you will go!&rdquo;</p>

<h3>Festus Consults King Agrippa</h3>

<p><sup class="versenum">13&nbsp;</sup>A few days later King Agrippa and Bernice arrived at Caesarea to pay their respects to Festus.<sup class="versenum">14&nbsp;</sup>Since they were spending many days there, Festus discussed Paul&rsquo;s case with the king. He said: &ldquo;There is a man here whom Felix left as a prisoner.<sup class="versenum">15&nbsp;</sup>When I went to Jerusalem, the chief priests and the elders of the Jews brought charges against him and asked that he be condemned.</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;I told them that it is not the Roman custom to hand over anyone before they have faced their accusers and have had an opportunity to defend themselves against the charges.<sup class="versenum">17&nbsp;</sup>When they came here with me, I did not delay the case, but convened the court the next day and ordered the man to be brought in.<sup class="versenum">18&nbsp;</sup>When his accusers got up to speak, they did not charge him with any of the crimes I had expected.<sup class="versenum">19&nbsp;</sup>Instead, they had some points of dispute with him about their own religion and about a dead man named Jesus who Paul claimed was alive.<sup class="versenum">20&nbsp;</sup>I was at a loss how to investigate such matters; so I asked if he would be willing to go to Jerusalem and stand trial there on these charges.<sup class="versenum">21&nbsp;</sup>But when Paul made his appeal to be held over for the Emperor&rsquo;s decision, I ordered him held until I could send him to Caesar.&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Then Agrippa said to Festus, &ldquo;I would like to hear this man myself.&rdquo;</p>

<p>He replied, &ldquo;Tomorrow you will hear him.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/349.mp4" type="button" class="external-movie">
         Watch Acts 25:1-22</button>
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

<p class="up">Governor Felix kept Paul in prison for two years and passed his case on to the new governor, Festus, to deal with. While Festus visited Jerusalem, the Jewish religious leaders saw an opportunity to finally get Paul. If the trial could be brought back to Jerusalem, they would have another chance to assassinate Paul during the two-day journey. Suspecting their plan, Paul urged the governor to abide by Roman law and not give in to please the Jewish leaders. Having already been unjustly held for two years, he used his right as a Roman citizen to have his case heard before Caesar. Paul argued that following Jesus was consistent with both his identity as a Jew and a loyal citizen of Rome. When King Agrippa and Bernice visited Caesarea, they were interested in hearing from Paul. Jesus is sovereignly guiding all of these circumstances to fulfill His promise that Paul would testify before Caesar.</p>

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

			<td class="social" @click="share('lesson', 'Paul Gives Testimony to the new Roman Governor Festus:: ', '/content/M2/eng/multiply3/multiply349.html')">
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