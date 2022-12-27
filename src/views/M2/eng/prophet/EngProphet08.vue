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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesus is Glorified </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<h2>Praise and Care</h2>

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

<p><span><span><span>As Jesus continued teaching the people, there were many who did not like him. They plotted to kill Jesus and finally arrested Him. After a short trial, they led Him out to be killed. But this too was part of God&rsquo;s plan. </span></span></span></p>

</div>

<h2><br />
Read</h2>

<ul>
	<li class="indent">Read Luke 23:26-24:7, 35-36 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 23:26-24:7, 35-36</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<h3>The Crucifixion of Jesus</h3>

<p><sup class="versenum">26&nbsp;</sup>As the soldiers led him away, they seized Simon from Cyrene, who was on his way in from the country, and put the cross on him and made him carry it behind Jesus.<sup class="versenum">27&nbsp;</sup>A large number of people followed him, including women who mourned and wailed for him.<sup class="versenum">28&nbsp;</sup>Jesus turned and said to them, &ldquo;Daughters of Jerusalem, do not weep for me; weep for yourselves and for your children.<sup class="versenum">29&nbsp;</sup>For the time will come when you will say, &lsquo;Blessed are the childless women, the wombs that never bore and the breasts that never nursed!&rsquo;<sup class="versenum">30&nbsp;</sup>Then</p>

<p>&ldquo;&lsquo;they will say to the mountains, &ldquo;Fall on us!&rdquo;<br />
&nbsp;&nbsp;&nbsp;&nbsp;and to the hills, &ldquo;Cover us!&rdquo;&rsquo;</p>
</div>

<p><sup class="versenum">31&nbsp;</sup>For if people do these things when the tree is green, what will happen when it is dry?&rdquo;</p>

<p><sup class="versenum">32&nbsp;</sup>Two other men, both criminals, were also led out with him to be executed.<sup class="versenum">33&nbsp;</sup>When they came to the place called the Skull, they crucified him there, along with the criminals&mdash;one on his right, the other on his left.<sup class="versenum">34&nbsp;</sup>Jesus said, &ldquo;Father, forgive them, for they do not know what they are doing.&rdquo; And they divided up his clothes by casting lots.</p>

<p><sup class="versenum">35&nbsp;</sup>The people stood watching, and the rulers even sneered at him. They said, &ldquo;He saved others; let him save himself if he is God&rsquo;s Messiah, the Chosen One.&rdquo;</p>

<p><sup class="versenum">36&nbsp;</sup>The soldiers also came up and mocked him. They offered him wine vinegar<sup class="versenum">37&nbsp;</sup>and said, &ldquo;If you are the king of the Jews, save yourself.&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>There was a written notice above him, which read: <span class="small-caps">this is the king of the jews.</span></p>

<p><sup class="versenum">39&nbsp;</sup>One of the criminals who hung there hurled insults at him: &ldquo;Aren&rsquo;t you the Messiah? Save yourself and us!&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>But the other criminal rebuked him. &ldquo;Don&rsquo;t you fear God,&rdquo; he said, &ldquo;since you are under the same sentence?<sup class="versenum">41&nbsp;</sup>We are punished justly, for we are getting what our deeds deserve. But this man has done nothing wrong.&rdquo;</p>

<p><sup class="versenum">42&nbsp;</sup>Then he said, &ldquo;Jesus, remember me when you come into your kingdom.&rdquo;</p>

<p><sup class="versenum">43&nbsp;</sup>Jesus answered him, &ldquo;Truly I tell you, today you will be with me in paradise.&rdquo;</p>

<h3>The Death of Jesus</h3>

<p><sup class="versenum">44&nbsp;</sup>It was now about noon, and darkness came over the whole land until three in the afternoon,<sup class="versenum">45&nbsp;</sup>for the sun stopped shining. And the curtain of the temple was torn in two.<sup class="versenum">46&nbsp;</sup>Jesus called out with a loud voice, &ldquo;Father, into your hands I commit my spirit.&rdquo; When he had said this, he breathed his last.</p>

<p><sup class="versenum">47&nbsp;</sup>The centurion, seeing what had happened, praised God and said, &ldquo;Surely this was a righteous man.&rdquo;<sup class="versenum">48&nbsp;</sup>When all the people who had gathered to witness this sight saw what took place, they beat their breasts and went away.<sup class="versenum">49&nbsp;</sup>But all those who knew him, including the women who had followed him from Galilee, stood at a distance, watching these things.</p>

<h3>The Burial of Jesus</h3>

<p><sup class="versenum">50&nbsp;</sup>Now there was a man named Joseph, a member of the Council, a good and upright man,<sup class="versenum">51&nbsp;</sup>who had not consented to their decision and action. He came from the Judean town of Arimathea, and he himself was waiting for the kingdom of God.<sup class="versenum">52&nbsp;</sup>Going to Pilate, he asked for Jesus&rsquo; body.<sup class="versenum">53&nbsp;</sup>Then he took it down, wrapped it in linen cloth and placed it in a tomb cut in the rock, one in which no one had yet been laid.<sup class="versenum">54&nbsp;</sup>It was Preparation Day, and the Sabbath was about to begin.</p>

<p><sup class="versenum">55&nbsp;</sup>The women who had come with Jesus from Galilee followed Joseph and saw the tomb and how his body was laid in it.<sup class="versenum">56&nbsp;</sup>Then they went home and prepared spices and perfumes. But they rested on the Sabbath in obedience to the commandment.</p>

<h3>Jesus Has Risen</h3>

<p><sup class="versenum">1 </sup>On the first day of the week, very early in the morning, the women took the spices they had prepared and went to the tomb.<sup class="versenum">2&nbsp;</sup>They found the stone rolled away from the tomb,<sup class="versenum">3&nbsp;</sup>but when they entered, they did not find the body of the Lord Jesus.<sup class="versenum">4&nbsp;</sup>While they were wondering about this, suddenly two men in clothes that gleamed like lightning stood beside them.<sup class="versenum">5&nbsp;</sup>In their fright the women bowed down with their faces to the ground, but the men said to them, &ldquo;Why do you look for the living among the dead?<sup class="versenum">6&nbsp;</sup>He is not here; he has risen! Remember how he told you, while he was still with you in Galilee:<sup class="versenum">7&nbsp;</sup>&lsquo;The Son of Man must be delivered over to the hands of sinners, be crucified and on the third day be raised again.&rsquo; &rdquo;</p>

<p>.....</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<sup class="versenum">35&nbsp;</sup>Then the two told what had happened on the way, and how Jesus was recognized by them when he broke the bread.</div>

<h3>Jesus Appears to the Disciples</h3>

<p><sup class="versenum">36&nbsp;</sup>While they were still talking about this, Jesus himself stood among them and said to them, &ldquo;Peace be with you.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<h2><br />
Discovery Discussion</h2>

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
<div id="Summary1" class="summary"><h2><span><span><span>+ Summary</span></span></span></h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p><span><span><span>People witnessed Jesus&rsquo; life, death and resurrection. Read 1 Corinthians 15:3-7 to summarize the gospel. Read 1 Peter 3:18: &ldquo;For Al-Masih died for sins once for all, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive by the Spirit&hellip;&rdquo; Jesus&rsquo; death and resurrection is a very important part of the story of Jesus.</span></span></span></p>

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
	<li>The next story is about the&nbsp; Prophet Noah.</li>
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

			<td class="social" @click="share('lesson', 'Jesus is Glorified : ', '/content/M2/eng/prophet/prophet08.html')">
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