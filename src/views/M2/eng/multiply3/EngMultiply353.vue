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
                        <div class="chapter_number ltr"><h1>53.</h1></div>
                        <div class="chapter_title ltr"><h1>Ministry while on Island of Malta</h1></div>
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

<p class="back">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (Philippians 2:11b; 1 Timothy 2:4-6a)</p>

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
	<li class="up">Read or watch Acts 28:1-10 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 28:1-10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul Ashore on Malta</h3>

<p><sup class="versenum">1 </sup>Once safely on shore, we found out that the island was called Malta.<sup class="versenum">2&nbsp;</sup>The islanders showed us unusual kindness. They built a fire and welcomed us all because it was raining and cold.<sup class="versenum">3&nbsp;</sup>Paul gathered a pile of brushwood and, as he put it on the fire, a viper, driven out by the heat, fastened itself on his hand.<sup class="versenum">4&nbsp;</sup>When the islanders saw the snake hanging from his hand, they said to each other, &ldquo;This man must be a murderer; for though he escaped from the sea, the goddess Justice has not allowed him to live.&rdquo;<sup class="versenum">5&nbsp;</sup>But Paul shook the snake off into the fire and suffered no ill effects.<sup class="versenum">6&nbsp;</sup>The people expected him to swell up or suddenly fall dead; but after waiting a long time and seeing nothing unusual happen to him, they changed their minds and said he was a god.</p>

<p><sup class="versenum">7&nbsp;</sup>There was an estate nearby that belonged to Publius, the chief official of the island. He welcomed us to his home and showed us generous hospitality for three days.<sup class="versenum">8&nbsp;</sup>His father was sick in bed, suffering from fever and dysentery. Paul went in to see him and, after prayer, placed his hands on him and healed him.<sup class="versenum">9&nbsp;</sup>When this had happened, the rest of the sick on the island came and were cured.<sup class="versenum">10&nbsp;</sup>They honored us in many ways; and when we were ready to sail, they furnished us with the supplies we needed.</p>
<!-- end bible -->

<p class="bible"></p>
</div>


<button id="MC2/eng/video/multiply3/353.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 28:1-10&nbsp;</button>
    <div class="collapsed"></div>

<p class="up">Discovery Discussion (Everyone answers)</p>

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
<p class="up">Read <span class="popup-link" @click = "popUp('pop1')"> Romans 8:28-39</span>.&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">28&nbsp;</sup>And we know that in all things God works for the good of those who love him, who have been called according to his purpose.<sup class="versenum">29&nbsp;</sup>For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters.<sup class="versenum">30&nbsp;</sup>And those he predestined, he also called; those he called, he also justified; those he justified, he also glorified.</p>

<p><sup class="versenum">31&nbsp;</sup>What, then, shall we say in response to these things? If God is for us, who can be against us?<sup class="versenum">32&nbsp;</sup>He who did not spare his own Son, but gave him up for us all&mdash;how will he not also, along with him, graciously give us all things?<sup class="versenum">33&nbsp;</sup>Who will bring any charge against those whom God has chosen? It is God who justifies.<sup class="versenum">34&nbsp;</sup>Who then is the one who condemns? No one. Christ Jesus who died&mdash;more than that, who was raised to life&mdash;is at the right hand of God and is also interceding for us.<sup class="versenum">35&nbsp;</sup>Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword?<sup class="versenum">36&nbsp;</sup>As it is written:</p>

<p>&ldquo;For your sake we face death all day long;<br />
&nbsp;&nbsp;&nbsp;&nbsp;we are considered as sheep to be slaughtered.&rdquo;</p>
</div>

<p><sup class="versenum">37&nbsp;</sup>No, in all these things we are more than conquerors through him who loved us.<sup class="versenum">38&nbsp;</sup>For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers,<sup class="versenum">39&nbsp;</sup>neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.</p>
</div>
</div>
<!-- end bible --></div>
Even though in man&rsquo;s eyes this was an unplanned and unwanted stop, it was within God&rsquo;s sovereign plan. Regardless of the circumstances, Paul looked for the goodness and purpose of God. Through dependence on the Holy Spirit, he was intentional in relationships and obedient to Jesus&rsquo; Kingdom agenda as he ministered to those around him. The Lord even supernaturally protected Paul from a poisonous snake bite. The terrible disaster of the shipwreck turned out to be a blessing to the people of Malta, and the Lord received glory. Even on this remote island, Paul found a God-prepared person of peace, the chief official Publius. The home of Publius became a ministry center during the three months that they stayed on the island. Publius was so grateful that he supplied everything Paul, his companions and the soldiers needed to travel to Rome. The Lord not only saved the lives of those that were shipwrecked and those on the island, but He also restored all that was lost during the storm.

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

			<td class="social" @click="share('lesson', 'Ministry while on Island of Malta: ', '/content/M2/eng/multiply3/multiply353.html')">
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