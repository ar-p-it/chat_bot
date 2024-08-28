const chatinput = document.querySelector(".chat-input textarea");
const sendChatbtn =document.querySelector(".chat-input span");
const chatbox =document.querySelector(".chatbox");
const chatbotoggler =document.querySelector(".chatbot-toggler")

 
let usermessage;
const API_KEY="";

const creatchatli = (message,classname) =>{
    const chatli = document.createElement("li");
    chatli.classList.add("chat",classname);
    let chatcontent = classname ==="outgoing"?`<p>${message}</p>`:`<img src="images/bot.jpg" alt=""><p>${message}</p>`
  chatli.innerHTML=chatcontent;
  return chatli;
}

const generateResponse = ()=>{
    const API_URL = "https://api.openai.com/v12/chat/completions";
    const requestoptions={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorisation":'Bearer ${API_KEY}'
        },
        body:JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role:"user",content:usermessage}]
        })
    }

}

const handlechat = ()=>{
    usermessage = chatinput.value.trim();   
        if(!usermessage) return;


        chatbox.appendChild(creatchatli(usermessage,"outgoing"));
        setTimeout(()=>{
            chatbox.appendChild(creatchatli("Thinking...","incoming"));
        },600);

}

chatbotoggler.addEventListener("click",() => document.body.classList.toggle("show-chatbot"));

sendChatbtn.addEventListener("click",handlechat);