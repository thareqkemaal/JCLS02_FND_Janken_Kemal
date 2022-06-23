let playerResult = '';
let pcResult = '';
let resultArr = [];


const btnGunting = () => {
    document.getElementById("showbatu").style.display = "none";
    document.getElementById("showkertas").style.display = "none";
    document.getElementById("showgunting").style.display = "block";
    pcRandom();
    playerResult = 'gunting';
    result();
    console.log(resultArr);
    printResult();
};

const btnBatu = () => {
    document.getElementById("showbatu").style.display = "block";
    document.getElementById("showkertas").style.display = "none";
    document.getElementById("showgunting").style.display = "none";
    pcRandom();
    playerResult = 'batu';
    result();
    console.log(resultArr);
    printResult();
};

const btnKertas = () => {
    document.getElementById("showbatu").style.display = "none";
    document.getElementById("showkertas").style.display = "block";
    document.getElementById("showgunting").style.display = "none";
    pcRandom();
    playerResult = 'kertas';
    result();
    console.log(resultArr);
    printResult();
};

const pcRandom = () => {
    let number = ['gunting', 'batu', 'kertas'];
    let index = 0;
    
    index = Math.floor(Math.random() * number.length);

    if (number[index] == 'gunting'){
        document.getElementById("pcbatu").style.display = "none";
        document.getElementById("pckertas").style.display = "none";
        document.getElementById("pcgunting").style.display = "block";
        pcResult = 'gunting';
    } else if (number[index] == 'batu'){
        document.getElementById("pcbatu").style.display = "block";
        document.getElementById("pckertas").style.display = "none";
        document.getElementById("pcgunting").style.display = "none";
        pcResult = 'batu';
    } else if (number[index] == 'kertas'){
        document.getElementById("pcbatu").style.display = "none";
        document.getElementById("pckertas").style.display = "block";
        document.getElementById("pcgunting").style.display = "none";
        pcResult = 'kertas';
    }

    console.log(number[index]);
};


const result = () => {
    let user = playerResult;
    let pc = pcResult;

    // user win
    if ((user == 'gunting' && pc == 'kertas') || (user == 'batu' && pc == 'gunting') || (user == 'kertas' && pc == 'batu')){
        document.getElementById("winnerdisplay").innerHTML = "Player WIN 🥇"
        resultArr.push({win: 1, lose: 0, draw: 0, point: 25});
        
    // pc win
    } else if ((user == 'kertas' && pc == 'gunting') || (user == 'gunting' && pc == 'batu') || (user == 'batu' && pc == 'kertas')){
        document.getElementById("winnerdisplay").innerHTML = "CPU WIN ❌"
        resultArr.push({win: 0, lose: 1, draw: 0, point: 0});
    // draw
    } else if ((user == 'gunting' && pc == 'gunting') || (user == 'batu' && pc == 'batu') || (user == 'kertas' && pc == 'kertas')){
        document.getElementById("winnerdisplay").innerHTML = "its a DRAW 🤝"
        resultArr.push({win: 0, lose: 0, draw: 1, point: 0});
    }
};

const printResult = () => {
    let totalWin = 0;
    let totalDraw = 0;
    let totalLose = 0;
    let totalPoint = 0;

    resultArr.forEach((val, idx) => {
        if (val.win >= 0 || val.draw >= 0 || val.lose >= 0 || val.point >= 0){
            totalWin += val.win;
            totalDraw += val.draw;
            totalLose += val.lose;
            totalPoint += val.point;
        };
    });

    document.getElementById("win").innerHTML = `WIN : ${totalWin}`;
    document.getElementById("lose").innerHTML = `LOSE : ${totalLose}`;
    document.getElementById("draw").innerHTML = `DRAW : ${totalDraw}`;
    document.getElementById("point").innerHTML = `POINT : ${totalPoint}`;
};
