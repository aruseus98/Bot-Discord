const Commando = require('discord.js-commando')

module.exports = class ImageCommand extends Commando.Command{
    constructor(client){
        super(client,  {
            name :'image',
            group: 'misc',
            memberName: 'image',
            description: 'Sends an image'
        })
    }

    run = (message) => {
        message.reply('Here is an image')
    }
}

