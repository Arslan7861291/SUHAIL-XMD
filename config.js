const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Lovelywrites43💔🥀" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923134091129";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923134091129";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_34_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICA1MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICA0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWencyZU1SQ3pXZEFtWHZ2RnpsdW0rZmlmMGxUNXgybGk1UldERUlCSHl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEzNDA5MTEyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEFGMTExMUU1MjhBNjY3Q0I1REUzNkU0NDkxREM5NkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3Mjc0ODU0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTM0MDkxMTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RjA5NjFCODlGQzUwNkEwMzI3RTM0MjczM0Q5OEY5QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjcyNzQ4NTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1hmclhNU0FSWkdoNnZab0IzNDVpQVwiLFxuICBcInBob25lSWRcIjogXCIzMTkzMTE0Mi01OTAxLTRlMmEtOGFkMy1hYzBiYWJmODYzN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMjAxLFxuICAgICAgMTYsXG4gICAgICA3NSxcbiAgICAgIDAsXG4gICAgICAxMTgsXG4gICAgICA4OCxcbiAgICAgIDQsXG4gICAgICAxNDUsXG4gICAgICAyNDMsXG4gICAgICAxODcsXG4gICAgICAyMDIsXG4gICAgICAyMzIsXG4gICAgICA1NixcbiAgICAgIDExMyxcbiAgICAgIDksXG4gICAgICA3OCxcbiAgICAgIDg5LFxuICAgICAgMTM2LFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDEyLFxuICAgICAgMTIyLFxuICAgICAgNjEsXG4gICAgICAxOTYsXG4gICAgICAxNjksXG4gICAgICA0MSxcbiAgICAgIDE1OCxcbiAgICAgIDEyNSxcbiAgICAgIDQ3LFxuICAgICAgNTMsXG4gICAgICAxNDYsXG4gICAgICAyMzAsXG4gICAgICAxNjYsXG4gICAgICAxMDcsXG4gICAgICAxMzUsXG4gICAgICAyNyxcbiAgICAgIDczLFxuICAgICAgMjUwLFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZGQVRKS1pLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMzQwOTExMjk6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNDkyNjU5MDkyMjc1OToyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYWcrV0VRMjc3UXR3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5weENJS0s0ZUlZYUx3Vi8xMzE5dEdmSldFOWtuTnB3SmNQTzZGTFF5VDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidDJBUS9XYXBMOG1DTzF2NTcwTW00amhhUWR5RG5VMGhKcUgrNVZXTFRRbGc0ZWlJME1jSDc5SVFWd3BBbVJoVVh1QTJFU1BwWFl3czNLZmYvMU9lQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVFRjRGh3U1J2WXNjMEg5ZTFtYmtYZVRBT1YxRTQzS3pONjB2ZVFVbHFUUThub0tyVGtRY0l4NjhBMlRUY0lLZUUwT1FtQ2QzeWovai9BQjY1cnlXQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTM0MDkxMTI5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3Mjc0ODQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSllXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKWVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXakJsYmdNVWFrV3g2bDh6bHc5MXBNa1o5N3lnS1VzVjlFRW1QUURONHFjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNTQxMDM1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3Mjc0ODU0MDEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Muhammad Husnain bhatti® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Lovelywrites43💔🥀",
  packname: process.env.PACK_NAME || "Lovelywrites43💔🥀",
  botname : process.env.BOT_NAME  || "Muhammad Husnain bhatti",
  ownername:process.env.OWNER_NAME|| "Muhammad Husnain bhatti",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
