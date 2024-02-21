/*
    Responsbility:

        Manage application state and provide functions to change permanent
        state with fetch() call to the API.
*/

const API = "https://uqyoy.sse.codesandbox.io/api";

const applicationState = {
  craftTypes: [],
  craftRequests: {
    "name":"",
    "intendedUse":"",
    "craftTypeId":0
  },
  crafters: [],
  ingredients: [],
  userChoices: {
    crafterId: 0,
    chosenIngredients: new Set(),
    requestId: 0
  }
};

export const createCraftRequest=async()=>{
   applicationState.craftRequests={
    "name":document.getElementById("name").value,
    "intendedUse": document.getElementById("purpose").value,
    "craftTypeId":document.getElementById("type").value
    }

  const postOptions={
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(applicationState.craftRequests)
  }
  const response=await fetch("http://localhost:8088/craftRequests",postOptions)

  const customEventdiv1=new CustomEvent("requestSaved")
  document.dispatchEvent(customEventdiv1)
}

/* 
  Once a new craft completion has been saved in the API,
  add all of the ingredients chosen by the user. 
*/
const createCraftIngredients = (completion) => {
  const fetchArray = [];

  applicationState.userChoices.chosenIngredients.forEach(
    (chosenIngredientId) => {
      fetchArray.push(
        fetch(`${API}/craftIngredients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ingredientId: chosenIngredientId,
            completionId: completion.id
          })
        })
          .then((response) => response.json())
          .then(() => {
            console.log("Fetch call done");
          })
      );
    }
  );

  // This is where all the fetches (Promises) all run and resolve
  Promise.all(fetchArray).then(() => {
    console.log("All fetches complete");
    applicationState.userChoices.chosenIngredients.clear();
  });
};

// Setter Functions
// export const setCrafters = (id) => {
//   applicationState.craftTypes = id
//   console.log(applicationState)
// }

export const setCraftRequests = async (id) => {
  const craftingListResponse = await fetch ("http://localhost:8088/craftRequests?_expand=craftType")
  const craftingListPromise = await craftingListResponse.json()

  console.log(craftingListPromise)

  for (const object of craftingListPromise) {
    if (object.id === id) {
      console.log(object.craftType.id)
    }
  }
  debugger
  let craftingType = craftingListPromise.find(type => type.id===id)

  //let craftingType = craftingListPromise?.find(type => {type.id===id})

  // console.log(craftingType)

  // applicationState.craftTypes = craftingListPromise.craftType.id
  // console.log(applicationState)
  
  // applicationState.craftRequests = id
  //console.log(applicationState)
}

export const setIngredients = (id) => {
    if (applicationState.userChoices.chosenIngredients.has(id)) {
      applicationState.userChoices.chosenIngredients.delete(id)
    } 
    else {
      applicationState.userChoices.chosenIngredients.add(id)
    }
    console.log(applicationState)
};
