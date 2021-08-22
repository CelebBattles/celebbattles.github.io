/**
* Template Name: Moderna - v4.3.0
* Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        if (!header.classList.contains('header-scrolled')) {
            offset -= 20
        }

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        console.log("hoho")
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
        console.log("hoho1")
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    });

})()

/**
 * Load images of top celebs when index page loads
 */
$(document).ready(function () {
    $.get('../../rankings.json', function (myJson) {
        if (window.location.pathname !== '/') {
            return;
        }

        var i = 0;
        for (const celeb in myJson) {
            const imgDiv = $('<div/>', { 'class': 'member-img' })
            const ahref = $('<a/>', { id: 'ahref-r' + i })
            const img = $('<img/>', { id: 'img-r' + i, 'class': 'img-fluid' })
            ahref.append(img)
            imgDiv.append(ahref)

            var infoDiv = $('<div/>', { 'class': 'member-info' })
            var h4 = $('<h4/>', { id: 'name-r' + i })
            var span = $('<span/>', { id: 'rank-r' + i })
            infoDiv.append(h4)
            infoDiv.append(span)

            var memberDiv = $('<div/>', { 'class': 'member' })
            memberDiv.append(imgDiv)
            memberDiv.append(infoDiv)

            var colDiv = $('<div/>', { 'class': 'col-lg-3 col-md-5 d-flex align-items-stretch' })
            colDiv.append(memberDiv)

            $('#col-holder').append(colDiv)

            $('#name-r' + i).html(celeb);
            $('#rank-r' + i).html(`Rank ${myJson[celeb]['rank']}, ELO ${myJson[celeb]['rat']} ${myJson[celeb]['rchange'] === "-" ? "" : myJson[celeb]['rchange']}`);
            $('#img-r' + i).attr('src', `assets/img/${celeb}.jpg`);
            $('#ahref-r' + i).attr('href', `https://celebbattles.github.io/details?name=${celeb}`)

            i++;

            if (i == 32) {
                break;
            }
        }
    });
});

/**
 * Load celeb information when details page loads
 */
$(document).ready(function () {
    if (window.location.pathname !== '/details') {
        return;
    }
    const hashes = getUrlVars();
    const celeb = hashes.name.replaceAll('%20', ' ')
    $('#title-details').html(`CelebBattles - ${celeb}`);

    $.get('../../rankings.json', function (myJson) {
        const freq = myJson[celeb]['freq'].split(",")
        const freq_str = `${freq[0]} <br> ${freq[1]} battles, ${Number(freq[1]) - Number(freq[2])} wins (${Math.round((Number(freq[1]) - Number(freq[2])) / Number(freq[1]) * 100 * 10) / 10}%)`
        const best = myJson[celeb]['best'].split(",")
        const best_str = `${best[0]} <br> ${best[1]} battles, ${Number(best[1]) - Number(best[2])} wins (${Math.round((Number(best[1]) - Number(best[2])) / Number(best[1]) * 100 * 10) / 10}%)`
        const worst = myJson[celeb]['worst'].split(",")
        const worst_str = `${worst[0]} <br> ${worst[1]} battles, ${Number(worst[1]) - Number(worst[2])} wins (${Math.round((Number(worst[1]) - Number(worst[2])) / Number(worst[1]) * 100 * 10) / 10}%)`

        $('#celeb-name').html(celeb)
        $('#celeb-img').attr('src', `assets/img/${celeb}.jpg`);
        $('#rank').html(myJson[celeb]['rank'])
        $('#h-rank').html(myJson[celeb]['hrank'])
        $('#rat').html(myJson[celeb]['rat'])
        $('#dev').html(myJson[celeb]['dev'])
        $('#num').html(myJson[celeb]['num'])
        $('#oppo').html(myJson[celeb]['opp'])
        $('#winPer').html(`${myJson[celeb]['winPer']}%`)
        $('#freq-oppo').html(freq_str)
        $('#best-score').html(best_str)
        $('#worst-score').html(worst_str)
    });
});

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}