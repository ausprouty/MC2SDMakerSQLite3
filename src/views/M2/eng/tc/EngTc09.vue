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
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>How to Pray</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
        <button id="MC2/eng/audio/tc/tc09.mp3" type="button" class="external-audio">
           Listen to &nbsp;"TC #9: How to Pray"&nbsp; </button>
          <div class="collapsed"></div>
        

<div>
<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Introduction</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<blockquote>
<p>&ldquo;Mommy,&rdquo; the child asked, &ldquo;what is prayer?&rdquo;</p>
</blockquote>

<blockquote>&ldquo;It&rsquo;s two people who love each other talking together &ndash; one of them is God, and the other is you.&quot;</blockquote>

<p>Prayer is simply communicating with the Father who loves us unconditionally.&nbsp; The well-known &ldquo;hot line&rdquo; that connects Washington, D.C., with the Kremlin, offers the President instant, direct communication with the Soviet Union in the event of a national emergency.&nbsp; If we liken it to the communication lines between the believer and God, the sad truth is that our spiritual &ldquo;hot line&rdquo; to God&rsquo;s heart sits idle much of the time.&nbsp; We seem to forget the line exists until an emergency or crisis arises to remind us that we are not sufficient unto ourselves.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ Who can pray?</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>Instinctively man knows he should pray, and he does, if only to gods of sticks and stone.&nbsp; Whenever we are faced with tragedy, heartache, sorrow or danger, we acknowledge the need within us to turn to someone greater than ourselves and more powerful than our circumstances.&nbsp; But peril lies in praying ignorantly.&nbsp; When men have prayed to gods of blood, fire and war, they have emerged sadistic, ruthless and militaristic.&nbsp; Man assimilates the moral character of the object he worships.&nbsp; That applies to the Christian as well. &nbsp;</p>

<p>Scripture points out, &ldquo;There is one God, and one mediator&hellip; between God and men, the man Christ Jesus&rdquo; (1 Timothy 2:5).&nbsp; Jesus said, &ldquo;I am the way, and the truth, and the life; no one comes to the Father, but through me&rdquo; (John 14:6).&nbsp; Sound exclusive?&nbsp; That is exactly what Jesus intended, to show us that the way to God is very narrow and our focus needs to be on Him and no one else.&nbsp; He must be our only object of worship, for &ldquo;with unveiled face beholding as in a mirror the glory of the Lord, [we] are being transformed into the same image&rdquo; (2 Corinthians 3:18).&nbsp; We worship the one true, holy and loving God, and focusing on Him makes us more like Him every day.</p>

<p>Prayer requires a clean heart.&nbsp; Imagine that we have been invited to tea with the Queen of England.&nbsp; What a flurry of preparation would take place!&nbsp; For days we would shop for just the right outfit for the occasion.&nbsp; We would appear before Her Majesty prepared head to toe with a proper haircut and a speech ready to prevent embarrassing blunders.</p>

<p>God asks only that we bring a clean and open heart into His presence.&nbsp; The beloved psalmist said, &ldquo;If I regard wickedness in my heart, the Lord will not hear&rdquo; (Psalm 66:18).&nbsp; Our holy God cannot commune with sin; it is the eternal separator.&nbsp; If we would have God hear our prayers, we must confess any sin in our lives and enter His chambers dressed in robes of purity.</p>

<p>We dare to approach His throne with our petitions and praise only on the authority of His Son, the Lord Jesus Christ.&nbsp; He is our only mediator.&nbsp; On the eve of His crucifixion Jesus said no less than six times, &ldquo;If you ask Me anything in My name, I will do it&rdquo; (see John 14: 13-16).</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ To whom do we pray?</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>Every member of the trinity is involved in our prayers.&nbsp; We pray to the Father in the name of the Son through the ministry of the Holy Spirit.&nbsp; Prayer ushers us into the presence of the King of kings and Lord of lords, and we bow in reverence and awe.&nbsp; But He is our Father and delights in our communication.&nbsp; Because of this we can come before Him confident and relaxed, with joyful hearts and filled with expectancy.&nbsp; God loves us more than any human being ever could.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ Why do we pray?</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p><em>Our prayers bring glory to God.</em>&nbsp; Although our Lord delights in our praise and requests, the purpose of prayer is to glorify Him.&nbsp; Jesus said, &ldquo;Whatever you ask in My name, that will I do, that the Father may be glorified in the Son&rdquo; (John 14:13).</p>

<p><em>We communicate with God through prayer.</em>&nbsp; Some think of prayer as a convenient &ldquo;escape hatch&rdquo; from trouble, a direct route to getting their way, and a means to manipulate God into meeting their needs.&nbsp; To use prayer this way is like filling a shiny new Cadillac with balloons.&nbsp; Prayer is meant to be so much more.</p>

<p>Prayer is a holy line of communication, instituted and commanded by God for the exclusive use of His precious children.&nbsp; The New Testament is filled with directives about prayer and its role in the Christian walk.&nbsp; &ldquo;Pray without ceasing, &ldquo;Paul said (1 Thessalonians 5:17); &ldquo;Keep watching and praying&rdquo;&nbsp; (Matthew 26:41); &ldquo;Pray with the spirit&rdquo; (1 Corinthians 14:15).&nbsp; Prayer is important to God, and vital to us.&nbsp; We cannot grow without it.</p>

<p>Prayer is fellowship between God and His children.&nbsp; God waits eagerly for us to come to Him in prayer.&nbsp; Longing for fellowship, He created man.&nbsp; His love for us was so perfect, so unquenchable, that in spite of our self-centeredness He gave His only Son to pray the price for sin and open a way for us to come into His presence.&nbsp; Incredible as it seems, God wants our fellowship!</p>

<p>Proverbs tells us that &ldquo;the prayer of the upright is His delight&rdquo; (Proverbs 15:8).&nbsp; In our egotistical thoughts, prayer has become something for us.&nbsp; Something we do to meet our needs.&nbsp; But we are being told here that prayer meets the need in God, and that we must spend time with Him because our prayers are gifts we offer to please and delight the Lord we love.</p>

<p><em>Christ set an example of prayer for us.</em>&nbsp; When Jesus was here among us prayer was a priority for Him.&nbsp; Even in days filled from morning to nighttime with an impossible, pressured schedule, Jesus found time for prayer.&nbsp; He was dependent upon that fellowship with His Father.&nbsp; He escaped into prayer, and restored His wounded spirit.&nbsp; How much more should we be aware of our own need for prayer?</p>

<p><em>Prayer brings results.</em>&nbsp; Praying does change things.&nbsp; Jesus prayed for Lazarus who had died, and God restored a beloved friend to life (John 11:43).&nbsp; Elijah prayed that God would forbid it to rain, and for three and one-half years no rain fell in the land.&nbsp; When he prayed again that God would let it rain, the sky became black with heavy clouds that spilled out on the parched ground (James 4: 17-18).&nbsp; There is undeniable power in the prayer of the believer/</p>

<p><em>Prayer is spiritual nurture for the growing soul.</em>&nbsp; Talking to God and listening for His response, is part of His design to nurture us as we mature in Him.&nbsp; Just as a small child needs nourishment and love to grow strong physically, we need regular food for our souls if we want to mature spiritually.&nbsp; Now and then a day may slip by when we forget to feed on God&rsquo;s Word or communicate with the Father and there may be no apparent ill effects.&nbsp; But if we continue to deprive ourselves of steady nourishment, we will quickly begin to show the signs of spiritual malnutrition.&nbsp; In times of stress we&rsquo;ll discover that we have lost the strength to live victorious, fruitful lives.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ When should we pray?</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>We are told to <em>pray without ceasing</em>, to talk to God about everything, to shoot &ldquo;arrow prayers&rdquo; in His direction as we go through the day.&nbsp; We ask for wisdom in difficult places.&nbsp; We thank Him for blessings as they occur.&nbsp; We pray for the salvation of loved ones, and the healing of the sick.&nbsp; We pray for wisdom for our leaders, for our pastors and politicians.&nbsp; And all of this is done as life unfolds round us, on the freeway, in the kitchen with children hanging on our knees, walking through the office.</p>

<p>But there is also a need for <em>time alone</em> in a set-apart place where we can kneel undisturbed before an open Bible and talk peacefully with God as we read His Word.&nbsp; We hear God&rsquo;s voice through His Word and through the impressions that come as we open our hearts to meditate in His presence.</p>

<p>As you read the Bible, ask the Holy Spirit to make your reading meaningful and uplifting.&nbsp; Pause often to thank God for His loving provisions, to confess the weaknesses in your life as you see them reflected in Scripture, to ask for the boldness and faith the apostles had, and to thank Him for fresh insights into His plan for your life.&nbsp; Invite God to speak to you, then wait to hear His voice.</p>

<p><em>Group prayer</em>, in the company of other Christians is another vital part of an active prayer life, yet few gatherings are more dull, unattractive and boring than the average prayer meeting.&nbsp; It is a lack of individual preparation that creates the emptiness we feel at times like these.&nbsp; When we spend time with God in private, preparing for our time together, we come already filled with His presence, expecting Him to do great things as we meet together with Him.&nbsp; Without preparation we can only parrot prayers we have patterned after someone else, and there is no heart in what we say. &nbsp;</p>

<p>How exciting it becomes to talk to God as though He were actually present &ndash; as indeed, He is.&nbsp; Prayers are heartfelt and spontaneous, directed by the Spirit.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ What does prayer consist of?</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p>The basic elements of prayer can be remembered easily by using the word &ldquo;ACTS&rdquo; as a reminded:&nbsp; Adoration, Confession, Thanksgiving and Supplication.</p>

<p><em><strong>Adoration.</strong></em>&nbsp; To adore God is to worship and praise Him, to honor and exalt Him in our hearts and minds.&nbsp; Our prayers should be an expression of complete trust in Him, a confidence that He hears us.&nbsp; Prayer is much more than words.&nbsp; It is the expression of our hearts open before God.</p>

<p>Reading psalms of praise aloud, and similar portions of Scripture, can greatly enrich our prayer time.&nbsp; Time spent praising God for His goodness will warm the coldest heart.</p>

<p><em><strong>Confession.</strong></em>&nbsp; For the Christian who seeks fellowship with God, prayer needs to begin with confession on the basis of Psalm 66:18:&nbsp; &ldquo;If I regard wickedness in my heart, the Lord will not hear.&rdquo;&nbsp; Isaiah 59:2 reminds us, &ldquo;Your iniquities have made a separation between you and your God, and your sins have hidden His face from you, so that He does not hear.&rdquo;&nbsp; Confessing our sin prepares the heart for thanksgiving and supplication.</p>

<p>If our discipline of prayer begins with worshipful adoration of God, any sin in our lives will be revealed by the Holy Spirit.&nbsp; For as we see God in His holiness and love, we become aware of our own sin and unworthiness.&nbsp; Someone dressed in white who enters a drk coal mine will not know how smudged and dirty he has become until he stands once again in the light.&nbsp; It is the same with sin.&nbsp; Until we expose ourselves to the &ldquo;light of the world&rdquo; (Jesus), we cannot see the dark places in our lives.</p>

<p>We always can be totally transparent with God, for He knows us intimately.&nbsp; We have no secrets before Him.&nbsp; The hairs of our head are numbered, and He knows our thoughts before we think them.&nbsp; We cannot hide behind a fa&ccedil;ade, or fool God.&nbsp; So we can come in complete freedom and honesty and tell Him exactly how we feel.&nbsp; If you do not feel spiritual, tell Him.&nbsp; If your heart is cold, confess it.&nbsp; If you have been disobedient, confess it and receive His forgiveness and cleansing;&nbsp; be restored to fellowship once again.</p>

<p>True confession is honest, and it involves:</p>

<ul>
	<li>Acknowledging that our sin is wrong and therefore, is grievous to God.</li>
	<li>Accepting God&rsquo;s forgiveness for our sins &ndash; past, present and future;</li>
	<li>Repenting, aligning our attitude with God about our sin.&nbsp; When we change our attitude, the Holy Spirit then helps us to change our actions accordingly.</li>
</ul>

<p>We can be confident in our confession because 1 John 1:9 promises: &ldquo;If we confess our sins, He is faithful and righteous to forgive us our sins and to cleanse us from all unrighteousness.&rdquo;&nbsp; Beware of unhealthy extremes of confession that lead to unnecessary introspection.&nbsp; Accept God&rsquo;s forgiveness once and for all for your sin, then concentrate on His love and acceptance of you as His child.</p>

<p><em><strong>Thanksgiving.</strong></em>&nbsp; There is no better way to demonstrate our faith than to say, &ldquo;Thank You, God.&rdquo;&nbsp; The writer of Hebrews makes it clear that without faith it is impossible to please the Father (Hebrews 11:6).&nbsp; We are commanded to give thanks for all things because &ldquo;this is God&rsquo;s will for you in Christ Jesus&rdquo; (1 Thessalonians %:18).&nbsp; To fail to give thanks is to disobey God.</p>

<p>If we are filled with God&rsquo;s Holy Spirit and recognize that He controls all things, we can thank Him not only for the blessings of each day, but also for the problems and adversities.&nbsp; When we meditate on the goodness of God, the salvation He has freely given, eternal life in Christ, the chance to serve, health, food, shelter, a free country&hellip;. We are obeying God&rsquo;s command.&nbsp; And praise has a remarkable effect on us.&nbsp; It is invigorating and edifying.&nbsp; It focuses our attention on what we have instead of what we want, and we can see proof that God is at work in us. &nbsp;</p>

<p>But praise involves thanking God for adversity as well.&nbsp; Make a list of every problem, disappointment and heartache in your life, then begin a the top and thank God for each entry.&nbsp; We are commanded to gibe thank in adversity as a demonstration of faith.&nbsp; Expressing our faith pleases God and allows Him to make Himself strong on our behalf.&nbsp; A critical, unbelieving spirit on the other hand, displeases Him and hinder His efforts to bless and enrich our lives and keeps Him from using us for His glory.</p>

<p><em><strong>Supplication.</strong></em>&nbsp; Paul encourages us, &ldquo;Be anxious for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known to God&rdquo; (Philippians 4:6).&nbsp; To many Christian, prayer is like window-shopping &mdash; they spend a great deal of time looking, but they never make a choice to buy.&nbsp; We must know our hearts; we must know what we need and ask God in specific terms, expecting Him to answer.</p>

<p>Supplication includes intercession for others and petition for our own needs.</p>

<p>We should pray daily for our spouses, our children and our parents.&nbsp; We should pray for our neighbors and friends, our pastor and missionaries, and for other Christians to whom God has given special responsibility.&nbsp; Pray for those in authority.</p>

<p>Pray especially for the salvation of souls, for a daily opportunity to introduce others to Christ and to the ministry of the Holy Spirit, and for the fulfillment of the Great Commission in our generation.&nbsp; Begin with your campus or your community.&nbsp; Pray for and seek to find one or more Christian friends with whom you can establish prayer partnerships.</p>

<p>Christians often do not realize the importance of intercession.&nbsp; The apostle Paul continually prayed for his converts (Ephesian 1:15-16), and he also asked them to pray for him (Ephesians 6:19).&nbsp; Every Christian should pray for others and should encourage other Christians to pray for him.</p>

<p>We must pray for ourselves also that our inner man may be renewed and quickened, empowered by the Holy Spirit.&nbsp; We need to tell God about our problems and ask Him for wisdom and guidance. We should ask expectantly for strength to resist temptation, and for the comfort we need when sorrowing.&nbsp; There is nothing too small or too great to bring before the Lord in prayer.&nbsp; What is important to us is important to Him.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ Can we pray with confidence?&nbsp; How?</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p>Can we expect answers to our prayers?&nbsp; Scripture says we can if we abide, ask, believe and receive. &nbsp;</p>

<p>Jesus revealed <em>abiding</em> as the key to successful prayer, promising, &ldquo;If you abide in Me, and My words abide in you, ask whatever you wish, and it shall be done for you&rdquo;&nbsp; (John 15:7).&nbsp; In other words, if our lives are totally yielded to Him with His Word abiding in us so that we know His will, we can ask anything we wish, for our desire is to do His will.</p>

<p>Abiding is simply walking in the Spirit with no unconfessed sin in our lives and being totally available to God.&nbsp; As we pray according to His will, we know He will answer us (1 John 5:14).</p>

<p>To expect answers to our prayers, we must <em>ask specifically</em>.&nbsp; James says, &ldquo;You do not have because you do not ask.&rdquo;&nbsp; He goes on to explain, &ldquo;You ask and do not receive because you ask with wrong motives, so that you may spend it on your pleasures&rdquo; (James 4: 2-3).&nbsp; The Lord Jesus speaks with the authority of God when he says, &ldquo;If you ask Me anything in My name, I will do it&rdquo; (John 14:14).</p>

<p>Jesus promised, &ldquo;All things you ask, in prayer, believing, you shall receive (Matthew 21:22).&nbsp; <em>Believing God</em> is the heart of answered prayer.&nbsp; God does not ask that we have great faith, simply that we believe in a great and trustworthy God.&nbsp; Jesus said, &ldquo;If you have faith as a mustard seed, you shall say to this mountain, &lsquo;Move from here to there,&rsquo; and it shall move; and nothing shall be impossible to you&rdquo;&nbsp; (Matthew 17:20).</p>

<p>But faith is not something we can manufacture on our own;&nbsp; it comes from God (Ephesians 2, 8-9).&nbsp; The Holy Spirit produces faith in us as we continue to walk in obedience.&nbsp; Faith is like a muscle:&nbsp; If we don&rsquo;t use it, we lose it.</p>

<p><em>Receive</em>, by faith, the answers to your requests.&nbsp; If we are abiding in Christ and are controlled by the Holy Spirit, if we are praying according to the Word and will of God, we can expect God to answer our prayers, so be prepared to see some action.&nbsp; Imagine that you are receiving the answers you are seeking and begin to thank God for answered prayer!</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><h2>+ Even great things</h2></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->

<p>As we bow in prayer, we are tapping a source of power that can change the course of history.&nbsp; God&rsquo;s might, power, love, wisdom and grace are available to us if we believe Him and claim His provision.&nbsp; Prayer I the greatest privilege of the Christian experience because it allows us to be in the very presence of God.&nbsp; When we take the promises of God seriously, claiming all we have been promised, there is no limit to what God can do.</p>

<p>If you would like to unleash the full power of prayer in your life, join me in this prayer:</p>

<blockquote><em>Father, You said &lsquo;I have not because I ask not.&rsquo; So, right now I am claiming Your promises because I want to live in mighty victory as You have promised that I can, for Your glory.&nbsp; I pray in Your all-powerful name.&nbsp; Amen.</em></blockquote>

</div>

<h2>Application</h2>

<ol>
	<li>What did I like best (what caught my attention)?</li>
	<li>Why?</li>
	<li>Whom will I tell this to?</li>
</ol>

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
</div>


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

			<td class="social" @click="share('lesson', 'How to Pray: ', '/content/M2/eng/tc/tc09.html')">
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