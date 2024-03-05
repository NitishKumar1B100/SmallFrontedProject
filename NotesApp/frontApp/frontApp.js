const addHeadBtn = document.querySelector('.add'),
storeHeadNote = document.querySelector('.noteHead'),
afterAddNote = document.getElementById('afterAddNote');

const showContent = document.querySelector('.showContent')
const headNoteName = JSON.parse(localStorage.getItem('headNameNote') || '[]')

function showHeadNotes(){
    document.querySelectorAll('#noteHead').forEach(noteHead => noteHead.remove())
    headNoteName.forEach((not,ind)=>{
        let creatTag = `
        <div id="noteHead">
            <h4 id='headtitle'>${not.text}</h4>
            <div class='timezone'>
                <div id='datezone'>
                    <small>${not.date}/${not.month}/${not.year}</small>
                </div>
                <div id='hourzone'>
                    <small>${not.hour}::${not.minute}</small>
                </div>
            </div>
        </div>
        `;
        afterAddNote.insertAdjacentHTML('afterend',creatTag)
    })
}
showHeadNotes()

function TextContent(){
    let textContent = document.createElement('div')
    textContent.classList.add('textContent')
    let textThere = document.createElement('div')
    textThere.classList.add('textThere')
    textContent.append(textThere)
    
    showContent.append(textContent)
}
addHeadBtn.addEventListener('click',()=>{
    headName = prompt('Type your head note name:')
    if(headName){
        let time = new Date(),
        dateEl = time.getDate(),
        monthEl = time.getMonth()+1,
        yearEl = time.getFullYear(),
        houEl = time.getHours(),
        minuttesEl = time.getMinutes();

        let headnoteInfo = {
            date:dateEl,
            month:monthEl,
            year:yearEl,
            hour:houEl,
            minute:minuttesEl,
            text:headName
        }

        headNoteName.push(headnoteInfo)
        localStorage.setItem('headNameNote',JSON.stringify(headNoteName))
        showHeadNotes()
    }
})