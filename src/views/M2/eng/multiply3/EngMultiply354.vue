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
                        <div class="chapter_number ltr"><h1>54.</h1></div>
                        <div class="chapter_title ltr"><h1>Ministry While Under House Arrest in Rome</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<h2 class="back">&nbsp;</h2>

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
	<li class="up">Read or watch Acts 28:11-31 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 28:11-31</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>Paul&rsquo;s Arrival at Rome</h3>

<p><sup class="versenum">11&nbsp;</sup>After three months we put out to sea in a ship that had wintered in the island&mdash;it was an Alexandrian ship with the figurehead of the twin gods Castor and Pollux.<sup class="versenum">12&nbsp;</sup>We put in at Syracuse and stayed there three days.<sup class="versenum">13&nbsp;</sup>From there we set sail and arrived at Rhegium. The next day the south wind came up, and on the following day we reached Puteoli.<sup class="versenum">14&nbsp;</sup>There we found some brothers and sisters who invited us to spend a week with them. And so we came to Rome.<sup class="versenum">15&nbsp;</sup>The brothers and sisters there had heard that we were coming, and they traveled as far as the Forum of Appius and the Three Taverns to meet us. At the sight of these people Paul thanked God and was encouraged.<sup class="versenum">16&nbsp;</sup>When we got to Rome, Paul was allowed to live by himself, with a soldier to guard him.</p>

<h3>Paul Preaches at Rome Under Guard</h3>

<p><sup class="versenum">17&nbsp;</sup>Three days later he called together the local Jewish leaders. When they had assembled, Paul said to them: &ldquo;My brothers, although I have done nothing against our people or against the customs of our ancestors, I was arrested in Jerusalem and handed over to the Romans.<sup class="versenum">18&nbsp;</sup>They examined me and wanted to release me, because I was not guilty of any crime deserving death.<sup class="versenum">19&nbsp;</sup>The Jews objected, so I was compelled to make an appeal to Caesar. I certainly did not intend to bring any charge against my own people.<sup class="versenum">20&nbsp;</sup>For this reason I have asked to see you and talk with you. It is because of the hope of Israel that I am bound with this chain.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>They replied, &ldquo;We have not received any letters from Judea concerning you, and none of our people who have come from there has reported or said anything bad about you.<sup class="versenum">22&nbsp;</sup>But we want to hear what your views are, for we know that people everywhere are talking against this sect.&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>They arranged to meet Paul on a certain day, and came in even larger numbers to the place where he was staying. He witnessed to them from morning till evening, explaining about the kingdom of God, and from the Law of Moses and from the Prophets he tried to persuade them about Jesus.<sup class="versenum">24&nbsp;</sup>Some were convinced by what he said, but others would not believe.<sup class="versenum">25&nbsp;</sup>They disagreed among themselves and began to leave after Paul had made this final statement: &ldquo;The Holy Spirit spoke the truth to your ancestors when he said through Isaiah the prophet:</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;&lsquo;Go to this people and say,<br />
&ldquo;You will be ever hearing but never understanding;<br />
&nbsp;&nbsp;&nbsp;&nbsp;you will be ever seeing but never perceiving.&rdquo;<br />
<sup class="versenum">27&nbsp;</sup>For this people&rsquo;s heart has become calloused;<br />
&nbsp;&nbsp;&nbsp;&nbsp;they hardly hear with their ears,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and they have closed their eyes.<br />
Otherwise they might see with their eyes,<br />
&nbsp;&nbsp;&nbsp;&nbsp;hear with their ears,<br />
&nbsp;&nbsp;&nbsp;&nbsp;understand with their hearts<br />
and turn, and I would heal them.&rsquo;</p>
</div>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;Therefore I want you to know that God&rsquo;s salvation has been sent to the Gentiles, and they will listen!&rdquo;<sup class="versenum">[29]&nbsp;</sup></p>

<p><sup class="versenum">30&nbsp;</sup>For two whole years Paul stayed there in his own rented house and welcomed all who came to see him.<sup class="versenum">31&nbsp;</sup>He proclaimed the kingdom of God and taught about the Lord Jesus Christ&mdash;with all boldness and without hindrance!</p>
<!-- end bible -->

<p class="bible"></p>
</div>


<button id="MC2/eng/video/multiply3/354.mp4" type="button" class="external-movie">
         Watch Acts 28:11-31</button>
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

<p class="up">The Roman believers would have received Paul&rsquo;s letter almost 3 years earlier. Paul kept the pattern of starting with the Jews, giving them evidence from scripture that Jesus is the Messiah, and then starting to share with the non-Jewish people. The Jewish leader&rsquo;s testimony gives a glimpse into the spread of the gospel, &ldquo;we know people everywhere are talking against this sect&rdquo; (<span class="popup-link" @click = "popUp('pop1')"> Acts 28:22</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">22&nbsp;</sup>But we want to hear what your views are, for we know that people everywhere are talking against this sect.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
Paul was able to witness to his Roman guards and even members of Caesar&rsquo;s household became believers (<span class="popup-link" @click = "popUp('pop2')"> Philippians 4:22</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">22&nbsp;</sup>All God&rsquo;s people here send you greetings, especially those who belong to Caesar&rsquo;s household.</p>
</div>
</div>
<!-- end bible --></div>
During his time in Rome, Paul continued coaching and mentoring believers in Philippi, Colossae and Ephesus through letter writing.

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

			<td class="social" @click="share('lesson', 'Ministry While Under House Arrest in Rome: ', '/content/M2/eng/multiply3/multiply354.html')">
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