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
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>How to Experience God’s Love and Forgiveness</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
        <button id="MC2/eng/audio/tc/tc02.mp3" type="button" class="external-audio">
           Listen to &nbsp;"TC #2: How to Experience God&#39;s Love and Forgiveness"&nbsp; </button>
          <div class="collapsed"></div>
        

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ A Modern Day Parable</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<blockquote>
<p>There were deep lines on the young face staring out the window of the train, lines that months of reliving a regretted space in time had embedded as he had served his sentence in prison.</p>

<p>The green rolling hills and familiar pasture lands sped past until there, in the distance, he recognized the three spires of the granary in his hometown. A lump of terror sprung into his throat and slithered down into his stomach. He would know soon. They were just a few miles from his folk&rsquo;s place on the outskirts of town.</p>

<p>He stroked the cover of the book lying open in his lap as if to touch some remains of reality. The whole thing felt like a dream. The last three years were swaddled in a haze. How could he have done it? The shame his crime had brought his mother and father was more than anyone should have to bear. How could they ever forgive him?</p>

<p>And all the while the train rolled on, closer to what had once been home for him&hellip;.before. He knew when he wrote them that he had no right, but he had asked them to leave a sign if they could find it in their hearts to forgive him. Just a ribbon hanging from the old oak tree in the backyard where his tire swing had been all these years was all he needed. He only wanted to see them once more and then he intended to move on, to spare them any more shame and hurt. He would know in the next few minutes.</p>

<p>The palms of his hands were wet with perspiration; his mouth was dry, and as much as he longed to know, he could not make himself look out the window. What would he do if the ribbon was not there?</p>

<p>&ldquo;You all right, son?&rdquo; The passenger next to him could not help but notice the young man&rsquo;s tension. &ldquo;Something I can do for you?&rdquo; &ldquo;Yes, sir, there is,&rdquo; he said. &ldquo;Just past that bend is a big old oak tree and, well, I know it sounds a little strange, but would you tell me if you see a yellow ribbon in the tree somewhere? I, I just can&rsquo;t bring myself to look.&rdquo;</p>

<p>The man nodded, and as the train rounded the bend he began to smile. &ldquo;Is it there?&rdquo; the young man asked. &ldquo;Can you see the ribbon?&rdquo;</p>

<p>&ldquo;You&rsquo;ll have to look for yourself, son,&rdquo; the man said. &ldquo;You wouldn&rsquo;t believe me if I told you.&rdquo;</p>

<p>The young man slowly raised his head and stared in grateful disbelief. The oak tree had blossomed into a bouquet of yellow ribbons flying in the breeze from every branch. And against the fence, a man and a woman waved at the passing train carrying the son they loved.</p>
</blockquote>

<p>There are Christians who, like this young man, live fearful lives, missing that sparkle, that special dynamic they had expected from Christianity. They don&rsquo;t smile&mdash;they scowl. They struggle. Burdens overwhelm them. Where is the peace Jesus promised?, they wonder. What they really need is a renewed perspective of the forgiveness that is ours in Christ.</p>

<p>These believers are painfully aware that something is missing in their lives. Their Christianity reflects a self-inflicted boredom. These people do not need scolding from well- meaning Christian brothers and sisters. They do not need to be convinced that life is empty and unfulfilling. What they do need is to tap into their spiritual resources (e.g., love, peace and forgiveness)&mdash;the missing ingredients their salvation can bring to everyday lives. This is their rightful inheritance, available to every believer.</p>

<p>Like the young man who saw the yellow ribbons, these destitute believers simply need to understand how to reach out and possess what is theirs and to discover that the secret for knowing and experiencing forgiveness lies in being filled with God&rsquo;s Spirit.</p>

<p>But what do we tell someone whose Christianity is colorless? What if you were struggling to find the love that eluded you as a believer? Would it really be possible for another Christian to present profound truths clearly enough for you to grasp and apply them in your own life? Can one believer teach another how to experience Christ&rsquo;s limitless forgiveness for themselves?</p>

<p>The answer is yes. Throughout our walk with Christ, we repeatedly find rewarding benefits in practicing this concept.</p>

<p>Paul deals with this very topic in 1 Corinthians 2 and 3. He explains why some believers lack joy and the power of the Holy Spirit in their lives when he writes about the natural person, the spiritual person and the worldly person.<br />
<img alt="Three types of people" src="@/assets/images/eng/tc/transferable-concepts-image-22.png" /></p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ The Natural Person</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>The natural person is one who depends on his own resources.</p>

<p>This person says, &ldquo;I&rsquo;ll do it my way.&rdquo; He is not a Christian and therefore cannot truly grasp the truths of God&rsquo;s Word. He is self-sufficient. His interests and ambitions are worldly and self-centered. Though he may appear to have his act together, spiritually he is dead. (Death is our only birthright until we invite Jesus into our lives.)</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ The Spiritual Person</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>The Spiritual Person is one who is born again into life everlasting. This person realizes, I cannot make it on my own. I admit that I need God. He is indwelt and guided by the Holy Spirit, who makes it possible for him to understand the truths of God&rsquo;s Word. The spiritual person is alive! He has a vital relationship with the Lord. And because he is a channel of the Holy Spirit&rsquo;s power, he is constantly bearing fruit.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ The Worldly Person</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>The main topic of this chapter is the Worldly Person. Though he is born again,&nbsp; he has not tapped into the rich inheritance of his heavenly Father. Instead, he continues to live like a condemned man. He often looks as if all is well. He may teach Sunday School, pastor a church, or give years of his life in some remote mission field leading others to Christ. But it is a cover-up.</p>

<p>The bottom-line reality is that a worldly person is defeated. If he is honest, he will admit that his Christianity lacks real joy. He is constantly frustrated. In desperation, he valiantly tries to live a life pleasing to God, but instead of drawing on the source of power, the Holy Spirit, he relies on his own energy and creativity for the strength he needs, and he runs into problems.</p>

<p>Other things reflect the worldly person&rsquo;s lifestyle. He may attempt to hold tightly to God, but simultaneously refuse to loosen his grasp on material, earthly things. He finds himself possessed by his possessions. At the same time, he tries to tune- in to spiritual matters. Jesus Himself said it is impossible to serve two masters. Though the worldly person sincerely tries to please God, he is spinning his spiritual wheels. Romans 8:7 explains why: &ldquo;The old sinful nature within us is against God. It never did obey God&rsquo;s laws, and it never will&rdquo; (The Living Bible).</p>

<p>Tremendous freedom comes wrapped up in this truth: It is our faith in God that pleases Him, never our efforts, despite our courageous attempts or heartfelt sincerity. Our only hope for victory over this carnal tendency, is trusting Christ to live His resurrection life in and through us. His forgiveness becomes ours when we become His children. We only need to accept it&mdash; a fact the worldly person does not comprehend.</p>

<p>The worldly person may not cling to his own strength simply by choice. It&rsquo;s possible that he suffers from a lack of accurate information, or he may be confused about who God really is and what He can do in a person&rsquo;s life.</p>

<p>Consider the story of a poor immigrant who once bought passage on a ship to the United States. He had only enough money left over to buy a few crackers and a small block of cheese which he rationed carefully over the first few days</p>

<p>of the voyage. But his hunger grew. He watched the ship&rsquo;s waiters dashing past him, carrying trays of succulent fruits and vegetables, fat chickens and juicy steaks to the other passengers. Finally the aromas overpowered his fears, and he stopped a waiter.</p>

<p>&ldquo;Please,&rdquo; he begged the surprised man. &ldquo;I am weak from hunger. I&rsquo;ll do anything to earn a meal&mdash;clean rooms, swab decks, wash dishes&hellip;.&rdquo;</p>

<p>&ldquo;Did you stow away?,&rdquo; the waiter asked. The man shook his head. &ldquo;Then why haven&rsquo;t you eaten? The price of your ticket includes your meals. You&rsquo;ve already paid for them. You only have to come and eat!&rdquo;</p>

<p>Do we live like spiritual stowaways when all the benefits of a first-class passage are ours to claim? How sad to condemn ourselves to cheese-and-cracker Christianity when Jesus invites us to &ldquo;come and dine&rdquo; with Him at the table of honor.</p>

<p>Is it possible that you believe in God and have given Him your life, yet you continue to live as though He does not exist? Do you ask Him to guide, then move on as if He does not care bout your life? Are you ready to make a change and begin to draw on the incredible power of the Holy Spirit? He invites you to come to that turning point right now.</p>

<p>All it takes is faith:&nbsp; trusting God to be just what He claims to be. Jesus said we would be able to do even greater works than He did if we believe that He means what He says (John 14:12). Whatever we ask in His name, He says He will do (John 14:14). You do not have to live a defeated, carnal, guilt-ridden life. You have a choice.</p>

<p>Our loving Lord commands us to come away from our carnality and become the fruitful witnesses He calls us to be in John 15:16. The best part is that He Himself has both the power and the desire to bring us to experiencing true love and forgiveness in Him.</p>

<p>And so, as weak as our faith may be, we begin by placing it in a trustworthy God. That is the first step toward growth. Like a muscle, faith must be exercised if it is to become strong and useful.</p>

<p>We are like the man moving with great caution across a frozen lake in winter&rsquo;s cold. At first, he fears his next step will find him treading the black, freezing waters just below the surface. But every step that holds his weight confirms and increases his belief that the ice will hold his weight. When we place our trust in God, the result will always be a stronger faith, for the better we know Him, the more we know he deserves our trust.</p>

<p>Other things&mdash;seemingly unimportant&mdash;have a surprising effect on our faith as it is maturing. I had a memorable demonstration of this one afternoon while playing with my small son. It was his turn to operate the controls of his model train set, and for several minutes we enjoyed the wonderful little engine puffing around make-believe hills and valleys right on schedule. Then, for no apparent reason, it stopped. He tried the switch again but nothing happened. I took the little engine off the tracks and checked the connections. I wiggled the plug in the socket. Everything seemed to be as it should be, but the train would not go. Then my son spied a felled traffic sign at a crossing. Though not very big, it had fallen across the tracks, connecting the positive and negative rails and bringing the train to a stand still. The little sign had short-circuited the power.</p>

<p>Sin&mdash;even &ldquo;unimportant&rdquo; sin&mdash;can do the same thing in the life of a Christian. It can never affect God&rsquo;s love for us. That never changes! God loves us with an inexhaustible love. He loves us, not just &ldquo;when&rdquo; or &ldquo;if &rdquo; we deserve His love, but even when we are disobedient. One of my most moving discoveries in my study of the Scriptures was the statement of our Lord in His high-priestly prayer to God the Father, as recorded in John 17:23 (TLB): &ldquo;&hellip;so that the world will know you sent me and will understand that you love them as much as you love me.&rdquo;</p>

<p>Think of it: God loves you and me as much as He loves the Lord Jesus Christ, His only begotten Son. Incredible! But true! Though God hates sin and will chasten or punish His children when we are disobedient, He never ceases to love us. &ldquo;Whom the Lord loves, He disciplines&rdquo; (Hebrews 12:6). In fact, He disciplines us because He loves us, not because He hates us. He hates only our sin.</p>

<p>So, if we want His uninterrupted power flowing through our lives, it is our responsibility to confess any known sin. Then we can experience afresh God&rsquo;s forgiveness because of Jesus&rsquo; death in our place. Confession is as necessary and natural to the normal Christian life as breathing is to our physical existence.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ Spiritual Breathing</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>In fact, it is breathing&mdash;spiritual breathing. We &ldquo;exhale&rdquo; by breathing out a confession to God, expelling the sin in our lives. We &ldquo;inhale&rdquo; as we breathe in the Holy Spirit, appropriating his fullness by faith. Spiritual breathing is a principle enabling us as believers to live consistent Christian lives. It is the &ldquo;breath of life.&rdquo;</p>

<p>Consider with me the principles of spiritual &ldquo;exhaling&rdquo; as they apply to the Christian life. (We will discuss the process of spiritual &ldquo;inhaling&rdquo; in the following chapter.) We read in 1 John 1:9, &ldquo;If we confess our sins, He [God] is faithful and righteous to forgive us our sins and to cleanse us from all unrighteousness.&rdquo; The word confess (in the Greek, homologeo) suggests agreement with God concerning our sins. Confession is a threefold process:</p>

<p><em>Acknowledgment of our sin.</em> We need to be specific about our sin before God, and agree with Him that what we have done is wrong, and grievous in His sight.</p>

<p><em>Acceptance of His forgiveness.</em> We must also agree with God that Jesus&rsquo; death on the cross bought the forgiveness we need for all our sins&mdash;past, present and future. We must accept the fact that there is nothing we can add to what He has done for us.</p>

<p><em>Repentance.</em> We must repent, we must change our attitude toward sinning. The Holy Spirit offers us the power we need, and when we accept His power, our conduct will change. Our sinful nature is no longer in charge. It is powerless under the control of the Holy Spirit. We are once again free to do what God wants us to do.</p>

<p>If you would like to breathe spiritually, there is a simple exercise you can do right now that will help you.</p>

<p>Humble yourself before God and ask the Holy Spirit to reveal to you sin that is in your life. With pencil and paper, list every sin that He brings to mind. Give Him sufficient time to show you the areas in your life which need change. Meditate on Psalm 32:1-6, &ldquo;Search me, O God, and know my heart; test my thoughts. Point out anything you find in me that makes you sad&rdquo; (TLB).</p>

<p>When you have completed your list, write across the top the indelible promise of I John 1:9: If we confess our sins, He is faithful and righteous to forgive us our sins and to cleanse us from all unrighteousness!</p>

<p>Now, destroy your list and thank God for His forgiveness and cleansing through His Son&rsquo;s death on the cross. His precious blood was spilled for your sins.</p>

<p>Keeping the channels open for God&rsquo;s power to flow through our lives allows us to experience love and forgiveness in our Christian walk. It is the ingredient that transforms ordinary men and women into extraordinary, dynamic disciples of Jesus Christ!</p>

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

			<td class="social" @click="share('lesson', 'How to Experience God’s Love and Forgiveness: ', '/content/M2/eng/tc/tc02.html')">
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