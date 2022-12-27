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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply2-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>41.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership, Grace and Compassion</h1></div>
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

<ul>
	<li class="nobreak-final-final">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (<span class="popup-link" @click = "popUp('pop1')"> Philippians 2:11</span>b;&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6</span>a).&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people.&nbsp;</p>
	</div>
	</li>
</ul>

</div>


<h2 class="back">Caring for each other</h2>

<p><em>Minister to one another&rsquo;s needs in prayer, biblical counsel and encouragement. </em></p>

<ul>
	<li>Ask each person to tell one highlight and explain one challenge they experienced this week.</li>
	<li>Ask, &ldquo;What do you want Jesus to do for you this week?&rdquo; Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating&nbsp; Faithfulness</h2>

<p><em>Encourage loving accountability to obey Jesus</em></p>

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
	<li class="back">reminding them of what God wants to do through them.</li>
</ul>

<p class="back"><span><span>Our vision is: <em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></span></span></p>

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


</div>

<ul>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li><span><span>Ask the group to tell the story from last week.</span></span></li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch John 7:1-8:11 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read John 7:1-8:11</button><div class="collapsed" id ="Text0">
<!-- begin bible --><!-- end bible --><!-- begin bible -->

<h3>Jesus Goes to the Festival of Tabernacles</h3>

<p><sup class="versenum">1 </sup>After this, Jesus went around in Galilee. He did not want to go about in Judea because the Jewish leaders there were looking for a way to kill him.<sup class="versenum">2&nbsp;</sup>But when the Jewish Festival of Tabernacles was near,<sup class="versenum">3&nbsp;</sup>Jesus&rsquo; brothers said to him, &ldquo;Leave Galilee and go to Judea, so that your disciples there may see the works you do.<sup class="versenum">4&nbsp;</sup>No one who wants to become a public figure acts in secret. Since you are doing these things, show yourself to the world.&rdquo;<sup class="versenum">5&nbsp;</sup>For even his own brothers did not believe in him.</p>

<p><sup class="versenum">6&nbsp;</sup>Therefore Jesus told them, &ldquo;My time is not yet here; for you any time will do.<sup class="versenum">7&nbsp;</sup>The world cannot hate you, but it hates me because I testify that its works are evil.<sup class="versenum">8&nbsp;</sup>You go to the festival. I am not going up to this festival, because my time has not yet fully come.&rdquo;<sup class="versenum">9&nbsp;</sup>After he had said this, he stayed in Galilee.</p>

<p><sup class="versenum">10&nbsp;</sup>However, after his brothers had left for the festival, he went also, not publicly, but in secret.<sup class="versenum">11&nbsp;</sup>Now at the festival the Jewish leaders were watching for Jesus and asking, &ldquo;Where is he?&rdquo;</p>

<p><sup class="versenum">12&nbsp;</sup>Among the crowds there was widespread whispering about him. Some said, &ldquo;He is a good man.&rdquo;</p>

<p>Others replied, &ldquo;No, he deceives the people.&rdquo;<sup class="versenum">13&nbsp;</sup>But no one would say anything publicly about him for fear of the leaders.</p>

<h3>Jesus Teaches at the Festival</h3>

<p><sup class="versenum">14&nbsp;</sup>Not until halfway through the festival did Jesus go up to the temple courts and begin to teach.<sup class="versenum">15&nbsp;</sup>The Jews there were amazed and asked, &ldquo;How did this man get such learning without having been taught?&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>Jesus answered, &ldquo;My teaching is not my own. It comes from the one who sent me.<sup class="versenum">17&nbsp;</sup>Anyone who chooses to do the will of God will find out whether my teaching comes from God or whether I speak on my own.<sup class="versenum">18&nbsp;</sup>Whoever speaks on their own does so to gain personal glory, but he who seeks the glory of the one who sent him is a man of truth; there is nothing false about him.<sup class="versenum">19&nbsp;</sup>Has not Moses given you the law? Yet not one of you keeps the law. Why are you trying to kill me?&rdquo;</p>

<p><sup class="versenum">20&nbsp;</sup>&ldquo;You are demon-possessed,&rdquo; the crowd answered. &ldquo;Who is trying to kill you?&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>Jesus said to them, &ldquo;I did one miracle, and you are all amazed.<sup class="versenum">22&nbsp;</sup>Yet, because Moses gave you circumcision (though actually it did not come from Moses, but from the patriarchs), you circumcise a boy on the Sabbath.<sup class="versenum">23&nbsp;</sup>Now if a boy can be circumcised on the Sabbath so that the law of Moses may not be broken, why are you angry with me for healing a man&rsquo;s whole body on the Sabbath?<sup class="versenum">24&nbsp;</sup>Stop judging by mere appearances, but instead judge correctly.&rdquo;</p>

<h3>Division Over Who Jesus Is</h3>

<p><sup class="versenum">25&nbsp;</sup>At that point some of the people of Jerusalem began to ask, &ldquo;Isn&rsquo;t this the man they are trying to kill?<sup class="versenum">26&nbsp;</sup>Here he is, speaking publicly, and they are not saying a word to him. Have the authorities really concluded that he is the Messiah?<sup class="versenum">27&nbsp;</sup>But we know where this man is from; when the Messiah comes, no one will know where he is from.&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>Then Jesus, still teaching in the temple courts, cried out, &ldquo;Yes, you know me, and you know where I am from. I am not here on my own authority, but he who sent me is true. You do not know him,<sup class="versenum">29&nbsp;</sup>but I know him because I am from him and he sent me.&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>At this they tried to seize him, but no one laid a hand on him, because his hour had not yet come.<sup class="versenum">31&nbsp;</sup>Still, many in the crowd believed in him. They said, &ldquo;When the Messiah comes, will he perform more signs than this man?&rdquo;</p>

<p><sup class="versenum">32&nbsp;</sup>The Pharisees heard the crowd whispering such things about him. Then the chief priests and the Pharisees sent temple guards to arrest him.</p>

<p><sup class="versenum">33&nbsp;</sup>Jesus said, &ldquo;I am with you for only a short time, and then I am going to the one who sent me.<sup class="versenum">34&nbsp;</sup>You will look for me, but you will not find me; and where I am, you cannot come.&rdquo;</p>

<p><sup class="versenum">35&nbsp;</sup>The Jews said to one another, &ldquo;Where does this man intend to go that we cannot find him? Will he go where our people live scattered among the Greeks, and teach the Greeks?<sup class="versenum">36&nbsp;</sup>What did he mean when he said, &lsquo;You will look for me, but you will not find me,&rsquo; and &lsquo;Where I am, you cannot come&rsquo;?&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>On the last and greatest day of the festival, Jesus stood and said in a loud voice, &ldquo;Let anyone who is thirsty come to me and drink.<sup class="versenum">38&nbsp;</sup>Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.&rdquo;<sup class="versenum">39&nbsp;</sup>By this he meant the Spirit, whom those who believed in him were later to receive. Up to that time the Spirit had not been given, since Jesus had not yet been glorified.</p>

<p><sup class="versenum">40&nbsp;</sup>On hearing his words, some of the people said, &ldquo;Surely this man is the Prophet.&rdquo;</p>

<p><sup class="versenum">41&nbsp;</sup>Others said, &ldquo;He is the Messiah.&rdquo;</p>

<p>Still others asked, &ldquo;How can the Messiah come from Galilee?<sup class="versenum">42&nbsp;</sup>Does not Scripture say that the Messiah will come from David&rsquo;s descendants and from Bethlehem, the town where David lived?&rdquo;<sup class="versenum">43&nbsp;</sup>Thus the people were divided because of Jesus.<sup class="versenum">44&nbsp;</sup>Some wanted to seize him, but no one laid a hand on him.</p>

<h3>Unbelief of the Jewish Leaders</h3>

<p><sup class="versenum">45&nbsp;</sup>Finally the temple guards went back to the chief priests and the Pharisees, who asked them, &ldquo;Why didn&rsquo;t you bring him in?&rdquo;</p>

<p><sup class="versenum">46&nbsp;</sup>&ldquo;No one ever spoke the way this man does,&rdquo; the guards replied.</p>

<p><sup class="versenum">47&nbsp;</sup>&ldquo;You mean he has deceived you also?&rdquo; the Pharisees retorted.<sup class="versenum">48&nbsp;</sup>&ldquo;Have any of the rulers or of the Pharisees believed in him?<sup class="versenum">49&nbsp;</sup>No! But this mob that knows nothing of the law&mdash;there is a curse on them.&rdquo;</p>

<p><sup class="versenum">50&nbsp;</sup>Nicodemus, who had gone to Jesus earlier and who was one of their own number, asked,<sup class="versenum">51&nbsp;</sup>&ldquo;Does our law condemn a man without first hearing him to find out what he has been doing?&rdquo;</p>

<p><sup class="versenum">52&nbsp;</sup>They replied, &ldquo;Are you from Galilee, too? Look into it, and you will find that a prophet does not come out of Galilee.&rdquo;</p>

<p><sup class="versenum">52</sup>Then they all went home, <sup class="mid-paragraph versenum">8:1&nbsp;</sup>but Jesus went to the Mount of Olives.</p>

<p><sup class="versenum">2&nbsp;</sup>At dawn he appeared again in the temple courts, where all the people gathered around him, and he sat down to teach them.<sup class="versenum">3&nbsp;</sup>The teachers of the law and the Pharisees brought in a woman caught in adultery. They made her stand before the group<sup class="versenum">4&nbsp;</sup>and said to Jesus, &ldquo;Teacher, this woman was caught in the act of adultery.<sup class="versenum">5&nbsp;</sup>In the Law Moses commanded us to stone such women. Now what do you say?&rdquo;<sup class="versenum">6&nbsp;</sup>They were using this question as a trap, in order to have a basis for accusing him.</p>

<p>But Jesus bent down and started to write on the ground with his finger.<sup class="versenum">7&nbsp;</sup>When they kept on questioning him, he straightened up and said to them, &ldquo;Let any one of you who is without sin be the first to throw a stone at her.&rdquo;<sup class="versenum">8&nbsp;</sup>Again he stooped down and wrote on the ground.</p>

<p><sup class="versenum">9&nbsp;</sup>At this, those who heard began to go away one at a time, the older ones first, until only Jesus was left, with the woman still standing there.<sup class="versenum">10&nbsp;</sup>Jesus straightened up and asked her, &ldquo;Woman, where are they? Has no one condemned you?&rdquo;</p>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;No one, sir,&rdquo; she said.</p>

<p>&ldquo;Then neither do I condemn you,&rdquo; Jesus declared. &ldquo;Go now and leave your life of sin.&rdquo;</p>
<!-- end bible --><!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/241.mp4" type="button" class="external-movie">
         Watch John 7:1-8:11</button>
    <div class="collapsed"></div>



<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li><span><span>What caught your attention or what did you like best? Why?</span></span></li>
	<li><span><span>What is new or has developed at this point in Jesus story?</span></span></li>
	<li><span><span>What do we learn about the humanity or divinity of Jesus from this passage?</span></span></li>
	<li><span><span>How can we live differently now that we know this story?</span></span></li>
</ul>

<p><span><span>Additional Questions:</span></span></p>

<ul class="up">
	<li><span><span>What are his followers learning?</span></span></li>
	<li><span><span>What is Jesus modeling to us about life and ministry or godly leadership?</span></span></li>
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


<h2 class="up">Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">Jesus and his disciples went to Jerusalem during the annual seven-day Feast of Tabernacles (or Feast of Booths). It was a time when all Jewish men who could travel must report to Jerusalem to present themselves. Jesus&rsquo; half brothers, who still did not believe in Him, go on to Jerusalem without Him. Later, Jesus arrives midway through the Feast. He goes to the temple and begins to teach about who He is. He reveals that He is from the family line of David, even though He was raised in Nazareth. An argument breaks out and there is a lot of yelling about Jesus, but He slips away for the night to spend more time with the Father. Meanwhile, the religious leaders were arguing about Jesus. One of them, who had earlier become a believer in Jesus, tried to influence the group but they ridiculed him. When Jesus came back to Jerusalem, the religious leaders tried to trap Him by bringing a woman caught in adultery to Him. Jesus models leadership with great wisdom, compassion, mercy, and grace while challenging the religious leaders with their own sin and hardness of heart.</p>

</div>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<h2 class="forward">Preparing for the Mission</h2>

<ul class="forward">
	<li>Practice needed skills or previous topics to help prepare to minister to others:
	<ul>
		<li>Prayer, Care, Share</li>
		<li>Gospel</li>
		<li>Foundational Bible Studies.</li>
	</ul>
	</li>
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
        @keyup="this.addNote('note3Text')"
        id="note3Text"
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

			<td class="social" @click="share('lesson', 'Leadership, Grace and Compassion: ', '/content/M2/eng/multiply2/multiply241.html')">
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