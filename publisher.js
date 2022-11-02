const amqp = require('amqplib');

const message = process.argv[2];

async function connect() {
    const msgBuffer = Buffer.from(JSON.stringify(message));
 
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
    
        const channel = await connection.createChannel();
    
        await channel.assertQueue('message');
    
        channel.sendToQueue('message', msgBuffer);
    
        console.log('Sending message to queue');
    
        await channel.close();
        await connection.close();
    } catch (ex) {
       console.error(ex);
    }
}

connect();
