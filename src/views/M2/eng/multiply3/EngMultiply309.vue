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
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>Successful Ministry brings Persecution</h1></div>
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

<p class="back">(Optional) Jesus Christ is Lord, to the glory of God the Father. He wants all men to be saved and to come to the knowledge of the truth. For there is one God and one mediator also between God and man, the man Jesus Christ, who gave himself as a ransom for all. (Philippians 2:11b; 1 Timothy 2:4-6a)</p>

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
	<li class="back">reminding them of what God wants to do through them</li>
</ul>

<p class="back"><em>Share BIG vision &ldquo;A church for every village and community, and the gospel for every person.&rdquo;</em></p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<h2 class="up">Context</h2>

<ul>
	<li class="up">Ask the group to tell the story from last week.</li>
</ul>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch Acts 5:12-42 two times as others listen.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Acts 5:12-42</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>The Apostles Heal Many</h3>

<p><sup class="versenum">12&nbsp;</sup>The apostles performed many signs and wonders among the people. And all the believers used to meet together in Solomon&rsquo;s Colonnade.<sup class="versenum">13&nbsp;</sup>No one else dared join them, even though they were highly regarded by the people.<sup class="versenum">14&nbsp;</sup>Nevertheless, more and more men and women believed in the Lord and were added to their number.<sup class="versenum">15&nbsp;</sup>As a result, people brought the sick into the streets and laid them on beds and mats so that at least Peter&rsquo;s shadow might fall on some of them as he passed by.<sup class="versenum">16&nbsp;</sup>Crowds gathered also from the towns around Jerusalem, bringing their sick and those tormented by impure spirits, and all of them were healed.</p>

<h3>The Apostles Persecuted</h3>

<p><sup class="versenum">17&nbsp;</sup>Then the high priest and all his associates, who were members of the party of the Sadducees, were filled with jealousy.<sup class="versenum">18&nbsp;</sup>They arrested the apostles and put them in the public jail.<sup class="versenum">19&nbsp;</sup>But during the night an angel of the Lord opened the doors of the jail and brought them out.<sup class="versenum">20&nbsp;</sup>&ldquo;Go, stand in the temple courts,&rdquo; he said, &ldquo;and tell the people all about this new life.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>At daybreak they entered the temple courts, as they had been told, and began to teach the people.</p>

<p>When the high priest and his associates arrived, they called together the Sanhedrin&mdash;the full assembly of the elders of Israel&mdash;and sent to the jail for the apostles.<sup class="versenum">22&nbsp;</sup>But on arriving at the jail, the officers did not find them there. So they went back and reported,<sup class="versenum">23&nbsp;</sup>&ldquo;We found the jail securely locked, with the guards standing at the doors; but when we opened them, we found no one inside.&rdquo;<sup class="versenum">24&nbsp;</sup>On hearing this report, the captain of the temple guard and the chief priests were at a loss, wondering what this might lead to.</p>

<p><sup class="versenum">25&nbsp;</sup>Then someone came and said, &ldquo;Look! The men you put in jail are standing in the temple courts teaching the people.&rdquo;<sup class="versenum">26&nbsp;</sup>At that, the captain went with his officers and brought the apostles. They did not use force, because they feared that the people would stone them.</p>

<p><sup class="versenum">27&nbsp;</sup>The apostles were brought in and made to appear before the Sanhedrin to be questioned by the high priest.<sup class="versenum">28&nbsp;</sup>&ldquo;We gave you strict orders not to teach in this name,&rdquo; he said. &ldquo;Yet you have filled Jerusalem with your teaching and are determined to make us guilty of this man&rsquo;s blood.&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>Peter and the other apostles replied: &ldquo;We must obey God rather than human beings!<sup class="versenum">30&nbsp;</sup>The God of our ancestors raised Jesus from the dead&mdash;whom you killed by hanging him on a cross.<sup class="versenum">31&nbsp;</sup>God exalted him to his own right hand as Prince and Savior that he might bring Israel to repentance and forgive their sins.<sup class="versenum">32&nbsp;</sup>We are witnesses of these things, and so is the Holy Spirit, whom God has given to those who obey him.&rdquo;</p>

<p><sup class="versenum">33&nbsp;</sup>When they heard this, they were furious and wanted to put them to death.<sup class="versenum">34&nbsp;</sup>But a Pharisee named Gamaliel, a teacher of the law, who was honored by all the people, stood up in the Sanhedrin and ordered that the men be put outside for a little while.<sup class="versenum">35&nbsp;</sup>Then he addressed the Sanhedrin: &ldquo;Men of Israel, consider carefully what you intend to do to these men.<sup class="versenum">36&nbsp;</sup>Some time ago Theudas appeared, claiming to be somebody, and about four hundred men rallied to him. He was killed, all his followers were dispersed, and it all came to nothing.<sup class="versenum">37&nbsp;</sup>After him, Judas the Galilean appeared in the days of the census and led a band of people in revolt. He too was killed, and all his followers were scattered.<sup class="versenum">38&nbsp;</sup>Therefore, in the present case I advise you: Leave these men alone! Let them go! For if their purpose or activity is of human origin, it will fail.<sup class="versenum">39&nbsp;</sup>But if it is from God, you will not be able to stop these men; you will only find yourselves fighting against God.&rdquo;</p>

<p><sup class="versenum">40&nbsp;</sup>His speech persuaded them. They called the apostles in and had them flogged. Then they ordered them not to speak in the name of Jesus, and let them go.</p>

<p><sup class="versenum">41&nbsp;</sup>The apostles left the Sanhedrin, rejoicing because they had been counted worthy of suffering disgrace for the Name.<sup class="versenum">42&nbsp;</sup>Day after day, in the temple courts and from house to house, they never stopped teaching and proclaiming the good news that Jesus is the Messiah.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/eng/video/multiply3/309.mp4" type="button" class="external-movie">
         Watch Acts 5:12-42</button>
    <div class="collapsed"></div>



<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention or what did you like best? Why?</li>
	<li>What is new or has developed at this point in the story?</li>
	<li>What is being modeled about a Spirit-dependent life, making disciples or leadership?</li>
	<li>How can we live differently now that we know this story?</li>
</ul>

<p><em>Additional questions you can use:</em></p>

<ul>
	<li>How are Jesus&rsquo; followers continuing His work of making disciples and church planting?</li>
	<li>How is the gospel impacting people and society?</li>
	<li>What barriers or obstacles were overcome and how were they overcome?</li>
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


<h2 class="up">Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">The believers had a good reputation among the people who lived in Jerusalem. Many from nearby villages and towns were being attracted by the ministry of the Jerusalem church. The Apostles were living out what they had been trained to do by Jesus: healing the sick, casting out demons, and preaching the good news of the Kingdom (<span class="popup-link" @click = "popUp('pop1')"> Matthew 10</span>,&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<div>
<p><sup class="versenum">1 </sup>Jesus called his twelve disciples to him and gave them authority to drive out impure spirits and to heal every disease and sickness.</p>

<p><sup class="versenum">2&nbsp;</sup>These are the names of the twelve apostles: first, Simon (who is called Peter) and his brother Andrew; James son of Zebedee, and his brother John;<sup class="versenum">3&nbsp;</sup>Philip and Bartholomew; Thomas and Matthew the tax collector; James son of Alphaeus, and Thaddaeus;<sup class="versenum">4&nbsp;</sup>Simon the Zealot and Judas Iscariot, who betrayed him.</p>

<p><sup class="versenum">5&nbsp;</sup>These twelve Jesus sent out with the following instructions: &ldquo;Do not go among the Gentiles or enter any town of the Samaritans.<sup class="versenum">6&nbsp;</sup>Go rather to the lost sheep of Israel.<sup class="versenum">7&nbsp;</sup>As you go, proclaim this message: &lsquo;The kingdom of heaven has come near.&rsquo;<sup class="versenum">8&nbsp;</sup>Heal the sick, raise the dead, cleanse those who have leprosy, drive out demons. Freely you have received; freely give.</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;Do not get any gold or silver or copper to take with you in your belts&mdash;<sup class="versenum">10&nbsp;</sup>no bag for the journey or extra shirt or sandals or a staff, for the worker is worth his keep.<sup class="versenum">11&nbsp;</sup>Whatever town or village you enter, search there for some worthy person and stay at their house until you leave.<sup class="versenum">12&nbsp;</sup>As you enter the home, give it your greeting.<sup class="versenum">13&nbsp;</sup>If the home is deserving, let your peace rest on it; if it is not, let your peace return to you.<sup class="versenum">14&nbsp;</sup>If anyone will not welcome you or listen to your words, leave that home or town and shake the dust off your feet.<sup class="versenum">15&nbsp;</sup>Truly I tell you, it will be more bearable for Sodom and Gomorrah on the day of judgment than for that town.</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;I am sending you out like sheep among wolves. Therefore be as shrewd as snakes and as innocent as doves.<sup class="versenum">17&nbsp;</sup>Be on your guard; you will be handed over to the local councils and be flogged in the synagogues.<sup class="versenum">18&nbsp;</sup>On my account you will be brought before governors and kings as witnesses to them and to the Gentiles.<sup class="versenum">19&nbsp;</sup>But when they arrest you, do not worry about what to say or how to say it. At that time you will be given what to say,<sup class="versenum">20&nbsp;</sup>for it will not be you speaking, but the Spirit of your Father speaking through you.</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;Brother will betray brother to death, and a father his child; children will rebel against their parents and have them put to death.<sup class="versenum">22&nbsp;</sup>You will be hated by everyone because of me, but the one who stands firm to the end will be saved.<sup class="versenum">23&nbsp;</sup>When you are persecuted in one place, flee to another. Truly I tell you, you will not finish going through the towns of Israel before the Son of Man comes.</p>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;The student is not above the teacher, nor a servant above his master.<sup class="versenum">25&nbsp;</sup>It is enough for students to be like their teachers, and servants like their masters. If the head of the house has been called Beelzebul, how much more the members of his household!</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;So do not be afraid of them, for there is nothing concealed that will not be disclosed, or hidden that will not be made known.<sup class="versenum">27&nbsp;</sup>What I tell you in the dark, speak in the daylight; what is whispered in your ear, proclaim from the roofs.<sup class="versenum">28&nbsp;</sup>Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.<sup class="versenum">29&nbsp;</sup>Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father&rsquo;s care.<sup class="versenum">30&nbsp;</sup>And even the very hairs of your head are all numbered.<sup class="versenum">31&nbsp;</sup>So don&rsquo;t be afraid; you are worth more than many sparrows.</p>

<p><sup class="versenum">32&nbsp;</sup>&ldquo;Whoever acknowledges me before others, I will also acknowledge before my Father in heaven.<sup class="versenum">33&nbsp;</sup>But whoever disowns me before others, I will disown before my Father in heaven.</p>

<p><sup class="versenum">34&nbsp;</sup>&ldquo;Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword.<sup class="versenum">35&nbsp;</sup>For I have come to turn</p>

<p>&ldquo;&lsquo;a man against his father,<br />
&nbsp;&nbsp;&nbsp;&nbsp;a daughter against her mother,<br />
a daughter-in-law against her mother-in-law&mdash;<br />
<sup class="versenum">36&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;a man&rsquo;s enemies will be the members of his own household.&rsquo;</p>
</div>

<p><sup class="versenum">37&nbsp;</sup>&ldquo;Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me.<sup class="versenum">38&nbsp;</sup>Whoever does not take up their cross and follow me is not worthy of me.<sup class="versenum">39&nbsp;</sup>Whoever finds their life will lose it, and whoever loses their life for my sake will find it.</p>

<p><sup class="versenum">40&nbsp;</sup>&ldquo;Anyone who welcomes you welcomes me, and anyone who welcomes me welcomes the one who sent me.<sup class="versenum">41&nbsp;</sup>Whoever welcomes a prophet as a prophet will receive a prophet&rsquo;s reward, and whoever welcomes a righteous person as a righteous person will receive a righteous person&rsquo;s reward.<sup class="versenum">42&nbsp;</sup>And if anyone gives even a cup of cold water to one of these little ones who is my disciple, truly I tell you, that person will certainly not lose their reward.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
&nbsp;<span class="popup-link" @click = "popUp('pop2')"> Luke 10</span>).&nbsp;

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<h3>Jesus Sends Out the Seventy-Two</h3>

<p><sup class="versenum">1 </sup>After this the Lord appointed seventy-two others and sent them two by two ahead of him to every town and place where he was about to go.<sup class="versenum">2&nbsp;</sup>He told them, &ldquo;The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.<sup class="versenum">3&nbsp;</sup>Go! I am sending you out like lambs among wolves.<sup class="versenum">4&nbsp;</sup>Do not take a purse or bag or sandals; and do not greet anyone on the road.</p>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;When you enter a house, first say, &lsquo;Peace to this house.&rsquo;<sup class="versenum">6&nbsp;</sup>If someone who promotes peace is there, your peace will rest on them; if not, it will return to you.<sup class="versenum">7&nbsp;</sup>Stay there, eating and drinking whatever they give you, for the worker deserves his wages. Do not move around from house to house.</p>

<p><sup class="versenum">8&nbsp;</sup>&ldquo;When you enter a town and are welcomed, eat what is offered to you.<sup class="versenum">9&nbsp;</sup>Heal the sick who are there and tell them, &lsquo;The kingdom of God has come near to you.&rsquo;<sup class="versenum">10&nbsp;</sup>But when you enter a town and are not welcomed, go into its streets and say,<sup class="versenum">11&nbsp;</sup>&lsquo;Even the dust of your town we wipe from our feet as a warning to you. Yet be sure of this: The kingdom of God has come near.&rsquo;<sup class="versenum">12&nbsp;</sup>I tell you, it will be more bearable on that day for Sodom than for that town.</p>

<p><sup class="versenum">13&nbsp;</sup>&ldquo;Woe to you, Chorazin! Woe to you, Bethsaida! For if the miracles that were performed in you had been performed in Tyre and Sidon, they would have repented long ago, sitting in sackcloth and ashes.<sup class="versenum">14&nbsp;</sup>But it will be more bearable for Tyre and Sidon at the judgment than for you.<sup class="versenum">15&nbsp;</sup>And you, Capernaum, will you be lifted to the heavens? No, you will go down to Hades.</p>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;Whoever listens to you listens to me; whoever rejects you rejects me; but whoever rejects me rejects him who sent me.&rdquo;</p>

<p><sup class="versenum">17&nbsp;</sup>The seventy-two returned with joy and said, &ldquo;Lord, even the demons submit to us in your name.&rdquo;</p>

<p><sup class="versenum">18&nbsp;</sup>He replied, &ldquo;I saw Satan fall like lightning from heaven.<sup class="versenum">19&nbsp;</sup>I have given you authority to trample on snakes and scorpions and to overcome all the power of the enemy; nothing will harm you.<sup class="versenum">20&nbsp;</sup>However, do not rejoice that the spirits submit to you, but rejoice that your names are written in heaven.&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>At that time Jesus, full of joy through the Holy Spirit, said, &ldquo;I praise you, Father, Lord of heaven and earth, because you have hidden these things from the wise and learned, and revealed them to little children. Yes, Father, for this is what you were pleased to do.</p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;All things have been committed to me by my Father. No one knows who the Son is except the Father, and no one knows who the Father is except the Son and those to whom the Son chooses to reveal him.&rdquo;</p>

<p><sup class="versenum">23&nbsp;</sup>Then he turned to his disciples and said privately, &ldquo;Blessed are the eyes that see what you see.<sup class="versenum">24&nbsp;</sup>For I tell you that many prophets and kings wanted to see what you see but did not see it, and to hear what you hear but did not hear it.&rdquo;</p>

<h3>The Parable of the Good Samaritan</h3>

<p><sup class="versenum">25&nbsp;</sup>On one occasion an expert in the law stood up to test Jesus. &ldquo;Teacher,&rdquo; he asked, &ldquo;what must I do to inherit eternal life?&rdquo;</p>

<p><sup class="versenum">26&nbsp;</sup>&ldquo;What is written in the Law?&rdquo; he replied. &ldquo;How do you read it?&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>He answered, &ldquo;&lsquo;Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind&rsquo;; and, &lsquo;Love your neighbor as yourself.&rsquo;&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;You have answered correctly,&rdquo; Jesus replied. &ldquo;Do this and you will live.&rdquo;</p>

<p><sup class="versenum">29&nbsp;</sup>But he wanted to justify himself, so he asked Jesus, &ldquo;And who is my neighbor?&rdquo;</p>

<p><sup class="versenum">30&nbsp;</sup>In reply Jesus said: &ldquo;A man was going down from Jerusalem to Jericho, when he was attacked by robbers. They stripped him of his clothes, beat him and went away, leaving him half dead.<sup class="versenum">31&nbsp;</sup>A priest happened to be going down the same road, and when he saw the man, he passed by on the other side.<sup class="versenum">32&nbsp;</sup>So too, a Levite, when he came to the place and saw him, passed by on the other side.<sup class="versenum">33&nbsp;</sup>But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him.<sup class="versenum">34&nbsp;</sup>He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him.<sup class="versenum">35&nbsp;</sup>The next day he took out two denarii and gave them to the innkeeper. &lsquo;Look after him,&rsquo; he said, &lsquo;and when I return, I will reimburse you for any extra expense you may have.&rsquo;</p>

<p><sup class="versenum">36&nbsp;</sup>&ldquo;Which of these three do you think was a neighbor to the man who fell into the hands of robbers?&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>The expert in the law replied, &ldquo;The one who had mercy on him.&rdquo;</p>

<p>Jesus told him, &ldquo;Go and do likewise.&rdquo;</p>

<p><sup class="versenum">38&nbsp;</sup>As Jesus and his disciples were on their way, he came to a village where a woman named Martha opened her home to him.<sup class="versenum">39&nbsp;</sup>She had a sister called Mary, who sat at the Lord&rsquo;s feet listening to what he said.<sup class="versenum">40&nbsp;</sup>But Martha was distracted by all the preparations that had to be made. She came to him and asked, &ldquo;Lord, don&rsquo;t you care that my sister has left me to do the work by myself? Tell her to help me!&rdquo;</p>

<p><sup class="versenum">41&nbsp;</sup>&ldquo;Martha, Martha,&rdquo; the Lord answered, &ldquo;you are worried and upset about many things,<sup class="versenum">42&nbsp;</sup>but few things are needed&mdash;or indeed only one. Mary has chosen what is better, and it will not be taken away from her.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
However, they were not going to the people outside of Jerusalem like Jesus had instructed them (<span class="popup-link" @click = "popUp('pop3')"> Acts 1:8</span>).&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">8&nbsp;</sup>But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.&rdquo;</p>
</div>
</div>
<!-- end bible --></div>
The religious leaders reacted to the growing popularity of this new community with jealously much like they reacted to Jesus&rsquo; popularity. This led to the Apostles being persecuted. Jesus intervened once again and sent an angel to miraculously help them escape from prison. When confronted by the religious leaders again, Peter insisted that they must obey God above all others. The religious leaders now escalated their persecution to include physical violence. The Apostles rejoiced in the midst these circumstances and considered it an honor to suffer like Jesus.

<p>&nbsp;</p>

</div>

<p class="up"><em>Practice giving and communion here or in the Preparing for Mission section</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>Practice needed skills or previous topics to help prepare to minister to others:</p>

<ul>
	<li>Prayer, Care, Share</li>
	<li>Gospel</li>
	<li>Foundational Bible Studies.</li>
</ul>

</div>

<ul class="forward">
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
        @keyup="this.addNote('note2Text')"
        id="note2Text"
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

			<td class="social" @click="share('lesson', 'Successful Ministry brings Persecution: ', '/content/M2/eng/multiply3/multiply309.html')">
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