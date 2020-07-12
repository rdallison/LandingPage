document.querySelector('.about-me-nav').addEventListener('click', function() {
    console.log("hi");
    document.querySelector('.about-me').scrollIntoView;
})


    document.querySelector('.contact-me-nav').addEventListener('click', function() {
        console.log("bye");
        const element = document.querySelector('.contact-me');
        element.scrollIntoView({behavior: "smooth", block: "start"});
    })

