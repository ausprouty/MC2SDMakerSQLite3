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
                        <div class="chapter_number ltr"><h1>24.</h1></div>
                        <div class="chapter_title ltr"><h1>Leaders Released for Mission Expansion</h1></div>
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
	<li class="up">Read or watch Acts 13:1-12 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 13:1-12</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="mid-paragraph versenum">1&nbsp;</sup>Now in the church at Antioch there were prophets and teachers: Barnabas, Simeon called Niger, Lucius of Cyrene, Manaen (who had been brought up with Herod the tetrarch) and Saul.<sup class="versenum">2&nbsp;</sup>While they were worshiping the Lord and fasting, the Holy Spirit said, &ldquo;Set apart for me Barnabas and Saul for the work to which I have called them.&rdquo;<sup class="versenum">3&nbsp;</sup>So after they had fasted and prayed, they placed their hands on them and sent them off.</p>

<h3>On Cyprus</h3>

<p><sup class="versenum">4&nbsp;</sup>The two of them, sent on their way by the Holy Spirit, went down to Seleucia and sailed from there to Cyprus.<sup class="versenum">5&nbsp;</sup>When they arrived at Salamis, they proclaimed the word of God in the Jewish synagogues. John was with them as their helper.</p>

<p><sup class="versenum">6&nbsp;</sup>They traveled through the whole island until they came to Paphos. There they met a Jewish sorcerer and false prophet named Bar-Jesus,<sup class="versenum">7&nbsp;</sup>who was an attendant of the proconsul, Sergius Paulus. The proconsul, an intelligent man, sent for Barnabas and Saul because he wanted to hear the word of God.<sup class="versenum">8&nbsp;</sup>But Elymas the sorcerer (for that is what his name means) opposed them and tried to turn the proconsul from the faith.<sup class="versenum">9&nbsp;</sup>Then Saul, who was also called Paul, filled with the Holy Spirit, looked straight at Elymas and said,<sup class="versenum">10&nbsp;</sup>&ldquo;You are a child of the devil and an enemy of everything that is right! You are full of all kinds of deceit and trickery. Will you never stop perverting the right ways of the Lord?<sup class="versenum">11&nbsp;</sup>Now the hand of the Lord is against you. You are going to be blind for a time, not even able to see the light of the sun.&rdquo;</p>

<p>Immediately mist and darkness came over him, and he groped about, seeking someone to lead him by the hand.<sup class="versenum">12&nbsp;</sup>When the proconsul saw what had happened, he believed, for he was amazed at the teaching about the Lord.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/324.mp4" type="button" class="external-movie">
         Watch Acts 13:1-12</button>
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

<p class="up">The leadership team in the church at Antioch consisted of five men with different gifts and different backgrounds. The Spirit directed them to send out Saul and Barnabas, two members of the team, to make disciples and start new churches in new territories. Barnabas and Saul decided to take Barnabas&rsquo; young cousin, John Mark, with them as an assistant. The first place they visited was Barnabas&rsquo; home of Cyprus, an island off the coast of Syria. It was also believers from Cyprus that had help start the church in Antioch (<span class="popup-link" @click = "popUp('pop1')"> Acts 11:20</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">20&nbsp;</sup>Some of them, however, men from Cyprus and Cyrene, went to Antioch and began to speak to Greeks also, telling them the good news about the Lord Jesus.</p>
</div>
</div>
<!-- end bible --></div>
These relationships likely influenced their plans. As a Roman citizen, Saul used his Gentile name, Paul, while he traveled. Paul and Barnabas are introduced to the governor of the island through a Jewish sorcerer which led to major spiritual conflict. Paul did not respond with fear but with the authority of Jesus (<span class="popup-link" @click = "popUp('pop2')"> Matthew 28:18-20</span>)&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">18&nbsp;</sup>Then Jesus came to them and said, &ldquo;All authority in heaven and on earth has been given to me.<sup class="versenum">19&nbsp;</sup>Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,<sup class="versenum">20&nbsp;</sup>and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
to overcome the demonic opposition. The conversion of the governor was another major milestone, it was the first time a Roman political ruler becomes a follower of Christ.

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

			<td class="social" @click="share('lesson', 'Leaders Released for Mission Expansion: ', '/content/M2/eng/multiply3/multiply324.html')">
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