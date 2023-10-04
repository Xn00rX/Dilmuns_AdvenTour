let B = document.querySelectorAll("button")
let di = document.querySelector("#acti")

B.forEach((element) => {
  element.addEventListener("click", () => {
    axios
      .get("http://localhost:4000/activity/allMap")
      .then((activities) => {
        let a = activities.data.activites

        if (element.innerText === "Muharraq") {
          di.innerHTML = ""
          a.forEach((activity) => {
            if (activity.Governorates === "muharraq") {
              const d = document.createElement("div")
              const title = document.createElement("h3")

              var createA = document.createElement("a")
              var createAText = document.createTextNode(`${activity.actName}`)
              createA.setAttribute(
                "href",
                `http://localhost:4000/activity/detail?id=${activity._id}`
              )
              createA.appendChild(createAText)

              const text = document.createTextNode(`${activity.actName}`)

              const imgDiv = document.createElement("div")
              imgDiv.classList = "imgDiv"

              imgDiv.style.backgroundImage =
                "url('" + activity.activityImage + "')"

              imgDiv.appendChild(createA)
              d.appendChild(imgDiv)

              document.querySelector("#acti").appendChild(d)
            }
          })
        } else if (element.innerText === "Capital") {
          di.innerHTML = ""
          a.forEach((activity) => {
            if (activity.Governorates === "capital") {
              const d = document.createElement("div")
              const title = document.createElement("h3")

              var createA = document.createElement("a")
              var createAText = document.createTextNode(`${activity.actName}`)
              createA.setAttribute(
                "href",
                `http://localhost:4000/activity/detail?id=${activity._id}`
              )
              createA.appendChild(createAText)

              const text = document.createTextNode(`${activity.actName}`)

              const imgDiv = document.createElement("div")
              imgDiv.classList = "imgDiv"

              imgDiv.style.backgroundImage =
                "url('" + activity.activityImage + "')"

              imgDiv.appendChild(createA)
              d.appendChild(imgDiv)

              document.querySelector("#acti").appendChild(d)
            }
          })
        } else if (element.innerText === "Northern") {
          di.innerHTML = ""
          a.forEach((activity) => {
            if (activity.Governorates === "northern") {
              const d = document.createElement("div")
              const title = document.createElement("h3")

              var createA = document.createElement("a")
              var createAText = document.createTextNode(`${activity.actName}`)
              createA.setAttribute(
                "href",
                `http://localhost:4000/activity/detail?id=${activity._id}`
              )
              createA.appendChild(createAText)

              const text = document.createTextNode(`${activity.actName}`)

              const imgDiv = document.createElement("div")
              imgDiv.classList = "imgDiv"

              imgDiv.style.backgroundImage =
                "url('" + activity.activityImage + "')"

              imgDiv.appendChild(createA)
              d.appendChild(imgDiv)

              document.querySelector("#acti").appendChild(d)
            }
          })
        } else if (element.innerText === "Southern") {
          di.innerHTML = ""
          a.forEach((activity) => {
            if (activity.Governorates === "southern") {
              const d = document.createElement("div")
              const title = document.createElement("h3")

              var createA = document.createElement("a")
              var createAText = document.createTextNode(`${activity.actName}`)
              createA.setAttribute(
                "href",
                `http://localhost:4000/activity/detail?id=${activity._id}`
              )
              createA.appendChild(createAText)

              const text = document.createTextNode(`${activity.actName}`)

              const imgDiv = document.createElement("div")
              imgDiv.classList = "imgDiv"

              imgDiv.style.backgroundImage =
                "url('" + activity.activityImage + "')"

              imgDiv.appendChild(createA)
              d.appendChild(imgDiv)

              document.querySelector("#acti").appendChild(d)
            }
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
})
