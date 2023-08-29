import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import MatchesModelSequelize from '../database/models/MatchesModelSequelize';
import { matchesMock } from './Mocks/Matches.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {

  it('Testa se a rota GET /matches retorna lista de partidas', async () => {
    sinon.stub(MatchesModelSequelize, 'findAll').resolves(matchesMock as any);

    const response = await chai.request(app).get('/matches');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(matchesMock);
  });

  it('Testa se a rota GET /matches?inProgress=false retorna lista de partidas em andamento', async () => {
    sinon.stub(MatchesModelSequelize, 'findAll').resolves(matchesMock as any);

    const response = await chai.request(app).get('/matches?inProgress=false');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(matchesMock);
  });
  afterEach(() => {
    sinon.restore();
  });

});
