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
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>The Harvest is Ripe</h1></div>
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

<p class="up">Read or watch John 4:1-42 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 4:1-42</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Talks With a Samaritan Woman</h3>

<p><sup class="versenum">1 </sup>Now Jesus learned that the Pharisees had heard that he was gaining and baptizing more disciples than John&mdash;<sup class="versenum">2&nbsp;</sup>although in fact it was not Jesus who baptized, but his disciples.<sup class="versenum">3&nbsp;</sup>So he left Judea and went back once more to Galilee.</p>

<p><sup class="versenum">4&nbsp;</sup>Now he had to go through Samaria.<sup class="versenum">5&nbsp;</sup>So he came to a town in Samaria called Sychar, near the plot of ground Jacob had given to his son Joseph.<sup class="versenum">6&nbsp;</sup>Jacob&rsquo;s well was there, and Jesus, tired as he was from the journey, sat down by the well. It was about noon.</p>

<p><sup class="versenum">7&nbsp;</sup>When a Samaritan woman came to draw water, Jesus said to her, &ldquo;Will you give me a drink?&rdquo;<sup class="versenum">8&nbsp;</sup>(His disciples had gone into the town to buy food.)</p>

<p><sup class="versenum">9&nbsp;</sup>The Samaritan woman said to him, &ldquo;You are a Jew and I am a Samaritan woman. How can you ask me for a drink?&rdquo; (For Jews do not associate with Samaritans.)</p>

<p><sup class="versenum">10&nbsp;</sup>Jesus answered her, &ldquo;If you knew the gift of God and who it is that asks you for a drink, you would have asked him and he would have given you living water.&rdquo;</p>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;Sir,&rdquo; the woman said, &ldquo;you have nothing to draw with and the well is deep. Where can you get this living water?<sup class="versenum">12&nbsp;</sup>Are you greater than our father Jacob, who gave us the well and drank from it himself, as did also his sons and his livestock?&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>Jesus answered, &ldquo;Everyone who drinks this water will be thirsty again,<sup class="versenum">14&nbsp;</sup>but whoever drinks the water I give them will never thirst. Indeed, the water I give them will become in them a spring of water welling up to eternal life.&rdquo;</p>

<p><sup class="versenum">15&nbsp;</sup>The woman said to him, &ldquo;Sir, give me this water so that I won&rsquo;t get thirsty and have to keep coming here to draw water.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>He told her, &ldquo;Go, call your husband and come back.&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;I have no husband,&rdquo; she replied.</p>

<p>Jesus said to her, &ldquo;You are right when you say you have no husband.<sup class="versenum">18&nbsp;</sup>The fact is, you have had five husbands, and the man you now have is not your husband. What you have just said is quite true.&rdquo;</p>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;Sir,&rdquo; the woman said, &ldquo;I can see that you are a prophet.<sup class="versenum">20&nbsp;</sup>Our ancestors worshiped on this mountain, but you Jews claim that the place where we must worship is in Jerusalem.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;Woman,&rdquo; Jesus replied, &ldquo;believe me, a time is coming when you will worship the Father neither on this mountain nor in Jerusalem.<sup class="versenum">22&nbsp;</sup>You Samaritans worship what you do not know; we worship what we do know, for salvation is from the Jews.<sup class="versenum">23&nbsp;</sup>Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks.<sup class="versenum">24&nbsp;</sup>God is spirit, and his worshipers must worship in the Spirit and in truth.&rdquo;</p>

<p><sup class="versenum">25&nbsp;</sup>The woman said, &ldquo;I know that Messiah&rdquo; (called Christ) &ldquo;is coming. When he comes, he will explain everything to us.&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>Then Jesus declared, &ldquo;I, the one speaking to you&mdash;I am he.&rdquo;</p>

<h3>The Disciples Rejoin Jesus</h3>

<p><sup class="versenum">27&nbsp;</sup>Just then his disciples returned and were surprised to find him talking with a woman. But no one asked, &ldquo;What do you want?&rdquo; or &ldquo;Why are you talking with her?&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>Then, leaving her water jar, the woman went back to the town and said to the people,<sup class="versenum">29&nbsp;</sup>&ldquo;Come, see a man who told me everything I ever did. Could this be the Messiah?&rdquo;<sup class="versenum">30&nbsp;</sup>They came out of the town and made their way toward him.</p>

<p><sup class="versenum">31&nbsp;</sup>Meanwhile his disciples urged him, &ldquo;Rabbi, eat something.&rdquo;</p>

<p><sup class="versenum">32&nbsp;</sup>But he said to them, &ldquo;I have food to eat that you know nothing about.&rdquo;</p>

<p><sup class="versenum">33&nbsp;</sup>Then his disciples said to each other, &ldquo;Could someone have brought him food?&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>&ldquo;My food,&rdquo; said Jesus, &ldquo;is to do the will of him who sent me and to finish his work.<sup class="versenum">35&nbsp;</sup>Don&rsquo;t you have a saying, &lsquo;It&rsquo;s still four months until harvest&rsquo;? I tell you, open your eyes and look at the fields! They are ripe for harvest.<sup class="versenum">36&nbsp;</sup>Even now the one who reaps draws a wage and harvests a crop for eternal life, so that the sower and the reaper may be glad together.<sup class="versenum">37&nbsp;</sup>Thus the saying &lsquo;One sows and another reaps&rsquo; is true.<sup class="versenum">38&nbsp;</sup>I sent you to reap what you have not worked for. Others have done the hard work, and you have reaped the benefits of their labor.&rdquo;</p>

<h3>Many Samaritans Believe</h3>

<p><sup class="versenum">39&nbsp;</sup>Many of the Samaritans from that town believed in him because of the woman&rsquo;s testimony, &ldquo;He told me everything I ever did.&rdquo;<sup class="versenum">40&nbsp;</sup>So when the Samaritans came to him, they urged him to stay with them, and he stayed two days.<sup class="versenum">41&nbsp;</sup>And because of his words many more became believers.</p>

<p><sup class="versenum">42&nbsp;</sup>They said to the woman, &ldquo;We no longer believe just because of what you said; now we have heard for ourselves, and we know that this man really is the Savior of the world.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>



</div>

<button id="MC2/eng/video/multiply2/213.mp4" type="button" class="external-movie">
         Watch &nbsp;John 4:1-42&nbsp;</button>
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

<p class="up">Jesus involved his disciples from the start in testifying about Him and baptizing people into the growing movement. It was their first ministry assignment. When Jesus learned that his growing movement had come to the attention of the religious leaders in Jerusalem, he withdrew with his disciples taking them through the non-Jewish area of Samaria. Jews had tremendous hatred and prejudice against Samaritan people. Jesus broke two cultural norms: he spoke to a Samaritan and to a woman! Both the Samaritan woman and the disciples were surprised by this. By example, Jesus was reshaping the mindset of His disciples. They could not see the God-prepared person and the harvest around them.</p>

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

			<td class="social" @click="share('lesson', 'The Harvest is Ripe: ', '/content/M2/eng/multiply2/multiply213.html')">
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