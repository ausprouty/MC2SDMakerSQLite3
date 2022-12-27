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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply2-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>34.</h1></div>
                        <div class="chapter_title ltr"><h1>Sending Leaders</h1></div>
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
	<li class="nobreak-final-final">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (<span class="popup-link" @click = "popUp('pop1')"> Philippians 2:11</span>b;&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6</span>a).&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people.&nbsp;</p>
	</div>
	</li>
</ul>

</div>

<h2 class="back">Caring for each other</h2>

<p><em>Minister to one another&rsquo;s needs in prayer, biblical counsel and encouragement. </em></p>

<ul>
	<li>Ask each person to tell one highlight and explain one challenge they experienced this week.</li>
	<li>Ask, &ldquo;What do you want Jesus to do for you this week?&rdquo; Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating&nbsp; Faithfulness</h2>

<p><em>Encourage loving accountability to obey Jesus</em></p>

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
	<li class="back">reminding them of what God wants to do through them.</li>
</ul>

<p class="back"><span><span>Our vision is: <em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></span></span></p>

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


</div>

<ul>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li><span><span>Ask the group to tell the story from last week.</span></span></li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch Luke 9:1-6&nbsp; and Matthew 10:5-23 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 9:1-6</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Sends Out the Twelve</h3>

<p><sup class="versenum">1 </sup>When Jesus had called the Twelve together, he gave them power and authority to drive out all demons and to cure diseases,<sup class="versenum">2&nbsp;</sup>and he sent them out to proclaim the kingdom of God and to heal the sick.<sup class="versenum">3&nbsp;</sup>He told them: &ldquo;Take nothing for the journey&mdash;no staff, no bag, no bread, no money, no extra shirt.<sup class="versenum">4&nbsp;</sup>Whatever house you enter, stay there until you leave that town.<sup class="versenum">5&nbsp;</sup>If people do not welcome you, leave their town and shake the dust off your feet as a testimony against them.&rdquo;<sup class="versenum">6&nbsp;</sup>So they set out and went from village to village, proclaiming the good news and healing people everywhere.</p>
<!-- end bible -->

<p class="bible"></p>


</div>

<button id="MC2/eng/video/multiply2/234.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 9:1-6&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Read Matthew 10:5-23</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<p><sup class="versenum">5&nbsp;</sup>These twelve Jesus sent out with the following instructions: &ldquo;Do not go among the Gentiles or enter any town of the Samaritans.<sup class="versenum">6&nbsp;</sup>Go rather to the lost sheep of Israel.<sup class="versenum">7&nbsp;</sup>As you go, proclaim this message: &lsquo;The kingdom of heaven has come near.&rsquo;<sup class="versenum">8&nbsp;</sup>Heal the sick, raise the dead, cleanse those who have leprosy, drive out demons. Freely you have received; freely give.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;Do not get any gold or silver or copper to take with you in your belts&mdash;<sup class="versenum">10&nbsp;</sup>no bag for the journey or extra shirt or sandals or a staff, for the worker is worth his keep.<sup class="versenum">11&nbsp;</sup>Whatever town or village you enter, search there for some worthy person and stay at their house until you leave.<sup class="versenum">12&nbsp;</sup>As you enter the home, give it your greeting.<sup class="versenum">13&nbsp;</sup>If the home is deserving, let your peace rest on it; if it is not, let your peace return to you.<sup class="versenum">14&nbsp;</sup>If anyone will not welcome you or listen to your words, leave that home or town and shake the dust off your feet.<sup class="versenum">15&nbsp;</sup>Truly I tell you, it will be more bearable for Sodom and Gomorrah on the day of judgment than for that town.</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;I am sending you out like sheep among wolves. Therefore be as shrewd as snakes and as innocent as doves.<sup class="versenum">17&nbsp;</sup>Be on your guard; you will be handed over to the local councils and be flogged in the synagogues.<sup class="versenum">18&nbsp;</sup>On my account you will be brought before governors and kings as witnesses to them and to the Gentiles.<sup class="versenum">19&nbsp;</sup>But when they arrest you, do not worry about what to say or how to say it. At that time you will be given what to say,<sup class="versenum">20&nbsp;</sup>for it will not be you speaking, but the Spirit of your Father speaking through you.</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;Brother will betray brother to death, and a father his child; children will rebel against their parents and have them put to death.<sup class="versenum">22&nbsp;</sup>You will be hated by everyone because of me, but the one who stands firm to the end will be saved.<sup class="versenum">23&nbsp;</sup>When you are persecuted in one place, flee to another. Truly I tell you, you will not finish going through the towns of Israel before the Son of Man comes.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/234-1.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 10:5-23&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li><span><span>What caught your attention or what did you like best? Why?</span></span></li>
	<li><span><span>What is new or has developed at this point in Jesus story?</span></span></li>
	<li><span><span>What do we learn about the humanity or divinity of Jesus from this passage?</span></span></li>
	<li><span><span>How can we live differently now that we know this story?</span></span></li>
</ul>

<p><span><span>Additional Questions:</span></span></p>

<ul class="up">
	<li><span><span>What are his followers learning?</span></span></li>
	<li><span><span>What is Jesus modeling to us about life and ministry or godly leadership?</span></span></li>
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


<h2 class="up">Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">After months of ministry training, the leaders are ready to be sent out on their own. Remember, they were appointed as leaders so that they might be with Jesus and that He might send them out to do the same things He had been doing. Jesus sent them out in teams of two. He gave them clear instructions on what to do, what to say, how long to stay, and how to respond when persecuted. He sent them out just like the Father had sent Him out into the world. They were to completely depend on God for everything that they would need. This short-term mission was within their own country, to people who were like them and spoke their language. They experienced being sent and doing ministry for the first time without Jesus being with them. What had been a single team of Jesus with the twelve apostles is now restructured to seven teams, six teams of two plus Jesus.</p>

</div>

<p class="up"><span class="for-enrichment">For Further Study: <a class="bible-ref external-link"  target="_blank" href="https://www.biblegateway.com/passage/?version=NIV&search=Mark%206:7-13"> Mark 6:7-13 </a></span></p>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<h2 class="forward">Preparing for the Mission</h2>

<ul class="forward">
	<li>Practice needed skills or previous topics to help prepare to minister to others:
	<ul>
		<li>Prayer, Care, Share</li>
		<li>Gospel</li>
		<li>Foundational Bible Studies.</li>
	</ul>
	</li>
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
        @keyup="this.addNote('note3Text')"
        id="note3Text"
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

			<td class="social" @click="share('lesson', 'Sending Leaders: ', '/content/M2/eng/multiply2/multiply234.html')">
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