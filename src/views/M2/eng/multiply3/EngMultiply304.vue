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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>Peter Addresses the Crowd</h1></div>
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

<p>Encourage loving accountability to obey Jesus</p>

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
	<li class="up">Ask the group to tell the story from last week.</li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch Acts 2:14-41 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 2:14-41</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Peter Addresses the Crowd</h3>

<p><sup class="versenum">14&nbsp;</sup>Then Peter stood up with the Eleven, raised his voice and addressed the crowd: &ldquo;Fellow Jews and all of you who live in Jerusalem, let me explain this to you; listen carefully to what I say.<sup class="versenum">15&nbsp;</sup>These people are not drunk, as you suppose. It&rsquo;s only nine in the morning!<sup class="versenum">16&nbsp;</sup>No, this is what was spoken by the prophet Joel:</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;&lsquo;In the last days, God says,<br />
&nbsp;&nbsp;&nbsp;&nbsp;I will pour out my Spirit on all people.<br />
Your sons and daughters will prophesy,<br />
&nbsp;&nbsp;&nbsp;&nbsp;your young men will see visions,<br />
&nbsp;&nbsp;&nbsp;&nbsp;your old men will dream dreams.<br />
<sup class="versenum">18&nbsp;</sup>Even on my servants, both men and women,<br />
&nbsp;&nbsp;&nbsp;&nbsp;I will pour out my Spirit in those days,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and they will prophesy.<br />
<sup class="versenum">19&nbsp;</sup>I will show wonders in the heavens above<br />
&nbsp;&nbsp;&nbsp;&nbsp;and signs on the earth below,<br />
&nbsp;&nbsp;&nbsp;&nbsp;blood and fire and billows of smoke.<br />
<sup class="versenum">20&nbsp;</sup>The sun will be turned to darkness<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the moon to blood<br />
&nbsp;&nbsp;&nbsp;&nbsp;before the coming of the great and glorious day of the Lord.<br />
<sup class="versenum">21&nbsp;</sup>And everyone who calls<br />
&nbsp;&nbsp;&nbsp;&nbsp;on the name of the Lord will be saved.&rsquo;</p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;Fellow Israelites, listen to this: Jesus of Nazareth was a man accredited by God to you by miracles, wonders and signs, which God did among you through him, as you yourselves know.<sup class="versenum">23&nbsp;</sup>This man was handed over to you by God&rsquo;s deliberate plan and foreknowledge; and you, with the help of wicked men, put him to death by nailing him to the cross.<sup class="versenum">24&nbsp;</sup>But God raised him from the dead, freeing him from the agony of death, because it was impossible for death to keep its hold on him.<sup class="versenum">25&nbsp;</sup>David said about him:</p>

<p>&ldquo;&lsquo;I saw the Lord always before me.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Because he is at my right hand,<br />
&nbsp;&nbsp;&nbsp;&nbsp;I will not be shaken.<br />
<sup class="versenum">26&nbsp;</sup>Therefore my heart is glad and my tongue rejoices;<br />
&nbsp;&nbsp;&nbsp;&nbsp;my body also will rest in hope,<br />
<sup class="versenum">27&nbsp;</sup>because you will not abandon me to the realm of the dead,<br />
&nbsp;&nbsp;&nbsp;&nbsp;you will not let your holy one see decay.<br />
<sup class="versenum">28&nbsp;</sup>You have made known to me the paths of life;<br />
&nbsp;&nbsp;&nbsp;&nbsp;you will fill me with joy in your presence.&rsquo;</p>

<p><sup class="versenum">29&nbsp;</sup>&ldquo;Fellow Israelites, I can tell you confidently that the patriarch David died and was buried, and his tomb is here to this day.<sup class="versenum">30&nbsp;</sup>But he was a prophet and knew that God had promised him on oath that he would place one of his descendants on his throne.<sup class="versenum">31&nbsp;</sup>Seeing what was to come, he spoke of the resurrection of the Messiah, that he was not abandoned to the realm of the dead, nor did his body see decay.<sup class="versenum">32&nbsp;</sup>God has raised this Jesus to life, and we are all witnesses of it.<sup class="versenum">33&nbsp;</sup>Exalted to the right hand of God, he has received from the Father the promised Holy Spirit and has poured out what you now see and hear.<sup class="versenum">34&nbsp;</sup>For David did not ascend to heaven, and yet he said,</p>

<p>&ldquo;&lsquo;The Lord said to my Lord:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Sit at my right hand<br />
<sup class="versenum">35&nbsp;</sup>until I make your enemies<br />
&nbsp;&nbsp;&nbsp;&nbsp;a footstool for your feet.&rdquo;&rsquo;</p>

<p><sup class="versenum">36&nbsp;</sup>&ldquo;Therefore let all Israel be assured of this: God has made this Jesus, whom you crucified, both Lord and Messiah.&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>When the people heard this, they were cut to the heart and said to Peter and the other apostles, &ldquo;Brothers, what shall we do?&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>Peter replied, &ldquo;Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.<sup class="versenum">39&nbsp;</sup>The promise is for you and your children and for all who are far off&mdash;for all whom the Lord our God will call.&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>With many other words he warned them; and he pleaded with them, &ldquo;Save yourselves from this corrupt generation.&rdquo;<sup class="versenum">41&nbsp;</sup>Those who accepted his message were baptized, and about three thousand were added to their number that day.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/304.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 2:14-41&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in the story?</li>
	<li>What is being modeled about a Spirit-dependent life, making disciples or leadership?</li>
	<li>How can we live differently now that we know this story?</li>
</ul>

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
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="up">Just weeks earlier, Jesus had opened the minds of the disciples to understand what scripture said about Him (<span class="popup-link" @click = "popUp('pop1')"> Luke 24:44-49</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">44&nbsp;</sup>He said to them, &ldquo;This is what I told you while I was still with you: Everything must be fulfilled that is written about me in the Law of Moses, the Prophets and the Psalms.&rdquo;</p>

<p><sup class="versenum">45&nbsp;</sup>Then he opened their minds so they could understand the Scriptures.<sup class="versenum">46&nbsp;</sup>He told them, &ldquo;This is what is written: The Messiah will suffer and rise from the dead on the third day,<sup class="versenum">47&nbsp;</sup>and repentance for the forgiveness of sins will be preached in his name to all nations, beginning at Jerusalem.<sup class="versenum">48&nbsp;</sup>You are witnesses of these things.<sup class="versenum">49&nbsp;</sup>I am going to send you what my Father has promised; but stay in the city until you have been clothed with power from on high.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
)Now, through the Spirit Peter was able to use scripture to interpret the recent events (<span class="popup-link" @click = "popUp('pop2')"> Joel 2:28-32</span>),

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">28&nbsp;</sup>&ldquo;And afterward,<br />
&nbsp;&nbsp;&nbsp;&nbsp;I will pour out my Spirit on all people.<br />
Your sons and daughters will prophesy,<br />
&nbsp;&nbsp;&nbsp;&nbsp;your old men will dream dreams,<br />
&nbsp;&nbsp;&nbsp;&nbsp;your young men will see visions.<br />
<sup class="versenum">29&nbsp;</sup>Even on my servants, both men and women,<br />
&nbsp;&nbsp;&nbsp;&nbsp;I will pour out my Spirit in those days.<br />
<sup class="versenum">30&nbsp;</sup>I will show wonders in the heavens<br />
&nbsp;&nbsp;&nbsp;&nbsp;and on the earth,<br />
&nbsp;&nbsp;&nbsp;&nbsp;blood and fire and billows of smoke.<br />
<sup class="versenum">31&nbsp;</sup>The sun will be turned to darkness<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the moon to blood<br />
&nbsp;&nbsp;&nbsp;&nbsp;before the coming of the great and dreadful day of the <span class="small-caps">Lord.<br />
<sup class="versenum">32&nbsp;</sup>And everyone who calls<br />
&nbsp;&nbsp;&nbsp;&nbsp;on the name of the <span class="small-caps">Lord will be saved;<br />
for on Mount Zion and in Jerusalem<br />
&nbsp;&nbsp;&nbsp;&nbsp;there will be deliverance,<br />
&nbsp;&nbsp;&nbsp;&nbsp;as the <span class="small-caps">Lord has said,<br />
even among the survivors<br />
&nbsp;&nbsp;&nbsp;&nbsp;whom the <span class="small-caps">Lord calls.</span></span></span></span></p>
</div>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop3')"> Psalm 16:8-11</span>,&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<div>
<div>
<p><sup class="versenum">8&nbsp;</sup>I keep my eyes always on the <span class="small-caps">Lord.<br />
&nbsp;&nbsp;&nbsp;&nbsp;With him at my right hand, I will not be shaken.</span></p>
</div>

<p><sup class="versenum">9&nbsp;</sup>Therefore my heart is glad and my tongue rejoices;<br />
&nbsp;&nbsp;&nbsp;&nbsp;my body also will rest secure,<br />
<sup class="versenum">10&nbsp;</sup>because you will not abandon me to the realm of the dead,<br />
&nbsp;&nbsp;&nbsp;&nbsp;nor will you let your faithful one see decay.<br />
<sup class="versenum">11&nbsp;</sup>You make known to me the path of life;<br />
&nbsp;&nbsp;&nbsp;&nbsp;you will fill me with joy in your presence,<br />
&nbsp;&nbsp;&nbsp;&nbsp;with eternal pleasures at your right hand.</p>
</div>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop4')"> Psalm 110:1</span>).

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<div>
<div>
<h4>Of David. A psalm.</h4>

<p><sup class="versenum">1&nbsp;</sup>The <span class="small-caps">Lord says to my lord:</span></p>
</div>

<p>&ldquo;Sit at my right hand<br />
&nbsp;&nbsp;&nbsp;&nbsp;until I make your enemies<br />
&nbsp;&nbsp;&nbsp;&nbsp;a footstool for your feet.&rdquo;</p>
</div>
</div>
</div>
<!-- end bible --></div>
Jewish pilgrims from every part of the Roman world heard the Gospel message of Jesus&rsquo; life, ministry, death, resurrection, and offer of salvation from sins. Peter pleaded with the crowd to repent from wrong attitudes and behaviors, and to identify with Jesus by being baptized in His name. He told the crowd the gospel message was not only for them but for their friends, family and everyone else too. The gospel message offers two free gifts: forgiveness of sins, which restores our relationship to God, and the Holy Spirit, who is God&rsquo;s indwelling presence. The community of disciples experienced explosive growth from about 120 to 3,000 in one day. Jesus is already helping to ensure the success of the Great Commission by saving people from all parts of the Roman world.

<p>&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><p class="forward">+ Preparing for the Mission</p></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>Practice needed skills or previous topics to help prepare to minister to others:</p>

<ul>
	<li>Prayer, Care, Share</li>
	<li>Gospel</li>
	<li>Foundational Bible Studies.</li>
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
        @keyup="this.addNote('note2Text')"
        id="note2Text"
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

			<td class="social" @click="share('lesson', 'Peter Addresses the Crowd: ', '/content/M2/eng/multiply3/multiply304.html')">
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