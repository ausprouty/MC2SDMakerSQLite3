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
                        <div class="chapter_number ltr"><h1>12.</h1></div>
                        <div class="chapter_title ltr"><h1>Stephen's Defense Before the Council</h1></div>
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
	<li class="up">Read or watch Acts 7:1-53 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 7:1-53</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Stephen&rsquo;s Speech to the Sanhedrin</h3>

<p><sup class="versenum">1 </sup>Then the high priest asked Stephen, &ldquo;Are these charges true?&rdquo;</p>

<p><sup class="versenum">2&nbsp;</sup>To this he replied: &ldquo;Brothers and fathers, listen to me! The God of glory appeared to our father Abraham while he was still in Mesopotamia, before he lived in Harran.<sup class="versenum">3&nbsp;</sup>&lsquo;Leave your country and your people,&rsquo; God said, &lsquo;and go to the land I will show you.&rsquo;</p>

<p><sup class="versenum">4&nbsp;</sup>&ldquo;So he left the land of the Chaldeans and settled in Harran. After the death of his father, God sent him to this land where you are now living.<sup class="versenum">5&nbsp;</sup>He gave him no inheritance here, not even enough ground to set his foot on. But God promised him that he and his descendants after him would possess the land, even though at that time Abraham had no child.<sup class="versenum">6&nbsp;</sup>God spoke to him in this way: &lsquo;For four hundred years your descendants will be strangers in a country not their own, and they will be enslaved and mistreated.<sup class="versenum">7&nbsp;</sup>But I will punish the nation they serve as slaves,&rsquo; God said, &lsquo;and afterward they will come out of that country and worship me in this place.&rsquo;<sup class="versenum">8&nbsp;</sup>Then he gave Abraham the covenant of circumcision. And Abraham became the father of Isaac and circumcised him eight days after his birth. Later Isaac became the father of Jacob, and Jacob became the father of the twelve patriarchs.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;Because the patriarchs were jealous of Joseph, they sold him as a slave into Egypt. But God was with him<sup class="versenum">10&nbsp;</sup>and rescued him from all his troubles. He gave Joseph wisdom and enabled him to gain the goodwill of Pharaoh king of Egypt. So Pharaoh made him ruler over Egypt and all his palace.</p>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;Then a famine struck all Egypt and Canaan, bringing great suffering, and our ancestors could not find food.<sup class="versenum">12&nbsp;</sup>When Jacob heard that there was grain in Egypt, he sent our forefathers on their first visit.<sup class="versenum">13&nbsp;</sup>On their second visit, Joseph told his brothers who he was, and Pharaoh learned about Joseph&rsquo;s family.<sup class="versenum">14&nbsp;</sup>After this, Joseph sent for his father Jacob and his whole family, seventy-five in all.<sup class="versenum">15&nbsp;</sup>Then Jacob went down to Egypt, where he and our ancestors died.<sup class="versenum">16&nbsp;</sup>Their bodies were brought back to Shechem and placed in the tomb that Abraham had bought from the sons of Hamor at Shechem for a certain sum of money.</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;As the time drew near for God to fulfill his promise to Abraham, the number of our people in Egypt had greatly increased.<sup class="versenum">18&nbsp;</sup>Then &lsquo;a new king, to whom Joseph meant nothing, came to power in Egypt.&rsquo;<sup class="versenum">19&nbsp;</sup>He dealt treacherously with our people and oppressed our ancestors by forcing them to throw out their newborn babies so that they would die.</p>

<p><sup class="versenum">20&nbsp;</sup>&ldquo;At that time Moses was born, and he was no ordinary child. For three months he was cared for by his family.<sup class="versenum">21&nbsp;</sup>When he was placed outside, Pharaoh&rsquo;s daughter took him and brought him up as her own son.<sup class="versenum">22&nbsp;</sup>Moses was educated in all the wisdom of the Egyptians and was powerful in speech and action.</p>

<p><sup class="versenum">23&nbsp;</sup>&ldquo;When Moses was forty years old, he decided to visit his own people, the Israelites.<sup class="versenum">24&nbsp;</sup>He saw one of them being mistreated by an Egyptian, so he went to his defense and avenged him by killing the Egyptian.<sup class="versenum">25&nbsp;</sup>Moses thought that his own people would realize that God was using him to rescue them, but they did not.<sup class="versenum">26&nbsp;</sup>The next day Moses came upon two Israelites who were fighting. He tried to reconcile them by saying, &lsquo;Men, you are brothers; why do you want to hurt each other?&rsquo;</p>

<p><sup class="versenum">27&nbsp;</sup>&ldquo;But the man who was mistreating the other pushed Moses aside and said, &lsquo;Who made you ruler and judge over us?<sup class="versenum">28&nbsp;</sup>Are you thinking of killing me as you killed the Egyptian yesterday?&rsquo;<sup class="versenum">29&nbsp;</sup>When Moses heard this, he fled to Midian, where he settled as a foreigner and had two sons.</p>

<p><sup class="versenum">30&nbsp;</sup>&ldquo;After forty years had passed, an angel appeared to Moses in the flames of a burning bush in the desert near Mount Sinai.<sup class="versenum">31&nbsp;</sup>When he saw this, he was amazed at the sight. As he went over to get a closer look, he heard the Lord say:<sup class="versenum">32&nbsp;</sup>&lsquo;I am the God of your fathers, the God of Abraham, Isaac and Jacob.&rsquo; Moses trembled with fear and did not dare to look.</p>

<p><sup class="versenum">33&nbsp;</sup>&ldquo;Then the Lord said to him, &lsquo;Take off your sandals, for the place where you are standing is holy ground.<sup class="versenum">34&nbsp;</sup>I have indeed seen the oppression of my people in Egypt. I have heard their groaning and have come down to set them free. Now come, I will send you back to Egypt.&rsquo;</p>

<p><sup class="versenum">35&nbsp;</sup>&ldquo;This is the same Moses they had rejected with the words, &lsquo;Who made you ruler and judge?&rsquo; He was sent to be their ruler and deliverer by God himself, through the angel who appeared to him in the bush.<sup class="versenum">36&nbsp;</sup>He led them out of Egypt and performed wonders and signs in Egypt, at the Red Sea and for forty years in the wilderness.</p>

<p><sup class="versenum">37&nbsp;</sup>&ldquo;This is the Moses who told the Israelites, &lsquo;God will raise up for you a prophet like me from your own people.&rsquo;<sup class="versenum">38&nbsp;</sup>He was in the assembly in the wilderness, with the angel who spoke to him on Mount Sinai, and with our ancestors; and he received living words to pass on to us.</p>

<p><sup class="versenum">39&nbsp;</sup>&ldquo;But our ancestors refused to obey him. Instead, they rejected him and in their hearts turned back to Egypt.<sup class="versenum">40&nbsp;</sup>They told Aaron, &lsquo;Make us gods who will go before us. As for this fellow Moses who led us out of Egypt&mdash;we don&rsquo;t know what has happened to him!&rsquo;<sup class="versenum">41&nbsp;</sup>That was the time they made an idol in the form of a calf. They brought sacrifices to it and reveled in what their own hands had made.<sup class="versenum">42&nbsp;</sup>But God turned away from them and gave them over to the worship of the sun, moon and stars. This agrees with what is written in the book of the prophets:</p>

<p>&ldquo;&lsquo;Did you bring me sacrifices and offerings<br />
&nbsp;&nbsp;&nbsp;&nbsp;forty years in the wilderness, people of Israel?<br />
<sup class="versenum">43&nbsp;</sup>You have taken up the tabernacle of Molek<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the star of your god Rephan,<br />
&nbsp;&nbsp;&nbsp;&nbsp;the idols you made to worship.<br />
Therefore I will send you into exile&rsquo; beyond Babylon.</p>

<p><sup class="versenum">44&nbsp;</sup>&ldquo;Our ancestors had the tabernacle of the covenant law with them in the wilderness. It had been made as God directed Moses, according to the pattern he had seen.<sup class="versenum">45&nbsp;</sup>After receiving the tabernacle, our ancestors under Joshua brought it with them when they took the land from the nations God drove out before them. It remained in the land until the time of David,<sup class="versenum">46&nbsp;</sup>who enjoyed God&rsquo;s favor and asked that he might provide a dwelling place for the God of Jacob.<sup class="versenum">47&nbsp;</sup>But it was Solomon who built a house for him.</p>

<p><sup class="versenum">48&nbsp;</sup>&ldquo;However, the Most High does not live in houses made by human hands. As the prophet says:</p>

<p><sup class="versenum">49&nbsp;</sup>&ldquo;&lsquo;Heaven is my throne,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the earth is my footstool.<br />
What kind of house will you build for me?<br />
says the Lord.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Or where will my resting place be?<br />
<sup class="versenum">50&nbsp;</sup>Has not my hand made all these things?&rsquo;</p>

<p><sup class="versenum">51&nbsp;</sup>&ldquo;You stiff-necked people! Your hearts and ears are still uncircumcised. You are just like your ancestors: You always resist the Holy Spirit!<sup class="versenum">52&nbsp;</sup>Was there ever a prophet your ancestors did not persecute? They even killed those who predicted the coming of the Righteous One. And now you have betrayed and murdered him&mdash;<sup class="versenum">53&nbsp;</sup>you who have received the law that was given through angels but have not obeyed it.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/312.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 7:1-53&nbsp;</button>
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
<p class="up">Greek speaking Jews had accused Stephen of speaking against the temple and the Law of Moses. In response to these accusations, Stephen told stories from the Old Testament that the religious leaders were familiar with. He pointed out that God&rsquo;s presence is not bound to one physical place. Even in Israel&rsquo;s history, God appeared to them from Mesopotamia all the way to Egypt. He even pointed out that God had called land holy that was outside of Israel! Stephen&rsquo;s testimony showed that God took the initiative with His people throughout their history: He spoke, He sent, He promised, He punished, and He rescued. Even though God had acted, the people always resisted and even killed the prophets God sent. Now God has acted again by sending Jesus. Stephen&rsquo;s testimony ended by pointing out that the religious leaders were guilty of disobeying God by betraying and murdering Jesus the Messiah.</p>

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

			<td class="social" @click="share('lesson', 'Library: ', '/content/M2/eng/multiply3/multiply312.html')">
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