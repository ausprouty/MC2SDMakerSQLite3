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
                        <div class="chapter_number ltr"><h1>51.</h1></div>
                        <div class="chapter_title ltr"><h1>Shepherding Leadership</h1></div>
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

<p class="up">Read or watch John 21:1-25 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 21:1-25</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus and the Miraculous Catch of Fish</h3>

<p><sup class="versenum">1 </sup>Afterward Jesus appeared again to his disciples, by the Sea of Galilee. It happened this way:<sup class="versenum">2&nbsp;</sup>Simon Peter, Thomas (also known as Didymus), Nathanael from Cana in Galilee, the sons of Zebedee, and two other disciples were together.<sup class="versenum">3&nbsp;</sup>&ldquo;I&rsquo;m going out to fish,&rdquo; Simon Peter told them, and they said, &ldquo;We&rsquo;ll go with you.&rdquo; So they went out and got into the boat, but that night they caught nothing.</p>

<p><sup class="versenum">4&nbsp;</sup>Early in the morning, Jesus stood on the shore, but the disciples did not realize that it was Jesus.</p>

<p><sup class="versenum">5&nbsp;</sup>He called out to them, &ldquo;Friends, haven&rsquo;t you any fish?&rdquo;</p>

<p>&ldquo;No,&rdquo; they answered.</p>

<p><sup class="versenum">6&nbsp;</sup>He said, &ldquo;Throw your net on the right side of the boat and you will find some.&rdquo; When they did, they were unable to haul the net in because of the large number of fish.</p>

<p><sup class="versenum">7&nbsp;</sup>Then the disciple whom Jesus loved said to Peter, &ldquo;It is the Lord!&rdquo; As soon as Simon Peter heard him say, &ldquo;It is the Lord,&rdquo; he wrapped his outer garment around him (for he had taken it off) and jumped into the water.<sup class="versenum">8&nbsp;</sup>The other disciples followed in the boat, towing the net full of fish, for they were not far from shore, about a hundred yards.<sup class="versenum">9&nbsp;</sup>When they landed, they saw a fire of burning coals there with fish on it, and some bread.</p>

<p><sup class="versenum">10&nbsp;</sup>Jesus said to them, &ldquo;Bring some of the fish you have just caught.&rdquo;<sup class="versenum">11&nbsp;</sup>So Simon Peter climbed back into the boat and dragged the net ashore. It was full of large fish, 153, but even with so many the net was not torn.<sup class="versenum">12&nbsp;</sup>Jesus said to them, &ldquo;Come and have breakfast.&rdquo; None of the disciples dared ask him, &ldquo;Who are you?&rdquo; They knew it was the Lord.<sup class="versenum">13&nbsp;</sup>Jesus came, took the bread and gave it to them, and did the same with the fish.<sup class="versenum">14&nbsp;</sup>This was now the third time Jesus appeared to his disciples after he was raised from the dead.</p>

<h3>Jesus Reinstates Peter</h3>

<p><sup class="versenum">15&nbsp;</sup>When they had finished eating, Jesus said to Simon Peter, &ldquo;Simon son of John, do you love me more than these?&rdquo;</p>

<p>&ldquo;Yes, Lord,&rdquo; he said, &ldquo;you know that I love you.&rdquo;</p>

<p>Jesus said, &ldquo;Feed my lambs.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>Again Jesus said, &ldquo;Simon son of John, do you love me?&rdquo;</p>

<p>He answered, &ldquo;Yes, Lord, you know that I love you.&rdquo;</p>

<p>Jesus said, &ldquo;Take care of my sheep.&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>The third time he said to him, &ldquo;Simon son of John, do you love me?&rdquo;</p>

<p>Peter was hurt because Jesus asked him the third time, &ldquo;Do you love me?&rdquo; He said, &ldquo;Lord, you know all things; you know that I love you.&rdquo;</p>

<p>Jesus said, &ldquo;Feed my sheep.<sup class="versenum">18&nbsp;</sup>Very truly I tell you, when you were younger you dressed yourself and went where you wanted; but when you are old you will stretch out your hands, and someone else will dress you and lead you where you do not want to go.&rdquo;<sup class="versenum">19&nbsp;</sup>Jesus said this to indicate the kind of death by which Peter would glorify God. Then he said to him, &ldquo;Follow me!&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>Peter turned and saw that the disciple whom Jesus loved was following them. (This was the one who had leaned back against Jesus at the supper and had said, &ldquo;Lord, who is going to betray you?&rdquo;)<sup class="versenum">21&nbsp;</sup>When Peter saw him, he asked, &ldquo;Lord, what about him?&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Jesus answered, &ldquo;If I want him to remain alive until I return, what is that to you? You must follow me.&rdquo;<sup class="versenum">23&nbsp;</sup>Because of this, the rumor spread among the believers that this disciple would not die. But Jesus did not say that he would not die; he only said, &ldquo;If I want him to remain alive until I return, what is that to you?&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>This is the disciple who testifies to these things and who wrote them down. We know that his testimony is true.</p>

<p><sup class="versenum">25&nbsp;</sup>Jesus did many other things as well. If every one of them were written down, I suppose that even the whole world would not have room for the books that would be written.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/251.mp4" type="button" class="external-movie">
         Watch &nbsp;John 21:1-25&nbsp;</button>
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

<p class="up">After rising from the dead, Jesus appears to His disciples on several occasions. As many as 500 people see Him at one time (1 Corinthians 15:6). On this occasion, in Galilee, He visits His leaders who have returned to their old life of fishing. When they experience the miraculous provision of fish like they did when Jesus called them a few years before, they recognize that it is Jesus. Peter is excited to see the Lord again. Jesus talks with him about his heart commitment. He asks if Peter loves Him more than his former way of life. If so, then Peter should care about the things that Jesus cares about. He should shepherd others just like Jesus. Once again Peter is restored and called to follow Jesus and continue the work of fishing for and caring for men. This is the last time we see Peter going back to fishing.</p>

</div>

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

			<td class="social" @click="share('lesson', 'Shepherding Leadership: ', '/content/M2/eng/multiply2/multiply251.html')">
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