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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>Come and See; Follow Me</h1></div>
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
	<li class="up"><span>Ask the group to tell the story from last week.</span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch John 1:19-51 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 1:19-51</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>John the Baptist Denies Being the Messiah</h3>

<p><sup class="versenum">19&nbsp;</sup>Now this was John&rsquo;s testimony when the Jewish leaders in Jerusalem sent priests and Levites to ask him who he was.<sup class="versenum">20&nbsp;</sup>He did not fail to confess, but confessed freely, &ldquo;I am not the Messiah.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>They asked him, &ldquo;Then who are you? Are you Elijah?&rdquo;</p>

<p>He said, &ldquo;I am not.&rdquo;</p>

<p>&ldquo;Are you the Prophet?&rdquo;</p>

<p>He answered, &ldquo;No.&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Finally they said, &ldquo;Who are you? Give us an answer to take back to those who sent us. What do you say about yourself?&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>John replied in the words of Isaiah the prophet, &ldquo;I am the voice of one calling in the wilderness, &lsquo;Make straight the way for the Lord.&rsquo;&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>Now the Pharisees who had been sent<sup class="versenum">25&nbsp;</sup>questioned him, &ldquo;Why then do you baptize if you are not the Messiah, nor Elijah, nor the Prophet?&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;I baptize with water,&rdquo; John replied, &ldquo;but among you stands one you do not know.<sup class="versenum">27&nbsp;</sup>He is the one who comes after me, the straps of whose sandals I am not worthy to untie.&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>This all happened at Bethany on the other side of the Jordan, where John was baptizing.</p>

<h3>John Testifies About Jesus</h3>

<p><sup class="versenum">29&nbsp;</sup>The next day John saw Jesus coming toward him and said, &ldquo;Look, the Lamb of God, who takes away the sin of the world!<sup class="versenum">30&nbsp;</sup>This is the one I meant when I said, &lsquo;A man who comes after me has surpassed me because he was before me.&rsquo;<sup class="versenum">31&nbsp;</sup>I myself did not know him, but the reason I came baptizing with water was that he might be revealed to Israel.&rdquo;</p>

<p><sup class="versenum">32&nbsp;</sup>Then John gave this testimony: &ldquo;I saw the Spirit come down from heaven as a dove and remain on him.<sup class="versenum">33&nbsp;</sup>And I myself did not know him, but the one who sent me to baptize with water told me, &lsquo;The man on whom you see the Spirit come down and remain is the one who will baptize with the Holy Spirit.&rsquo;<sup class="versenum">34&nbsp;</sup>I have seen and I testify that this is God&rsquo;s Chosen One.&rdquo;</p>

<h3>John&rsquo;s Disciples Follow Jesus</h3>

<p><sup class="versenum">35&nbsp;</sup>The next day John was there again with two of his disciples.<sup class="versenum">36&nbsp;</sup>When he saw Jesus passing by, he said, &ldquo;Look, the Lamb of God!&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>When the two disciples heard him say this, they followed Jesus.<sup class="versenum">38&nbsp;</sup>Turning around, Jesus saw them following and asked, &ldquo;What do you want?&rdquo;</p>

<p>They said, &ldquo;Rabbi&rdquo; (which means &ldquo;Teacher&rdquo;), &ldquo;where are you staying?&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>&ldquo;Come,&rdquo; he replied, &ldquo;and you will see.&rdquo;</p>

<p>So they went and saw where he was staying, and they spent that day with him. It was about four in the afternoon.</p>

<p><sup class="versenum">40&nbsp;</sup>Andrew, Simon Peter&rsquo;s brother, was one of the two who heard what John had said and who had followed Jesus.<sup class="versenum">41&nbsp;</sup>The first thing Andrew did was to find his brother Simon and tell him, &ldquo;We have found the Messiah&rdquo; (that is, the Christ).<sup class="versenum">42&nbsp;</sup>And he brought him to Jesus.</p>

<p>Jesus looked at him and said, &ldquo;You are Simon son of John. You will be called Cephas&rdquo; (which, when translated, is Peter).</p>

<h3>Jesus Calls Philip and Nathanael</h3>

<p><sup class="versenum">43&nbsp;</sup>The next day Jesus decided to leave for Galilee. Finding Philip, he said to him, &ldquo;Follow me.&rdquo;</p>

<p><sup class="versenum">44&nbsp;</sup>Philip, like Andrew and Peter, was from the town of Bethsaida.<sup class="versenum">45&nbsp;</sup>Philip found Nathanael and told him, &ldquo;We have found the one Moses wrote about in the Law, and about whom the prophets also wrote&mdash;Jesus of Nazareth, the son of Joseph.&rdquo;</p>

<p><sup class="versenum">46&nbsp;</sup>&ldquo;Nazareth! Can anything good come from there?&rdquo; Nathanael asked.</p>

<p>&ldquo;Come and see,&rdquo; said Philip.</p>

<p><sup class="versenum">47&nbsp;</sup>When Jesus saw Nathanael approaching, he said of him, &ldquo;Here truly is an Israelite in whom there is no deceit.&rdquo;</p>

<p><sup class="versenum">48&nbsp;</sup>&ldquo;How do you know me?&rdquo; Nathanael asked.</p>

<p>Jesus answered, &ldquo;I saw you while you were still under the fig tree before Philip called you.&rdquo;</p>

<p><sup class="versenum">49&nbsp;</sup>Then Nathanael declared, &ldquo;Rabbi, you are the Son of God; you are the king of Israel.&rdquo;</p>

<p><sup class="versenum">50&nbsp;</sup>Jesus said, &ldquo;You believe because I told you I saw you under the fig tree. You will see greater things than that.&rdquo;<sup class="versenum">51&nbsp;</sup>He then added, &ldquo;Very truly I tell you, you will see &lsquo;heaven open, and the angels of God ascending and descending on&rsquo; the Son of Man.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/208.mp4" type="button" class="external-movie">
         Watch John 1:19-51</button>
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

<p class="up">After 40 days in the wilderness, Jesus starts his mission of making disciples. He begins to model to us a lifestyle of ministry using relational networks. Andrew, Peter, John, Philip and Nathanael all knew each other. He begins by calling people to &ldquo;come and see&rdquo; (come and investigate the facts about) who He is. He then opens their eyes to the truth that He is the promised Messiah. As they believe, He changes His message to &ldquo;follow me&rdquo;. Two calls, one to those who have not yet believed and one to those who believe.</p>

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

			<td class="social" @click="share('lesson', 'Come and See; Follow Me: ', '/content/M2/eng/multiply2/multiply208.html')">
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