// Most frequent word
// In this drill, you need to implement 
// a function named mostFrequentWord. 
// This function takes a single argument,
//  words. 
// Words is an array of lowercase strings, 
// with punctuation stripped out.

// mostFrequentWord should return the word
//  that appears the most times in words.
//   If there's a tie, it should return 
//   the word that comes first alphabetically




function mostFrequentWord(words) {
  var wordFrequencies = {};
  for (var i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }
  var currentMaxKey = Object.keys(wordFrequencies)[0];
  var currentMaxCount = wordFrequencies[currentMaxKey];
  
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey;
}

function getTokens(rawString) {
  // returns an alphabetically sorted list of words, removing punctuation
  // characters
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}




// Data merge
// In this drill, you'll write a function 
// called mergeDataStreams that merges together
//  data from two sources. 



function mergeDataStreams(stream1, stream2) {
  var results = {};
  for (var i=0; i < stream1.length; i++) {
    results[stream1[i].id] = stream1[i];
  }
  
  for (var key in results) {
    var otherData = stream2.find(
      function(item) { return item.id === key; });
    for (var _key in otherData) {
      results[key][_key] = otherData[_key];
    }
  }
  return Object.keys(results).map(function(item) {return results[item]; });
}





// Recipe factory
function recipeFactory(name, ingredients, steps) {
  return {
    name: name,
    ingredients: ingredients,
    steps: steps,
    stepsHtml: function() {
      return '<ol>' + this.steps.map(
        function(step) {return '<li>' + step + '</li>'; }).join('') + '</ol>';
    },
    ingredientsHtml: function() {
      return '<ul>' + this.ingredients.map(
        function(ing) {return '<li>' + ing + '</li>'; }).join('') + '</ul>';
    }
  }
}









