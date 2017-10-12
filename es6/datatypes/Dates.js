const now = new Date();
//2017-10-12T02:52:39.118Z

/* months are zero based !!! */
const halloween = new Date(2016, 9, 31);


/* Date and time */
const halloweenParty = new Date(2016, 9, 31, 19, 0);

halloweenParty.getFullYear(); // 2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0

now.toString();
// 'Wed Oct 11 2017 22:52:39 GMT-0400 (EDT)'
