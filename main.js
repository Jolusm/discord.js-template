/*
    Discord Bot Template    
    Made by Jolusm#2286 on 21/11/2021 

    Guide (will be posted soon): https://www.youtube.com/channel/UCiAjPo2-mTaqS-xup4cvuvQ
*/

// Base
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js'); 
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] }); 
const { MessageEmbed } = require('discord.js'); // Required for Embedded Messages

//Config related
const config = require("./config.json") 
const prefix = config.prefix // Bot prefix is '*'


//Ready message 
client.on('ready', () => {
    console.log(`${client.user.tag}, ready`)
})

//Messages handler
client.on('message', message => {
    if(message.content === `${prefix}command`){

    }
})
//Bot Login
client.login(config.login)
