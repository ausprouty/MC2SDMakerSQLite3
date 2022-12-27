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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply1-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>Opening Doors </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 12: Opening Doors-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop1')"> Psalm 9:1-2</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<div>
	<h4>For the director of music. To the tune of &ldquo;The Death of the Son.&rdquo; A psalm of David.</h4>

	<p><sup class="versenum">1&nbsp;</sup>I will give thanks to you, <span class="small-caps">Lord, with all my heart;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;I will tell of all your wonderful deeds.<br />
	<sup class="versenum">2&nbsp;</sup>I will be glad and rejoice in you;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;I will sing the praises of your name, O Most High.</span></p>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	and sing songs.</li>
</ul>

</div>

<h2 class="back">Caring for each other</h2>

<ul class="back">
	<li>What is one highlight from this week?</li>
	<li>What is one challenge from this past week?</li>
	<li>What do you want Jesus to do for you this week?</li>
	<li>Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating God&#39;s Faithfulness</h2>

<ul class="back">
	<li>What happened as you trusted God with your goals and <em>I will</em> statements?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p class="back">Since everyone is called to follow Jesus and fish for men, we should realize there are only two kinds of people in the world-- lost and saved. Lost people need to follow Jesus. Saved people need to learn to fish for the lost. When you see the world as two types of people, then your daily interactions get much simpler. If you meet a lost person, witness to them. If you meet a saved person, offer to train them. It can&rsquo;t get much easier than that!&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop2')"> Acts 10:1-8</span>.&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>At Caesarea there was a man named Cornelius, a centurion in what was known as the Italian Regiment.<sup class="versenum">2&nbsp;</sup>He and all his family were devout and God-fearing; he gave generously to those in need and prayed to God regularly.<sup class="versenum">3&nbsp;</sup>One day at about three in the afternoon he had a vision. He distinctly saw an angel of God, who came to him and said, &ldquo;Cornelius!&rdquo;</p>

	<p><sup class="versenum">4&nbsp;</sup>Cornelius stared at him in fear. &ldquo;What is it, Lord?&rdquo; he asked.</p>

	<p>The angel answered, &ldquo;Your prayers and gifts to the poor have come up as a memorial offering before God.<sup class="versenum">5&nbsp;</sup>Now send men to Joppa to bring back a man named Simon who is called Peter.<sup class="versenum">6&nbsp;</sup>He is staying with Simon the tanner, whose house is by the sea.&rdquo;</p>

	<p><sup class="versenum">7&nbsp;</sup>When the angel who spoke to him had gone, Cornelius called two of his servants and a devout soldier who was one of his attendants.<sup class="versenum">8&nbsp;</sup>He told them everything that had happened and sent them to Joppa.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;Peter was directed by the Spirit to go to a seaside town called Caesarea where a Roman military leader named Cornelius lived. He was a God- prepared Person of Peace. Peter obeyed and traveled to Caesarea to tell Cornelius about Jesus. Let&rsquo;s see what happens.&nbsp;</li>
</ul>

</div>

<h2 class="up">Read</h2>

<p class="back">Read or watch Acts 10:24-35 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Acts 10:24-35</button><div class="collapsed" id ="Text0">

<p><sup>24&nbsp;</sup>The following day he arrived in Caesarea. Cornelius was expecting them and had called together his relatives and close friends.<sup class="versenum">25&nbsp;</sup>As Peter entered the house, Cornelius met him and fell at his feet in reverence.<sup class="versenum">26&nbsp;</sup>But Peter made him get up. &ldquo;Stand up,&rdquo; he said, &ldquo;I am only a man myself.&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>While talking with him, Peter went inside and found a large gathering of people.<sup class="versenum">28&nbsp;</sup>He said to them: &ldquo;You are well aware that it is against our law for a Jew to associate with or visit a Gentile. But God has shown me that I should not call anyone impure or unclean.<sup class="versenum">29&nbsp;</sup>So when I was sent for, I came without raising any objection. May I ask why you sent for me?&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>Cornelius answered: &ldquo;Three days ago I was in my house praying at this hour, at three in the afternoon. Suddenly a man in shining clothes stood before me<sup class="versenum">31&nbsp;</sup>and said, &lsquo;Cornelius, God has heard your prayer and remembered your gifts to the poor.<sup class="versenum">32&nbsp;</sup>Send to Joppa for Simon who is called Peter. He is a guest in the home of Simon the tanner, who lives by the sea.&rsquo;<sup class="versenum">33&nbsp;</sup>So I sent for you immediately, and it was good of you to come. Now we are all here in the presence of God to listen to everything the Lord has commanded you to tell us.&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>Then Peter began to speak: &ldquo;I now realize how true it is that God does not show favoritism<sup class="versenum">35&nbsp;</sup>but accepts from every nation the one who fears him and does what is right.</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/112.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 10:24-35&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention (or what did you like best) and why?</li>
	<li>What did you learn about Jesus?</li>
	<li>What did you learn about people?</li>
	<li>How will you obey Jesus now that you know this?</li>
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
<div id="Summary3" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Persons of Peace are people of relationship. We can share the gospel with individual people, but we need to also look for opportunities to follow open doors to share with the friends and family of Persons of Peace. Other examples of the gospel spreading through relationships are Lydia and her household (<span class="popup-link" @click = "popUp('pop3')"> Acts 16:14-15</span>),&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">14&nbsp;</sup>One of those listening was a woman from the city of Thyatira named Lydia, a dealer in purple cloth. She was a worshiper of God. The Lord opened her heart to respond to Paul&rsquo;s message.<sup class="versenum">15&nbsp;</sup>When she and the members of her household were baptized, she invited us to her home. &ldquo;If you consider me a believer in the Lord,&rdquo; she said, &ldquo;come and stay at my house.&rdquo; And she persuaded us.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;the Philippian jailer and his household (<span class="popup-link" @click = "popUp('pop4')"> Acts 16:30-33</span>)&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">30&nbsp;</sup>He then brought them out and asked, &ldquo;Sirs, what must I do to be saved?&rdquo;</p>

	<p><sup class="versenum">31&nbsp;</sup>They replied, &ldquo;Believe in the Lord Jesus, and you will be saved&mdash;you and your household.&rdquo;<sup class="versenum">32&nbsp;</sup>Then they spoke the word of the Lord to him and to all the others in his house.<sup class="versenum">33&nbsp;</sup>At that hour of the night the jailer took them and washed their wounds; then immediately he and all his household were baptized.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;and Matthew the tax collector and his friends (<span class="popup-link" @click = "popUp('pop5')"> Matthew 9:9-10</span>).

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">9&nbsp;</sup>As Jesus went on from there, he saw a man named Matthew sitting at the tax collector&rsquo;s booth. &ldquo;Follow me,&rdquo; he told him, and Matthew got up and followed him.</p>

	<p><sup class="versenum">10&nbsp;</sup>While Jesus was having dinner at Matthew&rsquo;s house, many tax collectors and sinners came and ate with him and his disciples.</p>
	</div>
	</div>
	</div>
	</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p>Practice setting up a missional event in the home of a Person of Peace.</p>

<ul class="forward">
	<li>Discuss how they will ask the Person of Peace to host the event.</li>
	<li>Discuss how to use short films and JESUS Film clips to have spiritual discussions using the standard 2 questions.</li>
	<li>Discuss how to offer an opportunity to pray.</li>
	<li>Discuss how to follow up with those who put their faith in Christ.</li>
</ul>

</div>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify at least one Person of Peace that you could ask to host an event.</li>
	<li>Identify 5 people from your Network List with whom you will take the initiative to minister to this week.</li>
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


<h2 class="forward">Praying for the Mission</h2>

<ul class="forward">
	<li>Commit everyone&#39;s goals to the Lord. Ask the Lord to help us be faithful and use us to start a movement of disciple-makers.</li>
</ul>

<div class="for-enrichment">
<p>For further enrichment: Read <!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/tc/tc07', '#1')">
    Transferable Concept #7: How to Help Fulfill the Great Commission 
</span>
<!-- end linkInternal sdcard-->
 and discuss with another group member.</p>
</div>


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

			<td class="social" @click="share('lesson', 'Opening Doors : ', '/content/M2/eng/multiply1/multiply112.html')">
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