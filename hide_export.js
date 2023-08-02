$(document).ready(function () {
  // Removing the third tab
  $("#sub-nav ul li").each(function () {
    if ($(this).text().includes("Other Export Options")) {
      $(this).remove();
    }
  });

  // Hiding the dropdown items
  $("#recordActionDropdown li a").each(function () {
    var menuItemText = $(this).find("span[data-rc-lang='data_entry_313']").text();
    if (menuItemText.startsWith("Download PDF of record data for all instruments")) {
      $(this).parent().hide();
    }
  });
});