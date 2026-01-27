
$(document).ready(function () {
  $(".openpage-slider").slick({
    arrows: false,
    adaptiveHeight: true,
    draggable: true,
    dots: true,
    appendDots: $(".slider-dots"),
    customPaging: function () {
      return '<button type="button"></button>';
    },
  });
});

$(document).ready(function () {
  $(".selector-slider-doctors").slick({
    arrows: false,
    adaptiveHeight: true,
    draggable: true,
    dots: true,
    slidesToShow: 3,
    rows: 2,
    appendDots: $('.dots-doctors-slider'),
    customPaging: function () {
      return '<button type="button"></button>';
    },
  });
});
// хз как запустить и настроить другого вида dots


initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.588144, 55.733842],

                // Уровень масштабирования
                zoom: 10
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}
