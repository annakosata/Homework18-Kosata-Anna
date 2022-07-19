$(document).ready(function() {
    $('#fullpage').fullpage({
        // Navigation
        licenseKey: 'gplv3-license',
        menu: '#menu',
        lockAnchors: false,
        anchors:['page1', 'page2', 'page3', 'page4'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['About Us','Courses', 'Price', 'Contacts'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        // Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        scrollOverflow: true,
        scrollOverflowMacStyle: false,
        scrollOverflowReset: false,
        touchSensitivity: 5,
        bigSectionsDestination: null,

        // Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        // Design
        controlArrows: true,
        controlArrowsHTML: [
            '<div class="fp-arrow"></div>',
            '<div class="fp-arrow"></div>'
        ],
        verticalCentered: true,
        // sectionsColor : ['#000', '#fff'],
        responsiveWidth: 0,
        responsiveHeight: 0,

        // Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});