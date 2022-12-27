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
                        <div class="chapter_number ltr"><h1>45.</h1></div>
                        <div class="chapter_title ltr"><h1>Paul's Testimony to the Jews</h1></div>
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
	<li class="up">Read or watch Acts 21:37-22:21 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 21:37-22:21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul Speaks to the Crowd</h3>

<p><sup class="versenum">37&nbsp;</sup>As the soldiers were about to take Paul into the barracks, he asked the commander, &ldquo;May I say something to you?&rdquo;</p>

<p>&ldquo;Do you speak Greek?&rdquo; he replied.<sup class="versenum">38&nbsp;</sup>&ldquo;Aren&rsquo;t you the Egyptian who started a revolt and led four thousand terrorists out into the wilderness some time ago?&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>Paul answered, &ldquo;I am a Jew, from Tarsus in Cilicia, a citizen of no ordinary city. Please let me speak to the people.&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>After receiving the commander&rsquo;s permission, Paul stood on the steps and motioned to the crowd. When they were all silent, he said to them in Aramaic:</p>

<p><sup class="mid-paragraph versenum">22:1&nbsp;</sup>&ldquo;Brothers and fathers, listen now to my defense.&rdquo;</p>

<p><sup class="versenum">2&nbsp;</sup>When they heard him speak to them in Aramaic, they became very quiet.</p>

<p>Then Paul said:<sup class="versenum">3&nbsp;</sup>&ldquo;I am a Jew, born in Tarsus of Cilicia, but brought up in this city. I studied under Gamaliel and was thoroughly trained in the law of our ancestors. I was just as zealous for God as any of you are today.<sup class="versenum">4&nbsp;</sup>I persecuted the followers of this Way to their death, arresting both men and women and throwing them into prison,<sup class="versenum">5&nbsp;</sup>as the high priest and all the Council can themselves testify. I even obtained letters from them to their associates in Damascus, and went there to bring these people as prisoners to Jerusalem to be punished.</p>

<p><sup class="versenum">6&nbsp;</sup>&ldquo;About noon as I came near Damascus, suddenly a bright light from heaven flashed around me.<sup class="versenum">7&nbsp;</sup>I fell to the ground and heard a voice say to me, &lsquo;Saul! Saul! Why do you persecute me?&rsquo;</p>

<p><sup class="versenum">8&nbsp;</sup>&ldquo;&lsquo;Who are you, Lord?&rsquo; I asked.</p>

<p>&ldquo; &lsquo;I am Jesus of Nazareth, whom you are persecuting,&rsquo; he replied.<sup class="versenum">9&nbsp;</sup>My companions saw the light, but they did not understand the voice of him who was speaking to me.</p>

<p><sup class="versenum">10&nbsp;</sup>&ldquo;&lsquo;What shall I do, Lord?&rsquo; I asked.</p>

<p>&ldquo; &lsquo;Get up,&rsquo; the Lord said, &lsquo;and go into Damascus. There you will be told all that you have been assigned to do.&rsquo;<sup class="versenum">11&nbsp;</sup>My companions led me by the hand into Damascus, because the brilliance of the light had blinded me.</p>

<p><sup class="versenum">12&nbsp;</sup>&ldquo;A man named Ananias came to see me. He was a devout observer of the law and highly respected by all the Jews living there.<sup class="versenum">13&nbsp;</sup>He stood beside me and said, &lsquo;Brother Saul, receive your sight!&rsquo; And at that very moment I was able to see him.</p>

<p><sup class="versenum">14&nbsp;</sup>&ldquo;Then he said: &lsquo;The God of our ancestors has chosen you to know his will and to see the Righteous One and to hear words from his mouth.<sup class="versenum">15&nbsp;</sup>You will be his witness to all people of what you have seen and heard.<sup class="versenum">16&nbsp;</sup>And now what are you waiting for? Get up, be baptized and wash your sins away, calling on his name.&rsquo;</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;When I returned to Jerusalem and was praying at the temple, I fell into a trance<sup class="versenum">18&nbsp;</sup>and saw the Lord speaking to me. &lsquo;Quick!&rsquo; he said. &lsquo;Leave Jerusalem immediately, because the people here will not accept your testimony about me.&rsquo;</p>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;&lsquo;Lord,&rsquo; I replied, &lsquo;these people know that I went from one synagogue to another to imprison and beat those who believe in you.<sup class="versenum">20&nbsp;</sup>And when the blood of your martyr Stephen was shed, I stood there giving my approval and guarding the clothes of those who were killing him.&rsquo;</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;Then the Lord said to me, &lsquo;Go; I will send you far away to the Gentiles.&rsquo; &rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/345.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 21:37-22:21&nbsp;</button>
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
<p class="up">The Lord had prepared Paul for this moment through his life in Taurus, his Greek education, his training as a Jewish religious teacher, and his missionary experiences. This is the first time Luke, the writer of Acts, records Paul sharing his testimony. Paul told the church in Rome that he was not ashamed of the gospel (<span class="popup-link" @click = "popUp('pop1')"> Romans 1:16</span>),&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">16&nbsp;</sup>For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.</p>
</div>
</div>
<!-- end bible --></div>
and he continued to share the gospel regardless of the circumstances or the consequences. Paul uses the opportunity to witness to his countrymen by sharing: his life before meeting the living Jesus, how he met Jesus, and how Jesus changed his life and his mission. Later Paul would encourage his next generation leaders, Timothy and Titus, to be ready for every opportunity to share their experience and knowledge of Jesus (<span class="popup-link" @click = "popUp('pop2')"> Titus 3:1</span>;&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">1 </sup>Remind the people to be subject to rulers and authorities, to be obedient, to be ready to do whatever is good,</p>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop3')"> 2 Timothy 4:2</span>).&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">2&nbsp;</sup>Preach the word; be prepared in season and out of season; correct, rebuke and encourage&mdash;with great patience and careful instruction.</p>
</div>
</div>
<!-- end bible --></div>
From Paul&rsquo;s own testimony we learn that both men and women in the early church suffered for their faith in Jesus (<span class="popup-link" @click = "popUp('pop4')"> Acts 22:4</span>).

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">4&nbsp;</sup>I persecuted the followers of this Way to their death, arresting both men and women and throwing them into prison,</p>
</div>
</div>
<!-- end bible --></div>
The Jews constantly stumbled over the idea that God would accept all people without observing Jewish religious practices.

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

			<td class="social" @click="share('lesson', 'Paul\'s Testimony to the Jews: ', '/content/M2/eng/multiply3/multiply345.html')">
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