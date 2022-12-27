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
                        <div class="chapter_number ltr"><h1>17.</h1></div>
                        <div class="chapter_title ltr"><h1>Saul in Damascus and Jerusalem</h1></div>
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
	<li class="up">Read or watch Acts 9:20-31 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 9:20-31</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p>Saul stayed for a few days with the believers in Damascus. <sup class="versenum">20&nbsp;</sup>At once he began to preach in the synagogues that Jesus is the Son of God.<sup class="versenum">21&nbsp;</sup>All those who heard him were astonished and asked, &ldquo;Isn&rsquo;t he the man who raised havoc in Jerusalem among those who call on this name? And hasn&rsquo;t he come here to take them as prisoners to the chief priests?&rdquo;<sup class="versenum">22&nbsp;</sup>Yet Saul grew more and more powerful and baffled the Jews living in Damascus by proving that Jesus is the Messiah.</p>

<p><sup class="versenum">23&nbsp;</sup>After many days had gone by, there was a conspiracy among the Jews to kill him,<sup class="versenum">24&nbsp;</sup>but Saul learned of their plan. Day and night they kept close watch on the city gates in order to kill him.<sup class="versenum">25&nbsp;</sup>But his followers took him by night and lowered him in a basket through an opening in the wall.</p>

<p><sup class="versenum">26&nbsp;</sup>When he came to Jerusalem, he tried to join the disciples, but they were all afraid of him, not believing that he really was a disciple.<sup class="versenum">27&nbsp;</sup>But Barnabas took him and brought him to the apostles. He told them how Saul on his journey had seen the Lord and that the Lord had spoken to him, and how in Damascus he had preached fearlessly in the name of Jesus.<sup class="versenum">28&nbsp;</sup>So Saul stayed with them and moved about freely in Jerusalem, speaking boldly in the name of the Lord.<sup class="versenum">29&nbsp;</sup>He talked and debated with the Hellenistic Jews, but they tried to kill him.<sup class="versenum">30&nbsp;</sup>When the believers learned of this, they took him down to Caesarea and sent him off to Tarsus.</p>

<p><sup class="versenum">31&nbsp;</sup>Then the church throughout Judea, Galilee and Samaria enjoyed a time of peace and was strengthened. Living in the fear of the Lord and encouraged by the Holy Spirit, it increased in numbers.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/317.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 9:20-31&nbsp;</button>
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
<p class="up">The believers in Damascus were surprised by Saul. Instead of arresting them, Saul began preaching Jesus as the living Son of God. Saul&rsquo;s advanced education allowed him to immediately apply his knowledge of scripture to give persuasive proof that Jesus was the promised Messiah. Jesus taught that people with such understanding were able to bring out treasures from the Old Testament and from new teachings about the Kingdom (<span class="popup-link" @click = "popUp('pop1')"> Matthew 13:52</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">52&nbsp;</sup>He said to them, &ldquo;Therefore every teacher of the law who has become a disciple in the kingdom of heaven is like the owner of a house who brings out of his storeroom new treasures as well as old.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
Saul was so powerful in his witness that the Jews could not argue with him, so they tried to kill him in Damascus. When Saul came to Jerusalem, only Barnabas accepted him and endorsed him to the Apostles. Saul&rsquo;s life was threatened again, so the disciples sent him to his hometown of Tarsus, in the province of Cilicia, about 930 km northwest of Jerusalem. This story includes the second summary statement found in the book of Acts: the church had peace and grew in numbers as it lived out of a deep reverence for God&rsquo;s holiness and power (<span class="popup-link" @click = "popUp('pop2')"> Acts 9:31</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">31&nbsp;</sup>Then the church throughout Judea, Galilee and Samaria enjoyed a time of peace and was strengthened. Living in the fear of the Lord and encouraged by the Holy Spirit, it increased in numbers.</p>
</div>
</div>
</div>

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

			<td class="social" @click="share('lesson', 'Saul in Damascus and Jerusalem: ', '/content/M2/eng/multiply3/multiply317.html')">
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