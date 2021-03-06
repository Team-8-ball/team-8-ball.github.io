import html from '../html.js';
import DisplayText from './end-story-display.js';

function makeTemplate() {
    return html`
        <div id="end-story"></div>
    `;
}

export default class App {
    render() {

        const dom = makeTemplate();
        const displayText = new DisplayText();
        const storyContainer = dom.querySelector('#end-story');
        storyContainer.appendChild(displayText.render());

        return dom;
    }
}