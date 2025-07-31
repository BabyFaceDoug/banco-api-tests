const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const postLogin = require("../fixtures/postLogin.json");

describe("Login", () => {
  describe("POST/login", () => {
    it("Deve retornar 200 com um token em string quando usar credenciais validas", async () => {
      const bodyLogin = { ...postLogin };

      const respostaLogin = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(bodyLogin);

      expect(respostaLogin.status).to.equal(200);
      expect(respostaLogin.body.token).to.be.a("string");
    });
  });
});
