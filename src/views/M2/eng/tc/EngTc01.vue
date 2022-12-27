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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>How to be Sure You are a Christian</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
        <button id="MC2/eng/audio/tc/tc01.mp3" type="button" class="external-audio">
           Listen to &nbsp;"TC #1: How to be Sure You Are a Christian"&nbsp; </button>
          <div class="collapsed"></div>
        

<div>
<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Introduction</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>The young man beside me thanked God for coming into his life, then closed his prayer.&nbsp; But as we stood to our feet something still seemed to be troubling him.&nbsp; &ldquo;It&rsquo;s probably not important,&rdquo; he said when I asked.&nbsp; &ldquo;It&rsquo;s just that, well, somehow I thought I&rsquo;d feel different, but I don&rsquo;t.&nbsp; Maybe God didn&rsquo;t hear my prayer&hellip;.&rdquo;&nbsp; Then he asked a question heard so often, &ldquo;How can I be sure I am a Christian?</p>

<p>This is a question that arises in the hearts of people around the world, from every walk of life.&nbsp; It&rsquo;s a question that troubles even pastors and involved lay workers.&nbsp; The question demands an answer.</p>

<p>-&nbsp;&nbsp; &nbsp;A Pastor, a faithful minister for over forty years, admitted that he was not sure of his own salvation, though he had led countless people to Christ.</p>

<p>-&nbsp;&nbsp; &nbsp;The wife of a dedicated evangelist sat weeping in my office.&nbsp; &ldquo;My husband and I have introduced thousands of people to Christ in the thirty years of our ministry,&rdquo; she said, &ldquo;but I have never been sure of my own salvation.&rdquo;&nbsp; She twisted the tissue in her hands.&nbsp; &ldquo;I&rsquo;ve never admitted this to anyone before, but I&rsquo;m desperate!&nbsp; <em>I have to know that I&rsquo;m saved.</em>&rdquo;</p>

<p>It occurs to me that you, like these sincere people, also may be haunted by questions about God.&nbsp; You may wonder, <em>can I really know God?</em>&nbsp; Maybe you&rsquo;ve been raised with an exposure to the teachings of Jesus, and have been familiar with His claims and His love since early childhood.&nbsp; You may have believed in God and His Son for years, yet you struggle.&nbsp; Are you convinced that you would spend eternity with Him if you should die today?</p>

<p>Or perhaps you have only recently received Christ and are still not sure that &ldquo;anything happened&rdquo;.&nbsp; Your life seems to be the same as before, and you have serious misgivings about the reality of your decision to trust Christ.&nbsp; You find yourself questioning the reality of salvation.</p>

<p>It is also possible that you are among a large group of people still looking for a way to make God a part of your life.&nbsp; You may long to be certain that you will spend eternity with Him.&nbsp; You may need the confidence that assurance of your salvation could bring.</p>

<p>Successful people in business, Christian workers, students, pillars of the church&hellip; all of us have the right to an assurance of our salvation.&nbsp; Why does this fearful uncertainty exist among so many who genuinely want to know God, even among those who have sought and served Him for years?</p>

<p>To a large degree, the fault lies in being poorly grounded or having mistaken information about who God is.&nbsp; The confusion in sincere hearts often revolves around the true meaning of Christ&rsquo;s crucifixion and resurrection and what is required to receive Jesus Christ as Savior.</p>

<p>If any of these doubts sound like your own, the moments you spend reading the rest of this chapter could be the best investment of time that you ever make.&nbsp; Come with me once and for all through the steps to assurance.</p>

<p>First, understand that becoming a Christian means that we accept God&rsquo;s gift of love and forgiveness through His Son Jesus Christ.&nbsp; It is the greatest gift ever offered to man, and it is free to anyone who accepts it.&nbsp; It has the power to change lives.&nbsp; It bears with it the promise of eternity with God.&nbsp; It is a personal relationship with Jesus Christ, the Son of God Himself.</p>

<p>This commitment is not unlike the decision to marry.&nbsp;&nbsp; Although the love of a young couple is undeniably filled with great emotion, the decision to marry is a threefold process involving the intellect, the emotions and the will.</p>

<p>Love between two people often comes quickly and easily.&nbsp; But the intellect&nbsp; becomes involved at the moment they begin to entertain thoughts about marriage.&nbsp; They must try to decide whether the one they love is a &ldquo;good choi8ce&rdquo; for a life-partner.&nbsp; There are many unemotional decisions they must make and the final decision &ndash; to leave all others and cleave to each other &ndash; is made as an act of the will.&nbsp; They testify to that decision when they say &ldquo;I do&rdquo; and become husband and wife.</p>

<p>Becoming a Christian is a decision, a choice that involves our <em> intellect, emotions and will</em>.&nbsp; Though valid, it is not enough to believe intellectually in Christ, nor is it enough to have an emotional experience, no matter how life-changing it may seem.&nbsp; Becoming a Christian is an act of the will, a clear-cut decision to receive Christ into our lives as Savior and Lord.</p>

<p>&nbsp;</p>

<p><img alt="Intellect, emotions and will" src="@/assets/images/eng/tc/transferable-concepts-image-11.png" /></p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ Intellectual Understanding</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>Being certain of your decision to become a Christian requires a clear grasp of what is involved in making the choice.&nbsp; It demands an <em>intellectual understanding</em> of God&rsquo;s promises and who He is.&nbsp; It is not a &ldquo;blind leap of faith,&rdquo; as some would label it.&nbsp; On the contrary, Christianity is built upon historical fact, documented by centuries of investigation by world-renowned scholars.&nbsp; As a result, we have more historical evidence to document the events of Jesus of Nazareth, than we have to prove the defeat of Napoleon at Waterloo.</p>

<p>Historian and author, Kenneth Scott Latourette, director of the department of religion at the graduate school of Yale University, said, in reference to Jesus Christ, &ldquo;Measured by its fruits in the human race, that short life has been the most influential ever lived on this planet.&nbsp; As we have been at pains to point out, the impress of that life, far from fading with the passing centuries, has deepened.&nbsp; Through Him millions of individuals have been transformed and have begun to live the kind of life which He exemplified.&nbsp; Gauged by the consequences which have followed, the birth, life, death and resurrection of Jesus have been the most important events in the history of man.&nbsp; Measured by His influence, Jesus is central in the human story.&rdquo;</p>

<p>The British scholar, W.H. Griffin Thomas, said, &ldquo;The testimony to the present work of Jesus Christ is no less real today than it has been in the past.&nbsp; In the case of all the other great names of the world&rsquo;s history, the inevitable and invariable experience has been that the particular man is first a power, then only a name, and last of all a mere memory.&nbsp; Of Jesus Christ the exact opposite is true.&nbsp; He died on a cross of shame, His name gradually became more and more powerful, and He is the greatest influence in the world today.&rdquo;</p>

<p>George Romanes, British physicist says, &ldquo;It is on all sides worth considering (blatant ignorance or base vulgarity alone excepted) that the revolution effected by Christianity in human life is immeasurable and unparalleled by any other movement in history.&rdquo;</p>

<p>Hundreds of years before Jesus&rsquo; birth, Scripture recorded the words of the great prophets of Israel foretelling His coming.&nbsp; The Old Testament, written by many individuals over a period of 1,500 years, contains more than 300 references to His coming.&nbsp; The New Testament records the words of Jesus Himself, claiming to be God.&nbsp; &ldquo;I and the Father are one,&rdquo; He said.&nbsp; &ldquo;He who has seen Me has seen the Father&rdquo; (John 10:30; 14:9).</p>

<p>To become a Christian it is necessary to face the claims of the Savior, weigh them intellectually, and choose to accept the truth that the evidence points to: Jesus is God.&nbsp; He died willingly for your sins and mine; He was buried, and rose again after three days; He is alive now and wants to come into your life and be your Savior and Lord.&nbsp; It is your choice.&nbsp; <em>You must decide</em> what <em> you</em> will do with the claims of Christ.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ Emotional Involvement</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>Involvement of the <em>emotions</em> is a part of being a Christian.&nbsp; Emotions are nothing more than feelings or reactions to an act, event or experience which occurs in our lives.&nbsp; But we often misunderstand or misinterpret feelings and end up frustrated and confounded.&nbsp; For many people the emotional element of Christianity has caused great confusion concerning assurance of salvation.</p>

<p>The emotional tenor of another Christian&rsquo;s life does not always match our own.&nbsp; Too often we are guilty of comparisons.&nbsp; They tend to leave us doubting the depth of our salvation and sincerity of our commitment.&nbsp; The truth is that no two people are alike and, therefore, cannot be expected to respond to the experiences of their faith in the same way.&nbsp; One may respond to his Christian experience in a highly emotional, visible manner, while another may respond just as deeply to the same experience, but deal with it within himself, quietly, privately.&nbsp; Is one response &ldquo;better&rdquo; than the other?&nbsp; Is it possible to judge?&nbsp; Is it even necessary?</p>

<p>The Scriptures record life-changing experiences that occurred in the lives of real people.&nbsp; One passage (Acts 9: 1-19) reveals the colorful character of the man called Paul, a fiery-tempered zealot who actively threw himself into the causes he believed in.&nbsp; When God confronted Paul, he was in the midst of a campaign to literally kill off all the Christians he could find.&nbsp; God&rsquo;s method of dealing with Paul was tempered for his specific emotional needs.&nbsp; God spoke aloud, using dramatic circumstances to assure Paul&rsquo;s undivided attention.&nbsp; He captured him completely and held him fast until he had heard in his heart what God was saying to him.&nbsp; Paul responded to the message, but remained emotionally the same.&nbsp; He was still zealous and enthusiastic in his involvements, but God had given him a new direction.&nbsp; Instead of using his energies to destroy the church of Christ, he was now spreading the gospel with conviction.</p>

<p>Timothy, on the other hand, comes across as a steady, quiet, faithful supporter of the cause of Christ.&nbsp; He had been raised by a Christian mother and grandmother, and his faith had formed early, gradually as he grew to manhood.&nbsp; He heard no commands from heaven.&nbsp; It was not necessary for him to experience what Paul did in order to hear God&rsquo;s voice.&nbsp; God seemed to speak in whispers to Timothy, and his tender heart missed very little of what was directed toward him.</p>

<p>The lives of Paul and Timothy were used greatly to spread the seeds of Christianity to the uttermost parts of the world, and they clearly demonstrate the fact that God does not speak to all of us in the same way.&nbsp; He communicates with each of us <em>in ways tailored to our specific needs</em>, to incorporate our strengths and make strong our weaknesses.&nbsp; Seeking an emotional experience or condemning its lack in another&rsquo;s life or judging a brother or sister in Christ as &ldquo;too emotional&rdquo; or &ldquo;too conservative&rdquo;, has no place in the life of a Christian committed to spiritual growth.&nbsp; Emotions are a valid part of the Christian life, but they are fickle, often changing like the weather.&nbsp; We need to base our faith on <em>more</em> than emotions.&nbsp; It cannot be our only gauge.&nbsp; The assurance of our salvation is based on:</p>

<ul>
	<li>The trustworthiness of God;</li>
	<li>the confirmation of the Holy Spirit; and</li>
	<li>the evidence of a changed life.&nbsp;</li>
</ul>

<p>First, we must base our salvation on <em>the external witness of the Word of God</em>.&nbsp; It is the authority of the very Word of God that provides a solid foundation for our faith in Him.&nbsp; To those of us who believe, the promises are there (John 1:12).</p>

<p>&ldquo;We believe men who witness in our courts, and so surely we can believe whatever God declares.&nbsp; And God declares that Jesus is the Son.&nbsp; All who believe this know in their hearts that it is true.&nbsp; If anyone doesn&rsquo;t believe this, he is actually calling God a liar, because he doesn&rsquo;t believe what God has said about his Son.&nbsp; And what is it that God has said?&nbsp; That he has given us eternal life, and that this life is in his Son.&nbsp; So whoever has God&rsquo;s Son has life; whoever does not have his Son does not have life.&nbsp; I have written this to you who believe in the Son of God so that you may know you have eternal life&rdquo; (I John 5: 9-13, TLB).&nbsp; <em>There is assurance in God&rsquo;s Word</em>.</p>

<p>Second, there is <em>the internal witness of the Holy Spirit</em>.&nbsp; Paul wrote to the Romans, &ldquo;For his Holy Spirit speaks to us deep in our hearts and tells us that we really are God&rsquo;s children&rdquo; (Romans 8:16, TLB).&nbsp; It was such an important point that he emphasized it again when he wrote to the Christians in Thessalonica.&nbsp; &ldquo;For when we brought you the Good News,&rdquo; he writes, &ldquo;it was not just meaningless chatter to you; no, you listened with great interest.&nbsp; What we told you produced a powerful effect upon you, for the Holy Spirit gave you great and full assurance that what we said was true&rdquo; (1 Thessalonians 1:5a, TLB).&nbsp; <em>There is assurance because of the Holy Spirit</em>. &nbsp;</p>

<p>The third proof that we have experienced a new birth and have become children of the living God, lies in the evidence of <em>changed lives</em>; ours and those of other Christians around us.&nbsp; In Paul&rsquo;s letter to the Thessalonian Christians, he adds, &ldquo;Our very lives were further proof to you of the truth of our message.&nbsp; So you became our followers and the Lord&rsquo;s; for you received our message with joy from the Holy Spirit in spite of the trials and sorrows it brought you.&nbsp; Then you yourselves became an example to all the other Christians in Greece.&nbsp; And now the Word of the Lord has spread out from you to others everywhere, far beyond your boundaries, for wherever we go we find people telling us about your remarkable faith in God&rdquo; (1 Thessalonians 1:5b-8 TLB). &nbsp;</p>

<p>Later, Paul writes to Colossian Christians and says, &ldquo;The same Good News that came to you is going out all over the world and changing lives everywhere, just as it changed yours that very first day you heard it and understood about God&rsquo;s great kindness to sinners&rdquo; (Colossians 1:6, TLB).</p>

<p>&ldquo;And how can we be sure that we belong to him?&rdquo;&nbsp; the apostle John asks, then answer, &ldquo;By looking within ourselves: are we really trying to do what he wants us to?&nbsp; Someone may say, &lsquo;I am a Christian; I am on my way to heaven; I belong to Christ.&rsquo;&nbsp; But if he doesn&rsquo;t do what Christ tells him to, he is a liar.&nbsp; But those who do what Christ tells them to will learn to love God more and more.&nbsp; <em>That is the way to know whether or not you are a Christian</em>.&nbsp; Anyone who says he is a Christian should live as Christ did&rdquo; (1 John 2: 3-6, TLB, italics ours).</p>

<p>The genuine desire within us to obey God and live as Christ did is confirmation that we have been born again.&nbsp; With time our lives will change to demonstrate to others the new life within us.&nbsp; Jesus said, &ldquo;I will only reveal myself to those who love me and obey me.&nbsp; The Father will love them too, and we will come to them and live with them.&nbsp; Anyone who doesn&rsquo;t obey me doesn&rsquo;t love me.&nbsp; And remember, I am not making up this answer to your question!&nbsp; It is the answer given by the Father who sent me: (John 14: 23-24, TLB).&nbsp; It a strong desire to please the Lord Jesus with our obedience is missing from our lives, we have reason to question the authenticity of our salvation.&nbsp; <em>There is assurance in a changed life</em>. &nbsp;</p>

<p>We have seen that emotions are a valid, important part of life, including their role in the Christian experience.&nbsp; But the assurance of our faith requires more than just &ldquo;feeling saved.&rdquo;&nbsp; We need to depend on the external witness of the Word of God, and we must be conscious of the internal witness of our salvation through the indwelling Holy Spirit.&nbsp; Coupled with the changes we will see in our own lives and the lives of other Christians, we have all the evidence we need of the truth of our salvation.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ Involvement of the Will</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>Now we come to the matter of the will.&nbsp; It is often the will that keeps a person from a longed-for relationship with Christ.</p>

<p>Some time ago I visited one of our nation&rsquo;s most prestigious seminaries where a friend of mine was completing his doctorate.&nbsp; We were on our way to meet one of his favorite professors, a widely known, respected theologian and scholar who had given years of his life to train thousands of young people for the ministry.&nbsp; &ldquo;He&rsquo;s a good man,&rdquo; my friend said.&nbsp; &ldquo;He&rsquo;s warm-hearted and I like him, but he doesn&rsquo;t believe in the deity of Christ or that the Bible is the Word of God.&rdquo;&nbsp; He looked at me and grinned. &ldquo;I&rsquo;m hoping you&rsquo;ll be able to say something to him to change his mind.&rdquo;</p>

<p>Almost before we had completed our greetings the professor asked, &ldquo;You talk to college students in your travels, don&rsquo;t you, Mr. Bright?&rdquo;</p>

<p>I nodded.</p>

<p>&ldquo;What do you tell the ones who want to become Christians?&rdquo;</p>

<p>I hesitated, weighing what I should say to this brilliant man.&nbsp; Was it an academic argument he sought?&nbsp; Curiosity perhaps?&nbsp; Before I answered he spoke again.</p>

<p>&ldquo;Let me be more honest with you,&rdquo; he said.&nbsp; &ldquo;I want to become a Christian.&nbsp; Can you tell me how?&rdquo;</p>

<p>After all his years of doubting, of teaching young men and women against the deity of Christ and the inspiration of Scripture, I wondered what had made him change his mind.</p>

<p>&ldquo;It has been a struggle for me to allow God the right to control my life.&nbsp; I know it&rsquo;s pride,&rdquo; he said quietly.&nbsp; &ldquo;I&rsquo;ve done quite well in my field; I&rsquo;ve received coveted honors and found that I like being considered an authority in the academic world.&nbsp; The thought of laying that down and humbling myself before God has been hateful to me.&rdquo;</p>

<p>He leaned against the edge of his desk and looked out the window into the distance.&nbsp; &ldquo;For years I have denied Scripture its rightful place as the inspired Word of God, and I have taught so many to do the same thing.&nbsp; But lately I&rsquo;ve been reading the Bible with a new understanding.&nbsp; And I&rsquo;ve read several of the works of the church fathers too, men used greatly of God, like John Wesley and St. Augustine.&nbsp; Intellectually, I am convinced that Jesus is indeed the Son of God, but I don&rsquo;t know Him as my Savior.&nbsp; Can you help me change that?&rdquo;</p>

<p>That day, this man of international renown changed the direction of his life.&nbsp; He had known this was the answer he sought, but because of his will &ndash; his desire to remain in control of his life &ndash; he had kept God at arm&rsquo;s length.</p>

<p>Though the professor struggled with his pride, others who have made an intellectual decision about God and recognize Him as who He claims to be, may put off accepting Him as Savior because they fear the consequences.&nbsp; Some are convinced that if they commit their lives to Jesus they will instantly be sentenced to a life of boredom and misery.</p>

<p>I chatted with a young man for several hours one afternoon on a large mid-western college campus.&nbsp; He was sure God meant to bore him to death.</p>

<p>&ldquo;I&rsquo;m an atheist, &ldquo; he said with a swagger, &ldquo;and a confirmed party animal.&nbsp; I&rsquo;m having the time of my life doing just as I please.&nbsp; If you think I&rsquo;m giving all that up so I can drag around campus looking like the end of the world, you&rsquo;d better think again.&nbsp; Christians are people my set makes jokes about.&nbsp; They haven&rsquo;t got anything I want.&rdquo;</p>

<p>But several faithful Christians friends in his fraternity continued to pray for his salvation, and within a few weeks this same young man who had been so filled with himself, invited Christ into his life.&nbsp; &ldquo;I guess I always knew Jesus was the Son of God, but I fought Him.&nbsp; I was so afraid He would condemn me to a life of misery, and I love having a good time.&nbsp; It was that verse in Matthew 16:26 that made me begin to wonder, where it says, &lsquo;What will a man be profited, if he gains the whole world and forfeits his soul?&rsquo;</p>

<p>&ldquo;And then one afternoon for some reason, I picked up my Bible and ran across John 10:10, where Jesus aid, &lsquo;I came that they might have life and might have it abundantly.&rsquo; When I started looking at my life and asking if it was what I would call &lsquo;abundant&rsquo; I had to admit it was pretty empty.&nbsp; Jesus has made such an incredible difference.&nbsp; I can hardly put it into words.&nbsp; But it&rsquo;s great!&rdquo;</p>

<p>It is only through trusting God with our lives that we discover how much He adds to life.&nbsp; But many continue to fear He will take away the things they love.&nbsp; A successful coach for a pro ball team confided one morning over breakfast that for years he had been a Christian but had always withheld committing his professional life to God.&nbsp; &ldquo;I just knew that if I ever gave it to God,&rdquo; he said, &ldquo;He would take it away.&nbsp; I was afraid He would want me to go into the ministry instead.&nbsp; But I love what I do.&nbsp; It is my life.&rdquo;&nbsp; His reputation spoke highly of him as a man of great skill and professional character.&nbsp; It was easy to see his love for his players and for the game.</p>

<p>As he sat beside me stirring his coffee, a peaceful expression slipped onto his rugged face.&nbsp; &ldquo;You know,&rdquo; he said at last, &ldquo;When I finally did give it all to God, I realized that He wanted me in coaching.&nbsp; Part of the reason I love the game is because of the skill and ability God has given me to do what I do.&nbsp; I am serving Him right where I am.&nbsp; But I never really understood until I was willing to give it up.&rdquo;</p>

<p>The human will is a powerful dimension of our ability to believe our salvation.&nbsp; It can keep us from trusting God fully; it can create unfounded doubts; it can invent reasons for us to allow sin in our lives, knowing that what we are doing causes pain to the heart of God.</p>

<p>When sin is allowed in our lives, it is not unusual for us to begin to doubt the validity of our salvation.&nbsp; Until our hearts are willing to admit it is sin, and deal with our disobedience, we often find ourselves creating arguments against believing God.&nbsp; It may seem to be &ldquo;easier&rdquo; than confessing our sin before Him, but only for a season.</p>

<p>Other times our will to believe fully in our salvation is hampered because we have been deceived by Satan.&nbsp; When a Christian allows willful sin in his life, he may become convinced that God will never forgive him for what he has done.&nbsp; It is a clever trick of the master deceiver himself, but unless the estranged believer determines to return to God and accept His forgiveness, he may condemn himself to a life of fear, wondering about his salvation, afraid he will always be separated from God because of choices he has made.</p>

<p>And so we see that God never keeps His children at arm&rsquo;s length.&nbsp; It is a trick of Satan.&nbsp; God extends assurance of His salvation to all His children, at all times, with no exception.&nbsp; If we are unsure of where we stand, we need to take inventory of our intellect, our emotions and our will.</p>

<p>To be assured of our position in Christ, we must be aware intellectually of the basic truths:</p>

<ol>
	<li>God loves you and has a wonderful plan for your life.</li>
	<li>Man is sinful and separated from God; thus he cannot know or experience God&rsquo;s love and plan for him.</li>
	<li>Jesus Christ is God&rsquo;s only provision for man&rsquo;s sin.&nbsp; Through Him you can know and experience God&rsquo;s love and plan for your life.</li>
	<li>You must decide to receive Jesus Christ as Savior and Lord of your life; it is then you will know and experience God&rsquo;s love and plan for you.</li>
</ol>
<img alt="A great gap separates sinful man from holy God" src="@/assets/images/eng/tc/transferable-concepts-image-12.jpg" />&nbsp;&nbsp; <img alt="Jesus Christ is the bridge over the gap between God and man" src="@/assets/images/eng/tc/transferable-concepts-image-13.jpg" />
<p>&nbsp;</p>

<p>Christ promised, &ldquo;Behold, I stand at the door and knock; if anyone hears My voice and opens the door, I will come in to him, and will dine with him, and he with Me: (Revelations 3:20).&nbsp; In John&rsquo;s Gospel we read, &ldquo;But as many as received Him, to them He gave the right to become children of God, even to those who believe in His name&rdquo; (John 1:12).</p>

<p>Yet, it is not enough just to believe.&nbsp; We must have faith, accepting His promise to enter our lives regardless of what we may feel.&nbsp; Ephesians 2: 8,9 reminds us, &ldquo;For by grace you have been saved <em>through faith</em>; and that not of yourselves, it is the gift of God; not as a result of works, that no one should boast.&rdquo;&nbsp; Once we have asked Jesus into our lives, it is not necessary to ask again.&nbsp; Then we must believe He has come in as He promised!&nbsp; And He has said He will never leave nor abandon His children.</p>

<p>Faith is a muscle that becomes strong only as we exercise it.&nbsp; It is the difference between thinking we are saved and knowing!&nbsp; The choice is up to you.</p>

</div>

<h2>APPLICATION</h2>

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

Adapted from the <em>Transferable Concepts</em>, by Dr. Bill Bright, co-founder of Campus Crusade for Christ. &copy; Cru. All rights reserved.<br />
&nbsp;</div>


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

			<td class="social" @click="share('lesson', 'How to be Sure You are a Christian: ', '/content/M2/eng/tc/tc01.html')">
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