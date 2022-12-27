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
<h1>Period 1 -- Preparation</h1>
<div id="showVideoOptions"></div>
  <p class="year"><img alt="Stage of Ministry" class="lesson_image" src="@/assets/images/eng/multiply2/Period1.png" /><br />
Period 1: Preparation: around 4 B.C. &ndash; 26 AD</p>

<h2><br />
Preparing for a life and movement of multiplication</h2>

<p>This period lasts from Jesus&rsquo; birth around 4 BC to about 30 years of age. This period is characterized by the following:</p>

<ul>
	<li>Becoming the person He sought to multiply in others</li>
	<li>Preparing for a godly life and a movement of multiplication</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li class="nobreak-final-final">Over the first 30 years of His life, Jesus &ldquo;grew and became&rdquo; (<span class="popup-link" @click = "popUp('pop1')"> Luke 2:40</span>,&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">40&nbsp;</sup>And the child grew and became strong; he was filled with wisdom, and the grace of God was on him.</p>
	</div>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> &nbsp;Luke 2:51-52</span>)&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">51&nbsp;</sup>Then he went down to Nazareth with them and was obedient to them. But his mother treasured all these things in her heart.<sup class="versenum">52&nbsp;</sup>And Jesus grew in wisdom and stature, and in favor with God and man.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;the Person He was going to multiply in others. All of this took place before His public ministry started. It was evident, from the beginning of His ministry, that Jesus had been praying, planning and clarifying what His ministry would be and how He would do it.</li>
</ul>

<p>The passion of His heart was pure. His purpose was clear. The ministry process He decided on was simple. He would connect with the lost, win them to Himself, build them in what it means to be a follower, train them in fishing for others and send them to multiply the same process with others.<br />
Jesus determined that He would seek out and work through the people His Father had prepared.</p>


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

			<td class="social" @click="share('lesson', 'Period 1 -- Preparation: ', '/content/M2/eng/multiply2/multiply2intro1.html')">
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