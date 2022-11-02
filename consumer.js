const amqp = require("amqplib");

async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        
        const channel = await connection.createChannel();
        
        await channel.assertQueue("message");
        
        channel.consume("message", message => {
            console.log('Received Message : ', message.content.toString());
            const input = JSON.parse(message.content.toString());
            channel.ack(message);
        });
        
        console.log(`Waiting for messages...`);
    } catch (ex) {
        console.error(ex);
    }
}

connect();