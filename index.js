let typed = new Typed(".frontend",{
    strings:["Frontend Developer", "Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});


function downloadResume(){
    var link = document.createElement('a');
    link.href="pictures/Raghvendra.pdf";
    link.download='pictures/Raghvendra.pdf';
    link.click();
}
