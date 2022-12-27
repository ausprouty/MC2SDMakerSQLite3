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
                        <div class="chapter_number ltr"><h1>25.</h1></div>
                        <div class="chapter_title ltr"><h1>Church Planted in Capital of Galatia (Pisidian Antioch)</h1></div>
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
	<li class="up">Read or watch Acts 13:13-43 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 13:13-43</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>In Pisidian Antioch</h3>

<p><sup class="versenum">13&nbsp;</sup>From Paphos, Paul and his companions sailed to Perga in Pamphylia, where John left them to return to Jerusalem.<sup class="versenum">14&nbsp;</sup>From Perga they went on to Pisidian Antioch. On the Sabbath they entered the synagogue and sat down.<sup class="versenum">15&nbsp;</sup>After the reading from the Law and the Prophets, the leaders of the synagogue sent word to them, saying, &ldquo;Brothers, if you have a word of exhortation for the people, please speak.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>Standing up, Paul motioned with his hand and said: &ldquo;Fellow Israelites and you Gentiles who worship God, listen to me!<sup class="versenum">17&nbsp;</sup>The God of the people of Israel chose our ancestors; he made the people prosper during their stay in Egypt; with mighty power he led them out of that country;<sup class="versenum">18&nbsp;</sup>for about forty years he endured their conduct in the wilderness;<sup class="versenum">19&nbsp;</sup>and he overthrew seven nations in Canaan, giving their land to his people as their inheritance.<sup class="versenum">20&nbsp;</sup>All this took about 450 years.</p>

<p>&ldquo;After this, God gave them judges until the time of Samuel the prophet.<sup class="versenum">21&nbsp;</sup>Then the people asked for a king, and he gave them Saul son of Kish, of the tribe of Benjamin, who ruled forty years.<sup class="versenum">22&nbsp;</sup>After removing Saul, he made David their king. God testified concerning him: &lsquo;I have found David son of Jesse, a man after my own heart; he will do everything I want him to do.&rsquo;</p>

<p><sup class="versenum">23&nbsp;</sup>&ldquo;From this man&rsquo;s descendants God has brought to Israel the Savior Jesus, as he promised.<sup class="versenum">24&nbsp;</sup>Before the coming of Jesus, John preached repentance and baptism to all the people of Israel.<sup class="versenum">25&nbsp;</sup>As John was completing his work, he said: &lsquo;Who do you suppose I am? I am not the one you are looking for. But there is one coming after me whose sandals I am not worthy to untie.&rsquo;</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;Fellow children of Abraham and you God-fearing Gentiles, it is to us that this message of salvation has been sent.<sup class="versenum">27&nbsp;</sup>The people of Jerusalem and their rulers did not recognize Jesus, yet in condemning him they fulfilled the words of the prophets that are read every Sabbath.<sup class="versenum">28&nbsp;</sup>Though they found no proper ground for a death sentence, they asked Pilate to have him executed.<sup class="versenum">29&nbsp;</sup>When they had carried out all that was written about him, they took him down from the cross and laid him in a tomb.<sup class="versenum">30&nbsp;</sup>But God raised him from the dead,<sup class="versenum">31&nbsp;</sup>and for many days he was seen by those who had traveled with him from Galilee to Jerusalem. They are now his witnesses to our people.</p>

<p><sup class="versenum">32&nbsp;</sup>&ldquo;We tell you the good news: What God promised our ancestors<sup class="versenum">33&nbsp;</sup>he has fulfilled for us, their children, by raising up Jesus. As it is written in the second Psalm:</p>

<p>&ldquo;&lsquo;You are my son;<br />
&nbsp;&nbsp;&nbsp;&nbsp;today I have become your father.&rsquo;</p>

<p><sup class="versenum">34&nbsp;</sup>God raised him from the dead so that he will never be subject to decay. As God has said,</p>

<p>&ldquo;&lsquo;I will give you the holy and sure blessings promised to David.&rsquo;</p>

<p><sup class="versenum">35&nbsp;</sup>So it is also stated elsewhere:</p>

<p>&ldquo;&lsquo;You will not let your holy one see decay.&rsquo;</p>

<p><sup class="versenum">36&nbsp;</sup>&ldquo;Now when David had served God&rsquo;s purpose in his own generation, he fell asleep; he was buried with his ancestors and his body decayed.<sup class="versenum">37&nbsp;</sup>But the one whom God raised from the dead did not see decay.</p>

<p><sup class="versenum">38&nbsp;</sup>&ldquo;Therefore, my friends, I want you to know that through Jesus the forgiveness of sins is proclaimed to you.<sup class="versenum">39&nbsp;</sup>Through him everyone who believes is set free from every sin, a justification you were not able to obtain under the law of Moses.<sup class="versenum">40&nbsp;</sup>Take care that what the prophets have said does not happen to you:</p>

<p><sup class="versenum">41&nbsp;</sup>&ldquo;&lsquo;Look, you scoffers,<br />
&nbsp;&nbsp;&nbsp;&nbsp;wonder and perish,<br />
for I am going to do something in your days<br />
&nbsp;&nbsp;&nbsp;&nbsp;that you would never believe,<br />
&nbsp;&nbsp;&nbsp;&nbsp;even if someone told you.&rsquo;&rdquo;</p>

<p><sup class="versenum">42&nbsp;</sup>As Paul and Barnabas were leaving the synagogue, the people invited them to speak further about these things on the next Sabbath.<sup class="versenum">43&nbsp;</sup>When the congregation was dismissed, many of the Jews and devout converts to Judaism followed Paul and Barnabas, who talked with them and urged them to continue in the grace of God.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/325.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 13:13-43&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul>
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


<p>Notes: (click outside box to save)</p>
<textarea rows="5"></textarea>

<h2>Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">Paul and Barnabas leave Cyprus for the province of Pamphylia, where John Mark decides to leave them. Traveling inland to the north, they reach Pisidian Antioch, the capital city of the mountainous province of Galatia. History gives important insight as to why they may have went to this city. The governor of Cyprus had family in that city, which suggests that Paul and Barnabas continued to follow the relational networks the Lord was opening. This city was also at a major crossroad for the surrounding region. Paul and Barnabas spoke at the synagogue, knowing they would find devout Jews and spiritually interested Gentiles (<span class="popup-link" @click = "popUp('pop1')"> Acts 13:26</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">26&nbsp;</sup>&ldquo;Fellow children of Abraham and you God-fearing Gentiles, it is to us that this message of salvation has been sent.</p>
</div>
</div>
<!-- end bible --></div>
Paul used stories from scripture that showed Jesus was God&rsquo;s provision for their sin (<span class="popup-link" @click = "popUp('pop2')"> Acts 13:38-39</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">38&nbsp;</sup>&ldquo;Therefore, my friends, I want you to know that through Jesus the forgiveness of sins is proclaimed to you.<sup class="versenum">39&nbsp;</sup>Through him everyone who believes is set free from every sin, a justification you were not able to obtain under the law of Moses.</p>
</div>
</div>
<!-- end bible --></div>
Many believed, so Paul and Barnabas did initial follow up by encouraging them to grow in their relationship with Christ.

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
        @keyup="this.addNote('note1Text')"
        id="note1Text"
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

			<td class="social" @click="share('lesson', 'Church Planted in Capital of Galatia (Pisidian Antioch): ', '/content/M2/eng/multiply3/multiply325.html')">
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