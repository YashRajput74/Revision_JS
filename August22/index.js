const arr = [1, 2, 3, 4, 9, 10];

function binSearch(arr, target) {
    let flag = true;
    let lowest = 0;
    let highest = arr.length;
    let index = -1;
    while (flag) {
        let midPt = Math.floor((lowest + highest) / 2);
        if (lowest > highest || lowest == highest) {
            console.log("lowest is greater than highest")
            flag = false;
        }
        else if (arr[midPt] > target) {
            highest = midPt;
        }
        else if (arr[midPt] < target) {
            lowest = midPt;
        }
        else if (arr[midPt] == target) {
            flag = false;
            index = midPt;
        }
        else {
            console.log("broken")
            flag = false;
        }
    }
    return index;
}
console.log(binSearch(arr, 2))