const deleteCard = function (e) {
    const getItem = e.target.parentNode
    getItem.remove() 
}

export { deleteCard }
