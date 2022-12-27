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
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>The Prophet Noah</h1></div>
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

<p><span><span><span>The population of the earth grew from the time of Adam.&nbsp; There was much evil on the earth and God was not pleased.&nbsp; This story is about the prophet Noah.&nbsp; </span></span></span></p>

</div>

<h2><br />
Read</h2>

<ul>
	<li class="indent">Read Genesis 6:9 &ndash; 8:22 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Genesis 6:9-8:22</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Noah and the Flood</h3>

<p><sup class="versenum">9&nbsp;</sup>This is the account of Noah and his family.</p>

<p>Noah was a righteous man, blameless among the people of his time, and he walked faithfully with God.<sup class="versenum">10&nbsp;</sup>Noah had three sons: Shem, Ham and Japheth.</p>

<p><sup class="versenum">11&nbsp;</sup>Now the earth was corrupt in God&rsquo;s sight and was full of violence.<sup class="versenum">12&nbsp;</sup>God saw how corrupt the earth had become, for all the people on earth had corrupted their ways.<sup class="versenum">13&nbsp;</sup>So God said to Noah, &ldquo;I am going to put an end to all people, for the earth is filled with violence because of them. I am surely going to destroy both them and the earth.<sup class="versenum">14&nbsp;</sup>So make yourself an ark of cypress wood; make rooms in it and coat it with pitch inside and out.<sup class="versenum">15&nbsp;</sup>This is how you are to build it: The ark is to be three hundred cubits long, fifty cubits wide and thirty cubits high.<sup class="versenum">16&nbsp;</sup>Make a roof for it, leaving below the roof an opening one cubit high all around. Put a door in the side of the ark and make lower, middle and upper decks.<sup class="versenum">17&nbsp;</sup>I am going to bring floodwaters on the earth to destroy all life under the heavens, every creature that has the breath of life in it. Everything on earth will perish.<sup class="versenum">18&nbsp;</sup>But I will establish my covenant with you, and you will enter the ark&mdash;you and your sons and your wife and your sons&rsquo; wives with you.<sup class="versenum">19&nbsp;</sup>You are to bring into the ark two of all living creatures, male and female, to keep them alive with you.<sup class="versenum">20&nbsp;</sup>Two of every kind of bird, of every kind of animal and of every kind of creature that moves along the ground will come to you to be kept alive.<sup class="versenum">21&nbsp;</sup>You are to take every kind of food that is to be eaten and store it away as food for you and for them.&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Noah did everything just as God commanded him.</p>

<p><sup class="versenum">1 </sup>The <span class="small-caps">Lord then said to Noah, &ldquo;Go into the ark, you and your whole family, because I have found you righteous in this generation.<sup class="versenum">2&nbsp;</sup>Take with you seven pairs of every kind of clean animal, a male and its mate, and one pair of every kind of unclean animal, a male and its mate,<sup class="versenum">3&nbsp;</sup>and also seven pairs of every kind of bird, male and female, to keep their various kinds alive throughout the earth.<sup class="versenum">4&nbsp;</sup>Seven days from now I will send rain on the earth for forty days and forty nights, and I will wipe from the face of the earth every living creature I have made.&rdquo;</span></p>

<p><sup class="versenum">5&nbsp;</sup>And Noah did all that the <span class="small-caps">Lord commanded him.</span></p>

<p><sup class="versenum">6&nbsp;</sup>Noah was six hundred years old when the floodwaters came on the earth.<sup class="versenum">7&nbsp;</sup>And Noah and his sons and his wife and his sons&rsquo; wives entered the ark to escape the waters of the flood.<sup class="versenum">8&nbsp;</sup>Pairs of clean and unclean animals, of birds and of all creatures that move along the ground,<sup class="versenum">9&nbsp;</sup>male and female, came to Noah and entered the ark, as God had commanded Noah.<sup class="versenum">10&nbsp;</sup>And after the seven days the floodwaters came on the earth.</p>

<p><sup class="versenum">11&nbsp;</sup>In the six hundredth year of Noah&rsquo;s life, on the seventeenth day of the second month&mdash;on that day all the springs of the great deep burst forth, and the floodgates of the heavens were opened.<sup class="versenum">12&nbsp;</sup>And rain fell on the earth forty days and forty nights.</p>

<p><sup class="versenum">13&nbsp;</sup>On that very day Noah and his sons, Shem, Ham and Japheth, together with his wife and the wives of his three sons, entered the ark.<sup class="versenum">14&nbsp;</sup>They had with them every wild animal according to its kind, all livestock according to their kinds, every creature that moves along the ground according to its kind and every bird according to its kind, everything with wings.<sup class="versenum">15&nbsp;</sup>Pairs of all creatures that have the breath of life in them came to Noah and entered the ark.<sup class="versenum">16&nbsp;</sup>The animals going in were male and female of every living thing, as God had commanded Noah. Then the <span class="small-caps">Lord shut him in.</span></p>

<p><sup class="versenum">17&nbsp;</sup>For forty days the flood kept coming on the earth, and as the waters increased they lifted the ark high above the earth.<sup class="versenum">18&nbsp;</sup>The waters rose and increased greatly on the earth, and the ark floated on the surface of the water.<sup class="versenum">19&nbsp;</sup>They rose greatly on the earth, and all the high mountains under the entire heavens were covered.<sup class="versenum">20&nbsp;</sup>The waters rose and covered the mountains to a depth of more than fifteen cubits.<sup class="versenum">21&nbsp;</sup>Every living thing that moved on land perished&mdash;birds, livestock, wild animals, all the creatures that swarm over the earth, and all mankind.<sup class="versenum">22&nbsp;</sup>Everything on dry land that had the breath of life in its nostrils died.<sup class="versenum">23&nbsp;</sup>Every living thing on the face of the earth was wiped out; people and animals and the creatures that move along the ground and the birds were wiped from the earth. Only Noah was left, and those with him in the ark.</p>

<p><sup class="versenum">24&nbsp;</sup>The waters flooded the earth for a hundred and fifty days.</p>

<p><sup class="versenum">1 </sup>But God remembered Noah and all the wild animals and the livestock that were with him in the ark, and he sent a wind over the earth, and the waters receded.<sup class="versenum">2&nbsp;</sup>Now the springs of the deep and the floodgates of the heavens had been closed, and the rain had stopped falling from the sky.<sup class="versenum">3&nbsp;</sup>The water receded steadily from the earth. At the end of the hundred and fifty days the water had gone down,<sup class="versenum">4&nbsp;</sup>and on the seventeenth day of the seventh month the ark came to rest on the mountains of Ararat.<sup class="versenum">5&nbsp;</sup>The waters continued to recede until the tenth month, and on the first day of the tenth month the tops of the mountains became visible.</p>

<p><sup class="versenum">6&nbsp;</sup>After forty days Noah opened a window he had made in the ark<sup class="versenum">7&nbsp;</sup>and sent out a raven, and it kept flying back and forth until the water had dried up from the earth.<sup class="versenum">8&nbsp;</sup>Then he sent out a dove to see if the water had receded from the surface of the ground.<sup class="versenum">9&nbsp;</sup>But the dove could find nowhere to perch because there was water over all the surface of the earth; so it returned to Noah in the ark. He reached out his hand and took the dove and brought it back to himself in the ark.<sup class="versenum">10&nbsp;</sup>He waited seven more days and again sent out the dove from the ark.<sup class="versenum">11&nbsp;</sup>When the dove returned to him in the evening, there in its beak was a freshly plucked olive leaf! Then Noah knew that the water had receded from the earth.<sup class="versenum">12&nbsp;</sup>He waited seven more days and sent the dove out again, but this time it did not return to him.</p>

<p><sup class="versenum">13&nbsp;</sup>By the first day of the first month of Noah&rsquo;s six hundred and first year, the water had dried up from the earth. Noah then removed the covering from the ark and saw that the surface of the ground was dry.<sup class="versenum">14&nbsp;</sup>By the twenty-seventh day of the second month the earth was completely dry.</p>

<p><sup class="versenum">15&nbsp;</sup>Then God said to Noah,<sup class="versenum">16&nbsp;</sup>&ldquo;Come out of the ark, you and your wife and your sons and their wives.<sup class="versenum">17&nbsp;</sup>Bring out every kind of living creature that is with you&mdash;the birds, the animals, and all the creatures that move along the ground&mdash;so they can multiply on the earth and be fruitful and increase in number on it.&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>So Noah came out, together with his sons and his wife and his sons&rsquo; wives.<sup class="versenum">19&nbsp;</sup>All the animals and all the creatures that move along the ground and all the birds&mdash;everything that moves on land&mdash;came out of the ark, one kind after another.</p>

<p><sup class="versenum">20&nbsp;</sup>Then Noah built an altar to the <span class="small-caps">Lord and, taking some of all the clean animals and clean birds, he sacrificed burnt offerings on it.<sup class="versenum">21&nbsp;</sup>The <span class="small-caps">Lord smelled the pleasing aroma and said in his heart: &ldquo;Never again will I curse the ground because of humans, even though every inclination of the human heart is evil from childhood. And never again will I destroy all living creatures, as I have done.</span></span></p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;As long as the earth endures,<br />
seedtime and harvest,<br />
cold and heat,<br />
summer and winter,<br />
day and night<br />
will never cease.&rdquo;</p>
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

<p>We learn that the Lord cannot tolerate sin and that He will punish sin.&nbsp; But because of His love for people, the Lord provided a way for Noah and his family to be protected from His wrath.&nbsp; Read Genesis 8:20-21a: &ldquo;Then Noah built an altar to the Lord and, taking some of all the clean animals and clean birds, he sacrificed burnt offerings on it. The Lord smelled the pleasing aroma and said in his heart: &lsquo;Never again will I curse the ground because of man&hellip;&rdquo;</p>

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
	<li>The next story is about the Prophet Abraham..</li>
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

			<td class="social" @click="share('lesson', 'The Prophet Noah: ', '/content/M2/eng/prophet/prophet02.html')">
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