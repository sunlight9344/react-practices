"use strict";

// 블록 스코프(es6)
var users = [{
  no: 1,
  name: '마키올',
  email: 'makiol@gmail.com'
}, {
  no: 2,
  name: '리돌',
  email: 'lidol@gmail.com'
}];

// 객체분해(es6)
function print(_ref) {
  var no = _ref.no,
    name = _ref.name,
    email = _ref.email;
} // 템플릿 문자열(es6)

// for ~ of(es6)
for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
