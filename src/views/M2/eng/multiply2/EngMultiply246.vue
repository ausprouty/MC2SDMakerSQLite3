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
                        <div class="chapter_number ltr"><h1>46.</h1></div>
                        <div class="chapter_title ltr"><h1>Passionate Leadership</h1></div>
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

<p class="up">Read or watch Luke 19:28-48 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 19:28-48</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Comes to Jerusalem as King</h3>

<p><sup class="versenum">28&nbsp;</sup>After Jesus had said this, he went on ahead, going up to Jerusalem.<sup class="versenum">29&nbsp;</sup>As he approached Bethphage and Bethany at the hill called the Mount of Olives, he sent two of his disciples, saying to them,<sup class="versenum">30&nbsp;</sup>&ldquo;Go to the village ahead of you, and as you enter it, you will find a colt tied there, which no one has ever ridden. Untie it and bring it here.<sup class="versenum">31&nbsp;</sup>If anyone asks you, &lsquo;Why are you untying it?&rsquo; say, &lsquo;The Lord needs it.&rsquo;&rdquo;</p>

<p><sup class="versenum">32&nbsp;</sup>Those who were sent ahead went and found it just as he had told them.<sup class="versenum">33&nbsp;</sup>As they were untying the colt, its owners asked them, &ldquo;Why are you untying the colt?&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>They replied, &ldquo;The Lord needs it.&rdquo;</p>

<p><sup class="versenum">35&nbsp;</sup>They brought it to Jesus, threw their cloaks on the colt and put Jesus on it.<sup class="versenum">36&nbsp;</sup>As he went along, people spread their cloaks on the road.</p>

<p><sup class="versenum">37&nbsp;</sup>When he came near the place where the road goes down the Mount of Olives, the whole crowd of disciples began joyfully to praise God in loud voices for all the miracles they had seen:</p>

<p><sup class="versenum">38&nbsp;</sup>&ldquo;Blessed is the king who comes in the name of the Lord!&rdquo;</p>

<p>&ldquo;Peace in heaven and glory in the highest!&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>Some of the Pharisees in the crowd said to Jesus, &ldquo;Teacher, rebuke your disciples!&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>&ldquo;I tell you,&rdquo; he replied, &ldquo;if they keep quiet, the stones will cry out.&rdquo;</p>

<p><sup class="versenum">41&nbsp;</sup>As he approached Jerusalem and saw the city, he wept over it<sup class="versenum">42&nbsp;</sup>and said, &ldquo;If you, even you, had only known on this day what would bring you peace&mdash;but now it is hidden from your eyes.<sup class="versenum">43&nbsp;</sup>The days will come upon you when your enemies will build an embankment against you and encircle you and hem you in on every side.<sup class="versenum">44&nbsp;</sup>They will dash you to the ground, you and the children within your walls. They will not leave one stone on another, because you did not recognize the time of God&rsquo;s coming to you.&rdquo;</p>

<h3>Jesus at the Temple</h3>

<p><sup class="versenum">45&nbsp;</sup>When Jesus entered the temple courts, he began to drive out those who were selling.<sup class="versenum">46&nbsp;</sup>&ldquo;It is written,&rdquo; he said to them, &ldquo;&lsquo;My house will be a house of prayer&rsquo;; but you have made it &lsquo;a den of robbers.&rsquo;&rdquo;</p>

<p><sup class="versenum">47&nbsp;</sup>Every day he was teaching at the temple. But the chief priests, the teachers of the law and the leaders among the people were trying to kill him.<sup class="versenum">48&nbsp;</sup>Yet they could not find any way to do it, because all the people hung on his words.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/246.mp4" type="button" class="external-movie">
         Watch Luke 19:28-48</button>
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

<p class="up">A prophecy given 500 years earlier is fulfilled before these young leaders&rsquo; eyes. A king riding on a donkey will approach Jerusalem! (Zechariah 9:9). People were praising God as Jesus descended down the Mount of Olives on the road into the city of Jerusalem. The Pharisees understood the Messianic implications of the situation and told Jesus to tell His disciples to be quiet. But Jesus knew the importance that this testimony played in the Father&rsquo;s plan. As Jesus approaches the city, He begins to weep. Jesus was grieved because He knew most of the people did not realize who He was or the significance of this event. He also knew that one day judgement would come on the city because of their unbelief; Jerusalem would be destroyed by the Roman army. Once again, we see Jesus&rsquo; passion displayed as he drives out the money changers who had returned to their old practices, taking advantage of people coming to worship God. Jesus not only showed passion for the Father&rsquo;s reputation, but compassion for the poor and the foreigner.</p>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Matthew 21 :1-17</span>;&nbsp;</span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<h3><span class="for-enrichment">Jesus Comes to Jerusalem as King</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">1 </sup>As they approached Jerusalem and came to Bethphage on the Mount of Olives, Jesus sent two disciples,<sup class="versenum">2&nbsp;</sup>saying to them, &ldquo;Go to the village ahead of you, and at once you will find a donkey tied there, with her colt by her. Untie them and bring them to me.<sup class="versenum">3&nbsp;</sup>If anyone says anything to you, say that the Lord needs them, and he will send them right away.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">4&nbsp;</sup>This took place to fulfill what was spoken through the prophet:</span></p>

	<p><span class="for-enrichment"><sup class="versenum">5&nbsp;</sup>&ldquo;Say to Daughter Zion,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&lsquo;See, your king comes to you,<br />
	gentle and riding on a donkey,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and on a colt, the foal of a donkey.&rsquo;&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment"><sup class="versenum">6&nbsp;</sup>The disciples went and did as Jesus had instructed them.<sup class="versenum">7&nbsp;</sup>They brought the donkey and the colt and placed their cloaks on them for Jesus to sit on.<sup class="versenum">8&nbsp;</sup>A very large crowd spread their cloaks on the road, while others cut branches from the trees and spread them on the road.<sup class="versenum">9&nbsp;</sup>The crowds that went ahead of him and those that followed shouted,</span></p>

	<p><span class="for-enrichment">&ldquo;Hosanna to the Son of David!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment">&ldquo;Blessed is he who comes in the name of the Lord!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment">&ldquo;Hosanna in the highest heaven!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment"><sup class="versenum">10&nbsp;</sup>When Jesus entered Jerusalem, the whole city was stirred and asked, &ldquo;Who is this?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">11&nbsp;</sup>The crowds answered, &ldquo;This is Jesus, the prophet from Nazareth in Galilee.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">12&nbsp;</sup>Jesus entered the temple courts and drove out all who were buying and selling there. He overturned the tables of the money changers and the benches of those selling doves.<sup class="versenum">13&nbsp;</sup>&ldquo;It is written,&rdquo; he said to them, &ldquo;&lsquo;My house will be called a house of prayer,&rsquo; but you are making it &lsquo;a den of robbers.&rsquo;&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">14&nbsp;</sup>The blind and the lame came to him at the temple, and he healed them.<sup class="versenum">15&nbsp;</sup>But when the chief priests and the teachers of the law saw the wonderful things he did and the children shouting in the temple courts, &ldquo;Hosanna to the Son of David,&rdquo; they were indignant.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">16&nbsp;</sup>&ldquo;Do you hear what these children are saying?&rdquo; they asked him.</span></p>

	<p><span class="for-enrichment">&ldquo;Yes,&rdquo; replied Jesus, &ldquo;have you never read,</span></p>

	<p><span class="for-enrichment">&ldquo;&lsquo;From the lips of children and infants<br />
	&nbsp;&nbsp;&nbsp;&nbsp;you, Lord, have called forth your praise&rsquo;?&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>And he left them and went out of the city to Bethany, where he spent the night.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment"><span class="popup-link" @click = "popUp('pop4')"> Mark 11 :1-26</span>;&nbsp;</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<h3><span class="for-enrichment">Jesus Comes to Jerusalem as King</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">1 </sup>As they approached Jerusalem and came to Bethphage and Bethany at the Mount of Olives, Jesus sent two of his disciples,<sup class="versenum">2&nbsp;</sup>saying to them, &ldquo;Go to the village ahead of you, and just as you enter it, you will find a colt tied there, which no one has ever ridden. Untie it and bring it here.<sup class="versenum">3&nbsp;</sup>If anyone asks you, &lsquo;Why are you doing this?&rsquo; say, &lsquo;The Lord needs it and will send it back here shortly.&rsquo;&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">4&nbsp;</sup>They went and found a colt outside in the street, tied at a doorway. As they untied it,<sup class="versenum">5&nbsp;</sup>some people standing there asked, &ldquo;What are you doing, untying that colt?&rdquo;<sup class="versenum">6&nbsp;</sup>They answered as Jesus had told them to, and the people let them go.<sup class="versenum">7&nbsp;</sup>When they brought the colt to Jesus and threw their cloaks over it, he sat on it.<sup class="versenum">8&nbsp;</sup>Many people spread their cloaks on the road, while others spread branches they had cut in the fields.<sup class="versenum">9&nbsp;</sup>Those who went ahead and those who followed shouted,</span></p>

	<p><span class="for-enrichment">&ldquo;Hosanna!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment">&ldquo;Blessed is he who comes in the name of the Lord!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment"><sup class="versenum">10&nbsp;</sup>&ldquo;Blessed is the coming kingdom of our father David!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment">&ldquo;Hosanna in the highest heaven!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment"><sup class="versenum">11&nbsp;</sup>Jesus entered Jerusalem and went into the temple courts. He looked around at everything, but since it was already late, he went out to Bethany with the Twelve.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">12&nbsp;</sup>The next day as they were leaving Bethany, Jesus was hungry.<sup class="versenum">13&nbsp;</sup>Seeing in the distance a fig tree in leaf, he went to find out if it had any fruit. When he reached it, he found nothing but leaves, because it was not the season for figs.<sup class="versenum">14&nbsp;</sup>Then he said to the tree, &ldquo;May no one ever eat fruit from you again.&rdquo; And his disciples heard him say it.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">15&nbsp;</sup>On reaching Jerusalem, Jesus entered the temple courts and began driving out those who were buying and selling there. He overturned the tables of the money changers and the benches of those selling doves,<sup class="versenum">16&nbsp;</sup>and would not allow anyone to carry merchandise through the temple courts.<sup class="versenum">17&nbsp;</sup>And as he taught them, he said, &ldquo;Is it not written: &lsquo;My house will be called a house of prayer for all nations&rsquo;? But you have made it &lsquo;a den of robbers.&rsquo;&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">18&nbsp;</sup>The chief priests and the teachers of the law heard this and began looking for a way to kill him, for they feared him, because the whole crowd was amazed at his teaching.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">19&nbsp;</sup>When evening came, Jesus and his disciples went out of the city.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">20&nbsp;</sup>In the morning, as they went along, they saw the fig tree withered from the roots.<sup class="versenum">21&nbsp;</sup>Peter remembered and said to Jesus, &ldquo;Rabbi, look! The fig tree you cursed has withered!&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">22&nbsp;</sup>&ldquo;Have faith in God,&rdquo; Jesus answered.<sup class="versenum">23&nbsp;</sup>&ldquo;Truly I tell you, if anyone says to this mountain, &lsquo;Go, throw yourself into the sea,&rsquo; and does not doubt in their heart but believes that what they say will happen, it will be done for them.<sup class="versenum">24&nbsp;</sup>Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.<sup class="versenum">25&nbsp;</sup>And when you stand praying, if you hold anything against anyone, forgive them, so that your Father in heaven may forgive you your sins.&rdquo;<sup class="versenum">[26]&nbsp;</sup></span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment"><span class="popup-link" @click = "popUp('pop5')"> &nbsp;John 12:12-19</span>.&nbsp;</span>

	<div class="popup invisible" id="pop5"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">12&nbsp;</sup>The next day the great crowd that had come for the festival heard that Jesus was on his way to Jerusalem.<sup class="versenum">13&nbsp;</sup>They took palm branches and went out to meet him, shouting,</span></p>

	<p><span class="for-enrichment">&ldquo;Hosanna!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment">&ldquo;Blessed is he who comes in the name of the Lord!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment">&ldquo;Blessed is the king of Israel!&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment"><sup class="versenum">14&nbsp;</sup>Jesus found a young donkey and sat on it, as it is written:</span></p>

	<p><span class="for-enrichment"><sup class="versenum">15&nbsp;</sup>&ldquo;Do not be afraid, Daughter Zion;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;see, your king is coming,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;seated on a donkey&rsquo;s colt.&rdquo;</span></p>
	</div>

	<p><span class="for-enrichment"><sup class="versenum">16&nbsp;</sup>At first his disciples did not understand all this. Only after Jesus was glorified did they realize that these things had been written about him and that these things had been done to him.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>Now the crowd that was with him when he called Lazarus from the tomb and raised him from the dead continued to spread the word.<sup class="versenum">18&nbsp;</sup>Many people, because they had heard that he had performed this sign, went out to meet him.<sup class="versenum">19&nbsp;</sup>So the Pharisees said to one another, &ldquo;See, this is getting us nowhere. Look how the whole world has gone after him!&rdquo;</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	</li>
</ul>

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

			<td class="social" @click="share('lesson', 'Passionate Leadership: ', '/content/M2/eng/multiply2/multiply246.html')">
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