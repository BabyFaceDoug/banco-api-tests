# 🏦 banco-api-tests

## Objetivo  
Este projeto realiza  testes automatizados na API REST , validando suas funcionalidades e contribuindo a qualidade de suas operações.

## 🧰 Stack Utiçlizada  
- **JavaScript** (Node.js)  
- **Mocha** – framework de testes  
- **SuperTest** – para enviar requisições HTTP  
- **Chai** – biblioteca de assertions  
- **dotenv** – para carregar variáveis de ambiente  
- **mochawesome** – para geração de relatórios HTML  
- Outras dependências estão listadas no `package.json`

## 📁 Estrutura de diretórios  
```
banco-api-tests/
├── tests/                    #Testes organizados por funcionalidades
│   ├── login.test.js
│   ├── transacoes.test.js
├── mochawesome-report/       ← relatórios HTML gerados pelo mochawesome
├── .env                               #Diretorio gerado automaticamente com o relatorio HTML  
├── .gitgnore
├── package.json
└── README.md
```

## 🔧 Arquivo `.env`  
Você precisa criar o seu próprio `.env` baseado no arquivo `.env.example`. Ele deve conter:

```
BASE_URL=http://localhost:3000
```

- **BASE_URL**: URL base da API a ser testada (exemplo: `http://localhost:3000` ou URL de ambiente remoto)

## 🚀 Comandos úteis  

### Instalar dependências  
```bash
npm install
```

### Executar os testes  
```bash
npm test
```

Por padrão, esse comando executa o Mocha com SuperTest e Chai.

### Gerar relatório HTML com mochawesome  
Se o `package.json` estiver configurado, o próprio `npm test` já poderá gerar o relatório. Mas você também pode rodar separadamente:

```bash
npx mocha --reporter mochawesome
```

Isso cria o relatório no diretório `reports/mochawesome-report/`.

### Visualizar o relatório  
Abra o arquivo `reports/mochawesome-report/mochawesome.html` no seu navegador para ver um relatório interativo e bem formatado.

## 📚 Documentação das dependências  

- **Mocha**: https://mochajs.org/  
- **SuperTest**: https://github.com/visionmedia/supertest  
- **Chai**: https://www.chaijs.com/  
- **dotenv**: https://github.com/motdotla/dotenv  
- **mochawesome**: https://github.com/mochawesome/mochawesome  

---

## ℹ️ Como contribuir  
1. Clone este repositório  
2. Crie o arquivo `.env` com BASE_URL adequada  
3. Instale as dependências: `npm install`  
4. Execute os testes e gere o relatório: `npm test`  
5. Abra o relatório HTML e valide os resultados
