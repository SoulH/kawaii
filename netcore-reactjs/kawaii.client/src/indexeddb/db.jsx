import Dexie from 'dexie';

const db = new Dexie('kawaii');

db.version(1).stores({
  users: '++pk, id, username, email',
  cart: '++pk, id, userId, productId, presentationId, productName, quantity, price, image, details',
});

export default db;