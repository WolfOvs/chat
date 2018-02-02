
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
                    'message': ''
                }
                messages.push(textChatValue);
                textChatArray.push(profileObj);
                textChatArray[textChatArray.length - 1].message = textChatValue;
                console.log(textChatArray);
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
            htmlChatMessage+= "<div class='message-container me'>";
            htmlChatMessage+= "<div class='avatar-container'>";
            htmlChatMessage+= "<div class='avatar'>";
            htmlChatMessage+= "<img src=" + textChatArray[i].avatar + ">";
            htmlChatMessage+="</div>";
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
        'avatar':'http://www.alternativenation.net/wp-content/uploads/2017/02/Quentin-Tarantino-1.jpg',
        'message': ''
    }
    if(messages.includes('Bien')) {
        textChatArray.push(profileObj);
        textChatArray[textChatArray.length - 1].message = 'What are you doing this night?!';
    }
    console.log('donna', textChatArray);
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
