const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const { obterToken } = require("../helpers/autenticacao");
const postTransferencias = require("../fixtures/postTranferencias.json");

describe("Transferencias", () => {
  let token;

  beforeEach(async () => {
    token = await obterToken("julio.lima", "123456");
  });

  describe("POST /transferencias", () => {
    it("Deve retornar sucesso com 201 quando o valor for igual ou acima de 10,00", async () => {
      const bodyTransferencia = { ...postTransferencias };

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencia);

      expect(resposta.status).to.equal(201);
    });

    it("Deve retornar erro com 422 quando o valor da transferência for abaixo de 10,00", async () => {
      const bodyTransferencia = { ...postTransferencias };
      bodyTransferencia.valor = 7;

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencia);

      expect(resposta.status).to.equal(422);
    });

    describe("GET /transferencias/{id}", () => {
      it("Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no banco de dados quando o id for valido", async () => {
        const resposta = await request(process.env.BASE_URL)
          .get('/transferencias/23')
          .set('Authorization', `Bearer ${token}`);

        expect(resposta.status).to.equal(200);
        expect(resposta.body.id).to.equal(23);
        expect(resposta.body.conta_origem_id).to.equal(1);
      });
    });

    describe("GET/Transferencias", async () => {
      it('Deve retonar 10 elemntos na paginacao quando informar limite de 10 registros',);        
        const resposta = await request(process.env.BASE_URL)
          .get('/tranferencias?page=1&limit=10')
          .set('Authorization', `Bearer ${token}`)

        expect(resposta.status).to.equal(200);
        expect(resposta.body.limit).to.equal(10)
        expect(resposta.body.transferencias).to.have.lengthOf(10)


    });
  });
});
