
const createId = ()=>{
    const timeStamp = Date.now();
    const random = Math.floor(Math.random()* 1000);
    return `${timeStamp}-${random}`;
}

const formatHours = (minutes)=> {
    const hours = Math.floor(minutes);
    const remainMinutes = (minutes - hours) * 60;
    let format = `${hours}H`;
    if(remainMinutes !==0) {
        return(
        format += `:${remainMinutes}M`)
        }
    return format
    }

const removeItem = (list, item)=> {
    const newList = list.filter(element => element !== item)
  
    return newList
}

export { createId, formatHours, removeItem}