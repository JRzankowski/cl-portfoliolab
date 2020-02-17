import content from "./content";
import data from "../data";

const pagination = function (select) {
    if (select) {
        let page1 = document.querySelectorAll('.who-we-help__table.page-1');
        let page2 = document.querySelectorAll('.who-we-help__table.page-2');
        let page3 = document.querySelectorAll('.who-we-help__table.page-3');
        let pagination = document.querySelectorAll('.who-we-help__pagination .who-we-help__pagination--page');
        if (pagination[0]) {
            pagination[0].classList.add('page-active');
            pagination[1].classList.remove('page-active');
            pagination[2].classList.remove('page-active');
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

    }
};

export default pagination