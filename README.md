myFindWhere
===========

node 

lightweight, checks only one property, require this multiple times if need be

var myFindWhere = require('./myFindWhere');

var people = [
   {name:'mary', age:22},
   {name:'wax', age:23},
   {name:'hellboy', age:300}
];

var answer = myFindWhere(people, {name: 'wax'});
