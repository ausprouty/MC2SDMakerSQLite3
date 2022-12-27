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
                        <div class="chapter_number ltr"><h1>51.</h1></div>
                        <div class="chapter_title ltr"><h1>Trusting Jesus in Dangerous Circumstances</h1></div>
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
	<li class="up">Read or watch Acts 27:1-26&nbsp; two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 27:1-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul Sails for Rome</h3>

<p><sup class="versenum">1 </sup>When it was decided that we would sail for Italy, Paul and some other prisoners were handed over to a centurion named Julius, who belonged to the Imperial Regiment.<sup class="versenum">2&nbsp;</sup>We boarded a ship from Adramyttium about to sail for ports along the coast of the province of Asia, and we put out to sea. Aristarchus, a Macedonian from Thessalonica, was with us.</p>

<p><sup class="versenum">3&nbsp;</sup>The next day we landed at Sidon; and Julius, in kindness to Paul, allowed him to go to his friends so they might provide for his needs.<sup class="versenum">4&nbsp;</sup>From there we put out to sea again and passed to the lee of Cyprus because the winds were against us.<sup class="versenum">5&nbsp;</sup>When we had sailed across the open sea off the coast of Cilicia and Pamphylia, we landed at Myra in Lycia.<sup class="versenum">6&nbsp;</sup>There the centurion found an Alexandrian ship sailing for Italy and put us on board.<sup class="versenum">7&nbsp;</sup>We made slow headway for many days and had difficulty arriving off Cnidus. When the wind did not allow us to hold our course, we sailed to the lee of Crete, opposite Salmone.<sup class="versenum">8&nbsp;</sup>We moved along the coast with difficulty and came to a place called Fair Havens, near the town of Lasea.</p>

<p><sup class="versenum">9&nbsp;</sup>Much time had been lost, and sailing had already become dangerous because by now it was after the Day of Atonement. So Paul warned them,<sup class="versenum">10&nbsp;</sup>&ldquo;Men, I can see that our voyage is going to be disastrous and bring great loss to ship and cargo, and to our own lives also.&rdquo;<sup class="versenum">11&nbsp;</sup>But the centurion, instead of listening to what Paul said, followed the advice of the pilot and of the owner of the ship.<sup class="versenum">12&nbsp;</sup>Since the harbor was unsuitable to winter in, the majority decided that we should sail on, hoping to reach Phoenix and winter there. This was a harbor in Crete, facing both southwest and northwest.</p>

<h3>The Storm</h3>

<p><sup class="versenum">13&nbsp;</sup>When a gentle south wind began to blow, they saw their opportunity; so they weighed anchor and sailed along the shore of Crete.<sup class="versenum">14&nbsp;</sup>Before very long, a wind of hurricane force, called the Northeaster, swept down from the island.<sup class="versenum">15&nbsp;</sup>The ship was caught by the storm and could not head into the wind; so we gave way to it and were driven along.<sup class="versenum">16&nbsp;</sup>As we passed to the lee of a small island called Cauda, we were hardly able to make the lifeboat secure,<sup class="versenum">17&nbsp;</sup>so the men hoisted it aboard. Then they passed ropes under the ship itself to hold it together. Because they were afraid they would run aground on the sandbars of Syrtis, they lowered the sea anchor and let the ship be driven along.<sup class="versenum">18&nbsp;</sup>We took such a violent battering from the storm that the next day they began to throw the cargo overboard.<sup class="versenum">19&nbsp;</sup>On the third day, they threw the ship&rsquo;s tackle overboard with their own hands.<sup class="versenum">20&nbsp;</sup>When neither sun nor stars appeared for many days and the storm continued raging, we finally gave up all hope of being saved.</p>

<p><sup class="versenum">21&nbsp;</sup>After they had gone a long time without food, Paul stood up before them and said: &ldquo;Men, you should have taken my advice not to sail from Crete; then you would have spared yourselves this damage and loss.<sup class="versenum">22&nbsp;</sup>But now I urge you to keep up your courage, because not one of you will be lost; only the ship will be destroyed.<sup class="versenum">23&nbsp;</sup>Last night an angel of the God to whom I belong and whom I serve stood beside me<sup class="versenum">24&nbsp;</sup>and said, &lsquo;Do not be afraid, Paul. You must stand trial before Caesar; and God has graciously given you the lives of all who sail with you.&rsquo;<sup class="versenum">25&nbsp;</sup>So keep up your courage, men, for I have faith in God that it will happen just as he told me.<sup class="versenum">26&nbsp;</sup>Nevertheless, we must run aground on some island.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>
</div>


<button id="MC2/eng/video/multiply3/351.mp4" type="button" class="external-movie">
         Watch Acts 27:1-26</button>
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

<p class="up">Luke and Aristarchus, one of the Thessalonian leaders who came to Jerusalem with Paul two years before, joined the prisoner transfer to Rome (v2). The sailors took a great risk by trying to sail too late in the travel season, putting everyone in very dangerous circumstances. As far as we know Paul, Luke, and Aristarchus were the only Christians on board with about 273 non-Christians (<span class="popup-link" @click = "popUp('pop1')"> Acts 27:37</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">37&nbsp;</sup>Altogether there were 276 of us on board.</p>
</div>
</div>
<!-- end bible --></div>
We see the heart of compassion Jesus has for people as He promised to rescue Paul and all of those on the ship. Paul lived out his trust in Jesus in front of everyone but he was also very practical in how he met people&rsquo;s needs. Trust and godliness did not rule out common sense of what people needed. Even though he was in the lowly position of a prisoner, Paul&rsquo;s leadership character and competence is clearly seen here. The others began to listen to him. We learn that influence is not dependent on our position in life.

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

			<td class="social" @click="share('lesson', 'Trusting Jesus in Dangerous Circumstances: ', '/content/M2/eng/multiply3/multiply351.html')">
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