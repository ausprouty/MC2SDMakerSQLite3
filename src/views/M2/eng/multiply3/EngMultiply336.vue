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
                        <div class="chapter_number ltr"><h1>36.</h1></div>
                        <div class="chapter_title ltr"><h1>Church Planting in Capital of Achaia (Corinth)</h1></div>
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
	<li class="up">Read or watch Acts 18:1-22 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 18:1-22</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>In Corinth</h3>

<p><sup class="versenum">1 </sup>After this, Paul left Athens and went to Corinth.<sup class="versenum">2&nbsp;</sup>There he met a Jew named Aquila, a native of Pontus, who had recently come from Italy with his wife Priscilla, because Claudius had ordered all Jews to leave Rome. Paul went to see them,<sup class="versenum">3&nbsp;</sup>and because he was a tentmaker as they were, he stayed and worked with them.<sup class="versenum">4&nbsp;</sup>Every Sabbath he reasoned in the synagogue, trying to persuade Jews and Greeks.</p>

<p><sup class="versenum">5&nbsp;</sup>When Silas and Timothy came from Macedonia, Paul devoted himself exclusively to preaching, testifying to the Jews that Jesus was the Messiah.<sup class="versenum">6&nbsp;</sup>But when they opposed Paul and became abusive, he shook out his clothes in protest and said to them, &ldquo;Your blood be on your own heads! I am innocent of it. From now on I will go to the Gentiles.&rdquo;</p>

<p><sup class="versenum">7&nbsp;</sup>Then Paul left the synagogue and went next door to the house of Titius Justus, a worshiper of God.<sup class="versenum">8&nbsp;</sup>Crispus, the synagogue leader, and his entire household believed in the Lord; and many of the Corinthians who heard Paul believed and were baptized.</p>

<p><sup class="versenum">9&nbsp;</sup>One night the Lord spoke to Paul in a vision: &ldquo;Do not be afraid; keep on speaking, do not be silent.<sup class="versenum">10&nbsp;</sup>For I am with you, and no one is going to attack and harm you, because I have many people in this city.&rdquo;<sup class="versenum">11&nbsp;</sup>So Paul stayed in Corinth for a year and a half, teaching them the word of God.</p>

<p><sup class="versenum">12&nbsp;</sup>While Gallio was proconsul of Achaia, the Jews of Corinth made a united attack on Paul and brought him to the place of judgment.<sup class="versenum">13&nbsp;</sup>&ldquo;This man,&rdquo; they charged, &ldquo;is persuading the people to worship God in ways contrary to the law.&rdquo;</p>

<p><sup class="versenum">14&nbsp;</sup>Just as Paul was about to speak, Gallio said to them, &ldquo;If you Jews were making a complaint about some misdemeanor or serious crime, it would be reasonable for me to listen to you.<sup class="versenum">15&nbsp;</sup>But since it involves questions about words and names and your own law&mdash;settle the matter yourselves. I will not be a judge of such things.&rdquo;<sup class="versenum">16&nbsp;</sup>So he drove them off.<sup class="versenum">17&nbsp;</sup>Then the crowd there turned on Sosthenes the synagogue leader and beat him in front of the proconsul; and Gallio showed no concern whatever.</p>

<h3>Priscilla, Aquila and Apollos</h3>

<p><sup class="versenum">18&nbsp;</sup>Paul stayed on in Corinth for some time. Then he left the brothers and sisters and sailed for Syria, accompanied by Priscilla and Aquila. Before he sailed, he had his hair cut off at Cenchreae because of a vow he had taken.<sup class="versenum">19&nbsp;</sup>They arrived at Ephesus, where Paul left Priscilla and Aquila. He himself went into the synagogue and reasoned with the Jews.<sup class="versenum">20&nbsp;</sup>When they asked him to spend more time with them, he declined.<sup class="versenum">21&nbsp;</sup>But as he left, he promised, &ldquo;I will come back if it is God&rsquo;s will.&rdquo; Then he set sail from Ephesus.<sup class="versenum">22&nbsp;</sup>When he landed at Caesarea, he went up to Jerusalem and greeted the church and then went down to Antioch.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/336.mp4" type="button" class="external-movie">
         Watch Acts 18:1-22</button>
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

<p class="up">Corinth was a major economic city in the ancient world known for its immoral culture. When Paul arrived, he met Aquila and Priscilla, who had just come from Rome. They were like-minded business people who became a powerful husband-wife church planting team. Paul worked together with them in business and ministry. When Silas and Timothy arrived from Macedonia, they brought financial support and news of how the new believers in Thessalonica were doing (<span class="popup-link" @click = "popUp('pop1')"> 1 Thessalonians 3:2</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">2&nbsp;</sup>We sent Timothy, who is our brother and co-worker in God&rsquo;s service in spreading the gospel of Christ, to strengthen and encourage you in your faith,</p>
</div>
</div>
<!-- end bible --></div>
Paul wrote both of his letters to the disciples in Thessalonica while he was church planting in Corinth. Paul faced a lot of social pressure and battled fears (<span class="popup-link" @click = "popUp('pop2')"> Acts 18:9</span>),&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">9&nbsp;</sup>One night the Lord spoke to Paul in a vision: &ldquo;Do not be afraid; keep on speaking, do not be silent.</p>
</div>
</div>
<!-- end bible --></div>
but the Lord told him to keep going. Read <span class="popup-link" @click = "popUp('pop3')"> 1 Corinthians 1:14-16</span>.&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">14&nbsp;</sup>I thank God that I did not baptize any of you except Crispus and Gaius,<sup class="versenum">15&nbsp;</sup>so no one can say that you were baptized in my name.<sup class="versenum">16&nbsp;</sup>(Yes, I also baptized the household of Stephanas; beyond that, I don&rsquo;t remember if I baptized anyone else.)</p>
</div>
</div>
<!-- end bible --></div>
Large numbers of people came to faith in Jesus, yet in Paul&rsquo;s letter to the Corinthians we find out that Paul only baptized the first few believers. We learn the importance of empowering new believers for the mission of making disciples, baptizing and teaching them just as Jesus commanded.

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

			<td class="social" @click="share('lesson', 'Church Planting in Capital of Achaia (Corinth): ', '/content/M2/eng/multiply3/multiply336.html')">
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