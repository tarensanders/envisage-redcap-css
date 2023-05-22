ExternalModules.DE.RUB.JSInjectorExternalModule.afterRender(function () {
  // Find the progress text
  var el = document.getElementById('surveypagenum');
  var text = el.innerText; // get the text content of the element

  // Extract the current and total page numbers
  var parts = text.split(' of ');
  var currentPage = parseInt(parts[0].split('Page ')[1]);
  var totalPages = parseInt(parts[1]);

  // Calculate the progress as a percentage
  var progressPercent = (currentPage / totalPages) * 100;

  // Create a new div element to be the progress bar
  var progressBar = document.createElement('div');
  progressBar.style.height = '20px';
  progressBar.style.background = '#063235';
  progressBar.style.width = progressPercent + '%';

  // Create a new span element to be the progress text
  var progressText = document.createElement('span');
  progressText.innerText = Math.round(progressPercent) + '% complete';
  progressText.style.position = 'absolute';
  progressText.style.width = '100%';
  progressText.style.height = '20px';
  progressText.style.textAlign = 'center';
  progressText.style.fontWeight = 'bold';
  progressText.style.fontFamily = '"articulat-cf", sans-serif';

  // Set text color based on completion percentage
  if (progressPercent < 50) {
    progressText.style.color = '#063235';
  } else {
    progressText.style.color = 'white';
  }

  // Add the progress text to the progress bar
  progressBar.appendChild(progressText);

  // Replace the old element with the new progress bar
  el.replaceWith(progressBar);
});