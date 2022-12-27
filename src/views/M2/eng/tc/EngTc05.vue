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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>How to Witness in the Spirit</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
        <button id="MC2/eng/audio/tc/tc05.mp3" type="button" class="external-audio">
           Listen to &nbsp;"TC #5: How to Witness in the Spirit"&nbsp; </button>
          <div class="collapsed"></div>
        

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Introduction</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>&ldquo;It was awful,&rdquo; he said, shaking his head sadly.&nbsp; &ldquo;I just froze.&nbsp; Right when I should have presented him with the gospel, I forgot everything I&rsquo;ve ever heard about leading a friend to Christ.&nbsp; It was so awkward, so uncomfortable&hellip; for both of us.&rdquo;&nbsp; He stuffed his hands into the pockets of his jeans, &ldquo;I guess I really blew it this time!&rdquo;</p>

<p>No doubt my young frustrated friend is expressing some of the feelings we have all had when trying to lead someone to Christ.&nbsp; It is without a doubt the most important experience in a person&rsquo;s life, but when we are not prepared it can cause us much unnecessary confusion and discomfort.</p>

<p>The lost are hungry for Jesus Christ, but the majority of Christians have never led another soul to Christ, basically for two reasons:&nbsp; First, the average Christian does not live a victorious, Spirit-controlled life; and, second, most do not know how to communicate their faith in Christ to others effectively.</p>

<p>If you have been among the ranks of those who desire to share Christ but have not been as productive as you would like to be, the scriptural plan for witnessing on the next few pages will be of vital interest to you.&nbsp; If taken to heart and practiced, it will give you the active, involved, and fruitful role you have hoped for in your everyday contact with people.&nbsp; It consists of eight simple steps, designed to help you become a fruitful witness.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 1.&nbsp; Be certain you are a Christian</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>There is no way a person who wants to introduce others to Christ can be used effectively unless he has first become a Christian himself.&nbsp; You must be sure that you have invited Jesus Christ to be the Lord and Savior of your life.&nbsp; It is the first and most indispensable step.&nbsp; It is where the Christian walk begins.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 2.&nbsp; Confess any sin in your life</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>We must be sure that there is no unconfessed sin in our lives, for sin separates us from God.&nbsp; We are sure to be &ldquo;up-to-date&rdquo; on this issue as long as we continue to breathe spiritually, &ldquo;exhaling&rdquo; to expel sin in regular confession to God.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 3.&nbsp; Be filled with the Holy Spirit</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>It is imperative that we be filled with the Holy Spirit, constantly &ldquo;inhaling&rdquo; spiritually to appropriate anew the limitless power He makes available to His children.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 4.&nbsp; Be prepared to share your faith</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>We must be prepared to share our faith in Christ with others whenever the occasion arises.&nbsp; Our seminaries and Bible schools are doing a wonderful job of preparing Christians to present the gospel of Jesus Christ in effective and dynamic ways around the world.&nbsp; Yet each of us can expect to be used of God right where we are, with nothing more than the knowledge we have gained today.</p>

<p>When we couple a willing heart with the empowering of the Holy Spirit, souls are won to Christ.&nbsp; A testimony that touches the hearts of the lost does not depend on professional training.&nbsp; The gospel of Jesus Christ is simple enough for any child to grasp, and we do not need degrees in theology to help people come to know Christ personally.</p>

<p>Jesus said, &ldquo;All authority has been given to Me in heaven and on earth.&rdquo;&nbsp; And then He commanded us, &ldquo;Go therefore and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit, teaching them to observe all that I commanded you&rdquo; (Matthew 28: 18-20). But He never sends us out alone.&nbsp; The final words of Matthew&rsquo;s letter are a gentle promise to all Christians.&nbsp; Jesus said, &ldquo;And lo, I am with you <em> always</em>, even to the end of the age.</p>

<p>Amazing as it seems, God has chosen to limit the expression of His love to human beings here on His earth.&nbsp; He has no arms but ours, no heart but ours, no voice without the voice of His children.&nbsp; We are a vital part of His plan to reach the rest of the world with His love.&nbsp; We are &ldquo;carriers.&rdquo;&nbsp; Yet our only responsibility is to follow Him; it is up to Him to make us effective witnesses.&nbsp; If we are <em>obedient</em>, He will use us greatly in this exciting adventure to win the world!</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ 5.&nbsp; Remember to pray</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p>We are to pray for those we hope to win to Christ.&nbsp; The Bible tells us that God is not willing that any should perish, but that all should come to repentance.&nbsp; &ldquo;He isn&rsquo;t really being slow about his promised return, even though it sometimes seems that way.&nbsp; But he is waiting, for the good reason that he is not willing that any should perish, and he is giving more time for sinners to repent&rdquo; (2Peter 3:9, TLB).&nbsp; He also promises that if we ask anything according to His will, He will hear and answer.&nbsp; And we are sure of this, that he will listen to us whenever we ask him for anything in line with his will.&nbsp; And if we really know he is listening when we talk to him and make our requests, then we can be sure that he will answer us&rdquo; (I John 5: 14, 15, TLB).&nbsp; The promise does not mean that everyone who hears the gospel will follow Christ, but there is no way we can tell who will choose Christ and who will reject Him.&nbsp; Though some will hear the gospel and choose to walk away, it is our responsibility &ndash; and privilege &ndash; to pray for the lost, for God honors our prayers.</p>

<p>Begin by making a prayer list and naming those whom the Holy Spirit lays on your heart.&nbsp; Then daily claim them for God; you have the authority to do this based on the Scriptures mentioned above.&nbsp; As you pray, continue to share Jesus&rsquo; love in every way possible.&nbsp; We are not always able to <em>speak</em> the gospel; sometimes we are limited to living it quietly, but we can be confident that the seeds are being planted and the Spirit is at work!&nbsp; As the unsaved experience your unmerited love for them, the Holy Spirit will work in their hearts, drawing them to Himself in time.</p>

<p>Sometimes we are allowed to share in the joy of those we pray for as they turn their lives over to Christ.&nbsp; Others may require years to become Christians.&nbsp; Still others may appear &ldquo;hopeless&rdquo; in our eyes, refusing to accept any part of Christianity.&nbsp; Do not give up hope.&nbsp; God works in unpredictable ways.&nbsp; Just pray, and leave the outcome to the Lord.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ 6.&nbsp; Go tell others about Christ</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p>We do not have to wait for men to come to us.&nbsp; We can, and should, take the Good News to them.&nbsp; But one of the most difficult hurdles in witnessing is getting started.&nbsp; Satan loves to fill us with excuses:&nbsp; &ldquo;I&rsquo;m just too busy right now,&rdquo; or &ldquo;I really don&rsquo;t know what to say to someone about Christ.&rdquo;&nbsp; We are not alone.&nbsp; The Holy Spirit goes with us.&nbsp; In fact, He has <em>preceded</em> us in every step, preparing the hearts of the people to whom we will speak.&nbsp; Jesus has told us to tell the Good News to all men.&nbsp; We can count on Him to uphold us and strengthen us as we do what He has asked us to do.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><h2>+ 7.&nbsp; Talk about Christ</h2></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->

<p>Paul says, &ldquo;Everywhere we go we talk about Christ to all who will listen&rdquo; (Colossians 1:28, TLB).&nbsp; Paul set a precedent for us to follow, but he was sensitive to his hearer&rsquo;s choice to listen.&nbsp; He did not force-feed the gospel.&nbsp; There will be some people who seem to insist on remaining on a superficial level with us, who refuse to open their ears or their hearts to the Good News.&nbsp; Though it may be frustrating, we must be sensitive to the leading of the Holy Spirit, in seeking <em>His timing</em>.&nbsp; He will lead, and make opportunities available as He sees fit.</p>

<p>When I was just a lad, my family used to visit my uncle&rsquo;s home in the country.&nbsp; For miles before we turned into the winding, gravel driveway to the big, old white house, I could smell the tantalizing perfume of fat, juicy peaches blowing through the open windows.&nbsp; Within minutes after our arrival, my Aunt Sara would send my cousin and me into the orchard to fill a bushel basket between us, and we would come back hours later, the basket and our bulging tummies full to overflowing.</p>

<p>It did not take me long to learn that the best peaches for picking &ndash; and eating &ndash; were the <em>ripe</em> ones!&nbsp; We left the green fruit on the trees until we were dispatched to the orchard again for another basketful.&nbsp; I soon discovered something wonderful had happened in our absence.&nbsp; The fruit that we had left on the trees because it was green and hard, had become pink-cheeked and juicy, just perfect for one of Aunt Sara&rsquo;s heavenly cobblers.</p>

<p>The same is true of witnessing.&nbsp; We must become sensitive to the &ldquo;ripeness&rdquo; of the heart receiving our witness.&nbsp; Some will be ready the first time they hear.&nbsp; Others will need time, and more prayer, before they will receive Christ into their lives.&nbsp; It is not our responsibility to pressure them into &ldquo;making a decision for Christ.&rdquo;&nbsp; Consider leaving them with some well-chosen literature, and remain open to the leading of the Holy Spirit about talking to them further at a later time.</p>

<p>As those who are ready to consider the claims of Christ become open to your witness, remember to encourage them to invite Him into their lives.&nbsp; Many hearts are ready to receive Him but are ignorant of how to become a believer.&nbsp; Gentle, sensitive guidance, often with an aid like the Four Spiritual Laws booklet, will show them, step-by-step, how to turn their hearts over to God&rsquo;s control.&nbsp; That aid also helps in keeping the conversation centered on Christ without getting side-tracked into distracting issues.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary8" class="summary"><h2>+ 8.&nbsp; Expect hearts to respond to the gospel</h2></div>
<div class="collapsed" id ="Text8">
<!-- end default revealSummary -->

<p>We can be confident in the power of the God of creation.&nbsp; He is sovereign.&nbsp; He is omnipotent.&nbsp; And He is not willing that any should perish.&nbsp; Like salespersons who never get the hang of selling door-to-door, some Christians approach the lost with a &ldquo;you-wouldn&rsquo;t-be-interested-in-becoming-a-Christian&rdquo; attitude right off the bat.</p>

<p>We have nothing to be ashamed of.&nbsp; The Lord of our lives is the Lord of all, the King of Kings!&nbsp; We need to witness with a spirit of expectancy.&nbsp; God goes before us to prepare hearts, to ripen them in His time.&nbsp; There are those who wait without Christ, who are eager to find Him.</p>

<p>Satan, the &ldquo;father of lies,&rdquo; would have us believe that people are not interested in finding God.&nbsp; We have allowed ourselves to be deceived into thinking that hearts will not be responsive to the gospel.&nbsp; But these are crucial and exciting times in which we live today!&nbsp; The Holy Spirit is at work among students, and lay people, worldwide.&nbsp; People are coming to Christ in steady streams.&nbsp; There is an insatiable thirst for Jesus Christ, the living water (John 4: 10-15).</p>

<p>Make no mistake, it is not religion that men and women seek today.&nbsp; For the most part, they want nothing to do with church and organized rules to live by.&nbsp; What they do want is the experience of a real and vital relationship with the Savior.&nbsp; Religion is man&rsquo;s search for God.&nbsp; Christianity is so much more:&nbsp; It is God&rsquo;s revelation of Himself to&nbsp; man in the person of Jesus Christ.&nbsp; If, in love, we confront people with the claims of Christ, we will see many respond to His love and forgiveness.&nbsp; But the responsibility for their decision rests with the Holy Spirit.</p>

<p>We at Campus Crusade for Christ sincerely believe that success in witnessing is simply sharing Christ in the power of the Holy Spirit and <em>leaving the results to God</em>.</p>

<p>Learn these easy-to-follow guidelines for witnessing in the Spirit.&nbsp; Put them to work in your life and watch the results.&nbsp; If you have been sitting on the witnessing sidelines watching others win people to Christ, this will change your life&hellip;.. and the lives of those who hear the gospel because of you!</p>

</div>

<h2>Application</h2>

<ol>
	<li>What did you like best (what caught your attention)?</li>
	<li>Why?</li>
	<li>To whom should I pass along this information?</li>
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


<p><br />
Adapted from <em>The Transferable Concepts</em> by Bill Bright. All rights reserved.</p>


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

			<td class="social" @click="share('lesson', 'How to Witness in the Spirit: ', '/content/M2/eng/tc/tc05.html')">
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