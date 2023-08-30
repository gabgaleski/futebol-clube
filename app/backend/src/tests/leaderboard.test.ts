import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import MatchesModelSequelize from '../database/models/MatchesModelSequelize';
import TeamsModelSequelize from '../database/models/TeamsModelSequelize';
import {mockReturn, mockTeam} from './Mocks/Leaderboard.mock';
import JWT from '../utils/JWT';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {

  it('Testa se a rota GET /matches retorna lista de partidas', async () => {
    sinon.stub(TeamsModelSequelize, 'findAll').resolves(mockTeam as any);
    sinon.stub(MatchesModelSequelize, 'findAll').resolves(mockReturn as any);

    const response = await chai.request(app).get('/leaderboard/home');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('array');

  });


  afterEach(() => {
    sinon.restore();
  });

});
