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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply1-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>10.</h1></div>
                        <div class="chapter_title ltr"><h1>God Prepared People </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 9: God Prepared People-->
<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop1')"> Romans 11:33-36 </span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<div>
	<p><sup class="versenum">33&nbsp;</sup>Oh, the depth of the riches of the wisdom and knowledge of God!<br />
	&nbsp;&nbsp;&nbsp;&nbsp;How unsearchable his judgments,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and his paths beyond tracing out!<br />
	<sup class="versenum">34&nbsp;</sup>&ldquo;Who has known the mind of the Lord?<br />
	&nbsp;&nbsp;&nbsp;&nbsp;Or who has been his counselor?&rdquo;<br />
	<sup class="versenum">35&nbsp;</sup>&ldquo;Who has ever given to God,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;that God should repay them?&rdquo;<br />
	<sup class="versenum">36&nbsp;</sup>For from him and through him and for him are all things.<br />
	&nbsp;&nbsp;&nbsp;&nbsp;To him be the glory forever! Amen.</p>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	and sing 1-2 songs.</li>
</ul>

</div>

<h2 class="back">Caring for each other</h2>

<ul class="back">
	<li>What is one highlight from this week?</li>
	<li>What is one challenge from this past week?</li>
	<li>What do you want Jesus to do for you this week?</li>
	<li>Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating God&#39;s Faithfulness</h2>

<ul class="back">
	<li>What happened as you trusted God with your goals and <em>I will</em> statements?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">God changes lives and uses them for His glory. One example is the story of a middle eastern man named Adam. He was trained to be a martyr for his religion. But all of that changed one night when he dramatically met Christ. He was so excited about his new relationship to Christ, he began to witness to all of those he knew. Despite being persecuted, he continues to share the gospel and train others. Encourage them by reading <span class="popup-link" @click = "popUp('pop2')"> 1 Corinthians 1:24-31</span>.&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">24&nbsp;</sup>but to those whom God has called, both Jews and Greeks, Christ the power of God and the wisdom of God.<sup class="versenum">25&nbsp;</sup>For the foolishness of God is wiser than human wisdom, and the weakness of God is stronger than human strength.</p>

	<p><sup class="versenum">26&nbsp;</sup>Brothers and sisters, think of what you were when you were called. Not many of you were wise by human standards; not many were influential; not many were of noble birth.<sup class="versenum">27&nbsp;</sup>But God chose the foolish things of the world to shame the wise; God chose the weak things of the world to shame the strong.<sup class="versenum">28&nbsp;</sup>God chose the lowly things of this world and the despised things&mdash;and the things that are not&mdash;to nullify the things that are,<sup class="versenum">29&nbsp;</sup>so that no one may boast before him.<sup class="versenum">30&nbsp;</sup>It is because of him that you are in Christ Jesus, who has become for us wisdom from God&mdash;that is, our righteousness, holiness and redemption.<sup class="versenum">31&nbsp;</sup>Therefore, as it is written: &ldquo;Let the one who boasts boast in the Lord.&rdquo;</p>
	</div>
	</div>
	</div>
	</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">Jesus challenged four men to follow Him and learn to fish for men. As Jesus was training his followers to fish for men, he modelled six different situations to them. The last situation was to an unlikely government official who would join the four men and become one of Jesus&rsquo; closest followers.</p>

</div>

<h2 class="up">Read</h2>

<p class="up">Read or watch Luke 5:27-32 two times as everyone listens</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 5:27-32</button><div class="collapsed" id ="Text0">

<p><sup>27&nbsp;</sup>After this, Jesus went out and saw a tax collector by the name of Levi sitting at his tax booth. &ldquo;Follow me,&rdquo; Jesus said to him,<sup class="versenum">28&nbsp;</sup>and Levi got up, left everything and followed him.</p>

<p><sup class="versenum">29&nbsp;</sup>Then Levi held a great banquet for Jesus at his house, and a large crowd of tax collectors and others were eating with them.<sup class="versenum">30&nbsp;</sup>But the Pharisees and the teachers of the law who belonged to their sect complained to his disciples, &ldquo;Why do you eat and drink with tax collectors and sinners?&rdquo;</p>

<p><sup class="versenum">31&nbsp;</sup>Jesus answered them, &ldquo;It is not the healthy who need a doctor, but the sick.<sup class="versenum">32&nbsp;</sup>I have not come to call the righteous, but sinners to repentance.&rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/eng/video/multiply1/109.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 5:27-32&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention (or what did you like best) and why?</li>
	<li>What did you learn about Jesus?</li>
	<li>What did you learn about people?</li>
	<li>How will you obey Jesus now that you know this?</li>
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
<div id="Summary3" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">Read <span class="popup-link" @click = "popUp('pop3')"> Luke 10:1-11</span>.&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>After this the Lord appointed seventy-two others and sent them two by two ahead of him to every town and place where he was about to go.<sup class="versenum">2&nbsp;</sup>He told them, &ldquo;The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.<sup class="versenum">3&nbsp;</sup>Go! I am sending you out like lambs among wolves.<sup class="versenum">4&nbsp;</sup>Do not take a purse or bag or sandals; and do not greet anyone on the road.</p>

	<p><sup class="versenum">5&nbsp;</sup>&ldquo;When you enter a house, first say, &lsquo;Peace to this house.&rsquo;<sup class="versenum">6&nbsp;</sup>If someone who promotes peace is there, your peace will rest on them; if not, it will return to you.<sup class="versenum">7&nbsp;</sup>Stay there, eating and drinking whatever they give you, for the worker deserves his wages. Do not move around from house to house.</p>

	<p><sup class="versenum">8&nbsp;</sup>&ldquo;When you enter a town and are welcomed, eat what is offered to you.<sup class="versenum">9&nbsp;</sup>Heal the sick who are there and tell them, &lsquo;The kingdom of God has come near to you.&rsquo;<sup class="versenum">10&nbsp;</sup>But when you enter a town and are not welcomed, go into its streets and say,<sup class="versenum">11&nbsp;</sup>&lsquo;Even the dust of your town we wipe from our feet as a warning to you. Yet be sure of this: The kingdom of God has come near.&rsquo;</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;Jesus sent out his followers to do the same things he had been doing: praying for people, caring for their needs and sharing about the Kingdom. This can be summarized as Prayer, Care, Share. He multiplied himself by training and sending out new workers. The Person of Peace is a God- prepared person who will receive you and your message. Through their relationships, they open new networks of people to the gospel.&nbsp;This is who we are looking for in Field 1 of the Kingdom Growth process.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for the Mission</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li>Review using the Amazing Question and caring for others</li>
	<li>Practice any skill or topic from previous lessons as needed</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission&nbsp;</h2>

<ul class="forward">
	<li>Identify 5 people from your Network List with whom you will take the initiative to minister to this week.</li>
	<li>Use what you learned this week with at least 3</li>
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


<h2 class="forward">Praying for the Mission</h2>

<ul class="forward">
	<li>Commit everyone&#39;s goals to the Lord. Ask the Lord to help us be faithful and use us to start a movement of disciple-makers.</li>
</ul>

<div class="for-enrichment">
<ul>
	<li class="nobreak-final-final">For further enrichment: Study the following Persons of Peace and discuss with another group member:<span class="popup-link" @click = "popUp('pop4')">  Luke 19:1-10</span>,&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>Jesus entered Jericho and was passing through.<sup class="versenum">2&nbsp;</sup>A man was there by the name of Zacchaeus; he was a chief tax collector and was wealthy.<sup class="versenum">3&nbsp;</sup>He wanted to see who Jesus was, but because he was short he could not see over the crowd.<sup class="versenum">4&nbsp;</sup>So he ran ahead and climbed a sycamore-fig tree to see him, since Jesus was coming that way.</p>

	<p><sup class="versenum">5&nbsp;</sup>When Jesus reached the spot, he looked up and said to him, &ldquo;Zacchaeus, come down immediately. I must stay at your house today.&rdquo;<sup class="versenum">6&nbsp;</sup>So he came down at once and welcomed him gladly.</p>

	<p><sup class="versenum">7&nbsp;</sup>All the people saw this and began to mutter, &ldquo;He has gone to be the guest of a sinner.&rdquo;</p>

	<p><sup class="versenum">8&nbsp;</sup>But Zacchaeus stood up and said to the Lord, &ldquo;Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount.&rdquo;</p>

	<p><sup class="versenum">9&nbsp;</sup>Jesus said to him, &ldquo;Today salvation has come to this house, because this man, too, is a son of Abraham.<sup class="versenum">10&nbsp;</sup>For the Son of Man came to seek and to save the lost.&rdquo;</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop5')"> Mark 5:14-20</span>,&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">14&nbsp;</sup>Those tending the pigs ran off and reported this in the town and countryside, and the people went out to see what had happened.<sup class="versenum">15&nbsp;</sup>When they came to Jesus, they saw the man who had been possessed by the legion of demons, sitting there, dressed and in his right mind; and they were afraid.<sup class="versenum">16&nbsp;</sup>Those who had seen it told the people what had happened to the demon-possessed man&mdash;and told about the pigs as well.<sup class="versenum">17&nbsp;</sup>Then the people began to plead with Jesus to leave their region.</p>

	<p><sup class="versenum">18&nbsp;</sup>As Jesus was getting into the boat, the man who had been demon-possessed begged to go with him.<sup class="versenum">19&nbsp;</sup>Jesus did not let him, but said, &ldquo;Go home to your own people and tell them how much the Lord has done for you, and how he has had mercy on you.&rdquo;<sup class="versenum">20&nbsp;</sup>So the man went away and began to tell in the Decapolis how much Jesus had done for him. And all the people were amazed.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop6')"> John 4:1-42</span>,&nbsp;

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<div>
	<div>
	<h3>Jesus Talks With a Samaritan Woman</h3>

	<p><sup class="versenum">1 </sup>Now Jesus learned that the Pharisees had heard that he was gaining and baptizing more disciples than John&mdash;<sup class="versenum">2&nbsp;</sup>although in fact it was not Jesus who baptized, but his disciples.<sup class="versenum">3&nbsp;</sup>So he left Judea and went back once more to Galilee.</p>

	<p><sup class="versenum">4&nbsp;</sup>Now he had to go through Samaria.<sup class="versenum">5&nbsp;</sup>So he came to a town in Samaria called Sychar, near the plot of ground Jacob had given to his son Joseph.<sup class="versenum">6&nbsp;</sup>Jacob&rsquo;s well was there, and Jesus, tired as he was from the journey, sat down by the well. It was about noon.</p>

	<p><sup class="versenum">7&nbsp;</sup>When a Samaritan woman came to draw water, Jesus said to her, &ldquo;Will you give me a drink?&rdquo;<sup class="versenum">8&nbsp;</sup>(His disciples had gone into the town to buy food.)</p>

	<p><sup class="versenum">9&nbsp;</sup>The Samaritan woman said to him, &ldquo;You are a Jew and I am a Samaritan woman. How can you ask me for a drink?&rdquo; (For Jews do not associate with Samaritans.)</p>

	<p><sup class="versenum">10&nbsp;</sup>Jesus answered her, &ldquo;If you knew the gift of God and who it is that asks you for a drink, you would have asked him and he would have given you living water.&rdquo;</p>

	<p><sup class="versenum">11&nbsp;</sup>&ldquo;Sir,&rdquo; the woman said, &ldquo;you have nothing to draw with and the well is deep. Where can you get this living water?<sup class="versenum">12&nbsp;</sup>Are you greater than our father Jacob, who gave us the well and drank from it himself, as did also his sons and his livestock?&rdquo;</p>

	<p><sup class="versenum">13&nbsp;</sup>Jesus answered, &ldquo;Everyone who drinks this water will be thirsty again,<sup class="versenum">14&nbsp;</sup>but whoever drinks the water I give them will never thirst. Indeed, the water I give them will become in them a spring of water welling up to eternal life.&rdquo;</p>

	<p><sup class="versenum">15&nbsp;</sup>The woman said to him, &ldquo;Sir, give me this water so that I won&rsquo;t get thirsty and have to keep coming here to draw water.&rdquo;</p>

	<p><sup class="versenum">16&nbsp;</sup>He told her, &ldquo;Go, call your husband and come back.&rdquo;</p>

	<p><sup class="versenum">17&nbsp;</sup>&ldquo;I have no husband,&rdquo; she replied.</p>

	<p>Jesus said to her, &ldquo;You are right when you say you have no husband.<sup class="versenum">18&nbsp;</sup>The fact is, you have had five husbands, and the man you now have is not your husband. What you have just said is quite true.&rdquo;</p>

	<p><sup class="versenum">19&nbsp;</sup>&ldquo;Sir,&rdquo; the woman said, &ldquo;I can see that you are a prophet.<sup class="versenum">20&nbsp;</sup>Our ancestors worshiped on this mountain, but you Jews claim that the place where we must worship is in Jerusalem.&rdquo;</p>

	<p><sup class="versenum">21&nbsp;</sup>&ldquo;Woman,&rdquo; Jesus replied, &ldquo;believe me, a time is coming when you will worship the Father neither on this mountain nor in Jerusalem.<sup class="versenum">22&nbsp;</sup>You Samaritans worship what you do not know; we worship what we do know, for salvation is from the Jews.<sup class="versenum">23&nbsp;</sup>Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks.<sup class="versenum">24&nbsp;</sup>God is spirit, and his worshipers must worship in the Spirit and in truth.&rdquo;</p>

	<p><sup class="versenum">25&nbsp;</sup>The woman said, &ldquo;I know that Messiah&rdquo; (called Christ) &ldquo;is coming. When he comes, he will explain everything to us.&rdquo;</p>

	<p><sup class="versenum">26&nbsp;</sup>Then Jesus declared, &ldquo;I, the one speaking to you&mdash;I am he.&rdquo;</p>

	<h3>The Disciples Rejoin Jesus</h3>

	<p><sup class="versenum">27&nbsp;</sup>Just then his disciples returned and were surprised to find him talking with a woman. But no one asked, &ldquo;What do you want?&rdquo; or &ldquo;Why are you talking with her?&rdquo;</p>

	<p><sup class="versenum">28&nbsp;</sup>Then, leaving her water jar, the woman went back to the town and said to the people,<sup class="versenum">29&nbsp;</sup>&ldquo;Come, see a man who told me everything I ever did. Could this be the Messiah?&rdquo;<sup class="versenum">30&nbsp;</sup>They came out of the town and made their way toward him.</p>

	<p><sup class="versenum">31&nbsp;</sup>Meanwhile his disciples urged him, &ldquo;Rabbi, eat something.&rdquo;</p>

	<p><sup class="versenum">32&nbsp;</sup>But he said to them, &ldquo;I have food to eat that you know nothing about.&rdquo;</p>

	<p><sup class="versenum">33&nbsp;</sup>Then his disciples said to each other, &ldquo;Could someone have brought him food?&rdquo;</p>

	<p><sup class="versenum">34&nbsp;</sup>&ldquo;My food,&rdquo; said Jesus, &ldquo;is to do the will of him who sent me and to finish his work.<sup class="versenum">35&nbsp;</sup>Don&rsquo;t you have a saying, &lsquo;It&rsquo;s still four months until harvest&rsquo;? I tell you, open your eyes and look at the fields! They are ripe for harvest.<sup class="versenum">36&nbsp;</sup>Even now the one who reaps draws a wage and harvests a crop for eternal life, so that the sower and the reaper may be glad together.<sup class="versenum">37&nbsp;</sup>Thus the saying &lsquo;One sows and another reaps&rsquo; is true.<sup class="versenum">38&nbsp;</sup>I sent you to reap what you have not worked for. Others have done the hard work, and you have reaped the benefits of their labor.&rdquo;</p>

	<p><sup class="versenum">39&nbsp;</sup>Many of the Samaritans from that town believed in him because of the woman&rsquo;s testimony, &ldquo;He told me everything I ever did.&rdquo;<sup class="versenum">40&nbsp;</sup>So when the Samaritans came to him, they urged him to stay with them, and he stayed two days.<sup class="versenum">41&nbsp;</sup>And because of his words many more became believers.</p>

	<p><sup class="versenum">42&nbsp;</sup>They said to the woman, &ldquo;We no longer believe just because of what you said; now we have heard for ourselves, and we know that this man really is the Savior of the world.&rdquo;</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop7')"> Acts 16:13-15&nbsp;</span>.&nbsp;

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">13&nbsp;</sup>On the Sabbath we went outside the city gate to the river, where we expected to find a place of prayer. We sat down and began to speak to the women who had gathered there.<sup class="versenum">14&nbsp;</sup>One of those listening was a woman from the city of Thyatira named Lydia, a dealer in purple cloth. She was a worshiper of God. The Lord opened her heart to respond to Paul&rsquo;s message.<sup class="versenum">15&nbsp;</sup>When she and the members of her household were baptized, she invited us to her home. &ldquo;If you consider me a believer in the Lord,&rdquo; she said, &ldquo;come and stay at my house.&rdquo; And she persuaded us.</p>
	</div>
	</div>
	<!-- end bible --></div>
	</li>
</ul>
</div>


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

			<td class="social" @click="share('lesson', 'God Prepared People : ', '/content/M2/eng/multiply1/multiply109.html')">
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