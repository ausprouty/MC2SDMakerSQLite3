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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>Boldly Identifying with Jesus</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 4: Boldly Identifying with Jesus-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">Psalm 29:2 &ldquo;Give honour to the Lord and worship Him in the glory of His holiness.&rdquo; Let&rsquo;s pause and give honour to the Lord by praising Him.</p>

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
	<li class="nobreak-final-final">The Lord not only loves us, He has a vision for our lives. What is that vision? It is to be like Christ. <span class="popup-link" @click = "popUp('pop1')"> Romans 8:29</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">29&nbsp;</sup>For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters.</p>
	</div>
	</div>
	<!-- end bible --></div>
	says that His plan is that we all conform to the image of Christ, to experience and reflect the Father like Christ did. And the great news is that this work of Christlikeness is God&rsquo;s work. <span class="popup-link" @click = "popUp('pop2')"> Philippians 1:6</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">6&nbsp;</sup>being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.</p>
	</div>
	</div>
	<!-- end bible --></div>
	promises that He who began this good work in you, will be faithful to complete it! Be encouraged that God will work in your life to become like Christ.&nbsp;</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">A follower of Jesus named Philip had been sharing the gospel with people in an area of Israel called Samaria. The Lord interrupted his ministry and told him to go south along the road leading toward Egypt. When he arrived, he found an African leader who was traveling back to his home country. This story tells us what happened.&nbsp;</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch Acts 8:34-40<strong> </strong>two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Acts 8:34-40</button><div class="collapsed" id ="Text0">

<p><sup>34&nbsp;</sup>The eunuch asked Philip, &ldquo;Tell me, please, who is the prophet talking about, himself or someone else?&rdquo;<sup class="versenum">35&nbsp;</sup>Then Philip began with that very passage of Scripture and told him the good news about Jesus.</p>

<p><sup class="versenum">36&nbsp;</sup>As they traveled along the road, they came to some water and the eunuch said, &ldquo;Look, here is water. What can stand in the way of my being baptized?&rdquo;<sup class="versenum">[37]&nbsp;</sup><sup class="versenum">38&nbsp;</sup>And he gave orders to stop the chariot. Then both Philip and the eunuch went down into the water and Philip baptized him.<sup class="versenum">39&nbsp;</sup>When they came up out of the water, the Spirit of the Lord suddenly took Philip away, and the eunuch did not see him again, but went on his way rejoicing.<sup class="versenum">40&nbsp;</sup>Philip, however, appeared at Azotus and traveled about, preaching the gospel in all the towns until he reached Caesarea.</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/104.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 8:34-40&nbsp;</button>
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
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop3')"> Matthew 3:13-17</span>.&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">13&nbsp;</sup>Then Jesus came from Galilee to the Jordan to be baptized by John.<sup class="versenum">14&nbsp;</sup>But John tried to deter him, saying, &ldquo;I need to be baptized by you, and do you come to me?&rdquo;</p>

	<p><sup class="versenum">15&nbsp;</sup>Jesus replied, &ldquo;Let it be so now; it is proper for us to do this to fulfill all righteousness.&rdquo; Then John consented.</p>

	<p><sup class="versenum">16&nbsp;</sup>As soon as Jesus was baptized, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God descending like a dove and alighting on him.<sup class="versenum">17&nbsp;</sup>And a voice from heaven said, &ldquo;This is my Son, whom I love; with him I am well pleased.&rdquo;</p>
	</div>
	</div>
	<!-- end bible --></div>
	Jesus himself was baptized and modelled it to His followers. Ever since the time of Christ, everyone who begins to follow Him has made this commitment. Our willingness to be baptized shows others that there has been a real change in our lives. It symbolizes our bold identification with the death and resurrection of Jesus (<span class="popup-link" @click = "popUp('pop4')"> Romans 6:4-5</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">4&nbsp;</sup>We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.</p>

	<p><sup class="versenum">5&nbsp;</sup>For if we have been united with him in a death like his, we will certainly also be united with him in a resurrection like his</p>
	</div>
	</div>
	<!-- end bible --></div>
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

<ul class="forward">
	<li class="forward">The Holy Spirit is working in the lives of people you know to draw them to Jesus. The Holy Spirit wants to express the love of the Father through you so they can experience Jesus and connect with Him personally. The daily act of pray, care, share is the first step in this process (<span class="popup-link" @click = "popUp('pop5')"> Acts 17:27</span>).&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">27&nbsp;</sup>God did this so that they would seek him and perhaps reach out for him and find him, though he is not far from any one of us.</p>
	</div>
	</div>
	</div>
	</li>
	<li>Use your daisy chain over the next month to love, pray, and care daily. Write down anything you learn during this process.</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you will tell the story or share the gospel with this week.</li>
	<li>If someone wants to be baptized, set a time to do this.</li>
	<li>Write &ldquo;I will by when&rdquo; statements and tell them to your group.</li>
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

			<td class="social" @click="share('lesson', 'Boldly Identifying with Jesus: ', '/content/M2/eng/multiply1/multiply104.html')">
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