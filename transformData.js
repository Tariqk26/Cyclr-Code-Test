function transformData(rawData = '{}') {

    if (typeof rawData !== 'object') {
        throw new Error('Error: transformData expects an object. Received: ' + rawData)
    }


    let { attributes = [] } = rawData;

    const data = {}

    attributes.forEach(({ key, value }) => {
        data[key] = (key === 'email')
            ? 'example@example.com'
            : value
    })

    return JSON.stringify(data, null, 2);
}

module.exports = transformData