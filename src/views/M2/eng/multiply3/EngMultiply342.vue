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
                        <div class="chapter_number ltr"><h1>42.</h1></div>
                        <div class="chapter_title ltr"><h1>Final Instructions for Ephesians Elders</h1></div>
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

<ul>
	<li class="nobreak-final-final">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (<span class="popup-link" @click = "popUp('pop1')"> Philippians 2:11</span>b;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	</div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6a)</span></li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people. This has now been witnessed to at the proper time.</p>
</div>

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
	<li class="up">Read or watch Acts 20:13-38 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 20:13-38</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul&rsquo;s Farewell to the Ephesian Elders</h3>

<p><sup class="versenum">13&nbsp;</sup>We went on ahead to the ship and sailed for Assos, where we were going to take Paul aboard. He had made this arrangement because he was going there on foot.<sup class="versenum">14&nbsp;</sup>When he met us at Assos, we took him aboard and went on to Mitylene.<sup class="versenum">15&nbsp;</sup>The next day we set sail from there and arrived off Chios. The day after that we crossed over to Samos, and on the following day arrived at Miletus.<sup class="versenum">16&nbsp;</sup>Paul had decided to sail past Ephesus to avoid spending time in the province of Asia, for he was in a hurry to reach Jerusalem, if possible, by the day of Pentecost.</p>

<p><sup class="versenum">17&nbsp;</sup>From Miletus, Paul sent to Ephesus for the elders of the church.<sup class="versenum">18&nbsp;</sup>When they arrived, he said to them: &ldquo;You know how I lived the whole time I was with you, from the first day I came into the province of Asia.<sup class="versenum">19&nbsp;</sup>I served the Lord with great humility and with tears and in the midst of severe testing by the plots of my Jewish opponents.<sup class="versenum">20&nbsp;</sup>You know that I have not hesitated to preach anything that would be helpful to you but have taught you publicly and from house to house.<sup class="versenum">21&nbsp;</sup>I have declared to both Jews and Greeks that they must turn to God in repentance and have faith in our Lord Jesus.</p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;And now, compelled by the Spirit, I am going to Jerusalem, not knowing what will happen to me there.<sup class="versenum">23&nbsp;</sup>I only know that in every city the Holy Spirit warns me that prison and hardships are facing me.<sup class="versenum">24&nbsp;</sup>However, I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me&mdash;the task of testifying to the good news of God&rsquo;s grace.</p>

<p><sup class="versenum">25&nbsp;</sup>&ldquo;Now I know that none of you among whom I have gone about preaching the kingdom will ever see me again.<sup class="versenum">26&nbsp;</sup>Therefore, I declare to you today that I am innocent of the blood of any of you.<sup class="versenum">27&nbsp;</sup>For I have not hesitated to proclaim to you the whole will of God.<sup class="versenum">28&nbsp;</sup>Keep watch over yourselves and all the flock of which the Holy Spirit has made you overseers. Be shepherds of the church of God, which he bought with his own blood.<sup class="versenum">29&nbsp;</sup>I know that after I leave, savage wolves will come in among you and will not spare the flock.<sup class="versenum">30&nbsp;</sup>Even from your own number men will arise and distort the truth in order to draw away disciples after them.<sup class="versenum">31&nbsp;</sup>So be on your guard! Remember that for three years I never stopped warning each of you night and day with tears.</p>

<p><sup class="versenum">32&nbsp;</sup>&ldquo;Now I commit you to God and to the word of his grace, which can build you up and give you an inheritance among all those who are sanctified.<sup class="versenum">33&nbsp;</sup>I have not coveted anyone&rsquo;s silver or gold or clothing.<sup class="versenum">34&nbsp;</sup>You yourselves know that these hands of mine have supplied my own needs and the needs of my companions.<sup class="versenum">35&nbsp;</sup>In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: &lsquo;It is more blessed to give than to receive.&rsquo; &rdquo;</p>

<p><sup class="versenum">36&nbsp;</sup>When Paul had finished speaking, he knelt down with all of them and prayed.<sup class="versenum">37&nbsp;</sup>They all wept as they embraced him and kissed him.<sup class="versenum">38&nbsp;</sup>What grieved them most was his statement that they would never see his face again. Then they accompanied him to the ship.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/342.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 20:13-38&nbsp;</button>
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

<p class="up">On his way to Jerusalem, Paul and the ministry team stopped in Miletus. Paul called the Ephesian elders to come so that he could speak to them one last time. From Paul&rsquo;s experiences we learn a lot about the perseverance it takes to plant churches in non-Christian cities. Paul faced many trials and hardships, but still told the Ephesians the truth. He did not change his message to please the people. Paul also modeled complete surrender to the Lord&rsquo;s will even in the midst of suffering. We also learn a lot about the important role that elders have. They are to guard their lives and be a model of how to walk with Jesus. They are also to guard God&rsquo;s people and feed them by teaching the Word. Jesus taught that the nature of the Kingdom of God would always include the presence of evil (<span class="popup-link" @click = "popUp('pop1')"> Matthew 13:24-30</span>).</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<p><sup class="versenum">24&nbsp;</sup>Jesus told them another parable: &ldquo;The kingdom of heaven is like a man who sowed good seed in his field.<sup class="versenum">25&nbsp;</sup>But while everyone was sleeping, his enemy came and sowed weeds among the wheat, and went away.<sup class="versenum">26&nbsp;</sup>When the wheat sprouted and formed heads, then the weeds also appeared.</p>

<p><sup class="versenum">27&nbsp;</sup>&ldquo;The owner&rsquo;s servants came to him and said, &lsquo;Sir, didn&rsquo;t you sow good seed in your field? Where then did the weeds come from?&rsquo;</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;&lsquo;An enemy did this,&rsquo; he replied.</p>

<p>&ldquo;The servants asked him, &lsquo;Do you want us to go and pull them up?&rsquo;</p>

<p><sup class="versenum">29&nbsp;</sup>&ldquo;&lsquo;No,&rsquo; he answered, &lsquo;because while you are pulling the weeds, you may uproot the wheat with them.<sup class="versenum">30&nbsp;</sup>Let both grow together until the harvest. At that time I will tell the harvesters: First collect the weeds and tie them in bundles to be burned; then gather the wheat and bring it into my barn.&rsquo;&rdquo;</p>
<!-- end bible --></div>
Paul knew they would face the dangers of false teachers whose desire was to destroy believers. This period ends with Paul stating that his work was done in the Eastern part of the Roman Empire (<span class="popup-link" @click = "popUp('pop2')"> Romans 15:19</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">19&nbsp;</sup>by the power of signs and wonders, through the power of the Spirit of God. So from Jerusalem all the way around to Illyricum, I have fully proclaimed the gospel of Christ.</p>

<p>&nbsp;</p>
</div>

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

			<td class="social" @click="share('lesson', 'Final Instructions for Ephesians Elders: ', '/content/M2/eng/multiply3/multiply342.html')">
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