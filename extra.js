let btn = document.querySelector("#search-btn");
// console.log(btn);

function nullData(my_var, id) {
    if(my_var !== null  && my_var !=="") {
        return `
            <a href="" target="_blank">
                <img src="./assets/icon-${id}.svg" alt="">
                <span>${my_var}</span>
            </a>
            `
    } else {
        return `
            <a class="not-available" href="" target="_blank">
                <img src="./assets/icon-${id}.svg" alt="">
                <span>Not Available</span>
            </a>
            `
    }
}

function nullBio(bio) {
    if(bio !== null  && bio !=="") {
        return `<p id = "user-bio">${bio}</p>`
    } else {
        return `<p id = "user-bio" class = "not-available">This profile has no bio</p>`
    }
}

function nullName(name) {
    if(name !== null  && name !=="") {
        return `<h1>${name}</h1>`
    } else {
        return `<h1>${data.login.replace('@', '')}</h1>`
    }
}

function calcDate(date) {
    const dateStr = new Date(date);
    // console.log(dateStr);
    let optionsYM = { month: 'short', year: 'numeric'};
    // console.log(new Intl.DateTimeFormat('en-US', optionsYM).format(dateStr));
    let ym = new Intl.DateTimeFormat('en-US', optionsYM).format(dateStr);
    
    let optionsDay = { day: 'numeric'};
    // console.log(new Intl.DateTimeFormat('en-US', optionsDay).format(dateStr));
    let day = new Intl.DateTimeFormat('en-US', optionsDay).format(dateStr);

    return day + " " + ym

}


btn.addEventListener('change', function(e) {
    // e.preventDefault();

    let searchName = document.querySelector("#search").value;
    // console.log(searchName);

    fetch ("https://api.github.com/users/" + searchName)
    .then ((result) => result.json())
    .then ((data) => {console.log(data)

    document.querySelector("#avatar-box").innerHTML = `
        <img id="avatar" src="${data.avatar_url}" alt="avatar for ${data.login}">
        `;
    document.querySelector("#info-box").innerHTML = `
        ${nullName(data.name)}</h1>
        <h3>@<span>${data.login}</span></h2>
        <h4 id="join-date">Joined <span>${calcDate(data.created_at)}</span></h4>\
        `;
    document.querySelector("#bio-box").innerHTML = nullBio(data.bio);

    document.querySelector(".stats1").innerHTML = `
        <h4>Repos</h4>
        <h2>${data.public_repos}</h2>
    `;
    document.querySelector(".stats2").innerHTML = `
        <h4>Followers</h4>
        <h2>${data.followers}</h2>
    `;
    document.querySelector(".stats3").innerHTML = `
        <h4>Following</h4>
        <h2>${data.following}</h2>
    `;
    
    document.querySelector("#location").innerHTML = 
        nullData(data.location, document.querySelector("#location").id)
    document.querySelector("#website").innerHTML = 
        nullData(data.blog, document.querySelector("#website").id)
    document.querySelector("#twitter").innerHTML = 
        nullData(data.twitter_username, document.querySelector("#twitter").id)
    document.querySelector("#company").innerHTML = 
        nullData(data.company, document.querySelector("#company").id)
        

        

    })

    
});

console.log("Theme before: " + currentTheme)
    var themeSwitcher_html = currentTheme === "dark"
        ? `
            <span class="button-wrap">Light
            <img src="./assets/icon-sun.svg" alt="switch to dark mode">
            </span>
        `
        : `
            <span class="button-wrap">Dark
            <img src="./assets/icon-moon.svg" alt="switch to light mode">
            </span>
        `
    themeSwitcher.innerHTML = themeSwitcher_html;

    console.log("themeSwitcher html: " + themeSwitcher_html);
