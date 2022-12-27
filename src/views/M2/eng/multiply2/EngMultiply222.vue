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
                        <div class="chapter_number ltr"><h1>22.</h1></div>
                        <div class="chapter_title ltr"><h1>Fishing for Men Expedition Five</h1></div>
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
	<li class="back">reminding them of what God wants to do through them,</li>
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

<ul>
	<li class="up">Read or watch Luke 5:17-26 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 5:17-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Forgives and Heals a Paralyzed Man</h3>

<p><sup class="versenum">17&nbsp;</sup>One day Jesus was teaching, and Pharisees and teachers of the law were sitting there. They had come from every village of Galilee and from Judea and Jerusalem. And the power of the Lord was with Jesus to heal the sick.<sup class="versenum">18&nbsp;</sup>Some men came carrying a paralyzed man on a mat and tried to take him into the house to lay him before Jesus.<sup class="versenum">19&nbsp;</sup>When they could not find a way to do this because of the crowd, they went up on the roof and lowered him on his mat through the tiles into the middle of the crowd, right in front of Jesus.</p>

<p><sup class="versenum">20&nbsp;</sup>When Jesus saw their faith, he said, &ldquo;Friend, your sins are forgiven.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>The Pharisees and the teachers of the law began thinking to themselves, &ldquo;Who is this fellow who speaks blasphemy? Who can forgive sins but God alone?&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Jesus knew what they were thinking and asked, &ldquo;Why are you thinking these things in your hearts?<sup class="versenum">23&nbsp;</sup>Which is easier: to say, &lsquo;Your sins are forgiven,&rsquo; or to say, &lsquo;Get up and walk&rsquo;?<sup class="versenum">24&nbsp;</sup>But I want you to know that the Son of Man has authority on earth to forgive sins.&rdquo; So he said to the paralyzed man, &ldquo;I tell you, get up, take your mat and go home.&rdquo;<sup class="versenum">25&nbsp;</sup>Immediately he stood up in front of them, took what he had been lying on and went home praising God.<sup class="versenum">26&nbsp;</sup>Everyone was amazed and gave praise to God. They were filled with awe and said, &ldquo;We have seen remarkable things today.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/222.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 5:17-26&nbsp;</button>
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

<p class="up">The movement is growing. Crowds from all over came to hear Jesus and be healed. The healing of the man with leprosy had brought Pharisees and teachers of the Law from every village in Galilee and Judea and Jerusalem. The leaders had gathered to find out more about this man who had healed a leper. On this occasion, Jesus was healing many through the power of the Spirit. Four friends boldly forced their way to the front of the crowd to bring their paralyzed friend to Jesus. He used the situation as his fifth outreach, to witness to the religious leaders about who He really is. The leaders understood the implications of what Jesus said and did. By forgiving the man&rsquo;s sins, Jesus shows Himself equal with God. Everyone who saw the healing gave glory to the Father.</p>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">Further Study: <span class="popup-link" @click = "popUp('pop3')"> Matthew 9:1-8</span>;&nbsp;</span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --></span>

	
	<p><span class="for-enrichment"><sup class="versenum">1 </sup>Jesus stepped into a boat, crossed over and came to his own town.<sup class="versenum">2&nbsp;</sup>Some men brought to him a paralyzed man, lying on a mat. When Jesus saw their faith, he said to the man, &ldquo;Take heart, son; your sins are forgiven.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">3&nbsp;</sup>At this, some of the teachers of the law said to themselves, &ldquo;This fellow is blaspheming!&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">4&nbsp;</sup>Knowing their thoughts, Jesus said, &ldquo;Why do you entertain evil thoughts in your hearts?<sup class="versenum">5&nbsp;</sup>Which is easier: to say, &lsquo;Your sins are forgiven,&rsquo; or to say, &lsquo;Get up and walk&rsquo;?<sup class="versenum">6&nbsp;</sup>But I want you to know that the Son of Man has authority on earth to forgive sins.&rdquo; So he said to the paralyzed man, &ldquo;Get up, take your mat and go home.&rdquo;<sup class="versenum">7&nbsp;</sup>Then the man got up and went home.<sup class="versenum">8&nbsp;</sup>When the crowd saw this, they were filled with awe; and they praised God, who had given such authority to man.</span></p>
	
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop4')"> Mark 2:1-13</span>.</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	
	<h3><span class="for-enrichment">Jesus Forgives and Heals a Paralyzed Man</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">1 </sup>A few days later, when Jesus again entered Capernaum, the people heard that he had come home.<sup class="versenum">2&nbsp;</sup>They gathered in such large numbers that there was no room left, not even outside the door, and he preached the word to them.<sup class="versenum">3&nbsp;</sup>Some men came, bringing to him a paralyzed man, carried by four of them.<sup class="versenum">4&nbsp;</sup>Since they could not get him to Jesus because of the crowd, they made an opening in the roof above Jesus by digging through it and then lowered the mat the man was lying on.<sup class="versenum">5&nbsp;</sup>When Jesus saw their faith, he said to the paralyzed man, &ldquo;Son, your sins are forgiven.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">6&nbsp;</sup>Now some teachers of the law were sitting there, thinking to themselves,<sup class="versenum">7&nbsp;</sup>&ldquo;Why does this fellow talk like that? He&rsquo;s blaspheming! Who can forgive sins but God alone?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">8&nbsp;</sup>Immediately Jesus knew in his spirit that this was what they were thinking in their hearts, and he said to them, &ldquo;Why are you thinking these things?<sup class="versenum">9&nbsp;</sup>Which is easier: to say to this paralyzed man, &lsquo;Your sins are forgiven,&rsquo; or to say, &lsquo;Get up, take your mat and walk&rsquo;?<sup class="versenum">10&nbsp;</sup>But I want you to know that the Son of Man has authority on earth to forgive sins.&rdquo; So he said to the man,<sup class="versenum">11&nbsp;</sup>&ldquo;I tell you, get up, take your mat and go home.&rdquo;<sup class="versenum">12&nbsp;</sup>He got up, took his mat and walked out in full view of them all. This amazed everyone and they praised God, saying, &ldquo;We have never seen anything like this!&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">13&nbsp;</sup>Once again Jesus went out beside the lake. A large crowd came to him, and he began to teach them. </span></p>
	
	<span class="for-enrichment"> <!-- end bible --> </span></div>
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

			<td class="social" @click="share('lesson', 'Fishing for Men Expedition Five: ', '/content/M2/eng/multiply2/multiply222.html')">
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