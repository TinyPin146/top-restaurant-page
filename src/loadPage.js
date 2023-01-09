
export default function loadPage(...elements) {
    const contentArea = document.querySelector('#content');
    const contentAreaMain = contentArea.querySelector('main');
    const contentAreaFooter = contentArea.querySelector('footer');
    
    if (contentAreaMain && contentAreaFooter) {
        contentArea.removeChild(contentAreaMain);
        contentArea.removeChild(contentAreaFooter);
    }

    elements.forEach(element => {
        contentArea.insertAdjacentHTML('beforeend', element);
    })
}