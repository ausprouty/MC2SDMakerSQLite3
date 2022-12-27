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
                        <div class="chapter_number ltr"><h1>Period 1.</h1></div>
                        <div class="chapter_title ltr"><h1>Consequences of Kingdom Explosion in Jerusalem </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p>Acts was written by Luke, as the continuation of the story of Jesus. Luke began in his gospel, &ldquo;It seemed good to me also, having followed all things closely for some time past, to write an orderly account for you, most excellent Theophilus&rdquo; (Luke 1:3). Acts begins with the statement, &ldquo;In the first book, O Theophilus, I have dealt with all that Jesus began to do and teach&rdquo; (<span class="popup-link" @click = "popUp('pop1')"> Acts 1:1</span>).</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">1 </sup>In my former book, Theophilus, I wrote about all that Jesus began to do and to teach</p>
</div>
</div>
<!-- end bible --></div>

<p>Acts covers the first 30 years of the church (30 AD to 62 AD).</p>

<p>&nbsp;</p>

<h2><br />
Introduction:</h2>

<p>Jesus was sent from heaven for a global kingdom mission. He started His ministry with a few disciples that came from the ministry of John the Baptist. The stated scope of His work was to reach all the towns of Israel (<span class="popup-link" @click = "popUp('pop2')"> Mark 1:38</span>)&nbsp;</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">38&nbsp;</sup>Jesus replied, &ldquo;Let us go somewhere else&mdash;to the nearby villages&mdash;so I can preach there also. That is why I have come.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>

<p>but He was preparing His followers for more. He not only taught them truths about the Kingdom, but in His humanity, He modeled to His followers a Kingdom-centered, Spirit-dependent life. Jesus&rsquo; ministry spread far and wide by selecting leaders and empowering them to go to new places. Then, before His death on the cross, Jesus shared with them the full scope of the Kingdom mission, &ldquo;This gospel of the Kingdom will be proclaimed as a testimony to all nations, then the end will come.&rdquo; (<span class="popup-link" @click = "popUp('pop3')"> Matthew 24:14</span>).&nbsp;</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">14&nbsp;</sup>And this gospel of the kingdom will be preached in the whole world as a testimony to all nations, and then the end will come.</p>
</div>
</div>
<!-- end bible --></div>

<p>His vision was and continues to be the establishment of the Kingdom of God among the thousands of people groups all around the world, where His name would be honored, and His will would be done (<span class="popup-link" @click = "popUp('pop4')"> Matthew 6:9-10</span>).&nbsp;</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">9&nbsp;</sup>&ldquo;This, then, is how you should pray:</p>

<p>&ldquo;&lsquo;Our Father in heaven,<br />
hallowed be your name,<br />
<sup class="versenum">10&nbsp;</sup>your kingdom come,<br />
your will be done,<br />
&nbsp;&nbsp;&nbsp;&nbsp;on earth as it is in heaven.</p>
</div>
</div>
</div>
<!-- end bible --></div>

<p>Jesus had showed His disciples how to connect with lost people, to make disciples who would also make disciples, and how to identify and train leaders who would go repeat this process in all people groups. What Jesus started to do while He was on earth, He continued from heaven through His Spirit-filled followers according to His promises: &ldquo;Anyone who believes in me will do the works I have been doing, and will do greater works than what I have done.&rdquo; (<span class="popup-link" @click = "popUp('pop5')"> John 14:12</span>);&nbsp;</p>

<div class="popup invisible" id="pop5"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">12&nbsp;</sup>Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father.</p>
</div>
</div>
<!-- end bible --></div>

<p>&ldquo;It is good for you that I go away. I will send you a Helper.&rdquo; (<span class="popup-link" @click = "popUp('pop6')"> John 16:7</span>);&nbsp;</p>

<div class="popup invisible" id="pop6"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">7&nbsp;</sup>But very truly I tell you, it is for your good that I am going away. Unless I go away, the Advocate will not come to you; but if I go, I will send him to you.</p>
</div>
</div>
<!-- end bible --></div>

<p>&nbsp;&ldquo;...you shall receive power when the Holy Spirit comes upon you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo; (<span class="popup-link" @click = "popUp('pop7')"> Acts 1:8</span>).&nbsp;</p>

<div class="popup invisible" id="pop7"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">8&nbsp;</sup>But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>

<p>This is the story of Acts. It captures for us the movement of the Spirit of God establishing and expanding the Kingdom to all peoples as His disciples began to live out the Spirit-dependent life they were taught. It also provides the movement context that helps us apply the rest of the New Testament letters to the mission of Jesus. Through a period of only 30 years, a foundation for the expansion of the Kingdom was laid, which was marked by its impact on society and the development of new disciples and new churches everywhere.</p>

<p>&nbsp;</p>

<h2>Period 1: Consequences of Kingdom Explosion in Jerusalem<br />
<br />
[30-32 AD]</h2>

<p><strong>Summary:</strong> This period covers the first years after Jesus&rsquo; death, resurrection and ascension. The appointed Apostles begin to obey the command to make disciples but did not go outside of Jerusalem. The period is marked by explosive growth, persecution, miracles and the foundational characteristics of the community of believers.</p>


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

			<td class="social" @click="share('lesson', 'Consequences of Kingdom Explosion in Jerusalem : ', '/content/M2/eng/multiply3/multiply3intro1.html')">
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