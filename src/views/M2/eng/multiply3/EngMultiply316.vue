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
                        <div class="chapter_number ltr"><h1>16.</h1></div>
                        <div class="chapter_title ltr"><h1>Saul Meets Jesus</h1></div>
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
	<li class="up">Read or watch Acts 9:1-19 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 9:1-19</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Saul&rsquo;s Conversion</h3>

<p><sup class="versenum">1 </sup>Meanwhile, Saul was still breathing out murderous threats against the Lord&rsquo;s disciples. He went to the high priest<sup class="versenum">2&nbsp;</sup>and asked him for letters to the synagogues in Damascus, so that if he found any there who belonged to the Way, whether men or women, he might take them as prisoners to Jerusalem.<sup class="versenum">3&nbsp;</sup>As he neared Damascus on his journey, suddenly a light from heaven flashed around him.<sup class="versenum">4&nbsp;</sup>He fell to the ground and heard a voice say to him, &ldquo;Saul, Saul, why do you persecute me?&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;Who are you, Lord?&rdquo; Saul asked.</p>

<p>&ldquo;I am Jesus, whom you are persecuting,&rdquo; he replied.<sup class="versenum">6&nbsp;</sup>&ldquo;Now get up and go into the city, and you will be told what you must do.&rdquo;</p>

<p><sup class="versenum">7&nbsp;</sup>The men traveling with Saul stood there speechless; they heard the sound but did not see anyone.<sup class="versenum">8&nbsp;</sup>Saul got up from the ground, but when he opened his eyes he could see nothing. So they led him by the hand into Damascus.<sup class="versenum">9&nbsp;</sup>For three days he was blind, and did not eat or drink anything.</p>

<p><sup class="versenum">10&nbsp;</sup>In Damascus there was a disciple named Ananias. The Lord called to him in a vision, &ldquo;Ananias!&rdquo;</p>

<p>&ldquo;Yes, Lord,&rdquo; he answered.</p>

<p><sup class="versenum">11&nbsp;</sup>The Lord told him, &ldquo;Go to the house of Judas on Straight Street and ask for a man from Tarsus named Saul, for he is praying.<sup class="versenum">12&nbsp;</sup>In a vision he has seen a man named Ananias come and place his hands on him to restore his sight.&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>&ldquo;Lord,&rdquo; Ananias answered, &ldquo;I have heard many reports about this man and all the harm he has done to your holy people in Jerusalem.<sup class="versenum">14&nbsp;</sup>And he has come here with authority from the chief priests to arrest all who call on your name.&rdquo;</p>

<p><sup class="versenum">15&nbsp;</sup>But the Lord said to Ananias, &ldquo;Go! This man is my chosen instrument to proclaim my name to the Gentiles and their kings and to the people of Israel.<sup class="versenum">16&nbsp;</sup>I will show him how much he must suffer for my name.&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>Then Ananias went to the house and entered it. Placing his hands on Saul, he said, &ldquo;Brother Saul, the Lord&mdash;Jesus, who appeared to you on the road as you were coming here&mdash;has sent me so that you may see again and be filled with the Holy Spirit.&rdquo;<sup class="versenum">18&nbsp;</sup>Immediately, something like scales fell from Saul&rsquo;s eyes, and he could see again. He got up and was baptized,<sup class="versenum">19&nbsp;</sup>and after taking some food, he regained his strength.</p>

<h3>Saul in Damascus and Jerusalem</h3>

<p>Saul spent several days with the disciples in Damascus.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/316.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 9:1-19&nbsp;</button>
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
<p class="up">Philip was sharing the gospel, making disciples and planting churches. At the same time, Saul passionately persecuted the believers who had left Jerusalem. By hunting them down in every city, He thought that by doing so he was serving God. Saul was even willing to pursue them to the foreign city of Damascus, 240 km away from Jerusalem, about a one-week journey. Along Saul&rsquo;s way to Damascus, Jesus took the initiative to reveal himself to Saul. Saul went from being a bold, angry conqueror who hated Jesus to being a blind, humbled person who needed to be led by others. Jesus so closely identifies with His children that He considers persecution of believers to be persecution against Himself. Saul realized that even though he was passionate about God, he was wrong in his beliefs. Jesus also appeared to Ananias. Even though Ananias had doubts about approaching Saul, he took a step of faith to obey Jesus. The Lord used Ananias to heal Saul and then baptize him immediately. Here we see a disciple without a leadership position immediately baptizing a new believer. Read<span class="popup-link" @click = "popUp('pop1')">  Matthew 28:18-20</span>.&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">18&nbsp;</sup>Then Jesus came to them and said, &ldquo;All authority in heaven and on earth has been given to me.<sup class="versenum">19&nbsp;</sup>Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,<sup class="versenum">20&nbsp;</sup>and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
&nbsp;

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

			<td class="social" @click="share('lesson', 'Saul Meets Jesus: ', '/content/M2/eng/multiply3/multiply316.html')">
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