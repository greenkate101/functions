// exercise 1

function sumArr(numbers) {
	var total = 0;

	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}


console.assert(sumArr([16, 24, 31]) === 71);


// exercise 2
var phrase = 'Chinchillas love to chill';

function yell (str) {
	var res = str.toUpperCase() + '!';
	return res;
}

console.assert(yell(phrase) === 'CHINCHILLAS LOVE TO CHILL!');

function yell10 (str) {
	var arr = [];
	var yelled = yell(str);

	for (var i = 0; i < 10; i++) {
		arr.push(yelled);
	}

	return arr;
}

console.assert(yell10(phrase).length === 10);
console.assert(yell10(phrase)[0] === 'CHINCHILLAS LOVE TO CHILL!');
console.assert(yell10(phrase)[9] === 'CHINCHILLAS LOVE TO CHILL!');


// exercise 3

function max (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return NaN;
	} else if (a > b) {
		return a;
	} else {
		return b;
	}
}

console.assert(typeof max('lala', {}) === 'number');
console.assert(max(12, 6) === 12);
console.assert(max(6, 12) === 12);


// exercise 4

var a = ['a', 'b', 'c'];
var b = ['m', 'k'];

function longest(a, b) {
	if (a.length < b.length) {
		return b;
	} else {
		return a;
	}
}

console.assert(longest(a, b) === a);
console.assert(longest('one', 'banana') === 'banana');



function findLongestWord(sentence) {
	var words = sentence.split(' ');
	var previousLongestWord = words[1];

	for (var i = 1; i < words.length; i++) {
		if (words[i].length > previousLongestWord.length) {
			previousLongestWord = words[i];
		}
	}

	return previousLongestWord;
}

var str = 'sloths are friendly and really lazy indiviudals';

console.assert(findLongestWord(str) === 'individuals');

// exercise 5

function isVowel(char){
    if( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			return true;
	} else {
			return false;
		}	
	
}

console.log(isVowel('c'));
console.assert(isVowel('a') === true);
console.assert(isVowel('b') === false);


// exercise 6
function reverse (str) {
	var result = '';
	for (var i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

var input = 'nifty';
var reversed = reverse(input);

console.log(reversed);
console.log(reverse('hey' + 'ello' + '!'));

console.assert (reverse('nifty') === 'ytfin');
console.assert (reverse('hey' + 'ello' + '!') === '!olleyeh');

// exercise 7
// a female cat, neutered, either white or tan;
// a male cat, neutered, any color but white
// any cat as long as it’s black.
function adopt (gender, neutered, color) {
	if (gender === 'f' && neutered === true && (color === 'white' || color === 'tan')) {
		return true;
	} else if (gender === 'm' && neutered === true && color !== 'white') {
		return true;
	} else if (color === 'black') {
		return true;
	} else {
		return false;
	}
}

console.assert(adopt('m', true, 'black') === true);
console.assert(adopt('m', true, 'white') === false);
console.assert(adopt('m', false, 'tan') === false);
console.assert(adopt('f', true, 'white') === true);
console.assert(adopt('f', true, 'tan') === true);
console.assert(adopt('f', true, 'black') === true);



