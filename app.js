//【TODOリスト概要】
//TODOはDOM操作の全てが詰まっている
//イベントセット、要素の取得、追加、削除、変更、表示、非表示、アニメーション
//デザイン上のクラス名とjs操作用のクラス名は分けること

//【やること】
//1. TODOを追加を押下した際にタスクを追加する
//2. TODOタスクのアイコンを押下した際にタスクをDONEする
//3. DONEタスクのアイコンを押下した際にタスクをTODOタスクに戻す
//4. ゴミ箱アイコンを押下した際にタスクを削除する
//5. TODOタスクのテキストをクリックした際に入力できるようにし、shift+Enterで修正を確定する
//6. 検索エリアに値を入力した際にタスクの中から値にマッチするタスクのみ表示させる

//【1. TODOを追加を押下した際にタスクを追加する】
// 1. 「TODOを追加」ボタンを押下した際にイベントを発火
// 2. inputの値を取得（取得したらクリアする）
// 3. inputの値をlistのitemに追加する（DOM生成）
$('.js-add-todo').on('click', function(e){
    e.preventDefault();

    // inputの値を取得し、中身を空にする
    var text = $('.js-get-val').val();
    $('.js-get-val').val('');

    // 入力が空の場合
    if(!text){
        //エラーを表示
        $('.js-toggle-error').show();
        return;
    }

    // それ以外の場合はエラーを隠すようにする
    $('.js-toggle-error').hide();

    // listItemのhtmlを生成してタスクに追加する
    var listItem = '<li class="list__item js-todo_list-item" data-text="' + text + '">' +
        '<i class="fa fa-square-o icon-check js-click-done" aria-hidden="true"></i>' +

        '<span class="js-todo_list-text">' + text + '<span>' +
        '<input type="text" class="editText js-todo_listeditForm" value="' + text + '">' +
        '<i class~"fa fa-trash icon-trash js-click-trash" aria-hiden="true"></i>' +
        '</li>';

    $('.js-todo_list').prepend(listItem);
});

//【2. TODOタスクのアイコンを押下した際にタスクをDONEにする】
// 1. TODOタスクのアイコンを押下した際にイベントを発火
// 2. クリックしたDOM（アイコン）をdoneのアイコンに変更
// 3. クリックしたDOM（アイコン）にjs-click-doneのクラス名を削除し、js-click-todoのクラス名をつける
// 4. クリックしたDOM（アイコン）から辿って、list__itemのDOMを取得
// 5. list__itemのクラス名をdoneのものに変更する
$(document).on('click', '.js-click-done', function(){

    $(this).removeClass('fa-square-o').addClass('fa-check-square')
        .removeClass('js-click-done').addClass('js-click-todo')
        .closest('.js-todo_list-item').addClass('list__item--done');
    
    //parentは１階層上の〜という探し方
    //closestは１番近い親の〜という探し方
});

//【3. DONEタスクのアイコンを押下した際にタスクをTODOタスクに戻す】
// 1. DONEタスクのアイコンを押下した際にイベントを発火
// 2. クリックしたDOM(アイコン)をtodoのアイコンに変更
// 3. クリックしたDOM(アイコン)にjs-click-doneのクラス名を追加し、js-click-todoのクラス名を削除する
// 4. クリックしたDOM（アイコン）から辿って、list__itemのDOMを取得
// 5. list__itemのクラス名をtodoのものに変更する
$(document).on('click', 'js-click-todo', function(){

    $(this).addClass('fa-square-o').removeClass('fa-check-square')
    .addClass('js-click-done').removeClass('js-click-todo')
    .closest('.js-todo_list-item').removeClass('list__item--done');

});