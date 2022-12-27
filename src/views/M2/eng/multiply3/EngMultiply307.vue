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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>Boldness in the Face of Persecution</h1></div>
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
	<li class="up">Read or watch Acts 4:1-31 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 4:1-31</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Peter and John Before the Sanhedrin</h3>

<p><sup class="versenum">1 </sup>The priests and the captain of the temple guard and the Sadducees came up to Peter and John while they were speaking to the people.<sup class="versenum">2&nbsp;</sup>They were greatly disturbed because the apostles were teaching the people, proclaiming in Jesus the resurrection of the dead.<sup class="versenum">3&nbsp;</sup>They seized Peter and John and, because it was evening, they put them in jail until the next day.<sup class="versenum">4&nbsp;</sup>But many who heard the message believed; so the number of men who believed grew to about five thousand.</p>

<p><sup class="versenum">5&nbsp;</sup>The next day the rulers, the elders and the teachers of the law met in Jerusalem.<sup class="versenum">6&nbsp;</sup>Annas the high priest was there, and so were Caiaphas, John, Alexander and others of the high priest&rsquo;s family.<sup class="versenum">7&nbsp;</sup>They had Peter and John brought before them and began to question them: &ldquo;By what power or what name did you do this?&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>Then Peter, filled with the Holy Spirit, said to them: &ldquo;Rulers and elders of the people!<sup class="versenum">9&nbsp;</sup>If we are being called to account today for an act of kindness shown to a man who was lame and are being asked how he was healed,<sup class="versenum">10&nbsp;</sup>then know this, you and all the people of Israel: It is by the name of Jesus Christ of Nazareth, whom you crucified but whom God raised from the dead, that this man stands before you healed.<sup class="versenum">11&nbsp;</sup>Jesus is</p>

<p>&ldquo;&lsquo;the stone you builders rejected,<br />
&nbsp;&nbsp;&nbsp;&nbsp;which has become the cornerstone.&rsquo;</p>

<p><sup class="versenum">12&nbsp;</sup>Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>When they saw the courage of Peter and John and realized that they were unschooled, ordinary men, they were astonished and they took note that these men had been with Jesus.<sup class="versenum">14&nbsp;</sup>But since they could see the man who had been healed standing there with them, there was nothing they could say.<sup class="versenum">15&nbsp;</sup>So they ordered them to withdraw from the Sanhedrin and then conferred together.<sup class="versenum">16&nbsp;</sup>&ldquo;What are we going to do with these men?&rdquo; they asked. &ldquo;Everyone living in Jerusalem knows they have performed a notable sign, and we cannot deny it.<sup class="versenum">17&nbsp;</sup>But to stop this thing from spreading any further among the people, we must warn them to speak no longer to anyone in this name.&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>Then they called them in again and commanded them not to speak or teach at all in the name of Jesus.<sup class="versenum">19&nbsp;</sup>But Peter and John replied, &ldquo;Which is right in God&rsquo;s eyes: to listen to you, or to him? You be the judges!<sup class="versenum">20&nbsp;</sup>As for us, we cannot help speaking about what we have seen and heard.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>After further threats they let them go. They could not decide how to punish them, because all the people were praising God for what had happened.<sup class="versenum">22&nbsp;</sup>For the man who was miraculously healed was over forty years old.</p>

<h3>The Believers Pray</h3>

<p><sup class="versenum">23&nbsp;</sup>On their release, Peter and John went back to their own people and reported all that the chief priests and the elders had said to them.<sup class="versenum">24&nbsp;</sup>When they heard this, they raised their voices together in prayer to God. &ldquo;Sovereign Lord,&rdquo; they said, &ldquo;you made the heavens and the earth and the sea, and everything in them.<sup class="versenum">25&nbsp;</sup>You spoke by the Holy Spirit through the mouth of your servant, our father David:</p>

<p>&ldquo;&lsquo;Why do the nations rage<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the peoples plot in vain?<br />
<sup class="versenum">26&nbsp;</sup>The kings of the earth rise up<br />
&nbsp;&nbsp;&nbsp;&nbsp;and the rulers band together<br />
against the Lord<br />
&nbsp;&nbsp;&nbsp;&nbsp;and against his anointed one.&rsquo;</p>

<p><sup class="versenum">27&nbsp;</sup>Indeed Herod and Pontius Pilate met together with the Gentiles and the people of Israel in this city to conspire against your holy servant Jesus, whom you anointed.<sup class="versenum">28&nbsp;</sup>They did what your power and will had decided beforehand should happen.<sup class="versenum">29&nbsp;</sup>Now, Lord, consider their threats and enable your servants to speak your word with great boldness.<sup class="versenum">30&nbsp;</sup>Stretch out your hand to heal and perform signs and wonders through the name of your holy servant Jesus.&rdquo;</p>

<p><sup class="versenum">31&nbsp;</sup>After they prayed, the place where they were meeting was shaken. And they were all filled with the Holy Spirit and spoke the word of God boldly.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/307.mp4" type="button" class="external-movie">
         Watch Acts 4:1-31</button>
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

<p class="up">The religious leaders were upset that Peter was teaching people about the resurrection of the dead through Jesus, so they arrested Peter and John. When the crowds witnessed the healing of the lame man and listened to Peter&rsquo;s testimony, another 2,000 men, plus women and children, became believers. Jesus had taught the apostles not to worry about what they were to say when they were dragged in front of authorities. He promised that the Spirit would guide them in what to say (<span class="popup-link" @click = "popUp('pop1')"> Matthew 10:17-20</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">17&nbsp;</sup>Be on your guard; you will be handed over to the local councils and be flogged in the synagogues.<sup class="versenum">18&nbsp;</sup>On my account you will be brought before governors and kings as witnesses to them and to the Gentiles.<sup class="versenum">19&nbsp;</sup>But when they arrest you, do not worry about what to say or how to say it. At that time you will be given what to say,<sup class="versenum">20&nbsp;</sup>for it will not be you speaking, but the Spirit of your Father speaking through you.</p>
</div>
</div>
<!-- end bible --></div>
&nbsp;Even though Peter and John did not have a formal education, they had a very effective ministry, having learned from Jesus and being empowered by His Spirit. In this fearful conflict with the authorities, the believers&rsquo; courageous response was to pray for boldness in the face of persecution so they could continue to obey Jesus in the mission.

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

			<td class="social" @click="share('lesson', 'Boldness in the Face of Persecution: ', '/content/M2/eng/multiply3/multiply307.html')">
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