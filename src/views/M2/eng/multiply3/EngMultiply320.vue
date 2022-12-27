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
                        <div class="chapter_number ltr"><h1>20.</h1></div>
                        <div class="chapter_title ltr"><h1>Good News Crosses Cultural Barriers</h1></div>
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
	<li class="up">Read or watch Acts 10:34-48 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 10:34-48</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">34&nbsp;</sup>Then Peter began to speak: &ldquo;I now realize how true it is that God does not show favoritism<sup class="versenum">35&nbsp;</sup>but accepts from every nation the one who fears him and does what is right.<sup class="versenum">36&nbsp;</sup>You know the message God sent to the people of Israel, announcing the good news of peace through Jesus Christ, who is Lord of all.<sup class="versenum">37&nbsp;</sup>You know what has happened throughout the province of Judea, beginning in Galilee after the baptism that John preached&mdash;<sup class="versenum">38&nbsp;</sup>how God anointed Jesus of Nazareth with the Holy Spirit and power, and how he went around doing good and healing all who were under the power of the devil, because God was with him.</p>

<p><sup class="versenum">39&nbsp;</sup>&ldquo;We are witnesses of everything he did in the country of the Jews and in Jerusalem. They killed him by hanging him on a cross,<sup class="versenum">40&nbsp;</sup>but God raised him from the dead on the third day and caused him to be seen.<sup class="versenum">41&nbsp;</sup>He was not seen by all the people, but by witnesses whom God had already chosen&mdash;by us who ate and drank with him after he rose from the dead.<sup class="versenum">42&nbsp;</sup>He commanded us to preach to the people and to testify that he is the one whom God appointed as judge of the living and the dead.<sup class="versenum">43&nbsp;</sup>All the prophets testify about him that everyone who believes in him receives forgiveness of sins through his name.&rdquo;</p>

<p><sup class="versenum">44&nbsp;</sup>While Peter was still speaking these words, the Holy Spirit came on all who heard the message.<sup class="versenum">45&nbsp;</sup>The circumcised believers who had come with Peter were astonished that the gift of the Holy Spirit had been poured out even on Gentiles.<sup class="versenum">46&nbsp;</sup>For they heard them speaking in tongues and praising God.</p>

<p>Then Peter said,<sup class="versenum">47&nbsp;</sup>&ldquo;Surely no one can stand in the way of their being baptized with water. They have received the Holy Spirit just as we have.&rdquo;<sup class="versenum">48&nbsp;</sup>So he ordered that they be baptized in the name of Jesus Christ. Then they asked Peter to stay with them for a few days.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/320.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 10:34-48&nbsp;</button>
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
<p class="up">The Lord uses Peter to bring salvation to Cornelius and his household. This experience also teaches Peter, and the other Jewish believers with him, an important theological truth: the Lord accepts people from every nation and his offer of salvation is the same for all people. As reinforcement of this truth, the Gentiles experience the gift of the Holy Spirit in the same way that the Jews had at Pentecost (<span class="popup-link" @click = "popUp('pop1')"> Acts 2:4</span>;&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">4&nbsp;</sup>All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.</p>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop2')"> Acts 10:47</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">47&nbsp;</sup>&ldquo;Surely no one can stand in the way of their being baptized with water. They have received the Holy Spirit just as we have.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
Peter recognizes the Lord&rsquo;s acceptance of the non-Jewish people and commands that they immediately be baptized, just as they did with new Jewish believers. Peter stays several more days in a non-Jewish home to do immediate follow up with the new believers. Peter has now been part of seeing churches planted beyond all the cultural barriers that Jesus talked about (<span class="popup-link" @click = "popUp('pop3')"> Acts 1:8</span>);&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">8&nbsp;</sup>But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
&nbsp;among the Jews in Jerusalem and Judea, among the Samaritans (<span class="popup-link" @click = "popUp('pop4')"> Acts 8</span>),&nbsp;

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">1 </sup>And Saul approved of their killing him.</p>

<h3>The Church Persecuted and Scattered</h3>

<p>On that day a great persecution broke out against the church in Jerusalem, and all except the apostles were scattered throughout Judea and Samaria.<sup class="versenum">2&nbsp;</sup>Godly men buried Stephen and mourned deeply for him.<sup class="versenum">3&nbsp;</sup>But Saul began to destroy the church. Going from house to house, he dragged off both men and women and put them in prison.</p>

<h3>Philip in Samaria</h3>

<p><sup class="versenum">4&nbsp;</sup>Those who had been scattered preached the word wherever they went.<sup class="versenum">5&nbsp;</sup>Philip went down to a city in Samaria and proclaimed the Messiah there.<sup class="versenum">6&nbsp;</sup>When the crowds heard Philip and saw the signs he performed, they all paid close attention to what he said.<sup class="versenum">7&nbsp;</sup>For with shrieks, impure spirits came out of many, and many who were paralyzed or lame were healed.<sup class="versenum">8&nbsp;</sup>So there was great joy in that city.</p>

<h3>Simon the Sorcerer</h3>

<p><sup class="versenum">9&nbsp;</sup>Now for some time a man named Simon had practiced sorcery in the city and amazed all the people of Samaria. He boasted that he was someone great,<sup class="versenum">10&nbsp;</sup>and all the people, both high and low, gave him their attention and exclaimed, &ldquo;This man is rightly called the Great Power of God.&rdquo;<sup class="versenum">11&nbsp;</sup>They followed him because he had amazed them for a long time with his sorcery.<sup class="versenum">12&nbsp;</sup>But when they believed Philip as he proclaimed the good news of the kingdom of God and the name of Jesus Christ, they were baptized, both men and women.<sup class="versenum">13&nbsp;</sup>Simon himself believed and was baptized. And he followed Philip everywhere, astonished by the great signs and miracles he saw.</p>

<p><sup class="versenum">14&nbsp;</sup>When the apostles in Jerusalem heard that Samaria had accepted the word of God, they sent Peter and John to Samaria.<sup class="versenum">15&nbsp;</sup>When they arrived, they prayed for the new believers there that they might receive the Holy Spirit,<sup class="versenum">16&nbsp;</sup>because the Holy Spirit had not yet come on any of them; they had simply been baptized in the name of the Lord Jesus.<sup class="versenum">17&nbsp;</sup>Then Peter and John placed their hands on them, and they received the Holy Spirit.</p>

<p><sup class="versenum">18&nbsp;</sup>When Simon saw that the Spirit was given at the laying on of the apostles&rsquo; hands, he offered them money<sup class="versenum">19&nbsp;</sup>and said, &ldquo;Give me also this ability so that everyone on whom I lay my hands may receive the Holy Spirit.&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>Peter answered: &ldquo;May your money perish with you, because you thought you could buy the gift of God with money!<sup class="versenum">21&nbsp;</sup>You have no part or share in this ministry, because your heart is not right before God.<sup class="versenum">22&nbsp;</sup>Repent of this wickedness and pray to the Lord in the hope that he may forgive you for having such a thought in your heart.<sup class="versenum">23&nbsp;</sup>For I see that you are full of bitterness and captive to sin.&rdquo;</p>

<p><sup class="versenum">24&nbsp;</sup>Then Simon answered, &ldquo;Pray to the Lord for me so that nothing you have said may happen to me.&rdquo;</p>

<p><sup class="versenum">25&nbsp;</sup>After they had further proclaimed the word of the Lord and testified about Jesus, Peter and John returned to Jerusalem, preaching the gospel in many Samaritan villages.</p>

<p><sup class="versenum">26&nbsp;</sup>Now an angel of the Lord said to Philip, &ldquo;Go south to the road&mdash;the desert road&mdash;that goes down from Jerusalem to Gaza.&rdquo;<sup class="versenum">27&nbsp;</sup>So he started out, and on his way he met an Ethiopian eunuch, an important official in charge of all the treasury of the Kandake (which means &ldquo;queen of the Ethiopians&rdquo;). This man had gone to Jerusalem to worship,<sup class="versenum">28&nbsp;</sup>and on his way home was sitting in his chariot reading the Book of Isaiah the prophet.<sup class="versenum">29&nbsp;</sup>The Spirit told Philip, &ldquo;Go to that chariot and stay near it.&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>Then Philip ran up to the chariot and heard the man reading Isaiah the prophet. &ldquo;Do you understand what you are reading?&rdquo; Philip asked.</p>

<p><sup class="versenum">31&nbsp;</sup>&ldquo;How can I,&rdquo; he said, &ldquo;unless someone explains it to me?&rdquo; So he invited Philip to come up and sit with him.</p>

<p><sup class="versenum">32&nbsp;</sup>This is the passage of Scripture the eunuch was reading:</p>

<p>&ldquo;He was led like a sheep to the slaughter,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and as a lamb before its shearer is silent,<br />
&nbsp;&nbsp;&nbsp;&nbsp;so he did not open his mouth.<br />
<sup class="versenum">33&nbsp;</sup>In his humiliation he was deprived of justice.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Who can speak of his descendants?<br />
&nbsp;&nbsp;&nbsp;&nbsp;For his life was taken from the earth.&rdquo;</p>
</div>

<p><sup class="versenum">34&nbsp;</sup>The eunuch asked Philip, &ldquo;Tell me, please, who is the prophet talking about, himself or someone else?&rdquo;<sup class="versenum">35&nbsp;</sup>Then Philip began with that very passage of Scripture and told him the good news about Jesus.</p>

<p><sup class="versenum">36&nbsp;</sup>As they traveled along the road, they came to some water and the eunuch said, &ldquo;Look, here is water. What can stand in the way of my being baptized?&rdquo;<sup class="versenum">[37]&nbsp;</sup><sup class="versenum">38&nbsp;</sup>And he gave orders to stop the chariot. Then both Philip and the eunuch went down into the water and Philip baptized him.<sup class="versenum">39&nbsp;</sup>When they came up out of the water, the Spirit of the Lord suddenly took Philip away, and the eunuch did not see him again, but went on his way rejoicing.<sup class="versenum">40&nbsp;</sup>Philip, however, appeared at Azotus and traveled about, preaching the gospel in all the towns until he reached Caesarea.</p>
</div>
</div>
<!-- end bible --></div>
&nbsp;and now among Gentiles (<span class="popup-link" @click = "popUp('pop5')"> Acts 10</span>).&nbsp;

<div class="popup invisible" id="pop5"><!-- begin bible -->
<div>
<div>
<h3>Cornelius Calls for Peter</h3>

<p><sup class="versenum">1 </sup>At Caesarea there was a man named Cornelius, a centurion in what was known as the Italian Regiment.<sup class="versenum">2&nbsp;</sup>He and all his family were devout and God-fearing; he gave generously to those in need and prayed to God regularly.<sup class="versenum">3&nbsp;</sup>One day at about three in the afternoon he had a vision. He distinctly saw an angel of God, who came to him and said, &ldquo;Cornelius!&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Cornelius stared at him in fear. &ldquo;What is it, Lord?&rdquo; he asked.</p>

<p>The angel answered, &ldquo;Your prayers and gifts to the poor have come up as a memorial offering before God.<sup class="versenum">5&nbsp;</sup>Now send men to Joppa to bring back a man named Simon who is called Peter.<sup class="versenum">6&nbsp;</sup>He is staying with Simon the tanner, whose house is by the sea.&rdquo;</p>

<p><sup class="versenum">7&nbsp;</sup>When the angel who spoke to him had gone, Cornelius called two of his servants and a devout soldier who was one of his attendants.<sup class="versenum">8&nbsp;</sup>He told them everything that had happened and sent them to Joppa.</p>

<h3>Peter&rsquo;s Vision</h3>

<p><sup class="versenum">9&nbsp;</sup>About noon the following day as they were on their journey and approaching the city, Peter went up on the roof to pray.<sup class="versenum">10&nbsp;</sup>He became hungry and wanted something to eat, and while the meal was being prepared, he fell into a trance.<sup class="versenum">11&nbsp;</sup>He saw heaven opened and something like a large sheet being let down to earth by its four corners.<sup class="versenum">12&nbsp;</sup>It contained all kinds of four-footed animals, as well as reptiles and birds.<sup class="versenum">13&nbsp;</sup>Then a voice told him, &ldquo;Get up, Peter. Kill and eat.&rdquo;</p>

<p><sup class="versenum">14&nbsp;</sup>&ldquo;Surely not, Lord!&rdquo; Peter replied. &ldquo;I have never eaten anything impure or unclean.&rdquo;</p>

<p><sup class="versenum">15&nbsp;</sup>The voice spoke to him a second time, &ldquo;Do not call anything impure that God has made clean.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>This happened three times, and immediately the sheet was taken back to heaven.</p>

<p><sup class="versenum">17&nbsp;</sup>While Peter was wondering about the meaning of the vision, the men sent by Cornelius found out where Simon&rsquo;s house was and stopped at the gate.<sup class="versenum">18&nbsp;</sup>They called out, asking if Simon who was known as Peter was staying there.</p>

<p><sup class="versenum">19&nbsp;</sup>While Peter was still thinking about the vision, the Spirit said to him, &ldquo;Simon, three men are looking for you.<sup class="versenum">20&nbsp;</sup>So get up and go downstairs. Do not hesitate to go with them, for I have sent them.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>Peter went down and said to the men, &ldquo;I&rsquo;m the one you&rsquo;re looking for. Why have you come?&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>The men replied, &ldquo;We have come from Cornelius the centurion. He is a righteous and God-fearing man, who is respected by all the Jewish people. A holy angel told him to ask you to come to his house so that he could hear what you have to say.&rdquo;<sup class="versenum">23&nbsp;</sup>Then Peter invited the men into the house to be his guests.</p>

<p>The next day Peter started out with them, and some of the believers from Joppa went along.<sup class="versenum">24&nbsp;</sup>The following day he arrived in Caesarea. Cornelius was expecting them and had called together his relatives and close friends.<sup class="versenum">25&nbsp;</sup>As Peter entered the house, Cornelius met him and fell at his feet in reverence.<sup class="versenum">26&nbsp;</sup>But Peter made him get up. &ldquo;Stand up,&rdquo; he said, &ldquo;I am only a man myself.&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>While talking with him, Peter went inside and found a large gathering of people.<sup class="versenum">28&nbsp;</sup>He said to them: &ldquo;You are well aware that it is against our law for a Jew to associate with or visit a Gentile. But God has shown me that I should not call anyone impure or unclean.<sup class="versenum">29&nbsp;</sup>So when I was sent for, I came without raising any objection. May I ask why you sent for me?&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>Cornelius answered: &ldquo;Three days ago I was in my house praying at this hour, at three in the afternoon. Suddenly a man in shining clothes stood before me<sup class="versenum">31&nbsp;</sup>and said, &lsquo;Cornelius, God has heard your prayer and remembered your gifts to the poor.<sup class="versenum">32&nbsp;</sup>Send to Joppa for Simon who is called Peter. He is a guest in the home of Simon the tanner, who lives by the sea.&rsquo;<sup class="versenum">33&nbsp;</sup>So I sent for you immediately, and it was good of you to come. Now we are all here in the presence of God to listen to everything the Lord has commanded you to tell us.&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>Then Peter began to speak: &ldquo;I now realize how true it is that God does not show favoritism<sup class="versenum">35&nbsp;</sup>but accepts from every nation the one who fears him and does what is right.<sup class="versenum">36&nbsp;</sup>You know the message God sent to the people of Israel, announcing the good news of peace through Jesus Christ, who is Lord of all.<sup class="versenum">37&nbsp;</sup>You know what has happened throughout the province of Judea, beginning in Galilee after the baptism that John preached&mdash;<sup class="versenum">38&nbsp;</sup>how God anointed Jesus of Nazareth with the Holy Spirit and power, and how he went around doing good and healing all who were under the power of the devil, because God was with him.</p>

<p><sup class="versenum">39&nbsp;</sup>&ldquo;We are witnesses of everything he did in the country of the Jews and in Jerusalem. They killed him by hanging him on a cross,<sup class="versenum">40&nbsp;</sup>but God raised him from the dead on the third day and caused him to be seen.<sup class="versenum">41&nbsp;</sup>He was not seen by all the people, but by witnesses whom God had already chosen&mdash;by us who ate and drank with him after he rose from the dead.<sup class="versenum">42&nbsp;</sup>He commanded us to preach to the people and to testify that he is the one whom God appointed as judge of the living and the dead.<sup class="versenum">43&nbsp;</sup>All the prophets testify about him that everyone who believes in him receives forgiveness of sins through his name.&rdquo;</p>

<p><sup class="versenum">44&nbsp;</sup>While Peter was still speaking these words, the Holy Spirit came on all who heard the message.<sup class="versenum">45&nbsp;</sup>The circumcised believers who had come with Peter were astonished that the gift of the Holy Spirit had been poured out even on Gentiles.<sup class="versenum">46&nbsp;</sup>For they heard them speaking in tongues and praising God.</p>

<p>Then Peter said,<sup class="versenum">47&nbsp;</sup>&ldquo;Surely no one can stand in the way of their being baptized with water. They have received the Holy Spirit just as we have.&rdquo;<sup class="versenum">48&nbsp;</sup>So he ordered that they be baptized in the name of Jesus Christ. Then they asked Peter to stay with them for a few days.</p>
</div>
</div>
<!-- end bible --></div>
The doors to all the cultural boundaries are now unlocked for Kingdom expansion.

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

			<td class="social" @click="share('lesson', 'Good News Crosses Cultural Barriers: ', '/content/M2/eng/multiply3/multiply320.html')">
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