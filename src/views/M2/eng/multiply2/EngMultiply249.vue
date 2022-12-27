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
                        <div class="chapter_number ltr"><h1>49.</h1></div>
                        <div class="chapter_title ltr"><h1>Crucified Leadership</h1></div>
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
	<li><span><span>Ask the group to tell the story from last week.</span></span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch John 19:13-30 and Matthew 27:45-46 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 19:13-30</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">13&nbsp;</sup>When Pilate heard this, he brought Jesus out and sat down on the judge&rsquo;s seat at a place known as the Stone Pavement (which in Aramaic is Gabbatha).<sup class="versenum">14&nbsp;</sup>It was the day of Preparation of the Passover; it was about noon.</p>

<p>&ldquo;Here is your king,&rdquo; Pilate said to the Jews.</p>

<p><sup class="versenum">15&nbsp;</sup>But they shouted, &ldquo;Take him away! Take him away! Crucify him!&rdquo;</p>

<p>&ldquo;Shall I crucify your king?&rdquo; Pilate asked.</p>

<p>&ldquo;We have no king but Caesar,&rdquo; the chief priests answered.</p>

<p><sup class="versenum">16&nbsp;</sup>Finally Pilate handed him over to them to be crucified.</p>

<h3>The Crucifixion of Jesus</h3>

<p>So the soldiers took charge of Jesus.<sup class="versenum">17&nbsp;</sup>Carrying his own cross, he went out to the place of the Skull (which in Aramaic is called Golgotha).<sup class="versenum">18&nbsp;</sup>There they crucified him, and with him two others&mdash;one on each side and Jesus in the middle.</p>

<p><sup class="versenum">19&nbsp;</sup>Pilate had a notice prepared and fastened to the cross. It read: <span class="small-caps">jesus of nazareth, <span class="small-caps">the king of the jews.<sup class="versenum">20&nbsp;</sup>Many of the Jews read this sign, for the place where Jesus was crucified was near the city, and the sign was written in Aramaic, Latin and Greek.<sup class="versenum">21&nbsp;</sup>The chief priests of the Jews protested to Pilate, &ldquo;Do not write &lsquo;The King of the Jews,&rsquo; but that this man claimed to be king of the Jews.&rdquo;</span></span></p>

<p><sup class="versenum">22&nbsp;</sup>Pilate answered, &ldquo;What I have written, I have written.&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>When the soldiers crucified Jesus, they took his clothes, dividing them into four shares, one for each of them, with the undergarment remaining. This garment was seamless, woven in one piece from top to bottom.</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;Let&rsquo;s not tear it,&rdquo; they said to one another. &ldquo;Let&rsquo;s decide by lot who will get it.&rdquo;</p>

<p>This happened that the scripture might be fulfilled that said,</p>

<p>&ldquo;They divided my clothes among them<br />
&nbsp;&nbsp;&nbsp;&nbsp;and cast lots for my garment.&rdquo;</p>

<p>So this is what the soldiers did.</p>

<p><sup class="versenum">25&nbsp;</sup>Near the cross of Jesus stood his mother, his mother&rsquo;s sister, Mary the wife of Clopas, and Mary Magdalene.<sup class="versenum">26&nbsp;</sup>When Jesus saw his mother there, and the disciple whom he loved standing nearby, he said to her, &ldquo;Woman, here is your son,&rdquo;<sup class="versenum">27&nbsp;</sup>and to the disciple, &ldquo;Here is your mother.&rdquo; From that time on, this disciple took her into his home.</p>

<h3>The Death of Jesus</h3>

<p><sup class="versenum">28&nbsp;</sup>Later, knowing that everything had now been finished, and so that Scripture would be fulfilled, Jesus said, &ldquo;I am thirsty.&rdquo;<sup class="versenum">29&nbsp;</sup>A jar of wine vinegar was there, so they soaked a sponge in it, put the sponge on a stalk of the hyssop plant, and lifted it to Jesus&rsquo; lips.<sup class="versenum">30&nbsp;</sup>When he had received the drink, Jesus said, &ldquo;It is finished.&rdquo; With that, he bowed his head and gave up his spirit.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/249.mp4" type="button" class="external-movie">
         Watch &nbsp;John 19:13-30&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Read Matthew 27:45-46</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<h3>The Death of Jesus</h3>

<p><sup class="versenum">45&nbsp;</sup>From noon until three in the afternoon darkness came over all the land.<sup class="versenum">46&nbsp;</sup>About three in the afternoon Jesus cried out in a loud voice, <em>&ldquo;Eli, Eli,</em> <em>lema</em> <em>sabachthani?&rdquo;</em> (which means &ldquo;My God, my God, why have you forsaken me?&rdquo;).</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/249-1.mp4" type="button" class="external-movie">
         Watch &nbsp;Matthew 27:45-46&nbsp;</button>
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

<p class="up">Jesus was betrayed, lied about, treated unjustly, beaten, whipped, and finally nailed to a cross to die between two criminals. In His humanity, Jesus suffered greatly in those last hours of life. God placed the sin of the world on Jesus as an innocent substitute for us. Jesus suffered separation from the Father for the first time. He was forsaken by the Father, who turned His back on Jesus because Jesus was carrying all the weight of the world&rsquo;s sin. The Passover Lamb of God shed His blood and the veil of the temple was torn. Jesus was the last sacrifice. Now we have access to the living God. Those who believe have been adopted into this new family. He made a way to the Father. He laid down His life to pay our debt. On the cross a great exchange happened, &ldquo;God made Him who had no sin to be sin so that we might become the righteousness of God.&rdquo; (<span class="popup-link" @click = "popUp('pop3')"> 2 Corinthians 5:21</span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">21&nbsp;</sup>God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.</p>
</div>
</div>
<!-- end bible --></div>
)<br />



</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study:<span class="popup-link" @click = "popUp('pop4')">  Luke 23:26-49</span>;&nbsp;</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<div>
	<h3><span class="for-enrichment">The Crucifixion of Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">26&nbsp;</sup>As the soldiers led him away, they seized Simon from Cyrene, who was on his way in from the country, and put the cross on him and made him carry it behind Jesus.<sup class="versenum">27&nbsp;</sup>A large number of people followed him, including women who mourned and wailed for him.<sup class="versenum">28&nbsp;</sup>Jesus turned and said to them, &ldquo;Daughters of Jerusalem, do not weep for me; weep for yourselves and for your children.<sup class="versenum">29&nbsp;</sup>For the time will come when you will say, &lsquo;Blessed are the childless women, the wombs that never bore and the breasts that never nursed!&rsquo;<sup class="versenum">30&nbsp;</sup>Then</span></p>

	<p><span class="for-enrichment">&ldquo;&lsquo;they will say to the mountains, &ldquo;Fall on us!&rdquo;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;and to the hills, &ldquo;Cover us!&rdquo;&rsquo;</span></p>
	</div>

	<p><span class="for-enrichment"><sup class="versenum">31&nbsp;</sup>For if people do these things when the tree is green, what will happen when it is dry?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">32&nbsp;</sup>Two other men, both criminals, were also led out with him to be executed.<sup class="versenum">33&nbsp;</sup>When they came to the place called the Skull, they crucified him there, along with the criminals&mdash;one on his right, the other on his left.<sup class="versenum">34&nbsp;</sup>Jesus said, &ldquo;Father, forgive them, for they do not know what they are doing.&rdquo; And they divided up his clothes by casting lots.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">35&nbsp;</sup>The people stood watching, and the rulers even sneered at him. They said, &ldquo;He saved others; let him save himself if he is God&rsquo;s Messiah, the Chosen One.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">36&nbsp;</sup>The soldiers also came up and mocked him. They offered him wine vinegar<sup class="versenum">37&nbsp;</sup>and said, &ldquo;If you are the king of the Jews, save yourself.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">38&nbsp;</sup>There was a written notice above him, which read: <span class="small-caps">this is the king of the jews.</span></span></p>

	<p><span class="for-enrichment"><sup class="versenum">39&nbsp;</sup>One of the criminals who hung there hurled insults at him: &ldquo;Aren&rsquo;t you the Messiah? Save yourself and us!&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">40&nbsp;</sup>But the other criminal rebuked him. &ldquo;Don&rsquo;t you fear God,&rdquo; he said, &ldquo;since you are under the same sentence?<sup class="versenum">41&nbsp;</sup>We are punished justly, for we are getting what our deeds deserve. But this man has done nothing wrong.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">42&nbsp;</sup>Then he said, &ldquo;Jesus, remember me when you come into your kingdom.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">43&nbsp;</sup>Jesus answered him, &ldquo;Truly I tell you, today you will be with me in paradise.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">44&nbsp;</sup>It was now about noon, and darkness came over the whole land until three in the afternoon,<sup class="versenum">45&nbsp;</sup>for the sun stopped shining. And the curtain of the temple was torn in two.<sup class="versenum">46&nbsp;</sup>Jesus called out with a loud voice, &ldquo;Father, into your hands I commit my spirit.&rdquo; When he had said this, he breathed his last.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">47&nbsp;</sup>The centurion, seeing what had happened, praised God and said, &ldquo;Surely this was a righteous man.&rdquo;<sup class="versenum">48&nbsp;</sup>When all the people who had gathered to witness this sight saw what took place, they beat their breasts and went away.<sup class="versenum">49&nbsp;</sup>But all those who knew him, including the women who had followed him from Galilee, stood at a distance, watching these things.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment"><span class="popup-link" @click = "popUp('pop5')"> Matthew 27:27-56</span>;&nbsp;</span>

	<div class="popup invisible" id="pop5"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<h3><span class="for-enrichment">The Soldiers Mock Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">27&nbsp;</sup>Then the governor&rsquo;s soldiers took Jesus into the Praetorium and gathered the whole company of soldiers around him.<sup class="versenum">28&nbsp;</sup>They stripped him and put a scarlet robe on him,<sup class="versenum">29&nbsp;</sup>and then twisted together a crown of thorns and set it on his head. They put a staff in his right hand. Then they knelt in front of him and mocked him. &ldquo;Hail, king of the Jews!&rdquo; they said.<sup class="versenum">30&nbsp;</sup>They spit on him, and took the staff and struck him on the head again and again.<sup class="versenum">31&nbsp;</sup>After they had mocked him, they took off the robe and put his own clothes on him. Then they led him away to crucify him.</span></p>

	<h3><span class="for-enrichment">The Crucifixion of Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">32&nbsp;</sup>As they were going out, they met a man from Cyrene, named Simon, and they forced him to carry the cross.<sup class="versenum">33&nbsp;</sup>They came to a place called Golgotha (which means &ldquo;the place of the skull&rdquo;).<sup class="versenum">34&nbsp;</sup>There they offered Jesus wine to drink, mixed with gall; but after tasting it, he refused to drink it.<sup class="versenum">35&nbsp;</sup>When they had crucified him, they divided up his clothes by casting lots.<sup class="versenum">36&nbsp;</sup>And sitting down, they kept watch over him there.<sup class="versenum">37&nbsp;</sup>Above his head they placed the written charge against him: <span class="small-caps">this is jesus, the king of the jews.</span></span></p>

	<p><span class="for-enrichment"><sup class="versenum">38&nbsp;</sup>Two rebels were crucified with him, one on his right and one on his left.<sup class="versenum">39&nbsp;</sup>Those who passed by hurled insults at him, shaking their heads<sup class="versenum">40&nbsp;</sup>and saying, &ldquo;You who are going to destroy the temple and build it in three days, save yourself! Come down from the cross, if you are the Son of God!&rdquo;<sup class="versenum">41&nbsp;</sup>In the same way the chief priests, the teachers of the law and the elders mocked him.<sup class="versenum">42&nbsp;</sup>&ldquo;He saved others,&rdquo; they said, &ldquo;but he can&rsquo;t save himself! He&rsquo;s the king of Israel! Let him come down now from the cross, and we will believe in him.<sup class="versenum">43&nbsp;</sup>He trusts in God. Let God rescue him now if he wants him, for he said, &lsquo;I am the Son of God.&rsquo;&rdquo;<sup class="versenum">44&nbsp;</sup>In the same way the rebels who were crucified with him also heaped insults on him.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">45&nbsp;</sup>From noon until three in the afternoon darkness came over all the land.<sup class="versenum">46&nbsp;</sup>About three in the afternoon Jesus cried out in a loud voice, <em>&ldquo;Eli, Eli,</em> <em>lema</em> <em>sabachthani?&rdquo;</em> (which means &ldquo;My God, my God, why have you forsaken me?&rdquo;).</span></p>

	<p><span class="for-enrichment"><sup class="versenum">47&nbsp;</sup>When some of those standing there heard this, they said, &ldquo;He&rsquo;s calling Elijah.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">48&nbsp;</sup>Immediately one of them ran and got a sponge. He filled it with wine vinegar, put it on a staff, and offered it to Jesus to drink.<sup class="versenum">49&nbsp;</sup>The rest said, &ldquo;Now leave him alone. Let&rsquo;s see if Elijah comes to save him.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">50&nbsp;</sup>And when Jesus had cried out again in a loud voice, he gave up his spirit.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">51&nbsp;</sup>At that moment the curtain of the temple was torn in two from top to bottom. The earth shook, the rocks split<sup class="versenum">52&nbsp;</sup>and the tombs broke open. The bodies of many holy people who had died were raised to life.<sup class="versenum">53&nbsp;</sup>They came out of the tombs after Jesus&rsquo; resurrection and went into the holy city and appeared to many people.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">54&nbsp;</sup>When the centurion and those with him who were guarding Jesus saw the earthquake and all that had happened, they were terrified, and exclaimed, &ldquo;Surely he was the Son of God!&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">55&nbsp;</sup>Many women were there, watching from a distance. They had followed Jesus from Galilee to care for his needs.<sup class="versenum">56&nbsp;</sup>Among them were Mary Magdalene, Mary the mother of James and Joseph, and the mother of Zebedee&rsquo;s sons.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop6')"> Mark 15:16-41</span>.&nbsp;</span>

	<div class="popup invisible" id="pop6"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<h3><span class="for-enrichment">The Soldiers Mock Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">16&nbsp;</sup>The soldiers led Jesus away into the palace (that is, the Praetorium) and called together the whole company of soldiers.<sup class="versenum">17&nbsp;</sup>They put a purple robe on him, then twisted together a crown of thorns and set it on him.<sup class="versenum">18&nbsp;</sup>And they began to call out to him, &ldquo;Hail, king of the Jews!&rdquo;<sup class="versenum">19&nbsp;</sup>Again and again they struck him on the head with a staff and spit on him. Falling on their knees, they paid homage to him.<sup class="versenum">20&nbsp;</sup>And when they had mocked him, they took off the purple robe and put his own clothes on him. Then they led him out to crucify him.</span></p>

	<h3><span class="for-enrichment">The Crucifixion of Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">21&nbsp;</sup>A certain man from Cyrene, Simon, the father of Alexander and Rufus, was passing by on his way in from the country, and they forced him to carry the cross.<sup class="versenum">22&nbsp;</sup>They brought Jesus to the place called Golgotha (which means &ldquo;the place of the skull&rdquo;).<sup class="versenum">23&nbsp;</sup>Then they offered him wine mixed with myrrh, but he did not take it.<sup class="versenum">24&nbsp;</sup>And they crucified him. Dividing up his clothes, they cast lots to see what each would get.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">25&nbsp;</sup>It was nine in the morning when they crucified him.<sup class="versenum">26&nbsp;</sup>The written notice of the charge against him read: <span class="small-caps">the king of the jews.</span></span></p>

	<p><span class="for-enrichment"><sup class="versenum">27&nbsp;</sup>They crucified two rebels with him, one on his right and one on his left.<sup class="versenum">[28]&nbsp;</sup><sup class="versenum">29&nbsp;</sup>Those who passed by hurled insults at him, shaking their heads and saying, &ldquo;So! You who are going to destroy the temple and build it in three days,<sup class="versenum">30&nbsp;</sup>come down from the cross and save yourself!&rdquo;<sup class="versenum">31&nbsp;</sup>In the same way the chief priests and the teachers of the law mocked him among themselves. &ldquo;He saved others,&rdquo; they said, &ldquo;but he can&rsquo;t save himself!<sup class="versenum">32&nbsp;</sup>Let this Messiah, this king of Israel, come down now from the cross, that we may see and believe.&rdquo; Those crucified with him also heaped insults on him.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">33&nbsp;</sup>At noon, darkness came over the whole land until three in the afternoon.<sup class="versenum">34&nbsp;</sup>And at three in the afternoon Jesus cried out in a loud voice, <em>&ldquo;Eloi, Eloi, lema sabachthani?&rdquo;</em> (which means &ldquo;My God, my God, why have you forsaken me?&rdquo;).</span></p>

	<p><span class="for-enrichment"><sup class="versenum">35&nbsp;</sup>When some of those standing near heard this, they said, &ldquo;Listen, he&rsquo;s calling Elijah.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">36&nbsp;</sup>Someone ran, filled a sponge with wine vinegar, put it on a staff, and offered it to Jesus to drink. &ldquo;Now leave him alone. Let&rsquo;s see if Elijah comes to take him down,&rdquo; he said.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">37&nbsp;</sup>With a loud cry, Jesus breathed his last.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">38&nbsp;</sup>The curtain of the temple was torn in two from top to bottom.<sup class="versenum">39&nbsp;</sup>And when the centurion, who stood there in front of Jesus, saw how he died, he said, &ldquo;Surely this man was the Son of God!&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">40&nbsp;</sup>Some women were watching from a distance. Among them were Mary Magdalene, Mary the mother of James the younger and of Joseph, and Salome.<sup class="versenum">41&nbsp;</sup>In Galilee these women had followed him and cared for his needs. Many other women who had come up with him to Jerusalem were also there.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	</li>
</ul>

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

			<td class="social" @click="share('lesson', 'Crucified Leadership: ', '/content/M2/eng/multiply2/multiply249.html')">
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