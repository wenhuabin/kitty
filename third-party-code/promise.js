/*
通过 promise 实现按序加载小说的各个章节
*/
getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);

  return story.chapterUrls.reduce(function(sequence, chapterUrl) {
    // Once the last chapter's promise is done…
    return sequence.then(function() {
      // …fetch the next chapter
      return getJSON(chapterUrl);
    }).then(function(chapter) {
      // and add it to the page
      addHtmlToPage(chapter.html);
    });
  }, Promise.resolve()); //sequence = Promise.resolve()
}).then(function() {
  // And we're all done!
  addTextToPage("All done");
}).catch(function(err) {
  // Catch any error that happened along the way
  addTextToPage("Argh, broken: " + err.message);
}).then(function() {
  // Always hide the spinner
  document.querySelector('.spinner').style.display = 'none';
})

var generatorPromise = function(num) {
   return new Promise((res) => {
		setTimeout(function(){
			res();
			console.log(num);
		}, 1000));
}

var end = Promise.resolve();
for (let i = 0; i < 5; i++) {
  end = end.then(() => generatorPromise(i) );
}
