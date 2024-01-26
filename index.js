const { Client, IntentsBitField } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");
const { apikey, channelid } = require("./config.json");
const chalk = require("chalk");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
client.on("ready", () => {
  console.log(chalk.red`[START]` + ` Bot Aktif`);
});

client.on("ready", () => {
  client.user.setActivity("**FSE KLANS İyi Oyunlar Diler.");
});

const configuration = new Configuration({
  apiKey: apikey,
});
const openai = new OpenAIApi(configuration);

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.channel.id !== channelid) return;
  if (message.content.startsWith("!")) return;

  let conversationLog = [{ role: "system", content: "FSE KLANS Bot" }];

  try {
    await message.channel.sendTyping();

    let prevMessages = await message.channel.messages.fetch({ limit: 15 });
    prevMessages.reverse();

    prevMessages.forEach((msg) => {
      if (message.content.startsWith("!")) return;
      if (msg.author.id !== client.user.id && message.author.bot) return;
      if (msg.author.id !== message.author.id) return;

      conversationLog.push({
        role: "user",
        content: msg.content,
      });
    });

    const result = await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversationLog,
      })
      .catch((error) => {
        console.log(`OPENAI ERR: ${error}`);
      });

    message.reply(result.data.choices[0].message);
  } catch (error) {
    console.log(`ERR: ${error}`);
  }
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'sa') {
msg.channel.send('**Aleyküm Selam, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'selam') {
msg.channel.send('**Selam, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'merhaba') {
msg.channel.send('**Merhaba, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'mrb') {
msg.channel.send('**Merhaba, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'mrblar') {
msg.channel.send('**Merhaba, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'görüşürüz') {
msg.channel.send('**Görüşürüz, Seni Yine Bekleriz :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'iyi geceler') {
msg.channel.send('**İyi Geceler, Seni Yine Bekleriz :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'iyi geceler allaha emanet olun') {
msg.channel.send('**İyi Geceler Sende Allaha Emanet Ol, Seni Yine Bekleriz :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'iyi geceler allaha emanet ol') {
msg.channel.send('**İyi Geceler Sende Allaha Emanet Ol, Seni Yine Bekleriz :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'bb') {
msg.channel.send('**Bay Bay, Seni Yine Bekleriz :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'iyi geceler herkeze') {
msg.channel.send('**İyi Geceler, Seni Yine Bekleriz :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'güno') {
msg.channel.send('**Günaydın Hayırlı Sabahlar, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'günaydın') {
msg.channel.send('**Günaydın Hayırlı Sabahlar, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'günaydınlar') {
msg.channel.send('**Günaydın Hayırlı Sabahlar, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'naber') {
msg.channel.send('**İyi sen?, Hoşgeldin Sunucumuza :) **');
}
});

client.on('messageCreate', msg => {
if (msg.content.toLowerCase() === 'selamlar') {
msg.channel.send('**Selam, Hoşgeldin Sunucumuza :) **');
}
});

// Sunucu oluşturma ve proje aktivitesi sağlama.
const express = require('express');
const app = express();
const port = 3000;

// Web sunucu
app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı bağlantı noktasında yürütülüyor.`);
});

client.login(process.evn.token);

// VOİD
