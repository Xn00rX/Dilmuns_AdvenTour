let B = document.querySelectorAll("button")
let di = document.querySelector("#acti")

B.forEach((element) => {
  element.addEventListener("click", () => {
    // if (element.innerText === "Capital") {
    axios
      .get("http://localhost:4000/activity/allMap")
      .then((activities) => {
        // console.log("activities", activities.data)
        let a = activities.data.activites
        // console.log(a[0])
        if (element.innerText === "Muharraq") {
          di.innerHTML = ""
          a.forEach((activity) => {
            if (activity.Governorates === "muharraq") {
              const d = document.createElement("div")
              const title = document.createElement("h3")

              let theCounter = `localhost:4000/activity/detail?id=${activity._id}`
              /////////////////////////////////
              // var createA = document.createElement("a")
              // var createAText = document.createTextNode(theCounter)
              // createAText.setAttribute(
              //   `localhost:4000/activity/detail?id=${activity._id}`
              // )
              // createA.appendChild(createAText)
              ///////////////////////////////////////////////
              var createA = document.createElement("a")
              var createAText = document.createTextNode(`${activity.actName}`)
              createA.setAttribute(
                "href",
                `http://localhost:4000/activity/detail?id=${activity._id}`
              )
              createA.appendChild(createAText)
              // getTheTableTag.appendChild(createA)
              /////////////////////////////////////
              // const a = document.createElement("a")
              // const atext = document.createTextNode(pageurl)

              const text = document.createTextNode(`${activity.actName}`)
              // title.appendChild(text)
              // const page = document.URL
              const imgDiv = document.createElement("div")
              imgDiv.classList = "imgDiv"
              // const pic = document.createTextNode(`he`)
              imgDiv.style.backgroundImage =
                "url('" + activity.activityImage + "')"
              // img.appendChild(pic)
              // img.appendChild(text)
              imgDiv.appendChild(createA)
              d.appendChild(imgDiv)

              // d.appendChild(title)
              document.querySelector("#acti").appendChild(d)
            }
          })
        }
        // else if (element.innerText === "Capital") {
        //   di.innerHTML = ""
        //   a.forEach((activity) => {
        //     if (activity.Governorates === "capital") {
        //       const d = document.createElement("div")
        //       const title = document.createElement("h3")
        //       const text = document.createTextNode(`${activity.actName}`)
        //       title.appendChild(text)
        //       d.appendChild(title)
        //       document.querySelector("#acti").appendChild(d)
        //     }
        //   })
        // } else if (element.innerText === "Northern") {
        //   di.innerHTML = ""
        //   a.forEach((activity) => {
        //     if (activity.Governorates === "northern") {
        //       const d = document.createElement("div")
        //       const title = document.createElement("h3")
        //       const text = document.createTextNode(`${activity.actName}`)
        //       title.appendChild(text)
        //       d.appendChild(title)
        //       document.querySelector("#acti").appendChild(d)
        //     }
        //   })
        // } else if (element.innerText === "Southern") {
        //   di.innerHTML = ""
        //   a.forEach((activity) => {
        //     if (activity.Governorates === "southern") {
        //       const d = document.createElement("div")
        //       const title = document.createElement("h3")
        //       const text = document.createTextNode(`${activity.actName}`)
        //       title.appendChild(text)
        //       d.appendChild(title)
        //       document.querySelector("#acti").appendChild(d)
        //     }
        //   })
        // }
      })
      .catch((err) => {
        console.log(err)
      })
    // }
  })
})
