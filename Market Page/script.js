
function hideUser() {
    if (window.innerWidth <= 660 ) {
        document.querySelector(".user").classList.remove("flex");
        document.querySelector(".user").classList.add("hide");
    }
    else {
        document.querySelector(".user").classList.remove("hide");
        document.querySelector(".user").classList.add("flex");
    }
}

hideUser();
window.addEventListener("resize", hideUser);

let filters = document.querySelectorAll(".filter");

filters.forEach(f => {
    f.classList.remove("bg-emerald-900");
    f.classList.add("bg-emerald-700");
});

let selectedFilters = [] ;

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        const isSelected = filter.classList.contains("bg-emerald-900");        

        // Add 'bg-emerald-900' class to the clicked filter if it wasn't selected before
        if (!isSelected) {
            filter.classList.remove("bg-emerald-700");
            filter.classList.add("bg-emerald-900");
            filter.classList.add("selected");

            selectedFilters.push( filter.getAttribute("data-category") ) ;
            // const category = filter.getAttribute("data-category");
            filterItems();
        }
        else {
            filter.classList.add("bg-emerald-700");
            filter.classList.remove("bg-emerald-900");
            filter.classList.remove("selected");
            for(let index=0 ; index<selectedFilters.length ; index++) {
                if(selectedFilters[index] === filter.getAttribute("data-category")) {
                    selectedFilters.splice(index,1) ;
                }
            }
            filterItems() ;
        }
    });
});

let items = document.querySelectorAll(".item") ;

function filterItems() {
    items.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (selectedFilters.includes(itemCategory) || selectedFilters.length===0 ) {
            item.classList.remove("hide") ;
            // Show the item
        } 
        else {
            item.classList.add("hide"); // Hide the item
        }
        });
}



