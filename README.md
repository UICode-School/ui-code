# [ui-code](https://www.npmjs.com/package/ui-code)
Simples API de desenvolvimento para usuarios e alunos da UICode School

Criada no intuito de ajudar desenvolvedores a compartilhar seus codigos com os que precisam.
ui-code tem como principal alvo, desenvolvedores de [discordbots](https://discord.js.org/)

Links:
  - [UICode School](https://www.discord.gg/HPkbc8Y7xh)
  - [ui-code](https://www.npmjs.com/package/ui-code)
  - [Node](https://www.nodejs.org)
  - [discord.js](https://www.npmjs.com/package/discord.js)

# Instalação
Para usar a api ui-code, primeiro você precisa a instalar
```yml
npm install ui-code --save
//ou
yarn add ui-code
```
# Começando
Começamos criando uma conexão com a classe Client
```js
const Discord = require("discord.js"); //Principal dependencia da ui-code
const UICode = require("ui-code");

const client = new UICode.Client(Discord); //ui-code funciona 100% em conexão ao discord.js

client.on("ready", () => {
  console.log("Bot ligado com UICode");
})

client.login("token");
```

Para a api se conectar com sucesso, precisamos criar seu arquivo de configurações, arquivo esse que receberá o nome de `uicode.yml`
```yaml
name: "MeuProjeto"
version: "1.0.0"

secret: "Secret adiquirido em nosso bot de discord"
key: "Api-key adiquirida em nosso bot de discord"

bot_prefix: "!"
```

Com isso, acabamos com a configuração da ui-code

# Plugins
O Plugins são codigos implementares, que irão ajudar você a personalizar seu bot sem ter que programar muito
```js
const Discord = require("discord.js");
const UICode = require("ui-code");

const client = new UICode.Client(Discord);

client.on("ready", () => {
  client.plugin("music"); //Alguns plugins são do nosso sitemas, mas tambem, tem os da comunidade que estão disponiveis em nosso forum
  //Após conectar um plugin, basta dar client.<nome do plugin>.função()
});

client.login("token");
```
