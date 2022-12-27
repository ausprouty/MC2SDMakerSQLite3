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
                        <div class="chapter_number ltr"><h1>33.</h1></div>
                        <div class="chapter_title ltr"><h1>Persons of Peace in Unlikely Places</h1></div>
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
	<li class="up">Read or watch Acts 16:16-40 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 16:16-40</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Paul and Silas in Prison</h3>

<p><sup class="versenum">16&nbsp;</sup>Once when we were going to the place of prayer, we were met by a female slave who had a spirit by which she predicted the future. She earned a great deal of money for her owners by fortune-telling.<sup class="versenum">17&nbsp;</sup>She followed Paul and the rest of us, shouting, &ldquo;These men are servants of the Most High God, who are telling you the way to be saved.&rdquo;<sup class="versenum">18&nbsp;</sup>She kept this up for many days. Finally Paul became so annoyed that he turned around and said to the spirit, &ldquo;In the name of Jesus Christ I command you to come out of her!&rdquo; At that moment the spirit left her.</p>

<p><sup class="versenum">19&nbsp;</sup>When her owners realized that their hope of making money was gone, they seized Paul and Silas and dragged them into the marketplace to face the authorities.<sup class="versenum">20&nbsp;</sup>They brought them before the magistrates and said, &ldquo;These men are Jews, and are throwing our city into an uproar<sup class="versenum">21&nbsp;</sup>by advocating customs unlawful for us Romans to accept or practice.&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>The crowd joined in the attack against Paul and Silas, and the magistrates ordered them to be stripped and beaten with rods.<sup class="versenum">23&nbsp;</sup>After they had been severely flogged, they were thrown into prison, and the jailer was commanded to guard them carefully.<sup class="versenum">24&nbsp;</sup>When he received these orders, he put them in the inner cell and fastened their feet in the stocks.</p>

<p><sup class="versenum">25&nbsp;</sup>About midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening to them.<sup class="versenum">26&nbsp;</sup>Suddenly there was such a violent earthquake that the foundations of the prison were shaken. At once all the prison doors flew open, and everyone&rsquo;s chains came loose.<sup class="versenum">27&nbsp;</sup>The jailer woke up, and when he saw the prison doors open, he drew his sword and was about to kill himself because he thought the prisoners had escaped.<sup class="versenum">28&nbsp;</sup>But Paul shouted, &ldquo;Don&rsquo;t harm yourself! We are all here!&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>The jailer called for lights, rushed in and fell trembling before Paul and Silas.<sup class="versenum">30&nbsp;</sup>He then brought them out and asked, &ldquo;Sirs, what must I do to be saved?&rdquo;</p>

<p><sup class="versenum">31&nbsp;</sup>They replied, &ldquo;Believe in the Lord Jesus, and you will be saved&mdash;you and your household.&rdquo;<sup class="versenum">32&nbsp;</sup>Then they spoke the word of the Lord to him and to all the others in his house.<sup class="versenum">33&nbsp;</sup>At that hour of the night the jailer took them and washed their wounds; then immediately he and all his household were baptized.<sup class="versenum">34&nbsp;</sup>The jailer brought them into his house and set a meal before them; he was filled with joy because he had come to believe in God&mdash;he and his whole household.</p>

<p><sup class="versenum">35&nbsp;</sup>When it was daylight, the magistrates sent their officers to the jailer with the order: &ldquo;Release those men.&rdquo;<sup class="versenum">36&nbsp;</sup>The jailer told Paul, &ldquo;The magistrates have ordered that you and Silas be released. Now you can leave. Go in peace.&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>But Paul said to the officers: &ldquo;They beat us publicly without a trial, even though we are Roman citizens, and threw us into prison. And now do they want to get rid of us quietly? No! Let them come themselves and escort us out.&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>The officers reported this to the magistrates, and when they heard that Paul and Silas were Roman citizens, they were alarmed.<sup class="versenum">39&nbsp;</sup>They came to appease them and escorted them from the prison, requesting them to leave the city.<sup class="versenum">40&nbsp;</sup>After Paul and Silas came out of the prison, they went to Lydia&rsquo;s house, where they met with the brothers and sisters and encouraged them. Then they left.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/333.mp4" type="button" class="external-movie">
         Watch &nbsp;Acts 16:16-40&nbsp;</button>
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
<p class="up">The ministry team of Paul, Silas, Timothy and Luke are in Philippi. Because there was no synagogue, they went to the place of prayer down by the river to look for others who had a spiritual interest. A demon possessed slave girl tried to associate with the team, but Paul knew from painful experience the danger of people thinking he was representing false religious practices (<span class="popup-link" @click = "popUp('pop1')"> Acts 14:8-20</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">8&nbsp;</sup>In Lystra there sat a man who was lame. He had been that way from birth and had never walked.<sup class="versenum">9&nbsp;</sup>He listened to Paul as he was speaking. Paul looked directly at him, saw that he had faith to be healed<sup class="versenum">10&nbsp;</sup>and called out, &ldquo;Stand up on your feet!&rdquo; At that, the man jumped up and began to walk.</p>

<p><sup class="versenum">11&nbsp;</sup>When the crowd saw what Paul had done, they shouted in the Lycaonian language, &ldquo;The gods have come down to us in human form!&rdquo;<sup class="versenum">12&nbsp;</sup>Barnabas they called Zeus, and Paul they called Hermes because he was the chief speaker.<sup class="versenum">13&nbsp;</sup>The priest of Zeus, whose temple was just outside the city, brought bulls and wreaths to the city gates because he and the crowd wanted to offer sacrifices to them.</p>

<p><sup class="versenum">14&nbsp;</sup>But when the apostles Barnabas and Paul heard of this, they tore their clothes and rushed out into the crowd, shouting:<sup class="versenum">15&nbsp;</sup>&ldquo;Friends, why are you doing this? We too are only human, like you. We are bringing you good news, telling you to turn from these worthless things to the living God, who made the heavens and the earth and the sea and everything in them.<sup class="versenum">16&nbsp;</sup>In the past, he let all nations go their own way.<sup class="versenum">17&nbsp;</sup>Yet he has not left himself without testimony: He has shown kindness by giving you rain from heaven and crops in their seasons; he provides you with plenty of food and fills your hearts with joy.&rdquo;<sup class="versenum">18&nbsp;</sup>Even with these words, they had difficulty keeping the crowd from sacrificing to them.</p>

<p><sup class="versenum">19&nbsp;</sup>Then some Jews came from Antioch and Iconium and won the crowd over. They stoned Paul and dragged him outside the city, thinking he was dead.<sup class="versenum">20&nbsp;</sup>But after the disciples had gathered around him, he got up and went back into the city. The next day he and Barnabas left for Derbe.</p>
</div>
</div>
<!-- end bible --></div>
The power of Jesus overcame the demonic spirit and set the girl free. Because her owners could no longer use her to make money, they falsely accused Paul and Silas of introducing illegal customs which led to their arrest. Even in the midst of these difficult circumstances, Paul and Silas showed trust in the Lord as they worshipped Him in prison. In this case of persecution, the Lord did a miracle. As part of the Lord&rsquo;s miraculous work, the jailer was revealed to be a God prepared person of peace. The jailer and his whole household believed in Jesus. Before the team left, they encouraged the believers in the new church that was meeting in Lydia&#39;s house.

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

			<td class="social" @click="share('lesson', 'Persons of Peace in Unlikely Places: ', '/content/M2/eng/multiply3/multiply333.html')">
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