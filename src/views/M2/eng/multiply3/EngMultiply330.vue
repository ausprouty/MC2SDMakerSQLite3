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
                        <div class="chapter_number ltr"><h1>30.</h1></div>
                        <div class="chapter_title ltr"><h1>Leaders Discern God's will for Gentile Expansion</h1></div>
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
	<li class="up">Read or watch Acts 15:1-35 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 15:1-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Council at Jerusalem</h3>

<p><sup class="versenum">1 </sup>Certain people came down from Judea to Antioch and were teaching the believers: &ldquo;Unless you are circumcised, according to the custom taught by Moses, you cannot be saved.&rdquo;<sup class="versenum">2&nbsp;</sup>This brought Paul and Barnabas into sharp dispute and debate with them. So Paul and Barnabas were appointed, along with some other believers, to go up to Jerusalem to see the apostles and elders about this question.<sup class="versenum">3&nbsp;</sup>The church sent them on their way, and as they traveled through Phoenicia and Samaria, they told how the Gentiles had been converted. This news made all the believers very glad.<sup class="versenum">4&nbsp;</sup>When they came to Jerusalem, they were welcomed by the church and the apostles and elders, to whom they reported everything God had done through them.</p>

<p><sup class="versenum">5&nbsp;</sup>Then some of the believers who belonged to the party of the Pharisees stood up and said, &ldquo;The Gentiles must be circumcised and required to keep the law of Moses.&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>The apostles and elders met to consider this question.<sup class="versenum">7&nbsp;</sup>After much discussion, Peter got up and addressed them: &ldquo;Brothers, you know that some time ago God made a choice among you that the Gentiles might hear from my lips the message of the gospel and believe.<sup class="versenum">8&nbsp;</sup>God, who knows the heart, showed that he accepted them by giving the Holy Spirit to them, just as he did to us.<sup class="versenum">9&nbsp;</sup>He did not discriminate between us and them, for he purified their hearts by faith.<sup class="versenum">10&nbsp;</sup>Now then, why do you try to test God by putting on the necks of Gentiles a yoke that neither we nor our ancestors have been able to bear?<sup class="versenum">11&nbsp;</sup>No! We believe it is through the grace of our Lord Jesus that we are saved, just as they are.&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>The whole assembly became silent as they listened to Barnabas and Paul telling about the signs and wonders God had done among the Gentiles through them.<sup class="versenum">13&nbsp;</sup>When they finished, James spoke up. &ldquo;Brothers,&rdquo; he said, &ldquo;listen to me.<sup class="versenum">14&nbsp;</sup>Simon has described to us how God first intervened to choose a people for his name from the Gentiles.<sup class="versenum">15&nbsp;</sup>The words of the prophets are in agreement with this, as it is written:</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;&lsquo;After this I will return<br />
&nbsp;&nbsp;&nbsp;&nbsp;and rebuild David&rsquo;s fallen tent.<br />
Its ruins I will rebuild,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and I will restore it,<br />
<sup class="versenum">17&nbsp;</sup>that the rest of mankind may seek the Lord,<br />
&nbsp;&nbsp;&nbsp;&nbsp;even all the Gentiles who bear my name,<br />
says the Lord, who does these things&rsquo;&mdash;<br />
<sup class="versenum">18&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;things known from long ago.</p>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;It is my judgment, therefore, that we should not make it difficult for the Gentiles who are turning to God.<sup class="versenum">20&nbsp;</sup>Instead we should write to them, telling them to abstain from food polluted by idols, from sexual immorality, from the meat of strangled animals and from blood.<sup class="versenum">21&nbsp;</sup>For the law of Moses has been preached in every city from the earliest times and is read in the synagogues on every Sabbath.&rdquo;</p>

<h3>The Council&rsquo;s Letter to Gentile Believers</h3>

<p><sup class="versenum">22&nbsp;</sup>Then the apostles and elders, with the whole church, decided to choose some of their own men and send them to Antioch with Paul and Barnabas. They chose Judas (called Barsabbas) and Silas, men who were leaders among the believers.<sup class="versenum">23&nbsp;</sup>With them they sent the following letter:</p>

<p>The apostles and elders, your brothers,</p>

<p>To the Gentile believers in Antioch, Syria and Cilicia:</p>

<p>Greetings.</p>

<p><sup class="versenum">24&nbsp;</sup>We have heard that some went out from us without our authorization and disturbed you, troubling your minds by what they said.<sup class="versenum">25&nbsp;</sup>So we all agreed to choose some men and send them to you with our dear friends Barnabas and Paul&mdash;<sup class="versenum">26&nbsp;</sup>men who have risked their lives for the name of our Lord Jesus Christ.<sup class="versenum">27&nbsp;</sup>Therefore we are sending Judas and Silas to confirm by word of mouth what we are writing.<sup class="versenum">28&nbsp;</sup>It seemed good to the Holy Spirit and to us not to burden you with anything beyond the following requirements:<sup class="versenum">29&nbsp;</sup>You are to abstain from food sacrificed to idols, from blood, from the meat of strangled animals and from sexual immorality. You will do well to avoid these things.</p>

<p>Farewell.</p>

<p><sup class="versenum">30&nbsp;</sup>So the men were sent off and went down to Antioch, where they gathered the church together and delivered the letter.<sup class="versenum">31&nbsp;</sup>The people read it and were glad for its encouraging message.<sup class="versenum">32&nbsp;</sup>Judas and Silas, who themselves were prophets, said much to encourage and strengthen the believers.<sup class="versenum">33&nbsp;</sup>After spending some time there, they were sent off by the believers with the blessing of peace to return to those who had sent them.<sup class="versenum">[34]&nbsp;</sup><sup class="versenum">35&nbsp;</sup>But Paul and Barnabas remained in Antioch, where they and many others taught and preached the word of the Lord.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/330.mp4" type="button" class="external-movie">
         Watch Acts 15:1-35</button>
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

<p class="up">Some of the Jewish believers insisted that without circumcision the new converts could not be saved. Circumcision was the God given sign that Jews were members of the Old Testament covenant. Even though they had come to understand that God&rsquo;s offer of salvation was for all peoples (<span class="popup-link" @click = "popUp('pop1')"> Acts 11:18</span>),&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">18&nbsp;</sup>When they heard this, they had no further objections and praised God, saying, &ldquo;So then, even to Gentiles God has granted repentance that leads to life.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
they still believed God required circumcision and observing the Law as necessary to being fully accepted into the body of Christ. Paul&rsquo;s ministry practice of accepting Gentiles as members of the body of Christ by their profession of faith and baptism alone was being challenged. But we see how Paul was willing to submit to the decision of the body of believers. The future of the mission to make disciples of all nations was at stake! The leaders used prayer, careful listening and reasoning, reflection on the Word, and observation of how God was working to discern God&rsquo;s will. They clarified doctrine which ended the controversy and promoted peace. Jesus had opened the way for all peoples to come back to the Father.

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

			<td class="social" @click="share('lesson', 'Leaders Discern God\'s will for Gentile Expansion: ', '/content/M2/eng/multiply3/multiply330.html')">
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