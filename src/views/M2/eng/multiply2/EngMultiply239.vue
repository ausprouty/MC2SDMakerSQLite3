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
                        <div class="chapter_number ltr"><h1>39.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership Retreat and Evaluation</h1></div>
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

<p class="up">Read or watch Matthew 16:13-28 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Matthew 16:13-28</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Peter Declares That Jesus Is the Messiah</h3>

<p><sup class="versenum">13&nbsp;</sup>When Jesus came to the region of Caesarea Philippi, he asked his disciples, &ldquo;Who do people say the Son of Man is?&rdquo;</p>

<p><sup class="versenum">14&nbsp;</sup>They replied, &ldquo;Some say John the Baptist; others say Elijah; and still others, Jeremiah or one of the prophets.&rdquo;</p>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;But what about you?&rdquo; he asked. &ldquo;Who do you say I am?&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>Simon Peter answered, &ldquo;You are the Messiah, the Son of the living God.&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>Jesus replied, &ldquo;Blessed are you, Simon son of Jonah, for this was not revealed to you by flesh and blood, but by my Father in heaven.<sup class="versenum">18&nbsp;</sup>And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.<sup class="versenum">19&nbsp;</sup>I will give you the keys of the kingdom of heaven; whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven.&rdquo;<sup class="versenum">20&nbsp;</sup>Then he ordered his disciples not to tell anyone that he was the Messiah.</p>

<h3>Jesus Predicts His Death</h3>

<p><sup class="versenum">21&nbsp;</sup>From that time on Jesus began to explain to his disciples that he must go to Jerusalem and suffer many things at the hands of the elders, the chief priests and the teachers of the law, and that he must be killed and on the third day be raised to life.</p>

<p><sup class="versenum">22&nbsp;</sup>Peter took him aside and began to rebuke him. &ldquo;Never, Lord!&rdquo; he said. &ldquo;This shall never happen to you!&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>Jesus turned and said to Peter, &ldquo;Get behind me, Satan! You are a stumbling block to me; you do not have in mind the concerns of God, but merely human concerns.&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>Then Jesus said to his disciples, &ldquo;Whoever wants to be my disciple must deny themselves and take up their cross and follow me.<sup class="versenum">25&nbsp;</sup>For whoever wants to save their life will lose it, but whoever loses their life for me will find it.<sup class="versenum">26&nbsp;</sup>What good will it be for someone to gain the whole world, yet forfeit their soul? Or what can anyone give in exchange for their soul?<sup class="versenum">27&nbsp;</sup>For the Son of Man is going to come in his Father&rsquo;s glory with his angels, and then he will reward each person according to what they have done.</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;Truly I tell you, some who are standing here will not taste death before they see the Son of Man coming in his kingdom.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/239.mp4" type="button" class="external-movie">
         Watch Matthew 16:13-28</button>
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

<p class="up">Jesus continues to prepare His leadership team for the mission. He is teaching them about love, humility, faith and their understanding of authority. He now takes them north to another non-Jewish, pagan area. Jesus begins to evaluate the ministry by asking &ldquo;Who do people say that I am?&rdquo; The question is about the core issue of the movement. It is the most important question we can ever ask ourselves and others. After almost three years of public ministry and showing signs that pointed to Him as Messiah, people still did not understand. Jesus then asked the Twelve how they would answer the question. Peter answered for the group, &ldquo;You are the Christ, the Son of the Living God&rdquo;. They got it! Jesus uses the opportunity to remind them that anything we understand about Jesus comes from the Father and not from our own intellect. This is also the first time Jesus mentions His &lsquo;Church&rsquo; which He promises to build upon the foundational truth of who He is. It was in that pagan territory that Jesus chose to first declare this plan. Imagine how different their understanding would have been had he made that same declaration in the Temple in Jerusalem!</p>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Mark 8:27-38</span>;&nbsp;</span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<h3><span class="for-enrichment">Peter Declares That Jesus Is the Messiah</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">27&nbsp;</sup>Jesus and his disciples went on to the villages around Caesarea Philippi. On the way he asked them, &ldquo;Who do people say I am?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">28&nbsp;</sup>They replied, &ldquo;Some say John the Baptist; others say Elijah; and still others, one of the prophets.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">29&nbsp;</sup>&ldquo;But what about you?&rdquo; he asked. &ldquo;Who do you say I am?&rdquo;</span></p>

	<p><span class="for-enrichment">Peter answered, &ldquo;You are the Messiah.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">30&nbsp;</sup>Jesus warned them not to tell anyone about him.</span></p>

	<h3><span class="for-enrichment">Jesus Predicts His Death</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">31&nbsp;</sup>He then began to teach them that the Son of Man must suffer many things and be rejected by the elders, the chief priests and the teachers of the law, and that he must be killed and after three days rise again.<sup class="versenum">32&nbsp;</sup>He spoke plainly about this, and Peter took him aside and began to rebuke him.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">33&nbsp;</sup>But when Jesus turned and looked at his disciples, he rebuked Peter. &ldquo;Get behind me, Satan!&rdquo; he said. &ldquo;You do not have in mind the concerns of God, but merely human concerns.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">34&nbsp;</sup>Then he called the crowd to him along with his disciples and said: &ldquo;Whoever wants to be my disciple must deny themselves and take up their cross and follow me.<sup class="versenum">35&nbsp;</sup>For whoever wants to save their life will lose it, but whoever loses their life for me and for the gospel will save it.<sup class="versenum">36&nbsp;</sup>What good is it for someone to gain the whole world, yet forfeit their soul?<sup class="versenum">37&nbsp;</sup>Or what can anyone give in exchange for their soul?<sup class="versenum">38&nbsp;</sup>If anyone is ashamed of me and my words in this adulterous and sinful generation, the Son of Man will be ashamed of them when he comes in his Father&rsquo;s glory with the holy angels.&rdquo;</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop4')"> Luke 9:18-27</span>.</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<h3><span class="for-enrichment">Peter Declares That Jesus Is the Messiah</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">18&nbsp;</sup>Once when Jesus was praying in private and his disciples were with him, he asked them, &ldquo;Who do the crowds say I am?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">19&nbsp;</sup>They replied, &ldquo;Some say John the Baptist; others say Elijah; and still others, that one of the prophets of long ago has come back to life.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">20&nbsp;</sup>&ldquo;But what about you?&rdquo; he asked. &ldquo;Who do you say I am?&rdquo;</span></p>

	<p><span class="for-enrichment">Peter answered, &ldquo;God&rsquo;s Messiah.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">21&nbsp;</sup>Jesus strictly warned them not to tell this to anyone.<sup class="versenum">22&nbsp;</sup>And he said, &ldquo;The Son of Man must suffer many things and be rejected by the elders, the chief priests and the teachers of the law, and he must be killed and on the third day be raised to life.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">23&nbsp;</sup>Then he said to them all: &ldquo;Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me.<sup class="versenum">24&nbsp;</sup>For whoever wants to save their life will lose it, but whoever loses their life for me will save it.<sup class="versenum">25&nbsp;</sup>What good is it for someone to gain the whole world, and yet lose or forfeit their very self?<sup class="versenum">26&nbsp;</sup>Whoever is ashamed of me and my words, the Son of Man will be ashamed of them when he comes in his glory and in the glory of the Father and of the holy angels.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">27&nbsp;</sup>&ldquo;Truly I tell you, some who are standing here will not taste death before they see the kingdom of God.&rdquo;</span></p>
	</div>
	</div>
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

			<td class="social" @click="share('lesson', 'Leadership Retreat and Evaluation: ', '/content/M2/eng/multiply2/multiply239.html')">
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