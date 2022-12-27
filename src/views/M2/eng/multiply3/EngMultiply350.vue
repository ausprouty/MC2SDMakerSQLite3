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
                        <div class="chapter_number ltr"><h1>50.</h1></div>
                        <div class="chapter_title ltr"><h1>Paul Gives Testimony to King Agrippa</h1></div>
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
	<li class="up">Read or watch Acts 25:23-26:32 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 25:23-26:32</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul Before Agrippa</h3>

<p><sup class="versenum">23&nbsp;</sup>The next day Agrippa and Bernice came with great pomp and entered the audience room with the high-ranking military officers and the prominent men of the city. At the command of Festus, Paul was brought in.<sup class="versenum">24&nbsp;</sup>Festus said: &ldquo;King Agrippa, and all who are present with us, you see this man! The whole Jewish community has petitioned me about him in Jerusalem and here in Caesarea, shouting that he ought not to live any longer.<sup class="versenum">25&nbsp;</sup>I found he had done nothing deserving of death, but because he made his appeal to the Emperor I decided to send him to Rome.<sup class="versenum">26&nbsp;</sup>But I have nothing definite to write to His Majesty about him. Therefore I have brought him before all of you, and especially before you, King Agrippa, so that as a result of this investigation I may have something to write.<sup class="versenum">27&nbsp;</sup>For I think it is unreasonable to send a prisoner on to Rome without specifying the charges against him.&rdquo;<br />
<sup class="versenum">26:1 </sup>Then Agrippa said to Paul, &ldquo;You have permission to speak for yourself.&rdquo;</p>

<p>So Paul motioned with his hand and began his defense:<sup class="versenum">2&nbsp;</sup>&ldquo;King Agrippa, I consider myself fortunate to stand before you today as I make my defense against all the accusations of the Jews,<sup class="versenum">3&nbsp;</sup>and especially so because you are well acquainted with all the Jewish customs and controversies. Therefore, I beg you to listen to me patiently.</p>

<p><sup class="versenum">4&nbsp;</sup>&ldquo;The Jewish people all know the way I have lived ever since I was a child, from the beginning of my life in my own country, and also in Jerusalem.<sup class="versenum">5&nbsp;</sup>They have known me for a long time and can testify, if they are willing, that I conformed to the strictest sect of our religion, living as a Pharisee.<sup class="versenum">6&nbsp;</sup>And now it is because of my hope in what God has promised our ancestors that I am on trial today.<sup class="versenum">7&nbsp;</sup>This is the promise our twelve tribes are hoping to see fulfilled as they earnestly serve God day and night. King Agrippa, it is because of this hope that these Jews are accusing me.<sup class="versenum">8&nbsp;</sup>Why should any of you consider it incredible that God raises the dead?</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;I too was convinced that I ought to do all that was possible to oppose the name of Jesus of Nazareth.<sup class="versenum">10&nbsp;</sup>And that is just what I did in Jerusalem. On the authority of the chief priests I put many of the Lord&rsquo;s people in prison, and when they were put to death, I cast my vote against them.<sup class="versenum">11&nbsp;</sup>Many a time I went from one synagogue to another to have them punished, and I tried to force them to blaspheme. I was so obsessed with persecuting them that I even hunted them down in foreign cities.</p>

<p><sup class="versenum">12&nbsp;</sup>&ldquo;On one of these journeys I was going to Damascus with the authority and commission of the chief priests.<sup class="versenum">13&nbsp;</sup>About noon, King Agrippa, as I was on the road, I saw a light from heaven, brighter than the sun, blazing around me and my companions.<sup class="versenum">14&nbsp;</sup>We all fell to the ground, and I heard a voice saying to me in Aramaic, &lsquo;Saul, Saul, why do you persecute me? It is hard for you to kick against the goads.&rsquo;</p>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;Then I asked, &lsquo;Who are you, Lord?&rsquo;</p>

<p>&ldquo; &lsquo;I am Jesus, whom you are persecuting,&rsquo; the Lord replied.<sup class="versenum">16&nbsp;</sup>&lsquo;Now get up and stand on your feet. I have appeared to you to appoint you as a servant and as a witness of what you have seen and will see of me.<sup class="versenum">17&nbsp;</sup>I will rescue you from your own people and from the Gentiles. I am sending you to them<sup class="versenum">18&nbsp;</sup>to open their eyes and turn them from darkness to light, and from the power of Satan to God, so that they may receive forgiveness of sins and a place among those who are sanctified by faith in me.&rsquo;</p>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;So then, King Agrippa, I was not disobedient to the vision from heaven.<sup class="versenum">20&nbsp;</sup>First to those in Damascus, then to those in Jerusalem and in all Judea, and then to the Gentiles, I preached that they should repent and turn to God and demonstrate their repentance by their deeds.<sup class="versenum">21&nbsp;</sup>That is why some Jews seized me in the temple courts and tried to kill me.<sup class="versenum">22&nbsp;</sup>But God has helped me to this very day; so I stand here and testify to small and great alike. I am saying nothing beyond what the prophets and Moses said would happen&mdash;<sup class="versenum">23&nbsp;</sup>that the Messiah would suffer and, as the first to rise from the dead, would bring the message of light to his own people and to the Gentiles.&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>At this point Festus interrupted Paul&rsquo;s defense. &ldquo;You are out of your mind, Paul!&rdquo; he shouted. &ldquo;Your great learning is driving you insane.&rdquo;</p>

<p><sup class="versenum">25&nbsp;</sup>&ldquo;I am not insane, most excellent Festus,&rdquo; Paul replied. &ldquo;What I am saying is true and reasonable.<sup class="versenum">26&nbsp;</sup>The king is familiar with these things, and I can speak freely to him. I am convinced that none of this has escaped his notice, because it was not done in a corner.<sup class="versenum">27&nbsp;</sup>King Agrippa, do you believe the prophets? I know you do.&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>Then Agrippa said to Paul, &ldquo;Do you think that in such a short time you can persuade me to be a Christian?&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>Paul replied, &ldquo;Short time or long&mdash;I pray to God that not only you but all who are listening to me today may become what I am, except for these chains.&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>The king rose, and with him the governor and Bernice and those sitting with them.<sup class="versenum">31&nbsp;</sup>After they left the room, they began saying to one another, &ldquo;This man is not doing anything that deserves death or imprisonment.&rdquo;</p>

<p><sup class="versenum">32&nbsp;</sup>Agrippa said to Festus, &ldquo;This man could have been set free if he had not appealed to Caesar.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/350.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 25:23-26:32&nbsp;</button>
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
<p class="up">Once again Paul shares his testimony. This is the longest version recorded. Paul is speaking before the Jewish provincial King Agrippa and Governor Festus. Paul is already considered not guilty by the governor who sought clarity of what to tell Caesar. Read <span class="popup-link" @click = "popUp('pop1')"> 1 Timothy 1:12-16</span>.&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">12&nbsp;</sup>I thank Christ Jesus our Lord, who has given me strength, that he considered me trustworthy, appointing me to his service.<sup class="versenum">13&nbsp;</sup>Even though I was once a blasphemer and a persecutor and a violent man, I was shown mercy because I acted in ignorance and unbelief.<sup class="versenum">14&nbsp;</sup>The grace of our Lord was poured out on me abundantly, along with the faith and love that are in Christ Jesus.</p>

<p><sup class="versenum">15&nbsp;</sup>Here is a trustworthy saying that deserves full acceptance: Christ Jesus came into the world to save sinners&mdash;of whom I am the worst.<sup class="versenum">16&nbsp;</sup>But for that very reason I was shown mercy so that in me, the worst of sinners, Christ Jesus might display his immense patience as an example for those who would believe in him and receive eternal life.</p>
</div>
</div>
<!-- end bible --></div>
Paul admitted that he was just like his accusers before he met Jesus. He firmly believed it was God&rsquo;s will and was his duty to violently stop the message of Jesus. Apparently, Paul had been resisting promptings to accept the gospel during this period of his life (<span class="popup-link" @click = "popUp('pop2')"> Acts 26:14</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">14&nbsp;</sup>We all fell to the ground, and I heard a voice saying to me in Aramaic, &lsquo;Saul, Saul, why do you persecute me? It is hard for you to kick against the goads.&rsquo;</p>
</div>
</div>
<!-- end bible --></div>
Jesus initiated with this murderous Saul and made him His servant so that the non-Jewish world would have access to the gospel. We are reminded how closely Jesus identified with his followers: to persecute them was to persecute Him. Once again, Paul faithfully obeyed his call and boldly challenged the political leaders to believe in Jesus, but they rejected the offer.

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

			<td class="social" @click="share('lesson', 'Paul Gives Testimony to King Agrippa: ', '/content/M2/eng/multiply3/multiply350.html')">
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