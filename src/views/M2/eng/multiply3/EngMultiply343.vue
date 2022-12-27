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
                        <div class="chapter_number ltr"><h1>43.</h1></div>
                        <div class="chapter_title ltr"><h1>Visits to Disciples on the Way to Jerusalem</h1></div>
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
	<li class="up">Read or watch Acts 21:1-26 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 21:1-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>On to Jerusalem</h3>

<p><sup class="versenum">1 </sup>After we had torn ourselves away from them, we put out to sea and sailed straight to Kos. The next day we went to Rhodes and from there to Patara.<sup class="versenum">2&nbsp;</sup>We found a ship crossing over to Phoenicia, went on board and set sail.<sup class="versenum">3&nbsp;</sup>After sighting Cyprus and passing to the south of it, we sailed on to Syria. We landed at Tyre, where our ship was to unload its cargo.<sup class="versenum">4&nbsp;</sup>We sought out the disciples there and stayed with them seven days. Through the Spirit they urged Paul not to go on to Jerusalem.<sup class="versenum">5&nbsp;</sup>When it was time to leave, we left and continued on our way. All of them, including wives and children, accompanied us out of the city, and there on the beach we knelt to pray.<sup class="versenum">6&nbsp;</sup>After saying goodbye to each other, we went aboard the ship, and they returned home.</p>

<p><sup class="versenum">7&nbsp;</sup>We continued our voyage from Tyre and landed at Ptolemais, where we greeted the brothers and sisters and stayed with them for a day.<sup class="versenum">8&nbsp;</sup>Leaving the next day, we reached Caesarea and stayed at the house of Philip the evangelist, one of the Seven.<sup class="versenum">9&nbsp;</sup>He had four unmarried daughters who prophesied.</p>

<p><sup class="versenum">10&nbsp;</sup>After we had been there a number of days, a prophet named Agabus came down from Judea.<sup class="versenum">11&nbsp;</sup>Coming over to us, he took Paul&rsquo;s belt, tied his own hands and feet with it and said, &ldquo;The Holy Spirit says, &lsquo;In this way the Jewish leaders in Jerusalem will bind the owner of this belt and will hand him over to the Gentiles.&rsquo;&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>When we heard this, we and the people there pleaded with Paul not to go up to Jerusalem.<sup class="versenum">13&nbsp;</sup>Then Paul answered, &ldquo;Why are you weeping and breaking my heart? I am ready not only to be bound, but also to die in Jerusalem for the name of the Lord Jesus.&rdquo;<sup class="versenum">14&nbsp;</sup>When he would not be dissuaded, we gave up and said, &ldquo;The Lord&rsquo;s will be done.&rdquo;</p>

<p><sup class="versenum">15&nbsp;</sup>After this, we started on our way up to Jerusalem.<sup class="versenum">16&nbsp;</sup>Some of the disciples from Caesarea accompanied us and brought us to the home of Mnason, where we were to stay. He was a man from Cyprus and one of the early disciples.</p>

<h3>Paul&rsquo;s Arrival at Jerusalem</h3>

<p><sup class="versenum">17&nbsp;</sup>When we arrived at Jerusalem, the brothers and sisters received us warmly.<sup class="versenum">18&nbsp;</sup>The next day Paul and the rest of us went to see James, and all the elders were present.<sup class="versenum">19&nbsp;</sup>Paul greeted them and reported in detail what God had done among the Gentiles through his ministry.</p>

<p><sup class="versenum">20&nbsp;</sup>When they heard this, they praised God. Then they said to Paul: &ldquo;You see, brother, how many thousands of Jews have believed, and all of them are zealous for the law.<sup class="versenum">21&nbsp;</sup>They have been informed that you teach all the Jews who live among the Gentiles to turn away from Moses, telling them not to circumcise their children or live according to our customs.<sup class="versenum">22&nbsp;</sup>What shall we do? They will certainly hear that you have come,<sup class="versenum">23&nbsp;</sup>so do what we tell you. There are four men with us who have made a vow.<sup class="versenum">24&nbsp;</sup>Take these men, join in their purification rites and pay their expenses, so that they can have their heads shaved. Then everyone will know there is no truth in these reports about you, but that you yourself are living in obedience to the law.<sup class="versenum">25&nbsp;</sup>As for the Gentile believers, we have written to them our decision that they should abstain from food sacrificed to idols, from blood, from the meat of strangled animals and from sexual immorality.&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>The next day Paul took the men and purified himself along with them. Then he went to the temple to give notice of the date when the days of purification would end and the offering would be made for each of them.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/343.mp4" type="button" class="external-movie">
         Watch Acts 21:1-26</button>
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

<p class="up">Paul was not the only one starting churches. We learn from this story about other communities of believers that had been formed apart from Paul&rsquo;s work. In Caesarea, they stayed with Philip who witnessed to the Samaritans and the Ethiopian Eunuch (<span class="popup-link" @click = "popUp('pop1')"> Acts 8:40</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">40&nbsp;</sup>Philip, however, appeared at Azotus and traveled about, preaching the gospel in all the towns until he reached Caesarea.</p>
</div>
</div>
<!-- end bible --></div>
Through Philip&rsquo;s daughters, we learn that women also received gifts from the Holy Spirit like prophecy. On two occasions, prophecies were given through the Holy Spirit about the danger Paul would face in Jerusalem, but this was not new to Paul. Paul was being compelled by the Spirit to go to Jerusalem (<span class="popup-link" @click = "popUp('pop2')"> Acts 19:21</span>),&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">21&nbsp;</sup>After all this had happened, Paul decided to go to Jerusalem, passing through Macedonia and Achaia. &ldquo;After I have been there,&rdquo; he said, &ldquo;I must visit Rome also.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
and he had been told that persecution awaited him (<span class="popup-link" @click = "popUp('pop3')"> Acts 20: 22-23</span>).&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">22&nbsp;</sup>&ldquo;And now, compelled by the Spirit, I am going to Jerusalem, not knowing what will happen to me there.<sup class="versenum">23&nbsp;</sup>I only know that in every city the Holy Spirit warns me that prison and hardships are facing me.</p>
</div>
</div>
<!-- end bible --></div>
Paul had accepted that the will of the Lord for him included suffering. Issues from eight years earlier about practicing the Law were still bothering Jewish believers in Jerusalem (<span class="popup-link" @click = "popUp('pop4')"> Acts 11</span>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<h3>Peter Explains His Actions</h3>

<p><sup class="versenum">1 </sup>The apostles and the believers throughout Judea heard that the Gentiles also had received the word of God.<sup class="versenum">2&nbsp;</sup>So when Peter went up to Jerusalem, the circumcised believers criticized him<sup class="versenum">3&nbsp;</sup>and said, &ldquo;You went into the house of uncircumcised men and ate with them.&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Starting from the beginning, Peter told them the whole story:<sup class="versenum">5&nbsp;</sup>&ldquo;I was in the city of Joppa praying, and in a trance I saw a vision. I saw something like a large sheet being let down from heaven by its four corners, and it came down to where I was.<sup class="versenum">6&nbsp;</sup>I looked into it and saw four-footed animals of the earth, wild beasts, reptiles and birds.<sup class="versenum">7&nbsp;</sup>Then I heard a voice telling me, &lsquo;Get up, Peter. Kill and eat.&rsquo;</p>

<p><sup class="versenum">8&nbsp;</sup>&ldquo;I replied, &lsquo;Surely not, Lord! Nothing impure or unclean has ever entered my mouth.&rsquo;</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;The voice spoke from heaven a second time, &lsquo;Do not call anything impure that God has made clean.&rsquo;<sup class="versenum">10&nbsp;</sup>This happened three times, and then it was all pulled up to heaven again.</p>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;Right then three men who had been sent to me from Caesarea stopped at the house where I was staying.<sup class="versenum">12&nbsp;</sup>The Spirit told me to have no hesitation about going with them. These six brothers also went with me, and we entered the man&rsquo;s house.<sup class="versenum">13&nbsp;</sup>He told us how he had seen an angel appear in his house and say, &lsquo;Send to Joppa for Simon who is called Peter.<sup class="versenum">14&nbsp;</sup>He will bring you a message through which you and all your household will be saved.&rsquo;</p>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;As I began to speak, the Holy Spirit came on them as he had come on us at the beginning.<sup class="versenum">16&nbsp;</sup>Then I remembered what the Lord had said: &lsquo;John baptized with water, but you will be baptized with the Holy Spirit.&rsquo;<sup class="versenum">17&nbsp;</sup>So if God gave them the same gift he gave us who believed in the Lord Jesus Christ, who was I to think that I could stand in God&rsquo;s way?&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>When they heard this, they had no further objections and praised God, saying, &ldquo;So then, even to Gentiles God has granted repentance that leads to life.&rdquo;</p>

<p><sup class="versenum">19&nbsp;</sup>Now those who had been scattered by the persecution that broke out when Stephen was killed traveled as far as Phoenicia, Cyprus and Antioch, spreading the word only among Jews.<sup class="versenum">20&nbsp;</sup>Some of them, however, men from Cyprus and Cyrene, went to Antioch and began to speak to Greeks also, telling them the good news about the Lord Jesus.<sup class="versenum">21&nbsp;</sup>The Lord&rsquo;s hand was with them, and a great number of people believed and turned to the Lord.</p>

<p><sup class="versenum">22&nbsp;</sup>News of this reached the church in Jerusalem, and they sent Barnabas to Antioch.<sup class="versenum">23&nbsp;</sup>When he arrived and saw what the grace of God had done, he was glad and encouraged them all to remain true to the Lord with all their hearts.<sup class="versenum">24&nbsp;</sup>He was a good man, full of the Holy Spirit and faith, and a great number of people were brought to the Lord.</p>

<p><sup class="versenum">25&nbsp;</sup>Then Barnabas went to Tarsus to look for Saul,<sup class="versenum">26&nbsp;</sup>and when he found him, he brought him to Antioch. So for a whole year Barnabas and Saul met with the church and taught great numbers of people. The disciples were called Christians first at Antioch.</p>

<p><sup class="versenum">27&nbsp;</sup>During this time some prophets came down from Jerusalem to Antioch.<sup class="versenum">28&nbsp;</sup>One of them, named Agabus, stood up and through the Spirit predicted that a severe famine would spread over the entire Roman world. (This happened during the reign of Claudius.)<sup class="versenum">29&nbsp;</sup>The disciples, as each one was able, decided to provide help for the brothers and sisters living in Judea.<sup class="versenum">30&nbsp;</sup>This they did, sending their gift to the elders by Barnabas and Saul.</p>
</div>
</div>
<!-- end bible --></div>
and <span class="popup-link" @click = "popUp('pop5')"> Acts 15</span>).&nbsp;

<div class="popup invisible" id="pop5"><!-- begin bible -->
<div>
<div>
<div>
<div>
<h3>The Council at Jerusalem</h3>

<p><sup class="versenum">1 </sup>Certain people came down from Judea to Antioch and were teaching the believers: &ldquo;Unless you are circumcised, according to the custom taught by Moses, you cannot be saved.&rdquo;<sup class="versenum">2&nbsp;</sup>This brought Paul and Barnabas into sharp dispute and debate with them. So Paul and Barnabas were appointed, along with some other believers, to go up to Jerusalem to see the apostles and elders about this question.<sup class="versenum">3&nbsp;</sup>The church sent them on their way, and as they traveled through Phoenicia and Samaria, they told how the Gentiles had been converted. This news made all the believers very glad.<sup class="versenum">4&nbsp;</sup>When they came to Jerusalem, they were welcomed by the church and the apostles and elders, to whom they reported everything God had done through them.</p>

<p><sup class="versenum">5&nbsp;</sup>Then some of the believers who belonged to the party of the Pharisees stood up and said, &ldquo;The Gentiles must be circumcised and required to keep the law of Moses.&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>The apostles and elders met to consider this question.<sup class="versenum">7&nbsp;</sup>After much discussion, Peter got up and addressed them: &ldquo;Brothers, you know that some time ago God made a choice among you that the Gentiles might hear from my lips the message of the gospel and believe.<sup class="versenum">8&nbsp;</sup>God, who knows the heart, showed that he accepted them by giving the Holy Spirit to them, just as he did to us.<sup class="versenum">9&nbsp;</sup>He did not discriminate between us and them, for he purified their hearts by faith.<sup class="versenum">10&nbsp;</sup>Now then, why do you try to test God by putting on the necks of Gentiles a yoke that neither we nor our ancestors have been able to bear?<sup class="versenum">11&nbsp;</sup>No! We believe it is through the grace of our Lord Jesus that we are saved, just as they are.&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>The whole assembly became silent as they listened to Barnabas and Paul telling about the signs and wonders God had done among the Gentiles through them.<sup class="versenum">13&nbsp;</sup>When they finished, James spoke up. &ldquo;Brothers,&rdquo; he said, &ldquo;listen to me.<sup class="versenum">14&nbsp;</sup>Simon has described to us how God first intervened to choose a people for his name from the Gentiles.<sup class="versenum">15&nbsp;</sup>The words of the prophets are in agreement with this, as it is written:</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;&lsquo;After this I will return<br />
&nbsp;&nbsp;&nbsp;&nbsp;and rebuild David&rsquo;s fallen tent.<br />
Its ruins I will rebuild,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and I will restore it,<br />
<sup class="versenum">17&nbsp;</sup>that the rest of mankind may seek the Lord,<br />
&nbsp;&nbsp;&nbsp;&nbsp;even all the Gentiles who bear my name,<br />
says the Lord, who does these things&rsquo;&mdash;<br />
<sup class="versenum">18&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;things known from long ago.</p>
</div>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;It is my judgment, therefore, that we should not make it difficult for the Gentiles who are turning to God.<sup class="versenum">20&nbsp;</sup>Instead we should write to them, telling them to abstain from food polluted by idols, from sexual immorality, from the meat of strangled animals and from blood.<sup class="versenum">21&nbsp;</sup>For the law of Moses has been preached in every city from the earliest times and is read in the synagogues on every Sabbath.&rdquo;</p>

<h3>The Council&rsquo;s Letter to Gentile Believers</h3>

<p><sup class="versenum">22&nbsp;</sup>Then the apostles and elders, with the whole church, decided to choose some of their own men and send them to Antioch with Paul and Barnabas. They chose Judas (called Barsabbas) and Silas, men who were leaders among the believers.<sup class="versenum">23&nbsp;</sup>With them they sent the following letter:</p>

<p>The apostles and elders, your brothers,</p>

<p>To the Gentile believers in Antioch, Syria and Cilicia:</p>

<p>Greetings.</p>

<p><sup class="versenum">24&nbsp;</sup>We have heard that some went out from us without our authorization and disturbed you, troubling your minds by what they said.<sup class="versenum">25&nbsp;</sup>So we all agreed to choose some men and send them to you with our dear friends Barnabas and Paul&mdash;<sup class="versenum">26&nbsp;</sup>men who have risked their lives for the name of our Lord Jesus Christ.<sup class="versenum">27&nbsp;</sup>Therefore we are sending Judas and Silas to confirm by word of mouth what we are writing.<sup class="versenum">28&nbsp;</sup>It seemed good to the Holy Spirit and to us not to burden you with anything beyond the following requirements:<sup class="versenum">29&nbsp;</sup>You are to abstain from food sacrificed to idols, from blood, from the meat of strangled animals and from sexual immorality. You will do well to avoid these things.</p>

<p>Farewell.</p>
</div>

<p><sup class="versenum">30&nbsp;</sup>So the men were sent off and went down to Antioch, where they gathered the church together and delivered the letter.<sup class="versenum">31&nbsp;</sup>The people read it and were glad for its encouraging message.<sup class="versenum">32&nbsp;</sup>Judas and Silas, who themselves were prophets, said much to encourage and strengthen the believers.<sup class="versenum">33&nbsp;</sup>After spending some time there, they were sent off by the believers with the blessing of peace to return to those who had sent them.<sup class="versenum">[34]&nbsp;</sup><sup class="versenum">35&nbsp;</sup>But Paul and Barnabas remained in Antioch, where they and many others taught and preached the word of the Lord.</p>

<p><sup class="versenum">36&nbsp;</sup>Some time later Paul said to Barnabas, &ldquo;Let us go back and visit the believers in all the towns where we preached the word of the Lord and see how they are doing.&rdquo;<sup class="versenum">37&nbsp;</sup>Barnabas wanted to take John, also called Mark, with them,<sup class="versenum">38&nbsp;</sup>but Paul did not think it wise to take him, because he had deserted them in Pamphylia and had not continued with them in the work.<sup class="versenum">39&nbsp;</sup>They had such a sharp disagreement that they parted company. Barnabas took Mark and sailed for Cyprus,<sup class="versenum">40&nbsp;</sup>but Paul chose Silas and left, commended by the believers to the grace of the Lord.<sup class="versenum">41&nbsp;</sup>He went through Syria and Cilicia, strengthening the churches.</p>
</div>
</div>
<!-- end bible --></div>
Paul submitted to the Jerusalem leaders&rsquo; requests to fulfil the law so that the local believers would not stumble. Read <span class="popup-link" @click = "popUp('pop6')"> Romans 14:13-19</span>.&nbsp;

<div class="popup invisible" id="pop6"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">13&nbsp;</sup>Therefore let us stop passing judgment on one another. Instead, make up your mind not to put any stumbling block or obstacle in the way of a brother or sister.<sup class="versenum">14&nbsp;</sup>I am convinced, being fully persuaded in the Lord Jesus, that nothing is unclean in itself. But if anyone regards something as unclean, then for that person it is unclean.<sup class="versenum">15&nbsp;</sup>If your brother or sister is distressed because of what you eat, you are no longer acting in love. Do not by your eating destroy someone for whom Christ died.<sup class="versenum">16&nbsp;</sup>Therefore do not let what you know is good be spoken of as evil.<sup class="versenum">17&nbsp;</sup>For the kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy Spirit,<sup class="versenum">18&nbsp;</sup>because anyone who serves Christ in this way is pleasing to God and receives human approval.</p>

<p><sup class="versenum">19&nbsp;</sup>Let us therefore make every effort to do what leads to peace and to mutual edification.</p>
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

			<td class="social" @click="share('lesson', 'Visits to Disciples on the Way to Jerusalem: ', '/content/M2/eng/multiply3/multiply343.html')">
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