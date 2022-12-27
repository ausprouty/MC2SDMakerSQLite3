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
                        <div class="chapter_number ltr"><h1>19.</h1></div>
                        <div class="chapter_title ltr"><h1>Fishing for Men Expedition Two</h1></div>
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

<p class="back"><span>Our vision is: <em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></span></p>

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
	<li><span>Ask the group to tell the story from last week.</span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch Mark 1:29-39 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Mark 1:29-39</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Heals Many</h3>

<p><sup class="versenum">29&nbsp;</sup>As soon as they left the synagogue, they went with James and John to the home of Simon and Andrew.<sup class="versenum">30&nbsp;</sup>Simon&rsquo;s mother-in-law was in bed with a fever, and they immediately told Jesus about her.<sup class="versenum">31&nbsp;</sup>So he went to her, took her hand and helped her up. The fever left her and she began to wait on them.</p>

<p><sup class="versenum">32&nbsp;</sup>That evening after sunset the people brought to Jesus all the sick and demon-possessed.<sup class="versenum">33&nbsp;</sup>The whole town gathered at the door,<sup class="versenum">34&nbsp;</sup>and Jesus healed many who had various diseases. He also drove out many demons, but he would not let the demons speak because they knew who he was.</p>

<h3>Jesus Prays in a Solitary Place</h3>

<p><sup class="versenum">35&nbsp;</sup>Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed.<sup class="versenum">36&nbsp;</sup>Simon and his companions went to look for him,<sup class="versenum">37&nbsp;</sup>and when they found him, they exclaimed: &ldquo;Everyone is looking for you!&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>Jesus replied, &ldquo;Let us go somewhere else&mdash;to the nearby villages&mdash;so I can preach there also. That is why I have come.&rdquo;<sup class="versenum">39&nbsp;</sup>So he traveled throughout Galilee, preaching in their synagogues and driving out demons.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/219.mp4" type="button" class="external-movie">
         Watch &nbsp;Mark 1:29-39&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li><span>What caught your attention or what did you like best? Why?</span></li>
	<li><span>What is new or has developed at this point in Jesus story?</span></li>
	<li><span>What do we learn about the humanity or divinity of Jesus from this passage?</span></li>
	<li><span>How can we live differently now that we know this story?</span></li>
</ul>

<p><span>Additional Questions:</span></p>

<ul class="up">
	<li><span>What are his followers learning?</span></li>
	<li><span>What is Jesus modeling to us about life and ministry or godly leadership?</span></li>
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

<p class="up">Jesus&rsquo; second outreach is at Peter&rsquo;s house. This is a home outreach that began in the evening after sunset. People from all over the region came to see the man who had cast out a demon in the synagogue. This was a spontaneous event that lasted several hours into the night. After a long night of ministry, Jesus gets up early and slips out of the house to be alone with the Father. He modeled the priority of being alone with the Father, to hear His voice, to find out the next steps in life and ministry, and to fellowship with Him. Even though everyone wanted Jesus to stay and have more successful ministry, He left out of obedience to the Father and the scope of His mission.</p>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">Further Study: <span class="popup-link" @click = "popUp('pop3')"> Luke 4:38-44</span>; 

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">38&nbsp;</sup>Jesus left the synagogue and went to the home of Simon. Now Simon&rsquo;s mother-in-law was suffering from a high fever, and they asked Jesus to help her.<sup class="versenum">39&nbsp;</sup>So he bent over her and rebuked the fever, and it left her. She got up at once and began to wait on them.</p>

<p><sup class="versenum">40&nbsp;</sup>At sunset, the people brought to Jesus all who had various kinds of sickness, and laying his hands on each one, he healed them.<sup class="versenum">41&nbsp;</sup>Moreover, demons came out of many people, shouting, &ldquo;You are the Son of God!&rdquo; But he rebuked them and would not allow them to speak, because they knew he was the Messiah.</p>

<p><sup class="versenum">42&nbsp;</sup>At daybreak, Jesus went out to a solitary place. The people were looking for him and when they came to where he was, they tried to keep him from leaving them.<sup class="versenum">43&nbsp;</sup>But he said, &ldquo;I must proclaim the good news of the kingdom of God to the other towns also, because that is why I was sent.&rdquo;<sup class="versenum">44&nbsp;</sup>And he kept on preaching in the synagogues of Judea.</p>
</div>
</div>
<!-- end bible --></div>

<span class="popup-link" @click = "popUp('pop4')"> Matthew 8:14-17</span>.

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">14&nbsp;</sup>When Jesus came into Peter&rsquo;s house, he saw Peter&rsquo;s mother-in-law lying in bed with a fever.<sup class="versenum">15&nbsp;</sup>He touched her hand and the fever left her, and she got up and began to wait on him.</p>

<p><sup class="versenum">16&nbsp;</sup>When evening came, many who were demon-possessed were brought to him, and he drove out the spirits with a word and healed all the sick.<sup class="versenum">17&nbsp;</sup>This was to fulfill what was spoken through the prophet Isaiah:</p>

<p>&ldquo;He took up our infirmities<br />
&nbsp;&nbsp;&nbsp;&nbsp;and bore our diseases.&rdquo;</p>
</div>
</div>
</div>
<!-- end bible --></div>

</span></li>
</ul>

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

			<td class="social" @click="share('lesson', 'Fishing for Men Expedition Two: ', '/content/M2/eng/multiply2/multiply219.html')">
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