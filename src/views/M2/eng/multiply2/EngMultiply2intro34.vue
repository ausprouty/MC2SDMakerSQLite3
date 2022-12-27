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
<h1>Period 3 -- Ministry Training and Period 4 -- Expanded Outreach</h1>
<div id="showVideoOptions"></div>
  <p class="year"><img alt="Stage of Ministry" class="lesson_image" src="@/assets/images/eng/multiply2/Period34.png" /></p>

<p class="year">Period 3: Ministry Training &amp;&nbsp;Period 4: Expanded Outreach&nbsp;</p>

<p class="year">around Late 27 AD &ndash; Late 28 AD</p>

<p>Recruit, train and mobilize a growing mission team into broad sowing and making new disciples</p>

<p><br />
<strong>Period 3 Ministry Training</strong></p>

<ul>
	<li class="nobreak-final-final">This period lasts for 6-9 months and starts with Jesus moving to Capernaum. During this period, Jesus challenges the four fishermen (<span class="popup-link" @click = "popUp('pop1')"> Mark 1:16-20</span>)&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">16&nbsp;</sup>As Jesus walked beside the Sea of Galilee, he saw Simon and his brother Andrew casting a net into the lake, for they were fishermen.<sup class="versenum">17&nbsp;</sup>&ldquo;Come, follow me,&rdquo; Jesus said, &ldquo;and I will send you out to fish for people.&rdquo;<sup class="versenum">18&nbsp;</sup>At once they left their nets and followed him.</p>

	<p><sup class="versenum">19&nbsp;</sup>When he had gone a little farther, he saw James son of Zebedee and his brother John in a boat, preparing their nets.<sup class="versenum">20&nbsp;</sup>Without delay he called them, and they left their father Zebedee in the boat with the hired men and followed him.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;who had already been followers of Jesus since His baptism. Jesus begins to change their priorities and they become trainees in fishing for men. These four men form the initial mission team but Jesus soon adds Levi (<span class="popup-link" @click = "popUp('pop2')"> Mark 2:13-17</span>)&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">13&nbsp;</sup>Once again Jesus went out beside the lake. A large crowd came to him, and he began to teach them.<sup class="versenum">14&nbsp;</sup>As he walked along, he saw Levi son of Alphaeus sitting at the tax collector&rsquo;s booth. &ldquo;Follow me,&rdquo; Jesus told him, and Levi got up and followed him.</p>

	<p><sup class="versenum">15&nbsp;</sup>While Jesus was having dinner at Levi&rsquo;s house, many tax collectors and sinners were eating with him and his disciples, for there were many who followed him.<sup class="versenum">16&nbsp;</sup>When the teachers of the law who were Pharisees saw him eating with the sinners and tax collectors, they asked his disciples: &ldquo;Why does he eat with tax collectors and sinners?&rdquo;</p>

	<p><sup class="versenum">17&nbsp;</sup>On hearing this, Jesus said to them, &ldquo;It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but sinners.&rdquo;</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;and others.</li>
</ul>

<p><br />
<strong>Period 4 Expanded Outreach</strong></p>

<ul>
	<li class="nobreak-final-final">This period lasts for 6-9 months and runs parallel with Period 3. While Jesus is recruiting an initial ministry team to share in the work of the mission, He generates opportunities for their &lsquo;field training&rsquo; through local &nbsp;outreaches (<span class="popup-link" @click = "popUp('pop3')"> Mark 1:21-34</span>) ,

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<h3>Jesus Drives Out an Impure Spirit</h3>

	<p><sup class="versenum">21&nbsp;</sup>They went to Capernaum, and when the Sabbath came, Jesus went into the synagogue and began to teach.<sup class="versenum">22&nbsp;</sup>The people were amazed at his teaching, because he taught them as one who had authority, not as the teachers of the law.<sup class="versenum">23&nbsp;</sup>Just then a man in their synagogue who was possessed by an impure spirit cried out,<sup class="versenum">24&nbsp;</sup>&ldquo;What do you want with us, Jesus of Nazareth? Have you come to destroy us? I know who you are&mdash;the Holy One of God!&rdquo;</p>

	<p><sup class="versenum">25&nbsp;</sup>&ldquo;Be quiet!&rdquo; said Jesus sternly. &ldquo;Come out of him!&rdquo;<sup class="versenum">26&nbsp;</sup>The impure spirit shook the man violently and came out of him with a shriek.</p>

	<p><sup class="versenum">27&nbsp;</sup>The people were all so amazed that they asked each other, &ldquo;What is this? A new teaching&mdash;and with authority! He even gives orders to impure spirits and they obey him.&rdquo;<sup class="versenum">28&nbsp;</sup>News about him spread quickly over the whole region of Galilee.</p>

	<p><sup class="versenum">29&nbsp;</sup>As soon as they left the synagogue, they went with James and John to the home of Simon and Andrew.<sup class="versenum">30&nbsp;</sup>Simon&rsquo;s mother-in-law was in bed with a fever, and they immediately told Jesus about her.<sup class="versenum">31&nbsp;</sup>So he went to her, took her hand and helped her up. The fever left her and she began to wait on them.</p>

	<p><sup class="versenum">32&nbsp;</sup>That evening after sunset the people brought to Jesus all the sick and demon-possessed.<sup class="versenum">33&nbsp;</sup>The whole town gathered at the door,<sup class="versenum">34&nbsp;</sup>and Jesus healed many who had various diseases. He also drove out many demons, but he would not let the demons speak because they knew who he was.</p>
	</div>
	</div>
	<!-- end bible --></div>
	regional outreaches and expanded campaigns (<span class="popup-link" @click = "popUp('pop4')"> Mark 1:35-39</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">35&nbsp;</sup>Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed.<sup class="versenum">36&nbsp;</sup>Simon and his companions went to look for him,<sup class="versenum">37&nbsp;</sup>and when they found him, they exclaimed: &ldquo;Everyone is looking for you!&rdquo;</p>

	<p><sup class="versenum">38&nbsp;</sup>Jesus replied, &ldquo;Let us go somewhere else&mdash;to the nearby villages&mdash;so I can preach there also. That is why I have come.&rdquo;<sup class="versenum">39&nbsp;</sup>So he traveled throughout Galilee, preaching in their synagogues and driving out demons.</p>
	</div>
	</div>
	<!-- end bible --></div>
	This expanded outreach is characterized by an acceleration of the movement but also brings increased opposition (<span class="popup-link" @click = "popUp('pop5')"> Mark 3:6</span>).&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">6&nbsp;</sup>Then the Pharisees went out and began to plot with the Herodians how they might kill Jesus.</p>
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

			<td class="social" @click="share('lesson', 'Period 3 -- Ministry Training and Period 4 -- Expanded Outreach: ', '/content/M2/eng/multiply2/multiply2intro34.html')">
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