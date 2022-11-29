$(document).ready(function() {
    /* Настройки гамбургера */
    $('.header__menu_burger').click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
        $('.header__menu_link_2').slideToggle(); // плавно скрываем, или отображаем все элементы меню
        $('.header__menu_burger span:nth-child(1)').toggleClass('first_ham'); // добавляем класс для анимации с hover
        $('.header__menu_burger span:nth-child(2)').toggleClass('last_ham');
    });

    /* НАСТРОЙКА СЛАЙДЕРА */
    $('.port__slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
        }]
    });

    /* НАСТРОЙКА ФОРМЫ */
    /* Настройки выбора услуг */
    $(".serv__btn_down, .serv__btn_up").click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
        $(".serv__btn_items").slideToggle(); // плавно скрываем, или отображаем все элементы внутри указанного класса
        $(".serv__btn_down").slideToggle();
        $(".serv__btn_up").slideToggle();
    });

        /* Изменение input при выборе услуги */
    $(".serv__btn_item_1").click(function(){
        $(".serv__btn_items").slideToggle();
        $(".serv__btn").attr('type', 'text').attr('name', 'serv').removeAttr('value').val('Разработка сайта');
        $(".serv__btn_down").slideToggle();
        $(".serv__btn_up").slideToggle();
    });
    $(".serv__btn_item_2").click(function(){
        $(".serv__btn_items").slideToggle();
        $(".serv__btn").attr('type', 'text').attr('name', 'serv').removeAttr('value').val('Чат-бот');
        $(".serv__btn_down").slideToggle();
        $(".serv__btn_up").slideToggle();
    });
    $(".serv__btn_item_3").click(function(){
        $(".serv__btn_items").slideToggle();
        $(".serv__btn").attr('type', 'text').attr('name', 'serv').removeAttr('value').val('Дизайн');
        $(".serv__btn_down").slideToggle();
        $(".serv__btn_up").slideToggle();
    });

    /* Настройки выбора связи */
    $(".call__btn_down, .call__btn_up").click(function(){
        $(".call__btn_items").slideToggle();
        $(".call__btn_down").slideToggle();
        $(".call__btn_up").slideToggle();
    });

        /* Изменение input при выборе услуги */
    $(".call__list_email").click(function(){
        $(".call__btn_items").slideToggle();
        $(".call__btn").attr('type', 'email').attr('name', 'call').attr('placeholder', 'Введите почту').removeAttr('value');
        $(".call__btn_down").slideToggle();
        $(".call__btn_up").slideToggle();
    });
    $(".call__list_tel").click(function(){
        $(".call__btn_items").slideToggle();
        $(".call__btn").attr('type', 'tel').attr('name', 'call').attr('placeholder', 'Введите телефон').removeAttr('value');
        $(".call__btn_down").slideToggle();
        $(".call__btn_up").slideToggle();
    });
    $(".call__list_soc").click(function(){
        $(".call__btn_items").slideToggle();
        $(".call__btn").attr('type', 'text').attr('name', 'call').attr('placeholder', 'Введите мессенджер').removeAttr('value');
        $(".call__btn_down").slideToggle();
        $(".call__btn_up").slideToggle();
    });
    let inputs = document.querySelectorAll('.cont__form__file_input');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
        labelVal = label.querySelector('.cont__form__file_btn-text').innerText;

        input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;

        if (countFiles)
            label.querySelector('.cont__form__file_btn-text').innerText = 'Прикреплено файлов: ' + countFiles;
        else
            label.querySelector('.cont__form__file_btn-text').innerText = labelVal;
        });
    });
});