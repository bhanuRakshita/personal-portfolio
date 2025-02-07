

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { projects, projectCategory } = window;

// For debugging, display all of our data in the console
console.log({ projects, projectCategory }, "Store Data");

var projectContainer = document.querySelector(".project-container")

function createCard() {
    projects.forEach(function (project) {
        if (project.show === true) {
          var cardDiv = document.createElement("DIV");
          cardDiv.classList.add("card-project");
    
          var imageDiv = document.createElement("DIV");
          imageDiv.classList.add("img");
          var projectImage = document.createElement("img");
          projectImage.src = project.imageUrl;
          imageDiv.appendChild(projectImage);
          cardDiv.appendChild(imageDiv);
    
          var topTextDiv = document.createElement("DIV");
          topTextDiv.classList.add("top-text");
          var projectDiv = document.createElement("DIV");
          projectDiv.classList.add("project");
          var title = document.createElement("h3");
          title.classList.add("h3-project-heading");
          var name = document.createTextNode(project.title);
          title.appendChild(name);
          projectDiv.appendChild(title);

          topTextDiv.appendChild(projectDiv);
          cardDiv.appendChild(topTextDiv);
          var descrDiv = document.createElement("p");
          descrDiv.classList.add("description");
          var description = document.createTextNode(project.description.substring(0,150));
          descrDiv.appendChild(description);
          topTextDiv.appendChild(descrDiv);
          
          var bottomTextDiv = document.createElement("DIV");
          bottomTextDiv.classList.add("bottom-text");
          
          var cartDiv = document.createElement("DIV");
          cartDiv.classList.add("cart");
          var comingSoonText = document.createTextNode("Coming Soon");
          var projectLinkTag = document.createElement("A");
          projectLinkTag.href = project.projectUrl;
          var projectText = document.createTextNode("Project");
          projectLinkTag.appendChild(projectText);

          var gitA = document.createElement("A");
          gitA.href = project.gitHubLink;
          var github = document.createTextNode("GitHub");
          gitA.appendChild(github);

          if(project.projectUrl){
            cartDiv.appendChild(projectLinkTag);
          } else {
            cartDiv.appendChild(comingSoonText);
          }
          
          cartDiv.appendChild(gitA);

          bottomTextDiv.appendChild(cartDiv); 

          cardDiv.appendChild(bottomTextDiv);
          projectContainer.appendChild(cardDiv);
        }
      });


}

//scroll up button

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }
  else {
    toTop.classList.remove("active");
  }
})

window.onload = function () {
    createCard();
    
}