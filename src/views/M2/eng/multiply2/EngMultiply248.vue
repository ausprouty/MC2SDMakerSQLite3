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
                        <div class="chapter_number ltr"><h1>48.</h1></div>
                        <div class="chapter_title ltr"><h1>Submissive Leadership</h1></div>
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

<p class="up">Read or watch John 14:1-31 and Matthew 26:36-46 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 14</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Comforts His Disciples</h3>

<p><sup class="versenum">1 </sup>&ldquo;Do not let your hearts be troubled. You believe in God; believe also in me.<sup class="versenum">2&nbsp;</sup>My Father&rsquo;s house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you?<sup class="versenum">3&nbsp;</sup>And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am.<sup class="versenum">4&nbsp;</sup>You know the way to the place where I am going.&rdquo;</p>

<h3>Jesus the Way to the Father</h3>

<p><sup class="versenum">5&nbsp;</sup>Thomas said to him, &ldquo;Lord, we don&rsquo;t know where you are going, so how can we know the way?&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>Jesus answered, &ldquo;I am the way and the truth and the life. No one comes to the Father except through me.<sup class="versenum">7&nbsp;</sup>If you really know me, you will know my Father as well. From now on, you do know him and have seen him.&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>Philip said, &ldquo;Lord, show us the Father and that will be enough for us.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>Jesus answered: &ldquo;Don&rsquo;t you know me, Philip, even after I have been among you such a long time? Anyone who has seen me has seen the Father. How can you say, &lsquo;Show us the Father&rsquo;?<sup class="versenum">10&nbsp;</sup>Don&rsquo;t you believe that I am in the Father, and that the Father is in me? The words I say to you I do not speak on my own authority. Rather, it is the Father, living in me, who is doing his work.<sup class="versenum">11&nbsp;</sup>Believe me when I say that I am in the Father and the Father is in me; or at least believe on the evidence of the works themselves.<sup class="versenum">12&nbsp;</sup>Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father.<sup class="versenum">13&nbsp;</sup>And I will do whatever you ask in my name, so that the Father may be glorified in the Son.<sup class="versenum">14&nbsp;</sup>You may ask me for anything in my name, and I will do it.</p>

<h3>Jesus Promises the Holy Spirit</h3>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;If you love me, keep my commands.<sup class="versenum">16&nbsp;</sup>And I will ask the Father, and he will give you another advocate to help you and be with you forever&mdash;<sup class="versenum">17&nbsp;</sup>the Spirit of truth. The world cannot accept him, because it neither sees him nor knows him. But you know him, for he lives with you and will be in you.<sup class="versenum">18&nbsp;</sup>I will not leave you as orphans; I will come to you.<sup class="versenum">19&nbsp;</sup>Before long, the world will not see me anymore, but you will see me. Because I live, you also will live.<sup class="versenum">20&nbsp;</sup>On that day you will realize that I am in my Father, and you are in me, and I am in you.<sup class="versenum">21&nbsp;</sup>Whoever has my commands and keeps them is the one who loves me. The one who loves me will be loved by my Father, and I too will love them and show myself to them.&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Then Judas (not Judas Iscariot) said, &ldquo;But, Lord, why do you intend to show yourself to us and not to the world?&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>Jesus replied, &ldquo;Anyone who loves me will obey my teaching. My Father will love them, and we will come to them and make our home with them.<sup class="versenum">24&nbsp;</sup>Anyone who does not love me will not obey my teaching. These words you hear are not my own; they belong to the Father who sent me.</p>

<p><sup class="versenum">25&nbsp;</sup>&ldquo;All this I have spoken while still with you.<sup class="versenum">26&nbsp;</sup>But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.<sup class="versenum">27&nbsp;</sup>Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;You heard me say, &lsquo;I am going away and I am coming back to you.&rsquo; If you loved me, you would be glad that I am going to the Father, for the Father is greater than I.<sup class="versenum">29&nbsp;</sup>I have told you now before it happens, so that when it does happen you will believe.<sup class="versenum">30&nbsp;</sup>I will not say much more to you, for the prince of this world is coming. He has no hold over me,<sup class="versenum">31&nbsp;</sup>but he comes so that the world may learn that I love the Father and do exactly what my Father has commanded me.</p>

<p>&ldquo;Come now; let us leave.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/248.mp4" type="button" class="external-movie">
         Watch &nbsp;John 14&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Read Matthew 26:36-46</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<h3>Gethsemane</h3>

<p><sup class="versenum">36&nbsp;</sup>Then Jesus went with his disciples to a place called Gethsemane, and he said to them, &ldquo;Sit here while I go over there and pray.&rdquo;<sup class="versenum">37&nbsp;</sup>He took Peter and the two sons of Zebedee along with him, and he began to be sorrowful and troubled.<sup class="versenum">38&nbsp;</sup>Then he said to them, &ldquo;My soul is overwhelmed with sorrow to the point of death. Stay here and keep watch with me.&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>Going a little farther, he fell with his face to the ground and prayed, &ldquo;My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will.&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>Then he returned to his disciples and found them sleeping. &ldquo;Couldn&rsquo;t you men keep watch with me for one hour?&rdquo; he asked Peter.<sup class="versenum">41&nbsp;</sup>&ldquo;Watch and pray so that you will not fall into temptation. The spirit is willing, but the flesh is weak.&rdquo;</p>

<p><sup class="versenum">42&nbsp;</sup>He went away a second time and prayed, &ldquo;My Father, if it is not possible for this cup to be taken away unless I drink it, may your will be done.&rdquo;</p>

<p><sup class="versenum">43&nbsp;</sup>When he came back, he again found them sleeping, because their eyes were heavy.<sup class="versenum">44&nbsp;</sup>So he left them and went away once more and prayed the third time, saying the same thing.</p>

<p><sup class="versenum">45&nbsp;</sup>Then he returned to the disciples and said to them, &ldquo;Are you still sleeping and resting? Look, the hour has come, and the Son of Man is delivered into the hands of sinners.<sup class="versenum">46&nbsp;</sup>Rise! Let us go! Here comes my betrayer!&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/248-1.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 26:36-46&nbsp;</button>
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

<p class="up">Jesus has spent the last couple of years teaching people about living in the Kingdom of God and what the Kingdom of God is like. During this last evening together, Jesus gives additional teaching about His departure and the gift of the Spirit that will be given to help His followers live out the ways of the Kingdom. His followers are confused about what is about to happen in the hours ahead, but Jesus clarifies that He is God in the flesh. Jesus is our perfect model for life and ministry. We understand God because He is revealed through the life of Jesus. Jesus did His works through the Father, and we will do the same work of disciple-making as Jesus did by the power of His Spirit. Jesus also models leadership that submits to the Father and does His will through His power. He is reminding them of the foundations of Holy Spirit dependence: prayer; obedience to the Father&rsquo;s Kingdom agenda; the priority of the Word of God, including Jesus&rsquo; own words; exalting the Father; and intentional relationships of love and sacrifice.</p>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Luke 22:39-46</span>;&nbsp;</span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">39&nbsp;</sup>Jesus went out as usual to the Mount of Olives, and his disciples followed him.<sup class="versenum">40&nbsp;</sup>On reaching the place, he said to them, &ldquo;Pray that you will not fall into temptation.&rdquo;<sup class="versenum">41&nbsp;</sup>He withdrew about a stone&rsquo;s throw beyond them, knelt down and prayed,<sup class="versenum">42&nbsp;</sup>&ldquo;Father, if you are willing, take this cup from me; yet not my will, but yours be done.&rdquo;<sup class="versenum">43&nbsp;</sup>An angel from heaven appeared to him and strengthened him.<sup class="versenum">44&nbsp;</sup>And being in anguish, he prayed more earnestly, and his sweat was like drops of blood falling to the ground.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">45&nbsp;</sup>When he rose from prayer and went back to the disciples, he found them asleep, exhausted from sorrow.<sup class="versenum">46&nbsp;</sup>&ldquo;Why are you sleeping?&rdquo; he asked them. &ldquo;Get up and pray so that you will not fall into temptation.&rdquo;</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment"><span class="popup-link" @click = "popUp('pop4')"> Mark 14:32-42</span>.&nbsp;</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">32&nbsp;</sup>They went to a place called Gethsemane, and Jesus said to his disciples, &ldquo;Sit here while I pray.&rdquo;<sup class="versenum">33&nbsp;</sup>He took Peter, James and John along with him, and he began to be deeply distressed and troubled.<sup class="versenum">34&nbsp;</sup>&ldquo;My soul is overwhelmed with sorrow to the point of death,&rdquo; he said to them. &ldquo;Stay here and keep watch.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">35&nbsp;</sup>Going a little farther, he fell to the ground and prayed that if possible the hour might pass from him.<sup class="versenum">36&nbsp;</sup><em>&ldquo;Abba</em>, Father,&rdquo; he said, &ldquo;everything is possible for you. Take this cup from me. Yet not what I will, but what you will.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">37&nbsp;</sup>Then he returned to his disciples and found them sleeping. &ldquo;Simon,&rdquo; he said to Peter, &ldquo;are you asleep? Couldn&rsquo;t you keep watch for one hour?<sup class="versenum">38&nbsp;</sup>Watch and pray so that you will not fall into temptation. The spirit is willing, but the flesh is weak.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">39&nbsp;</sup>Once more he went away and prayed the same thing.<sup class="versenum">40&nbsp;</sup>When he came back, he again found them sleeping, because their eyes were heavy. They did not know what to say to him.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">41&nbsp;</sup>Returning the third time, he said to them, &ldquo;Are you still sleeping and resting? Enough! The hour has come. Look, the Son of Man is delivered into the hands of sinners.<sup class="versenum">42&nbsp;</sup>Rise! Let us go! Here comes my betrayer!&rdquo;</span></p>
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

			<td class="social" @click="share('lesson', 'Submissive Leadership: ', '/content/M2/eng/multiply2/multiply248.html')">
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