import './sources.css';
import { Source } from '../../interfacesNews/interfacesNews';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            (<HTMLTemplateElement>sourceClone).querySelector('.source__item-name')!.textContent = item.name;
            (<HTMLTemplateElement>sourceClone).querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
