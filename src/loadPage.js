
export default function loadPage(...elements) {
    const contentArea = document.querySelector('#content');
    contentArea.innerHTML = '';

    elements.forEach(element => {
        contentArea.insertAdjacentHTML('beforeend', element);
    })
}