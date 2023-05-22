function resizeGridItem(item) {
    grid = document.getElementsByClassName("nyfit-masonry-grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.nyfit-masonry-grid-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
    allItems = document.getElementsByClassName("nyfit-masonry-grid-item");
    for (x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}

function resizeInstance(instance) {
    item = instance.elements[0];
    resizeGridItem(item);
}

function startupLogic() {
    resizeAllGridItems();
}

document.addEventListener("DOMContentLoaded", startupLogic);
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("nyfit-masonry-grid-item");
for (x = 0; x < allItems.length; x++) {
    imagesLoaded(allItems[x], resizeInstance);
}
