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
                        <div class="chapter_number ltr"><h1>50.</h1></div>
                        <div class="chapter_title ltr"><h1>Resurrection Leadership</h1></div>
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
	<li><span><span>Ask the group to tell the story from last week.</span></span></li>
</ul>

<h2 class="up">Read</h2>

<p class="up">Read or watch John 19:31-20:31 two times as others listen.</p>

<button id="Button0" type="button" class="collapsible bible">Read John 19:31- 20:31</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">31&nbsp;</sup>Now it was the day of Preparation, and the next day was to be a special Sabbath. Because the Jewish leaders did not want the bodies left on the crosses during the Sabbath, they asked Pilate to have the legs broken and the bodies taken down.<sup class="versenum">32&nbsp;</sup>The soldiers therefore came and broke the legs of the first man who had been crucified with Jesus, and then those of the other.<sup class="versenum">33&nbsp;</sup>But when they came to Jesus and found that he was already dead, they did not break his legs.<sup class="versenum">34&nbsp;</sup>Instead, one of the soldiers pierced Jesus&rsquo; side with a spear, bringing a sudden flow of blood and water.<sup class="versenum">35&nbsp;</sup>The man who saw it has given testimony, and his testimony is true. He knows that he tells the truth, and he testifies so that you also may believe.<sup class="versenum">36&nbsp;</sup>These things happened so that the scripture would be fulfilled: &ldquo;Not one of his bones will be broken,&rdquo;<sup class="versenum">37&nbsp;</sup>and, as another scripture says, &ldquo;They will look on the one they have pierced.&rdquo;</p>

<h3>The Burial of Jesus</h3>

<p><sup class="versenum">38&nbsp;</sup>Later, Joseph of Arimathea asked Pilate for the body of Jesus. Now Joseph was a disciple of Jesus, but secretly because he feared the Jewish leaders. With Pilate&rsquo;s permission, he came and took the body away.<sup class="versenum">39&nbsp;</sup>He was accompanied by Nicodemus, the man who earlier had visited Jesus at night. Nicodemus brought a mixture of myrrh and aloes, about seventy-five pounds.<sup class="versenum">40&nbsp;</sup>Taking Jesus&rsquo; body, the two of them wrapped it, with the spices, in strips of linen. This was in accordance with Jewish burial customs.<sup class="versenum">41&nbsp;</sup>At the place where Jesus was crucified, there was a garden, and in the garden a new tomb, in which no one had ever been laid.<sup class="versenum">42&nbsp;</sup>Because it was the Jewish day of Preparation and since the tomb was nearby, they laid Jesus there.</p>

<h3>The Empty Tomb</h3>

<p><sup class="versenum">1 </sup>Early on the first day of the week, while it was still dark, Mary Magdalene went to the tomb and saw that the stone had been removed from the entrance.<sup class="versenum">2&nbsp;</sup>So she came running to Simon Peter and the other disciple, the one Jesus loved, and said, &ldquo;They have taken the Lord out of the tomb, and we don&rsquo;t know where they have put him!&rdquo;</p>

<p><sup class="versenum">3&nbsp;</sup>So Peter and the other disciple started for the tomb.<sup class="versenum">4&nbsp;</sup>Both were running, but the other disciple outran Peter and reached the tomb first.<sup class="versenum">5&nbsp;</sup>He bent over and looked in at the strips of linen lying there but did not go in.<sup class="versenum">6&nbsp;</sup>Then Simon Peter came along behind him and went straight into the tomb. He saw the strips of linen lying there,<sup class="versenum">7&nbsp;</sup>as well as the cloth that had been wrapped around Jesus&rsquo; head. The cloth was still lying in its place, separate from the linen.<sup class="versenum">8&nbsp;</sup>Finally the other disciple, who had reached the tomb first, also went inside. He saw and believed.<sup class="versenum">9&nbsp;</sup>(They still did not understand from Scripture that Jesus had to rise from the dead.)<sup class="versenum">10&nbsp;</sup>Then the disciples went back to where they were staying.</p>

<h3>Jesus Appears to Mary Magdalene</h3>

<p><sup class="versenum">11&nbsp;</sup>Now Mary stood outside the tomb crying. As she wept, she bent over to look into the tomb<sup class="versenum">12&nbsp;</sup>and saw two angels in white, seated where Jesus&rsquo; body had been, one at the head and the other at the foot.</p>

<p><sup class="versenum">13&nbsp;</sup>They asked her, &ldquo;Woman, why are you crying?&rdquo;</p>

<p>&ldquo;They have taken my Lord away,&rdquo; she said, &ldquo;and I don&rsquo;t know where they have put him.&rdquo;<sup class="versenum">14&nbsp;</sup>At this, she turned around and saw Jesus standing there, but she did not realize that it was Jesus.</p>

<p><sup class="versenum">15&nbsp;</sup>He asked her, &ldquo;Woman, why are you crying? Who is it you are looking for?&rdquo;</p>

<p>Thinking he was the gardener, she said, &ldquo;Sir, if you have carried him away, tell me where you have put him, and I will get him.&rdquo;</p>

<p><sup class="versenum">16&nbsp;</sup>Jesus said to her, &ldquo;Mary.&rdquo;</p>

<p>She turned toward him and cried out in Aramaic, &ldquo;Rabboni!&rdquo; (which means &ldquo;Teacher&rdquo;).</p>

<p><sup class="versenum">17&nbsp;</sup>Jesus said, &ldquo;Do not hold on to me, for I have not yet ascended to the Father. Go instead to my brothers and tell them, &lsquo;I am ascending to my Father and your Father, to my God and your God.&rsquo;&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>Mary Magdalene went to the disciples with the news: &ldquo;I have seen the Lord!&rdquo; And she told them that he had said these things to her.</p>

<h3>Jesus Appears to His Disciples</h3>

<p><sup class="versenum">19&nbsp;</sup>On the evening of that first day of the week, when the disciples were together, with the doors locked for fear of the Jewish leaders, Jesus came and stood among them and said, &ldquo;Peace be with you!&rdquo;<sup class="versenum">20&nbsp;</sup>After he said this, he showed them his hands and side. The disciples were overjoyed when they saw the Lord.</p>

<p><sup class="versenum">21&nbsp;</sup>Again Jesus said, &ldquo;Peace be with you! As the Father has sent me, I am sending you.&rdquo;<sup class="versenum">22&nbsp;</sup>And with that he breathed on them and said, &ldquo;Receive the Holy Spirit.<sup class="versenum">23&nbsp;</sup>If you forgive anyone&rsquo;s sins, their sins are forgiven; if you do not forgive them, they are not forgiven.&rdquo;</p>

<h3>Jesus Appears to Thomas</h3>

<p><sup class="versenum">24&nbsp;</sup>Now Thomas (also known as Didymus), one of the Twelve, was not with the disciples when Jesus came.<sup class="versenum">25&nbsp;</sup>So the other disciples told him, &ldquo;We have seen the Lord!&rdquo;</p>

<p>But he said to them, &ldquo;Unless I see the nail marks in his hands and put my finger where the nails were, and put my hand into his side, I will not believe.&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>A week later his disciples were in the house again, and Thomas was with them. Though the doors were locked, Jesus came and stood among them and said, &ldquo;Peace be with you!&rdquo;<sup class="versenum">27&nbsp;</sup>Then he said to Thomas, &ldquo;Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>Thomas said to him, &ldquo;My Lord and my God!&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>Then Jesus told him, &ldquo;Because you have seen me, you have believed; blessed are those who have not seen and yet have believed.&rdquo;</p>

<h3>The Purpose of John&rsquo;s Gospel</h3>

<p><sup class="versenum">30&nbsp;</sup>Jesus performed many other signs in the presence of his disciples, which are not recorded in this book.<sup class="versenum">31&nbsp;</sup>But these are written that you may believe that Jesus is the Messiah, the Son of God, and that by believing you may have life in his name.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/250.mp4" type="button" class="external-movie">
         Watch John 19:31- 20:31</button>
    <div class="collapsed"></div>



<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in Jesus story?</li>
	<li>What do we learn about the humanity or divinity of Jesus from this passage?</li>
	<li>How can we live differently now that we know this story?</li>
</ul>

<p><span><span>Additional Questions:</span></span></p>

<ul class="up">
	<li><span><span>What are his followers learning?</span></span></li>
	<li><span><span>What is Jesus modeling to us about life and ministry or godly leadership</span></span></li>
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

<ul>
	<li class="nobreak-final-final">He has risen from the dead! The Bible says that Jesus&rsquo; resurrection changes everything. &ldquo;Now if we died with Christ, we believe that we will also live with him. For we know that since Christ was raised from the dead, he cannot die again; death no longer has mastery over him. The death he died, he died to sin once for all; but the life he lives, he lives to God. In the same way, count yourselves dead to sin but alive to God in Christ Jesus.&rdquo; (<span class="popup-link" @click = "popUp('pop3')"> Romans 6:8-11</span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>Now if we died with Christ, we believe that we will also live with him.<sup class="versenum">9&nbsp;</sup>For we know that since Christ was raised from the dead, he cannot die again; death no longer has mastery over him.<sup class="versenum">10&nbsp;</sup>The death he died, he died to sin once for all; but the life he lives, he lives to God.</p>

	<p><sup class="versenum">11&nbsp;</sup>In the same way, count yourselves dead to sin but alive to God in Christ Jesus.</p>
	<!-- end bible --></div>
	). The power to live life is in the power of Jesus&rsquo; victory over death. The resurrection of Jesus gives us power to defeat sin in our lives. The power of Jesus and His resurrection flows through us as we set aside our will and allow Jesus to live in and through us. Resurrection leadership is leadership that is allowing Jesus to live in and through us. Leading like Jesus is radically different than worldly leadership that seeks to promote itself and control others.</li>
</ul>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop4')"> Luke 23:50-24:49</span>;&nbsp;</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<h3><span class="for-enrichment">The Burial of Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">50&nbsp;</sup>Now there was a man named Joseph, a member of the Council, a good and upright man,<sup class="versenum">51&nbsp;</sup>who had not consented to their decision and action. He came from the Judean town of Arimathea, and he himself was waiting for the kingdom of God.<sup class="versenum">52&nbsp;</sup>Going to Pilate, he asked for Jesus&rsquo; body.<sup class="versenum">53&nbsp;</sup>Then he took it down, wrapped it in linen cloth and placed it in a tomb cut in the rock, one in which no one had yet been laid.<sup class="versenum">54&nbsp;</sup>It was Preparation Day, and the Sabbath was about to begin.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">55&nbsp;</sup>The women who had come with Jesus from Galilee followed Joseph and saw the tomb and how his body was laid in it.<sup class="versenum">56&nbsp;</sup>Then they went home and prepared spices and perfumes. But they rested on the Sabbath in obedience to the commandment.</span></p>

	<h3><span class="for-enrichment">Jesus Has Risen</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">1 </sup>On the first day of the week, very early in the morning, the women took the spices they had prepared and went to the tomb.<sup class="versenum">2&nbsp;</sup>They found the stone rolled away from the tomb,<sup class="versenum">3&nbsp;</sup>but when they entered, they did not find the body of the Lord Jesus.<sup class="versenum">4&nbsp;</sup>While they were wondering about this, suddenly two men in clothes that gleamed like lightning stood beside them.<sup class="versenum">5&nbsp;</sup>In their fright the women bowed down with their faces to the ground, but the men said to them, &ldquo;Why do you look for the living among the dead?<sup class="versenum">6&nbsp;</sup>He is not here; he has risen! Remember how he told you, while he was still with you in Galilee:<sup class="versenum">7&nbsp;</sup>&lsquo;The Son of Man must be delivered over to the hands of sinners, be crucified and on the third day be raised again.&rsquo; &rdquo;<sup class="versenum">8&nbsp;</sup>Then they remembered his words.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">9&nbsp;</sup>When they came back from the tomb, they told all these things to the Eleven and to all the others.<sup class="versenum">10&nbsp;</sup>It was Mary Magdalene, Joanna, Mary the mother of James, and the others with them who told this to the apostles.<sup class="versenum">11&nbsp;</sup>But they did not believe the women, because their words seemed to them like nonsense.<sup class="versenum">12&nbsp;</sup>Peter, however, got up and ran to the tomb. Bending over, he saw the strips of linen lying by themselves, and he went away, wondering to himself what had happened.</span></p>

	<h3><span class="for-enrichment">On the Road to Emmaus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">13&nbsp;</sup>Now that same day two of them were going to a village called Emmaus, about seven miles from Jerusalem.<sup class="versenum">14&nbsp;</sup>They were talking with each other about everything that had happened.<sup class="versenum">15&nbsp;</sup>As they talked and discussed these things with each other, Jesus himself came up and walked along with them;<sup class="versenum">16&nbsp;</sup>but they were kept from recognizing him.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>He asked them, &ldquo;What are you discussing together as you walk along?&rdquo;</span></p>

	<p><span class="for-enrichment">They stood still, their faces downcast.<sup class="versenum">18&nbsp;</sup>One of them, named Cleopas, asked him, &ldquo;Are you the only one visiting Jerusalem who does not know the things that have happened there in these days?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">19&nbsp;</sup>&ldquo;What things?&rdquo; he asked.</span></p>

	<p><span class="for-enrichment">&ldquo;About Jesus of Nazareth,&rdquo; they replied. &ldquo;He was a prophet, powerful in word and deed before God and all the people.<sup class="versenum">20&nbsp;</sup>The chief priests and our rulers handed him over to be sentenced to death, and they crucified him;<sup class="versenum">21&nbsp;</sup>but we had hoped that he was the one who was going to redeem Israel. And what is more, it is the third day since all this took place.<sup class="versenum">22&nbsp;</sup>In addition, some of our women amazed us. They went to the tomb early this morning<sup class="versenum">23&nbsp;</sup>but didn&rsquo;t find his body. They came and told us that they had seen a vision of angels, who said he was alive.<sup class="versenum">24&nbsp;</sup>Then some of our companions went to the tomb and found it just as the women had said, but they did not see Jesus.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">25&nbsp;</sup>He said to them, &ldquo;How foolish you are, and how slow to believe all that the prophets have spoken!<sup class="versenum">26&nbsp;</sup>Did not the Messiah have to suffer these things and then enter his glory?&rdquo;<sup class="versenum">27&nbsp;</sup>And beginning with Moses and all the Prophets, he explained to them what was said in all the Scriptures concerning himself.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">28&nbsp;</sup>As they approached the village to which they were going, Jesus continued on as if he were going farther.<sup class="versenum">29&nbsp;</sup>But they urged him strongly, &ldquo;Stay with us, for it is nearly evening; the day is almost over.&rdquo; So he went in to stay with them.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">30&nbsp;</sup>When he was at the table with them, he took bread, gave thanks, broke it and began to give it to them.<sup class="versenum">31&nbsp;</sup>Then their eyes were opened and they recognized him, and he disappeared from their sight.<sup class="versenum">32&nbsp;</sup>They asked each other, &ldquo;Were not our hearts burning within us while he talked with us on the road and opened the Scriptures to us?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">33&nbsp;</sup>They got up and returned at once to Jerusalem. There they found the Eleven and those with them, assembled together<sup class="versenum">34&nbsp;</sup>and saying, &ldquo;It is true! The Lord has risen and has appeared to Simon.&rdquo;<sup class="versenum">35&nbsp;</sup>Then the two told what had happened on the way, and how Jesus was recognized by them when he broke the bread.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">36&nbsp;</sup>While they were still talking about this, Jesus himself stood among them and said to them, &ldquo;Peace be with you.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">37&nbsp;</sup>They were startled and frightened, thinking they saw a ghost.<sup class="versenum">38&nbsp;</sup>He said to them, &ldquo;Why are you troubled, and why do doubts rise in your minds?<sup class="versenum">39&nbsp;</sup>Look at my hands and my feet. It is I myself! Touch me and see; a ghost does not have flesh and bones, as you see I have.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">40&nbsp;</sup>When he had said this, he showed them his hands and feet.<sup class="versenum">41&nbsp;</sup>And while they still did not believe it because of joy and amazement, he asked them, &ldquo;Do you have anything here to eat?&rdquo;<sup class="versenum">42&nbsp;</sup>They gave him a piece of broiled fish,<sup class="versenum">43&nbsp;</sup>and he took it and ate it in their presence.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">44&nbsp;</sup>He said to them, &ldquo;This is what I told you while I was still with you: Everything must be fulfilled that is written about me in the Law of Moses, the Prophets and the Psalms.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">45&nbsp;</sup>Then he opened their minds so they could understand the Scriptures.<sup class="versenum">46&nbsp;</sup>He told them, &ldquo;This is what is written: The Messiah will suffer and rise from the dead on the third day,<sup class="versenum">47&nbsp;</sup>and repentance for the forgiveness of sins will be preached in his name to all nations, beginning at Jerusalem.<sup class="versenum">48&nbsp;</sup>You are witnesses of these things.<sup class="versenum">49&nbsp;</sup>I am going to send you what my Father has promised; but stay in the city until you have been clothed with power from on high.&rdquo;</span></p>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop5')"> Matthew 27:57-28:15</span>;&nbsp;</span>

	<div class="popup invisible" id="pop5"><span class="for-enrichment"><!-- begin bible --></span>

	<h3><span class="for-enrichment">The Burial of Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">57&nbsp;</sup>As evening approached, there came a rich man from Arimathea, named Joseph, who had himself become a disciple of Jesus.<sup class="versenum">58&nbsp;</sup>Going to Pilate, he asked for Jesus&rsquo; body, and Pilate ordered that it be given to him.<sup class="versenum">59&nbsp;</sup>Joseph took the body, wrapped it in a clean linen cloth,<sup class="versenum">60&nbsp;</sup>and placed it in his own new tomb that he had cut out of the rock. He rolled a big stone in front of the entrance to the tomb and went away.<sup class="versenum">61&nbsp;</sup>Mary Magdalene and the other Mary were sitting there opposite the tomb.</span></p>

	<h3><span class="for-enrichment">The Guard at the Tomb</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">62&nbsp;</sup>The next day, the one after Preparation Day, the chief priests and the Pharisees went to Pilate.<sup class="versenum">63&nbsp;</sup>&ldquo;Sir,&rdquo; they said, &ldquo;we remember that while he was still alive that deceiver said, &lsquo;After three days I will rise again.&rsquo;<sup class="versenum">64&nbsp;</sup>So give the order for the tomb to be made secure until the third day. Otherwise, his disciples may come and steal the body and tell the people that he has been raised from the dead. This last deception will be worse than the first.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">65&nbsp;</sup>&ldquo;Take a guard,&rdquo; Pilate answered. &ldquo;Go, make the tomb as secure as you know how.&rdquo;<sup class="versenum">66&nbsp;</sup>So they went and made the tomb secure by putting a seal on the stone and posting the guard.</span></p>

	<h3><span class="for-enrichment">Jesus Has Risen</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">1 </sup>After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other Mary went to look at the tomb.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">2&nbsp;</sup>There was a violent earthquake, for an angel of the Lord came down from heaven and, going to the tomb, rolled back the stone and sat on it.<sup class="versenum">3&nbsp;</sup>His appearance was like lightning, and his clothes were white as snow.<sup class="versenum">4&nbsp;</sup>The guards were so afraid of him that they shook and became like dead men.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">5&nbsp;</sup>The angel said to the women, &ldquo;Do not be afraid, for I know that you are looking for Jesus, who was crucified.<sup class="versenum">6&nbsp;</sup>He is not here; he has risen, just as he said. Come and see the place where he lay.<sup class="versenum">7&nbsp;</sup>Then go quickly and tell his disciples: &lsquo;He has risen from the dead and is going ahead of you into Galilee. There you will see him.&rsquo; Now I have told you.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">8&nbsp;</sup>So the women hurried away from the tomb, afraid yet filled with joy, and ran to tell his disciples.<sup class="versenum">9&nbsp;</sup>Suddenly Jesus met them. &ldquo;Greetings,&rdquo; he said. They came to him, clasped his feet and worshiped him.<sup class="versenum">10&nbsp;</sup>Then Jesus said to them, &ldquo;Do not be afraid. Go and tell my brothers to go to Galilee; there they will see me.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">11&nbsp;</sup>While the women were on their way, some of the guards went into the city and reported to the chief priests everything that had happened.<sup class="versenum">12&nbsp;</sup>When the chief priests had met with the elders and devised a plan, they gave the soldiers a large sum of money,<sup class="versenum">13&nbsp;</sup>telling them, &ldquo;You are to say, &lsquo;His disciples came during the night and stole him away while we were asleep.&rsquo;<sup class="versenum">14&nbsp;</sup>If this report gets to the governor, we will satisfy him and keep you out of trouble.&rdquo;<sup class="versenum">15&nbsp;</sup>So the soldiers took the money and did as they were instructed. And this story has been widely circulated among the Jews to this very day.</span></p>
	</div>
	<span class="for-enrichment"><span class="popup-link" @click = "popUp('pop6')"> Mark 15:42- 16:18</span>.</span>

	<div class="popup invisible" id="pop6"><span class="for-enrichment"><!-- begin bible --></span>

	<h3><span class="for-enrichment">The Burial of Jesus</span></h3>

	<p><span class="for-enrichment"><sup class="versenum">42&nbsp;</sup>It was Preparation Day (that is, the day before the Sabbath). So as evening approached,<sup class="versenum">43&nbsp;</sup>Joseph of Arimathea, a prominent member of the Council, who was himself waiting for the kingdom of God, went boldly to Pilate and asked for Jesus&rsquo; body.<sup class="versenum">44&nbsp;</sup>Pilate was surprised to hear that he was already dead. Summoning the centurion, he asked him if Jesus had already died.<sup class="versenum">45&nbsp;</sup>When he learned from the centurion that it was so, he gave the body to Joseph.<sup class="versenum">46&nbsp;</sup>So Joseph bought some linen cloth, took down the body, wrapped it in the linen, and placed it in a tomb cut out of rock. Then he rolled a stone against the entrance of the tomb.<sup class="versenum">47&nbsp;</sup>Mary Magdalene and Mary the mother of Joseph saw where he was laid.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">1 </sup>When the Sabbath was over, Mary Magdalene, Mary the mother of James, and Salome bought spices so that they might go to anoint Jesus&rsquo; body.<sup class="versenum">2&nbsp;</sup>Very early on the first day of the week, just after sunrise, they were on their way to the tomb<sup class="versenum">3&nbsp;</sup>and they asked each other, &ldquo;Who will roll the stone away from the entrance of the tomb?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">4&nbsp;</sup>But when they looked up, they saw that the stone, which was very large, had been rolled away.<sup class="versenum">5&nbsp;</sup>As they entered the tomb, they saw a young man dressed in a white robe sitting on the right side, and they were alarmed.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">6&nbsp;</sup>&ldquo;Don&rsquo;t be alarmed,&rdquo; he said. &ldquo;You are looking for Jesus the Nazarene, who was crucified. He has risen! He is not here. See the place where they laid him.<sup class="versenum">7&nbsp;</sup>But go, tell his disciples and Peter, &lsquo;He is going ahead of you into Galilee. There you will see him, just as he told you.&rsquo;&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">8&nbsp;</sup>Trembling and bewildered, the women went out and fled from the tomb. They said nothing to anyone, because they were afraid.</span></p>

	
	<p><span class="for-enrichment">[The earliest manuscripts and some other ancient witnesses do not have verses 9&ndash;20.]</span></p>

	<p><span class="for-enrichment"><em><sup class="versenum">9&nbsp;</sup>When Jesus rose early on the first day of the week, he appeared first to Mary Magdalene,</em> <em>out of whom he had driven seven demons.</em><em><sup class="versenum">10&nbsp;</sup>She went and told those who had been with him and who were mourning and weeping.</em><em><sup class="versenum">11&nbsp;</sup>When they heard that Jesus was alive and that she had seen him, they did not believe it.</em></span></p>

	<p><span class="for-enrichment"><em><sup class="versenum">12&nbsp;</sup>Afterward Jesus appeared in a different form to two of them while they were walking in the country.</em><em><sup class="versenum">13&nbsp;</sup>These returned and reported it to the rest; but they did not believe them either.</em></span></p>

	<p><span class="for-enrichment"><em><sup class="versenum">14&nbsp;</sup>Later Jesus appeared to the Eleven as they were eating; he rebuked them for their lack of faith and their stubborn refusal to believe those who had seen him after he had risen.</em></span></p>

	<p><span class="for-enrichment"><em><sup class="versenum">15&nbsp;</sup>He said to them, &ldquo;Go into all the world and preach the gospel to all creation.</em><em><sup class="versenum">16&nbsp;</sup>Whoever believes and is baptized will be saved, but whoever does not believe will be condemned.</em><em><sup class="versenum">17&nbsp;</sup>And these signs</em> <em>will accompany those who believe: In my name they will drive out demons;</em> <em>they will speak in new tongues;</em><em><sup class="versenum">18&nbsp;</sup>they will pick up snakes</em> <em>with their hands; and when they drink deadly poison, it will not hurt them at all; they will place their hands on</em> <em>sick people, and they will get well.&rdquo;</em></span></p>
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

			<td class="social" @click="share('lesson', 'Resurrection Leadership: ', '/content/M2/eng/multiply2/multiply250.html')">
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