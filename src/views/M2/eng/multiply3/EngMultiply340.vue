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
                        <div class="chapter_number ltr"><h1>40.</h1></div>
                        <div class="chapter_title ltr"><h1>Kingdom Imperatives</h1></div>
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
	<li class="up">Read or watch Acts 19:23-41 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 19:23-41</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Riot in Ephesus</h3>

<p><sup class="versenum">23&nbsp;</sup>About that time there arose a great disturbance about the Way.<sup class="versenum">24&nbsp;</sup>A silversmith named Demetrius, who made silver shrines of Artemis, brought in a lot of business for the craftsmen there.<sup class="versenum">25&nbsp;</sup>He called them together, along with the workers in related trades, and said: &ldquo;You know, my friends, that we receive a good income from this business.<sup class="versenum">26&nbsp;</sup>And you see and hear how this fellow Paul has convinced and led astray large numbers of people here in Ephesus and in practically the whole province of Asia. He says that gods made by human hands are no gods at all.<sup class="versenum">27&nbsp;</sup>There is danger not only that our trade will lose its good name, but also that the temple of the great goddess Artemis will be discredited; and the goddess herself, who is worshiped throughout the province of Asia and the world, will be robbed of her divine majesty.&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>When they heard this, they were furious and began shouting: &ldquo;Great is Artemis of the Ephesians!&rdquo;<sup class="versenum">29&nbsp;</sup>Soon the whole city was in an uproar. The people seized Gaius and Aristarchus, Paul&rsquo;s traveling companions from Macedonia, and all of them rushed into the theater together.<sup class="versenum">30&nbsp;</sup>Paul wanted to appear before the crowd, but the disciples would not let him.<sup class="versenum">31&nbsp;</sup>Even some of the officials of the province, friends of Paul, sent him a message begging him not to venture into the theater.</p>

<p><sup class="versenum">32&nbsp;</sup>The assembly was in confusion: Some were shouting one thing, some another. Most of the people did not even know why they were there.<sup class="versenum">33&nbsp;</sup>The Jews in the crowd pushed Alexander to the front, and they shouted instructions to him. He motioned for silence in order to make a defense before the people.<sup class="versenum">34&nbsp;</sup>But when they realized he was a Jew, they all shouted in unison for about two hours: &ldquo;Great is Artemis of the Ephesians!&rdquo;</p>

<p><sup class="versenum">35&nbsp;</sup>The city clerk quieted the crowd and said: &ldquo;Fellow Ephesians, doesn&rsquo;t all the world know that the city of Ephesus is the guardian of the temple of the great Artemis and of her image, which fell from heaven?<sup class="versenum">36&nbsp;</sup>Therefore, since these facts are undeniable, you ought to calm down and not do anything rash.<sup class="versenum">37&nbsp;</sup>You have brought these men here, though they have neither robbed temples nor blasphemed our goddess.<sup class="versenum">38&nbsp;</sup>If, then, Demetrius and his fellow craftsmen have a grievance against anybody, the courts are open and there are proconsuls. They can press charges.<sup class="versenum">39&nbsp;</sup>If there is anything further you want to bring up, it must be settled in a legal assembly.<sup class="versenum">40&nbsp;</sup>As it is, we are in danger of being charged with rioting because of what happened today. In that case we would not be able to account for this commotion, since there is no reason for it.&rdquo;<sup class="versenum">41&nbsp;</sup>After he had said this, he dismissed the assembly.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/340.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 19:23-41&nbsp;</button>
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
<p class="up">Hundreds of thousands of worshippers and tourist came to Ephesus every year to worship in the magnificent Temple of Artemis, considered one of the seven wonders of the ancient world. So many people were becoming followers of Jesus that those who made their living from selling idols to the worshippers were losing money. A silversmith named Demetrius stirred up the craftsmen, causing a riot against Paul and his message. The civil leaders Paul had befriended during his long stay in Ephesus, helped protect him from the angry crowd. The Lord used the mayor to calm the crowd and to warn them that they were in danger of causing problems for the city with the Emperor in Rome. From this story we learn an important leadership principal: Paul developed leaders by involving them in the ministry. Gaius and Aristarchus came from the harvest in Macedonia and were helping with the growing movement.</p>

<p class="up"><br />
The second letter to the church in Corinth can be read here. (2 Corinthians)</p>

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

			<td class="social" @click="share('lesson', 'Kingdom Imperatives: ', '/content/M2/eng/multiply3/multiply340.html')">
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