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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>Pursuing the Heart of Jesus with Integrity</h1></div>
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
	<li class="up">Read or watch Acts 4:32-5:11 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 4:32-5:11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Believers Share Their Possessions</h3>

<p><sup class="versenum">32&nbsp;</sup>All the believers were one in heart and mind. No one claimed that any of their possessions was their own, but they shared everything they had.<sup class="versenum">33&nbsp;</sup>With great power the apostles continued to testify to the resurrection of the Lord Jesus. And God&rsquo;s grace was so powerfully at work in them all<sup class="versenum">34&nbsp;</sup>that there were no needy persons among them. For from time to time those who owned land or houses sold them, brought the money from the sales<sup class="versenum">35&nbsp;</sup>and put it at the apostles&rsquo; feet, and it was distributed to anyone who had need.</p>

<p><sup class="versenum">36&nbsp;</sup>Joseph, a Levite from Cyprus, whom the apostles called Barnabas (which means &ldquo;son of encouragement&rdquo;),<sup class="versenum">37&nbsp;</sup>sold a field he owned and brought the money and put it at the apostles&rsquo; feet.</p>

<h3>Ananias and Sapphira</h3>

<p><sup class="versenum">5:1 </sup>Now a man named Ananias, together with his wife Sapphira, also sold a piece of property.<sup class="versenum">2&nbsp;</sup>With his wife&rsquo;s full knowledge he kept back part of the money for himself, but brought the rest and put it at the apostles&rsquo; feet.</p>

<p><sup class="versenum">3&nbsp;</sup>Then Peter said, &ldquo;Ananias, how is it that Satan has so filled your heart that you have lied to the Holy Spirit and have kept for yourself some of the money you received for the land?<sup class="versenum">4&nbsp;</sup>Didn&rsquo;t it belong to you before it was sold? And after it was sold, wasn&rsquo;t the money at your disposal? What made you think of doing such a thing? You have not lied just to human beings but to God.&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>When Ananias heard this, he fell down and died. And great fear seized all who heard what had happened.<sup class="versenum">6&nbsp;</sup>Then some young men came forward, wrapped up his body, and carried him out and buried him.</p>

<p><sup class="versenum">7&nbsp;</sup>About three hours later his wife came in, not knowing what had happened.<sup class="versenum">8&nbsp;</sup>Peter asked her, &ldquo;Tell me, is this the price you and Ananias got for the land?&rdquo;</p>

<p>&ldquo;Yes,&rdquo; she said, &ldquo;that is the price.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>Peter said to her, &ldquo;How could you conspire to test the Spirit of the Lord? Listen! The feet of the men who buried your husband are at the door, and they will carry you out also.&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>At that moment she fell down at his feet and died. Then the young men came in and, finding her dead, carried her out and buried her beside her husband.<sup class="versenum">11&nbsp;</sup>Great fear seized the whole church and all who heard about these events.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/308.mp4" type="button" class="external-movie">
         Watch Acts 4:32-5:11</button>
    <div class="collapsed"></div>



<p>&nbsp;</p>

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

<p class="up">The believers had a loving community. They boldly shared their faith and made sacrifices to care for one another. We see how one man from Cyprus, Joseph called Barnabas, generously sold some land he owned to help meet the needs of others in the church. But we also see how one couple tried to deceive the church. Their motive was not to help the poor, but to increase their reputation as being generous and spiritual among the believers. The Lord intervened and the hypocrisy of Ananias and Sapphira was not allowed to spread. We learn that lying to the Holy Spirit is the same as lying to God, which makes the Holy Spirit equal with God (<span class="popup-link" @click = "popUp('pop1')"> Acts 5:3-4</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">3&nbsp;</sup>Then Peter said, &ldquo;Ananias, how is it that Satan has so filled your heart that you have lied to the Holy Spirit and have kept for yourself some of the money you received for the land?<sup class="versenum">4&nbsp;</sup>Didn&rsquo;t it belong to you before it was sold? And after it was sold, wasn&rsquo;t the money at your disposal? What made you think of doing such a thing? You have not lied just to human beings but to God.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
Even though we have the privilege of a personal relationship with a holy God through Jesus, this unique incident of God&rsquo;s judgement reminded the believers to have proper respect for the Lord. As we pursue the Lord&rsquo;s heart for the needs of others, we need to do it with integrity.

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

			<td class="social" @click="share('lesson', 'Pursuing the Heart of Jesus with Integrity: ', '/content/M2/eng/multiply3/multiply308.html')">
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