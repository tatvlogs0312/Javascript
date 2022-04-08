// Promise : Lời hứa

// Hứa : Cuối năm đủ tiền 40 củ thì mua con Iphone 14 pro max
let money = 4

function buyIphone(){
    return new Promise(function(resolve , reject){
        if(money >= 40){
            resolve("Mua iphone thôi")
        }
        else{
            reject("Cày tiếp đeeeeee")
        }
    })
}

// Hứa tiếp : Còn tiền thì mua air pod(4 củ)
function buyAirPod(){
    return new Promise(function(resolve,reject){
        if(money >= 4){
            resolve("Mua air pod thôi")
        }
        else{
            reject("Còn cái nịt í mà mua")
        }
    })
}

//Thực hiện đồng bộ

// buyIphone()
//     .then(res => {
//         console.log(res)
//         return buyAirPod();
//     })
//     .then(res =>{
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("Đừng mua nữa mang tiền về cho mẹ")
//     })

//Thực hiện bất đồng bộ

// buyIphone()
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// buyAirPod()
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

Promise.all([buyIphone() , buyAirPod()])
    .then(res => console.log(res))
    .catch(err => console.log(err))