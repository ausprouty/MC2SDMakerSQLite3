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
                        <div class="chapter_number ltr"><h1>43.</h1></div>
                        <div class="chapter_title ltr"><h1>Leadership Multiplication</h1></div>
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
	<li class="up"><span><span>Ask the group to tell the story from last week.</span></span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch Luke 10:1-42 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read Luke 10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Sends Out the Seventy-Two</h3>

<p><sup class="versenum">1 </sup>After this the Lord appointed seventy-two others and sent them two by two ahead of him to every town and place where he was about to go.<sup class="versenum">2&nbsp;</sup>He told them, &ldquo;The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.<sup class="versenum">3&nbsp;</sup>Go! I am sending you out like lambs among wolves.<sup class="versenum">4&nbsp;</sup>Do not take a purse or bag or sandals; and do not greet anyone on the road.</p>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;When you enter a house, first say, &lsquo;Peace to this house.&rsquo;<sup class="versenum">6&nbsp;</sup>If someone who promotes peace is there, your peace will rest on them; if not, it will return to you.<sup class="versenum">7&nbsp;</sup>Stay there, eating and drinking whatever they give you, for the worker deserves his wages. Do not move around from house to house.</p>

<p><sup class="versenum">8&nbsp;</sup>&ldquo;When you enter a town and are welcomed, eat what is offered to you.<sup class="versenum">9&nbsp;</sup>Heal the sick who are there and tell them, &lsquo;The kingdom of God has come near to you.&rsquo;<sup class="versenum">10&nbsp;</sup>But when you enter a town and are not welcomed, go into its streets and say,<sup class="versenum">11&nbsp;</sup>&lsquo;Even the dust of your town we wipe from our feet as a warning to you. Yet be sure of this: The kingdom of God has come near.&rsquo;<sup class="versenum">12&nbsp;</sup>I tell you, it will be more bearable on that day for Sodom than for that town.</p>

<p><sup class="versenum">13&nbsp;</sup>&ldquo;Woe to you, Chorazin! Woe to you, Bethsaida! For if the miracles that were performed in you had been performed in Tyre and Sidon, they would have repented long ago, sitting in sackcloth and ashes.<sup class="versenum">14&nbsp;</sup>But it will be more bearable for Tyre and Sidon at the judgment than for you.<sup class="versenum">15&nbsp;</sup>And you, Capernaum, will you be lifted to the heavens? No, you will go down to Hades.</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;Whoever listens to you listens to me; whoever rejects you rejects me; but whoever rejects me rejects him who sent me.&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>The seventy-two returned with joy and said, &ldquo;Lord, even the demons submit to us in your name.&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>He replied, &ldquo;I saw Satan fall like lightning from heaven.<sup class="versenum">19&nbsp;</sup>I have given you authority to trample on snakes and scorpions and to overcome all the power of the enemy; nothing will harm you.<sup class="versenum">20&nbsp;</sup>However, do not rejoice that the spirits submit to you, but rejoice that your names are written in heaven.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>At that time Jesus, full of joy through the Holy Spirit, said, &ldquo;I praise you, Father, Lord of heaven and earth, because you have hidden these things from the wise and learned, and revealed them to little children. Yes, Father, for this is what you were pleased to do.</p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;All things have been committed to me by my Father. No one knows who the Son is except the Father, and no one knows who the Father is except the Son and those to whom the Son chooses to reveal him.&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>Then he turned to his disciples and said privately, &ldquo;Blessed are the eyes that see what you see.<sup class="versenum">24&nbsp;</sup>For I tell you that many prophets and kings wanted to see what you see but did not see it, and to hear what you hear but did not hear it.&rdquo;</p>

<h3>The Parable of the Good Samaritan</h3>

<p><sup class="versenum">25&nbsp;</sup>On one occasion an expert in the law stood up to test Jesus. &ldquo;Teacher,&rdquo; he asked, &ldquo;what must I do to inherit eternal life?&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;What is written in the Law?&rdquo; he replied. &ldquo;How do you read it?&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>He answered, &ldquo;&lsquo;Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind&rsquo;; and, &lsquo;Love your neighbor as yourself.&rsquo;&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;You have answered correctly,&rdquo; Jesus replied. &ldquo;Do this and you will live.&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>But he wanted to justify himself, so he asked Jesus, &ldquo;And who is my neighbor?&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>In reply Jesus said: &ldquo;A man was going down from Jerusalem to Jericho, when he was attacked by robbers. They stripped him of his clothes, beat him and went away, leaving him half dead.<sup class="versenum">31&nbsp;</sup>A priest happened to be going down the same road, and when he saw the man, he passed by on the other side.<sup class="versenum">32&nbsp;</sup>So too, a Levite, when he came to the place and saw him, passed by on the other side.<sup class="versenum">33&nbsp;</sup>But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him.<sup class="versenum">34&nbsp;</sup>He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him.<sup class="versenum">35&nbsp;</sup>The next day he took out two denarii and gave them to the innkeeper. &lsquo;Look after him,&rsquo; he said, &lsquo;and when I return, I will reimburse you for any extra expense you may have.&rsquo;</p>

<p><sup class="versenum">36&nbsp;</sup>&ldquo;Which of these three do you think was a neighbor to the man who fell into the hands of robbers?&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>The expert in the law replied, &ldquo;The one who had mercy on him.&rdquo;</p>

<p>Jesus told him, &ldquo;Go and do likewise.&rdquo;</p>

<h3>At the Home of Martha and Mary</h3>

<p><sup class="versenum">38&nbsp;</sup>As Jesus and his disciples were on their way, he came to a village where a woman named Martha opened her home to him.<sup class="versenum">39&nbsp;</sup>She had a sister called Mary, who sat at the Lord&rsquo;s feet listening to what he said.<sup class="versenum">40&nbsp;</sup>But Martha was distracted by all the preparations that had to be made. She came to him and asked, &ldquo;Lord, don&rsquo;t you care that my sister has left me to do the work by myself? Tell her to help me!&rdquo;</p>

<p><sup class="versenum">41&nbsp;</sup>&ldquo;Martha, Martha,&rdquo; the Lord answered, &ldquo;you are worried and upset about many things,<sup class="versenum">42&nbsp;</sup>but few things are needed&mdash;or indeed only one. Mary has chosen what is better, and it will not be taken away from her.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/243.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 10&nbsp;</button>
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

<p class="up">After the Feast of Dedication, Jesus travels to the other side of the Jordan River, where John baptized Him three years earlier. Jesus uses this as a base for the next several months. He raises up 70 other leaders and appoints them like He did the first 12. He gives them the same instructions and sends them out two by two throughout the district of Perea. This is another restructuring of the ministry. Now there are 35 new teams in addition to Jesus and the 12, totaling 36 traveling teams. Just like the first 12, they are sent out with nothing, causing them to depend on the Father. He wants to provide everything they will need. The teams spread out to visit each town. They find houses of peace by praying for people, caring for their needs and sharing about the Kingdom. When they return, they are so excited about God using them. Jesus puts the ministry results in proper perspective by reminding them that their excitement should be about their names being written in the Book of Life. Jesus breaks out in joyful praise to see the plan working. The will of the Father was that Jesus would die on the cross, but the work of the Father was that Jesus would make disciples, who would make disciples who would make disciples.</p>
&nbsp;

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

			<td class="social" @click="share('lesson', 'Leadership Multiplication: ', '/content/M2/eng/multiply2/multiply243.html')">
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