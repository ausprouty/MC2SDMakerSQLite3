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
                        <div class="chapter_number ltr"><h1>42.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus, Light of the World</h1></div>
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

<p class="up">Read or watch John 9:1-41 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 9</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Heals a Man Born Blind</h3>

<p><sup class="versenum">1 </sup>As he went along, he saw a man blind from birth.<sup class="versenum">2&nbsp;</sup>His disciples asked him, &ldquo;Rabbi, who sinned, this man or his parents, that he was born blind?&rdquo;</p>

<p><sup class="versenum">3&nbsp;</sup>&ldquo;Neither this man nor his parents sinned,&rdquo; said Jesus, &ldquo;but this happened so that the works of God might be displayed in him.<sup class="versenum">4&nbsp;</sup>As long as it is day, we must do the works of him who sent me. Night is coming, when no one can work.<sup class="versenum">5&nbsp;</sup>While I am in the world, I am the light of the world.&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>After saying this, he spit on the ground, made some mud with the saliva, and put it on the man&rsquo;s eyes.<sup class="versenum">7&nbsp;</sup>&ldquo;Go,&rdquo; he told him, &ldquo;wash in the Pool of Siloam&rdquo; (this word means &ldquo;Sent&rdquo;). So the man went and washed, and came home seeing.</p>

<p><sup class="versenum">8&nbsp;</sup>His neighbors and those who had formerly seen him begging asked, &ldquo;Isn&rsquo;t this the same man who used to sit and beg?&rdquo;<sup class="versenum">9&nbsp;</sup>Some claimed that he was.</p>

<p>Others said, &ldquo;No, he only looks like him.&rdquo;</p>

<p>But he himself insisted, &ldquo;I am the man.&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>&ldquo;How then were your eyes opened?&rdquo; they asked.</p>

<p><sup class="versenum">11&nbsp;</sup>He replied, &ldquo;The man they call Jesus made some mud and put it on my eyes. He told me to go to Siloam and wash. So I went and washed, and then I could see.&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>&ldquo;Where is this man?&rdquo; they asked him.</p>

<p>&ldquo;I don&rsquo;t know,&rdquo; he said.</p>

<h3>The Pharisees Investigate the Healing</h3>

<p><sup class="versenum">13&nbsp;</sup>They brought to the Pharisees the man who had been blind.<sup class="versenum">14&nbsp;</sup>Now the day on which Jesus had made the mud and opened the man&rsquo;s eyes was a Sabbath.<sup class="versenum">15&nbsp;</sup>Therefore the Pharisees also asked him how he had received his sight. &ldquo;He put mud on my eyes,&rdquo; the man replied, &ldquo;and I washed, and now I see.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>Some of the Pharisees said, &ldquo;This man is not from God, for he does not keep the Sabbath.&rdquo;</p>

<p>But others asked, &ldquo;How can a sinner perform such signs?&rdquo; So they were divided.</p>

<p><sup class="versenum">17&nbsp;</sup>Then they turned again to the blind man, &ldquo;What have you to say about him? It was your eyes he opened.&rdquo;</p>

<p>The man replied, &ldquo;He is a prophet.&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>They still did not believe that he had been blind and had received his sight until they sent for the man&rsquo;s parents.<sup class="versenum">19&nbsp;</sup>&ldquo;Is this your son?&rdquo; they asked. &ldquo;Is this the one you say was born blind? How is it that now he can see?&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>&ldquo;We know he is our son,&rdquo; the parents answered, &ldquo;and we know he was born blind.<sup class="versenum">21&nbsp;</sup>But how he can see now, or who opened his eyes, we don&rsquo;t know. Ask him. He is of age; he will speak for himself.&rdquo;<sup class="versenum">22&nbsp;</sup>His parents said this because they were afraid of the Jewish leaders, who already had decided that anyone who acknowledged that Jesus was the Messiah would be put out of the synagogue.<sup class="versenum">23&nbsp;</sup>That was why his parents said, &ldquo;He is of age; ask him.&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>A second time they summoned the man who had been blind. &ldquo;Give glory to God by telling the truth,&rdquo; they said. &ldquo;We know this man is a sinner.&rdquo;</p>

<p><sup class="versenum">25&nbsp;</sup>He replied, &ldquo;Whether he is a sinner or not, I don&rsquo;t know. One thing I do know. I was blind but now I see!&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>Then they asked him, &ldquo;What did he do to you? How did he open your eyes?&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>He answered, &ldquo;I have told you already and you did not listen. Why do you want to hear it again? Do you want to become his disciples too?&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>Then they hurled insults at him and said, &ldquo;You are this fellow&rsquo;s disciple! We are disciples of Moses!<sup class="versenum">29&nbsp;</sup>We know that God spoke to Moses, but as for this fellow, we don&rsquo;t even know where he comes from.&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>The man answered, &ldquo;Now that is remarkable! You don&rsquo;t know where he comes from, yet he opened my eyes.<sup class="versenum">31&nbsp;</sup>We know that God does not listen to sinners. He listens to the godly person who does his will.<sup class="versenum">32&nbsp;</sup>Nobody has ever heard of opening the eyes of a man born blind.<sup class="versenum">33&nbsp;</sup>If this man were not from God, he could do nothing.&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>To this they replied, &ldquo;You were steeped in sin at birth; how dare you lecture us!&rdquo; And they threw him out.</p>

<h3>Spiritual Blindness</h3>

<p><sup class="versenum">35&nbsp;</sup>Jesus heard that they had thrown him out, and when he found him, he said, &ldquo;Do you believe in the Son of Man?&rdquo;</p>

<p><sup class="versenum">36&nbsp;</sup>&ldquo;Who is he, sir?&rdquo; the man asked. &ldquo;Tell me so that I may believe in him.&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>Jesus said, &ldquo;You have now seen him; in fact, he is the one speaking with you.&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>Then the man said, &ldquo;Lord, I believe,&rdquo; and he worshiped him.</p>

<p><sup class="versenum">39&nbsp;</sup>Jesus said, &ldquo;For judgment I have come into this world, so that the blind will see and those who see will become blind.&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>Some Pharisees who were with him heard him say this and asked, &ldquo;What? Are we blind too?&rdquo;</p>

<p><sup class="versenum">41&nbsp;</sup>Jesus said, &ldquo;If you were blind, you would not be guilty of sin; but now that you claim you can see, your guilt remains.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/242.mp4" type="button" class="external-movie">
         Watch &nbsp;John 9:1-41&nbsp;</button>
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

<p class="up">Jesus attends another feast, the Feast of Dedication (or Feast of Lights). This was to remember a time when God did a miracle to provide light in the lamps when there was not enough oil for them to keep burning. At the feast, Jesus meets a man blind from birth. Most people believed that if someone was suffering it was because they or someone close to them had sinned. Jesus shocks those around Him by saying that this man was born blind not because of sin but so that God&rsquo;s glory would be displayed in His life. He taught an amazing principle: God can allow suffering so that He might be glorified. It is important to remember that God is the center of life. He gets glory by answering people when they call out to Him in need. A lesson for us is to be careful about judging why someone is suffering. The suffering may not be the result of anything they have done, but because of the work God will do in their lives.</p>

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

			<td class="social" @click="share('lesson', 'Jesus, Light of the World: ', '/content/M2/eng/multiply2/multiply242.html')">
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