
// page is set in the nav bar of each web page
export function usePageGoBack(returnto) {
  if (localStorage.getItem("returnpage")) {
    returnto = localStorage.getItem("returnpage");
    localStorage.removeItem("returnpage");
  }
  this.$router.push({
    name: returnto,
  })
}

// If you are in Lesson 1 and want a person to go to Lesson 7,
// The return button will now bring them back
// rather than take them to the index.
// called from vue pages
export function useGoToPageAndSetReturn(goto, returnto) {
  localStorage.setItem("returnpage", returnto);
  this.$router.push({
    name: goto,
  })
}

