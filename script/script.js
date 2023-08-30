import {filterBoxManager,initialJobCreator,mainData} from "./functions.js";


mainData()
  .then((jobsMain) => {
    initialJobCreator(jobsMain);
    filterBoxManager(jobsMain);
  })
  .catch((error) => {
    console.error("Error fetching job data:", error);
  });