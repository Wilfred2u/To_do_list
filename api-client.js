let data;

const myGetData = async () => {
    try {
        const response = await fetch('http://localhost:3000/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        data = await response.json();
        emptyToDoList();
        myGetDataList();
        myChangeDataList();
        myDeleteDataList();
        (!data ? console.log("De inhoud van de database is leeg") : console.log(data));
    } catch (err) {
        console.error(err);
    }
};

const myPostData = async item => {
    try {
        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        })
        return await response.json();
    } catch (err) {
        console.error(err);
    }
};

const myPutData = async (id, item) => {
    try {
        const response = await fetch('http://localhost:3000/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        })
        return await response.json();
    } catch (err) {
        console.error(err);
    }
};

const myDeleteData = async id => {
    try {
        const response = await fetch('http://localhost:3000/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (err) {
        console.log(err);
    }
};