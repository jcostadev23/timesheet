
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

export { createId, formatHours}