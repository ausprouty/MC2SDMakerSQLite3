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
                        <div class="chapter_number ltr"><h1>18.</h1></div>
                        <div class="chapter_title ltr"><h1>Peter Visits Believers in Judea</h1></div>
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
	<li class="up">Read or watch Acts 9:32-43 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 9:32-43</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Aeneas and Dorcas</h3>

<p><sup class="versenum">32&nbsp;</sup>As Peter traveled about the country, he went to visit the Lord&rsquo;s people who lived in Lydda.<sup class="versenum">33&nbsp;</sup>There he found a man named Aeneas, who was paralyzed and had been bedridden for eight years.<sup class="versenum">34&nbsp;</sup>&ldquo;Aeneas,&rdquo; Peter said to him, &ldquo;Jesus Christ heals you. Get up and roll up your mat.&rdquo; Immediately Aeneas got up.<sup class="versenum">35&nbsp;</sup>All those who lived in Lydda and Sharon saw him and turned to the Lord.</p>

<p><sup class="versenum">36&nbsp;</sup>In Joppa there was a disciple named Tabitha (in Greek her name is Dorcas); she was always doing good and helping the poor.<sup class="versenum">37&nbsp;</sup>About that time she became sick and died, and her body was washed and placed in an upstairs room.<sup class="versenum">38&nbsp;</sup>Lydda was near Joppa; so when the disciples heard that Peter was in Lydda, they sent two men to him and urged him, &ldquo;Please come at once!&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>Peter went with them, and when he arrived he was taken upstairs to the room. All the widows stood around him, crying and showing him the robes and other clothing that Dorcas had made while she was still with them.</p>

<p><sup class="versenum">40&nbsp;</sup>Peter sent them all out of the room; then he got down on his knees and prayed. Turning toward the dead woman, he said, &ldquo;Tabitha, get up.&rdquo; She opened her eyes, and seeing Peter she sat up.<sup class="versenum">41&nbsp;</sup>He took her by the hand and helped her to her feet. Then he called for the believers, especially the widows, and presented her to them alive.<sup class="versenum">42&nbsp;</sup>This became known all over Joppa, and many people believed in the Lord.<sup class="versenum">43&nbsp;</sup>Peter stayed in Joppa for some time with a tanner named Simon.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/318.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 9:32-43&nbsp;</button>
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
<p class="up">Peter begins to travel outside of Jerusalem to visit believers who have settled in other towns. The Spirit uses him to perform many miracles and lead many people to Christ in Lydda and Joppa. These are the first churches outside of Jerusalem that Peter helps to start. Directed by the Spirit through prayer, Peter raises Tabitha to life in the same way that he saw Jesus raise Jarius&rsquo; daughter (<span class="popup-link" @click = "popUp('pop1')"> Mark 5:38-42</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">38&nbsp;</sup>When they came to the home of the synagogue leader, Jesus saw a commotion, with people crying and wailing loudly.<sup class="versenum">39&nbsp;</sup>He went in and said to them, &ldquo;Why all this commotion and wailing? The child is not dead but asleep.&rdquo;<sup class="versenum">40&nbsp;</sup>But they laughed at him.</p>

<p>After he put them all out, he took the child&rsquo;s father and mother and the disciples who were with him, and went in where the child was.<sup class="versenum">41&nbsp;</sup>He took her by the hand and said to her, <em>&ldquo;Talitha koum!&rdquo;</em> (which means &ldquo;Little girl, I say to you, get up!&rdquo;).<sup class="versenum">42&nbsp;</sup>Immediately the girl stood up and began to walk around (she was twelve years old). At this they were completely astonished.</p>
</div>
</div>
<!-- end bible --></div>
)So far, we have seen many examples of what Jesus said would happen when the Spirit comes, &ldquo;these works you will do and even greater works&rdquo; (<span class="popup-link" @click = "popUp('pop2')"> John 14:12</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">12&nbsp;</sup>Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father.</p>
</div>
</div>
<!-- end bible --></div>
Tabitha is an example of a woman who was active in ministry by caring for others and helping to provide for widows in the area. Peter shows growth in his understanding of grace by being willing to stay at the home of a tanner, a profession seen as unclean by Jewish religious cultural terms.

<p>&nbsp;</p>

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

			<td class="social" @click="share('lesson', 'Library: ', '/content/M2/eng/multiply3/multiply318.html')">
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