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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>The Holy Spirit Comes at Pentecost</h1></div>
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
	<li class="back">reminding them of what God wants to do through them</li>
</ul>

<p class="back"><em>Share BIG vision &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li class="up">Ask the group to tell the story from last week</li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch Acts 2:1-13 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 2:1-13</button><div class="collapsed" id ="Text0">

<h3>The Holy Spirit Comes at Pentecost</h3>

<p><sup class="versenum">1 </sup>When the day of Pentecost came, they were all together in one place.<sup class="versenum">2&nbsp;</sup>Suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house where they were sitting.<sup class="versenum">3&nbsp;</sup>They saw what seemed to be tongues of fire that separated and came to rest on each of them.<sup class="versenum">4&nbsp;</sup>All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.</p>

<p><sup class="versenum">5&nbsp;</sup>Now there were staying in Jerusalem God-fearing Jews from every nation under heaven.<sup class="versenum">6&nbsp;</sup>When they heard this sound, a crowd came together in bewilderment, because each one heard their own language being spoken.<sup class="versenum">7&nbsp;</sup>Utterly amazed, they asked: &ldquo;Aren&rsquo;t all these who are speaking Galileans?<sup class="versenum">8&nbsp;</sup>Then how is it that each of us hears them in our native language?<sup class="versenum">9&nbsp;</sup>Parthians, Medes and Elamites; residents of Mesopotamia, Judea and Cappadocia, Pontus and Asia,<sup class="versenum">10&nbsp;</sup>Phrygia and Pamphylia, Egypt and the parts of Libya near Cyrene; visitors from Rome<sup class="versenum">11&nbsp;</sup>(both Jews and converts to Judaism); Cretans and Arabs&mdash;we hear them declaring the wonders of God in our own tongues!&rdquo;<sup class="versenum">12&nbsp;</sup>Amazed and perplexed, they asked one another, &ldquo;What does this mean?&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>Some, however, made fun of them and said, &ldquo;They have had too much wine.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/303.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 2:1-13&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in the story?</li>
	<li>What is being modeled about a Spirit-dependent life, making disciples or leadership?</li>
	<li>How can we live differently now that we know this story?</li>
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
<p class="up">Pentecost was one of the three main annual Jewish feasts and was attended by Jewish pilgrims from every part of the Roman world. It occurs 50 days after the Passover feast and is the anniversary of the Old Testament occasion of Moses receiving the Law from God (Exodus 20). 120 men and women were gathered together when the Spirit came. On the night Jesus was arrested, He taught the disciples that the coming Spirit would be another helper who would live in them (<span class="popup-link" @click = "popUp('pop1')"> John 14:16-17</span>).</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">16&nbsp;</sup>And I will ask the Father, and he will give you another advocate to help you and be with you forever&mdash;<sup class="versenum">17&nbsp;</sup>the Spirit of truth. The world cannot accept him, because it neither sees him nor knows him. But you know him, for he lives with you and will be in you.</p>
</div>
</div>
<!-- end bible --></div>
This new relationship with the Holy Spirit was promised hundreds of years earlier through prophets like Ezekiel. Read <span class="popup-link" @click = "popUp('pop2')"> Ezekiel 36:26-27</span>.

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">26&nbsp;</sup>I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.<sup class="versenum">27&nbsp;</sup>And I will put my Spirit in you and move you to follow my decrees and be careful to keep my laws.</p>
</div>
</div>
<!-- end bible --></div>
&nbsp;The Spirit was sent to comfort, teach, lead, convict of sin, produce fruit, and empower the disciples to continue the work for which Jesus had trained them (<span class="popup-link" @click = "popUp('pop3')"> John 14-15</span>).

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
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

<h3>The Vine and the Branches</h3>

<p><sup class="versenum">1 </sup>&ldquo;I am the true vine, and my Father is the gardener.<sup class="versenum">2&nbsp;</sup>He cuts off every branch in me that bears no fruit, while every branch that does bear fruit he prunes so that it will be even more fruitful.<sup class="versenum">3&nbsp;</sup>You are already clean because of the word I have spoken to you.<sup class="versenum">4&nbsp;</sup>Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me.</p>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.<sup class="versenum">6&nbsp;</sup>If you do not remain in me, you are like a branch that is thrown away and withers; such branches are picked up, thrown into the fire and burned.<sup class="versenum">7&nbsp;</sup>If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you.<sup class="versenum">8&nbsp;</sup>This is to my Father&rsquo;s glory, that you bear much fruit, showing yourselves to be my disciples.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;As the Father has loved me, so have I loved you. Now remain in my love.<sup class="versenum">10&nbsp;</sup>If you keep my commands, you will remain in my love, just as I have kept my Father&rsquo;s commands and remain in his love.<sup class="versenum">11&nbsp;</sup>I have told you this so that my joy may be in you and that your joy may be complete.<sup class="versenum">12&nbsp;</sup>My command is this: Love each other as I have loved you.<sup class="versenum">13&nbsp;</sup>Greater love has no one than this: to lay down one&rsquo;s life for one&rsquo;s friends.<sup class="versenum">14&nbsp;</sup>You are my friends if you do what I command.<sup class="versenum">15&nbsp;</sup>I no longer call you servants, because a servant does not know his master&rsquo;s business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you.<sup class="versenum">16&nbsp;</sup>You did not choose me, but I chose you and appointed you so that you might go and bear fruit&mdash;fruit that will last&mdash;and so that whatever you ask in my name the Father will give you.<sup class="versenum">17&nbsp;</sup>This is my command: Love each other.</p>

<h3>The World Hates the Disciples</h3>

<p><sup class="versenum">18&nbsp;</sup>&ldquo;If the world hates you, keep in mind that it hated me first.<sup class="versenum">19&nbsp;</sup>If you belonged to the world, it would love you as its own. As it is, you do not belong to the world, but I have chosen you out of the world. That is why the world hates you.<sup class="versenum">20&nbsp;</sup>Remember what I told you: &lsquo;A servant is not greater than his master.&rsquo; If they persecuted me, they will persecute you also. If they obeyed my teaching, they will obey yours also.<sup class="versenum">21&nbsp;</sup>They will treat you this way because of my name, for they do not know the one who sent me.<sup class="versenum">22&nbsp;</sup>If I had not come and spoken to them, they would not be guilty of sin; but now they have no excuse for their sin.<sup class="versenum">23&nbsp;</sup>Whoever hates me hates my Father as well.<sup class="versenum">24&nbsp;</sup>If I had not done among them the works no one else did, they would not be guilty of sin. As it is, they have seen, and yet they have hated both me and my Father.<sup class="versenum">25&nbsp;</sup>But this is to fulfill what is written in their Law: &lsquo;They hated me without reason.&rsquo;</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;When the Advocate comes, whom I will send to you from the Father&mdash;the Spirit of truth who goes out from the Father&mdash;he will testify about me.<sup class="versenum">27&nbsp;</sup>And you also must testify, for you have been with me from the beginning.</p>
</div>
</div>
<!-- end bible --></div>
It is through the presence and power of the Spirit that both men and women continue the mission of Jesus.

<p>&nbsp;</p>

</div>

<p class="up"><em>Practice giving and communion after the summary or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>Practice needed skills or previous topics to help prepare to minister to others:</p>

<ul>
	<li>Prayer, Care, Share</li>
	<li>Gospel</li>
	<li>Foundational Bible Studies.&nbsp;</li>
</ul>

</div>

<ul class="forward">
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

			<td class="social" @click="share('lesson', 'The Holy Spirit Comes at Pentecost: ', '/content/M2/eng/multiply3/multiply303.html')">
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