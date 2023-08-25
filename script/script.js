import {createJobCard,filterBoxManager,initialJobCreator} from "./functions.js";

// fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     const listJobs = document.getElementById("list-jobs");

//     data.sort((a, b) => b.featured - a.featured);

//     data.forEach((job) => {
//         const jobCard = createJobCard(job);
//       listJobs.appendChild(jobCard);
//     });
//   })
initialJobCreator();
  filterBoxManager();

