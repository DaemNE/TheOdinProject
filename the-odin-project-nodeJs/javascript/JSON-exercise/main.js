async function getData() {
    const url = "./sample.json"

    const request = new Request(url)

    const response = await fetch(request)

    const data = await response.json();

    let motherCats = [];
    for (mother in data) {
        motherCats.push(data[mother].name)
    }
    console.log(motherCats)

    let maleCount = 0;
    let femaleCount = 0;
    let totalKittens = 0;

    for (mother in data) {
        for (kitten in data[mother].kittens) {
            if (data[mother].kittens[kitten]["gender"] === "m") {
                maleCount++
                totalKittens++
            } else if (data[mother].kittens[kitten]["gender"] === "f") {
                femaleCount++
                totalKittens++
            }
        }
    }



    console.log(`maleCount: ${maleCount}, femaleCount: ${femaleCount} and totalCount: ${totalKittens}`)
}
getData()