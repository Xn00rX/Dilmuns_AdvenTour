let B = document.querySelector(".btn")
// console.log(B)

B.addEventListener("click", () => {
  // console.log("hello")
  if (B.innerText === "button1") {
    axios
      .get("http://localhost:4000/activity/allMap")
      .then((activities) => {
        // console.log("activities", activities.data)
        let a = activities.data.activites
        // console.log(a[0])

        a.forEach((activity) => {
          if (activity.place === "Bahrain") {
            console.log(activity.actName)

            const d = document.createElement("div")
            const title = document.createElement("h3")
            const text = document.createTextNode(`${activity.actName}`)
            title.appendChild(text)
            d.appendChild(title)
            document.querySelector("#acti").appendChild(d)
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })

    // console.log("hello")
    activites.forEach((activity) => {
      const d = document.createElement("div")
      const title = document.createElement("h3")
      const text = document.createTextNode(`${activity.actName}`)
      title.appendChild(text)
      d.appendChild(title)
      document.querySelector("#acti").appendChild(d)
    })
  }
})
