document.querySelector('.about-me-nav').addEventListener('click', function() {
    document.querySelector('.about-me').scrollIntoView({behavior: "smooth", block: "start"});
})

document.querySelector('.family-nav').addEventListener('click', function() {
    document.querySelector('.family').scrollIntoView({behavior: "smooth", block: "start"});
})

document.querySelector('.interest-nav').addEventListener('click', function() {
    document.querySelector('.interest').scrollIntoView({behavior: "smooth", block: "start"});
})

document.querySelector('.experience-nav').addEventListener('click', function() {
    document.querySelector('.schools').scrollIntoView({behavior: "smooth", block: "start"});
})


document.querySelector('.contact-me-nav').addEventListener('click', function() {
    const element = document.querySelector('.contact-me');
    element.scrollIntoView({behavior: "smooth", block: "start"});
})



// mouse enter

document.querySelector('.about-me').addEventListener('mouseenter', function() {
    const e = document.querySelector('.about-me-nav');
    e.style.color = "green";

})

document.querySelector('.family').addEventListener('mouseenter', function() {
    const e = document.querySelector('.family-nav');
    e.style.color = "green";

})

document.querySelector('.interest').addEventListener('mouseenter', function() {
    const e = document.querySelector('.interest-nav');
    e.style.color = "green";

})

document.querySelector('.schools').addEventListener('mouseenter', function() {
    const e = document.querySelector('.experience-nav');
    e.style.color = "green";

})

document.querySelector('.contact-me').addEventListener('mouseenter', function() {
    const e = document.querySelector('.contact-me-nav');
    e.style.color = "green";

})


// mouse exit

document.querySelector('.about-me').addEventListener('mouseleave', function() {
    const e = document.querySelector('.about-me-nav');
    e.style.color = "white";

})

document.querySelector('.family').addEventListener('mouseleave', function() {
    const e = document.querySelector('.family-nav');
    e.style.color = "white";

})

document.querySelector('.interest').addEventListener('mouseleave', function() {
    const e = document.querySelector('.interest-nav');
    e.style.color = "white";

})

document.querySelector('.schools').addEventListener('mouseleave', function() {
    const e = document.querySelector('.experience-nav');
    e.style.color = "white";

})

document.querySelector('.contact-me').addEventListener('mouseleave', function() {
    const e = document.querySelector('.contact-me-nav');
    e.style.color = "white";

})







