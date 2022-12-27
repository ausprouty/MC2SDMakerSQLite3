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
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus as a Baby (Incarnation)</h1></div>
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
	<li class="back">reminding them of what God wants to do through them</li>
</ul>

<p class="back">Our vision is: <em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></p>

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
	<li>Ask the group to tell the story from last week.</li>
</ul>

<h2 class="up">Read</h2>

<p class="up"><em>Read or watch John 1:14-18 two times as others listen.</em></p>

<button id="Button0" type="button" class="collapsible bible">Read John 1:14-18</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">14&nbsp;</sup>The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.</p>

<p><sup class="versenum">15&nbsp;</sup>(John testified concerning him. He cried out, saying, &ldquo;This is the one I spoke about when I said, &lsquo;He who comes after me has surpassed me because he was before me.&rsquo;&rdquo;)<sup class="versenum">16&nbsp;</sup>Out of his fullness we have all received grace in place of grace already given.<sup class="versenum">17&nbsp;</sup>For the law was given through Moses; grace and truth came through Jesus Christ.<sup class="versenum">18&nbsp;</sup>No one has ever seen God, but the one and only Son, who is himself God and is in closest relationship with the Father, has made him known.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/202.mp4" type="button" class="external-movie">
         Watch &nbsp;John 1:14-18&nbsp;</button>
    <div class="collapsed"></div>

<h2>Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in Jesus story?</li>
	<li>What do we learn about the humanity or divinity of Jesus from this passage?</li>
	<li>How can we live differently now that we know this story?</li>
</ul>

<p>Additional Questions:</p>

<ul class="up">
	<li>What are his followers learning?</li>
	<li>What is Jesus modeling to us about life and ministry or godly leadership?</li>
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

<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop3')"> Colossians 1:15-20</span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">15&nbsp;</sup>The Son is the image of the invisible God, the firstborn over all creation.<sup class="versenum">16&nbsp;</sup>For in him all things were created: things in heaven and on earth, visible and invisible, whether thrones or powers or rulers or authorities; all things have been created through him and for him.<sup class="versenum">17&nbsp;</sup>He is before all things, and in him all things hold together.<sup class="versenum">18&nbsp;</sup>And he is the head of the body, the church; he is the beginning and the firstborn from among the dead, so that in everything he might have the supremacy.<sup class="versenum">19&nbsp;</sup>For God was pleased to have all his fullness dwell in him,<sup class="versenum">20&nbsp;</sup>and through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.</p>
	</div>
	</div>
	<!-- end bible --></div>
	and <span class="popup-link" @click = "popUp('pop4')"> Hebrews 2:17</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">17&nbsp;</sup>For this reason he had to be made like them, fully human in every way, in order that he might become a merciful and faithful high priest in service to God, and that he might make atonement for the sins of the people.</p>
	</div>
	</div>
	<!-- end bible --></div>
	Jesus leaves heaven&rsquo;s glory for earth&rsquo;s insignificance. The Bible says that &ldquo;He was made like us in every way&rdquo;. Jesus made a huge sacrifice to become one of us! The Creator enters creation, so that He might be our high priest and our way to God (<span class="popup-link" @click = "popUp('pop5')"> John 14:6</span>).

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">6&nbsp;</sup>Jesus answered, &ldquo;I am the way and the truth and the life. No one comes to the Father except through me.</p>
	</div>
	</div>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<h2 class="up">Further Study:</h2>

<div class="popup invisible" id="pop6"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">1 </sup>In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world.<sup class="versenum">2&nbsp;</sup>(This was the first census that took place while Quirinius was governor of Syria.)<sup class="versenum">3&nbsp;</sup>And everyone went to their own town to register.</p>

<p><sup class="versenum">4&nbsp;</sup>So Joseph also went up from the town of Nazareth in Galilee to Judea, to Bethlehem the town of David, because he belonged to the house and line of David.<sup class="versenum">5&nbsp;</sup>He went there to register with Mary, who was pledged to be married to him and was expecting a child.<sup class="versenum">6&nbsp;</sup>While they were there, the time came for the baby to be born,<sup class="versenum">7&nbsp;</sup>and she gave birth to her firstborn, a son. She wrapped him in cloths and placed him in a manger, because there was no guest room available for them.</p>

<p><sup class="versenum">8&nbsp;</sup>And there were shepherds living out in the fields nearby, keeping watch over their flocks at night.<sup class="versenum">9&nbsp;</sup>An angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were terrified.<sup class="versenum">10&nbsp;</sup>But the angel said to them, &ldquo;Do not be afraid. I bring you good news that will cause great joy for all the people.<sup class="versenum">11&nbsp;</sup>Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.<sup class="versenum">12&nbsp;</sup>This will be a sign to you: You will find a baby wrapped in cloths and lying in a manger.&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>Suddenly a great company of the heavenly host appeared with the angel, praising God and saying,</p>

<p><sup class="versenum">14&nbsp;</sup>&ldquo;Glory to God in the highest heaven,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and on earth peace to those on whom his favor rests.&rdquo;</p>
</div>

<p><sup class="versenum">15&nbsp;</sup>When the angels had left them and gone into heaven, the shepherds said to one another, &ldquo;Let&rsquo;s go to Bethlehem and see this thing that has happened, which the Lord has told us about.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>So they hurried off and found Mary and Joseph, and the baby, who was lying in the manger.<sup class="versenum">17&nbsp;</sup>When they had seen him, they spread the word concerning what had been told them about this child,<sup class="versenum">18&nbsp;</sup>and all who heard it were amazed at what the shepherds said to them.<sup class="versenum">19&nbsp;</sup>But Mary treasured up all these things and pondered them in her heart.<sup class="versenum">20&nbsp;</sup>The shepherds returned, glorifying and praising God for all the things they had heard and seen, which were just as they had been told.</p>
</div>
</div>
<!-- end bible --></div>

<ul>
	<li><span class="popup-link" @click = "popUp('pop6')"> Luke 2:1-20</span></li>
	<li><span class="popup-link" @click = "popUp('pop7')"> Matthew 1: 18-25</span>
	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">18&nbsp;</sup>This is how the birth of Jesus the Messiah came about: His mother Mary was pledged to be married to Joseph, but before they came together, she was found to be pregnant through the Holy Spirit.<sup class="versenum">19&nbsp;</sup>Because Joseph her husband was faithful to the law, and yet did not want to expose her to public disgrace, he had in mind to divorce her quietly.</p>

	<p><sup class="versenum">20&nbsp;</sup>But after he had considered this, an angel of the Lord appeared to him in a dream and said, &ldquo;Joseph son of David, do not be afraid to take Mary home as your wife, because what is conceived in her is from the Holy Spirit.<sup class="versenum">21&nbsp;</sup>She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins.&rdquo;</p>

	<p><sup class="versenum">22&nbsp;</sup>All this took place to fulfill what the Lord had said through the prophet:<sup class="versenum">23&nbsp;</sup>&ldquo;The virgin will conceive and give birth to a son, and they will call him Immanuel&rdquo; (which means &ldquo;God with us&rdquo;).</p>

	<p><sup class="versenum">24&nbsp;</sup>When Joseph woke up, he did what the angel of the Lord had commanded him and took Mary home as his wife.<sup class="versenum">25&nbsp;</sup>But he did not consummate their marriage until she gave birth to a son. And he gave him the name Jesus.</p>
	</div>
	</div>
	<!-- end bible --></div>
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
		<li>Foundational Bible Studies (<!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/multiply1/index', '#1')">
    Multiply 1 
</span>
<!-- end linkInternal sdcard-->
)</li>
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

			<td class="social" @click="share('lesson', 'Jesus as a Baby (Incarnation): ', '/content/M2/eng/multiply2/multiply202.html')">
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