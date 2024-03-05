const question = document.querySelector('.question');
const anaouncement = document.querySelector('.anaouncement');
const restart = document.getElementById('restart')
const restrartDiv = document.querySelector('.restart');
let operator = ['+', '-', '*']
let randomVal = (max,min) => Math.floor(Math.random() * (max - min)) + min;
let turn = 0;

function genrateQue(){
    let currentOpt = operator[Math.floor(Math.random() * operator.length)];
    let [num1,num2] = [randomVal(1,20),randomVal(1,20)];

    if((num2 > num1) && (currentOpt == '-')){
        [num1,num2] = [num2,num1]
    }

    let result = eval(`${num1}${currentOpt}${num2}`)
    console.log(result)

    let randomVar = randomVal(1,5);
    let answer = '';

    if(randomVar == 1){
        question.innerHTML = `<input type='number' placeholder='?' id='userInput'>${currentOpt}${num2} = ${result}<br>
        <button id="submitBtn">Submit</button><div class='message'></div>`;
        answer += num1
    }else if(randomVar == 2){
        answer += currentOpt
        question.innerHTML = `${num1}<input type='text' placeholder='?' id='userInput'>${num2} = ${result}<br>
        <button id="submitBtn">Submit</button><div class='message'></div>`;
    }else if(randomVar == 3){
        answer += num2
        question.innerHTML = `${num1}${currentOpt}<input type='number' placeholder='?' id='userInput'> = ${result}<br>
        <button id="submitBtn">Submit</button><div class='message'></div>`
    }
    else{
        question.innerHTML = `${num1}${currentOpt}${num2} = <input type='number' placeholder='?' id='userInput'><br>
        <button id="submitBtn">Submit</button><div class='message'></div>`;
        answer += result
    }
    const subBtn = document.getElementById('submitBtn');
    const message = document.querySelector('.message');
    subBtn.addEventListener('click',()=>{
        const userInput = document.getElementById('userInput').value;
        if(userInput){
            if(userInput == answer){
                anaouncement.innerHTML = 'You Won';
                restrartDiv.classList.remove('showRestart')
                restart.innerHTML = 'Restart'
            }
            else{
                message.innerHTML = 'First You Write The correct Number / Operator'
            }
        }
        else{
            message.innerHTML = 'Empty box is Defind'
        }
    })
}
genrateQue()

restart.addEventListener('click',()=>{
    if(turn == 0){
        restrartDiv.classList.add('showRestart');
    }else{
        restrartDiv.classList.add('showRestart');
        genrateQue()
    }
    turn++
})
