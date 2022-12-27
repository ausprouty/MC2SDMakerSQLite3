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
                        <div class="chapter_number ltr"><h1>23.</h1></div>
                        <div class="chapter_title ltr"><h1>King Herod Persecutes Leaders and God Responds</h1></div>
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
	<li class="up">Read or watch Acts 12:1-25&nbsp; two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 12:1-25</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Peter&rsquo;s Miraculous Escape From Prison</h3>

<p><sup class="versenum">1 </sup>It was about this time that King Herod arrested some who belonged to the church, intending to persecute them.<sup class="versenum">2&nbsp;</sup>He had James, the brother of John, put to death with the sword.<sup class="versenum">3&nbsp;</sup>When he saw that this met with approval among the Jews, he proceeded to seize Peter also. This happened during the Festival of Unleavened Bread.<sup class="versenum">4&nbsp;</sup>After arresting him, he put him in prison, handing him over to be guarded by four squads of four soldiers each. Herod intended to bring him out for public trial after the Passover.</p>

<p><sup class="versenum">5&nbsp;</sup>So Peter was kept in prison, but the church was earnestly praying to God for him.</p>

<p><sup class="versenum">6&nbsp;</sup>The night before Herod was to bring him to trial, Peter was sleeping between two soldiers, bound with two chains, and sentries stood guard at the entrance.<sup class="versenum">7&nbsp;</sup>Suddenly an angel of the Lord appeared and a light shone in the cell. He struck Peter on the side and woke him up. &ldquo;Quick, get up!&rdquo; he said, and the chains fell off Peter&rsquo;s wrists.</p>

<p><sup class="versenum">8&nbsp;</sup>Then the angel said to him, &ldquo;Put on your clothes and sandals.&rdquo; And Peter did so. &ldquo;Wrap your cloak around you and follow me,&rdquo; the angel told him.<sup class="versenum">9&nbsp;</sup>Peter followed him out of the prison, but he had no idea that what the angel was doing was really happening; he thought he was seeing a vision.<sup class="versenum">10&nbsp;</sup>They passed the first and second guards and came to the iron gate leading to the city. It opened for them by itself, and they went through it. When they had walked the length of one street, suddenly the angel left him.</p>

<p><sup class="versenum">11&nbsp;</sup>Then Peter came to himself and said, &ldquo;Now I know without a doubt that the Lord has sent his angel and rescued me from Herod&rsquo;s clutches and from everything the Jewish people were hoping would happen.&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>When this had dawned on him, he went to the house of Mary the mother of John, also called Mark, where many people had gathered and were praying.<sup class="versenum">13&nbsp;</sup>Peter knocked at the outer entrance, and a servant named Rhoda came to answer the door.<sup class="versenum">14&nbsp;</sup>When she recognized Peter&rsquo;s voice, she was so overjoyed she ran back without opening it and exclaimed, &ldquo;Peter is at the door!&rdquo;</p>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;You&rsquo;re out of your mind,&rdquo; they told her. When she kept insisting that it was so, they said, &ldquo;It must be his angel.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>But Peter kept on knocking, and when they opened the door and saw him, they were astonished.<sup class="versenum">17&nbsp;</sup>Peter motioned with his hand for them to be quiet and described how the Lord had brought him out of prison. &ldquo;Tell James and the other brothers and sisters about this,&rdquo; he said, and then he left for another place.</p>

<p><sup class="versenum">18&nbsp;</sup>In the morning, there was no small commotion among the soldiers as to what had become of Peter.<sup class="versenum">19&nbsp;</sup>After Herod had a thorough search made for him and did not find him, he cross-examined the guards and ordered that they be executed.</p>

<h3>Herod&rsquo;s Death</h3>

<p>Then Herod went from Judea to Caesarea and stayed there.<sup class="versenum">20&nbsp;</sup>He had been quarreling with the people of Tyre and Sidon; they now joined together and sought an audience with him. After securing the support of Blastus, a trusted personal servant of the king, they asked for peace, because they depended on the king&rsquo;s country for their food supply.</p>

<p><sup class="versenum">21&nbsp;</sup>On the appointed day Herod, wearing his royal robes, sat on his throne and delivered a public address to the people.<sup class="versenum">22&nbsp;</sup>They shouted, &ldquo;This is the voice of a god, not of a man.&rdquo;<sup class="versenum">23&nbsp;</sup>Immediately, because Herod did not give praise to God, an angel of the Lord struck him down, and he was eaten by worms and died.</p>

<p><sup class="versenum">24&nbsp;</sup>But the word of God continued to spread and flourish.</p>

<h3>Barnabas and Saul Sent Off</h3>

<p><sup class="versenum">25&nbsp;</sup>When Barnabas and Saul had finished their mission, they returned from Jerusalem, taking with them John, also called Mark.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/323.mp4" type="button" class="external-movie">
         Watch Acts 12:1-25</button>
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

<p class="up">Jesus promised the Apostles, &ldquo;If they persecute Me, they will also persecute you.&rdquo; (<span class="popup-link" @click = "popUp('pop1')"> John 15:20</span>).&nbsp;&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">20&nbsp;</sup>Remember what I told you: &lsquo;A servant is not greater than his master.&rsquo; If they persecuted me, they will persecute you also. If they obeyed my teaching, they will obey yours also.</p>
</div>
</div>
<!-- end bible --></div>
This time persecution breaks out against the Apostles and other church leaders. The Lord allows the Apostle James to be killed, but He allows Peter to miraculously escape from Herod. Even though the believers were praying for the Lord to save Peter, some of them doubted it could happen (12:13). There is no common outcome to persecution: sometimes believers escape, sometimes they are killed; sometimes God does a miracle, sometimes He does not. The Lord taught &ldquo;love your enemies and pray for those who persecute you&rdquo; and &ldquo;vengeance is mine and I will repay&rdquo; (<span class="popup-link" @click = "popUp('pop2')"> Matthew 5:43-48</span>;&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">43&nbsp;</sup>&ldquo;You have heard that it was said, &lsquo;Love your neighbor and hate your enemy.&rsquo;<sup class="versenum">44&nbsp;</sup>But I tell you, love your enemies and pray for those who persecute you,<sup class="versenum">45&nbsp;</sup>that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous.<sup class="versenum">46&nbsp;</sup>If you love those who love you, what reward will you get? Are not even the tax collectors doing that?<sup class="versenum">47&nbsp;</sup>And if you greet only your own people, what are you doing more than others? Do not even pagans do that?<sup class="versenum">48&nbsp;</sup>Be perfect, therefore, as your heavenly Father is perfect.</p>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop3')"> Rom 12:17-21</span>).&nbsp;

<div class="popup invisible" id="pop3">&nbsp;</div>
At this time God responds to the arrogance and attack of Herod by removing him, while further spreading His own Word. This story includes the third summary statement found in the book of Acts: the word of God increased and multiplied (<span class="popup-link" @click = "popUp('pop4')"> Acts 12:24</span>).&nbsp;

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">24&nbsp;</sup>But the word of God continued to spread and flourish.</p>
</div>
</div>
<!-- end bible --></div>

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

			<td class="social" @click="share('lesson', 'King Herod Persecutes Leaders and God Responds: ', '/content/M2/eng/multiply3/multiply323.html')">
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