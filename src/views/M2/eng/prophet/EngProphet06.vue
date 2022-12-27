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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-prophet-index')">
        <img src="@/assets/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>Birth and Purpose of Jesus</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<h2>Caring for one another</h2>

<ul>
	<li><span>What has been a highlight this week?</span></li>
	<li><span>What has been a challenge this week?</span></li>
	<li><span>What do you want Isa to do for you this week?</span></li>
	<li><span>Briefly pray for Isa to meet the needs that are shared.</span></li>
</ul>

<h2>Celebrate Faithfulness</h2>

<ul>
	<li>Do you remember the story about Isa from last week?</li>
	<li>Were you able to share the story with someone last week?</li>
</ul>

<h2>Motivation and Encouragement</h2>

<ul>
	<li>Encourage each other to keep obeying Allah and remind each other of the importance of sharing the stories with others.</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2><span><span><span>+ Context</span></span></span></h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p><span><span><span>As time went on a baby was born to a young family.&nbsp; This baby was very different than any other baby. This story is about Jesus.&nbsp; </span></span></span></p>

</div>

<h2><br />
Read</h2>

<ul>
	<li class="indent">Read Luke 1:26-38, Luke 2:1-20 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 1:26-38</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Birth of Jesus Foretold</h3>

<p><sup class="versenum">26&nbsp;</sup>In the sixth month of Elizabeth&rsquo;s pregnancy, God sent the angel Gabriel to Nazareth, a town in Galilee,<sup class="versenum">27&nbsp;</sup>to a virgin pledged to be married to a man named Joseph, a descendant of David. The virgin&rsquo;s name was Mary.<sup class="versenum">28&nbsp;</sup>The angel went to her and said, &ldquo;Greetings, you who are highly favored! The Lord is with you.&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>Mary was greatly troubled at his words and wondered what kind of greeting this might be.<sup class="versenum">30&nbsp;</sup>But the angel said to her, &ldquo;Do not be afraid, Mary; you have found favor with God.<sup class="versenum">31&nbsp;</sup>You will conceive and give birth to a son, and you are to call him Jesus.<sup class="versenum">32&nbsp;</sup>He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David,<sup class="versenum">33&nbsp;</sup>and he will reign over Jacob&rsquo;s descendants forever; his kingdom will never end.&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup>&ldquo;How will this be,&rdquo; Mary asked the angel, &ldquo;since I am a virgin?&rdquo;</p>

<p><sup class="versenum">35&nbsp;</sup>The angel answered, &ldquo;The Holy Spirit will come on you, and the power of the Most High will overshadow you. So the holy one to be born will be called the Son of God.<sup class="versenum">36&nbsp;</sup>Even Elizabeth your relative is going to have a child in her old age, and she who was said to be unable to conceive is in her sixth month.<sup class="versenum">37&nbsp;</sup>For no word from God will ever fail.&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>&ldquo;I am the Lord&rsquo;s servant,&rdquo; Mary answered. &ldquo;May your word to me be fulfilled.&rdquo; Then the angel left her.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button1" type="button" class="collapsible bible">Read Luke 2:1-20</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<div>
<h3>The Birth of Jesus</h3>

<p><sup class="versenum">1 </sup>In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world.<sup class="versenum">2&nbsp;</sup>(This was the first census that took place while Quirinius was governor of Syria.)<sup class="versenum">3&nbsp;</sup>And everyone went to their own town to register.</p>

<p><sup class="versenum">4&nbsp;</sup>So Joseph also went up from the town of Nazareth in Galilee to Judea, to Bethlehem the town of David, because he belonged to the house and line of David.<sup class="versenum">5&nbsp;</sup>He went there to register with Mary, who was pledged to be married to him and was expecting a child.<sup class="versenum">6&nbsp;</sup>While they were there, the time came for the baby to be born,<sup class="versenum">7&nbsp;</sup>and she gave birth to her firstborn, a son. She wrapped him in cloths and placed him in a manger, because there was no guest room available for them.</p>

<p><sup class="versenum">8&nbsp;</sup>And there were shepherds living out in the fields nearby, keeping watch over their flocks at night.<sup class="versenum">9&nbsp;</sup>An angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were terrified.<sup class="versenum">10&nbsp;</sup>But the angel said to them, &ldquo;Do not be afraid. I bring you good news that will cause great joy for all the people.<sup class="versenum">11&nbsp;</sup>Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.<sup class="versenum">12&nbsp;</sup>This will be a sign to you: You will find a baby wrapped in cloths and lying in a manger.&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>Suddenly a great company of the heavenly host appeared with the angel, praising God and saying,</p>

<p><sup class="versenum">14&nbsp;</sup>&ldquo;Glory to God in the highest heaven,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and on earth peace to those on whom his favor rests.&rdquo;</p>
</div>

<p><sup class="versenum">15&nbsp;</sup>When the angels had left them and gone into heaven, the shepherds said to one another, &ldquo;Let&rsquo;s go to Bethlehem and see this thing that has happened, which the Lord has told us about.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>So they hurried off and found Mary and Joseph, and the baby, who was lying in the manger.<sup class="versenum">17&nbsp;</sup>When they had seen him, they spread the word concerning what had been told them about this child,<sup class="versenum">18&nbsp;</sup>and all who heard it were amazed at what the shepherds said to them.<sup class="versenum">19&nbsp;</sup>But Mary treasured up all these things and pondered them in her heart.<sup class="versenum">20&nbsp;</sup>The shepherds returned, glorifying and praising God for all the things they had heard and seen, which were just as they had been told.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<h2>Discovery Discussion</h2>

<ul>
	<li>What caught your attention in this story?</li>
	<li>What do you think is the main idea of this story?</li>
	<li>What do we learn about God?</li>
	<li>What do we learn about man&rsquo;s relationship to God?</li>
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


<h2>Read, Tell and Correct</h2>

<ul>
	<li>Read the story again. Have someone tell the story and ask the group to help if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ Summary</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>Highlight the purpose of Jesus&rsquo; birth. The angel Gabriel said that Jesus would be called Son of the Most High. When the angels appeared to the shepherds, they called Jesus the Messiah, the Savior. Read Galatians 4:4-5: &ldquo;But when the fullness of time had come, God sent forth his Son, born of woman, born under the law to redeem those who were under the law . . .&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<h2>Choose something to obey together</h2>

<ul>
	<li>How can we follow this teaching?</li>
	<li>Is there anyone we can serve practically this week?</li>
	<li>Who is someone you could share this story with this week?</li>
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


<h2>Set a time to meet for the next story.</h2>

<ul>
	<li>The next story is another about Jesus.</li>
	<li>When do you want to meet again?</li>
</ul>


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

			<td class="social" @click="share('lesson', 'Birth and Purpose of Jesus: ', '/content/M2/eng/prophet/prophet06.html')">
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