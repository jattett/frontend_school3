// 집합, 합집합, 교집합, 차집합

let s = new Set('abcdeeeeeeeee');

console.log(s);
console.log(s.size);

// 문제
let 회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
let v = new Set(회사게시판)
console.log(v.size)

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of v){
    console.log(i, 회사게시판.filter(e => e ===i))
} 

for (const i of v){
    console.log(i, 회사게시판.filter(e => e ===i).length)
} 