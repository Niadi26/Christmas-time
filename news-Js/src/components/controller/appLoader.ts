import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'e7a65855ea9845ec97d24575b088e357',
        });
    }
}

export default AppLoader;
