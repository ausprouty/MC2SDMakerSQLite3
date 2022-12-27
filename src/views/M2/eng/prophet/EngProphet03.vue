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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>The Prophet Abraham</h1></div>
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
<div id="Summary0" class="summary"><h2>+ Context</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>God called a man to leave his family and travel very far to live in a new land.&nbsp; He obeyed God even though he did not fully understand God&rsquo;s plan.&nbsp; As He followed the Lord, the Lord gave him a promise.&nbsp; This story is about the prophet Abraham.&nbsp;</p>

</div>

<h2><br />
Read</h2>

<ul>
	<li class="indent">Read Genesis 12:1-8, Genesis 15:1-6, Genesis 22:1-19 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Genesis 12:1-8</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Call of Abram</h3>

<p><sup class="versenum">1 </sup>The <span class="small-caps">Lord had said to Abram, &ldquo;Go from your country, your people and your father&rsquo;s household to the land I will show you.</span></p>

<p><sup class="versenum">2&nbsp;</sup>&ldquo;I will make you into a great nation,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and I will bless you;<br />
I will make your name great,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and you will be a blessing.<br />
<sup class="versenum">3&nbsp;</sup>I will bless those who bless you,<br />
&nbsp;&nbsp;&nbsp;&nbsp;and whoever curses you I will curse;<br />
and all peoples on earth<br />
&nbsp;&nbsp;&nbsp;&nbsp;will be blessed through you.&rdquo;</p>

<p><sup class="versenum">4&nbsp;</sup>So Abram went, as the <span class="small-caps">Lord had told him; and Lot went with him. Abram was seventy-five years old when he set out from Harran.<sup class="versenum">5&nbsp;</sup>He took his wife Sarai, his nephew Lot, all the possessions they had accumulated and the people they had acquired in Harran, and they set out for the land of Canaan, and they arrived there.</span></p>

<p><sup class="versenum">6&nbsp;</sup>Abram traveled through the land as far as the site of the great tree of Moreh at Shechem. At that time the Canaanites were in the land.<sup class="versenum">7&nbsp;</sup>The <span class="small-caps">Lord appeared to Abram and said, &ldquo;To your offspring I will give this land.&rdquo; So he built an altar there to the <span class="small-caps">Lord, who had appeared to him.</span></span></p>

<p><sup class="versenum">8&nbsp;</sup>From there he went on toward the hills east of Bethel and pitched his tent, with Bethel on the west and Ai on the east. There he built an altar to the <span class="small-caps">Lord and called on the name of the <span class="small-caps">Lord.</span></span></p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button1" type="button" class="collapsible bible">Read Genesis 15:1-6</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<h3>The <span class="small-caps">Lord&rsquo;s Covenant With Abram</span></h3>

<p><sup class="versenum">1 </sup>After this, the word of the <span class="small-caps">Lord came to Abram in a vision:</span></p>

<p>&ldquo;Do not be afraid, Abram.<br />
&nbsp;&nbsp;&nbsp;&nbsp;I am your shield,<br />
&nbsp;&nbsp;&nbsp;&nbsp;your very great reward.&rdquo;</p>

<p><sup class="versenum">2&nbsp;</sup>But Abram said, &ldquo;Sovereign <span class="small-caps">Lord, what can you give me since I remain childless and the one who will inherit my estate is Eliezer of Damascus?&rdquo;<sup class="versenum">3&nbsp;</sup>And Abram said, &ldquo;You have given me no children; so a servant in my household will be my heir.&rdquo;</span></p>

<p><sup class="versenum">4&nbsp;</sup>Then the word of the <span class="small-caps">Lord came to him: &ldquo;This man will not be your heir, but a son who is your own flesh and blood will be your heir.&rdquo;<sup class="versenum">5&nbsp;</sup>He took him outside and said, &ldquo;Look up at the sky and count the stars&mdash;if indeed you can count them.&rdquo; Then he said to him, &ldquo;So shall your offspring be.&rdquo;</span></p>

<p><sup class="versenum">6&nbsp;</sup>Abram believed the <span class="small-caps">Lord, and he credited it to him as righteousness.</span></p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button2" type="button" class="collapsible bible">Read Genesis 22:1-19</button><div class="collapsed" id ="Text2">
<!-- begin bible -->

<h3>Abraham Tested</h3>

<p><sup class="versenum">1 </sup>Some time later God tested Abraham. He said to him, &ldquo;Abraham!&rdquo;</p>

<p>&ldquo;Here I am,&rdquo; he replied.</p>

<p><sup class="versenum">2&nbsp;</sup>Then God said, &ldquo;Take your son, your only son, whom you love&mdash;Isaac&mdash;and go to the region of Moriah. Sacrifice him there as a burnt offering on a mountain I will show you.&rdquo;</p>

<p><sup class="versenum">3&nbsp;</sup>Early the next morning Abraham got up and loaded his donkey. He took with him two of his servants and his son Isaac. When he had cut enough wood for the burnt offering, he set out for the place God had told him about.<sup class="versenum">4&nbsp;</sup>On the third day Abraham looked up and saw the place in the distance.<sup class="versenum">5&nbsp;</sup>He said to his servants, &ldquo;Stay here with the donkey while I and the boy go over there. We will worship and then we will come back to you.&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>Abraham took the wood for the burnt offering and placed it on his son Isaac, and he himself carried the fire and the knife. As the two of them went on together,<sup class="versenum">7&nbsp;</sup>Isaac spoke up and said to his father Abraham, &ldquo;Father?&rdquo;</p>

<p>&ldquo;Yes, my son?&rdquo; Abraham replied.</p>

<p>&ldquo;The fire and wood are here,&rdquo; Isaac said, &ldquo;but where is the lamb for the burnt offering?&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>Abraham answered, &ldquo;God himself will provide the lamb for the burnt offering, my son.&rdquo; And the two of them went on together.</p>

<p><sup class="versenum">9&nbsp;</sup>When they reached the place God had told him about, Abraham built an altar there and arranged the wood on it. He bound his son Isaac and laid him on the altar, on top of the wood.<sup class="versenum">10&nbsp;</sup>Then he reached out his hand and took the knife to slay his son.<sup class="versenum">11&nbsp;</sup>But the angel of the <span class="small-caps">Lord called out to him from heaven, &ldquo;Abraham! Abraham!&rdquo;</span></p>

<p>&ldquo;Here I am,&rdquo; he replied.</p>

<p><sup class="versenum">12&nbsp;</sup>&ldquo;Do not lay a hand on the boy,&rdquo; he said. &ldquo;Do not do anything to him. Now I know that you fear God, because you have not withheld from me your son, your only son.&rdquo;</p>

<p><sup class="versenum">13&nbsp;</sup>Abraham looked up and there in a thicket he saw a ram caught by its horns. He went over and took the ram and sacrificed it as a burnt offering instead of his son.<sup class="versenum">14&nbsp;</sup>So Abraham called that place The <span class="small-caps">Lord Will Provide. And to this day it is said, &ldquo;On the mountain of the <span class="small-caps">Lord it will be provided.&rdquo;</span></span></p>

<p><sup class="versenum">15&nbsp;</sup>The angel of the <span class="small-caps">Lord called to Abraham from heaven a second time<sup class="versenum">16&nbsp;</sup>and said, &ldquo;I swear by myself, declares the <span class="small-caps">Lord, that because you have done this and have not withheld your son, your only son,<sup class="versenum">17&nbsp;</sup>I will surely bless you and make your descendants as numerous as the stars in the sky and as the sand on the seashore. Your descendants will take possession of the cities of their enemies,<sup class="versenum">18&nbsp;</sup>and through your offspring all nations on earth will be blessed, because you have obeyed me.&rdquo;</span></span></p>

<p><sup class="versenum">19&nbsp;</sup>Then Abraham returned to his servants, and they set off together for Beersheba. And Abraham stayed in Beersheba.</p>
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

<p>Abraham obeyed God.&nbsp; He believed the Lord&rsquo;s promise that he would be the father of many nations.&nbsp; The Lord accepted His faith (trust in Him) and gave Him credit for being (or declared that he was) righteous.&nbsp; We learn that only God can provide an acceptable sacrifice for us.&nbsp; Read Romans 4:2-3: &ldquo;If, in fact, Abraham was accepted by works, he had something to boast about&mdash;but not before God.&nbsp; What does the Scripture say? &ldquo;Abraham believed God, and it was credited to him as righteousness.&rdquo;</p>

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
	<li>The next story is about the Prophet Moses.</li>
	<li>When do you want to meet again?</li>
</ul>

<p>&nbsp;</p>


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

			<td class="social" @click="share('lesson', 'The Prophet Abraham: ', '/content/M2/eng/prophet/prophet03.html')">
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