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
                        <div class="chapter_number ltr"><h1>35.</h1></div>
                        <div class="chapter_title ltr"><h1>Leading while Grieving</h1></div>
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

<p class="up">Read or watch Matthew 14:1-14 and Mark 6:30 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Matthew 14:1-14</button><div class="collapsed" id ="Text0">

<h3>John the Baptist Beheaded</h3>

<p><sup class="versenum">1 </sup>At that time Herod the tetrarch heard the reports about Jesus,<sup class="versenum">2&nbsp;</sup>and he said to his attendants, &ldquo;This is John the Baptist; he has risen from the dead! That is why miraculous powers are at work in him.&rdquo;</p>

<p><sup class="versenum">3&nbsp;</sup>Now Herod had arrested John and bound him and put him in prison because of Herodias, his brother Philip&rsquo;s wife,<sup class="versenum">4&nbsp;</sup>for John had been saying to him: &ldquo;It is not lawful for you to have her.&rdquo;<sup class="versenum">5&nbsp;</sup>Herod wanted to kill John, but he was afraid of the people, because they considered John a prophet.</p>

<p><sup class="versenum">6&nbsp;</sup>On Herod&rsquo;s birthday the daughter of Herodias danced for the guests and pleased Herod so much<sup class="versenum">7&nbsp;</sup>that he promised with an oath to give her whatever she asked.<sup class="versenum">8&nbsp;</sup>Prompted by her mother, she said, &ldquo;Give me here on a platter the head of John the Baptist.&rdquo;<sup class="versenum">9&nbsp;</sup>The king was distressed, but because of his oaths and his dinner guests, he ordered that her request be granted<sup class="versenum">10&nbsp;</sup>and had John beheaded in the prison.<sup class="versenum">11&nbsp;</sup>His head was brought in on a platter and given to the girl, who carried it to her mother.<sup class="versenum">12&nbsp;</sup>John&rsquo;s disciples came and took his body and buried it. Then they went and told Jesus.</p>

<h3>Jesus Feeds the Five Thousand</h3>

<p><sup class="versenum">13&nbsp;</sup>When Jesus heard what had happened, he withdrew by boat privately to a solitary place. Hearing of this, the crowds followed him on foot from the towns.<sup class="versenum">14&nbsp;</sup>When Jesus landed and saw a large crowd, he had compassion on them and healed their sick.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/235.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 14:1-12&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Read Mark 6:30</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<p><sup class="versenum">30&nbsp;</sup>The apostles gathered around Jesus and reported to him all they had done and taught.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/235-1.mp4" type="button" class="external-movie">
         Watch &nbsp;Mark 6:30&nbsp;</button>
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

<ul>
	<li class="nobreak-final-final">While the apostles were out on their ministry trips, King Herod Antipas was celebrating his birthday. He threw a big banquet and invited all the military commanders and upper-class people of Galilee to one of his palaces. He made a foolish promise to his niece because he liked the way she danced for the guests. Her mother, Herodias, seized the opportunity to get revenge on John the Baptist. She requested his beheading. Herod, not willing to lose face in front of his guests, did what Herodias asked and executed John. Meanwhile, Jesus was continuing His training and discipleship of others as He traveled from town to town (<span class="popup-link" @click = "popUp('pop4')"> Matthew 11:1</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>After Jesus had finished instructing his twelve disciples, he went on from there to teach and preach in the towns of Galilee.</p>
	</div>
	</div>
	<!-- end bible --></div>
	News of John&rsquo;s death reached Jesus around the same time the Apostles were returning from their mission trips. Jesus was grieved over John&rsquo;s death and wanted to be with his closest leaders. They tried to find a place for a quiet retreat. He was modeling how to lead during times of grief and exhaustion.</li>
</ul>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop9')"> Mark 6:14-34</span>; </span>

	<div class="popup invisible" id="pop9"><span class="for-enrichment"><!-- begin bible --> </span>

	<div>
	<div>
	<h3><span class="for-enrichment">John the Baptist Beheaded</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">14&nbsp;</sup>King Herod heard about this, for Jesus&rsquo; name had become well known. Some were saying, &ldquo;John the Baptist has been raised from the dead, and that is why miraculous powers are at work in him.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">15&nbsp;</sup>Others said, &ldquo;He is Elijah.&rdquo;</span></p>

	<p><span class="for-enrichment">And still others claimed, &ldquo;He is a prophet, like one of the prophets of long ago.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">16&nbsp;</sup>But when Herod heard this, he said, &ldquo;John, whom I beheaded, has been raised from the dead!&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>For Herod himself had given orders to have John arrested, and he had him bound and put in prison. He did this because of Herodias, his brother Philip&rsquo;s wife, whom he had married.<sup class="versenum">18&nbsp;</sup>For John had been saying to Herod, &ldquo;It is not lawful for you to have your brother&rsquo;s wife.&rdquo;<sup class="versenum">19&nbsp;</sup>So Herodias nursed a grudge against John and wanted to kill him. But she was not able to,<sup class="versenum">20&nbsp;</sup>because Herod feared John and protected him, knowing him to be a righteous and holy man. When Herod heard John, he was greatly puzzled; yet he liked to listen to him.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">21&nbsp;</sup>Finally the opportune time came. On his birthday Herod gave a banquet for his high officials and military commanders and the leading men of Galilee.<sup class="versenum">22&nbsp;</sup>When the daughter of Herodias came in and danced, she pleased Herod and his dinner guests.</span></p>

	<p><span class="for-enrichment">The king said to the girl, &ldquo;Ask me for anything you want, and I&rsquo;ll give it to you.&rdquo;<sup class="versenum">23&nbsp;</sup>And he promised her with an oath, &ldquo;Whatever you ask I will give you, up to half my kingdom.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">24&nbsp;</sup>She went out and said to her mother, &ldquo;What shall I ask for?&rdquo;</span></p>

	<p><span class="for-enrichment">&ldquo;The head of John the Baptist,&rdquo; she answered.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">25&nbsp;</sup>At once the girl hurried in to the king with the request: &ldquo;I want you to give me right now the head of John the Baptist on a platter.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">26&nbsp;</sup>The king was greatly distressed, but because of his oaths and his dinner guests, he did not want to refuse her.<sup class="versenum">27&nbsp;</sup>So he immediately sent an executioner with orders to bring John&rsquo;s head. The man went, beheaded John in the prison,<sup class="versenum">28&nbsp;</sup>and brought back his head on a platter. He presented it to the girl, and she gave it to her mother.<sup class="versenum">29&nbsp;</sup>On hearing of this, John&rsquo;s disciples came and took his body and laid it in a tomb.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">30&nbsp;</sup>The apostles gathered around Jesus and reported to him all they had done and taught.<sup class="versenum">31&nbsp;</sup>Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, &ldquo;Come with me by yourselves to a quiet place and get some rest.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">32&nbsp;</sup>So they went away by themselves in a boat to a solitary place.<sup class="versenum">33&nbsp;</sup>But many who saw them leaving recognized them and ran on foot from all the towns and got there ahead of them.<sup class="versenum">34&nbsp;</sup>When Jesus landed and saw a large crowd, he had compassion on them, because they were like sheep without a shepherd. So he began teaching them many things.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --></span></div>
	<span class="for-enrichment"> <span class="popup-link" @click = "popUp('pop3')"> Luke 9:7-11</span>. </span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --> </span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">7&nbsp;</sup>Now Herod the tetrarch heard about all that was going on. And he was perplexed because some were saying that John had been raised from the dead,<sup class="versenum">8&nbsp;</sup>others that Elijah had appeared, and still others that one of the prophets of long ago had come back to life.<sup class="versenum">9&nbsp;</sup>But Herod said, &ldquo;I beheaded John. Who, then, is this I hear such things about?&rdquo; And he tried to see him.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">10&nbsp;</sup>When the apostles returned, they reported to Jesus what they had done. Then he took them with him and they withdrew by themselves to a town called Bethsaida,<sup class="versenum">11&nbsp;</sup>but the crowds learned about it and followed him. He welcomed them and spoke to them about the kingdom of God, and healed those who needed healing.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --></span></div>
	</li>
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

			<td class="social" @click="share('lesson', 'Leading while Grieving: ', '/content/M2/eng/multiply2/multiply235.html')">
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