const pageActiveCheck = function (e) {
    e.target.classList.add('page-active');
    let page1 = document.querySelectorAll('.who-we-help__table.page-1');
    let page2 = document.querySelectorAll('.who-we-help__table.page-2');
    let page3 = document.querySelectorAll('.who-we-help__table.page-3');
    if (e.target.classList.contains('page-one')) {
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.classList.remove('page-active');
        }
        if (e.target.nextElementSibling.nextElementSibling) {
            e.target.nextElementSibling.nextElementSibling.classList.remove('page-active');
        }
        if (page1) {
            for (let el of page1) {
                el.classList.add('page-active')
            }
        }
        if (page2) {
            for (let el of page2) {
                el.classList.remove('page-active')
            }
        }
        if (page3) {
            for (let el of page3) {
                el.classList.remove('page-active')
            }
        }
    }
    if (e.target.classList.contains('page-two')) {
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.classList.remove('page-active');
        }
        if (e.target.previousElementSibling) {
            e.target.previousElementSibling.classList.remove('page-active');
        }
        if (page1) {
            for (let el of page1) {
                el.classList.remove('page-active')
            }
        }
        if (page2) {
            for (let el of page2) {
                el.classList.add('page-active')
            }
        }
        if (page3) {
            for (let el of page3) {
                el.classList.remove('page-active')
            }
        }
    }
    if (e.target.classList.contains('page-three')) {
        if (e.target.previousElementSibling) {
            e.target.previousElementSibling.classList.remove('page-active');
        }
        if (e.target.previousElementSibling.previousElementSibling) {
            e.target.previousElementSibling.previousElementSibling.classList.remove('page-active');
        }
        if (page1) {
            for (let el of page1) {
                el.classList.remove('page-active')
            }
        }
        if (page2) {
            for (let el of page2) {
                el.classList.remove('page-active')
            }
        }
        if (page3) {
            for (let el of page3) {
                el.classList.add('page-active')
            }
        }
    }
};

export default pageActiveCheck;