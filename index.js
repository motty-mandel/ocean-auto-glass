const button = document.querySelector('.addJob');
const mainContainer = document.querySelector('.mainContainer');

button.addEventListener('click', () => {
    var newDiv = document.createElement('div');
    newDiv.classList.add('jobContainer');
    mainContainer.appendChild(newDiv);
    for (var i = 0; i < 4; i++) {
        var pTag = document.createElement('p')
        newDiv.appendChild(pTag);
        pTag.innerHTML = 'hello';
    }
});