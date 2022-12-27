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
                        <div class="chapter_number ltr"><h1>25.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus the Truth-Teller</h1></div>
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

<p class="up">&nbsp;</p>

<ul>
	<li class="up"><span>Ask the group to tell the story from last week.</span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch John 5:16-47 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 5:16-47</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Authority of the Son</h3>

<p><sup class="versenum">16&nbsp;</sup>So, because Jesus was doing these things on the Sabbath, the Jewish leaders began to persecute him.<sup class="versenum">17&nbsp;</sup>In his defense Jesus said to them, &ldquo;My Father is always at his work to this very day, and I too am working.&rdquo;<sup class="versenum">18&nbsp;</sup>For this reason they tried all the more to kill him; not only was he breaking the Sabbath, but he was even calling God his own Father, making himself equal with God.</p>

<p><sup class="versenum">19&nbsp;</sup>Jesus gave them this answer: &ldquo;Very truly I tell you, the Son can do nothing by himself; he can do only what he sees his Father doing, because whatever the Father does the Son also does.<sup class="versenum">20&nbsp;</sup>For the Father loves the Son and shows him all he does. Yes, and he will show him even greater works than these, so that you will be amazed.<sup class="versenum">21&nbsp;</sup>For just as the Father raises the dead and gives them life, even so the Son gives life to whom he is pleased to give it.<sup class="versenum">22&nbsp;</sup>Moreover, the Father judges no one, but has entrusted all judgment to the Son,<sup class="versenum">23&nbsp;</sup>that all may honor the Son just as they honor the Father. Whoever does not honor the Son does not honor the Father, who sent him.</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.<sup class="versenum">25&nbsp;</sup>Very truly I tell you, a time is coming and has now come when the dead will hear the voice of the Son of God and those who hear will live.<sup class="versenum">26&nbsp;</sup>For as the Father has life in himself, so he has granted the Son also to have life in himself.<sup class="versenum">27&nbsp;</sup>And he has given him authority to judge because he is the Son of Man.</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;Do not be amazed at this, for a time is coming when all who are in their graves will hear his voice<sup class="versenum">29&nbsp;</sup>and come out&mdash;those who have done what is good will rise to live, and those who have done what is evil will rise to be condemned.<sup class="versenum">30&nbsp;</sup>By myself I can do nothing; I judge only as I hear, and my judgment is just, for I seek not to please myself but him who sent me.</p>

<h3>Testimonies About Jesus</h3>

<p><sup class="versenum">31&nbsp;</sup>&ldquo;If I testify about myself, my testimony is not true.<sup class="versenum">32&nbsp;</sup>There is another who testifies in my favor, and I know that his testimony about me is true.</p>

<p><sup class="versenum">33&nbsp;</sup>&ldquo;You have sent to John and he has testified to the truth.<sup class="versenum">34&nbsp;</sup>Not that I accept human testimony; but I mention it that you may be saved.<sup class="versenum">35&nbsp;</sup>John was a lamp that burned and gave light, and you chose for a time to enjoy his light.</p>

<p><sup class="versenum">36&nbsp;</sup>&ldquo;I have testimony weightier than that of John. For the works that the Father has given me to finish&mdash;the very works that I am doing&mdash;testify that the Father has sent me.<sup class="versenum">37&nbsp;</sup>And the Father who sent me has himself testified concerning me. You have never heard his voice nor seen his form,<sup class="versenum">38&nbsp;</sup>nor does his word dwell in you, for you do not believe the one he sent.<sup class="versenum">39&nbsp;</sup>You study the Scriptures diligently because you think that in them you have eternal life. These are the very Scriptures that testify about me,<sup class="versenum">40&nbsp;</sup>yet you refuse to come to me to have life.</p>

<p><sup class="versenum">41&nbsp;</sup>&ldquo;I do not accept glory from human beings,<sup class="versenum">42&nbsp;</sup>but I know you. I know that you do not have the love of God in your hearts.<sup class="versenum">43&nbsp;</sup>I have come in my Father&rsquo;s name, and you do not accept me; but if someone else comes in his own name, you will accept him.<sup class="versenum">44&nbsp;</sup>How can you believe since you accept glory from one another but do not seek the glory that comes from the only God?</p>

<p><sup class="versenum">45&nbsp;</sup>&ldquo;But do not think I will accuse you before the Father. Your accuser is Moses, on whom your hopes are set.<sup class="versenum">46&nbsp;</sup>If you believed Moses, you would believe me, for he wrote about me.<sup class="versenum">47&nbsp;</sup>But since you do not believe what he wrote, how are you going to believe what I say?&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/225.mp4" type="button" class="external-movie">
         Watch &nbsp;John 5:16-47&nbsp;</button>
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

<p class="up">Jesus was claiming that God was His real Father and that He and God were equals. Jesus refers to five witnesses to support His claim:</p>

<ol>
	<li class="up">Jesus own claim (v19-31).</li>
	<li class="up">The witness of John the Baptist (v33-35).</li>
	<li class="up">Jesus Works (v36).</li>
	<li class="up">The Father&rsquo;s voice (v37-38) at his Baptism.</li>
	<li class="up">The Old Testament Scriptures (v39-47).</li>
</ol>
&nbsp;

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

			<td class="social" @click="share('lesson', 'Jesus the Truth-Teller: ', '/content/M2/eng/multiply2/multiply225.html')">
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