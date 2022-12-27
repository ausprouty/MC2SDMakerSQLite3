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
                        <div class="chapter_number ltr"><h1>30.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership Misunderstood</h1></div>
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

<ul>
	<li class="up">Read or watch Luke 7:18-35 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 7:18-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus and John the Baptist</h3>

<p><sup class="versenum">18&nbsp;</sup>John&rsquo;s disciples told him about all these things. Calling two of them,<sup class="versenum">19&nbsp;</sup>he sent them to the Lord to ask, &ldquo;Are you the one who is to come, or should we expect someone else?&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>When the men came to Jesus, they said, &ldquo;John the Baptist sent us to you to ask, &lsquo;Are you the one who is to come, or should we expect someone else?&rsquo;&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>At that very time Jesus cured many who had diseases, sicknesses and evil spirits, and gave sight to many who were blind.<sup class="versenum">22&nbsp;</sup>So he replied to the messengers, &ldquo;Go back and report to John what you have seen and heard: The blind receive sight, the lame walk, those who have leprosy are cleansed, the deaf hear, the dead are raised, and the good news is proclaimed to the poor.<sup class="versenum">23&nbsp;</sup>Blessed is anyone who does not stumble on account of me.&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>After John&rsquo;s messengers left, Jesus began to speak to the crowd about John: &ldquo;What did you go out into the wilderness to see? A reed swayed by the wind?<sup class="versenum">25&nbsp;</sup>If not, what did you go out to see? A man dressed in fine clothes? No, those who wear expensive clothes and indulge in luxury are in palaces.<sup class="versenum">26&nbsp;</sup>But what did you go out to see? A prophet? Yes, I tell you, and more than a prophet.<sup class="versenum">27&nbsp;</sup>This is the one about whom it is written:</p>

<p>&ldquo;&lsquo;I will send my messenger ahead of you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;who will prepare your way before you.&rsquo;</p>

<p><sup class="versenum">28&nbsp;</sup>I tell you, among those born of women there is no one greater than John; yet the one who is least in the kingdom of God is greater than he.&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>(All the people, even the tax collectors, when they heard Jesus&rsquo; words, acknowledged that God&rsquo;s way was right, because they had been baptized by John.<sup class="versenum">30&nbsp;</sup>But the Pharisees and the experts in the law rejected God&rsquo;s purpose for themselves, because they had not been baptized by John.)</p>

<p><sup class="versenum">31&nbsp;</sup>Jesus went on to say, &ldquo;To what, then, can I compare the people of this generation? What are they like?<sup class="versenum">32&nbsp;</sup>They are like children sitting in the marketplace and calling out to each other:</p>

<p>&ldquo;&lsquo;We played the pipe for you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and you did not dance;<br />
we sang a dirge,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and you did not cry.&rsquo;</p>

<p><sup class="versenum">33&nbsp;</sup>For John the Baptist came neither eating bread nor drinking wine, and you say, &lsquo;He has a demon.&rsquo;<sup class="versenum">34&nbsp;</sup>The Son of Man came eating and drinking, and you say, &lsquo;Here is a glutton and a drunkard, a friend of tax collectors and sinners.&rsquo;<sup class="versenum">35&nbsp;</sup>But wisdom is proved right by all her children.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/230.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 7:18-35&nbsp;</button>
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

<p class="up">Jesus was often misunderstood. John the Baptist had been sitting in prison and was struggling with doubts about Jesus being the one to bring in the Kingdom of God. So John sent a few of his remaining disciples to ask Jesus about it. Jesus sends the men back with an Old Testament scripture from Isaiah (which is the same one He used in Nazareth) to let John know He was doing the works of the Messiah. Jesus then endorses the leadership of John to His disciples. He contrasted this with the evil things people said about John and about Himself. Even after watching Jesus for over two years, religious leaders accused Jesus of being demon possessed, a glutton and a drunkard. We learn that being misunderstood is part of leadership.</p>

</div>

<p class="up"><br />
<span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Matthew 11:2-19</span> </span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<div>
<div>
<p><sup class="versenum">2&nbsp;</sup>When John, who was in prison, heard about the deeds of the Messiah, he sent his disciples<sup class="versenum">3&nbsp;</sup>to ask him, &ldquo;Are you the one who is to come, or should we expect someone else?&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Jesus replied, &ldquo;Go back and report to John what you hear and see:<sup class="versenum">5&nbsp;</sup>The blind receive sight, the lame walk, those who have leprosy are cleansed, the deaf hear, the dead are raised, and the good news is proclaimed to the poor.<sup class="versenum">6&nbsp;</sup>Blessed is anyone who does not stumble on account of me.&rdquo;</p>

<p><sup class="versenum">7&nbsp;</sup>As John&rsquo;s disciples were leaving, Jesus began to speak to the crowd about John: &ldquo;What did you go out into the wilderness to see? A reed swayed by the wind?<sup class="versenum">8&nbsp;</sup>If not, what did you go out to see? A man dressed in fine clothes? No, those who wear fine clothes are in kings&rsquo; palaces.<sup class="versenum">9&nbsp;</sup>Then what did you go out to see? A prophet? Yes, I tell you, and more than a prophet.<sup class="versenum">10&nbsp;</sup>This is the one about whom it is written:</p>

<p>&ldquo;&lsquo;I will send my messenger ahead of you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;who will prepare your way before you.&rsquo;</p>
</div>

<p><sup class="versenum">11&nbsp;</sup>Truly I tell you, among those born of women there has not risen anyone greater than John the Baptist; yet whoever is least in the kingdom of heaven is greater than he.<sup class="versenum">12&nbsp;</sup>From the days of John the Baptist until now, the kingdom of heaven has been subjected to violence, and violent people have been raiding it.<sup class="versenum">13&nbsp;</sup>For all the Prophets and the Law prophesied until John.<sup class="versenum">14&nbsp;</sup>And if you are willing to accept it, he is the Elijah who was to come.<sup class="versenum">15&nbsp;</sup>Whoever has ears, let them hear.</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;To what can I compare this generation? They are like children sitting in the marketplaces and calling out to others:</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;&lsquo;We played the pipe for you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and you did not dance;<br />
we sang a dirge,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and you did not mourn.&rsquo;</p>
</div>

<p><sup class="versenum">18&nbsp;</sup>For John came neither eating nor drinking, and they say, &lsquo;He has a demon.&rsquo;<sup class="versenum">19&nbsp;</sup>The Son of Man came eating and drinking, and they say, &lsquo;Here is a glutton and a drunkard, a friend of tax collectors and sinners.&rsquo; But wisdom is proved right by her deeds.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>



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

			<td class="social" @click="share('lesson', 'Leadership Misunderstood: ', '/content/M2/eng/multiply2/multiply230.html')">
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