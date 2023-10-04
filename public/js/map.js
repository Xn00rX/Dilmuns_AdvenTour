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
              const text = document.createTextNode(`${activity.actName}`)
              title.appendChild(text)

              const img = document.createElement("div")
              img.classList = "pic"
              const pic = document.createTextNode(`he`)
              img.style.backgroundImage =
                "url('" + activity.activityImage + "')"

              img.appendChild(pic)
              d.appendChild(img)

              d.appendChild(title)
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
