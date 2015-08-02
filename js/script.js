

var menuSource = document.getElementById( 'menu-template' ).innerHTML;

var menuTemplate = Handlebars.compile( menuSource );

var menuData = {
    menu: [
        { name: "All In", tag: "UX / UI / Branding / Naming / Front-end Dev / Social Good", link: "work/allin.html" },
        { name: "Artprize HUB", tag: "Branding / Environmental / Experience", link: "work/artprize.html" },
        { name: "Design for Good", tag: "Project Management / Experience / Social Good", link: "work/designforgood.html" },
        { name: "Herman Miller Sales Tools", tag: "Branding / Email / Print", link: "work/hermanmillersalestools.html" },
        { name: "Kairos Pinpoint", tag: "UX / UI / Animation / Prototyping", link: "work/kairospinpoint.html" },
        { name: "NeoCon", tag: "Environmental / Branding / Game / Experience", link: "work/neocon.html" },
        { name: "Pork Power Exhibit", tag: "Branding / Illustration / Interactive", link: "work/porkpower.html" },
        { name: "Reach for the Stars", tag: "Print / Social Good", link: "work/reachforthestars.html" },
        { name: "River Bank Run", tag: "Environmental / Print / Branding", link: "work/riverbankrun.html" },
    ]
};


document.getElementById( 'menu-placeholder' ).innerHTML = menuTemplate( menuData );



