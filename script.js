let btn = document.getElementById("button")

btn.addEventListener('change', function(e){
    e.preventDefault()

    let searchName = document.getElementById("search").value
    console.log(searchName)

    fetch("https://api.github.com/users/" + searchName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
            
            document.getElementById("userImage-box").innerHTML = '
            <a target="_blank' href="https://www.github.com/$(searchName)"
            '
        })
}