const form = document.querySelector('.form');

const emptyToDoList = () => {
    parentElement = document.getElementById('list');
    while (parentElement.firstChild) { parentElement.removeChild(parentElement.firstChild) };
};

const myGetDataList = () => {
    data.forEach(item => {
        const ulToDoList = document.getElementById('list');
        const liToDoListItem = document.createElement('li');

        const spanToDoListItem = document.createElement('span');
        spanToDoListItem.innerHTML = item.description;

        const deleteBttn = document.createElement('button');
        deleteBttn.setAttribute('type', 'submit');
        deleteBttn.setAttribute('class', 'delete');
        deleteBttn.setAttribute('id', item._id);
        deleteBttn.innerHTML = 'delete';

        const changeBttn = document.createElement('button');
        changeBttn.setAttribute('type', 'submit');
        changeBttn.setAttribute('class', 'change');
        changeBttn.setAttribute('id', item._id);
        changeBttn.innerHTML = 'change';

        ulToDoList.appendChild(liToDoListItem);
        liToDoListItem.appendChild(spanToDoListItem);
        liToDoListItem.appendChild(changeBttn);
        liToDoListItem.appendChild(deleteBttn);

        const emptyInputField = document.getElementById('to_do_list');
        emptyInputField.value = '';
    });
};

const myChangeDataList = () => {
    const changeBttns = document.querySelectorAll('.change');
    Array.from(changeBttns).forEach(changeBttn => {
        changeBttn.addEventListener('click', e => {
            let span = e.target.previousElementSibling;
            const changedListItemPrompt = prompt('Please fill in the new item:', span.innerHTML);
            const changedListItem = document.createElement('span');
            span.parentNode.replaceChild(changedListItem, span);
            changedListItem.innerHTML = changedListItemPrompt;
            const changeBttnId = changeBttn.id;
            changeBttn.addEventListener('click', myPutData(changeBttnId, { description: changedListItemPrompt }));
        })
    });
}

const myDeleteDataList = () => {
    const deleteBttns = document.querySelectorAll('.delete');
    Array.from(deleteBttns).forEach(deleteBttn => {
        deleteBttn.addEventListener('click', e => {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
            const deleteBttnId = deleteBttn.id;
            deleteBttn.addEventListener('click', myDeleteData(deleteBttnId));
        })
    });
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const results = Object.fromEntries(formData);
    myPostData(results);
    myGetData();
});
