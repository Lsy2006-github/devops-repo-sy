const { describe, it } = require("mocha");
const { expect } = require("chai");
const { app, server } = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
let baseUrl;
describe("Resource API", () => {
  before(async () => {
    const { address, port } = await server.address();
    baseUrl = `http://${address == "::" ? "localhost" : address}:${port}`;
  });
  after(() => {
    return new Promise((resolve) => {
      server.close(() => {
        resolve();
      });
    });
  });
  describe("POST /add-game", () => {
    it("should return 201 for validation errors", (done) => {
      chai
        .request(baseUrl)
        .post("/add-game")
        .send({
          name: "Test Resource 1",
          price: "Test price",
          image: "https://example.com/image.jpg",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
        //   expect(res.body.price).to.equal(undefined);
        //   expect(res.body.message).to.equal(err.message);
          done();
        });
    });
    it("should return 500 for input error", (done) => {
      chai
        .request(baseUrl)
        .post("/add-game")
        .send({
          name: "",
          price: "",
          image: "",
        })
        .end((err, res) => {
          expect(res).to.have.status(500);
        //   expect(res.body.price).to.equal(undefined);
        //   expect(res.body.message).to.equal(err.message);
          done();
        });
    });
    it("Should add a new resource", (done) => {
      chai
        .request(baseUrl)
        .post("/add-game")
        .send({
          name: "Test Resource 2",
          price: "100",
          image: "https://example.com/image.jpg",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });
});