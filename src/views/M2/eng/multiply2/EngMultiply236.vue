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
                        <div class="chapter_number ltr"><h1>36.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership and Provision</h1></div>
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
	<li class="up">Read or watch John 6:1-14 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read John 6:1-14</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Feeds the Five Thousand</h3>

<p><sup class="versenum">1 </sup>Some time after this, Jesus crossed to the far shore of the Sea of Galilee (that is, the Sea of Tiberias),<sup class="versenum">2&nbsp;</sup>and a great crowd of people followed him because they saw the signs he had performed by healing the sick.<sup class="versenum">3&nbsp;</sup>Then Jesus went up on a mountainside and sat down with his disciples.<sup class="versenum">4&nbsp;</sup>The Jewish Passover Festival was near.</p>

<p><sup class="versenum">5&nbsp;</sup>When Jesus looked up and saw a great crowd coming toward him, he said to Philip, &ldquo;Where shall we buy bread for these people to eat?&rdquo;<sup class="versenum">6&nbsp;</sup>He asked this only to test him, for he already had in mind what he was going to do.</p>

<p><sup class="versenum">7&nbsp;</sup>Philip answered him, &ldquo;It would take more than half a year&rsquo;s wages to buy enough bread for each one to have a bite!&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>Another of his disciples, Andrew, Simon Peter&rsquo;s brother, spoke up,<sup class="versenum">9&nbsp;</sup>&ldquo;Here is a boy with five small barley loaves and two small fish, but how far will they go among so many?&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>Jesus said, &ldquo;Have the people sit down.&rdquo; There was plenty of grass in that place, and they sat down (about five thousand men were there).<sup class="versenum">11&nbsp;</sup>Jesus then took the loaves, gave thanks, and distributed to those who were seated as much as they wanted. He did the same with the fish.</p>

<p><sup class="versenum">12&nbsp;</sup>When they had all had enough to eat, he said to his disciples, &ldquo;Gather the pieces that are left over. Let nothing be wasted.&rdquo;<sup class="versenum">13&nbsp;</sup>So they gathered them and filled twelve baskets with the pieces of the five barley loaves left over by those who had eaten.</p>

<p><sup class="versenum">14&nbsp;</sup>After the people saw the sign Jesus performed, they began to say, &ldquo;Surely this is the Prophet who is to come into the world.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/236.mp4" type="button" class="external-movie">
         Watch &nbsp;John 6:1-14&nbsp;</button>
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

<p class="up">Jesus was looking for a place to have a retreat with his leaders, but the Father had different plans. As they approached the shore, Jesus can already see the large crowds gathering because they saw the miracles Jesus had done. Jesus is moved with compassion for them because they looked like sheep without a shepherd. Jesus begins to teach the huge crowd of 5,000 men plus women and children. Jesus uses the situation to teach his leaders about multiplication and God&rsquo;s provision by challenging them to provide food for the crowd. They learned:</p>

<ol>
	<li class="up">to lift up their eyes and see the need;</li>
	<li class="up">to allow their hearts to be moved to compassion;</li>
	<li class="up">to assemble the resources they have around them, including asking someone (the young boy) to give everything to see multiplication happen;</li>
	<li class="up">to organize and allow the supernatural to happen</li>
	<li class="up">to offer all they have to God in faith with thanksgiving.</li>
</ol>

</div>


<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Luke 9:12-17</span>;&nbsp;</span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">12&nbsp;</sup>Late in the afternoon the Twelve came to him and said, &ldquo;Send the crowd away so they can go to the surrounding villages and countryside and find food and lodging, because we are in a remote place here.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">13&nbsp;</sup>He replied, &ldquo;You give them something to eat.&rdquo;</span></p>

	<p><span class="for-enrichment">They answered, &ldquo;We have only five loaves of bread and two fish&mdash;unless we go and buy food for all this crowd.&rdquo;<sup class="versenum">14&nbsp;</sup>(About five thousand men were there.)</span></p>

	<p><span class="for-enrichment">But he said to his disciples, &ldquo;Have them sit down in groups of about fifty each.&rdquo;<sup class="versenum">15&nbsp;</sup>The disciples did so, and everyone sat down.<sup class="versenum">16&nbsp;</sup>Taking the five loaves and the two fish and looking up to heaven, he gave thanks and broke them. Then he gave them to the disciples to distribute to the people.<sup class="versenum">17&nbsp;</sup>They all ate and were satisfied, and the disciples picked up twelve basketfuls of broken pieces that were left over.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop4')"> Matthew 14:15-21</span>;&nbsp;</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">15&nbsp;</sup>As evening approached, the disciples came to him and said, &ldquo;This is a remote place, and it&rsquo;s already getting late. Send the crowds away, so they can go to the villages and buy themselves some food.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">16&nbsp;</sup>Jesus replied, &ldquo;They do not need to go away. You give them something to eat.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>&ldquo;We have here only five loaves of bread and two fish,&rdquo; they answered.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">18&nbsp;</sup>&ldquo;Bring them here to me,&rdquo; he said.<sup class="versenum">19&nbsp;</sup>And he directed the people to sit down on the grass. Taking the five loaves and the two fish and looking up to heaven, he gave thanks and broke the loaves. Then he gave them to the disciples, and the disciples gave them to the people.<sup class="versenum">20&nbsp;</sup>They all ate and were satisfied, and the disciples picked up twelve basketfuls of broken pieces that were left over.<sup class="versenum">21&nbsp;</sup>The number of those who ate was about five thousand men, besides women and children.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop5')"> Mark 6:35-44</span>.</span>

	<div class="popup invisible" id="pop5"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">35&nbsp;</sup>By this time it was late in the day, so his disciples came to him. &ldquo;This is a remote place,&rdquo; they said, &ldquo;and it&rsquo;s already very late.<sup class="versenum">36&nbsp;</sup>Send the people away so that they can go to the surrounding countryside and villages and buy themselves something to eat.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">37&nbsp;</sup>But he answered, &ldquo;You give them something to eat.&rdquo;</span></p>

	<p><span class="for-enrichment">They said to him, &ldquo;That would take more than half a year&rsquo;s wages! Are we to go and spend that much on bread and give it to them to eat?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">38&nbsp;</sup>&ldquo;How many loaves do you have?&rdquo; he asked. &ldquo;Go and see.&rdquo;</span></p>

	<p><span class="for-enrichment">When they found out, they said, &ldquo;Five&mdash;and two fish.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">39&nbsp;</sup>Then Jesus directed them to have all the people sit down in groups on the green grass.<sup class="versenum">40&nbsp;</sup>So they sat down in groups of hundreds and fifties.<sup class="versenum">41&nbsp;</sup>Taking the five loaves and the two fish and looking up to heaven, he gave thanks and broke the loaves. Then he gave them to his disciples to distribute to the people. He also divided the two fish among them all.<sup class="versenum">42&nbsp;</sup>They all ate and were satisfied,<sup class="versenum">43&nbsp;</sup>and the disciples picked up twelve basketfuls of broken pieces of bread and fish.<sup class="versenum">44&nbsp;</sup>The number of the men who had eaten was five thousand.</span></p>
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

			<td class="social" @click="share('lesson', 'Leadership and Provision: ', '/content/M2/eng/multiply2/multiply236.html')">
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