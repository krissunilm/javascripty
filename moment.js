

var moment = require('moment');
moment().format();

var now = moment();

var day = moment("Dec 25, 1995");

var fmt = moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm");


console.log("now = " + now);
console.log("day = " + day);
console.log("fmt = " + fmt);


var ux = moment(1318781876406);
console.log("ux = " + ux + " moment.utc() = " + moment.utc() + " moment.utc().format() = " + moment.utc().format()   );



console.log( " moment.utc() = " + moment.utc() + " moment.utc().format() = " + moment.utc().format()   );

var nextWeek = moment().add('days', 7);
console.log( " nextWEek.utc() = " + nextWeek.utc() + "  nextWeek.utc().format() = " + nextWeek.utc().format()   );