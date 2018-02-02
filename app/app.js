
let textChatArray = [];
let messages = [];

if (localStorage["textChatArray"]) {
    let stored_datas = JSON.parse(localStorage["textChatArray"]);
    textChatArray = stored_datas;
    buildChat();
}

if ( document.getElementById("textbox")) {
    scrollChatBottom();
    document.getElementById("textbox").onkeyup = function(e){
        if (e.keyCode == 13) {
            let textChatValue = document.getElementById('textbox').value;
            if(textChatValue.length > 0) {
                let profileObj = {
                    'avatar':'http://www.alternativenation.net/wp-content/uploads/2017/02/Quentin-Tarantino-1.jpg',
                    'message': '',
                    'user': 'me'
                }
                
                messages.push(textChatValue);
                textChatArray.push(profileObj);
                textChatArray[textChatArray.length - 1].message = textChatValue;

                checkMessage();
            }
            if(textChatValue.length > 0) {
                buildChat();
            }
        document.getElementById('textbox').value = '';
        scrollChatBottom();
        }
        scrollChatBottom();
        localStorage["textChatArray"] = JSON.stringify(textChatArray);

        let stored_datas = JSON.parse(localStorage["textChatArray"]);
    };
}

function buildChat() {
    var htmlChatMessage = "<div>";
        for (var i = 0; i < textChatArray.length; i++) {
            if (textChatArray[i].user === 'me') {
                htmlChatMessage+= "<div class='message-container me'>";
            } else {
                htmlChatMessage+= "<div class='message-container you'>";
            }
            htmlChatMessage+= "<div class='avatar-container'>";
            htmlChatMessage+= "<div class='avatar'>";
            htmlChatMessage+= "<img src=" + textChatArray[i].avatar + ">";
            htmlChatMessage+="</div>";
            if (textChatArray[i].user === 'her') {
            htmlChatMessage+="<div class='flag'></div>";
            }
            htmlChatMessage+="</div>";
            htmlChatMessage+= "<div class='message-text-container'>";
            htmlChatMessage+= "<div class='text'>" + textChatArray[i].message + "</div>";
            htmlChatMessage+="</div>";
            htmlChatMessage+="</div>";
        }
        htmlChatMessage+="</div>";
    if ( document.getElementById("attachContainer")) {
        document.getElementById("attachContainer").innerHTML = htmlChatMessage;
    }
}

function scrollChatBottom() {
    let chatBox = document.getElementsByClassName("chat-container")[0];
    chatBox.scrollTop = chatBox.scrollHeight;
}

let addFriendBtn = document.getElementsByClassName("add-friend")[0];
let bodyTag = document.getElementsByTagName('body')[0];

let isFriend = false;

function goToChatPage() {
    if (addFriendBtn.classList.contains("isFriend")) {
        location.href = "chat.html";
    }
}

function checkMessage() {
    let profileObj = {
        'avatar':'https://avatarfiles.alphacoders.com/522/52255.jpg',
        'message': '',
        'user': 'her'
    }

    let str = 'Bien! And you?!';

    if (messages.some(function(v) { 
      return str.indexOf(v) >= 0; 
    })) {
    textChatArray.push(profileObj);
    textChatArray[textChatArray.length - 1].message = 'Im bored. What you will do this night?!';
  }
}

if(addFriendBtn) {
    isFriend = JSON.parse(localStorage.getItem("isFriend"));
    addFriendBtn.addEventListener('click', function(event) {
        if (!addFriendBtn.classList.contains("isFriend")) {
            addFriendBtn.classList.add("isFriend");
            bodyTag.classList.add("isFriend");
            addFriendBtn.innerHTML = "REMOVE AS FRIEND";
            let isFriend = true;
            localStorage.setItem("isFriend", JSON.stringify(isFriend));
        } else {
            addFriendBtn.classList.remove("isFriend");
            bodyTag.classList.remove("isFriend");
            addFriendBtn.innerHTML = "ADD AS FRIEND";
            let isFriend = false;
            localStorage.setItem("isFriend", JSON.stringify(isFriend));
        }
    });

    if (isFriend === true) {
        addFriendBtn.classList.add("isFriend");
        bodyTag.classList.add("isFriend");
    }
};
