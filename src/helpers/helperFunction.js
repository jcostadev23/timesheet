
const createId = ()=>{
    const timeStamp = Date.now();
    const random = Math.floor(Math.random()* 1000);
    return `${timeStamp}-${random}`;
}

export { createId }