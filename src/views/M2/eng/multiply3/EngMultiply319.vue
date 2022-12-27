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
                        <div class="chapter_number ltr"><h1>19.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus Prepares Hearts</h1></div>
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
	<li class="up">Read or watch Acts 10:1-33 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 10:1-33</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Cornelius Calls for Peter</h3>

<p><sup class="versenum">1 </sup>At Caesarea there was a man named Cornelius, a centurion in what was known as the Italian Regiment.<sup class="versenum">2&nbsp;</sup>He and all his family were devout and God-fearing; he gave generously to those in need and prayed to God regularly.<sup class="versenum">3&nbsp;</sup>One day at about three in the afternoon he had a vision. He distinctly saw an angel of God, who came to him and said, &ldquo;Cornelius!&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Cornelius stared at him in fear. &ldquo;What is it, Lord?&rdquo; he asked.</p>

<p>The angel answered, &ldquo;Your prayers and gifts to the poor have come up as a memorial offering before God.<sup class="versenum">5&nbsp;</sup>Now send men to Joppa to bring back a man named Simon who is called Peter.<sup class="versenum">6&nbsp;</sup>He is staying with Simon the tanner, whose house is by the sea.&rdquo;</p>

<p><sup class="versenum">7&nbsp;</sup>When the angel who spoke to him had gone, Cornelius called two of his servants and a devout soldier who was one of his attendants.<sup class="versenum">8&nbsp;</sup>He told them everything that had happened and sent them to Joppa.</p>

<h3>Peter&rsquo;s Vision</h3>

<p><sup class="versenum">9&nbsp;</sup>About noon the following day as they were on their journey and approaching the city, Peter went up on the roof to pray.<sup class="versenum">10&nbsp;</sup>He became hungry and wanted something to eat, and while the meal was being prepared, he fell into a trance.<sup class="versenum">11&nbsp;</sup>He saw heaven opened and something like a large sheet being let down to earth by its four corners.<sup class="versenum">12&nbsp;</sup>It contained all kinds of four-footed animals, as well as reptiles and birds.<sup class="versenum">13&nbsp;</sup>Then a voice told him, &ldquo;Get up, Peter. Kill and eat.&rdquo;</p>

<p><sup class="versenum">14&nbsp;</sup>&ldquo;Surely not, Lord!&rdquo; Peter replied. &ldquo;I have never eaten anything impure or unclean.&rdquo;</p>

<p><sup class="versenum">15&nbsp;</sup>The voice spoke to him a second time, &ldquo;Do not call anything impure that God has made clean.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>This happened three times, and immediately the sheet was taken back to heaven.</p>

<p><sup class="versenum">17&nbsp;</sup>While Peter was wondering about the meaning of the vision, the men sent by Cornelius found out where Simon&rsquo;s house was and stopped at the gate.<sup class="versenum">18&nbsp;</sup>They called out, asking if Simon who was known as Peter was staying there.</p>

<p><sup class="versenum">19&nbsp;</sup>While Peter was still thinking about the vision, the Spirit said to him, &ldquo;Simon, three men are looking for you.<sup class="versenum">20&nbsp;</sup>So get up and go downstairs. Do not hesitate to go with them, for I have sent them.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>Peter went down and said to the men, &ldquo;I&rsquo;m the one you&rsquo;re looking for. Why have you come?&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>The men replied, &ldquo;We have come from Cornelius the centurion. He is a righteous and God-fearing man, who is respected by all the Jewish people. A holy angel told him to ask you to come to his house so that he could hear what you have to say.&rdquo;<sup class="versenum">23&nbsp;</sup>Then Peter invited the men into the house to be his guests.</p>

<h3>Peter at Cornelius&rsquo;s House</h3>

<p>The next day Peter started out with them, and some of the believers from Joppa went along.<sup class="versenum">24&nbsp;</sup>The following day he arrived in Caesarea. Cornelius was expecting them and had called together his relatives and close friends.<sup class="versenum">25&nbsp;</sup>As Peter entered the house, Cornelius met him and fell at his feet in reverence.<sup class="versenum">26&nbsp;</sup>But Peter made him get up. &ldquo;Stand up,&rdquo; he said, &ldquo;I am only a man myself.&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>While talking with him, Peter went inside and found a large gathering of people.<sup class="versenum">28&nbsp;</sup>He said to them: &ldquo;You are well aware that it is against our law for a Jew to associate with or visit a Gentile. But God has shown me that I should not call anyone impure or unclean.<sup class="versenum">29&nbsp;</sup>So when I was sent for, I came without raising any objection. May I ask why you sent for me?&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>Cornelius answered: &ldquo;Three days ago I was in my house praying at this hour, at three in the afternoon. Suddenly a man in shining clothes stood before me<sup class="versenum">31&nbsp;</sup>and said, &lsquo;Cornelius, God has heard your prayer and remembered your gifts to the poor.<sup class="versenum">32&nbsp;</sup>Send to Joppa for Simon who is called Peter. He is a guest in the home of Simon the tanner, who lives by the sea.&rsquo;<sup class="versenum">33&nbsp;</sup>So I sent for you immediately, and it was good of you to come. Now we are all here in the presence of God to listen to everything the Lord has commanded you to tell us.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/319.mp4" type="button" class="external-movie">
         Watch Acts 10:1-33</button>
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

<p class="up">It was a 2-day journey from Joppa to Caesarea. Through a series of visions, Jesus helps Peter and the Jewish believers with him to cross a major cultural barrier in the Jewish church. A good practicing Jew was forbidden to enter the home of a Gentile. Yet Jesus sends Peter to the home of Cornelius. Not only was Cornelius a Gentile, but a powerful Roman Centurion - a military commander in charge of about 80-100 Italian soldiers. Cornelius is a great example of a person of peace. He is someone unexpected, whose heart is prepared by Jesus, and who gathers others in his network of relationships to hear about Jesus with him. This story shows how the Lord prepares the heart of both the messenger and the person of peace.</p>

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

			<td class="social" @click="share('lesson', 'Jesus Prepares Hearts: ', '/content/M2/eng/multiply3/multiply319.html')">
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