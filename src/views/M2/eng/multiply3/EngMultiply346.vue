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
                        <div class="chapter_number ltr"><h1>46.</h1></div>
                        <div class="chapter_title ltr"><h1>Paul Questioned by Authorities</h1></div>
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
	<li class="up">Read or watch Acts 22:22-23:11 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 22:22-23:11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul the Roman Citizen</h3>

<p><sup class="versenum">22&nbsp;</sup>The crowd listened to Paul until he said this. Then they raised their voices and shouted, &ldquo;Rid the earth of him! He&rsquo;s not fit to live!&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>As they were shouting and throwing off their cloaks and flinging dust into the air,<sup class="versenum">24&nbsp;</sup>the commander ordered that Paul be taken into the barracks. He directed that he be flogged and interrogated in order to find out why the people were shouting at him like this.<sup class="versenum">25&nbsp;</sup>As they stretched him out to flog him, Paul said to the centurion standing there, &ldquo;Is it legal for you to flog a Roman citizen who hasn&rsquo;t even been found guilty?&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>When the centurion heard this, he went to the commander and reported it. &ldquo;What are you going to do?&rdquo; he asked. &ldquo;This man is a Roman citizen.&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>The commander went to Paul and asked, &ldquo;Tell me, are you a Roman citizen?&rdquo;</p>

<p>&ldquo;Yes, I am,&rdquo; he answered.</p>

<p><sup class="versenum">28&nbsp;</sup>Then the commander said, &ldquo;I had to pay a lot of money for my citizenship.&rdquo;</p>

<p>&ldquo;But I was born a citizen,&rdquo; Paul replied.</p>

<p><sup class="versenum">29&nbsp;</sup>Those who were about to interrogate him withdrew immediately. The commander himself was alarmed when he realized that he had put Paul, a Roman citizen, in chains.</p>

<h3>Paul Before the Sanhedrin</h3>

<p><sup class="versenum">30&nbsp;</sup>The commander wanted to find out exactly why Paul was being accused by the Jews. So the next day he released him and ordered the chief priests and all the members of the Sanhedrin to assemble. Then he brought Paul and had him stand before them.</p>

<p><sup class="versenum">23:1 </sup>Paul looked straight at the Sanhedrin and said, &ldquo;My brothers, I have fulfilled my duty to God in all good conscience to this day.&rdquo;<sup class="versenum">2&nbsp;</sup>At this the high priest Ananias ordered those standing near Paul to strike him on the mouth.<sup class="versenum">3&nbsp;</sup>Then Paul said to him, &ldquo;God will strike you, you whitewashed wall! You sit there to judge me according to the law, yet you yourself violate the law by commanding that I be struck!&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Those who were standing near Paul said, &ldquo;How dare you insult God&rsquo;s high priest!&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>Paul replied, &ldquo;Brothers, I did not realize that he was the high priest; for it is written: &lsquo;Do not speak evil about the ruler of your people.&rsquo;&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>Then Paul, knowing that some of them were Sadducees and the others Pharisees, called out in the Sanhedrin, &ldquo;My brothers, I am a Pharisee, descended from Pharisees. I stand on trial because of the hope of the resurrection of the dead.&rdquo;<sup class="versenum">7&nbsp;</sup>When he said this, a dispute broke out between the Pharisees and the Sadducees, and the assembly was divided.<sup class="versenum">8&nbsp;</sup>(The Sadducees say that there is no resurrection, and that there are neither angels nor spirits, but the Pharisees believe all these things.)</p>

<p><sup class="versenum">9&nbsp;</sup>There was a great uproar, and some of the teachers of the law who were Pharisees stood up and argued vigorously. &ldquo;We find nothing wrong with this man,&rdquo; they said. &ldquo;What if a spirit or an angel has spoken to him?&rdquo;<sup class="versenum">10&nbsp;</sup>The dispute became so violent that the commander was afraid Paul would be torn to pieces by them. He ordered the troops to go down and take him away from them by force and bring him into the barracks.</p>

<p><sup class="versenum">11&nbsp;</sup>The following night the Lord stood near Paul and said, &ldquo;Take courage! As you have testified about me in Jerusalem, so you must also testify in Rome.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/346.mp4" type="button" class="external-movie">
         Watch Acts 22:22-23:11</button>
    <div class="collapsed"></div>



<p class="up">Discovery Discussion (Everyone answers)</p>

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

<p class="up">As a Roman citizen, Paul was being protected by the commander, but he was still in great danger. The Roman commander displayed integrity by seeking to understand the situation and follow Roman civil law. The Jews were very zealous about their religious beliefs, willing to kill those who believed differently or, in their understanding, &ldquo;offended&rdquo; God. Paul took advantage of the theological differences among the Jewish leaders to shift the focus from himself onto to their theological disagreement. Jesus appeared to Paul to encourage him that He was working through him, in spite of the hostile response of the Jewish religious leaders. As we pursue the expansion of God&rsquo;s Kingdom, Jesus keeps his promise to &ldquo;never leave us nor forsake us.&rdquo; (<span class="popup-link" @click = "popUp('pop1')"> Matthew 28:20</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">20&nbsp;</sup>and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
Read <span class="popup-link" @click = "popUp('pop2')"> Ephesians 2:10</span>.&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">10&nbsp;</sup>For we are God&rsquo;s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.</p>
</div>
</div>
<!-- end bible --></div>
Like Paul, the Lord has created each of us for good works and He sovereignly uses all of our experiences to accomplish the works He has for us.

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

<ul class="forward">
	<li>Practice needed skills or previous topics to help prepare to minister to others:<br />
	o Prayer, Care, Share<br />
	o Gospel<br />
	o Foundational Bible Studies.</li>
</ul>

</div>

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

			<td class="social" @click="share('lesson', 'Paul Questioned by Authorities: ', '/content/M2/eng/multiply3/multiply346.html')">
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