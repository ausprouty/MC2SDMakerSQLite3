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
                        <div class="chapter_number ltr"><h1>28.</h1></div>
                        <div class="chapter_title ltr"><h1>The Father's Plan</h1></div>
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

<p class="back"><span>Our vision is: <em> &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></span></p>

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
	<li class="up"><span>Ask the group to tell the story from last week.</span></li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watchLuke 6:27-49 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 6:27-49</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Love for Enemies</h3>

<p><sup class="versenum">27&nbsp;</sup>&ldquo;But to you who are listening I say: Love your enemies, do good to those who hate you,<sup class="versenum">28&nbsp;</sup>bless those who curse you, pray for those who mistreat you.<sup class="versenum">29&nbsp;</sup>If someone slaps you on one cheek, turn to them the other also. If someone takes your coat, do not withhold your shirt from them.<sup class="versenum">30&nbsp;</sup>Give to everyone who asks you, and if anyone takes what belongs to you, do not demand it back.<sup class="versenum">31&nbsp;</sup>Do to others as you would have them do to you.</p>

<p><sup class="versenum">32&nbsp;</sup>&ldquo;If you love those who love you, what credit is that to you? Even sinners love those who love them.<sup class="versenum">33&nbsp;</sup>And if you do good to those who are good to you, what credit is that to you? Even sinners do that.<sup class="versenum">34&nbsp;</sup>And if you lend to those from whom you expect repayment, what credit is that to you? Even sinners lend to sinners, expecting to be repaid in full.<sup class="versenum">35&nbsp;</sup>But love your enemies, do good to them, and lend to them without expecting to get anything back. Then your reward will be great, and you will be children of the Most High, because he is kind to the ungrateful and wicked.<sup class="versenum">36&nbsp;</sup>Be merciful, just as your Father is merciful.</p>

<h3>Judging Others</h3>

<p><sup class="versenum">37&nbsp;</sup>&ldquo;Do not judge, and you will not be judged. Do not condemn, and you will not be condemned. Forgive, and you will be forgiven.<sup class="versenum">38&nbsp;</sup>Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.&rdquo;</p>

<p><sup class="versenum">39&nbsp;</sup>He also told them this parable: &ldquo;Can the blind lead the blind? Will they not both fall into a pit?<sup class="versenum">40&nbsp;</sup>The student is not above the teacher, but everyone who is fully trained will be like their teacher.</p>

<p><sup class="versenum">41&nbsp;</sup>&ldquo;Why do you look at the speck of sawdust in your brother&rsquo;s eye and pay no attention to the plank in your own eye?<sup class="versenum">42&nbsp;</sup>How can you say to your brother, &lsquo;Brother, let me take the speck out of your eye,&rsquo; when you yourself fail to see the plank in your own eye? You hypocrite, first take the plank out of your eye, and then you will see clearly to remove the speck from your brother&rsquo;s eye.</p>

<h3>A Tree and Its Fruit</h3>

<p><sup class="versenum">43&nbsp;</sup>&ldquo;No good tree bears bad fruit, nor does a bad tree bear good fruit.<sup class="versenum">44&nbsp;</sup>Each tree is recognized by its own fruit. People do not pick figs from thornbushes, or grapes from briers.<sup class="versenum">45&nbsp;</sup>A good man brings good things out of the good stored up in his heart, and an evil man brings evil things out of the evil stored up in his heart. For the mouth speaks what the heart is full of.</p>

<h3>The Wise and Foolish Builders</h3>

<p><sup class="versenum">46&nbsp;</sup>&ldquo;Why do you call me, &lsquo;Lord, Lord,&rsquo; and do not do what I say?<sup class="versenum">47&nbsp;</sup>As for everyone who comes to me and hears my words and puts them into practice, I will show you what they are like.<sup class="versenum">48&nbsp;</sup>They are like a man building a house, who dug down deep and laid the foundation on rock. When a flood came, the torrent struck that house but could not shake it, because it was well built.<sup class="versenum">49&nbsp;</sup>But the one who hears my words and does not put them into practice is like a man who built a house on the ground without a foundation. The moment the torrent struck that house, it collapsed and its destruction was complete.&rdquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply2/228.mp4" type="button" class="external-movie">
         Watch &nbsp;Luke 6:27-49&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li><span>What caught your attention or what did you like best? Why?</span></li>
	<li><span>What is new or has developed at this point in Jesus story?</span></li>
	<li><span>What do we learn about the humanity or divinity of Jesus from this passage?</span></li>
	<li><span>How can we live differently now that we know this story?</span></li>
</ul>

<p><span>Additional Questions:</span></p>

<ul class="up">
	<li><span>What are his followers learning?</span></li>
	<li><span>What is Jesus modeling to us about life and ministry or godly leadership?</span></li>
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

<p class="up">Jesus explains more about kingdom living to the disciples. Part of the plan for Kingdom expansion is to love others, even your enemies. It is a love that expects nothing in return. It is a radical, God-like love that will change the world. Part of loving others includes no longer judging other people and no longer condemning other people for their actions. Instead, extend forgiveness in Jesus&rsquo; name, not because they deserve it but because Jesus instructs us to forgive. We should take some time to examine our own lives. He instructs the leaders that &ldquo;the blind cannot lead the blind.&rdquo; Jesus expects the disciples to model this lifestyle. He reminds them that they need to watch His life and ministry closely. &ldquo;Don&rsquo;t call me Lord if you are not going to do what I say.&rdquo;</p>

</div>

<p class="up"><br />
<span class="for-enrichment">For Further Study: <span class="popup-link" @click = "popUp('pop3')"> Matthew 5:17-8:1</span> </span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<div>
<h3>The Fulfillment of the Law</h3>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.<sup class="versenum">18&nbsp;</sup>For truly I tell you, until heaven and earth disappear, not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law until everything is accomplished.<sup class="versenum">19&nbsp;</sup>Therefore anyone who sets aside one of the least of these commands and teaches others accordingly will be called least in the kingdom of heaven, but whoever practices and teaches these commands will be called great in the kingdom of heaven.<sup class="versenum">20&nbsp;</sup>For I tell you that unless your righteousness surpasses that of the Pharisees and the teachers of the law, you will certainly not enter the kingdom of heaven.</p>

<h3>Murder</h3>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;You have heard that it was said to the people long ago, &lsquo;You shall not murder, and anyone who murders will be subject to judgment.&rsquo;<sup class="versenum">22&nbsp;</sup>But I tell you that anyone who is angry with a brother or sister will be subject to judgment. Again, anyone who says to a brother or sister, &lsquo;Raca,&rsquo; is answerable to the court. And anyone who says, &lsquo;You fool!&rsquo; will be in danger of the fire of hell.</p>

<p><sup class="versenum">23&nbsp;</sup>&ldquo;Therefore, if you are offering your gift at the altar and there remember that your brother or sister has something against you,<sup class="versenum">24&nbsp;</sup>leave your gift there in front of the altar. First go and be reconciled to them; then come and offer your gift.</p>

<p><sup class="versenum">25&nbsp;</sup>&ldquo;Settle matters quickly with your adversary who is taking you to court. Do it while you are still together on the way, or your adversary may hand you over to the judge, and the judge may hand you over to the officer, and you may be thrown into prison.<sup class="versenum">26&nbsp;</sup>Truly I tell you, you will not get out until you have paid the last penny.</p>

<h3>Adultery</h3>

<p><sup class="versenum">27&nbsp;</sup>&ldquo;You have heard that it was said, &lsquo;You shall not commit adultery.&rsquo;<sup class="versenum">28&nbsp;</sup>But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart.<sup class="versenum">29&nbsp;</sup>If your right eye causes you to stumble, gouge it out and throw it away. It is better for you to lose one part of your body than for your whole body to be thrown into hell.<sup class="versenum">30&nbsp;</sup>And if your right hand causes you to stumble, cut it off and throw it away. It is better for you to lose one part of your body than for your whole body to go into hell.</p>

<h3>Divorce</h3>

<p><sup class="versenum">31&nbsp;</sup>&ldquo;It has been said, &lsquo;Anyone who divorces his wife must give her a certificate of divorce.&rsquo;<sup class="versenum">32&nbsp;</sup>But I tell you that anyone who divorces his wife, except for sexual immorality, makes her the victim of adultery, and anyone who marries a divorced woman commits adultery.</p>

<h3>Oaths</h3>

<p><sup class="versenum">33&nbsp;</sup>&ldquo;Again, you have heard that it was said to the people long ago, &lsquo;Do not break your oath, but fulfill to the Lord the vows you have made.&rsquo;<sup class="versenum">34&nbsp;</sup>But I tell you, do not swear an oath at all: either by heaven, for it is God&rsquo;s throne;<sup class="versenum">35&nbsp;</sup>or by the earth, for it is his footstool; or by Jerusalem, for it is the city of the Great King.<sup class="versenum">36&nbsp;</sup>And do not swear by your head, for you cannot make even one hair white or black.<sup class="versenum">37&nbsp;</sup>All you need to say is simply &lsquo;Yes&rsquo; or &lsquo;No&rsquo;; anything beyond this comes from the evil one.</p>

<h3>Eye for Eye</h3>

<p><sup class="versenum">38&nbsp;</sup>&ldquo;You have heard that it was said, &lsquo;Eye for eye, and tooth for tooth.&rsquo;<sup class="versenum">39&nbsp;</sup>But I tell you, do not resist an evil person. If anyone slaps you on the right cheek, turn to them the other cheek also.<sup class="versenum">40&nbsp;</sup>And if anyone wants to sue you and take your shirt, hand over your coat as well.<sup class="versenum">41&nbsp;</sup>If anyone forces you to go one mile, go with them two miles.<sup class="versenum">42&nbsp;</sup>Give to the one who asks you, and do not turn away from the one who wants to borrow from you.</p>

<h3>Love for Enemies</h3>

<p><sup class="versenum">43&nbsp;</sup>&ldquo;You have heard that it was said, &lsquo;Love your neighbor and hate your enemy.&rsquo;<sup class="versenum">44&nbsp;</sup>But I tell you, love your enemies and pray for those who persecute you,<sup class="versenum">45&nbsp;</sup>that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous.<sup class="versenum">46&nbsp;</sup>If you love those who love you, what reward will you get? Are not even the tax collectors doing that?<sup class="versenum">47&nbsp;</sup>And if you greet only your own people, what are you doing more than others? Do not even pagans do that?<sup class="versenum">48&nbsp;</sup>Be perfect, therefore, as your heavenly Father is perfect.</p>

<h3>Giving to the Needy</h3>

<p><sup class="versenum">1 </sup>&ldquo;Be careful not to practice your righteousness in front of others to be seen by them. If you do, you will have no reward from your Father in heaven.</p>

<p><sup class="versenum">2&nbsp;</sup>&ldquo;So when you give to the needy, do not announce it with trumpets, as the hypocrites do in the synagogues and on the streets, to be honored by others. Truly I tell you, they have received their reward in full.<sup class="versenum">3&nbsp;</sup>But when you give to the needy, do not let your left hand know what your right hand is doing,<sup class="versenum">4&nbsp;</sup>so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you.</p>

<h3>Prayer</h3>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;And when you pray, do not be like the hypocrites, for they love to pray standing in the synagogues and on the street corners to be seen by others. Truly I tell you, they have received their reward in full.<sup class="versenum">6&nbsp;</sup>But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you.<sup class="versenum">7&nbsp;</sup>And when you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words.<sup class="versenum">8&nbsp;</sup>Do not be like them, for your Father knows what you need before you ask him.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;This, then, is how you should pray:</p>

<p>&ldquo;&lsquo;Our Father in heaven,<br />
hallowed be your name,<br />
<sup class="versenum">10&nbsp;</sup>your kingdom come,<br />
your will be done,<br />
&nbsp;&nbsp;&nbsp;&nbsp;on earth as it is in heaven.<br />
<sup class="versenum">11&nbsp;</sup>Give us today our daily bread.<br />
<sup class="versenum">12&nbsp;</sup>And forgive us our debts,<br />
&nbsp;&nbsp;&nbsp;&nbsp;as we also have forgiven our debtors.<br />
<sup class="versenum">13&nbsp;</sup>And lead us not into temptation,<br />
&nbsp;&nbsp;&nbsp;&nbsp;but deliver us from the evil one.&rsquo;</p>
</div>

<p><sup class="versenum">14&nbsp;</sup>For if you forgive other people when they sin against you, your heavenly Father will also forgive you.<sup class="versenum">15&nbsp;</sup>But if you do not forgive others their sins, your Father will not forgive your sins.</p>

<h3>Fasting</h3>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full.<sup class="versenum">17&nbsp;</sup>But when you fast, put oil on your head and wash your face,<sup class="versenum">18&nbsp;</sup>so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen; and your Father, who sees what is done in secret, will reward you.</p>

<h3>Treasures in Heaven</h3>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal.<sup class="versenum">20&nbsp;</sup>But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal.<sup class="versenum">21&nbsp;</sup>For where your treasure is, there your heart will be also.</p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;The eye is the lamp of the body. If your eyes are healthy, your whole body will be full of light.<sup class="versenum">23&nbsp;</sup>But if your eyes are unhealthy, your whole body will be full of darkness. If then the light within you is darkness, how great is that darkness!</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money.</p>

<h3>Do Not Worry</h3>

<p><sup class="versenum">25&nbsp;</sup>&ldquo;Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?<sup class="versenum">26&nbsp;</sup>Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?<sup class="versenum">27&nbsp;</sup>Can any one of you by worrying add a single hour to your life?</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;And why do you worry about clothes? See how the flowers of the field grow. They do not labor or spin.<sup class="versenum">29&nbsp;</sup>Yet I tell you that not even Solomon in all his splendor was dressed like one of these.<sup class="versenum">30&nbsp;</sup>If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you&mdash;you of little faith?<sup class="versenum">31&nbsp;</sup>So do not worry, saying, &lsquo;What shall we eat?&rsquo; or &lsquo;What shall we drink?&rsquo; or &lsquo;What shall we wear?&rsquo;<sup class="versenum">32&nbsp;</sup>For the pagans run after all these things, and your heavenly Father knows that you need them.<sup class="versenum">33&nbsp;</sup>But seek first his kingdom and his righteousness, and all these things will be given to you as well.<sup class="versenum">34&nbsp;</sup>Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.</p>

<h3>Judging Others</h3>

<p><sup class="versenum">1 </sup>&ldquo;Do not judge, or you too will be judged.<sup class="versenum">2&nbsp;</sup>For in the same way you judge others, you will be judged, and with the measure you use, it will be measured to you.</p>

<p><sup class="versenum">3&nbsp;</sup>&ldquo;Why do you look at the speck of sawdust in your brother&rsquo;s eye and pay no attention to the plank in your own eye?<sup class="versenum">4&nbsp;</sup>How can you say to your brother, &lsquo;Let me take the speck out of your eye,&rsquo; when all the time there is a plank in your own eye?<sup class="versenum">5&nbsp;</sup>You hypocrite, first take the plank out of your own eye, and then you will see clearly to remove the speck from your brother&rsquo;s eye.</p>

<p><sup class="versenum">6&nbsp;</sup>&ldquo;Do not give dogs what is sacred; do not throw your pearls to pigs. If you do, they may trample them under their feet, and turn and tear you to pieces.</p>

<h3>Ask, Seek, Knock</h3>

<p><sup class="versenum">7&nbsp;</sup>&ldquo;Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.<sup class="versenum">8&nbsp;</sup>For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;Which of you, if your son asks for bread, will give him a stone?<sup class="versenum">10&nbsp;</sup>Or if he asks for a fish, will give him a snake?<sup class="versenum">11&nbsp;</sup>If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him!<sup class="versenum">12&nbsp;</sup>So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.</p>

<h3>The Narrow and Wide Gates</h3>

<p><sup class="versenum">13&nbsp;</sup>&ldquo;Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it.<sup class="versenum">14&nbsp;</sup>But small is the gate and narrow the road that leads to life, and only a few find it.</p>

<h3>True and False Prophets</h3>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;Watch out for false prophets. They come to you in sheep&rsquo;s clothing, but inwardly they are ferocious wolves.<sup class="versenum">16&nbsp;</sup>By their fruit you will recognize them. Do people pick grapes from thornbushes, or figs from thistles?<sup class="versenum">17&nbsp;</sup>Likewise, every good tree bears good fruit, but a bad tree bears bad fruit.<sup class="versenum">18&nbsp;</sup>A good tree cannot bear bad fruit, and a bad tree cannot bear good fruit.<sup class="versenum">19&nbsp;</sup>Every tree that does not bear good fruit is cut down and thrown into the fire.<sup class="versenum">20&nbsp;</sup>Thus, by their fruit you will recognize them.</p>

<h3>True and False Disciples</h3>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;Not everyone who says to me, &lsquo;Lord, Lord,&rsquo; will enter the kingdom of heaven, but only the one who does the will of my Father who is in heaven.<sup class="versenum">22&nbsp;</sup>Many will say to me on that day, &lsquo;Lord, Lord, did we not prophesy in your name and in your name drive out demons and in your name perform many miracles?&rsquo;<sup class="versenum">23&nbsp;</sup>Then I will tell them plainly, &lsquo;I never knew you. Away from me, you evildoers!&rsquo;</p>

<h3>The Wise and Foolish Builders</h3>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock.<sup class="versenum">25&nbsp;</sup>The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock.<sup class="versenum">26&nbsp;</sup>But everyone who hears these words of mine and does not put them into practice is like a foolish man who built his house on sand.<sup class="versenum">27&nbsp;</sup>The rain came down, the streams rose, and the winds blew and beat against that house, and it fell with a great crash.&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>When Jesus had finished saying these things, the crowds were amazed at his teaching,<sup class="versenum">29&nbsp;</sup>because he taught as one who had authority, and not as their teachers of the law.</p>

<p><sup class="versenum">1 </sup>When Jesus came down from the mountainside, large crowds followed him.</p>
</div>
</div>
<!-- end bible --></div>



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

			<td class="social" @click="share('lesson', 'The Father\'s Plan: ', '/content/M2/eng/multiply2/multiply228.html')">
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