import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem;


    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [
        item,
        saveItem,
    ];
}
//* El use Effect sirve para renderizar la app cuand se cumpla una condicion (peticion a una api setTiemout ETC...)
export {
    useLocalStorage
}