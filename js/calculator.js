const appartmentTypes = document.querySelectorAll('.calc-item');

appartmentTypes.forEach(item => {
    item.addEventListener('click', function(e) {
        console.log(e);
    })
})