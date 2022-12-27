<script>
import {useShare} from "@/assets/javascript/share.js"
import { useCheckPermissions } from "@/assets/javascript/permission.js"
export default {
  methods:{
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
    async checkPermissions () {
      useCheckPermissions();
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    }
  },
  async mounted() {
    await this.checkPermissions()
    let last_page = localStorage.getItem("returnpage", null)
    console.log('last_page :'+ last_page)
    if(last_page != null){
      localStorage.setItem("returnpage", null)
      this.vuePush(last_page);
    }
  }
}
</script>
<template>
  <!-- sdcard template from mc2 -->

  <div class="page_content" dir="ltr">
    <div>

    </div>
    <div>
      <!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-seek-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/Seeking-Jesus.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-multiply1-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/Multiply1.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-multiply2-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/Multiply2.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-multiply3-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/Multiply3.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-tc-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/TransferableConcepts.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->

    </div>
    <!-- begin sdcard languageFooter -->

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

			<td class="social" @click="share('lesson', 'library: ', '/content/M2/eng/index.html')">
				<img class="social" src="@/assets/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer"><a class="no_underline"  target="_blank" href="https://GlobalChurchMovements.org">GlobalChurchMovements.org</a></p>
</div>

<!-- end sdcard languageFooter -->
</div>
<!-- end default library -->
</template>
<!--- Created by publishLibrary-->
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->