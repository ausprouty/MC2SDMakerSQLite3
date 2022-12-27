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
                        <div class="chapter_number ltr"><h1>35.</h1></div>
                        <div class="chapter_title ltr"><h1>Church Planting in Pagan Religious Center (Athens)</h1></div>
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
	<li class="up">Read or watch Acts 17:16-34&nbsp; two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 17:16-34</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>In Athens</h3>

<p><sup class="versenum">16&nbsp;</sup>While Paul was waiting for them in Athens, he was greatly distressed to see that the city was full of idols.<sup class="versenum">17&nbsp;</sup>So he reasoned in the synagogue with both Jews and God-fearing Greeks, as well as in the marketplace day by day with those who happened to be there.<sup class="versenum">18&nbsp;</sup>A group of Epicurean and Stoic philosophers began to debate with him. Some of them asked, &ldquo;What is this babbler trying to say?&rdquo; Others remarked, &ldquo;He seems to be advocating foreign gods.&rdquo; They said this because Paul was preaching the good news about Jesus and the resurrection.<sup class="versenum">19&nbsp;</sup>Then they took him and brought him to a meeting of the Areopagus, where they said to him, &ldquo;May we know what this new teaching is that you are presenting?<sup class="versenum">20&nbsp;</sup>You are bringing some strange ideas to our ears, and we would like to know what they mean.&rdquo;<sup class="versenum">21&nbsp;</sup>(All the Athenians and the foreigners who lived there spent their time doing nothing but talking about and listening to the latest ideas.)</p>

<p><sup class="versenum">22&nbsp;</sup>Paul then stood up in the meeting of the Areopagus and said: &ldquo;People of Athens! I see that in every way you are very religious.<sup class="versenum">23&nbsp;</sup>For as I walked around and looked carefully at your objects of worship, I even found an altar with this inscription: <span class="small-caps">to an unknown god. So you are ignorant of the very thing you worship&mdash;and this is what I am going to proclaim to you.</span></p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;The God who made the world and everything in it is the Lord of heaven and earth and does not live in temples built by human hands.<sup class="versenum">25&nbsp;</sup>And he is not served by human hands, as if he needed anything. Rather, he himself gives everyone life and breath and everything else.<sup class="versenum">26&nbsp;</sup>From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands.<sup class="versenum">27&nbsp;</sup>God did this so that they would seek him and perhaps reach out for him and find him, though he is not far from any one of us.<sup class="versenum">28&nbsp;</sup>&lsquo;For in him we live and move and have our being.&rsquo; As some of your own poets have said, &lsquo;We are his offspring.&rsquo;</p>

<p><sup class="versenum">29&nbsp;</sup>&ldquo;Therefore since we are God&rsquo;s offspring, we should not think that the divine being is like gold or silver or stone&mdash;an image made by human design and skill.<sup class="versenum">30&nbsp;</sup>In the past God overlooked such ignorance, but now he commands all people everywhere to repent.<sup class="versenum">31&nbsp;</sup>For he has set a day when he will judge the world with justice by the man he has appointed. He has given proof of this to everyone by raising him from the dead.&rdquo;</p>

<p><sup class="versenum">32&nbsp;</sup>When they heard about the resurrection of the dead, some of them sneered, but others said, &ldquo;We want to hear you again on this subject.&rdquo;<sup class="versenum">33&nbsp;</sup>At that, Paul left the Council.<sup class="versenum">34&nbsp;</sup>Some of the people became followers of Paul and believed. Among them was Dionysius, a member of the Areopagus, also a woman named Damaris, and a number of others.</p>
<!-- end bible -->

<p class="bible"></p>

</div>



    <button id="MC2/eng/video/multiply3/335.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 17:16-34&nbsp;</button>
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

<p class="up">Paul had great compassion for the lostness of people and was saddened by the number of false gods the people tried to please. While he waited for Silas and Timothy to arrive from Macedonia, Paul continued to do evangelism with the different people in the Greek city of Athens: the small community of Jews in the local synagogue, the pagan general public in the market, and different types of educated philosophers (like university professors). This led to those people who were curious about the message to arrange a meeting with the city leaders. We see how Paul adapted his message for the audience of the Athenian leaders by starting from their context of having an &ldquo;unknown god&rdquo; and quoting one of their poets. Paul shows us that the way we communicate the gospel can be adjusted for different cultures while not changing the gospel message of needing to repent and believe in Jesus. Unlike other cities, there was very little response in Athens.</p>

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

			<td class="social" @click="share('lesson', 'Church Planting in Pagan Religious Center (Athens): ', '/content/M2/eng/multiply3/multiply335.html')">
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