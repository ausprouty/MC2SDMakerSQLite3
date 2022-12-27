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
                        <div class="chapter_number ltr"><h1>47.</h1></div>
                        <div class="chapter_title ltr"><h1>Servant Leadership</h1></div>
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

<ul>
	<li class="up">Read or watch John 13:1-38 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read John 13</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jesus Washes His Disciples&rsquo; Feet</h3>

<p><sup class="versenum">1 </sup>It was just before the Passover Festival. Jesus knew that the hour had come for him to leave this world and go to the Father. Having loved his own who were in the world, he loved them to the end.</p>

<p><sup class="versenum">2&nbsp;</sup>The evening meal was in progress, and the devil had already prompted Judas, the son of Simon Iscariot, to betray Jesus.<sup class="versenum">3&nbsp;</sup>Jesus knew that the Father had put all things under his power, and that he had come from God and was returning to God;<sup class="versenum">4&nbsp;</sup>so he got up from the meal, took off his outer clothing, and wrapped a towel around his waist.<sup class="versenum">5&nbsp;</sup>After that, he poured water into a basin and began to wash his disciples&rsquo; feet, drying them with the towel that was wrapped around him.</p>

<p><sup class="versenum">6&nbsp;</sup>He came to Simon Peter, who said to him, &ldquo;Lord, are you going to wash my feet?&rdquo;</p>

<p><sup class="versenum">7&nbsp;</sup>Jesus replied, &ldquo;You do not realize now what I am doing, but later you will understand.&rdquo;</p>

<p><sup class="versenum">8&nbsp;</sup>&ldquo;No,&rdquo; said Peter, &ldquo;you shall never wash my feet.&rdquo;</p>

<p>Jesus answered, &ldquo;Unless I wash you, you have no part with me.&rdquo;</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;Then, Lord,&rdquo; Simon Peter replied, &ldquo;not just my feet but my hands and my head as well!&rdquo;</p>

<p><sup class="versenum">10&nbsp;</sup>Jesus answered, &ldquo;Those who have had a bath need only to wash their feet; their whole body is clean. And you are clean, though not every one of you.&rdquo;<sup class="versenum">11&nbsp;</sup>For he knew who was going to betray him, and that was why he said not every one was clean.</p>

<p><sup class="versenum">12&nbsp;</sup>When he had finished washing their feet, he put on his clothes and returned to his place. &ldquo;Do you understand what I have done for you?&rdquo; he asked them.<sup class="versenum">13&nbsp;</sup>&ldquo;You call me &lsquo;Teacher&rsquo; and &lsquo;Lord,&rsquo; and rightly so, for that is what I am.<sup class="versenum">14&nbsp;</sup>Now that I, your Lord and Teacher, have washed your feet, you also should wash one another&rsquo;s feet.<sup class="versenum">15&nbsp;</sup>I have set you an example that you should do as I have done for you.<sup class="versenum">16&nbsp;</sup>Very truly I tell you, no servant is greater than his master, nor is a messenger greater than the one who sent him.<sup class="versenum">17&nbsp;</sup>Now that you know these things, you will be blessed if you do them.</p>

<h3>Jesus Predicts His Betrayal</h3>

<p><sup class="versenum">18&nbsp;</sup>&ldquo;I am not referring to all of you; I know those I have chosen. But this is to fulfill this passage of Scripture: &lsquo;He who shared my bread has turned against me.&rsquo;</p>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;I am telling you now before it happens, so that when it does happen you will believe that I am who I am.<sup class="versenum">20&nbsp;</sup>Very truly I tell you, whoever accepts anyone I send accepts me; and whoever accepts me accepts the one who sent me.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>After he had said this, Jesus was troubled in spirit and testified, &ldquo;Very truly I tell you, one of you is going to betray me.&rdquo;</p>

<p><sup class="versenum">22&nbsp;</sup>His disciples stared at one another, at a loss to know which of them he meant.<sup class="versenum">23&nbsp;</sup>One of them, the disciple whom Jesus loved, was reclining next to him.<sup class="versenum">24&nbsp;</sup>Simon Peter motioned to this disciple and said, &ldquo;Ask him which one he means.&rdquo;</p>

<p><sup class="versenum">25&nbsp;</sup>Leaning back against Jesus, he asked him, &ldquo;Lord, who is it?&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>Jesus answered, &ldquo;It is the one to whom I will give this piece of bread when I have dipped it in the dish.&rdquo; Then, dipping the piece of bread, he gave it to Judas, the son of Simon Iscariot.<sup class="versenum">27&nbsp;</sup>As soon as Judas took the bread, Satan entered into him.</p>

<p>So Jesus told him, &ldquo;What you are about to do, do quickly.&rdquo;<sup class="versenum">28&nbsp;</sup>But no one at the meal understood why Jesus said this to him.<sup class="versenum">29&nbsp;</sup>Since Judas had charge of the money, some thought Jesus was telling him to buy what was needed for the festival, or to give something to the poor.<sup class="versenum">30&nbsp;</sup>As soon as Judas had taken the bread, he went out. And it was night.</p>

<h3>Jesus Predicts Peter&rsquo;s Denial</h3>

<p><sup class="versenum">31&nbsp;</sup>When he was gone, Jesus said, &ldquo;Now the Son of Man is glorified and God is glorified in him.<sup class="versenum">32&nbsp;</sup>If God is glorified in him, God will glorify the Son in himself, and will glorify him at once.</p>

<p><sup class="versenum">33&nbsp;</sup>&ldquo;My children, I will be with you only a little longer. You will look for me, and just as I told the Jews, so I tell you now: Where I am going, you cannot come.</p>

<p><sup class="versenum">34&nbsp;</sup>&ldquo;A new command I give you: Love one another. As I have loved you, so you must love one another.<sup class="versenum">35&nbsp;</sup>By this everyone will know that you are my disciples, if you love one another.&rdquo;</p>

<p><sup class="versenum">36&nbsp;</sup>Simon Peter asked him, &ldquo;Lord, where are you going?&rdquo;</p>

<p>Jesus replied, &ldquo;Where I am going, you cannot follow now, but you will follow later.&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>Peter asked, &ldquo;Lord, why can&rsquo;t I follow you now? I will lay down my life for you.&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>Then Jesus answered, &ldquo;Will you really lay down your life for me? Very truly I tell you, before the rooster crows, you will disown me three times!</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/247.mp4" type="button" class="external-movie">
         Watch &nbsp;John 13:1-38&nbsp;</button>
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

<p class="up">Jesus spends the final week of His life teaching at the temple during the day and praying on the Mount of Olives in the evening. On the last night with His disciples, He teaches a lot about leadership. He &ldquo;shows the full extent of His love.&rdquo; Jesus surprises His disciples by taking the role of a household servant, washing the feet of all twelve. None of them had done that! Jesus told them that they should follow His example to be humble, serving one another by doing whatever is needed. In most cultures, servant leadership is seen as being weak, but this is how leadership works in God&rsquo;s Kingdom. As Jesus was sharing the last supper with his closest core team of twelve, He was grieved knowing that one of them would betray Him. Judas had become disillusioned with Jesus&rsquo; leadership and had already struck a deal to help the religious leaders arrest Jesus in a quiet place away from the crowds. Judas opened himself up to be manipulated by Satan. In the midst of betrayal and grief, Jesus commands the disciples that they must love one another.</p>

</div>

<ul>
	<li class="nobreak-final-final"><span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Luke 22:7-38</span>;&nbsp;</span>

	<div class="popup invisible" id="pop3"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">7&nbsp;</sup>Then came the day of Unleavened Bread on which the Passover lamb had to be sacrificed.<sup class="versenum">8&nbsp;</sup>Jesus sent Peter and John, saying, &ldquo;Go and make preparations for us to eat the Passover.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">9&nbsp;</sup>&ldquo;Where do you want us to prepare for it?&rdquo; they asked.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">10&nbsp;</sup>He replied, &ldquo;As you enter the city, a man carrying a jar of water will meet you. Follow him to the house that he enters,<sup class="versenum">11&nbsp;</sup>and say to the owner of the house, &lsquo;The Teacher asks: Where is the guest room, where I may eat the Passover with my disciples?&rsquo;<sup class="versenum">12&nbsp;</sup>He will show you a large room upstairs, all furnished. Make preparations there.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">13&nbsp;</sup>They left and found things just as Jesus had told them. So they prepared the Passover.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">14&nbsp;</sup>When the hour came, Jesus and his apostles reclined at the table.<sup class="versenum">15&nbsp;</sup>And he said to them, &ldquo;I have eagerly desired to eat this Passover with you before I suffer.<sup class="versenum">16&nbsp;</sup>For I tell you, I will not eat it again until it finds fulfillment in the kingdom of God.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>After taking the cup, he gave thanks and said, &ldquo;Take this and divide it among you.<sup class="versenum">18&nbsp;</sup>For I tell you I will not drink again from the fruit of the vine until the kingdom of God comes.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">19&nbsp;</sup>And he took bread, gave thanks and broke it, and gave it to them, saying, &ldquo;This is my body given for you; do this in remembrance of me.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">20&nbsp;</sup>In the same way, after the supper he took the cup, saying, &ldquo;This cup is the new covenant in my blood, which is poured out for you.<sup class="versenum">21&nbsp;</sup>But the hand of him who is going to betray me is with mine on the table.<sup class="versenum">22&nbsp;</sup>The Son of Man will go as it has been decreed. But woe to that man who betrays him!&rdquo;<sup class="versenum">23&nbsp;</sup>They began to question among themselves which of them it might be who would do this.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">24&nbsp;</sup>A dispute also arose among them as to which of them was considered to be greatest.<sup class="versenum">25&nbsp;</sup>Jesus said to them, &ldquo;The kings of the Gentiles lord it over them; and those who exercise authority over them call themselves Benefactors.<sup class="versenum">26&nbsp;</sup>But you are not to be like that. Instead, the greatest among you should be like the youngest, and the one who rules like the one who serves.<sup class="versenum">27&nbsp;</sup>For who is greater, the one who is at the table or the one who serves? Is it not the one who is at the table? But I am among you as one who serves.<sup class="versenum">28&nbsp;</sup>You are those who have stood by me in my trials.<sup class="versenum">29&nbsp;</sup>And I confer on you a kingdom, just as my Father conferred one on me,<sup class="versenum">30&nbsp;</sup>so that you may eat and drink at my table in my kingdom and sit on thrones, judging the twelve tribes of Israel.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">31&nbsp;</sup>&ldquo;Simon, Simon, Satan has asked to sift all of you as wheat.<sup class="versenum">32&nbsp;</sup>But I have prayed for you, Simon, that your faith may not fail. And when you have turned back, strengthen your brothers.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">33&nbsp;</sup>But he replied, &ldquo;Lord, I am ready to go with you to prison and to death.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">34&nbsp;</sup>Jesus answered, &ldquo;I tell you, Peter, before the rooster crows today, you will deny three times that you know me.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">35&nbsp;</sup>Then Jesus asked them, &ldquo;When I sent you without purse, bag or sandals, did you lack anything?&rdquo;</span></p>

	<p><span class="for-enrichment">&ldquo;Nothing,&rdquo; they answered.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">36&nbsp;</sup>He said to them, &ldquo;But now if you have a purse, take it, and also a bag; and if you don&rsquo;t have a sword, sell your cloak and buy one.<sup class="versenum">37&nbsp;</sup>It is written: &lsquo;And he was numbered with the transgressors&rsquo;; and I tell you that this must be fulfilled in me. Yes, what is written about me is reaching its fulfillment.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">38&nbsp;</sup>The disciples said, &ldquo;See, Lord, here are two swords.&rdquo;</span></p>

	<p><span class="for-enrichment">&ldquo;That&rsquo;s enough!&rdquo; he replied.</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop4')"> Matthew 26:17-29</span>;&nbsp;</span>

	<div class="popup invisible" id="pop4"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>On the first day of the Festival of Unleavened Bread, the disciples came to Jesus and asked, &ldquo;Where do you want us to make preparations for you to eat the Passover?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">18&nbsp;</sup>He replied, &ldquo;Go into the city to a certain man and tell him, &lsquo;The Teacher says: My appointed time is near. I am going to celebrate the Passover with my disciples at your house.&rsquo;&rdquo;<sup class="versenum">19&nbsp;</sup>So the disciples did as Jesus had directed them and prepared the Passover.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">20&nbsp;</sup>When evening came, Jesus was reclining at the table with the Twelve.<sup class="versenum">21&nbsp;</sup>And while they were eating, he said, &ldquo;Truly I tell you, one of you will betray me.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">22&nbsp;</sup>They were very sad and began to say to him one after the other, &ldquo;Surely you don&rsquo;t mean me, Lord?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">23&nbsp;</sup>Jesus replied, &ldquo;The one who has dipped his hand into the bowl with me will betray me.<sup class="versenum">24&nbsp;</sup>The Son of Man will go just as it is written about him. But woe to that man who betrays the Son of Man! It would be better for him if he had not been born.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">25&nbsp;</sup>Then Judas, the one who would betray him, said, &ldquo;Surely you don&rsquo;t mean me, Rabbi?&rdquo;</span></p>

	<p><span class="for-enrichment">Jesus answered, &ldquo;You have said so.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">26&nbsp;</sup>While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, &ldquo;Take and eat; this is my body.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">27&nbsp;</sup>Then he took a cup, and when he had given thanks, he gave it to them, saying, &ldquo;Drink from it, all of you.<sup class="versenum">28&nbsp;</sup>This is my blood of the covenant, which is poured out for many for the forgiveness of sins.<sup class="versenum">29&nbsp;</sup>I tell you, I will not drink from this fruit of the vine from now on until that day when I drink it new with you in my Father&rsquo;s kingdom.&rdquo;</span></p>
	</div>
	</div>
	<span class="for-enrichment"> <!-- end bible --> </span></div>
	<span class="for-enrichment">&nbsp;<span class="popup-link" @click = "popUp('pop5')"> Mark 14:12-25</span>.</span>

	<div class="popup invisible" id="pop5"><span class="for-enrichment"><!-- begin bible --></span>

	<div>
	<div>
	<p><span class="for-enrichment"><sup class="versenum">12&nbsp;</sup>On the first day of the Festival of Unleavened Bread, when it was customary to sacrifice the Passover lamb, Jesus&rsquo; disciples asked him, &ldquo;Where do you want us to go and make preparations for you to eat the Passover?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">13&nbsp;</sup>So he sent two of his disciples, telling them, &ldquo;Go into the city, and a man carrying a jar of water will meet you. Follow him.<sup class="versenum">14&nbsp;</sup>Say to the owner of the house he enters, &lsquo;The Teacher asks: Where is my guest room, where I may eat the Passover with my disciples?&rsquo;<sup class="versenum">15&nbsp;</sup>He will show you a large room upstairs, furnished and ready. Make preparations for us there.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">16&nbsp;</sup>The disciples left, went into the city and found things just as Jesus had told them. So they prepared the Passover.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">17&nbsp;</sup>When evening came, Jesus arrived with the Twelve.<sup class="versenum">18&nbsp;</sup>While they were reclining at the table eating, he said, &ldquo;Truly I tell you, one of you will betray me&mdash;one who is eating with me.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">19&nbsp;</sup>They were saddened, and one by one they said to him, &ldquo;Surely you don&rsquo;t mean me?&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">20&nbsp;</sup>&ldquo;It is one of the Twelve,&rdquo; he replied, &ldquo;one who dips bread into the bowl with me.<sup class="versenum">21&nbsp;</sup>The Son of Man will go just as it is written about him. But woe to that man who betrays the Son of Man! It would be better for him if he had not been born.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">22&nbsp;</sup>While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, &ldquo;Take it; this is my body.&rdquo;</span></p>

	<p><span class="for-enrichment"><sup class="versenum">23&nbsp;</sup>Then he took a cup, and when he had given thanks, he gave it to them, and they all drank from it.</span></p>

	<p><span class="for-enrichment"><sup class="versenum">24&nbsp;</sup>&ldquo;This is my blood of the covenant, which is poured out for many,&rdquo; he said to them.<sup class="versenum">25&nbsp;</sup>&ldquo;Truly I tell you, I will not drink again from the fruit of the vine until that day when I drink it new in the kingdom of God.&rdquo;</span></p>
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

			<td class="social" @click="share('lesson', 'Servant Leadership: ', '/content/M2/eng/multiply2/multiply247.html')">
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