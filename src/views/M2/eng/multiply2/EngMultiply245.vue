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
                        <div class="chapter_number ltr"><h1>45.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership is Stewardship</h1></div>
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
	<li class="up">Read or watch Luke 19:1-27 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 19:1-27</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Zacchaeus the Tax Collector</h3>

<p><sup class="versenum">1 </sup>Jesus entered Jericho and was passing through.<sup class="versenum">2&nbsp;</sup>A man was there by the name of Zacchaeus; he was a chief tax collector and was wealthy.<sup class="versenum">3&nbsp;</sup>He wanted to see who Jesus was, but because he was short he could not see over the crowd.<sup class="versenum">4&nbsp;</sup>So he ran ahead and climbed a sycamore-fig tree to see him, since Jesus was coming that way.</p>

<p><sup class="versenum">5&nbsp;</sup>When Jesus reached the spot, he looked up and said to him, &ldquo;Zacchaeus, come down immediately. I must stay at your house today.&rdquo;<sup class="versenum">6&nbsp;</sup>So he came down at once and welcomed him gladly.</p>

<p><sup class="versenum">7&nbsp;</sup>All the people saw this and began to mutter, &ldquo;He has gone to be the guest of a sinner.&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>But Zacchaeus stood up and said to the Lord, &ldquo;Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>Jesus said to him, &ldquo;Today salvation has come to this house, because this man, too, is a son of Abraham.<sup class="versenum">10&nbsp;</sup>For the Son of Man came to seek and to save the lost.&rdquo;</p>

<h3>The Parable of the Ten Minas</h3>

<p><sup class="versenum">11&nbsp;</sup>While they were listening to this, he went on to tell them a parable, because he was near Jerusalem and the people thought that the kingdom of God was going to appear at once.<sup class="versenum">12&nbsp;</sup>He said: &ldquo;A man of noble birth went to a distant country to have himself appointed king and then to return.<sup class="versenum">13&nbsp;</sup>So he called ten of his servants and gave them ten minas. &lsquo;Put this money to work,&rsquo; he said, &lsquo;until I come back.&rsquo;</p>

<p><sup class="versenum">14&nbsp;</sup>&ldquo;But his subjects hated him and sent a delegation after him to say, &lsquo;We don&rsquo;t want this man to be our king.&rsquo;</p>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;He was made king, however, and returned home. Then he sent for the servants to whom he had given the money, in order to find out what they had gained with it.</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;The first one came and said, &lsquo;Sir, your mina has earned ten more.&rsquo;</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;&lsquo;Well done, my good servant!&rsquo; his master replied. &lsquo;Because you have been trustworthy in a very small matter, take charge of ten cities.&rsquo;</p>

<p><sup class="versenum">18&nbsp;</sup>&ldquo;The second came and said, &lsquo;Sir, your mina has earned five more.&rsquo;</p>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;His master answered, &lsquo;You take charge of five cities.&rsquo;</p>

<p><sup class="versenum">20&nbsp;</sup>&ldquo;Then another servant came and said, &lsquo;Sir, here is your mina; I have kept it laid away in a piece of cloth.<sup class="versenum">21&nbsp;</sup>I was afraid of you, because you are a hard man. You take out what you did not put in and reap what you did not sow.&rsquo;</p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;His master replied, &lsquo;I will judge you by your own words, you wicked servant! You knew, did you, that I am a hard man, taking out what I did not put in, and reaping what I did not sow?<sup class="versenum">23&nbsp;</sup>Why then didn&rsquo;t you put my money on deposit, so that when I came back, I could have collected it with interest?&rsquo;</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;Then he said to those standing by, &lsquo;Take his mina away from him and give it to the one who has ten minas.&rsquo;</p>

<p><sup class="versenum">25&nbsp;</sup>&ldquo;&lsquo;Sir,&rsquo; they said, &lsquo;he already has ten!&rsquo;</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;He replied, &lsquo;I tell you that to everyone who has, more will be given, but as for the one who has nothing, even what they have will be taken away.<sup class="versenum">27&nbsp;</sup>But those enemies of mine who did not want me to be king over them&mdash;bring them here and kill them in front of me.&rsquo;&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/245.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 19:1-27&nbsp;</button>
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

<p class="up">Jesus lived out what He taught. In Jericho, Jesus meets Zacchaeus, another very rich but extremely unpopular man, who is the chief tax collector in the region. Jesus reveals that the Father wants Him to go to Zacchaeus&rsquo; house. The people are shocked, but Zacchaeus is excited. The time he spends with Jesus changes his heart. He receives forgiveness from Jesus and begins to change his ways. He makes things right with those he has wronged. While they are celebrating the changed life of Zacchaeus, Jesus teaches a parable about being a steward of what God has given us. One day we will have to give an account for how we have used God&rsquo;s gifts. We are stewards of material resources and also of deep spiritual understandings. As true disciples of Jesus, we realize we own nothing. God is the owner and we are called to steward what He entrusts to us. This includes our time, our words, our thoughts, and our actions.</p>

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

			<td class="social" @click="share('lesson', 'Leadership is Stewardship: ', '/content/M2/eng/multiply2/multiply245.html')">
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