
export const getTurkeyDate = (dateInput = new Date()) => {
    const date = new Date(dateInput);
    
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    
    const trOffset = 3 * 60 * 60 * 1000;
    
    return new Date(utc + trOffset);
  };
  
  export const isSameDayTurkey = (date1Str, date2Str) => {
    const d1 = getTurkeyDate(date1Str);
    const d2 = getTurkeyDate(date2Str);
  
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };
  
  export const formatTurkeyDate = (dateStr) => {
    const d = getTurkeyDate(dateStr);
    
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayName = days[d.getDay()];
    
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    
    return `${dayName}, ${hours}:${minutes}`;
  };