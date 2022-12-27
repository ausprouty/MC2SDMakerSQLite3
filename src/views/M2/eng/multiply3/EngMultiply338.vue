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
                        <div class="chapter_number ltr"><h1>38.</h1></div>
                        <div class="chapter_title ltr"><h1>Church Planting in Capital of Asia (Ephesus)</h1></div>
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
	<li class="up">Read or watch Acts 19: 1-10&nbsp; two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 19:1-10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul in Ephesus</h3>

<p><sup class="versenum">1 </sup>While Apollos was at Corinth, Paul took the road through the interior and arrived at Ephesus. There he found some disciples<sup class="versenum">2&nbsp;</sup>and asked them, &ldquo;Did you receive the Holy Spirit when you believed?&rdquo;</p>

<p>They answered, &ldquo;No, we have not even heard that there is a Holy Spirit.&rdquo;</p>

<p><sup class="versenum">3&nbsp;</sup>So Paul asked, &ldquo;Then what baptism did you receive?&rdquo;</p>

<p>&ldquo;John&rsquo;s baptism,&rdquo; they replied.</p>

<p><sup class="versenum">4&nbsp;</sup>Paul said, &ldquo;John&rsquo;s baptism was a baptism of repentance. He told the people to believe in the one coming after him, that is, in Jesus.&rdquo;<sup class="versenum">5&nbsp;</sup>On hearing this, they were baptized in the name of the Lord Jesus.<sup class="versenum">6&nbsp;</sup>When Paul placed his hands on them, the Holy Spirit came on them, and they spoke in tongues and prophesied.<sup class="versenum">7&nbsp;</sup>There were about twelve men in all.</p>

<p><sup class="versenum">8&nbsp;</sup>Paul entered the synagogue and spoke boldly there for three months, arguing persuasively about the kingdom of God.<sup class="versenum">9&nbsp;</sup>But some of them became obstinate; they refused to believe and publicly maligned the Way. So Paul left them. He took the disciples with him and had discussions daily in the lecture hall of Tyrannus.<sup class="versenum">10&nbsp;</sup>This went on for two years, so that all the Jews and Greeks who lived in the province of Asia heard the word of the Lord.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/338.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 19:1-10&nbsp;</button>
    <div class="collapsed"></div>

<h2>Discovery Discussion (Everyone answers)</h2>

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
<p class="up">When Paul arrived in Ephesus, he met 12 men who knew John the Baptist&rsquo;s teaching but did not know about Jesus or the sending of the Holy Spirit. After Paul taught them, they are willing to be identified with Jesus by being baptized in his name. These new believers experienced the Holy Spirit by receiving the gift of prophecy. Even though Aquila and Priscilla had been sharing the gospel in Ephesus, a movement did not start until Paul started teaching there daily. As a result, the gospel spread from the provincial capital to the whole province of Asia (about 8 million people) in only two years. Colossae was one of the cities of the province of Asia that was reached during this time. Read <span class="popup-link" @click = "popUp('pop1')"> Colossians 1:3-8</span>.&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">3&nbsp;</sup>We always thank God, the Father of our Lord Jesus Christ, when we pray for you,<sup class="versenum">4&nbsp;</sup>because we have heard of your faith in Christ Jesus and of the love you have for all God&rsquo;s people&mdash;<sup class="versenum">5&nbsp;</sup>the faith and love that spring from the hope stored up for you in heaven and about which you have already heard in the true message of the gospel<sup class="versenum">6&nbsp;</sup>that has come to you. In the same way, the gospel is bearing fruit and growing throughout the whole world&mdash;just as it has been doing among you since the day you heard it and truly understood God&rsquo;s grace.<sup class="versenum">7&nbsp;</sup>You learned it from Epaphras, our dear fellow servant, who is a faithful minister of Christ on our behalf,<sup class="versenum">8&nbsp;</sup>and who also told us of your love in the Spirit.</p>
</div>
</div>
<!-- end bible --></div>
Paul&rsquo;s strategic role continued to shift. He coached the ongoing movements in four other provinces through letters and ambassadors. His long stay in the city of Ephesus allowed Paul to have his biggest impact. Leaders were being raised up from the harvest and sent out to plant churches.

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

			<td class="social" @click="share('lesson', 'Church Planting in Capital of Asia (Ephesus): ', '/content/M2/eng/multiply3/multiply338.html')">
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