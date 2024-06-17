import db from '../indexeddb/db';


export default class CartIndexedService {
    find(userId, productId, presentationId) {
        return db.cart.where({userId: userId, productId: productId})
    }

    async add(data) {
        const keys = ['userId', 'productId', 'presentationId'];
        const params = keys.reduce((a, b) => { return {...a, [b]: data[b]}}, {});
        const item = await db.cart.get(params);
        if (!item) return await db.cart.add(data);
        const updata = {quantity: item.quantity + 1};
        return await db.cart.update(item.pk, updata);
    }
}