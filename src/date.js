let today = new Date();
today.setDate(today.getDate() - 7)
let minus = today.toISOString('yyyy-dd-dd').split('T').splice(0,1);