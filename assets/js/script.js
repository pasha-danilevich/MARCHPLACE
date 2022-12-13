let log = console.log



const scrollContainer = document.querySelector('#horizontal_scroll')

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});