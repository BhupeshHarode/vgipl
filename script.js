/* RESET ANIMATIONS */
function resetAnimations() {
    document.querySelectorAll(".slide-left, .slide-right").forEach(el => {
        el.classList.remove("show");
    });

    document.querySelectorAll(".reveal").forEach(el => {
        el.classList.remove("active");
    });
}

/* SCROLL REVEAL */
function revealOnScroll() {
    const windowHeight = window.innerHeight;

    document.querySelectorAll(".reveal").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < windowHeight - 100){
            el.classList.add("active"); // ← yahi line tumhare element ko appear karayegi
        }
    });

    document.querySelectorAll(".slide-left, .slide-right").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < windowHeight - 120){
            el.classList.add("show");
        }
    });
}


// SCROLL EVENT
window.addEventListener("scroll", revealOnScroll);
window.onload = function(){
document.querySelector(".hero").classList.add("start");

/* start intro typing */
type();}

/* PAGE LOAD */
window.addEventListener("load", function(){
    resetAnimations();
    revealOnScroll();

    // default page
    showPage('home'); // ⚠️ make sure home id exists

        // 🔥 SMART BANKING FADE-IN observer
    const smartFaders = document.querySelectorAll('.smart-banking .fade-in');
    const smartOptions = { threshold: 0.2 };
    const smartObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, smartOptions);
    smartFaders.forEach(fader => smartObserver.observe(fader));
});



// CONTACT FORM SUBMISSION
window.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    if(contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // page reload stop
            alert("Your message has been sent. We will contact you as soon as possible!");
            this.reset(); // form clear ho jaye
        });
    }
});



let currentOpen = "";

function showIPODetail(type) {
    const detailSection = document.getElementById("ipoDetail");
    const title = document.getElementById("ipoDetailTitle");
    const content = document.getElementById("ipoDetailContent");
    const list = document.getElementById("ipoDetailList");
    const table = document.getElementById("ipoDetailTable");

    // 🔥 TOGGLE LOGIC
    if (currentOpen === type) {
        detailSection.style.display = "none";
        currentOpen = "";
        return;
    }

    currentOpen = type;

    // Reset
    list.innerHTML = "";
    table.innerHTML = "";

    let data = {};

    switch(type) {
        case "drhp":
            data.title = "Draft Red Herring Prospectus (DRHP)";
            data.content = "Initial DRHP filed before IPO launch with company overview and financial highlights.";
            data.items = ["Company Overview", "Financial Statements", "Objects of the Issue", "Risk Factors"];
            data.table = [
                ["Filing Date", "10-Jan-2025"],
                ["Expected IPO Date", "01-Apr-2025"],
                ["Price Band", "₹100-120 per share"],
                ["Lot Size", "100 shares"]
            ];
            break;

        case "addendum":
            data.title = "Addendum to DRHP";
            data.content = "Corrections and updates to the original DRHP.";
            data.items = ["Revised financial data", "Updated risk disclosures", "Change in issue structure"];
            data.table = [
                ["Updated Filing Date", "20-Jan-2025"],
                ["Revised Price Band", "₹105-125 per share"]
            ];
            break;

        case "rhp":
            data.title = "Red Herring Prospectus (RHP)";
            data.content = "Final prospectus before IPO launch.";
            data.items = ["Company History", "Management & Promoters", "Financial Performance"];
            data.table = [
                ["RHP Filing Date", "25-Feb-2025"],
                ["IPO Open Date", "01-Apr-2025"],
                ["IPO Close Date", "05-Apr-2025"],
                ["Issue Price", "₹110 per share"],
                ["Lot Size", "100 shares"],
                ["Total Issue Size", "₹50 Crores"]
            ];
            break;

        case "presentation":
            data.title = "Investor Presentation";
            data.content = "Presentation deck detailing IPO, business model, and growth prospects.";
            data.items = ["Business Overview", "Financial Highlights", "Future Roadmap", "Market Opportunity"];
            data.table = [
                ["Presentation Date", "25-Mar-2025"],
                ["Format", "PDF & PPT"],
                ["Audience", "Investors & Analysts"]
            ];
            break;

        case "prospectus":
            data.title = "Virtual Galaxy Prospectus";
            data.content = "Official prospectus document with all IPO details and legal disclosures.";
            data.items = ["Company Information", "Risk Factors", "Financial Statements", "Use of Proceeds"];
            data.table = [
                ["Prospectus Date", "28-Mar-2025"],
                ["Registrar", "ABC Capital Ltd."],
                ["Lead Manager", "XYZ Securities"]
            ];
            break;
    }

    // Set title and content
    title.textContent = data.title;
    content.textContent = data.content;

    // List
    data.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    // Table
    if(data.table.length > 0) {
        let tableHTML = "<tr><th>Detail</th><th>Value</th></tr>";
        data.table.forEach(row => {
            tableHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`;
        });
        table.innerHTML = tableHTML;
    }

    detailSection.style.display = "block";
}




function openProfileFromCard(el){

    // sab pages hide karo
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");

    // profile page show karo
    document.getElementById("profilePage").style.display = "block";

    // data set karo
    document.getElementById("pImg").src = el.dataset.img;
    document.getElementById("pName").innerText = el.dataset.name;
    document.getElementById("pRole").innerText = el.dataset.role;
    document.getElementById("pExp").innerText = el.dataset.exp;
    document.getElementById("pDesc").innerText = el.dataset.desc;
}

// back button
// function goBack(){
//     document.getElementById("profilePage").style.display = "none";
//     document.getElementById("WE").style.display = "block";}

let currentPage = "home";

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');

    const page = document.getElementById(pageId);
    if(page){
        page.style.display = 'block';
    }

    currentPage = pageId;

    const backBtn = document.querySelector('.back-btn');

    const explorePages = [
        'explore','products','services','atm-info-page',
        'appdev','ai','digitals','infra','vgst','frdc','Mobile',
        'corebanking-detail','mis-detail','post-mortem-mgmt',
        'finflow-detail','cyber-detail','erp-detail','digital-detail'
    ];

    if (backBtn) {
        if (explorePages.includes(pageId)) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
    }
}



function goBack(){

// AGAR ATM PAGE PAR HAIN TO HOME PAR JAYEIN
    if(currentPage === 'atm-info-page'){
        showPage('home');
    }

    // PRODUCTS / SERVICES → EXPLORE
    if(currentPage === 'products' || currentPage === 'services'){
        showPage('explore');
    }

    // SERVICE DETAILS → SERVICES
    else if(
        currentPage === 'appdev' || 
        currentPage === 'ai' || 
        currentPage === 'digitals' || 
        currentPage === 'infra' || 
        currentPage === 'vgst' || 
        currentPage === 'frdc' || 
        currentPage === 'Mobile'
    ){
        showPage('services');
    }

    // PRODUCT DETAILS → PRODUCTS
    else if (
        currentPage === 'corebanking-detail' || 
        currentPage === 'mis-detail' || 
        currentPage === 'post-mortem-mgmt' || 
        currentPage === 'finflow-detail' || 
        currentPage === 'cyber-detail' || 
        currentPage === 'erp-detail' || 
        currentPage === 'digital-detail'
    ){
        showPage('products');
    }

    // PROFILE → WE
    else if(currentPage === 'profilePage'){
        showPage('WE');
    }

    // 🔥 WE → WE (stay or no action)
    else if(currentPage === 'WE'){
        showPage('WE'); // ya yaha kuch na bhi kare to chalega
    }

    // 🔥 EXPLORE → HOME
    else if(currentPage === 'explore'){
        showPage('home');
    }

    // बाकी sab → HOME
    else{
        showPage('home');
    }
}

function openRBI() {
    window.open("https://rbi.org.in/Scripts/Rules.aspx", "_blank");
}

function openLink(url) {
    window.open(url, "_blank");
}