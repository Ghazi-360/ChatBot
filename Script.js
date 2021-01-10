
const dots = createDots();

function createDots() {
	const el = document.createElement('button');
    el.id = 'Text';
	el.innerHTML = `
  	<span>o</span>
    <span>o</span>
    <span>o</span>
  `
	return el;
}

function showDots() {
  document.getElementById('messageContainer').appendChild(dots);
}

function hideDots() {
    document.getElementById('Text').remove();
}


const messages = [
  "Hey",
  "Pssst",
  "How have you been here?",
  "I have got something to show you",
  "Wanna See?"
]

function writeMessage(index) {
	if(index === messages.length) return;
  
  const message = messages[index];
  const duration = getMessageLoadingDuration(message);
  showDots();
  
  setTimeout(() => {
    const btn = document.createElement('button');
    btn.className = 'newButton';
    btn.innerHTML = message;
    document.getElementById('messageContainer').appendChild(btn);
    hideDots();
    writeMessage(index+1)
  }, duration)
}


// compute message loading duration
function getMessageLoadingDuration(message) {
	//in here you could use message.length to show dots for longer duration based on the length of the message
  const randomNum = 1000 + Math.random() * 1000;
  return Math.round(randomNum / 100) * 100;
}


function writeMessages() {
	writeMessage(0);
}


writeMessages();

function decide() {
    var answer = document.querySelector(".submit").value;
    if(answer == "yes" || answer == "Yes" || answer == "YES") {
        showFirstMsg();
        sendFirstMsg();
    } 
    else if (answer == "no" || answer == "No" || answer == "NOS") {
        showSecondMsg();
        sendSecondMsg();
    } else {
        alert("Please reply with a yes or no.");
    }
}

function showFirstMsg () {
    document.getElementById('messageContainer').appendChild(dots);
    const duration = getMessageLoadingDuration();
    showDots();

    setTimeout(() => {
        const btn = document.createElement('button');
        btn.className = 'newButton';
        btn.innerHTML = "New Message";
        document.getElementById('messageContainer').appendChild(btn);
        hideDots();
      }, duration)
}

function showSecondMsg () {
    document.getElementById('messageContainer').appendChild(dots);
    const duration = getMessageLoadingDuration();
    showDots();

    setTimeout(() => {
        const btn = document.createElement('button');
        btn.className = 'newButton';
        btn.innerHTML = "New Message 2";
        document.getElementById('messageContainer').appendChild(btn);
        hideDots();
      }, duration)
}

function sendFirstMsg () {
    var content = document.getElementById("userInput").value;
    
    const btn = document.createElement('button');
    btn.className = 'userInputBtn';
    btn.innerHTML = content;
    document.getElementById('messageContainer').appendChild(btn);
}

function sendSecondMsg () {
    var content = document.getElementById("userInput").value;
    
    const btn = document.createElement('button');
    btn.className = 'userInputBtn';
    btn.innerHTML = content;
    document.getElementById('messageContainer').appendChild(btn);
}