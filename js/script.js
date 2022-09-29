let allListItems = Array.from(document.querySelectorAll(".list__item"))

Array.from(document.querySelectorAll(".used__langs span")).map(ele => {
    ele.addEventListener("click", function () {

        let filtered = ele.dataset.filter

        allListItems.map(v => v.classList.remove("hide__item"))

        allListItems.filter(v => (
            v.dataset.filter !== filtered
        )).map(v => v.classList.add("hide__item"))
    })


})
