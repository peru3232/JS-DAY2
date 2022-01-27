const convertMinutes = minutes => {
    console.log(`${minutes} minutes = ${Math.floor(minutes/60)} hour(s) and ${minutes % 60} minute(s).`)
};

convertMinutes(200);