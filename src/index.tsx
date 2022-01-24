import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freelance de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6800,
            createdAt: new Date ('2022-01-23 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Casa',
            amount: 1100,
            createdAt: new Date ('2022-01-24 11:00:00'),
          }
        ],
        /* transactions: nome do model só que no plural */
      })
    },

    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => {
        return this.schema.all('transaction');
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data);
      })
      /* schema é o banco de dados do mirage */
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

