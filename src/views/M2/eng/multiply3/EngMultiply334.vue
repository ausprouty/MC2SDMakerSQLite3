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
                        <div class="chapter_number ltr"><h1>34.</h1></div>
                        <div class="chapter_title ltr"><h1>Church Planting in Capital of Macedonia (Thessalonica):</h1></div>
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
	<li class="up">Read or watch Acts 17:1-15 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 17:1-15</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>In Thessalonica</h3>

<p><sup class="versenum">1 </sup>When Paul and his companions had passed through Amphipolis and Apollonia, they came to Thessalonica, where there was a Jewish synagogue.<sup class="versenum">2&nbsp;</sup>As was his custom, Paul went into the synagogue, and on three Sabbath days he reasoned with them from the Scriptures,<sup class="versenum">3&nbsp;</sup>explaining and proving that the Messiah had to suffer and rise from the dead. &ldquo;This Jesus I am proclaiming to you is the Messiah,&rdquo; he said.<sup class="versenum">4&nbsp;</sup>Some of the Jews were persuaded and joined Paul and Silas, as did a large number of God-fearing Greeks and quite a few prominent women.</p>

<p><sup class="versenum">5&nbsp;</sup>But other Jews were jealous; so they rounded up some bad characters from the marketplace, formed a mob and started a riot in the city. They rushed to Jason&rsquo;s house in search of Paul and Silas in order to bring them out to the crowd.<sup class="versenum">6&nbsp;</sup>But when they did not find them, they dragged Jason and some other believers before the city officials, shouting: &ldquo;These men who have caused trouble all over the world have now come here,<sup class="versenum">7&nbsp;</sup>and Jason has welcomed them into his house. They are all defying Caesar&rsquo;s decrees, saying that there is another king, one called Jesus.&rdquo;<sup class="versenum">8&nbsp;</sup>When they heard this, the crowd and the city officials were thrown into turmoil.<sup class="versenum">9&nbsp;</sup>Then they made Jason and the others post bond and let them go.</p>

<h3>In Berea</h3>

<p><sup class="versenum">10&nbsp;</sup>As soon as it was night, the believers sent Paul and Silas away to Berea. On arriving there, they went to the Jewish synagogue.<sup class="versenum">11&nbsp;</sup>Now the Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true.<sup class="versenum">12&nbsp;</sup>As a result, many of them believed, as did also a number of prominent Greek women and many Greek men.</p>

<p><sup class="versenum">13&nbsp;</sup>But when the Jews in Thessalonica learned that Paul was preaching the word of God at Berea, some of them went there too, agitating the crowds and stirring them up.<sup class="versenum">14&nbsp;</sup>The believers immediately sent Paul to the coast, but Silas and Timothy stayed at Berea.<sup class="versenum">15&nbsp;</sup>Those who escorted Paul brought him to Athens and then left with instructions for Silas and Timothy to join him as soon as possible.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/334.mp4" type="button" class="external-movie">
         Watch Acts 17:1-15</button>
    <div class="collapsed"></div>



<h2 class="up">Discovery Discussion (Everyone answers)</h2>

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

<p class="up">Paul and team left Philippi and went to the provincial capital of Thessalonica. Paul continued his practice of going to the synagogue to find spiritually interested people. A church was planted with some Jews, many Greek men, and some prominent women of the city. The pattern of persecution often started with jealousy from the local Jewish leaders. This time they brought charges of causing civil unrest. The local authorities made Jason, who was hosting Paul and the team, pay a fine (<span class="popup-link" @click = "popUp('pop1')"> Acts 17:7-9</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">7&nbsp;</sup>and Jason has welcomed them into his house. They are all defying Caesar&rsquo;s decrees, saying that there is another king, one called Jesus.&rdquo;<sup class="versenum">8&nbsp;</sup>When they heard this, the crowd and the city officials were thrown into turmoil.<sup class="versenum">9&nbsp;</sup>Then they made Jason and the others post bond and let them go.</p>
</div>
</div>
<!-- end bible --></div>
Paul and team were forced to leave the young church after only a few months. However, their church planting mission continued in Berea, another town in the province of Macedonia. The Bereans learned eagerly from Paul and examined the Scriptures to confirm that Paul taught the truth. The new church was made up of many of the Berean Jews, prominent Greek women, and many Greek men. The hostile Jews from Thessalonica pursued the mission team all the way to Berea, finally forcing Paul to leave the province.

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

<p>Practice needed skills or previous topics to help prepare to minister to others:</p>

<ul>
	<li>Prayer, Care, Share</li>
	<li>Gospel</li>
	<li>Foundational Bible Studies.</li>
</ul>

</div>

<ul class="forward">
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

			<td class="social" @click="share('lesson', 'Church Planting in Capital of Macedonia (Thessalonica):: ', '/content/M2/eng/multiply3/multiply334.html')">
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