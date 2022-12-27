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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus uses Peter and John to Heal a Crippled Beggar</h1></div>
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

<p class="back">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (<span class="popup-link" @click = "popUp('pop1')"> Philippians 2:11</span>;&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">11&nbsp;</sup>and every tongue acknowledge that Jesus Christ is Lord,<br />
&nbsp;&nbsp;&nbsp;&nbsp;to the glory of God the Father.</p>
</div>
</div>
</div>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop2')"> 1 Timothy 2:4-6</span>a)

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">4&nbsp;</sup>who wants all people to be saved and to come to a knowledge of the truth.<sup class="versenum">5&nbsp;</sup>For there is one God and one mediator between God and mankind, the man Christ Jesus,<sup class="versenum">6&nbsp;</sup>who gave himself as a ransom for all people.&nbsp;</p>
</div>
</div>
<!-- end bible --></div>

<p>&nbsp;</p>

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
	<li class="up">Read or watch Acts 3 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 3</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Peter Heals a Lame Beggar</h3>

<p><sup class="versenum">1 </sup>One day Peter and John were going up to the temple at the time of prayer&mdash;at three in the afternoon.<sup class="versenum">2&nbsp;</sup>Now a man who was lame from birth was being carried to the temple gate called Beautiful, where he was put every day to beg from those going into the temple courts.<sup class="versenum">3&nbsp;</sup>When he saw Peter and John about to enter, he asked them for money.<sup class="versenum">4&nbsp;</sup>Peter looked straight at him, as did John. Then Peter said, &ldquo;Look at us!&rdquo;<sup class="versenum">5&nbsp;</sup>So the man gave them his attention, expecting to get something from them.</p>

<p><sup class="versenum">6&nbsp;</sup>Then Peter said, &ldquo;Silver or gold I do not have, but what I do have I give you. In the name of Jesus Christ of Nazareth, walk.&rdquo;<sup class="versenum">7&nbsp;</sup>Taking him by the right hand, he helped him up, and instantly the man&rsquo;s feet and ankles became strong.<sup class="versenum">8&nbsp;</sup>He jumped to his feet and began to walk. Then he went with them into the temple courts, walking and jumping, and praising God.<sup class="versenum">9&nbsp;</sup>When all the people saw him walking and praising God,<sup class="versenum">10&nbsp;</sup>they recognized him as the same man who used to sit begging at the temple gate called Beautiful, and they were filled with wonder and amazement at what had happened to him.</p>

<h3>Peter Speaks to the Onlookers</h3>

<p><sup class="versenum">11&nbsp;</sup>While the man held on to Peter and John, all the people were astonished and came running to them in the place called Solomon&rsquo;s Colonnade.<sup class="versenum">12&nbsp;</sup>When Peter saw this, he said to them: &ldquo;Fellow Israelites, why does this surprise you? Why do you stare at us as if by our own power or godliness we had made this man walk?<sup class="versenum">13&nbsp;</sup>The God of Abraham, Isaac and Jacob, the God of our fathers, has glorified his servant Jesus. You handed him over to be killed, and you disowned him before Pilate, though he had decided to let him go.<sup class="versenum">14&nbsp;</sup>You disowned the Holy and Righteous One and asked that a murderer be released to you.<sup class="versenum">15&nbsp;</sup>You killed the author of life, but God raised him from the dead. We are witnesses of this.<sup class="versenum">16&nbsp;</sup>By faith in the name of Jesus, this man whom you see and know was made strong. It is Jesus&rsquo; name and the faith that comes through him that has completely healed him, as you can all see.</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;Now, fellow Israelites, I know that you acted in ignorance, as did your leaders.<sup class="versenum">18&nbsp;</sup>But this is how God fulfilled what he had foretold through all the prophets, saying that his Messiah would suffer.<sup class="versenum">19&nbsp;</sup>Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord,<sup class="versenum">20&nbsp;</sup>and that he may send the Messiah, who has been appointed for you&mdash;even Jesus.<sup class="versenum">21&nbsp;</sup>Heaven must receive him until the time comes for God to restore everything, as he promised long ago through his holy prophets.<sup class="versenum">22&nbsp;</sup>For Moses said, &lsquo;The Lord your God will raise up for you a prophet like me from among your own people; you must listen to everything he tells you.<sup class="versenum">23&nbsp;</sup>Anyone who does not listen to him will be completely cut off from their people.&rsquo;</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;Indeed, beginning with Samuel, all the prophets who have spoken have foretold these days.<sup class="versenum">25&nbsp;</sup>And you are heirs of the prophets and of the covenant God made with your fathers. He said to Abraham, &lsquo;Through your offspring all peoples on earth will be blessed.&rsquo;<sup class="versenum">26&nbsp;</sup>When God raised up his servant, he sent him first to you to bless you by turning each of you from your wicked ways.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/306.mp4" type="button" class="external-movie">
         Watch Acts 3</button>
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

<p class="up">This is the first miracle Jesus does after his ascension. The disciples were continuing to live out His model of Holy Spirit power and dependence. Peter and John were going about their normal routine when this event took place. Jesus had taught them to give to whoever asked of them, (<span class="popup-link" @click = "popUp('pop4')"> Matthew 5:42</span>)&nbsp;</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">42&nbsp;</sup>Give to the one who asks you, and do not turn away from the one who wants to borrow from you.</p>
</div>
</div>
<!-- end bible --></div>
and they had already experienced being used to heal others during their short-term mission trips (<span class="popup-link" @click = "popUp('pop5')"> Matthew 10</span>).

<div class="popup invisible" id="pop5"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">1 </sup>Jesus called his twelve disciples to him and gave them authority to drive out impure spirits and to heal every disease and sickness.</p>

<p><sup class="versenum">2&nbsp;</sup>These are the names of the twelve apostles: first, Simon (who is called Peter) and his brother Andrew; James son of Zebedee, and his brother John;<sup class="versenum">3&nbsp;</sup>Philip and Bartholomew; Thomas and Matthew the tax collector; James son of Alphaeus, and Thaddaeus;<sup class="versenum">4&nbsp;</sup>Simon the Zealot and Judas Iscariot, who betrayed him.</p>

<p><sup class="versenum">5&nbsp;</sup>These twelve Jesus sent out with the following instructions: &ldquo;Do not go among the Gentiles or enter any town of the Samaritans.<sup class="versenum">6&nbsp;</sup>Go rather to the lost sheep of Israel.<sup class="versenum">7&nbsp;</sup>As you go, proclaim this message: &lsquo;The kingdom of heaven has come near.&rsquo;<sup class="versenum">8&nbsp;</sup>Heal the sick, raise the dead, cleanse those who have leprosy, drive out demons. Freely you have received; freely give.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;Do not get any gold or silver or copper to take with you in your belts&mdash;<sup class="versenum">10&nbsp;</sup>no bag for the journey or extra shirt or sandals or a staff, for the worker is worth his keep.<sup class="versenum">11&nbsp;</sup>Whatever town or village you enter, search there for some worthy person and stay at their house until you leave.<sup class="versenum">12&nbsp;</sup>As you enter the home, give it your greeting.<sup class="versenum">13&nbsp;</sup>If the home is deserving, let your peace rest on it; if it is not, let your peace return to you.<sup class="versenum">14&nbsp;</sup>If anyone will not welcome you or listen to your words, leave that home or town and shake the dust off your feet.<sup class="versenum">15&nbsp;</sup>Truly I tell you, it will be more bearable for Sodom and Gomorrah on the day of judgment than for that town.</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;I am sending you out like sheep among wolves. Therefore be as shrewd as snakes and as innocent as doves.<sup class="versenum">17&nbsp;</sup>Be on your guard; you will be handed over to the local councils and be flogged in the synagogues.<sup class="versenum">18&nbsp;</sup>On my account you will be brought before governors and kings as witnesses to them and to the Gentiles.<sup class="versenum">19&nbsp;</sup>But when they arrest you, do not worry about what to say or how to say it. At that time you will be given what to say,<sup class="versenum">20&nbsp;</sup>for it will not be you speaking, but the Spirit of your Father speaking through you.</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;Brother will betray brother to death, and a father his child; children will rebel against their parents and have them put to death.<sup class="versenum">22&nbsp;</sup>You will be hated by everyone because of me, but the one who stands firm to the end will be saved.<sup class="versenum">23&nbsp;</sup>When you are persecuted in one place, flee to another. Truly I tell you, you will not finish going through the towns of Israel before the Son of Man comes.</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;The student is not above the teacher, nor a servant above his master.<sup class="versenum">25&nbsp;</sup>It is enough for students to be like their teachers, and servants like their masters. If the head of the house has been called Beelzebul, how much more the members of his household!</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;So do not be afraid of them, for there is nothing concealed that will not be disclosed, or hidden that will not be made known.<sup class="versenum">27&nbsp;</sup>What I tell you in the dark, speak in the daylight; what is whispered in your ear, proclaim from the roofs.<sup class="versenum">28&nbsp;</sup>Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.<sup class="versenum">29&nbsp;</sup>Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father&rsquo;s care.<sup class="versenum">30&nbsp;</sup>And even the very hairs of your head are all numbered.<sup class="versenum">31&nbsp;</sup>So don&rsquo;t be afraid; you are worth more than many sparrows.</p>

<p><sup class="versenum">32&nbsp;</sup>&ldquo;Whoever acknowledges me before others, I will also acknowledge before my Father in heaven.<sup class="versenum">33&nbsp;</sup>But whoever disowns me before others, I will disown before my Father in heaven.</p>

<p><sup class="versenum">34&nbsp;</sup>&ldquo;Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword.<sup class="versenum">35&nbsp;</sup>For I have come to turn</p>

<p>&ldquo;&lsquo;a man against his father,<br />
&nbsp;&nbsp;&nbsp;&nbsp;a daughter against her mother,<br />
a daughter-in-law against her mother-in-law&mdash;<br />
<sup class="versenum">36&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;a man&rsquo;s enemies will be the members of his own household.&rsquo;</p>
</div>

<p><sup class="versenum">37&nbsp;</sup>&ldquo;Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me.<sup class="versenum">38&nbsp;</sup>Whoever does not take up their cross and follow me is not worthy of me.<sup class="versenum">39&nbsp;</sup>Whoever finds their life will lose it, and whoever loses their life for my sake will find it.</p>

<p><sup class="versenum">40&nbsp;</sup>&ldquo;Anyone who welcomes you welcomes me, and anyone who welcomes me welcomes the one who sent me.<sup class="versenum">41&nbsp;</sup>Whoever welcomes a prophet as a prophet will receive a prophet&rsquo;s reward, and whoever welcomes a righteous person as a righteous person will receive a righteous person&rsquo;s reward.<sup class="versenum">42&nbsp;</sup>And if anyone gives even a cup of cold water to one of these little ones who is my disciple, truly I tell you, that person will certainly not lose their reward.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
Peter was quick to point out that the healing was the work of the resurrected, living and present Jesus. This miracle gave an opportunity for Peter and John to witness to all of the people in the temple courts. We need to be ready to obey the Holy Spirit&rsquo;s prompting in any circumstance.

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

			<td class="social" @click="share('lesson', 'Jesus uses Peter and John to Heal a Crippled Beggar: ', '/content/M2/eng/multiply3/multiply306.html')">
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