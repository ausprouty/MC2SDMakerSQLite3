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
                        <div class="chapter_number ltr"><h1>21.</h1></div>
                        <div class="chapter_title ltr"><h1>Peter Explains His Actions</h1></div>
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
	<li class="up">Read or watch Acts 11:1-18 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 11:1-18</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Peter Explains His Actions</h3>

<p><sup class="versenum">1 </sup>The apostles and the believers throughout Judea heard that the Gentiles also had received the word of God.<sup class="versenum">2&nbsp;</sup>So when Peter went up to Jerusalem, the circumcised believers criticized him<sup class="versenum">3&nbsp;</sup>and said, &ldquo;You went into the house of uncircumcised men and ate with them.&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Starting from the beginning, Peter told them the whole story:<sup class="versenum">5&nbsp;</sup>&ldquo;I was in the city of Joppa praying, and in a trance I saw a vision. I saw something like a large sheet being let down from heaven by its four corners, and it came down to where I was.<sup class="versenum">6&nbsp;</sup>I looked into it and saw four-footed animals of the earth, wild beasts, reptiles and birds.<sup class="versenum">7&nbsp;</sup>Then I heard a voice telling me, &lsquo;Get up, Peter. Kill and eat.&rsquo;</p>

<p><sup class="versenum">8&nbsp;</sup>&ldquo;I replied, &lsquo;Surely not, Lord! Nothing impure or unclean has ever entered my mouth.&rsquo;</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;The voice spoke from heaven a second time, &lsquo;Do not call anything impure that God has made clean.&rsquo;<sup class="versenum">10&nbsp;</sup>This happened three times, and then it was all pulled up to heaven again.</p>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;Right then three men who had been sent to me from Caesarea stopped at the house where I was staying.<sup class="versenum">12&nbsp;</sup>The Spirit told me to have no hesitation about going with them. These six brothers also went with me, and we entered the man&rsquo;s house.<sup class="versenum">13&nbsp;</sup>He told us how he had seen an angel appear in his house and say, &lsquo;Send to Joppa for Simon who is called Peter.<sup class="versenum">14&nbsp;</sup>He will bring you a message through which you and all your household will be saved.&rsquo;</p>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;As I began to speak, the Holy Spirit came on them as he had come on us at the beginning.<sup class="versenum">16&nbsp;</sup>Then I remembered what the Lord had said: &lsquo;John baptized with water, but you will be baptized with the Holy Spirit.&rsquo;<sup class="versenum">17&nbsp;</sup>So if God gave them the same gift he gave us who believed in the Lord Jesus Christ, who was I to think that I could stand in God&rsquo;s way?&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>When they heard this, they had no further objections and praised God, saying, &ldquo;So then, even to Gentiles God has granted repentance that leads to life.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/321.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 11:1-18&nbsp;</button>
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
<p class="up">News spread quickly back to Jerusalem of the new work among the Gentiles. Peter returns home from his ministry tour (<span class="popup-link" @click = "popUp('pop1')"> Acts 8:32</span>)&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">32&nbsp;</sup>This is the passage of Scripture the eunuch was reading:</p>

<p>&ldquo;He was led like a sheep to the slaughter,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and as a lamb before its shearer is silent,<br />
&nbsp;&nbsp;&nbsp;&nbsp;so he did not open his mouth.</p>
</div>
</div>
</div>
<!-- end bible --></div>
&nbsp;and is confronted by Jewish believers for breaking the Jewish Laws about entering a Gentile&rsquo;s home, eating with them, and even staying with them. Some believers still did not understand the implications of the gospel mission. They doubted the Lord&rsquo;s heart for the non-Jewish peoples. Jesus used this event to begin a process of breaking down their focus on their own culture that was a barrier to the global mission of making disciples of all peoples. It was the combination of the vision Peter received, the Lord&rsquo;s teaching, and evidence of the Holy Spirit&#39;s presence that proved God had indeed fully accepted the Gentiles. After hearing this, the Jewish believers finally praised God for providing salvation to the Gentiles. Their criticism and concern turned to worship.

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

			<td class="social" @click="share('lesson', 'Peter Explains His Actions: ', '/content/M2/eng/multiply3/multiply321.html')">
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