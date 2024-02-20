function merge(collection_1, collection_2, collection_3) {
    var collection = collection_1.concat(collection_2, collection_3);
    mergeSort(collection, 0, collection.length - 1);
    return collection;
}
function mergeArray(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    for (var i_1 = 0; i_1 < n1; i_1++) {
        L[i_1] = arr[l + i_1];
    }
    for (var j_1 = 0; j_1 < n2; j_1++) {
        R[j_1] = arr[m + 1 + j_1];
    }
    var i = 0;
    var j = 0;
    var k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
function mergeSort(arr, l, r) {
    if (l < r) {
        var m = Math.floor(l + (r - l) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        mergeArray(arr, l, m, r);
    }
}
// given collections
var collection_1 = [1, 2, 3, 4, 5];
var collection_2 = [3, 4, 6, 10, 20];
var collection_3 = [25, 4, 3, 0, -4];
console.log(merge(collection_1, collection_2, collection_3));
