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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-tc-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>How to Be Filled With the Spirit</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
        <button id="MC2/eng/audio/tc/tc03.mp3" type="button" class="external-audio">
           Listen to &nbsp;"TC #3: How to Be Filled With the Spirit"&nbsp; </button>
          <div class="collapsed"></div>
        

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Introduction</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>The first streams of morning light filtered through the small windows of the upper room and slipped across Peter&rsquo;s bearded face. He opened his eyes and raised up on one elbow. Most of the others were awake, rolling up their pallets and beginning the morning meal preparations for yet another day. How much longer, Lord?, He wondered. For many days they had waited together in this small room, over 100 of them now, just waiting for the Holy Spirit to come as Jesus had promised&hellip;.</p>

<p>And then he heard it. Like a strong windstorm in the distance at first, then the roaring sounds of violent, rushing winds right in the room. Louder and louder it sounded, and in their midst flaming tongues of fire resting on each one in the room, filling them with the Holy Spirit.</p>

<p>To say it changed their lives is an understatement! Suddenly these men and women of God were declaring the gospel of Jesus Christ with new confidence in a way that hearers understood, even to the point of preaching in languages they had never learned! They discovered an unquenchable power flowing from within them because they had been filled with the Source of Power Himself. And, because of it, thousands followed them to a new and life-changing relationship with the risen Lord.</p>

<p>The book of Acts records for us the power of the Holy Spirit at work in people&rsquo;s lives. We read the stories and marvel at common people like you and me performing miracles and leading hundreds to Christ. Sadly, we shake our heads, disappointed that we could not have lived then so we could have been a part of it all. We have all but conceded to the more &ldquo;sophisticated&rdquo; attitude that the Holy Spirit works among us only in subtle ways today. Peter and the others had to perform miracles to reach the lost with the gospel. Today, many pass that idea off saying such &ldquo;emotional displays&rdquo; are no longer necessary.</p>

<p>But J.B. Phillips gives us insight on it when he writes in his introduction to Letters to the Young Church: &ldquo;The great difference between present-day Christians and those of which we read in these letters (the New Testament epistles), is that to us it is primarily a performance; to them it was a real experience. We are apt to reduce the Christian religion to a code, or, at best, a rule of heart and life. To these men, it is quite plainly the invasion of their lives by a new quality of life altogether. They do not hesitate to describe this as Christ living in them.</p>

<p>And if Christ still lives in His followers as He promised, should our lives be any less powerful than those of the disciples? For any Christian, life should be a great adventure. We have purpose, and we have the source of power needed to perform the tasks that fall to us. Jesus said, &ldquo;He who believes in Me, the works that I do shall he do also&rsquo; and greater works than these shall he do; because I go to the Father. And whatever you ask in My name, that will I do&rdquo; (John 14:12,13).</p>

<p>But we are not expected to do these wonderful things in our own power. It is Christ Himself living within us who gives us the power through the Holy Spirit to do great works. All our wisdom and eloquence, logic, personality and good looks can never persuade someone to follow Christ, but with Jesus&rsquo; resurrection power, His heart, His mind, His love for the lost flowing from within us, who could resist?</p>

<p>If we cannot see evidence of the power of the Holy Spirit in our lives, we need to take inventory and ask whether we are living as carnal Christians. If we are not, perhaps the reason for the absence of power is a lack of faith, or a lack of knowledge about who God and His Holy Spirit are.</p>

<p>Some years ago a West Texas rancher made a startling discovery.</p>

<p>The story goes that for Homer Yates, the end of the road seemed to have come too soon. As he rested a dusty boot on the running board of his weathered pick-up truck, he looked across acres of ranch land dotted with clusters of cattle. This valley was his valley. He and his family had called this land home for countless years.</p>

<p>This familiar scene had once brought peace to his heart. It had comforted him. But at this particular moment it triggered tears. He loved this place. How could he leave it behind? How could he be expected to pack up his belongings and walk away from the ranch he had poured himself into for so many years?</p>

<p>And yet, what other choice was there now?</p>

<p>Things were all right until the depression hit. It came in like a swarm of devouring locusts and stripped him bare financially. He even had to accept government subsidy to keep the beloved ranch running marginally. It had shamed him to ask for help&mdash;but there seemed to be no other way. And as carefully as he and his wife had parceled out their eager funds, they never had quite enough. They had gone without, had sacrificed everything possible, but ruin was their reward.</p>

<p>Now, in the distance he saw another truck coming down the gravel land carrying a couple of men, strangers to him. They rumbled to a stop a few yards away, dust settling around them in swirls as they closed in on him.</p>

<p>&ldquo;Are&nbsp; you Yates?,&rdquo; one of them asked. He nodded. &ldquo;We&rsquo;ve been looking for you,&rdquo; he said, surprising Yates with a handshake. The tall one explained they were part of a geological crew sent by a major oil company, and they had reason to believe there might be oil on his land. Would he give them permission to drill a wildcat well on the other side of the ridge?</p>

<p>What could he lose? He signed the lease that afternoon. A little below eleven hundred feet they struck an oil reserve that was pumping 80,000 barrels a day before Yates knew what hit him.</p>

<p>Several of the wells that followed yielded twice that amount. And Yates and his family owned it all!</p>

<p>Overnight, the humble rancher, scraping by on government relief, had become a multi-millionaire. He had lived in poverty on the very land that made him rich. The oil reserves had been there all along&mdash;all his since the day he signed the deed. But he possessed it only after he understood what riches were there, and that they were his for the taking.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ Misconceptions</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>How often we as Christians do the same thing, living like spiritual paupers when in truth, we are children of the King! Jesus described the Christian life as an exciting, abundant adventure, and for centuries many believers around the world have found it to be true. Another problem we have is that we fear God will somehow take advantage of us if we give ourselves wholly to Him. We see in 1 John 4:18, &ldquo;We need have no fear of someone who loves us perfectly; his perfect love for us eliminates all dread of what he might do to us. If we are afraid, it is for fear of what he might do to us, and shows that we are not fully convinced that he really loves us&rdquo; (The Living Bible). We can trust God with our lives once we begin to accept His love.</p>

<p>Imagine with me for a moment that you are the parent of a small boy whom you love keenly. One warm summer day he stands at your knees and struggles to tell you something of great importance to him. &ldquo;I love you,&rdquo; he finally says, patting your hand, and from now on I&rsquo;m going to do everything you tell me to.&rdquo; You get down on one knee beside him, take his little shoulders in your hands and begin to shake him violently. You can see his eyes fill with terror as you shout, &ldquo;I&rsquo;ve just been waiting for this! Now I&rsquo;m going to make things miserable for you. No more fun, no more toys, only hateful, horrible chores for as long as you live!&rdquo;</p>

<p>What a strange response from a loving parent. We would expect to see tenderness and compassion shown toward the child, not a tirade like this. And yet, so often we fear the same kind of painful, punitive response from God if we should dare surrender ourselves to Him. A human parent would open their arms to their little one, welcoming them into an even deeper place of love. They would hope to merit such love from their child.</p>

<p>Why then do we expect anything less from God who loves us beyond human love? Is it that we do not understand His love for us?&nbsp; Matthew 7:11 describes God as a father demonstrative of his love for his children: &ldquo;If you then being evil, know how to give good gifts to your children, how much more shall your Father who is in heaven give what is good to those who ask Him!&rdquo;</p>

<p>Like Jesus who wept over Jerusalem, God looks at us and says, &ldquo;How often I would have gathered you into My arms, but you would not let Me.&rdquo; If we are to be effective Christians we must begin&mdash;by faith&mdash;to trust the God of our salvation. From the time we accept His forgiveness to the time He walks with us through death, everything He gives us we receive by faith.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ Spiritual Breathing</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>In <!-- begin linkInternal sdcard-->
<span id= "return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/eng/tc/tc02', '#1')">
    <em>How to Experience God&rsquo;s Love and Forgiveness</em> 
</span>
<!-- end linkInternal sdcard-->
, we discussed the principle of <em>spiritual breathing</em>, defining <em>exhaling</em> as the confession of sin and the acknowledgement of His love and forgiveness in our lives. Now we come to <em>inhaling</em>.</p>

<p>Spiritual breathing would be as incomplete without the process of <em>inhaling</em> as would physical breathing. When obstructed breathing prevents oxygen from getting to the lungs, brains and vital organs, the human body dies. Proper spiritual breathing is of the same dramatic importance. To <em>inhale</em> spiritually is to draw deeply of the freshness of the Holy Spirit, appropriating by faith His fullness, giving Him free reign in our lives to control and empower us as He sees fit.</p>

<p>As we practice spiritual breathing, it becomes a natural habit. The constant, rhythmical <em>exhaling</em> (confession) and <em>inhaling</em> (appropriation of new power in our lives) creates a fresh, incomparable, daily approach to life.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ The Holy Spirit</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>But if we are to surrender our lives to Him, we must begin with an understanding of the nature and person of the Holy Spirit. You will notice I have not referred to Him as &ldquo;it.&rdquo; The Holy Spirit is as much a person as God Himself. He is not some ethereal influence or fleecy white spiritual concept. He is God. He possesses all the attributes that are ascribed to God the Father. As the third person of the trinity, the Holy Spirit is co- equal with God the Father and God the Son. There is only one God, but He manifests Himself in three persons.</p>

<p>Defining the Trinity is a human impossibility. A seminary professor of mine used to say, &ldquo;The person who denies the trinity will lose his soul. The person who tries to understand the trinity will lose his mind.&rdquo; Finite man cannot fully comprehend the infinity God.</p>

<p>It was the Holy Spirit who inspired men to write the Scriptures. As we read the Bible, He is the one who reveals its truth to us and helps us understand how to apply it to our lives. He makes our prayers heard by God, and it is He who reaps the harvest of our faithful witness. His sole purpose is to exalt and glorify Christ (John 16:1-15).</p>

<p>The evidence of the working of the Holy Spirit in the lives of believers is all around us. He has come to us, the Comforter that Jesus promised as He prepared to leave this earth. &ldquo;It is to your advantage that I go away,&rdquo; Jesus said, &ldquo;For if I do not go away, the Helper [Holy Spirit} shall not come to you; but if I go, I will send Him to you&hellip;. But when He, the Spirit of Truth, comes, He will guide you into all the truth&hellip; and He will disclose to you what is to come. He shall glorify Me; for He shall take of Mine, and shall disclose it to you&rdquo; (John 16:7,13,14). Through new birth the Holy Spirit enables us to know Christ, and to share the Good News with others.</p>

<p>First John 1:7 says, &ldquo;If we walk in the light as He Himself is in the light, we have fellowship with one another, and the blood of Jesus His Son cleanses us from all sin.&rdquo; When we are filled with the Spirit, we are under His control; not as a robot but as one led and empowered by the heart of God Himself. He walks this earth in our bodies, living His resurrection life in and through us.</p>

<p>Jesus said to the multitudes, &ldquo;If any man is thirsty, let him come to Me and drink. He who believes in Me, as the Scripture said, &lsquo;From his innermost being shall flow rivers of living water&rsquo;&rdquo;(John 7: 37,38). John adds, &ldquo;But this He spoke of the Spirit, whom those who believed in Him were to receive&rdquo; (John 7:39). We can live the victorious, power-filled lives that Jesus offers if we open our hearts to the indwelling presence of the Holy Spirit. The choice is ours.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ The Holy Spirit Is In You</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>But a question arises: How? How do we trust the Spirit to direct us? What do we do, what do we say, so that He&rsquo;ll take control within us or so that we&rsquo;ll gain access to this marvelous power that is ours?</p>

<p>Suppose you have a bank account of several thousand dollars, and you need to cash a check. Would you walk into the bank, drop to your knees before a teller, and begin begging and pleading for the money you need? You smile because you know the surprised teller would probably lean over the counter and remind you, &ldquo;You don&rsquo;t have to beg me. It&rsquo;s already your money. Just write out what you want, and I&rsquo;ll cash your check.&rdquo;</p>

<p>The Holy Spirit is ours the day we accept Christ&rsquo;s forgive- ness for sins. Like salvation, the filling of the Holy Spirit is an act of faith. &ldquo;For by grace you have been saved through faith&rdquo; the Bible says, &ldquo;and that not of yourselves, it is the gift of God; not as a result of works, that no one should boast&rdquo; (Ephesians 2:8,9).</p>

<p>We need not beg or barter with God for His favor. Fasting, weeping, prostrating ourselves before Him will never cause Him to fill us with His Spirit. We cannot earn God&rsquo;s fullness. It is only ours through faith and it has been ours since the moment we became Christians. Colossians 2:6 reminds us, &ldquo;As you therefore have received Christ Jesus the Lord, so walk in Him.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ Appropriate the Power of the Holy Spirit</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p>The Holy Spirit is ours. What we must learn to do now is appropriate His power. There are several factors that will help prepare our hearts as we seek to have lives filled with the Holy Spirit.</p>

<p>We must be hungry for the Spirit and desire His indwelling. Jesus said, &ldquo;Blessed are those who hunger and thirst after righteousness, for they shall be satisfied&rdquo; (Matthew 5:6).</p>

<p>We must be willing to surrender our lives to Christ. In Romans 12:1,2 Paul writes, &ldquo;I plead with you to give your bodies to God. Let them be a living sacrifice, holy&mdash;the kind he can accept. When you think of what He has done for you, is this too much to ask? Don&rsquo;t copy the behavior and customs of this world, but be a new and different person with a fresh newness in all you do and think. Then you will learn from your own experience how his ways will really satisfy you&rdquo; (TLB).</p>

<p>Confess every sin. We need to let the Holy Spirit bring to mind everything that needs to be dealt with, then confess it all to God. We are promised in 1 John 1:9: &ldquo;If we confess our sins to him, he can be depended on to forgive us and to cleanse us from every wrong. (And it is perfectly proper for God to do this for us because Christ died to wash away our sins)&rdquo; (TLB).</p>

<p>With hearts opened and prepared for the filling of the Spirit, we are instructed in Ephesians 5:18 to &ldquo;Be not drunk with wine, wherein is excess, but be filled with the Spirit.&rdquo; It is a command! Not to be filled, controlled and empowered is disobedience. Scripture also tells us that there is available to us a &ldquo;confidence which we have before Him, that, if we ask anything according to His will, He hears us. And if we know that He hears us in whatever we ask, we know that we have the requests which we have asked from Him&rdquo; (I John 5:14,15).</p>

<p>There is but one indwelling, one rebirth, and one baptism of the Holy Spirit&mdash;all of which occur at the moment of salvation. There are many fillings made clear in Ephesians 5:18. In the original text, the meaning is more explicit than most English translations. This command means to be constantly and continually filled, controlled and empowered by the Holy Spirit as a way of life!</p>

<p>Technically, we do not even need to pray for the filling of the Holy Spirit as no Scripture tells us to do this. We are filled by faith. However, since the object of our faith is God and His Word, we can pray as an expression of our faith in God&rsquo;s command and in His promise. We are not filled because we pray but because we trust in God who responds to our faith.</p>

<p>Is this the desire of your heart? If you would like, pray this prayer:</p>

<blockquote><em>Dear Father, I acknowledge that I have been the one in control of my life, and as a result, I have disobeyed Your command to be controlled with the Spirit. Thank you for forgiving me, and now, Father, I invite Christ to take His rightful place on the throne of my life. In faith I ask You to fill me with Your Holy Spirit as You promised in Your Word. Thank You for keeping Your promises and for the indwelling of the Holy Spirit in my life right now.</em></blockquote>
If you prayed this prayer or expressed your heart similarly to God in your own words, you are now filled with the Holy Spirit. You do not have to &ldquo;feel&rdquo; like it; simply believe it as a fact&mdash;in faith. You can begin this very moment to draw upon the vast, inexhaustible resources of the Holy Spirit. He will enable you to live a holy life, to share the claims of Christ with seeking hearts in a new way.

<p>Thank God for the fullness of His Spirit as you begin each day, and continue to invite Him to control your life, moment by moment. The Spirit-filled life is a life of supernatural power, of abiding in Christ, and of bearing spiritual fruit. It is trusting God, not self, to live the Christian life.</p>

</div>

<h2>Application</h2>

<ol>
	<li>What did you like best (what caught your attention)?</li>
	<li>Why?</li>
	<li>To whom should I pass along this information?</li>
</ol>

<p>&nbsp;</p>

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


<p>Adapted from <em>The Transferable Concepts</em> by Bill Bright. All rights reserved.</p>


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

			<td class="social" @click="share('lesson', 'How to Be Filled With the Spirit: ', '/content/M2/eng/tc/tc03.html')">
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