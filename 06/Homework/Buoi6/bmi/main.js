const btnGet = document.getElementById("button-get")
const btnPost = document.getElementById("button-post")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const result = document.getElementById("result")
const btnReset = document.getElementById("reset")

btnGet.addEventListener("click" ,async function(){
    try {
        let h = (Number)(height.value)
        let w = (Number)(weight.value)
        let res = await axios.get(`http://localhost:8080/bmi?height=${h}&weight=${w}`)

        console.log(res)

        result.value = res.data
    } catch (error) {
        alert(error.response.data.message)
    }
})

btnPost.addEventListener("click",async function(){
    try {
        let h = (Number)(height.value)
        let w = (Number)(weight.value)
        let res = await axios.post(`http://localhost:8080/bmi` , {
            height : h,
            weight : w,
        })

        result.value = res.data
    } catch (error) {
        alert(error.response.data.message)
    }
})

btnReset.addEventListener("click" , function(){
    weight.value = ""
    height.value = ""
    result.value = ""
})