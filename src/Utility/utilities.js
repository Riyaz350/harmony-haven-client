export function dateTime(todayDate){
    const filter = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'
      };

      const DateTime = todayDate.toLocaleString('en-US', filter);
      return DateTime
}