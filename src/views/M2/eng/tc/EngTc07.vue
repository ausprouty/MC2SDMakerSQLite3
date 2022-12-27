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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>How to Help Fulfill the Great Commission</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
        <button id="MC2/eng/audio/tc/tc07.mp3" type="button" class="external-audio">
           Listen to &nbsp;"TC #7: How to Help Fulfill the Great Commission"&nbsp; </button>
          <div class="collapsed"></div>
        

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Introduction</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>Today we would call it a strategy meeting; the &ldquo;Coach&rdquo; and the &ldquo;players&rdquo; together in a &ldquo;huddle&rdquo; on a mountain in Galilee. The risen Lord had a plan, one that would reach the entire world. Christians call this global strategy &ldquo;the Great Commission.&rdquo; What was said on the mountain has affected generation upon generation of believers. Had it not, few today would be experiencing the love and forgiveness of God&rsquo;s grace.</p>

<p>The disciples leaned close as Jesus said, &ldquo;All authority has been given to Me in heaven and on earth. Go therefore and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit, teaching them to observe all that I commanded you&rdquo; (Matthew 28: 18-20). It was the greatest promise ever recorded!</p>

<p>In this article we will be looking at the who, what, why, when, where and how of the Great Commission.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ Who Mobilized the Great Commission?</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>And to whom was it directed?</p>

<p>Who would dare claim &ldquo;all authority&hellip; in heaven and on earth&rdquo;? There could be only one answer. It would have to be the unique God/Man Himself, Jesus Christ, the very So of God. At Jesus&rsquo; birth, God became man. He allowed other men to put Him to death on a cross, but three days later was raised from the dead. His death and resurrection saved the human race from the power of sin and provided eternal life for all who would believe. The result was a spiritual revolution that upset the first century world and altered the course of history.</p>

<p>As Christ walked the earth He had the power to change lives. That same life-changing power is available today. His life spans centuries because He was &ndash; and is &ndash; God! Though it was His disciples who heard Him speak the words of the great Commission, their impact continues to apply to all Christians throughout history.</p>

<p>It is a supernatural plan given by the infinite God to finite man. So often we slip into thinking that the early Christians were different from us &ndash; that they possessed a quality of life we cannot attain. But the men and women who heard Jesus&rsquo; words were common, ordinary, working people, plagued with the same weaknesses that we are. Two outstanding things happened to them.</p>

<p>First, they knew a resurrected Lord, triumphant over death, one who lived among them and promised He would return to reign as King over all the earth.</p>

<p>Second, they were filled with the Holy Spirit.</p>

<p>We have the same opportunities to be committed to our resurrected and returning Lord. His Holy Spirit waits to empower those of us who ask for His filling. We have the <em>same ability to turn the world upside down</em>! We could start a revolution in the 20th century that would rival anything the world has seen thus far!</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ What is the Great Commission?</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>The command of our Lord simply means winning hearts to Jesus, teaching them what He taught, equipping them to send them out as ambassadors in such numbers that every soul in the world would hear the message heralded by angels the night our Lord was born: &ldquo;I bring you the most joyful news ever announced, and it is for <em>everyone</em>! The Savior &ndash; yes, the Messiah, the Lord &ndash; has been born tonight in Bethlehem!&rdquo; (Luke 2: 10,11, TLB).</p>

<p>But, wait a minute, you say. This old world has almost four billion people in it. Surely you can&rsquo;t be serious about telling <em>everyone</em> about Christ? Oh yes we can!</p>

<p>To those who laugh at the possibility of achieving a task of such magnitude we point to benefits surrounding those of us living in this exciting century. Consider for a moment the giant strides technology has made even in our generation. The media has brought the edges of our task to within our grasp. Let me give you an example.</p>

<p>A man by the name of John Heyman produced a film, simply entitled <em> Jesus</em>. In the years since its release, its evangelistic impact around the world has been staggering. A copy of the picture can be dubbed perfectly into any language within a matter of weeks using generators, jungle recording studios, and native voice actors.</p>

<p>The dubbed film lessened the need for a linguist to learn a tribal tongue, reduce it to written symbols, translate Scripture and teach a people to read so that the gospel can be shared. This is an enormous task and takes years to accomplish. The film has made it possible for tens of thousands of people around the world to have committed their lives already to the Jesus they have learned about. <em> Jesus</em> gives them the message they have learned about. <em>Jesus</em> gives them the message of salvation in their own tongue. Skeptics, we are on our way!</p>

<p>Why should Christians devote themselves completely to fulfilling the Great Commission?</p>

<p>There are at least three good reasons:</p>

<ol>
	<li><em>We obey because Christ commanded us to go.</em> The athletic coach presents his list of rules and standards to his players and says, &ldquo;These are the things you must do if you expect to be on the team.&rdquo; Players abide by the rules, or they don&rsquo;t make the team. In battle, the commanding officer shouts orders to his soldiers who obey without question or face the threat of court-martial, or even death. Jesus&rsquo; authority is based on love, and backed by God the Father, and He has issued us an order: &ldquo;Go!&rdquo; We dare not take our Lord&rsquo;s command lightly.</li>
	<li><em>We obey because men are LOST without Christ.</em> Jesus said, &ldquo;I am the way, and the truth, and the life; no one comes to the Father, but through Me&rdquo; (John 14:6). That may sound narrow, but God Himself has said it. I dare not choose to argue with my Lord.</li>
	<li><em>We obey because hearts are hungry for God.</em> Since the beginning of the ministry of Campus Crusade for Christ, we have witnessed man&rsquo;s hunger for God demonstrated in thousands of ways. As part of our worldwide training program, trainees spend hours each week in person-to-person evangelism in local communities, on beaches and in public gatherings. It is not unusual for hundreds in a single afternoon to pray to receive Christ.</li>
</ol>

<p>Just recently, more than three thousand in south- central Los Angeles received Christ through the personal contact of some sixteen hundred staff and student workers. Over two thousand asked Christ into their lives in one day of sharing on the beaches of Southern California.</p>

<p>In similar situations nine thousand Korean trainees shared Christ with some forty-two thousand people in a single afternoon of witnessing. Sixteen thousand expressed a desire to receive Christ, and four thousand appropriated the power of the Holy Spirit by faith.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ When will the Great Commission be fulfilled?</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>Only Jesus and His Father know when and how it will be done. However, since He gave us the command, assume that He means for us to pursue the fulfillment of His design in each generation&hellip;. An <em> on-going</em> process of fulfilling the Great Commission.</p>

<p>It if is to be fulfilled at all, <em>now is the time for action</em>. We must begin now, and dedicate ourselves daily &ndash; as a way of life &ndash; to communicating God&rsquo;s love and forgiveness to those our lives touch. As the apostle Paul writes in Colossians 1:28, &ldquo;So <em>everywhere we go</em> we talk about Christ to <em>all who will listen</em>&rdquo; (TLB). From the time we awaken in the morning until we go to bed at night, our first priority is sharing the most joyful news ever announced to hearts aching to hear it.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ Where do we fulfill the Great Commission?</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>We must reach the whole world &ndash; a discouraging impossibility for mere human beings. But Jesus laid down a strategy to follow. Just before He ascended into heaven, Jesus told the disciples, &ldquo;You shall be My witnesses both in Jerusalem and in all Judea and Samaria, and even to the remotest part of the earth&rdquo; (Acts 1:8).</p>

<p>Jerusalem was home to the disciples with surrounding Judea also being familiar territory. But Samaria was the land of Gentiles, foreigners who knew nothing of Jewish beliefs, and it was the edge of the &ldquo;uttermost part of the world.&rdquo;</p>

<p>Where does &ldquo;Jerusalem&rdquo; begin for us? Where all journeys begin, at home. Our home lives can reflect the love that Jesus channels through us. From there that love will overflow into our neighborhoods, our campuses and classrooms, our jobs and all our involvements. The next logical step will be on to &ldquo;Judea, &ldquo; our communities and states, our nations. And from there it is a small step beyond into &ldquo;Samaria and the uttermost part of the world&rdquo;. The Great Commission is immobile unless we see our part and become personally involved in our homes and communities and eventually our world!</p>

<p>Oh, what an exciting hour for Christians to get involved. We are on the brink of the greatest spiritual awakening since Pentecost! What men see as a dark and desperate hour is truly an hour of destiny for Christians, the hour for which we were born. It is time to shine like beacon lights and set in motion a sweeping spiritual revolution that will reveal to mankind the glorious gospel of Christ, the answer to every question.</p>

<p>Don&rsquo;t get caught on the sidelines. Get involved! Do your part to help fulfill the Great Commission in this generation!</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ How do we share what we have?</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p>Men everywhere are lost and we who belong to Christ have the answer. When He said, &ldquo;Go!&rdquo; Jesus made it clear that this &ldquo;answer&rdquo; is to be shared. It is His will that we be actively involved in helping to fulfill His command &ndash; His Great Commission. And yet the questions linger: <em>What does God want me to do?</em> How do I begin?</p>

<p>We begin by developing individual, personal strategies that tie directly into the global strategy of our Lord. It is the only way this great task will be accomplished.</p>

<p>And what is a personal strategy? It is an individuals plan of action to accomplish a specific goal. Since our goal is to help fulfill Christ&rsquo;s command, our personal plans should include evangelizing and discipling &ndash; adding to the Body of Jesus Christ, and multiplying believers.</p>

<p>Spiritual addition is simple: One believer + the gospel + one non-believer = two believers. Spiritual multiplication is a little different. The formula is: One believer + one new believer + discipling = two believers evangelizing and discipling others. Spiritual multiplication is deliberately discipling new Christians <em> so that they will evangelize and disciple still others</em>.</p>

<p>Paul specifically commended this principle to Timothy, his &ldquo;son&rdquo; in the faith, when he said &ldquo;The things which you have heard from me in the presence of many witnesses, these <em><strong>entrust</strong> to faithful men, who will be able to teach others also</em>&rdquo; (2 TIMOTHY 2:2).</p>

<p>A personal strategy enables us to move forward in obedience to help fulfill the Great Commission. Paul said, &ldquo;No soldier in active service entangles himself in the affairs of everyday life, so that he may please the one who enlisted him as a soldier&rdquo; (2 Timothy 2:4).</p>

<p>&ldquo;All right,&rdquo; you say, &ldquo;I&rsquo;m convinced. I need to have a personal strategy. But where do I begin to develop a plan that will work in my life? Allow me to make some simple suggestions based on Scripture.</p>

<p><em>Be committed to Christ and filled with the Holy Spirit.</em> Of the millions of people active in churches, a frightening percentage are either not certain they are born again, or are living frustrated, carnal lives, so far off-course that they cannot be used of God until they commit their lives to Him. If you struggle with a lack of faith, deal with it. Learn how to trust God, and He will take it from there.</p>

<p><em>Pray in faith that God will guide you</em> in developing your personal strategy. Ask Him to reveal an effective plan to you to reach your immediate area of influence with the gospel. He already has one designed; your part is discovery, and that usually happens a little at a time.</p>

<p>Jesus&rsquo; life was a perfect example of discovering the Father&rsquo;s plan. He presented every major decision to God, and waited for divine direction at each turning point. As you pray, <em>expect God to provide the strategy</em>, the wisdom, and the strength to implement it. Expectant faith pleases God.</p>

<p><em>Outline the plan God reveals in answer to your prayers.</em> List the names of specific people and groups in your life, and develop a plan to reach each one. Begin with your family. Your home, more than any other place, will reflect your testimony. Trust God continually to fill you with His Spirit so that your actions bear witness to what He has done in you.</p>

<p><em>Plan to reach the people at work.</em> Seek out those who you know are Christians, and ask them to join you in evangelizing your office or plant. In your church, make yourself available to teach Sunday school, and to be a part of (or begin) visitation evangelism teams. Be an encouragement to other members of your church.</p>

<p><em>Invite neighbors</em> in for coffee or dessert with an evangelistic bent. Tell others what Christ has done in your life, and that He can do the same in theirs.</p>

<p><em>Learn everything you can that will help accomplish your personal strategy.</em> Thousands of students, laymen and pastors take advantage of the training and materials available through Campus Crusade for Christ every year. They learn effective skills for winning men and women to Christ, building them in the faith, and sending them to the work with the good news of God&rsquo;s love and forgiveness. Leadership Training Institutes for college and high school students, and Lay and Pastors&rsquo; Institutes for Evangelism offer both basic and advanced courses the year round.</p>

<p>Don&rsquo;t wait. Write out your personal strategy today. List the names of people God has placed on your mind and heart. Share Christ with them and add to the body of believers. Ask God for specific names of those He would like you to train to multiply spiritually with you.</p>

<p>Practice initiative evangelism! <em>Take the initiative in fulfilling your part of the Great Commission right where you live.</em> Claim your relatives, friends, neighbors, and business associates for Christ in prayer. Then present the gospel to them. Tell them of the love and forgiveness Jesus waits to give them and allow them an opportunity to receive Him.</p>

<p>Share your faith as a way of life. It will become natural to talk about Christ with everyone you meet. As the people on your list begin to trust Him as Lord and Savior, disciple them and involve them in the cycle of spiritual multiplication. Encourage them to join you in an effort to saturate your entire area with the message of Jesus Christ.</p>

<p>As you implement your personal strategy locally, ask God&rsquo;s guidance to stretch your thinking beyond local goals to worldwide responsibilities. Discover ways you can become a world-conscious Christian and make a contribution to help spread the gospel overseas. Inquire about the missions program in your own church.</p>

<p>In these days of change and chaos, sincere, thinking Christians dare not be satisfied with the status quo, or business as usual. Whoever and wherever you are, when you make yourself available to God, expect to be used to help change the world! Changed hearts make a changed world. Jesus specializes in changing lives, but He can only reach men and women through us. Let Him start with you!</p>

<p>If your desire is to help fulfill the Great Commission make the following your prayer:</p>

<blockquote><em>Dear Father, I am available to You to do with as You wish. Work through me to bring Your message of love and forgiveness to hearts that hunger to hear. Cleanse me, empower me, use me to bring honor and glory to Your name. Enable me by Your Holy Spirit to give my best to help fulfill Your Great Commission in my time. In the sweet name of Jesus I ask this. Amen.</em></blockquote>

<p>If you prayed this prayer, I wish you Godspeed in your endeavors. Prepare yourself for a great adventure. Investing your time, your talent and your treasure, you will be fulfilling the Great Commission of Christ in this generation. Your commitment is to Jesus Christ, not Campus Crusade for Christ, but if we can help in any way, we are available to serve you. Through the power of the indwelling Christ you can help change the world!</p>

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

<p>&nbsp;</p>


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

			<td class="social" @click="share('lesson', 'How to Help Fulfill the Great Commission: ', '/content/M2/eng/tc/tc07.html')">
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