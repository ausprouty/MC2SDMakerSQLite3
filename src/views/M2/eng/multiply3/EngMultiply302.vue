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
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>Matthias Chosen to Replace Judas</h1></div>
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

<p><em>Encourage loving accountability to obey Jesus</em></p>

<ul class="back">
	<li>Ask, &ldquo;What happened as you trusted God with your goals and I will statements?&rdquo;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back"><em>Cast vision for who they can become in Christ or what God can do through them by:</em></p>

<ul>
	<li class="back">a scripture that reminds them of the Father&rsquo;s Heart and of the end vision.</li>
	<li class="back">reflecting on the changes in their life since they started following Christ</li>
	<li class="back">reminding them of what God wants to do through them</li>
</ul>

<p class="back">Our Vision:&nbsp; <em>&ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></p>

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
	<li class="up">Read or watch Acts 1:12-26 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 1:12-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Matthias Chosen to Replace Judas</h3>

<p><sup class="versenum">12&nbsp;</sup>Then the apostles returned to Jerusalem from the hill called the Mount of Olives, a Sabbath day&rsquo;s walk from the city.<sup class="versenum">13&nbsp;</sup>When they arrived, they went upstairs to the room where they were staying. Those present were Peter, John, James and Andrew; Philip and Thomas, Bartholomew and Matthew; James son of Alphaeus and Simon the Zealot, and Judas son of James.<sup class="versenum">14&nbsp;</sup>They all joined together constantly in prayer, along with the women and Mary the mother of Jesus, and with his brothers.</p>

<p><sup class="versenum">15&nbsp;</sup>In those days Peter stood up among the believers (a group numbering about a hundred and twenty)<sup class="versenum">16&nbsp;</sup>and said, &ldquo;Brothers and sisters, the Scripture had to be fulfilled in which the Holy Spirit spoke long ago through David concerning Judas, who served as guide for those who arrested Jesus.<sup class="versenum">17&nbsp;</sup>He was one of our number and shared in our ministry.&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>(With the payment he received for his wickedness, Judas bought a field; there he fell headlong, his body burst open and all his intestines spilled out.<sup class="versenum">19&nbsp;</sup>Everyone in Jerusalem heard about this, so they called that field in their language Akeldama, that is, Field of Blood.)</p>

<p><sup class="versenum">20&nbsp;</sup>&ldquo;For,&rdquo; said Peter, &ldquo;it is written in the Book of Psalms:</p>

<p>&ldquo;&lsquo;May his place be deserted;<br />
&nbsp;&nbsp;&nbsp;&nbsp;let there be no one to dwell in it,&rsquo;</p>

<p>and,</p>

<p>&ldquo;&lsquo;May another take his place of leadership.&rsquo;</p>

<p><sup class="versenum">21&nbsp;</sup>Therefore it is necessary to choose one of the men who have been with us the whole time the Lord Jesus was living among us,<sup class="versenum">22&nbsp;</sup>beginning from John&rsquo;s baptism to the time when Jesus was taken up from us. For one of these must become a witness with us of his resurrection.&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>So they nominated two men: Joseph called Barsabbas (also known as Justus) and Matthias.<sup class="versenum">24&nbsp;</sup>Then they prayed, &ldquo;Lord, you know everyone&rsquo;s heart. Show us which of these two you have chosen<sup class="versenum">25&nbsp;</sup>to take over this apostolic ministry, which Judas left to go where he belongs.&rdquo;<sup class="versenum">26&nbsp;</sup>Then they cast lots, and the lot fell to Matthias; so he was added to the eleven apostles.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


    <button id="MC2/eng/video/multiply3/302.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 1:12-26&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in the story?</li>
	<li>What is being modeled about a Spirit-dependent life, making disciples or leadership?</li>
	<li>How can we live differently now that we know this story?</li>
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

<p class="up">There were only 120 disciples left together in Jerusalem at this time. Jesus&rsquo; mother, brothers and sisters were now included in the list of believers. This story shows that although their names were not listed in the Gospels, there were many others who followed Jesus from the time that He was baptized until He returned to heaven. Jesus selected the initial twelve Apostles from among many possible candidates. The remaining eleven determined that the main criteria of selecting a replacement was the amount of time they had witnessed Jesus&rsquo; life and ministry. This is the last time we see the Old Testament way of casting lots being used to make decisions. Jesus never used the casting of lots to discern the Father&rsquo;s will because He listened to and obeyed the Spirit. After the Spirit is sent, discerning God&rsquo;s will is done through submitting to and keeping in step with the Spirit.</p>

</div>

<p class="up"><em>Practice giving and communion after the summary or in the Preparing for Mission section</em></p>

<p class="up">&nbsp;</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><p class="forward">+ Preparing for the Mission</p></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>Practice needed skills or previous topics to help prepare to minister to others:</p>

<ul>
	<li>Prayer, Care, Share</li>
	<li>Gospel</li>
	<li>Foundational Bible Studies</li>
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

			<td class="social" @click="share('lesson', 'Matthias Chosen to Replace Judas: ', '/content/M2/eng/multiply3/multiply302.html')">
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