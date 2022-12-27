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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>How to Walk in the Spirit</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
        <button id="MC2/eng/audio/tc/tc04.mp3" type="button" class="external-audio">
           Listen to &nbsp;"TC #4: How to Walk in the Spirit"&nbsp; </button>
          <div class="collapsed"></div>
        

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Introduction</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<blockquote>
<p>Chuck leaned on the horn one more time, a long, angry blast. He&rsquo;d already been waiting ten minutes.&nbsp; Where were they?</p>

<p>Marianne knew how nervous he was about this morning, his first Sunday teaching the fifth-grade boys. He had asked her and the kids to be ready on time!&nbsp; Finally she arrived, opened the door and helped the three-&shy;‐year-&shy;‐old into the car.</p>

<p>&ldquo;I can&rsquo;t believe this,&rdquo; Chuck shouted as six-&shy;‐year-&shy;‐old Julie cowered in the corner of the back seat. &ldquo;I told you I had to be there early. I&rsquo;ve got chairs to set up and materials to get ready!&rdquo;</p>

<p>Marianne made a weak attempt to apologize as they pulled out of the driveway and headed &ndash; too fast &ndash; toward the church. Chuck ranted on with no consideration for his family&rsquo;s feelings&hellip;. Until something deep inside him seemed to say, &ldquo;You&rsquo;re in a fine state of mind to be teaching about God&rsquo;s love and patience, aren&rsquo;t you?&rdquo; He recognized the &ldquo;voice&rdquo; in an instant. It spoke quietly in the midst of his anger, and as always, dove right to the heart of the matter.&nbsp; He could not argue; he knew the voice was right.</p>

<p>He glanced at his wife.&nbsp; Just seconds before he had been so angry he had seen her as the enemy.&nbsp; Now what he saw was the woman he loved, staring sadly out the window as the houses slipped past beside them. He had wounded her deeply with his outburst.</p>

<p>&ldquo;Honey&rdquo;, he said, reaching for her hand.&nbsp; &ldquo;I owe you an apology.&rdquo; The rest of the trip they spoke quietly together, mending hurt feelings, righting wrongs, restoring their communication.&nbsp;&nbsp;</p>
</blockquote>

<p>Chuck had slipped back into the practices of the carnal man like all of us at times. He had been so involved in the problem of the moment that he forgot who should be on the throne of his life. It is almost reflex to return to our carnal I&rsquo;ll-&shy;‐do-&shy;‐it-&shy;‐myself ways when we forget to believe the promises of God&rsquo;s Word (John 1:9), and their provisions for our daily living. We forget I Corinthians 10:13, &ldquo;No temptation has overtaken you but such as is common to man; and God is faithful, who will not allow you to be tempted beyond what you are able, but with the temptation will provide the way of escape also, that you may be able to endure it.&rdquo;</p>

<p>Paul says in Romans 14:23, &ldquo;Whatever is not from faith is sin.&rdquo;&nbsp; It is not sin itself that returns us to the carnal state again; it is what we decide to do about that sin.&nbsp; If we stop breathing spiritually and allow sin to separate us from God and/or our belief in His power for our lives, our only choice is to live once again as carnal Christians. On the other hand, as we choose to breathe spiritually &ndash; confessing our sins to God moment by moment (exhaling), and breathing deeply of His forgiveness and restoration (inhaling) &ndash; we continue to keep Him enthroned and to live victorious lives.</p>

<p>As Chuck drove his family to church that Sunday morning he &ldquo;exhaled&rdquo; when he confessed his sin to God and his family.&nbsp; And he &ldquo;inhaled&rdquo; a fresh filling of the Spirit as he opened his heart once again to God&rsquo;s restorative powers, and worked things through with his wife. When he stood before those fifth-grade boys he was ready to speak to them with conviction of God&rsquo;s unconditional love for us as His redeemed children.&nbsp; The boys sensed in their teacher a humility and honesty that drew them to the Savior, and before class had finished three of the children had given their hearts to God. The Lord brings glory to Himself through the committed lives of His children.</p>

<p>As you &ldquo;exhale&rdquo; and &ldquo;inhale&rdquo; spiritually, you will notice a difference in your life. You will become &ldquo;spiritually fit&rdquo; and aware of a new freedom and power in your witness. When sin enters, do not let it set you back. Simply keep short accounts with God and do not allow sin to accumulate.</p>

<p>John writes, &ldquo;My little children, I am telling you this so that you will stay away from sin. But <em>if you sin</em>, there is someone to plead for you before the Father. His name is Jesus Christ, the one who is all that is good and who pleases God completely&rdquo; (I John 2: 1-&shy;‐6, TLB).</p>

<p>As your relationship with the Holy Spirit matures, you will discover it is both critical and progressive. It is critical, in that as you continue appropriating His power moment by moment, you will learn how to appropriate by faith what He offers you. Your relationship is progressive, in that, by faith, you will grow and mature in your Spirit-&shy;‐controlled walk.&nbsp; It is often easy to identify a believer who has walked in the Spirit for many years, for the fruit of the Spirit is easily seen.</p>

<p>The concept of &ldquo;spiritual breathing&rdquo; is not a complex one, but it needs to be understood in a broader context. I would like to discuss four things we need to take precautions about in our Christian walk:</p>

<ol>
	<li>being certain we are filled with the Holy Spirit;</li>
	<li>preparing for spiritual conflict;</li>
	<li>knowing our rights as children of God;</li>
	<li>living by faith.</li>
</ol>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h3>+ Be&nbsp;certain we are filled with the Holy Spirit</h3></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>In order to walk in the Spirit, we first must <em>be sure that we are filled with the Spirit</em>. In Ephesians 5:18 we are told, &ldquo;Be not drunk with wine, wherein is excess; but be filled with the Spirit&rdquo; (KJV). To be filled with the Holy Spirit is to be controlled and empowered by Him as a way of life. Jesus warned, &ldquo;No one can serve two masters; for either he will hate the one and love the other, or he will hold to one and despise the other. You cannot serve God and mammon&rdquo; (Matthew 6:24).</p>

<p>There is a &ldquo;throne&rdquo; in each heart &ndash; our control center &ndash; and there is room on the throne for only one reigning power. The struggle within us is over control of that throne, and the Christian who is ruled by self, has removed the Holy Spirit from the throne of his life.</p>

<p>It is imperative that we remember <strong><em>God&rsquo;s command</em></strong> to us and <strong><em>God&#39;s promise</em></strong>. He commands us, &ldquo;Be filled&rdquo;; He promises that if we ask anything according to God&rsquo;s will, He will hear and answer (I John 5: 14,15). Because He commands us to be filled with his Holy Spirit, we can be sure that we are asking something that is in His will for our lives. And when we pray according to His will, He has promised to answer our requests. Therefore, we can <em>expect</em> Him to fill and empower us when we sincerely desire to surrender the control of our lives to Him, and trust Him to fill us with His Spirit. Then we must continue to breathe spiritually, &ldquo;exhaling&rdquo; by confession and &ldquo;inhaling&rdquo; by appropriating His forgiveness and power in our lives by <em>faith</em>.</p>

<p>What about emotions in the experience of the believer? Feelings add color and excitement and are a valuable part of life, but they are extremely fickle, changing with the weather. As Christians <em>we live by faith</em>, trusting in God&rsquo;s trustworthiness and the promises of His Word. If we depend on feelings for a confirmation of His working in our lives, we put ourselves in a dangerous position and will almost always be disappointed.</p>

<p><img alt="Airplane" src="@/assets/images/eng/custom/Web-satisfied-trust-facts-not-feelings.jpg" style="float:left; height:280px; width:278px" />To be transported by an airplane, we must place our faith in the trustworthiness of the aircraft and the pilot who flies it. Our feelings of confidence or fear do not affect the ability of the airplane to transport us, though they do affect how much we enjoy the trip.<br />
In the same way, we as Christians do not depend on feelings or emotions, but we place our faith (trust) in the trustworthiness of God and the promises of His Word.</p>

<p>Refuse to seek emotional experiences as proof of the Holy Spirit&rsquo;s indwelling. If you have a sincere hunger and thirst for God&rsquo;s righteousness, and you have confessed your sin, surrendered to His control, and asked Him to fill you, you can be assured that <em>you are filled with the Holy Spirit</em>! God is faithful to His promises.</p>

<p>John 14:21 reminds us, &ldquo;He who has My commandments and keeps them, he it is who loves Me; and he who loves Me shall be loved by My Father, and I will love him, and will disclose Myself to him.&rdquo; It does not say, &lsquo;He who feels love for me,&rdquo; but, &ldquo;He who <em>keeps my commandments</em>.&rdquo;</p>

<p>Feelings usually follow the decisions and actions of our lives, but we need not look for them nor depend on them to confirm fact for us. Looking for an emotional experience is denial of the concept of faith, and whatever is not of faith is sin (Hebrews 11:6). When we believe God, He honors our faith and we can live life with assurance that He is filling us moment by moment.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h3>+ Be prepared&nbsp;for spiritual conflict;</h3></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>Second, as all good soldiers who are prepared for battle, we must be ready for spiritual conflict.&nbsp; We who have chosen to become spiritually alive and committed to our Lord, must <em>expect resistance from the enemy</em>, and one of his sharpest weapons is guilt. He will poke and prod when we least expect it, with stinging nettles that itch and swell. He will accuse us of sins for which we have already accepted God&rsquo;s forgiveness, and he will do everything possible to destroy our security in Christ, for he knows that a doubting soldier is worthless in battle.&nbsp; The good news is that we have a choice.</p>

<ul>
	<li>Do not allow Satan to sink arrows into his target.&nbsp; A &ldquo;moving target&rdquo; is always harder to hit.</li>
	<li>Refuse to withdraw into <em>unnecessary introspection</em> (one of Satan&rsquo;s favorite ploys) and you will not probe into areas that have already been forgiven and forgotten by the Savior!</li>
	<li>Confess to God only what the Holy Spirit impresses upon your heart as something which is standing between you and His complete filling of your cleansed heart.</li>
</ul>

<p>&nbsp;</p>

<p>We are told in I Peter 5:7,8 to let God have all of our worries and cares, for He is always thinking about us and watching everything that concerns us. We are to be careful &ndash; alert to inevitable attacks from Satan, the great enemy, who prowls about the earth like a cunning lion looking for his next victim to tear apart. He is a shrewd and merciless foe, attacking either subtly or obviously, attempting to defeat and destroy us. But we can be confident that &ldquo;greater is He who is in you than he who is in the world&rdquo; (I John 4:4).</p>

<p>Two thousand years ago Satan was defeated when Jesus Christ died on the cross for our sins. Victory is ours, now! We do not look forward to victory but backward, toward the cross where the enemy was defeated once and for all. We need not fear Satan as long as we walk in the Spirit, depending on Christ for our strength and provision.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h3>+ Knowing our rights as children of God</h3></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>The third area we must be aware of if we are to walk consistently in the Spirit is that of our rights as children of God (John 1:12). We have inherited an inexhaustible supply of love, power, forgiveness and grace from our Father. It is our responsibility to learn how to draw upon that supply.</p>

<p>The source book which declares our rights of inheritance is, of course, the Bible. As believers we need to spend time reading, studying, memorizing and meditating on God&rsquo;s Word to live in a way that will please Him. The desires of His heart for us, His precious children, are hidden in the Scriptures. As we search for these nuggets of truth, they are revealed to us by the Holy Spirit Himself.</p>

<p>For example, when Christ takes up residence in our lives, our bodies become His living temples. Jesus promised us His special power to live holy lives (Romans 12: 1,2).&nbsp; As His children, this is something we&rsquo;ve inherited.</p>

<p>We also can be effective witnesses for Him. When His Spirit controls us, we are filled with His love for the lost, and as we share truth with them He speaks through us.</p>

<p>One word of caution. We must be careful not to think of Bible study, prayer and witnessing as &ldquo;works&rdquo; that justify our position in Christ. In truth, it is just the opposite. The works we do in the name of our Lord are the results of living to please the Savior, evidence of a lifetime given to the moment-&shy;‐by-&shy;‐ moment filling of the Holy Spirit.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h3>+ Live&nbsp;by faith</h3></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>Finally, if we are to walk in the Spirit, we must live by faith.&nbsp; It is sad to see the pain of sincere Christians who have been deceived by a displaced emphasis on emotions. When unrealistic expectations are levied by others who have set their own standards of proof for the Spirit, there can be nothing but disappointment ahead. Praise God, we do not live by fluctuating feelings, but by faith in His never-&shy;‐changing Word!</p>

<p>And His Word is not silent on the issue of faith. Hebrews 11:6 tells us that &ldquo;without faith it is impossible to please Him.&rdquo; Galatians 3:11 reminds us that we &ldquo;live by faith.&rdquo; Faith requires believing when it is not easy to do so. But God has given us a lifeline to hold fast to when things are rough. Romans 8:28 promises us, &ldquo;all things&hellip;. work together for good to those who love God, to those who are called according to His purpose.&rdquo;</p>

<p>It is not easy to learn to say, &ldquo;Thank you, Lord,&rdquo; when your heart is breaking, but it is a priceless addition to the Christian walk. Writer Joseph Bayly, who has lost three sons in death over the years, has said that God was never closer than when he and his wife walked away from a fresh grave.</p>

<p>Praise and thanksgiving are gifts expressing our trust in God in the midst of overwhelming circumstances. Have you lost a loved one to death? Has pain and disease seemed to control your body? Have you received hurts you did not deserve? Have you suffered financial reserves? Have you tried thanking God, while none of it is making sense? Have you told Him you trust Him even when life is crushing in on you?</p>

<p>If we believe God and His promises when things seem to be falling apart around us, we are acknowledging His lordship, and obeying His command to trust Him when we cannot see the end. In I Thessalonians 5:18 we read: &ldquo;In everything give thanks; for this is God&rsquo;s will for you in Christ Jesus.&rdquo; He promises rewards when we trust Him. He has said &ldquo;All Things&rdquo; will work together for good, and He stands behind His Word.</p>

<p>It may seem that only a fool would be thankful under such circumstances, but if we believe God&rsquo;s Word to be true, then we need to exercise our will and give thanks when there seems to be no reason for thanksgiving. Over the years Christians around the world have learned some sweet and valuable lessons through simply being obedient to God&rsquo;s Word, and giving thanks when they least felt like it.</p>

<p>To sum up, a Christian will want to walk in the Spirit moment-&shy;‐by-&shy;‐ moment because God has commanded that we do so. It is the only way to keep Christ on the throne, and in control of our lives.&nbsp; And as self decreases and Christ increases (Galatians 2:20), the result will be unbelievable growth, and an abundant Christian life.</p>

</div>

<h2>Application</h2>

<ol>
	<li>What did you like best (what caught your attention)?</li>
	<li>Why?</li>
	<li>To whom should I pass along this</li>
</ol>

<div class="note-div">
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

			<td class="social" @click="share('lesson', 'How to Walk in the Spirit: ', '/content/M2/eng/tc/tc04.html')">
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