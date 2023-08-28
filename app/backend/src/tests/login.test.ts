import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UsersModelSequelize from '../database/models/UsersModelSequelize';
import { token, loginSuccess } from './Mocks/Login.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {

  it('Testa se no endpoin POST /login é possivel logar', async () => {
    

  });

});
