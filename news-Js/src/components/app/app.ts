import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsData, NewsDataError } from '../interfacesNews/interfacesNews';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, (data: NewsData | NewsDataError) => this.view.drawNews(data)));
        this.controller.getSources((data: NewsData | NewsDataError) => this.view.drawSources(data));
    }
}

export default App;
