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
function print({
  no,
  name,
  email
}) {
  // 템플릿 문자열(es6)
}

// for ~ of(es6)
for (var user of users) {
  print(user);
}
