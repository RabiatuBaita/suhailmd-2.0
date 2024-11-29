const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_56_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJENEJSMkd3aFhsZXRLU3U1M3dZN3JHWVNGNVJ1QmJHVkM0eTNzVENUOTdZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKeTJtTm94TVNqRzNIbmpQWVplNEZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE1OWIxN2QzLTUxYjItNGYzNS05NTQ5LTZjNjEyODFkNzM3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAyMDgsXG4gICAgICAyMDcsXG4gICAgICAyMDcsXG4gICAgICAxNDEsXG4gICAgICAxNDQsXG4gICAgICA4MyxcbiAgICAgIDE5MixcbiAgICAgIDExMyxcbiAgICAgIDE5MyxcbiAgICAgIDE1OSxcbiAgICAgIDcwLFxuICAgICAgMTg3LFxuICAgICAgNDMsXG4gICAgICAxMTcsXG4gICAgICAxOTAsXG4gICAgICAxODEsXG4gICAgICAyNyxcbiAgICAgIDE0NixcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAyMzMsXG4gICAgICA1MixcbiAgICAgIDQyLFxuICAgICAgOTYsXG4gICAgICAyMzIsXG4gICAgICA3NCxcbiAgICAgIDIxMixcbiAgICAgIDExNyxcbiAgICAgIDE4LFxuICAgICAgMjYsXG4gICAgICAzLFxuICAgICAgNTksXG4gICAgICA1NCxcbiAgICAgIDExNixcbiAgICAgIDg2LFxuICAgICAgMjQ4LFxuICAgICAgNDQsXG4gICAgICA4MyxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOTlI1NDFaRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTA0MTE5MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MjA3NDAzNjUwMjc2NzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXN3Zya0hFTm1BcUxvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaDQ2a0ptVjBNSmNUMElJb1o4UjhibDB6dEkzT3JSQWdnem42dXdSeEFuRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzaTIzVVkvU0UvbEpyOVdPa3g4VmhZanNZMHR6NS9pWTdLa3hoN3JwN0dUYTBhU3I5VlovR1B0elA3cDdtM0dMdlZiL1pPTDE0cjdpMER0OXRsMVJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDTE5EZWY4TklvYUduSnQ5S1RBcGxxNHJRQlBwZ2ttbnZnV25yNDZ3a0I4Mmd4TU5Nb0EzTjl6UUNQVU91bDlnbzdxMGxRRURaek9Pa1Z3NThjT1NoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDgxMDQxMTkwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjkwMzAxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
