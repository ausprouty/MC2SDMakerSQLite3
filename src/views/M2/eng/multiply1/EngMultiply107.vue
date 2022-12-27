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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>Abiding in Jesus</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 7: Abiding in Jesus-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="back">Read <span class="popup-link" @click = "popUp('pop1')"> Psalm 16:7-11</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">7&nbsp;</sup>I will praise the <span class="small-caps">Lord, who counsels me;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;even at night my heart instructs me.<br />
	<sup class="versenum">8&nbsp;</sup>I keep my eyes always on the <span class="small-caps">Lord.<br />
	&nbsp;&nbsp;&nbsp;&nbsp;With him at my right hand, I will not be shaken.</span></span></p>
	</div>

	<p><sup class="versenum">9&nbsp;</sup>Therefore my heart is glad and my tongue rejoices;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;my body also will rest secure,<br />
	<sup class="versenum">10&nbsp;</sup>because you will not abandon me to the realm of the dead,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;nor will you let your faithful one see decay.<br />
	<sup class="versenum">11&nbsp;</sup>You make known to me the path of life;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;you will fill me with joy in your presence,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;with eternal pleasures at your right hand.</p>
	<!-- end bible --></div>
	and teach a new song&nbsp;</li>
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

<ul>
	<li class="back"><span class="popup-link" @click = "popUp('pop2')"> John 16 </span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>&ldquo;All this I have told you so that you will not fall away.<sup class="versenum">2&nbsp;</sup>They will put you out of the synagogue; in fact, the time is coming when anyone who kills you will think they are offering a service to God.<sup class="versenum">3&nbsp;</sup>They will do such things because they have not known the Father or me.<sup class="versenum">4&nbsp;</sup>I have told you this, so that when their time comes you will remember that I warned you about them. I did not tell you this from the beginning because I was with you,<sup class="versenum">5&nbsp;</sup>but now I am going to him who sent me. None of you asks me, &lsquo;Where are you going?&rsquo;<sup class="versenum">6&nbsp;</sup>Rather, you are filled with grief because I have said these things.<sup class="versenum">7&nbsp;</sup>But very truly I tell you, it is for your good that I am going away. Unless I go away, the Advocate will not come to you; but if I go, I will send him to you.<sup class="versenum">8&nbsp;</sup>When he comes, he will prove the world to be in the wrong about sin and righteousness and judgment:<sup class="versenum">9&nbsp;</sup>about sin, because people do not believe in me;<sup class="versenum">10&nbsp;</sup>about righteousness, because I am going to the Father, where you can see me no longer;<sup class="versenum">11&nbsp;</sup>and about judgment, because the prince of this world now stands condemned.</p>

	<p><sup class="versenum">12&nbsp;</sup>&ldquo;I have much more to say to you, more than you can now bear.<sup class="versenum">13&nbsp;</sup>But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come.<sup class="versenum">14&nbsp;</sup>He will glorify me because it is from me that he will receive what he will make known to you.<sup class="versenum">15&nbsp;</sup>All that belongs to the Father is mine. That is why I said the Spirit will receive from me what he will make known to you.&rdquo;</p>

	<p><sup class="versenum">16&nbsp;</sup>Jesus went on to say, &ldquo;In a little while you will see me no more, and then after a little while you will see me.&rdquo;</p>

	<p><sup class="versenum">17&nbsp;</sup>At this, some of his disciples said to one another, &ldquo;What does he mean by saying, &lsquo;In a little while you will see me no more, and then after a little while you will see me,&rsquo; and &lsquo;Because I am going to the Father&rsquo;?&rdquo;<sup class="versenum">18&nbsp;</sup>They kept asking, &ldquo;What does he mean by &lsquo;a little while&rsquo;? We don&rsquo;t understand what he is saying.&rdquo;</p>

	<p><sup class="versenum">19&nbsp;</sup>Jesus saw that they wanted to ask him about this, so he said to them, &ldquo;Are you asking one another what I meant when I said, &lsquo;In a little while you will see me no more, and then after a little while you will see me&rsquo;?<sup class="versenum">20&nbsp;</sup>Very truly I tell you, you will weep and mourn while the world rejoices. You will grieve, but your grief will turn to joy.<sup class="versenum">21&nbsp;</sup>A woman giving birth to a child has pain because her time has come; but when her baby is born she forgets the anguish because of her joy that a child is born into the world.<sup class="versenum">22&nbsp;</sup>So with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy.<sup class="versenum">23&nbsp;</sup>In that day you will no longer ask me anything. Very truly I tell you, my Father will give you whatever you ask in my name.<sup class="versenum">24&nbsp;</sup>Until now you have not asked for anything in my name. Ask and you will receive, and your joy will be complete.</p>

	<p><sup class="versenum">25&nbsp;</sup>&ldquo;Though I have been speaking figuratively, a time is coming when I will no longer use this kind of language but will tell you plainly about my Father.<sup class="versenum">26&nbsp;</sup>In that day you will ask in my name. I am not saying that I will ask the Father on your behalf.<sup class="versenum">27&nbsp;</sup>No, the Father himself loves you because you have loved me and have believed that I came from God.<sup class="versenum">28&nbsp;</sup>I came from the Father and entered the world; now I am leaving the world and going back to the Father.&rdquo;</p>

	<p><sup class="versenum">29&nbsp;</sup>Then Jesus&rsquo; disciples said, &ldquo;Now you are speaking clearly and without figures of speech.<sup class="versenum">30&nbsp;</sup>Now we can see that you know all things and that you do not even need to have anyone ask you questions. This makes us believe that you came from God.&rdquo;</p>

	<p><sup class="versenum">31&nbsp;</sup>&ldquo;Do you now believe?&rdquo; Jesus replied.<sup class="versenum">32&nbsp;</sup>&ldquo;A time is coming and in fact has come when you will be scattered, each to your own home. You will leave me all alone. Yet I am not alone, for my Father is with me.</p>

	<p><sup class="versenum">33&nbsp;</sup>&ldquo;I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.&rdquo;</p>
	<!-- end bible --></div>
	teaches us that the Holy Spirit is actively at work in the hearts of those around us. He is showing them their sin. He is creating a desire to be right with God. He is creating a longing to avoid the fear of death, which is eternal judgment. He is tearing down the objections of their minds and hearts. Our job is to fish for those people through witnessing, finding those whose hearts are ready. Let&rsquo;s encourage each other by reminding each other that the Spirit is already working before we even go.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">The night before Jesus was crucified, he had dinner with his 12 closest disciples. He told them He was going away but that He was going to send the Counsellor, the Holy Spirit, to be with them forever. He teaches them that through the presence of the Holy Spirit living in them, He himself will be with them. This story uses the image of a vine and its branches to describe what our relationship with Jesus should be like.&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch John 15:1-11 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read John 15:1-11</button><div class="collapsed" id ="Text0">

<p><sup class="versenum">1&nbsp;</sup>I am the true vine, and my Father is the gardener.<sup class="versenum">2&nbsp;</sup>He cuts off every branch in me that bears no fruit, while every branch that does bear fruit he prunes so that it will be even more fruitful.<sup class="versenum">3&nbsp;</sup>You are already clean because of the word I have spoken to you.<sup class="versenum">4&nbsp;</sup>Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me.</p>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.<sup class="versenum">6&nbsp;</sup>If you do not remain in me, you are like a branch that is thrown away and withers; such branches are picked up, thrown into the fire and burned.<sup class="versenum">7&nbsp;</sup>If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you.<sup class="versenum">8&nbsp;</sup>This is to my Father&rsquo;s glory, that you bear much fruit, showing yourselves to be my disciples.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;As the Father has loved me, so have I loved you. Now remain in my love.<sup class="versenum">10&nbsp;</sup>If you keep my commands, you will remain in my love, just as I have kept my Father&rsquo;s commands and remain in his love.<sup class="versenum">11&nbsp;</sup>I have told you this so that my joy may be in you and that your joy may be complete.</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/107.mp4" type="button" class="external-movie">
         Watch &nbsp;John 15:1-11&nbsp;</button>
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

<p class="up">Without Jesus, we cannot do anything. We can only have a fruitful life when we depend on and remain in Him. This happens as we submit in obedience to His ways, allowing his life to flow in and through us so that we can bear fruit for the glory of God. In other words, we need to let the Spirit of Christ, the Holy Spirit, direct and empower our lives by faith.&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li>Review the principles of Spiritual Breathing from lesson 3, &ldquo;<!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/multiply1/multiply103', '#1')">
    Keeping in Step with the Spirit 
</span>
<!-- end linkInternal sdcard-->
&rdquo;</li>
	<li>Practice any skill or topic from previous lessons as needed&nbsp;</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you will tell the story or share the gospel with this week.</li>
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
<p>For further enrichment: Read <em><!-- begin linkInternal sdcard-->
<span id= "return2" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/tc/tc04', '#2')">
    Transferable Concept #4: How to Walk in the Spirit 
</span>
<!-- end linkInternal sdcard-->
</em> and discuss with another group member.</p>
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

			<td class="social" @click="share('lesson', 'Abiding in Jesus: ', '/content/M2/eng/multiply1/multiply107.html')">
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