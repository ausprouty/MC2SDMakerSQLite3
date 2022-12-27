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
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>Philip Makes Disciples and Plants a Church in Samaria</h1></div>
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
	<li class="up">Read or watch Acts 8:4-25 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 8:4-25</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Philip in Samaria</h3>

<p><sup class="versenum">4&nbsp;</sup>Those who had been scattered preached the word wherever they went.<sup class="versenum">5&nbsp;</sup>Philip went down to a city in Samaria and proclaimed the Messiah there.<sup class="versenum">6&nbsp;</sup>When the crowds heard Philip and saw the signs he performed, they all paid close attention to what he said.<sup class="versenum">7&nbsp;</sup>For with shrieks, impure spirits came out of many, and many who were paralyzed or lame were healed.<sup class="versenum">8&nbsp;</sup>So there was great joy in that city.</p>

<h3>Simon the Sorcerer</h3>

<p><sup class="versenum">9&nbsp;</sup>Now for some time a man named Simon had practiced sorcery in the city and amazed all the people of Samaria. He boasted that he was someone great,<sup class="versenum">10&nbsp;</sup>and all the people, both high and low, gave him their attention and exclaimed, &ldquo;This man is rightly called the Great Power of God.&rdquo;<sup class="versenum">11&nbsp;</sup>They followed him because he had amazed them for a long time with his sorcery.<sup class="versenum">12&nbsp;</sup>But when they believed Philip as he proclaimed the good news of the kingdom of God and the name of Jesus Christ, they were baptized, both men and women.<sup class="versenum">13&nbsp;</sup>Simon himself believed and was baptized. And he followed Philip everywhere, astonished by the great signs and miracles he saw.</p>

<p><sup class="versenum">14&nbsp;</sup>When the apostles in Jerusalem heard that Samaria had accepted the word of God, they sent Peter and John to Samaria.<sup class="versenum">15&nbsp;</sup>When they arrived, they prayed for the new believers there that they might receive the Holy Spirit,<sup class="versenum">16&nbsp;</sup>because the Holy Spirit had not yet come on any of them; they had simply been baptized in the name of the Lord Jesus.<sup class="versenum">17&nbsp;</sup>Then Peter and John placed their hands on them, and they received the Holy Spirit.</p>

<p><sup class="versenum">18&nbsp;</sup>When Simon saw that the Spirit was given at the laying on of the apostles&rsquo; hands, he offered them money<sup class="versenum">19&nbsp;</sup>and said, &ldquo;Give me also this ability so that everyone on whom I lay my hands may receive the Holy Spirit.&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>Peter answered: &ldquo;May your money perish with you, because you thought you could buy the gift of God with money!<sup class="versenum">21&nbsp;</sup>You have no part or share in this ministry, because your heart is not right before God.<sup class="versenum">22&nbsp;</sup>Repent of this wickedness and pray to the Lord in the hope that he may forgive you for having such a thought in your heart.<sup class="versenum">23&nbsp;</sup>For I see that you are full of bitterness and captive to sin.&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>Then Simon answered, &ldquo;Pray to the Lord for me so that nothing you have said may happen to me.&rdquo;</p>

<p><sup class="versenum">25&nbsp;</sup>After they had further proclaimed the word of the Lord and testified about Jesus, Peter and John returned to Jerusalem, preaching the gospel in many Samaritan villages.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/314.mp4" type="button" class="external-movie">
         Watch Acts 8:4-25</button>
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

<p class="up">Samaria was the name of a large region of Palestine north of Jerusalem. Like Stephen, Philip was one of the seven chosen to help with care of the widows in Jerusalem. We see the effectiveness of early discipleship by doing the same things that the Apostles did were doing. He Philip healed many, cast out demons, and preached about the Kingdom. This is the first time in Acts that the gospel crosses into a non-Jewish culture, so Peter and John were sent to endorse the work being done. The Lord used this experience to confirm to Peter and John that the gospel was for all people. Peter and John were so encouraged by what the Lord was doing that they started communities of new believers in other Samaritan villages on their journey back to Jerusalem. We learn that Stephen&rsquo;s death and the persecution that followed worked together according to God&rsquo;s plan to expand His Kingdom and build His church.</p>

</div>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

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
	<li>Foundational Bible Studies.</li>
</ul>

</div>

<ul class="forward">
</ul>

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

			<td class="social" @click="share('lesson', 'Philip Makes Disciples and Plants a Church in Samaria: ', '/content/M2/eng/multiply3/multiply314.html')">
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