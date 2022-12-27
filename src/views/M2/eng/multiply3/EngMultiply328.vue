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
                        <div class="chapter_number ltr"><h1>28.</h1></div>
                        <div class="chapter_title ltr"><h1>Church Planted in Rural Towns of Galatia (Lystra and Derbe):</h1></div>
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
	<li class="up">Read or watch Acts 14:8-20 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 14:8-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>In Lystra and Derbe</h3>

<p><sup class="versenum">8&nbsp;</sup>In Lystra there sat a man who was lame. He had been that way from birth and had never walked.<sup class="versenum">9&nbsp;</sup>He listened to Paul as he was speaking. Paul looked directly at him, saw that he had faith to be healed<sup class="versenum">10&nbsp;</sup>and called out, &ldquo;Stand up on your feet!&rdquo; At that, the man jumped up and began to walk.</p>

<p><sup class="versenum">11&nbsp;</sup>When the crowd saw what Paul had done, they shouted in the Lycaonian language, &ldquo;The gods have come down to us in human form!&rdquo;<sup class="versenum">12&nbsp;</sup>Barnabas they called Zeus, and Paul they called Hermes because he was the chief speaker.<sup class="versenum">13&nbsp;</sup>The priest of Zeus, whose temple was just outside the city, brought bulls and wreaths to the city gates because he and the crowd wanted to offer sacrifices to them.</p>

<p><sup class="versenum">14&nbsp;</sup>But when the apostles Barnabas and Paul heard of this, they tore their clothes and rushed out into the crowd, shouting:<sup class="versenum">15&nbsp;</sup>&ldquo;Friends, why are you doing this? We too are only human, like you. We are bringing you good news, telling you to turn from these worthless things to the living God, who made the heavens and the earth and the sea and everything in them.<sup class="versenum">16&nbsp;</sup>In the past, he let all nations go their own way.<sup class="versenum">17&nbsp;</sup>Yet he has not left himself without testimony: He has shown kindness by giving you rain from heaven and crops in their seasons; he provides you with plenty of food and fills your hearts with joy.&rdquo;<sup class="versenum">18&nbsp;</sup>Even with these words, they had difficulty keeping the crowd from sacrificing to them.</p>

<p><sup class="versenum">19&nbsp;</sup>Then some Jews came from Antioch and Iconium and won the crowd over. They stoned Paul and dragged him outside the city, thinking he was dead.<sup class="versenum">20&nbsp;</sup>But after the disciples had gathered around him, he got up and went back into the city. The next day he and Barnabas left for Derbe.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/328.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 14:8-20&nbsp;</button>
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
<p class="up">Unlike the other cities Paul and Barnabas visited, Lystra was a smaller, rural city that did not have a synagogue. The local people in Lystra still practiced their native religion and spoke their local language. Just as Jesus and Peter had healed the lame (<span class="popup-link" @click = "popUp('pop5')"> Matthew 15:30-31</span>;&nbsp;</p>

<div class="popup invisible" id="pop5"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">30&nbsp;</sup>Great crowds came to him, bringing the lame, the blind, the crippled, the mute and many others, and laid them at his feet; and he healed them.<sup class="versenum">31&nbsp;</sup>The people were amazed when they saw the mute speaking, the crippled made well, the lame walking and the blind seeing. And they praised the God of Israel.</p>
</div>
</div>
<!-- end bible --></div>

<p>&nbsp;</p>

<div class="popup invisible" id="pop1">&nbsp;</div>
<span class="popup-link" @click = "popUp('pop2')"> Acts 3:1-10</span>),&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">1 </sup>One day Peter and John were going up to the temple at the time of prayer&mdash;at three in the afternoon.<sup class="versenum">2&nbsp;</sup>Now a man who was lame from birth was being carried to the temple gate called Beautiful, where he was put every day to beg from those going into the temple courts.<sup class="versenum">3&nbsp;</sup>When he saw Peter and John about to enter, he asked them for money.<sup class="versenum">4&nbsp;</sup>Peter looked straight at him, as did John. Then Peter said, &ldquo;Look at us!&rdquo;<sup class="versenum">5&nbsp;</sup>So the man gave them his attention, expecting to get something from them.</p>

<p><sup class="versenum">6&nbsp;</sup>Then Peter said, &ldquo;Silver or gold I do not have, but what I do have I give you. In the name of Jesus Christ of Nazareth, walk.&rdquo;<sup class="versenum">7&nbsp;</sup>Taking him by the right hand, he helped him up, and instantly the man&rsquo;s feet and ankles became strong.<sup class="versenum">8&nbsp;</sup>He jumped to his feet and began to walk. Then he went with them into the temple courts, walking and jumping, and praising God.<sup class="versenum">9&nbsp;</sup>When all the people saw him walking and praising God,<sup class="versenum">10&nbsp;</sup>they recognized him as the same man who used to sit begging at the temple gate called Beautiful, and they were filled with wonder and amazement at what had happened to him.</p>
</div>
</div>
<!-- end bible --></div>
Paul also responded to the Holy Spirit&rsquo;s prompting by healing a man lame from birth. Confusion followed as people interpreted the miracle through their own religion. They mistakenly concluded that Paul and Barnabas were gods, but there were some people who believed their message (<span class="popup-link" @click = "popUp('pop3')"> Acts 14:20</span>).&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">20&nbsp;</sup>But after the disciples had gathered around him, he got up and went back into the city. The next day he and Barnabas left for Derbe.</p>
</div>
</div>
<!-- end bible --></div>
Even after facing violent persecution, Paul boldly went back to the city to be with the new believers. Later Paul would write these words, &ldquo;everyone who wants to live a godly life in Christ Jesus will be persecuted&rdquo; (<span class="popup-link" @click = "popUp('pop4')"> 2 Timothy 3:12</span>).&nbsp;

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">12&nbsp;</sup>In fact, everyone who wants to live a godly life in Christ Jesus will be persecuted,</p>
</div>
</div>
<!-- end bible --></div>
They traveled to the next town, Derbe, where they also led many people to the Lord.

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

			<td class="social" @click="share('lesson', 'Church Planted in Rural Towns of Galatia (Lystra and Derbe):: ', '/content/M2/eng/multiply3/multiply328.html')">
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