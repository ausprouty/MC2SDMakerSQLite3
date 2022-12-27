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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus and God's Word</h1></div>
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

<p class="back"><span>Our vision is: <em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></span></p>

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
	<li class="up"><span>Ask the group to tell the story from last week.</span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch Luke 4:1-13 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 4:1-13</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Is Tested in the Wilderness</h3>

<p><sup class="versenum">1 </sup>Jesus, full of the Holy Spirit, left the Jordan and was led by the Spirit into the wilderness,<sup class="versenum">2&nbsp;</sup>where for forty days he was tempted by the devil. He ate nothing during those days, and at the end of them he was hungry.</p>

<p><sup class="versenum">3&nbsp;</sup>The devil said to him, &ldquo;If you are the Son of God, tell this stone to become bread.&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Jesus answered, &ldquo;It is written: &lsquo;Man shall not live on bread alone.&rsquo;&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>The devil led him up to a high place and showed him in an instant all the kingdoms of the world.<sup class="versenum">6&nbsp;</sup>And he said to him, &ldquo;I will give you all their authority and splendor; it has been given to me, and I can give it to anyone I want to.<sup class="versenum">7&nbsp;</sup>If you worship me, it will all be yours.&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>Jesus answered, &ldquo;It is written: &lsquo;Worship the Lord your God and serve him only.&rsquo;&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>The devil led him to Jerusalem and had him stand on the highest point of the temple. &ldquo;If you are the Son of God,&rdquo; he said, &ldquo;throw yourself down from here.<sup class="versenum">10&nbsp;</sup>For it is written:</p>

<p>&ldquo;&lsquo;He will command his angels concerning you<br />
&nbsp;&nbsp;&nbsp;&nbsp;to guard you carefully;<br />
<sup class="versenum">11&nbsp;</sup>they will lift you up in their hands,<br />
&nbsp;&nbsp;&nbsp;&nbsp;so that you will not strike your foot against a stone.&rsquo;&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>Jesus answered, &ldquo;It is said: &lsquo;Do not put the Lord your God to the test.&rsquo;&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>When the devil had finished all this tempting, he left him until an opportune time.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/207.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 4:1-13&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li><span>What caught your attention or what did you like best? Why?</span></li>
	<li><span>What is new or has developed at this point in Jesus story?</span></li>
	<li><span>What do we learn about the humanity or divinity of Jesus from this passage?</span></li>
	<li><span>How can we live differently now that we know this story?</span></li>
</ul>

<p><span>Additional Questions:</span></p>

<ul class="up">
	<li><span>What are his followers learning?</span></li>
	<li><span>What is Jesus modeling to us about life and ministry or godly leadership?</span></li>
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
	<li class="nobreak-final-final">Jesus was led into the wilderness to be tempted by Satan himself. After 40 days of temptations of every kind, the enemy comes again to Jesus. Jesus is now weak, tired and very, very hungry. Satan&rsquo;s temptation was a direct attack on the truth of God&rsquo;s words. This has been Satan&rsquo;s strategy from the beginning when he used it with Adam and Eve (<span class="popup-link" @click = "popUp('pop12')"> Genesis 3</span>).&nbsp;

	<div class="popup invisible" id="pop12"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<div>
	<p><sup class="versenum">1 </sup>Now the serpent was more crafty than any of the wild animals the <span class="small-caps">Lord God had made. He said to the woman, &ldquo;Did God really say, &lsquo;You must not eat from any tree in the garden&rsquo;?&rdquo;</span></p>

	<p><sup class="versenum">2&nbsp;</sup>The woman said to the serpent, &ldquo;We may eat fruit from the trees in the garden,<sup class="versenum">3&nbsp;</sup>but God did say, &lsquo;You must not eat fruit from the tree that is in the middle of the garden, and you must not touch it, or you will die.&rsquo;&rdquo;</p>

	<p><sup class="versenum">4&nbsp;</sup>&ldquo;You will not certainly die,&rdquo; the serpent said to the woman.<sup class="versenum">5&nbsp;</sup>&ldquo;For God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil.&rdquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it.<sup class="versenum">7&nbsp;</sup>Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves.</p>

	<p><sup class="versenum">8&nbsp;</sup>Then the man and his wife heard the sound of the <span class="small-caps">Lord God as he was walking in the garden in the cool of the day, and they hid from the <span class="small-caps">Lord God among the trees of the garden.<sup class="versenum">9&nbsp;</sup>But the <span class="small-caps">Lord God called to the man, &ldquo;Where are you?&rdquo;</span></span></span></p>

	<p><sup class="versenum">10&nbsp;</sup>He answered, &ldquo;I heard you in the garden, and I was afraid because I was naked; so I hid.&rdquo;</p>

	<p><sup class="versenum">11&nbsp;</sup>And he said, &ldquo;Who told you that you were naked? Have you eaten from the tree that I commanded you not to eat from?&rdquo;</p>

	<p><sup class="versenum">12&nbsp;</sup>The man said, &ldquo;The woman you put here with me&mdash;she gave me some fruit from the tree, and I ate it.&rdquo;</p>

	<p><sup class="versenum">13&nbsp;</sup>Then the <span class="small-caps">Lord God said to the woman, &ldquo;What is this you have done?&rdquo;</span></p>

	<p>The woman said, &ldquo;The serpent deceived me, and I ate.&rdquo;</p>

	<p><sup class="versenum">14&nbsp;</sup>So the <span class="small-caps">Lord God said to the serpent, &ldquo;Because you have done this,</span></p>

	<p>&ldquo;Cursed are you above all livestock<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and all wild animals!<br />
	You will crawl on your belly<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and you will eat dust<br />
	&nbsp;&nbsp;&nbsp;&nbsp;all the days of your life.<br />
	<sup class="versenum">15&nbsp;</sup>And I will put enmity<br />
	&nbsp;&nbsp;&nbsp;&nbsp;between you and the woman,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and between your offspring and hers;<br />
	he will crush your head,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and you will strike his heel.&rdquo;</p>
	</div>

	<p><sup class="versenum">16&nbsp;</sup>To the woman he said,</p>

	<p>&ldquo;I will make your pains in childbearing very severe;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;with painful labor you will give birth to children.<br />
	Your desire will be for your husband,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and he will rule over you.&rdquo;</p>
	</div>

	<p><sup class="versenum">17&nbsp;</sup>To Adam he said, &ldquo;Because you listened to your wife and ate fruit from the tree about which I commanded you, &lsquo;You must not eat from it,&rsquo;</p>

	<p>&ldquo;Cursed is the ground because of you;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;through painful toil you will eat food from it<br />
	&nbsp;&nbsp;&nbsp;&nbsp;all the days of your life.<br />
	<sup class="versenum">18&nbsp;</sup>It will produce thorns and thistles for you,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and you will eat the plants of the field.<br />
	<sup class="versenum">19&nbsp;</sup>By the sweat of your brow<br />
	&nbsp;&nbsp;&nbsp;&nbsp;you will eat your food<br />
	until you return to the ground,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;since from it you were taken;<br />
	for dust you are<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and to dust you will return.&rdquo;</p>
	</div>

	<p><sup class="versenum">20&nbsp;</sup>Adam named his wife Eve, because she would become the mother of all the living.</p>

	<p><sup class="versenum">21&nbsp;</sup>The <span class="small-caps">Lord God made garments of skin for Adam and his wife and clothed them.<sup class="versenum">22&nbsp;</sup>And the <span class="small-caps">Lord God said, &ldquo;The man has now become like one of us, knowing good and evil. He must not be allowed to reach out his hand and take also from the tree of life and eat, and live forever.&rdquo;<sup class="versenum">23&nbsp;</sup>So the <span class="small-caps">Lord God banished him from the Garden of Eden to work the ground from which he had been taken.<sup class="versenum">24&nbsp;</sup>After he drove the man out, he placed on the east side of the Garden of Eden cherubim and a flaming sword flashing back and forth to guard the way to the tree of life.</span></span></span></p>
	</div>
	</div>
	</div>
	Jesus models to us how to quote God&rsquo;s promises to deal with attacks of the enemy.</li>
</ul>

</div>

<p class="up"><span class="for-enrichment">Further Study: <span class="popup-link" @click = "popUp('pop9')"> Matthew 4:1-11</span> </span></p>

<div class="popup invisible" id="pop9"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">1 </sup>Then Jesus was led by the Spirit into the wilderness to be tempted by the devil.<sup class="versenum">2&nbsp;</sup>After fasting forty days and forty nights, he was hungry.<sup class="versenum">3&nbsp;</sup>The tempter came to him and said, &ldquo;If you are the Son of God, tell these stones to become bread.&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Jesus answered, &ldquo;It is written: &lsquo;Man shall not live on bread alone, but on every word that comes from the mouth of God.&rsquo;&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>Then the devil took him to the holy city and had him stand on the highest point of the temple.<sup class="versenum">6&nbsp;</sup>&ldquo;If you are the Son of God,&rdquo; he said, &ldquo;throw yourself down. For it is written:</p>

<p>&ldquo;&lsquo;He will command his angels concerning you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and they will lift you up in their hands,<br />
&nbsp;&nbsp;&nbsp;&nbsp;so that you will not strike your foot against a stone.&rsquo;&rdquo;</p>
</div>

<p><sup class="versenum">7&nbsp;</sup>Jesus answered him, &ldquo;It is also written: &lsquo;Do not put the Lord your God to the test.&rsquo;&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>Again, the devil took him to a very high mountain and showed him all the kingdoms of the world and their splendor.<sup class="versenum">9&nbsp;</sup>&ldquo;All this I will give you,&rdquo; he said, &ldquo;if you will bow down and worship me.&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>Jesus said to him, &ldquo;Away from me, Satan! For it is written: &lsquo;Worship the Lord your God, and serve him only.&rsquo;&rdquo;</p>

<p><sup class="versenum">11&nbsp;</sup>Then the devil left him, and angels came and attended him.</p>
</div>
</div>
<!-- end bible --></div>

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

			<td class="social" @click="share('lesson', 'Jesus and God\'s Word: ', '/content/M2/eng/multiply2/multiply207.html')">
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