let list1 = [1, 4, 6, 8]
let list2 = [2, 3, 6, 9]

function merge(a, b) {
    lengthA = a.length - 1
    lengthB = b.length - 1
    sortedList = []

    let i = 0
    let j = 0
    let k = 0

    while (i <= lengthA && j <= lengthB) {
        if (a[i] < b[j]) {
            sortedList[k] = a[i]
            k++
            i++
        } else {
            sortedList[k] = b[j]
            k++
            j++
        }
    }
    for (; i <= lengthA; i++) {
        sortedList[k] = a[i];
        k++
    }
    for (; j <= lengthB; j++) {
        sortedList[k] = b[j]
        k++
    }

    console.log(sortedList)
}

merge(list1, list2)