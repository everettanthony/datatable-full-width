const txtSearch = document.querySelector('.search');
const iconReset = document.querySelector('.icon-reset');

let table = new DataTable('#myTable', {
    layout: {
        topStart: null,
        topEnd: null
    },
    info: false,
    paging: false
});

txtSearch.addEventListener('keyup', function () {
    toggleBtnClear(this.value);

    table.search(this.value).draw();
});

iconReset.addEventListener('click', function (evt) {
    evt.target.classList.remove('icon-active');
    txtSearch.value = '';
    table.search('').draw();
});

function toggleBtnClear(val) {
    if (val.trim() !== '') {
        iconReset.classList.add('icon-active');
    }
    else {
        iconReset.classList.remove('icon-active');
    }
}