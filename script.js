import Content from "./content.js";

// order of parameters: myname, myAge, myNationality, openToWork, and softSkills

const aboutMe = new Content(
  "Giulia S Stefanelli Casteluci",
  "August 20, 1999 10:00:00",
  "Brazilian",
  false,
  "communication, critical thinking, teamwork, quick learner"
);

const me = `
    <h1 class="My_name">Giulia S Stefanelli Casteluci</h1>
    <ul class "about">
        <li class="my__age">Age:<span> ${aboutMe.age()} y</span></li>
        <li class= "my_nationality"> Nationality: <span> ${aboutMe.myNationality}</span></li>
        <li class= "open_closed">Open to work? <span> ${aboutMe.openToWork ? "Working" : "Yes"}</span></li>
        <li class= "my_soft_skills">Soft skills: <span> ${aboutMe.softSkills}</span></li>
    </ul>
`;

const main = document.querySelector(".maincontent")

const newArticle = document.createElement("article");
newArticle.classList.add("portfolio");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = me;


main.append(newArticle);

// const navBar = `
//       <li><a href="#">About me</a></li>
//       <li><a href="#">Giulia</a></li>
//       <li><a href="#">Contact</a></li>
// `;

// const mainNav = document.createElement("nav")
// mainNav.classList.add("main-navigation");
// const navList = document.createElement("ul")
// navList.innerHTML = navBar
// mainNav.append(navList)

// document.querySelector(".siteheader").append(mainNav)