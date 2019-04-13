// const testVar = {};

// function testFunc() {
// 	return 'hi';
// }

function superbowlWin(arr) {
	const foundObj = arr.find(function(ele) {
		return ele['result'] === 'W';
	});
	if (foundObj) {
		return foundObj['year'];
	}
}
