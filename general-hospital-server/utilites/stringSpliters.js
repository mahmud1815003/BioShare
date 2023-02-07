function stringSpliter (arg){
    const data = arg.split(',').map(data => data.trim());

    return data;
}

module.exports = {
    stringSpliter,
}