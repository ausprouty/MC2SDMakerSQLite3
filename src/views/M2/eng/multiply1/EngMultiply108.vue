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
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>Amazing Question and Care </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 8: Amazing Question and Care-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="back">Read <span class="popup-link" @click = "popUp('pop1')"> Psalm 33:1-5</span>&nbsp;and sing 1-2 songs</li>
</ul>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<p><sup class="versenum">1&nbsp;</sup>Sing joyfully to the <span class="small-caps">Lord</span>, you righteous;<br />
&nbsp;&nbsp;&nbsp;&nbsp;it is fitting for the upright to praise him.<br />
<sup class="versenum">2&nbsp;</sup>Praise the <span class="small-caps">Lord</span> with the harp;<br />
&nbsp;&nbsp;&nbsp;&nbsp;make music to him on the ten-stringed lyre.<br />
<sup class="versenum">3&nbsp;</sup>Sing to him a new song;<br />
&nbsp;&nbsp;&nbsp;&nbsp;play skillfully, and shout for joy.</p>

<p><sup class="versenum">4&nbsp;</sup>For the word of the <span class="small-caps">Lord</span> is right and true;<br />
&nbsp;&nbsp;&nbsp;&nbsp;he is faithful in all he does.<br />
<sup class="versenum">5&nbsp;</sup>The <span class="small-caps">Lord </span>loves righteousness and justice;<br />
&nbsp;&nbsp;&nbsp;&nbsp;the earth is full of his unfailing love.</p>
<!-- end bible --></div>

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

<p class="back">The first words of Jesus in Mark were telling people to &ldquo;repent.&rdquo; This means to change our whole way of thinking because God&rsquo;s ways are so different from ours. One area is how we view ourselves. We need a new understanding of life with God and what He can do in our lives. The next words of Jesus were &quot;Follow Me, and I will make you fishers of men.&quot; Every disciple of Jesus is called to live out this twin call to follow Him and fish for men. Our sacrificial commitment to Jesus transforms daily life and all our relationships. Let&rsquo;s encourage each other to continually repent, follow and fish!</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">A couple of weeks before Jesus&rsquo; death, He and His followers were in a town called Jericho. As they left to travel the 24 km up the mountain to Jerusalem, a blind man calls out to Jesus trying to get his attention. This story tells us what happened next.</p>

</div>

<h2 class="up">Read</h2>

<p>Read or watch Luke 18:35-43 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 18:35-43</button><div class="collapsed" id ="Text0">

<p><sup>35&nbsp;</sup>As Jesus approached Jericho, a blind man was sitting by the roadside begging.<sup class="versenum">36&nbsp;</sup>When he heard the crowd going by, he asked what was happening.<sup class="versenum">37&nbsp;</sup>They told him, &ldquo;Jesus of Nazareth is passing by.&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>He called out, &ldquo;Jesus, Son of David, have mercy on me!&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>Those who led the way rebuked him and told him to be quiet, but he shouted all the more, &ldquo;Son of David, have mercy on me!&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>Jesus stopped and ordered the man to be brought to him. When he came near, Jesus asked him,<sup class="versenum">41&nbsp;</sup>&ldquo;What do you want me to do for you?&rdquo;</p>

<p>&ldquo;Lord, I want to see,&rdquo; he replied.</p>

<p><sup class="versenum">42&nbsp;</sup>Jesus said to him, &ldquo;Receive your sight; your faith has healed you.&rdquo;<sup class="versenum">43&nbsp;</sup>Immediately he received his sight and followed Jesus, praising God. When all the people saw it, they also praised God.</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/108.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 18:35-43&nbsp;</button>
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
	<li class="nobreak-final-final">Jesus has great compassion for people! He asked the blind man an amazing question, &ldquo;What do you want me to do for you?&rdquo; Then He met the man&rsquo;s needs. In <span class="popup-link" @click = "popUp('pop2')"> John 14:12-13</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father.<sup class="versenum">13&nbsp;</sup>And I will do whatever you ask in my name, so that the Father may be glorified in the Son.</p>
	<!-- end bible --></div>
	Jesus said, &ldquo;Whoever believes in me will also do the works that I do; and greater works than these will he do, because I am going to the Father. Whatever you ask in my name, this I will do that the Father may be glorified in the Son.&rdquo; As followers of Jesus, we take the initiative to show compassion for people in the power of the Spirit by asking people the same Amazing Question and by meeting their needs in practical ways. This skill can be used in field one of the Kingdom Growth Process.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li>Practice telling the story and using the Amazing Question. Include practice on transitioning a conversation to the story.</li>
	<li>Optional: tell the story by using the JESUS video clip</li>
	<li>Update your Network List with names of additional people if needed.</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you can pray and care for using the Amazing Question.</li>
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

			<td class="social" @click="share('lesson', 'Amazing Question and Care : ', '/content/M2/eng/multiply1/multiply108.html')">
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