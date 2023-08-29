import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UsersModelSequelize from '../database/models/UsersModelSequelize';
import { token, loginSuccess, loginList } from './Mocks/Login.mock';
import JWT from '../utils/JWT';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {

  it('Testa se no endpoin POST /login é possivel logar', async () => {
    sinon.stub(UsersModelSequelize, 'findOne').resolves(loginList as any);
    sinon.stub(JWT, 'sign').returns(token);
    const res = await chai.request(app).post('/login').send(loginSuccess);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal({ token });
  });

  it('Testa se no endpoin POST /login nao é possivel entrar com email faltando', async () => {

    const res = await chai.request(app).post('/login').send({email: ''});

    expect(res.status).to.be.equal(400);
    expect(res.body).to.be.deep.equal({ message: 'All fields must be filled' });
  });

});
