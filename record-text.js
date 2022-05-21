const content = document.querySelector('.content')
const btnRecordText = document.querySelector('.btn-record')
/* Object for saved in micro */
const recognitionVoice = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new recognitionVoice()
/* method init record */
recognition.onstart = ()=>{
    content.innerHTML = 'Recording...'
}
/* Method for stop recorder */
recognition.onresult = event =>{
    let message = event.results[0][0].transcript
    content.innerHTML = message
    readTextCondition(message)
}
/* Function for speak it recorder */
const readTextSimple = (message)=>{
    const voice = new SpeechSynthesisUtterance()
    voice.text = message
    window.speechSynthesis.speak(voice)
}
/* Function condition */
const readTextCondition = (message)=>{
    const voice = new SpeechSynthesisUtterance()
    if(message.includes('Hi')){
        voice.text = 'Hello'
    }else{
        voice.text = message
    }
    window.speechSynthesis.speak(voice)
}
/* Event for record with the btn*/
btnRecordText.addEventListener('click', ()=>{
    recognition.start()
})