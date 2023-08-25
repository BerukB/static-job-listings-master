 export function createJobCard(job) {
    const divider = document.createElement("article");
    divider.id = `job-${job.id}`;
  
    if (job.featured) {
      divider.classList.add(
        "border-l-4",
        "border-l-desaturatedDarkCyan",
        "rounded-md"
      );
    }
    divider.classList.add(
      "bg-white",
      "flex",
      "flex-col",
      "space-y-2",
      "px-6",
      "pb-6",
      "rounded-md",
      "drop-shadow-xl",
      "md:flex-row",
      "md:justify-between",
      "md:px-7",
      "md:py-3",
      "md:items-center"
    );
  
    const logo = document.createElement("img");
    logo.src = job.logo;
    logo.classList.add(
      "-mt-7",
      "w-14",
      "h-14",
      "object-contain",
      "md:mt-0",
      "md:mr-4"
    );
    logo.alt = job.company;
    divider.appendChild(logo);
  
    const jobDetails = document.createElement("section");
    jobDetails.classList.add(
      "flex",
      "flex-col",
      "md:flex-1",
      "md:justify-between",
      "md:flex-row"
    );
  
    const companySection = document.createElement("section");
    companySection.classList.add("mb-4");
  
    const companyContainer = document.createElement("div");
    companyContainer.classList.add(
      "flex",
      "justify-between",
      "mb-2",
      "pr-24",
      "md:pr-0",
      "md:space-x-3"
    );
   
    const companyName = document.createElement("span");
    companyName.classList.add(
      "text-base",
      "text-desaturatedDarkCyan",
      "font-bold"
    );
    companyName.textContent = job.company;
    companyContainer.appendChild(companyName);
  
    const featureContainer = document.createElement("div");
    featureContainer.classList.add(
      "flex",
      "space-x-2",
      "text-white",
      "font-regular"
    );
  
    if (job.new) {
      const newJob = document.createElement("a");
      newJob.classList.add(
        "pt-1",
        "px-2",
        "bg-desaturatedDarkCyan",
        "rounded-full"
      );
      newJob.textContent = "NEW!";
      featureContainer.appendChild(newJob);
    }
  
    if (job.featured) {
      const featuredJob = document.createElement("a");
      featuredJob.classList.add(
        "pt-1",
        "px-2",
        "bg-veryDarkGrayishCyan",
        "rounded-full"
      );
      featuredJob.textContent = "FEATURED";
      featureContainer.appendChild(featuredJob);
    }
  
    companyContainer.appendChild(featureContainer);
    companySection.appendChild(companyContainer);
  
    const jobTitle = document.createElement("div");
    jobTitle.classList.add("font-bold");
  
    const jobHeading = document.createElement("h3");
    jobHeading.classList.add("hover:text-desaturatedDarkCyan", "text-lg", "mb-1");
    jobHeading.textContent = job.position;
    jobTitle.appendChild(jobHeading);
  
    const jobInfo = document.createElement("div");
    jobInfo.classList.add("text-darkGrayishCyan");
  
    const postedAt = document.createElement("span");
    postedAt.textContent = job.postedAt;
    jobInfo.appendChild(postedAt);
  
    const contract = document.createElement("span");
    contract.textContent = job.contract;
    jobInfo.appendChild(contract);
  
    const location = document.createElement("span");
    location.textContent = job.location;
    jobInfo.appendChild(location);
  
    jobTitle.appendChild(jobInfo);
    companySection.appendChild(jobTitle);
    jobDetails.appendChild(companySection);
  
    const mobileDivider = document.createElement("div");
    mobileDivider.classList.add("mb-5", "md:hidden");
    mobileDivider.innerHTML = "<hr>";
    jobDetails.appendChild(mobileDivider);
  
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "button-container"
    buttonContainer.classList.add(
      "flex",
      "space-x-4",
      "flex-wrap",
      "pr-24",
      "md:pr-0",
      "md:flex-nowrap",
      "md:items-center"
    );
  
    const roleButton = document.createElement("button");
    roleButton.type = "button";
    roleButton.id = "filter-button"
    roleButton.classList.add(
      "p-2",
      "filter-button",
      "bg-lightGrayishCyanBg",
      "text-desaturatedDarkCyan",
      "hover:bg-desaturatedDarkCyan",
      "hover:text-white",
      "rounded-md",
      "font-bold",
      "cursor-pointer"
    );
    roleButton.textContent = job.role;
    buttonContainer.appendChild(roleButton);
  
    job.tools.forEach((tool) => {
      const toolButton = document.createElement("button");
      toolButton.type = "button";
      toolButton.id = "filter-button"
      toolButton.classList.add(
        "p-2",
        "filter-button",
        "bg-lightGrayishCyanBg",
        "text-desaturatedDarkCyan",
        "hover:bg-desaturatedDarkCyan",
        "hover:text-white",
        "rounded-md",
        "font-bold",
        "cursor-pointer"
      );
      toolButton.textContent = tool;
      buttonContainer.appendChild(toolButton);
    });
  
    const levelButton = document.createElement("button");
    levelButton.type = "button";
    levelButton.id = "filter-button"
    levelButton.classList.add(
      "p-2",
      "filter-button",
      "bg-lightGrayishCyanBg",
      "text-desaturatedDarkCyan",
      "hover:bg-desaturatedDarkCyan",
      "hover:text-white",
      "rounded-md",
      "font-bold",
      "cursor-pointer"
    );
    levelButton.textContent = job.level;
    buttonContainer.appendChild(levelButton);
  
    job.languages.forEach((language) => {
      const languageButton = document.createElement("button");
      languageButton.type = "button";
      languageButton.id = "filter-button"
      languageButton.classList.add(
        "p-2",
        "filter-button",
        "bg-lightGrayishCyanBg",
        "text-desaturatedDarkCyan",
        "hover:bg-desaturatedDarkCyan",
        "hover:text-white",
        "rounded-md",
        "font-bold",
        "cursor-pointer"
      );
      languageButton.textContent = language;
      buttonContainer.appendChild(languageButton);
    });
  
    jobDetails.appendChild(buttonContainer);
    divider.appendChild(jobDetails);
  
    return divider;
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function filterBoxManager(){
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOMContentLoaded event fired");
      
        const listJobs = document.getElementById("list-jobs");
        const filterTags = [];
      
        listJobs.addEventListener("click", (event) => {
          if (event.target.matches("#list-jobs button")) {
            console.log("Button clicked");
            const buttonText = event.target.textContent;
            console.log(filterTags);
            
            if (!filterTags.includes(buttonText)) {

                filterTags.push(buttonText);

                 // Get all the active criteria (buttons pressed)
             // Get the filter case element
          const filterCase = document.getElementById("filter-case");
          filterCase.classList.remove("hidden");
          filterCase.classList.add("flex");
      
          const filterBox = document.getElementById("filter-box");
      
          // Create a new div element for the filter tag
          const filterTag = document.createElement("div");
          filterTag.classList.add("flex");
      
          // Create a new a element for the filter label
          const filterLabel = document.createElement("button");
          filterLabel.classList.add(
            "py-1",
            "px-2",
            "bg-lightGrayishCyanBg",
            "text-desaturatedDarkCyan",
            "rounded-l-md",
            "font-bold"
          );
          filterLabel.textContent = event.target.textContent;
      
          // Create a new img element for the remove icon
          const removeIcon = document.createElement("img");
          removeIcon.src = "images/icon-remove.svg";
          removeIcon.classList.add(
            "bg-desaturatedDarkCyan",
            "hover:bg-veryDarkGrayishCyan",
            "object-contain",
            "rounded-r-md",
            "px-2",
            "cursor-pointer"
          );
          removeIcon.alt = "";
      
          // Append the filter label and remove icon to the filter tag
          filterTag.appendChild(filterLabel);
          filterTag.appendChild(removeIcon);
      
          // Append the filter tag to the filter box
          filterBox.appendChild(filterTag);

          // Add click event listener to the remove icon
        removeIcon.addEventListener("click", () => {
            // Remove the filter tag from the filter box
            filterTag.remove();
  
            // Remove the corresponding name from the filterTags array
            const index = filterTags.indexOf(buttonText);
            if (index !== -1) {
              filterTags.splice(index, 1);
            }
          });

          filterJobs(filterTags);
              }
           
            
          }
         
        });
        
      });

      function filterJobs(filterTags) {
        // Fetch the job data from the data.json file
        fetch("data.json")
          .then((response) => response.json())
          .then((jobs) => {
            console.log("jobs"+jobs);
            const filteredJobs = jobs.filter((job) =>
              filterTags.some(
                (tag) =>
                  job.tools.includes(tag) ||
                  job.languages.includes(tag) ||
                  job.role === tag ||
                  job.level === tag
              )
            );
    
            // Display the filtered jobs
            displayJobs(filteredJobs);
          })
          .catch((error) => {
            console.error("Error fetching job data:", error);
          });
      }
    
      function displayJobs(jobs) {
        const listJobs = document.getElementById("list-jobs");
        listJobs.innerHTML = ""; // Clear the existing job list
    
        jobs.forEach((job) => {
          // Create and append the job card elements
          const jobCard = createJobCard(job);
          listJobs.appendChild(jobCard);
        });
      }
      
}

