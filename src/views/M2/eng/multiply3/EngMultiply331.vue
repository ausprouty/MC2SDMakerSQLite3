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
                        <div class="chapter_number ltr"><h1>31.</h1></div>
                        <div class="chapter_title ltr"><h1>Disagreement Leads to New Teams</h1></div>
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

<p>&nbsp;</p>

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
	<li class="up">Read or watch Acts 15:36-16:5&nbsp; two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 15:36-16:5</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Disagreement Between Paul and Barnabas</h3>

<p><sup class="versenum">36&nbsp;</sup>Some time later Paul said to Barnabas, &ldquo;Let us go back and visit the believers in all the towns where we preached the word of the Lord and see how they are doing.&rdquo;<sup class="versenum">37&nbsp;</sup>Barnabas wanted to take John, also called Mark, with them,<sup class="versenum">38&nbsp;</sup>but Paul did not think it wise to take him, because he had deserted them in Pamphylia and had not continued with them in the work.<sup class="versenum">39&nbsp;</sup>They had such a sharp disagreement that they parted company. Barnabas took Mark and sailed for Cyprus,<sup class="versenum">40&nbsp;</sup>but Paul chose Silas and left, commended by the believers to the grace of the Lord.<sup class="versenum">41&nbsp;</sup>He went through Syria and Cilicia, strengthening the churches.</p>

<h3>Timothy Joins Paul and Silas</h3>

<p><sup class="versenum">16:1 </sup>Paul came to Derbe and then to Lystra, where a disciple named Timothy lived, whose mother was Jewish and a believer but whose father was a Greek.<sup class="versenum">2&nbsp;</sup>The believers at Lystra and Iconium spoke well of him.<sup class="versenum">3&nbsp;</sup>Paul wanted to take him along on the journey, so he circumcised him because of the Jews who lived in that area, for they all knew that his father was a Greek.<sup class="versenum">4&nbsp;</sup>As they traveled from town to town, they delivered the decisions reached by the apostles and elders in Jerusalem for the people to obey.<sup class="versenum">5&nbsp;</sup>So the churches were strengthened in the faith and grew daily in numbers.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/331.mp4" type="button" class="external-movie">
         Watch Acts 15:36-16:5</button>
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

<p class="up">Paul wanted to continue following his calling to bring about obedience to the faith among all peoples (<span class="popup-link" @click = "popUp('pop1')"> Romans 1:5</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">5&nbsp;</sup>Through him we received grace and apostleship to call all the Gentiles to the obedience that comes from faith for his name&rsquo;s sake.</p>
</div>
</div>
<!-- end bible --></div>
As Paul and Barnabas prepared to leave, they had a big disagreement over Barnabas&rsquo; cousin John Mark. Paul did not trust that John Mark was up to the task because he had deserted them on the first journey. Barnabas saw John Mark&rsquo;s leadership potential and wanted to give him a second chance. As a result, Paul and Barnabas separated and formed two mission teams. Barnabas took John Mark and travelled back to Cyprus. Paul chose Silas, a prophet from the church in Jerusalem (<span class="popup-link" @click = "popUp('pop2')"> Acts 15:32</span>),&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">32&nbsp;</sup>Judas and Silas, who themselves were prophets, said much to encourage and strengthen the believers.</p>
</div>
</div>
<!-- end bible --></div>
as a new partner and revisited the churches from the previous trip to Galatia. They strengthened the young churches and Paul also recruited a new believer in Lystra named Timothy to assist in the ministry. This story includes the fourth summary statement found in Acts: as a result of the team&rsquo;s encouragement and teaching, the churches grew stronger in faith and increased daily in numbers (<span class="popup-link" @click = "popUp('pop3')"> Acts 16:5</span>).

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">5&nbsp;</sup>So the churches were strengthened in the faith and grew daily in numbers.</p>
</div>
</div>
<!-- end bible --></div>

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

			<td class="social" @click="share('lesson', 'Disagreement Leads to New Teams: ', '/content/M2/eng/multiply3/multiply331.html')">
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