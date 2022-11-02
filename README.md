# RabbitMQ PoC

### This is a PoC to demonstrate the working of queuing mechanism through publisher-consumer method using RabbitMQ.

<br>

#### How to use

Once this repo is cloned, install the dependencies

```sh
npm ci
```

Run the consumer

```sh
node consumer.js
```

Put messages in the queue using the producer

```sh
node publisher.js 'Hello World'
```

The hello world message will be picked up by the consumer and logged into the console.
