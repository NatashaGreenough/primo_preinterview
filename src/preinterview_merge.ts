export function merge (collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const collection: number[] = collection_1.concat(collection_2, collection_3); 
    mergeSort(collection, 0, collection.length - 1); 
    return collection;
}

function mergeArray(arr: number[], l: number, m: number, r: number): void {
    const n1 = m - l + 1;
    const n2 = r - m;

    let L: number[] = new Array(n1);
    let R: number[] = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = l;

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

function mergeSort(arr: number[], l: number, r: number): void {
    if (l < r) {
        const m = Math.floor(l + (r - l) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        mergeArray(arr, l, m, r);
    }
}

// given collections
let collection_1: number[] = [1, 2, 3, 4, 5];
let collection_2: number[] = [3, 4, 6, 10, 20];
let collection_3: number[] = [25, 4, 3, 0, -4];

//console.log(merge(collection_1, collection_2, collection_3));
