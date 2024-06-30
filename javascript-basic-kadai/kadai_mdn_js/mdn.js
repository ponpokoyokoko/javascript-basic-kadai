// 実行した日付
const today = new Date();
// 年の取得
const year = today.getFullYear();
// 月の取得、月は0から始まる為+1にする
const month = today.getMonth() + 1;
// 日の取得
const day =today.getDate();

console.log(year + '年' + month + '月' + day + '日');
