/**
 **********************************File Name: observer.js**********************************
 ***********************************Student Name: ADEPOJU ADEYEMI JOSHUA**********************************
 ***********************************Student Number: 301158322**********************************
 ***********************************Date: 5/02/2022**********************************
 ***************************************************************************************************************************************
 * */

const works = document.querySelector('.works');
const services = document.querySelector('.services');
works.classList.remove('works-transition');
services.classList.remove('works-transition');

/*observer to observe when the selector is in view on screen
*to perform the animation
*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            works.classList.add('works-transition');
            return;
        }
        works.classList.remove('works-transition')
    })
})

observer.observe(document.querySelector('.works-wrapper'));

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            services.classList.add('works-transition');
            return;
        }
        services.classList.remove('works-transition')
    })
})

observer1.observe(document.querySelector('.services-container'));
