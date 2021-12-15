## Application Details

|                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- |
| **1 - Instalar o Typescript**<br>npm i -D typescript                                                                             |
| **2 - Instalar o Sucrase**<br>npm i -D sucrase                                                                                   |
| **3 - Instalar o Nodemon**<br>npm i -D nodemon                                                                                   |
| **4 - Criar o arquivo nodemon.json**<br>{"watch": ["src"],"ext": "ts","execMap": { "ts": "sucrase-node src/server.ts"}}          |
| **5 - Criar o script de build**<br>"build": "sucrase .src -d ./dist --transforms typescript, imports"                            |
| **6 - Instalar eslint**<br> npm install eslint --save-dev                                                                        |
| **7 - Instalar eslint parser**<br> npm i @typescript-eslint/parser -D                                                            |
| **8 - Instalar eslint plugin**<br> npm i @typescript-eslint/eslint-plugin -D                                                     |
| **9 - Instalar eslint config-prettier**<br> eslint-config-prettier -D                                                            |
| **10- Instalar eslint plugin**<br> npm i eslint-plugin-prettier -D                                                               |
| **11- Iniciar configuação do ESLint**<br> npx eslint --init                                                                      |
| **11 - Seleciionar a verificação de sintaxe e problemas**<br> selecionar To check syntax, find problems, and enforce code style  |
| **12 - Selecionar Javascript**<br> JavaScript modules (import/export)                                                            |
| **13 - Informar que o projeto usa TypeScript?**<br>                                                                              |
| **14 - Informar que o projeto roda no Node**<br>                                                                                 |
| **15 - Informar "Use a popular style guide"**<br>                                                                                |
| **16 - Selecionar guia Standard**<br>                                                                                            |
| **17 - Selecionar javascript como formato de arquivo de configuração**<br>                                                       |
| **18 - No aqrquivo .eslintrc.js informar na linha 2**<br> parser: "@typescript-eslint/parser"                                    |
| **18 - No aqrquivo .eslintrc.js informar na linha 8**<br> plugins: ['@typescript/eslint']                                        |
| **19 - No aqrquivo .eslintrc.js alterar o array extends na linha 9**<br> Verificar este projeto                                  |
| **20 - Alterar o arquivo settings.json**<br> ctrl+shift+p -> settings.json                                                       |
| **21 - Alterar o arquivo settings.json**<br> "eslint.validate": ["javascript","javascriptreact","typescript","typescriptreact" ] |
| **22 - Alterar o arquivo settings.json**<br> "[typescript]":{ "editor.formatOnSave": false },                                    |
| **23 - Alterar o arquivo settings.json**<br> "[typescriptreact]":{ "editor.formatOnSave": false },                               |
| **24 - Criar o arquivo .eslintignore**<br> /\*.js node_modules dist                                                              |
