const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const greetings = [
    'Good, Thanks For asking'
 
];

 const weather = [
     'Its sunny',
     'its dark today',
 ]
 const myName = [
     'my name is Machine',
     'i am the machine'
 ]
 const age = [
    'i am hundred years old'
]
const creation = [
    'Harold Finch Created Me'
]
const coWorkers = [
    'I work with John Reese, Root and Miss Show'
]


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated');
    
};
recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};
btn.addEventListener('click', () =>{
    recognition.start();
}) 

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    

    if(message.includes('how are you')){
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
    }else if(message.includes('weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)]
        speech.text = finalText
    }else if(message.includes('your name')){
        const finalText = myName[Math.floor(Math.random() * myName.length)]
        speech.text = finalText
    }
    else if(message.includes('old are you')){
        const finalText = age[Math.floor(Math.random() * age.length)]
        speech.text = finalText
    }
    else if(message.includes('created you')){
        const finalText = creation[Math.floor(Math.random() * creation.length)]
        speech.text = finalText
    }
    else if(message.includes('do you have agents')){
        const finalText = coWorkers[Math.floor(Math.random() * coWorkers.length)]
        speech.text = finalText
    }
    else if(message.includes('close the machine')){
        window.close();
    }
    else if(message.includes('open Google')){
        window.open('https://www.google.com', '_blank');
    }
    else if(message.includes('open Youtube')){
        window.open('https://www.youtube.com', '_blank');
    }
    else if(message.includes('open Instagram')){
        window.open('https://www.instagram.com', '_blank');
    }
    else{
        speech.text = 'i couldnt understand';
    }
    
    
    
    
    

    speech.volume = 3;
    speech.rate = 0.85;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
