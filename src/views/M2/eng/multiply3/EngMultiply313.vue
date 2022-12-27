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
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>Stephen Murdered and Believers Scattered</h1></div>
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
	<li class="nobreak-final-final">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (<span class="popup-link" @click = "popUp('pop1')"> Philippians 2:11</span>b;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	</div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6a)</span></li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people. This has now been witnessed to at the proper time.</p>
</div>

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
	<li class="up">Read or watch Acts 7:54-8:3 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 7:54-8:3</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">54&nbsp;</sup>When the members of the Sanhedrin heard this, they were furious and gnashed their teeth at him.<sup class="versenum">55&nbsp;</sup>But Stephen, full of the Holy Spirit, looked up to heaven and saw the glory of God, and Jesus standing at the right hand of God.<sup class="versenum">56&nbsp;</sup>&ldquo;Look,&rdquo; he said, &ldquo;I see heaven open and the Son of Man standing at the right hand of God.&rdquo;</p>

<p><sup class="versenum">57&nbsp;</sup>At this they covered their ears and, yelling at the top of their voices, they all rushed at him,<sup class="versenum">58&nbsp;</sup>dragged him out of the city and began to stone him. Meanwhile, the witnesses laid their coats at the feet of a young man named Saul.</p>

<p><sup class="versenum">59&nbsp;</sup>While they were stoning him, Stephen prayed, &ldquo;Lord Jesus, receive my spirit.&rdquo;<sup class="versenum">60&nbsp;</sup>Then he fell on his knees and cried out, &ldquo;Lord, do not hold this sin against them.&rdquo; When he had said this, he fell asleep.</p>

<p><sup class="versenum">8:1 </sup>And Saul approved of their killing him.</p>

<p>On that day a great persecution broke out against the church in Jerusalem, and all except the apostles were scattered throughout Judea and Samaria.<sup class="versenum">2&nbsp;</sup>Godly men buried Stephen and mourned deeply for him.<sup class="versenum">3&nbsp;</sup>But Saul began to destroy the church. Going from house to house, he dragged off both men and women and put them in prison.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/313.mp4" type="button" class="external-movie">
         Watch Acts 7:54-8:3</button>
    <div class="collapsed"></div>



<p>&nbsp;</p>

<p class="up">Discovery Discussion (Everyone answers)</p>

<p>&nbsp;</p>

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

<p class="up">Stephen showed his skill in handling the Word of God and confronted the leaders with words of truth. He accused them of disobeying God, sinning against the Holy Spirit, the Law, and Jesus the Messiah. When Stephen told them he could see Jesus, &ldquo;the Son of Man&rdquo;, the leaders erupted into violence against him. Jesus had taught the disciples that the people who killed them would think they were serving God (<span class="popup-link" @click = "popUp('pop3')"> Matthew 10:16-39</span>).</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">16&nbsp;</sup>&ldquo;I am sending you out like sheep among wolves. Therefore be as shrewd as snakes and as innocent as doves.<sup class="versenum">17&nbsp;</sup>Be on your guard; you will be handed over to the local councils and be flogged in the synagogues.<sup class="versenum">18&nbsp;</sup>On my account you will be brought before governors and kings as witnesses to them and to the Gentiles.<sup class="versenum">19&nbsp;</sup>But when they arrest you, do not worry about what to say or how to say it. At that time you will be given what to say,<sup class="versenum">20&nbsp;</sup>for it will not be you speaking, but the Spirit of your Father speaking through you.</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;Brother will betray brother to death, and a father his child; children will rebel against their parents and have them put to death.<sup class="versenum">22&nbsp;</sup>You will be hated by everyone because of me, but the one who stands firm to the end will be saved.<sup class="versenum">23&nbsp;</sup>When you are persecuted in one place, flee to another. Truly I tell you, you will not finish going through the towns of Israel before the Son of Man comes.</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;The student is not above the teacher, nor a servant above his master.<sup class="versenum">25&nbsp;</sup>It is enough for students to be like their teachers, and servants like their masters. If the head of the house has been called Beelzebul, how much more the members of his household!</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;So do not be afraid of them, for there is nothing concealed that will not be disclosed, or hidden that will not be made known.<sup class="versenum">27&nbsp;</sup>What I tell you in the dark, speak in the daylight; what is whispered in your ear, proclaim from the roofs.<sup class="versenum">28&nbsp;</sup>Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.<sup class="versenum">29&nbsp;</sup>Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father&rsquo;s care.<sup class="versenum">30&nbsp;</sup>And even the very hairs of your head are all numbered.<sup class="versenum">31&nbsp;</sup>So don&rsquo;t be afraid; you are worth more than many sparrows.</p>

<p><sup class="versenum">32&nbsp;</sup>&ldquo;Whoever acknowledges me before others, I will also acknowledge before my Father in heaven.<sup class="versenum">33&nbsp;</sup>But whoever disowns me before others, I will disown before my Father in heaven.</p>

<p><sup class="versenum">34&nbsp;</sup>&ldquo;Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword.<sup class="versenum">35&nbsp;</sup>For I have come to turn</p>

<p>&ldquo;&lsquo;a man against his father,<br />
&nbsp;&nbsp;&nbsp;&nbsp;a daughter against her mother,<br />
a daughter-in-law against her mother-in-law&mdash;<br />
<sup class="versenum">36&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;a man&rsquo;s enemies will be the members of his own household.&rsquo;</p>
</div>

<p><sup class="versenum">37&nbsp;</sup>&ldquo;Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me.<sup class="versenum">38&nbsp;</sup>Whoever does not take up their cross and follow me is not worthy of me.<sup class="versenum">39&nbsp;</sup>Whoever finds their life will lose it, and whoever loses their life for my sake will find it.</p>
</div>
</div>
<!-- end bible --></div>
Jesus was seen standing (not sitting) at the place of honor next to God the Father watching over all these events, but He didn&rsquo;t rescue Stephen from death. Stephen prayed directly to Jesus while he was dying, and his request reflected that he understood Jesus&rsquo; equality with God (<span class="popup-link" @click = "popUp('pop4')"> Acts 7:59-60</span>).

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">59&nbsp;</sup>While they were stoning him, Stephen prayed, &ldquo;Lord Jesus, receive my spirit.&rdquo;<sup class="versenum">60&nbsp;</sup>Then he fell on his knees and cried out, &ldquo;Lord, do not hold this sin against them.&rdquo; When he had said this, he fell asleep.</p>
</div>
</div>
<!-- end bible --></div>
This story also introduces a young religious leader named Saul who approved of all that was happening. Saul began going everywhere to destroy the church. Both men and women were persecuted for their faith and many of the believers left Jerusalem to flee from the violence.

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

<ul class="forward">
	<li>Practice needed skills or previous topics to help prepare to minister to others:<br />
	o Prayer, Care, Share<br />
	o Gospel<br />
	o Foundational Bible Studies.</li>
</ul>

</div>

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

			<td class="social" @click="share('lesson', 'Stephen Murdered and Believers Scattered: ', '/content/M2/eng/multiply3/multiply313.html')">
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