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
<h1>Period 2 -- Ministry Foundations </h1>
<div id="showVideoOptions"></div>
  <p class="year"><img alt="Stage of Ministry" class="lesson_image" src="@/assets/images/eng/multiply2/Period2.png" /></p>

<p class="year">Period 2: Ministry Foundations:&nbsp; around Spring 26 AD - Late 27 AD</p>

<h2 class="lesson">Establishing a relational God-centered foundation for making disciples</h2>

<ul>
	<li class="nobreak-final-final">This period starts in mid-26 AD when Jesus is about the age of 30 and lasts for 18-21 months. Jesus&rsquo; public ministry is initiated with His baptism then steadily grows through the initial contacts He made (<span class="popup-link" @click = "popUp('pop1')"> John 1:35-44</span>&nbsp;,

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<h3>John&rsquo;s Disciples Follow Jesus</h3>

	<p><sup class="versenum">35&nbsp;</sup>The next day John was there again with two of his disciples.<sup class="versenum">36&nbsp;</sup>When he saw Jesus passing by, he said, &ldquo;Look, the Lamb of God!&rdquo;</p>

	<p><sup class="versenum">37&nbsp;</sup>When the two disciples heard him say this, they followed Jesus.<sup class="versenum">38&nbsp;</sup>Turning around, Jesus saw them following and asked, &ldquo;What do you want?&rdquo;</p>

	<p>They said, &ldquo;Rabbi&rdquo; (which means &ldquo;Teacher&rdquo;), &ldquo;where are you staying?&rdquo;</p>

	<p><sup class="versenum">39&nbsp;</sup>&ldquo;Come,&rdquo; he replied, &ldquo;and you will see.&rdquo;</p>

	<p>So they went and saw where he was staying, and they spent that day with him. It was about four in the afternoon.</p>

	<p><sup class="versenum">40&nbsp;</sup>Andrew, Simon Peter&rsquo;s brother, was one of the two who heard what John had said and who had followed Jesus.<sup class="versenum">41&nbsp;</sup>The first thing Andrew did was to find his brother Simon and tell him, &ldquo;We have found the Messiah&rdquo; (that is, the Christ).<sup class="versenum">42&nbsp;</sup>And he brought him to Jesus.</p>

	<p>Jesus looked at him and said, &ldquo;You are Simon son of John. You will be called Cephas&rdquo; (which, when translated, is Peter).</p>

	<p><sup class="versenum">43&nbsp;</sup>The next day Jesus decided to leave for Galilee. Finding Philip, he said to him, &ldquo;Follow me.&rdquo;</p>

	<p><sup class="versenum">44&nbsp;</sup>Philip, like Andrew and Peter, was from the town of Bethsaida.</p>
	</div>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop7')"> John 4:1-4</span>).

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>Now Jesus learned that the Pharisees had heard that he was gaining and baptizing more disciples than John&mdash;<sup class="versenum">2&nbsp;</sup>although in fact it was not Jesus who baptized, but his disciples.<sup class="versenum">3&nbsp;</sup>So he left Judea and went back once more to Galilee.</p>

	<p><sup class="versenum">4&nbsp;</sup>Now he had to go through Samaria.</p>
	</div>
	</div>
	<!-- end bible --></div>
	It ends with His first rejection at His home village of Nazareth (<span class="popup-link" @click = "popUp('pop3')"> Luke 4:16-31</span>).&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<div>
	<p><sup class="versenum">16&nbsp;</sup>He went to Nazareth, where he had been brought up, and on the Sabbath day he went into the synagogue, as was his custom. He stood up to read,<sup class="versenum">17&nbsp;</sup>and the scroll of the prophet Isaiah was handed to him. Unrolling it, he found the place where it is written:</p>

	<p><sup class="versenum">18&nbsp;</sup>&ldquo;The Spirit of the Lord is on me,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;because he has anointed me<br />
	&nbsp;&nbsp;&nbsp;&nbsp;to proclaim good news to the poor.<br />
	He has sent me to proclaim freedom for the prisoners<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and recovery of sight for the blind,<br />
	to set the oppressed free,<br />
	<sup class="versenum">19&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;to proclaim the year of the Lord&rsquo;s favor.&rdquo;</p>
	</div>

	<p><sup class="versenum">20&nbsp;</sup>Then he rolled up the scroll, gave it back to the attendant and sat down. The eyes of everyone in the synagogue were fastened on him.<sup class="versenum">21&nbsp;</sup>He began by saying to them, &ldquo;Today this scripture is fulfilled in your hearing.&rdquo;</p>

	<p><sup class="versenum">22&nbsp;</sup>All spoke well of him and were amazed at the gracious words that came from his lips. &ldquo;Isn&rsquo;t this Joseph&rsquo;s son?&rdquo; they asked.</p>

	<p><sup class="versenum">23&nbsp;</sup>Jesus said to them, &ldquo;Surely you will quote this proverb to me: &lsquo;Physician, heal yourself!&rsquo; And you will tell me, &lsquo;Do here in your hometown what we have heard that you did in Capernaum.&rsquo;&rdquo;</p>

	<p><sup class="versenum">24&nbsp;</sup>&ldquo;Truly I tell you,&rdquo; he continued, &ldquo;no prophet is accepted in his hometown.<sup class="versenum">25&nbsp;</sup>I assure you that there were many widows in Israel in Elijah&rsquo;s time, when the sky was shut for three and a half years and there was a severe famine throughout the land.<sup class="versenum">26&nbsp;</sup>Yet Elijah was not sent to any of them, but to a widow in Zarephath in the region of Sidon.<sup class="versenum">27&nbsp;</sup>And there were many in Israel with leprosy in the time of Elisha the prophet, yet not one of them was cleansed&mdash;only Naaman the Syrian.&rdquo;</p>

	<p><sup class="versenum">28&nbsp;</sup>All the people in the synagogue were furious when they heard this.<sup class="versenum">29&nbsp;</sup>They got up, drove him out of the town, and took him to the brow of the hill on which the town was built, in order to throw him off the cliff.<sup class="versenum">30&nbsp;</sup>But he walked right through the crowd and went on his way.</p>

	<p><sup class="versenum">31&nbsp;</sup>Then he went down to Capernaum, a town in Galilee, and on the Sabbath he taught the people.</p>
	</div>
	</div>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">This period is characterized by ministry foundations being laid. Jesus is intentional in creating a relational environment where He gathers people as followers of the new way. Jesus&rsquo; ministry starts from nothing then grows over time until it is larger than the size of John the Baptist&rsquo;s ministry (<span class="popup-link" @click = "popUp('pop4')"> John 4:1-3</span>;
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>Now Jesus learned that the Pharisees had heard that he was gaining and baptizing more disciples than John&mdash;<sup class="versenum">2&nbsp;</sup>although in fact it was not Jesus who baptized, but his disciples.<sup class="versenum">3&nbsp;</sup>So he left Judea and went back once more to Galilee.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop6')"> Luke 3:19-20</span>;

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">19&nbsp;</sup>But when John rebuked Herod the tetrarch because of his marriage to Herodias, his brother&rsquo;s wife, and all the other evil things he had done,<sup class="versenum">20&nbsp;</sup>Herod added this to them all: He locked John up in prison.</p>
	</div>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Matthew 4:12</span>).&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">12&nbsp;</sup>When Jesus heard that John had been put in prison, he withdrew to Galilee.</p>
	</div>
	</div>
	<!-- end bible --></div>
	</li>
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

			<td class="social" @click="share('lesson', 'Period 2 -- Ministry Foundations : ', '/content/M2/eng/multiply2/multiply2intro2.html')">
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