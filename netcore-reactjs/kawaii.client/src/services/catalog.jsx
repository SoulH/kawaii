import Api from './api';


export default class CatalogService extends Api {
    
    async search(filters) {
        return await this.post('catalog', filters || {});
    }
}