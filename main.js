console.log("loading main")

var v_docs = new Vue({
    el: "#docs",
    data: {
        docs: [
            "docs/computer_science/cmake/if.md",
            "docs/computer_science/cmake/loop.md",
            "docs/thought/PEAK.md",
        ],
    },
})

var v_categories = new Vue({
    el: "#categories",
    data: {
        categories: [
            "docs/computer_science",
            "docs/thought",
        ],
    },
})
