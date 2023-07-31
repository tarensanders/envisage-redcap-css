window.onload = function () {
  var navList = document.getElementById("sub-nav").getElementsByTagName("ul")[0];
  var listItems = navList.getElementsByTagName("li");

  for (var i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent.includes("Other Export Options")) {
      listItems[i].parentNode.removeChild(listItems[i]);
      break;
    }
  }
};