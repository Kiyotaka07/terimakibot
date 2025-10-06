module.exports = {
 config: {
 name: "respect",
 aliases: ["adminme"],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },

 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);

 const permission = ["100093016749575",  "61558102884886" ];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "Tere aaukat ke bahar hai Madarchod 😈",
 event.threadID,
 event.messageID
 );
 }

 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);

 api.sendMessage(
 `✅| God Alwaysone Samma  ! You are now an admin in this thread. Show them their place 😈`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("Sorry my lord I can't assist with the request .", event.threadID);
 }
 },
};
