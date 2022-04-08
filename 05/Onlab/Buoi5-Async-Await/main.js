// Promise : Lời hứa

// Hứa : Cuối năm đủ tiền 40 củ thì mua con Iphone 14 pro max
let money = 4;

function buyIphone() {
  return new Promise(function (resolve, reject) {
    if (money >= 40) {
      resolve("Mua iphone thôi 0");
    } else {
      reject("Cày tiếp đeeeeee 0");
    }
  });
}

function buyIphone1() {
    return new Promise(function (resolve, reject) {
      if (money >= 40) {
        resolve("Mua iphone thôi 1");
      } else {
        reject("Cày tiếp đeeeeeeee 1");
      }
    });
  }

// Hứa tiếp : Còn tiền thì mua air pod(4 củ)
function buyAirPod() {
  return new Promise(function (resolve, reject) {
    if (money >= 4) {
      resolve("Mua air pod thôi 0");
    } else {
      reject("Còn cái nịt í mà mua 0");
    }
  });
}

function buyAirPod1() {
    return new Promise(function (resolve, reject) {
      if (money >= 4) {
        resolve("Mua air pod thôi 1");
      } else {
        reject("Còn cái nịt í mà mua 1");
      }
    });
  }

async function buy() {
  try {
    let res = await buyIphone();
    console.log(res)

    let res1 = await buyAirPod();
    console.log(res1)
  } catch (error) {
      console.log(error)
  }
  return "Không mua nữa"
}

async function buy1() {
    try {
      let res = await buyAirPod1();
      console.log(res)
  
      let res1 = await buyIphone1();
      console.log(res1)
    } catch (error) {
        console.log(error)
    }
  }

buy1();
buy().then(res => console.log(res)).catch(err => console.log(err))

