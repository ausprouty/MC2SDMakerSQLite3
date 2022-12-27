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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>How to Love By Faith</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
        <button id="MC2/eng/audio/tc/tc08.mp3" type="button" class="external-audio">
           Listen to &nbsp;"TC #8: How to Love By Faith"&nbsp; </button>
          <div class="collapsed"></div>
        

<div>
<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Introduction</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>Maybe you&rsquo;ve known someone like Georgia&hellip;.. you wouldn&rsquo;t class her as a friend, but she&rsquo;s not an enemy either.&nbsp; She&rsquo;s a person you tolerate because she shares an office in the same suite as you.&nbsp; She says she attends church, but she doesn&rsquo;t act like a child of God.&nbsp; Her conversation is sprinkled with four-letter words and laced with the most recent &ldquo;news&rdquo; about fellow employees.</p>

<p>You have kept your distance because you didn&rsquo;t want to be associated with her, but Georgia needs to be loved and God has laid it on your heart to love her.&nbsp; Is it really possible to love someone like that?</p>

<p><em>Man&rsquo;s greatest need is to be loved.</em>&nbsp; We all seek to give it and we all yearn to receive it.&nbsp; Few barriers can resist the mighty force of love, especially God&rsquo;s love.&nbsp; It was God&rsquo;s love that changed the course of history.&nbsp; First-century Christians&rsquo; love for one another was what set them apart from the rest of the world.</p>

<p>At the time of Christ, hatred was the common practice for Greeks, Romans &ndash; and Jews.&nbsp; Racism, caste systems, wars and prejudice reigned and ruled.&nbsp; So when the followers of Jesus &ndash; a sharply diverse group &ndash; demonstrated love to one another, the rest of the world sat up and took notice.&nbsp; Jesus had said, &ldquo;By this all men will know that you are My disciples, if you have love for one another&rdquo; (John 13:35).&nbsp; He was right.&nbsp; Onlookers watched and responded in amazement, &ldquo;Behold how these people love one another!&rdquo;&nbsp; Soon many of them joined the revolution of love as it swept their world.</p>

<p>The Greek language gives us a better understanding of the various, even unrelated meanings, but Greek is much more specific.</p>

<p><em>Eros</em> is a word meaning love, but it actually speaks of sensual desire; it is not used in the New Testament.</p>

<p><em>Phileo</em>, a second word for love refers to the kind of love found between friends or relatives, and conveys a sense of loving someone because he is worthy of our love.</p>

<p><em>Agape</em> is the third, and purest kind of love.&nbsp; It is used to describe the love God has for us.&nbsp; It is not expressed merely through emotions but is often an act of the will.&nbsp; It is God&rsquo;s supernatural love for us revealed supremely through our Lord&rsquo;s death on the cross in our place.&nbsp; It is the Godlike love He longs to reproduce in us and through us to others, and its source is the Holy Spirit.</p>

<p>Agape is love based on the character of the person doing the loving.&nbsp; It&rsquo;s not dependent on whether the subject of the love is worthy.&nbsp; Sometimes it is love &ldquo;in spite of,&rdquo; but never love &ldquo;because of.&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ A New Commandment</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>The Lord Jesus gave His disciples a new commandment which applies to us today.&nbsp; He said, &ldquo;Love each other just as much as I love you&rdquo; (John 13:34, TLB).&nbsp; But what kind of love was He referring to?&nbsp; To answer that we must explore the kind of love with which He has loved us.</p>

<p>God&rsquo;s love was expressed through His only Son, Jesus, &ldquo;that whoever believes in Him should not perish, but have eternal life&rdquo; (John 3:16).&nbsp; It is the very same love that kept the Son of God hanging on the cross in our place to die for our sins.&nbsp; It is the divine, supernatural, unconditional love that God makes available to believers with the command that we are to love one another.</p>

<p>Is it possible that you and I can love with Godlike love?&nbsp; Had the day of Pentecost not occurred, God&rsquo;s love would never have been duplicated in human form.&nbsp; But with the outpouring of the Holy Spirit the disciples found themselves able to love each other as Jesus had.&nbsp;&nbsp; They even miraculously came to love their enemies, the angry mobs who had crucified their Lord.&nbsp; The very people who threatened their lives were seen in a new light.</p>

<p>That love, that agape love, is available to us today.&nbsp; It is not an emotional experience but a divine, supernatural power that originates with the Father.&nbsp; This kind of love flows through the Holy Spirit to us, and on through us to those in the world around us.&nbsp; This is what makes it possible for us to love someone like Georgia.</p>

<p>As we acquire God&rsquo;s love within us and learn to incorporate His loving ability into our lives, there are several things we need to know about this powerful love that is ours.</p>

<p><strong><em>God loves us with unconditional love!</em></strong>&nbsp; We are loved because of Him, not because of us.&nbsp; His love for us is never based on our performance.&nbsp; He loves us in spite of our disobedience, weakness, sin and selfishness.&nbsp; His love is so great that He chose to love us, even to die for us while we were still sinners (Romans 5:8).&nbsp; His love is unconditional and completely undeserved.</p>

<p><em>We are commanded to love.</em>&nbsp; A wealthy, successful young lawyer from the Sanhedrin once approached Jesus with a question his own quick, trained mind could not answer.&nbsp; &ldquo;Sir,&rdquo; he said, &ldquo;which is the most important command in the law of Moses?&rdquo;&nbsp; Jesus answered without a hesitation.&nbsp; &ldquo;Love the Lord your God with all your heart and with all your soul and with all your mind,&rdquo;&nbsp; He said.&nbsp; &ldquo;This is the great and foremost commandment.&rdquo;&nbsp; The second greatest commandment?&nbsp; Jesus chose, &ldquo;Love your neighbor as yourself&rdquo; (Matthew 22: 36-40).</p>

<p>Every other commandment, every other law given by God or designed by man, finds its roots in one of these two which Jesus said were the most important of all.&nbsp; Keep these two laws and you are fulfilling them all.&nbsp; And then Jesus added His own, &ldquo;This I command you, that you love one another&rdquo; (John 15:17).</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ Our Own Efforts</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p><em>We cannot love in our own strength.</em>&nbsp; We often refuse to love unlovely people.&nbsp; It is easier to love the &ldquo;beautiful&rdquo; people.&nbsp; Or to love those who are good to us, and those who appreciate what we do for them.&nbsp; Why love anyone who is unattractive, or peculiar, or grouchy or disagreeable?&nbsp; Or why even try to love those who just don&rsquo;t love us?&nbsp; First, because God says we must.&nbsp; Second, He provides the strength to obey His every command.&nbsp; In ourselves we have neither the power nor the motivation to love the unlovely, and the Bible explains why:&nbsp; &ldquo;The old sinful nature within us is against God.&nbsp; It never did obey God&rsquo;s laws, and it never will&rdquo; (Romans 8:7, TLB).</p>

<p>We cannot demonstrate agape love, God&rsquo;s unconditional love for others, through our own efforts.&nbsp; We can resolve over and over to love someone who gets on our nerves and within a matter of days (if it takes that long) we fall right back into our old patterns of avoidance and procrastination, or whatever we are best at.&nbsp; By nature we are too proud to &ldquo;stoop to such lowly measures and attempt to love someone who does not love us in return or even appreciate our efforts on his behalf.&nbsp; Our pettiness and jealousies, our pride and selfishness block our path to obedience.&nbsp; It&rsquo;s humanly impossible to love others the way Jesus tells us to love.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ With God&rsquo;s Love</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>But with God in our lives, and through the empowering of the Holy Spirit, God enables us to be different from what we are naturally.&nbsp; He provides the motivation we lack, the ability to love, the creativity to show our God-love.&nbsp; It is a new kind of love altogether.</p>

<p><strong><em>We can love with God&rsquo;s love.</em></strong>&nbsp; It was God&rsquo;s kind of love that brought us to Christ.&nbsp; It is this same love that sustains and encourages us each day.&nbsp; It empowers us to minister to fellow believers as we have been commanded.&nbsp; This is the same love that brings others to a saving knowledge of Jesus Christ.</p>

<p>But how do we get God&rsquo;s love into our lives?&nbsp; It and the Holy Spirit are inseparable; when we receive Him, we receive His love.&nbsp; Scripture reminds us, &ldquo;We feel this warm love everywhere within us because God has given us the Holy Spirit to fill our hearts with His love&rdquo; (Romans 5:5, TLB).&nbsp; God is a Spirit and the fruit of the Spirit is love (Galatians 5:22).&nbsp; When we are controlled by the Spirit we are filled with His love.</p>

<p>And so we are filled with God&rsquo;s love and ready to love the world with this remarkable, unconditional, boundless love.&nbsp; But can we make this love a practical reality in our lives?&nbsp; How will others ever know they are loved if we cannot show them?</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ Love By Faith</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p><strong><em>We love by faith!&nbsp;</em></strong> Everything about the Christian life is based on faith;&nbsp; nothing we have received from God has come to us except through faith.&nbsp; We love by faith just as we received our salvation&nbsp; -&nbsp; by faith.&nbsp; We love by faith just as we walk by faith.&nbsp; We love by faith just as we are filled with the Holy Spirit.</p>

<p>Is there a limit?&nbsp; Yes.&nbsp; After we are able to love others as much as Jesus loves us, we can stop.&nbsp; It is God&rsquo;s will to love each other, and He does not command us to do anything that He will not enable us to do.&nbsp; We are reminded in I John 5: 14, 15 that anything we ask according to His will He hears and answers.&nbsp; Do you want to love with God&rsquo;s love?&nbsp; Simply claim His promise as it relates to His command to love, and take it by faith.</p>

<p>A fellow worker and I had had a disagreement.&nbsp; I was finding it extremely difficult to work with him.&nbsp; I wanted to love him, and I knew that I was commanded to do so; yet, it was more than I could do.&nbsp; I could not generate the love I needed for this person.&nbsp; And then I was reminded of I Peter 5:7 where I am told to cast my anxiety on God because He cares.&nbsp; In obedience I gave the problem and my inability to solve it back to God, and claimed His love for this man by faith.&nbsp; The troubled feelings I had harbored in my heart were gone the moment I considered the problems in God&rsquo;s capable hands.</p>

<p>Within a few hours someone slipped a note under my door.&nbsp; To my surprise it was an unexpected letter of apology from this man I had disagreed with.&nbsp; Without knowing about my decision to love him, he too had decided that love was the answer.&nbsp; We met for coffee and prayer, and the fellowship we shared that afternoon was warmer and more rewarding than any we had ever shared.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ Love Yourself</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p>Make a list of the people you don&rsquo;t like and claim the promise of I John 5: 14, 15.&nbsp; And begin now to love them by faith in this promise from God.</p>

<p>Do you love yourself?&nbsp; Perhaps you will find your own name on your list.&nbsp; The truths of I Corinthians 13 (entire chapter) apply to ourselves as well, and can be claimed for ourselves by faith the same as we would claim them for anyone else.&nbsp; Ask God to give you His eyes so that you can see yourself as He sees you.&nbsp; Jesus loves you without reservation, unconditionally.&nbsp; He loves you so much that he died for you while you were still in sin, unaware of your need for His forgiveness.&nbsp; If He &ndash; God Himself &ndash; can love you that much, who are you to disagree?</p>

<p>Pray for each person on your list, asking the Holy Spirit to fill you with God&rsquo;s love for everyone of them.&nbsp; The next time you meet or talk to someone on your list, draw upon His limitless, inexhaustible, overwhelming love for them as an act of faith.&nbsp; Expect God to work through you by faith.&nbsp; Expect Him to use your smile, your gentle words, your patience to express His love to them.</p>

<p>Try this love on each &ldquo;enemy&rdquo; in your life &ndash; everyone who angers you or ignores you, or bores you, or belittles you, every frustrating human being you know.&nbsp; Then wait to see the results.&nbsp; Men and Women around us are just waiting, longing to be loved with God&rsquo;s irresistible love.</p>

<p>The road home seemed longer than usual that rainy April night.&nbsp; The man at the steering wheel had just learned about God&rsquo;s command to love unconditionally as God Himself loves His children.&nbsp; And now, with the windshield wipers beating out a steady cadence he could not shake the picture of his own son.</p>

<p>It had been a foolish argument over&hellip;. Funny, he could not even recall what they had argued about, but Wayne had stomped from the house and he had not heard from him since.&nbsp; It had been months now, and he did not know whether his boy was dead or alive.&nbsp; The knot of longing in his middle was growing.&nbsp; &ldquo;Oh, God,&rdquo;&nbsp; he cried out into the darkness, &ldquo;I won&rsquo;t believe that Wayne is dead.&nbsp; You know I need to make things right with him.&nbsp; In spite of everything, I want to tell him that I love him.&rdquo;&nbsp; Tears pushed their way down his cheeks and disappeared into his greying beard.&nbsp; &ldquo;Please, Father,&rdquo;&nbsp; he whispered hoarsely, &ldquo;let me tell my son how much I love him.&rdquo;</p>

<p>He turned the corner and glanced at the house.&nbsp; Could he be seeing things?&nbsp; The light in Wayne&rsquo;s room was on.&nbsp; It could only mean that the boy was back.&nbsp; Leaving the car in the driveway he rushed through a downpour into the house.&nbsp; &ldquo;Wayne,&rdquo; he called.&nbsp; &ldquo;Son, is that you?&rdquo;</p>

<p>Into the early hours of the morning the father and son talked.&nbsp; &ldquo;I was so scared to come home, Dad,&rdquo; the boy said.&nbsp; &ldquo;You have every right to hate me.&rdquo;</p>

<p>&ldquo;I don&rsquo;t hate you, son,&rdquo; the father said.&nbsp; &ldquo;God and I love you&hellip;. Just the way you are.&rdquo;&nbsp; The father and son embraced.&nbsp; &ldquo;We&rsquo;re going to make it; you, me&hellip; and God.&rdquo;</p>

<p>How exciting to have such a dynamic joyful force available to us! And it all comes from our loving Savior, Jesus Christ.&nbsp; He promises that all we need is available to us in His Word.&nbsp; We need not guess, nor hope, nor wish;&nbsp; we only need to claim His love by faith, right now.</p>

<p>Memorize and claim I Corinthians 13 and ask the Lord to cement its truth into your life day by day as you draw, by faith, on the limitless resources of love that are yours through the Holy Spirit.&nbsp; It has changed the lives of millions.&nbsp; Let it change yours by praying the following prayer.</p>

<blockquote><em>Lord, who calls Yourself Love, I choose to obey Your command to love like You do.&nbsp; I claim Your promise to enable me to love by faith, and I trust You to empower me with the perfect love of Your Holy Spirit.</em></blockquote>

</div>

<h2>Recommended Assignments</h2>

<p><strong>Reflect:</strong>&nbsp;&nbsp; I know that I should love others.&nbsp; Even my so-called enemies.&nbsp; But there is this one person in my life who is simply impossible---- what should I do?</p>

<p><strong>Interpret:</strong>&nbsp;&nbsp; The poets and songwriters have much to say about love.&nbsp; But there is one love letter that will change your life.&nbsp; The Scriptures record the greatest love story ever told.&nbsp; It is summarized in John 16; outlined in I Corinthians 13; commanded in John 13:34; and portrayed throughout the Psalms.&nbsp; Noticed love&rsquo;s relationship to prayer by meditating on John 17.&nbsp; Look up the word love in a concordance and see what a challenging topical study it makes.</p>

<p><strong>Apply:</strong>&nbsp; Make a list of those whom you are having difficulty loving as God loves.&nbsp; Hypocrisy creeps in unawares.&nbsp; We put on our politeness mask and pretend everything is O.K.&nbsp; But there is someone in your life right now who is waiting to see your agape love in action &ndash; without any selfish pretentions.&nbsp; Choose today to pray for each person on your list.&nbsp; Expect to see results.</p>

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

<br />
Adapted from <em>The Transferable Concepts</em> by Bill Bright. All rights reserved.</div>


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

			<td class="social" @click="share('lesson', 'How to Love By Faith: ', '/content/M2/eng/tc/tc08.html')">
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