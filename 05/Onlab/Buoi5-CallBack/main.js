function doTask1(name ,callback){
    console.log("Bắt đầu công việc");
    console.log(`${name}`);
    setTimeout(function (){
        callback();
    },3000)
}

function doTask2(name , callback){
    console.log(`${name}`);
    setTimeout(function (){
        callback();
    },4000)
}

function doTask3(name , callback){
    console.log(`${name}`);
    setTimeout(function (){
        callback();
    },2000)
}

function finish(){
    console.log("Kết thúc công việc")
}

// Thực hiện nối tiếp
doTask1("Hít", function(){
    doTask2("Thở",function(){
        doTask3("Hít",finish)
    })
})

// Thực hiện song song
doTask3("Chơi game" , finish)