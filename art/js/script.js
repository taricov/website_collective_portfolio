let allListItems = Array.from(document.querySelectorAll(".list__item"))
let allItems = allListItems.length;
document.querySelector(".list__wrapper").setAttribute("data-count", `${allItems}/${allItems}`)

Array.from(document.querySelectorAll(".used__langs span")).map(ele => {

    ele.addEventListener("click", function () {
        let counter = 0;

        Array.from(document.querySelectorAll(".used__langs span")).filter(v => (v !== ele)).map(vv => vv.classList.remove("active__filter"))

        ele.classList.add("active__filter")
        let filtered = ele.dataset.filter
        if (filtered != "*") {

            allListItems.map(v => v.classList.remove("hide__item"))
            allListItems.filter(v => (
                v.dataset.filter !== filtered
            )).map((v, i) => {
                counter++
                let countSnippet = (allItems - counter) + "/" + allItems
                document.querySelector(".list__wrapper").setAttribute("data-count", countSnippet)
                v.classList.add("hide__item")
            })
        } else {

            allListItems.map(v => v.classList.remove("hide__item"))
            document.querySelector(".list__wrapper").setAttribute("data-count", `${allItems}/${allItems}`)``
        }

    })


})
