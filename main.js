// exercise 1

function sumArr(numbers) {
	var total = 0;

	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

var x = sumArr([16, 24, 31]);
console.log(x);
console.assert(sumArr([16, 24, 31]) === 71);


// exercise 2
var str = 'Chinchillas love to chill';

function yell (str) {
	var res = str.toUpperCase();
	console.log(res + '!');
}

yell(str);

function yell10 (str) {
	var total = 0;
	for (var i = 0; i < str.length; i++) {
	total += str.length;
	}
	return total/str.length;
}
// var str = ('Chinchillas' + 'love' + 'to' + 'chill');
var x = str('Chinchillas' + 'love' + 'to' + 'chill');
console.log(x);



// exercise 3

function max (a, b) {
	if ( a !== 'lala' || b !== 'lala') {
		return NaN;
	} else if (a > b) {
		return a;
	} else {
		return b;
	}
}

console.log(max(12, 6));
console.assert( max('lala', true) === NaN);
console.assert(max(12, 6) === 12);
console.assert(max(6, 12) === 12);


// exercise 4

var a = ['a', 'b', 'c'];
var b = ['m', 'k'];

function longest(a, b) {
	for(i = 0; i < a.length; i++) {
		return a;
		} for(j = 0; j < b.length; j++) {
			return b;
		} if(b[j]===a[i]){
				return NaN;
			}
}
console.log(longest(a, b));
console.assert(longest(a, b) === ['a', 'b', 'c']);




function findLongestWord(str) {
	var maxLength = str;
	for (var i = 0; i < str.length; i++) {
		if (str.length > maxLength) {
			maxLength = str[i].length;
		}
	}
	
}
var str = ['sloths' + ',' + 'are' + ',' + 'friendly'];
console.log(maxLength);
console.assert(findLongestWord(str) === maxLength);

// exercise 5

function isVowel(str) { 
	if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
		
	}
	else if ( str === x) {

		console.log(str + 'true');
	}else {
		console.log(str +'false');
	}	
	
}

var str = ['a'];
console.log(str);
console.assert(isVowel(str, true) === '');

// exercise 6
function reverse (str) {
	var result = '';
	for (var i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

var input = 'hey whats up';
var reversed = reverse(input);

console.log(reversed);

console.log(reverse('hey' + 'ello' + '!'));

