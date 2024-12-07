// api week-9  10 char to app-website
let heroimage = document.getElementById("hero-image")
let heroTitle = document.getElementById("hero-title")
let heroDesc = document.getElementById("hero-description")
let heroGender = document.getElementById("hero-gender")
let heroRace = document.getElementById("hero-race")
let heroFullname = document.getElementById("hero-fullname")
let heroplaceOfBirth = document.getElementById("hero-placeOfBirth")
let herowork = document.getElementById("hero-work")
let heropublisher = document.getElementById("hero-publisher")
let heroheight = document.getElementById("hero-height")
let herointelligence = document.getElementById("hero-intelligence")
let heropower = document.getElementById("hero-power")



let heroes;
async function fetchAllHeroes(){
    let url = "https://akabab.github.io/superhero-api/api/all.json" /// 
    
    try {
        let response = await fetch(url) // send request to fetch data from server

        heroes = await response.json() //parse response to JSON, to get data
     
        configureHero()
    }

    catch {
        console.log(`Error: ${error}`)
    }
    
}

function onButtonclick(){
    configureHero()
}

function configureHero(){
    let randomIndex = Math.floor(Math.random() * 562)
    let heroid = heroes[randomIndex]
        
    // console.log(response)

    heroTitle.innerText = heroid.name
    heroDesc.innerText = heroid.biography.firstAppearence
    heroimage.setAttribute("src", heroid.images.md)
    heroGender.innerText = heroid.appearance.gender
    heroRace.innerText = heroid.appearance.race
    heroFullname.innerText = heroid.biography.fullname
    heroplaceOfBirth.innerText = heroid.biography.placeOfBirth
    herowork.innerText = heroid.work.occupation
    heropublisher.innerText = heroid.biography.publisher
    herointelligence.innerText = heroid.powerstats.intelligence
    heropower.innerText = heroid.powerstats.power
    heroheight.innerText = heroid.appearance.height

}

addEventListener("onload", fetchAllHeroes())

//throwing function js - to search it (try, catch - if else)

