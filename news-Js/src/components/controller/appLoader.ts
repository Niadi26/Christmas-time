import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e7a65855ea9845ec97d24575b088e357', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
