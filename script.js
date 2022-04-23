let btn = document.querySelector("#search");
// console.log(btn);

function nullData(my_var) {
    if(my_var !== null) {
        return `<span>${my_var}</span>`
    } else {
        return `<span class="not-available">Not Available</span>`
    }
}

btn.addEventListener('change', function(e) {
    e.preventDefault();

    let searchName = document.querySelector("#search").value;
    // console.log(searchName);

    fetch ("https://api.github.com/users/" + searchName)
    .then ((result) => result.json())
    .then ((data) => {console.log(data)

    document.querySelector("#avatar-box").innerHTML = `
        <img id="avatar" src="${data.avatar_url}" alt="avatar for ${data.login}">
        `
    document.querySelector("#info-box").innerHTML = `
        <h1>${data.name}</h1>
        <h3>@<span>${data.login}</span></h2>
        <h4 id="join-date">Joined <span>${data.created_at}</span></h4>\
        `
    document.querySelector("#bio-box").innerHTML = `
        <p id="user-bio">${data.bio}</p>
        `
    document.querySelector(".stats1").innerHTML = `
        <h4>Repos</h4>
        <h2>${data.public_repos}</h2>
    `
    document.querySelector(".stats2").innerHTML = `
        <h4>Followers</h4>
        <h2>${data.followers}</h2>
    `
    document.querySelector(".stats3").innerHTML = `
        <h4>Following</h4>
        <h2>${data.following}</h2>
    `
    document.querySelector("#link1").innerHTML = `
        <a href="" target="_blank">
            <img src="./assets/icon-location.svg" alt="">
            <span>${data.location}</span>
        </a>
        `
    document.querySelector("#link2").innerHTML = `
        <a href="${data.blog}" target="_blank">
            <img src="./assets/icon-website.svg" alt="">
            <span>${data.blog}</span>
        </a>
        `
    document.querySelector("#link3").innerHTML = `
        <a href="https://www.twitter.com" target="_blank">
            <img src="./assets/icon-twitter.svg" alt="">
            ${nullData(data.twitter_username)}
        </a>
        `
    document.querySelector("#link4").innerHTML = `
        <a href="" target="_blank">
            <img src="./assets/icon-company.svg" alt="">
            ${nullData(data.company)}
        </a>
        `

        

    })

    
});
