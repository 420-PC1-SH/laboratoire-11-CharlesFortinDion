function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    if (rawData[0] !== '<' || rawData[rawData.length - 1] !== '>') {
        rawData = -1;
    } else {
        rawData = rawData.replace(/[<>]/g, "");
    }
    return {
        id: Number(parts[0]),
        rawData: Number(rawData)
    };
}


module.exports = processor;
