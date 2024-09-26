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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_49_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMTU2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUwLFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInIxUzJTSDJCN05KQzlKMm16RXh4YWVndmxkeUI1RlRXb1BueE9UQWhPSTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTM0MDkxMTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MjRDOUI3QUMwMEZBNTA3NDc5NDdEMTRFMERDMEYzMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjczNDA1MzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMzQwOTExMjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM3NjJGNzZEMkM4RUFGNkIyMUNDNjUxNDVDNzMwNTFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzM0MDUzNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjLUxVSHI3NFFvZTdZZm0zS1lRY1FnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5YjNhNTExLTIwZmYtNGIxNC1hNzUxLWRkNGYyNjM4YjYwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxMDAsXG4gICAgICAxODksXG4gICAgICAxNTMsXG4gICAgICAyMSxcbiAgICAgIDkzLFxuICAgICAgOTAsXG4gICAgICAyMjUsXG4gICAgICAxMjAsXG4gICAgICAyMTEsXG4gICAgICAxMDQsXG4gICAgICAwLFxuICAgICAgMjQ2LFxuICAgICAgMTA2LFxuICAgICAgNDIsXG4gICAgICAxOTUsXG4gICAgICAxNjYsXG4gICAgICAyNDgsXG4gICAgICA2OSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDEzNCxcbiAgICAgIDE5NyxcbiAgICAgIDQ5LFxuICAgICAgMTgxLFxuICAgICAgMzYsXG4gICAgICAyMjEsXG4gICAgICAxNzksXG4gICAgICAyMzksXG4gICAgICAxODAsXG4gICAgICAxNzcsXG4gICAgICAxNjgsXG4gICAgICAxMzUsXG4gICAgICAxMjQsXG4gICAgICAyMzIsXG4gICAgICA3NCxcbiAgICAgIDE3NSxcbiAgICAgIDE1MixcbiAgICAgIDI0MixcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCSzlaTVhOU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTM0MDkxMTI5OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ5MjY1OTA5MjI3NTk6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG1nK1dFUThML1V0d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOcHhDSUtLNGVJWWFMd1YvMTMxOXRHZkpXRTlrbk5wd0pjUE82RkxReVQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInh6SjloMVN0UWJycEp2dm8xZnU2V0NuSGJpaWR0dVRDZ0VmVWg5UlJtOWFma2JWS1RnT29XQkhrZk1hQjJ1N2tkc3pYWVNiR0U3MnlOd2VsaTBNZkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNlVlpZczhkUlFrbGRQb3VPQXVnN0Z3UU5XZEttRUFBYXBVL0ZCYU5ydTVzZDN0VE0xc2xqQXhibXR2eU1rWHpSanBTVU5tN216UmxFYWlwOUxUMmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzNDA5MTEyOToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzM0MDUzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpZWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSllaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVTBBMlplN1REZE9VZVdDSEV1dUczTFQ0aDhEcmlMUEZrNDNKdjVXVm83OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU0MTAzNjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzM0MDUzNjE5MVwifSIKfQ=="  // PUT your SESSION_ID 


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
