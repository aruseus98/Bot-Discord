const { Client } = require('discord.js')
const config = require('./config.json')
const Commando = require('discord.js-commando')

const client = new Client({
    partials: ['GUILD_MEMBER', 'CHANNEL', 'USER', 'REACTION']
})

client.on('ready', () => {
    console.log('Le bot est connecté !')

    client.user.setActivity('Imagine, Nanalyn est une chips', {
    })
})

client.login(config.token)

//Commande du bots
client.on('message', (message) => {
    if (message.content === '!Spot Elem') { //Affiche le spot des élems
        message.channel.send('Spots des élémentaires', {
            files: [
                "./Elem.png"
            ]
        });
    }

    if (message.content === '!Spot Stars') { //Affiche le spot des stars
        message.channel.send('Spots des monstres élites', {
            files: [
                "./Stars.png"
            ]
        });
    }

    if (message.content === '!Run') { //Affiche la liste des équipes
        message.channel.send('Liste des équipes', {
            files: [
                "./Run.png"
            ]
        });
    }

    if (message.content === '!Nalyn') { //Ping Nalyn
        message.channel.send('Bonjour <@150693502324441088>, do you need help ?');
    }

    if (message.content === '!Plue') { //Ping Plue
        message.channel.send('Oui <@154346403378888704> est un traître !');
    }

    if (message.content === '!Aru') { //Ping Aru
        message.channel.send('Oui <@275721703416397825> est trop gentil');
    }

    
    if (message.content === '!Maggy') { //Ping Maggy TEST
        message.channel.send("Bonjour <@265371648184680449>, avez-vous besoin d'aide ?");
    }

    if (message.content === '!Temoin') { //Ping Nalyn
        message.channel.send('<@&558006957181501505>, je suis en plein test pour le futur !');
    }
});
