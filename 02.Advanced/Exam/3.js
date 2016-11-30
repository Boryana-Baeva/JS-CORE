class MailBox {
    constructor() {
        this.box = [];
        this.messageCount = 0;
    }

    addMessage(subject, text) {
        let message = [subject, text];
        this.box.push(message);
        this.messageCount++;
        return this;
    }

    deleteAllMessages(){
        this.box = [];
        this.messageCount = 0;
    }

    findBySubject(substr){
        let foundMessages = [];

        for (let msg of this.box) {
            if(msg[0].includes(substr)){
                let obj = {subject:`${msg[0]}`, text:`${msg[1]}`};
                foundMessages.push(obj);
            }
        }
        return foundMessages;
    }
    toString() {
        let list = '';
        for (let msg of this.box) {
            list += ` * [${msg[0]}] ${msg[1]}\n`;
        }
        if(list != ''){
            return list;
        }
        else {
            return ` * (empty mailbox)`;
        }

    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
