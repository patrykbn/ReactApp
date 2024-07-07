const strContains = (element , searchKey) => {
    const elementLowerCase = element.toLowerCase();

    return elementLowerCase.includes(searchKey);
}

export default strContains;