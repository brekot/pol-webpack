<a href="https://brekot.github.io/pol-webpack/index.html">Главная</a><br>
<a href="https://brekot.github.io/pol-webpack/catalog.html">Каталог</a><br>

<hr>

Папка /docs - для разработчика. Содержит готовые файлы верски. Остальные файлы и папки служебные.

<hr>

<b>Подключены в JS:</b><br>
<ul>
    <li>jQuery</li>
    <li>Swiper - для слайдеров (https://swiperjs.com/)</li>
    <li>formStyler - для стилизации select (http://dimox.name/jquery-form-styler/)</li>
    <li>FancyBox - для окон (https://fancyapps.com/fancybox/3/)</li>
</ul>

<hr>

<b>Bootstrap используются только классы:</b><br>
<ul>
    <li>.container</li>
    <li>.d-*-none</li>
    <li>.d-*-block</li>
    <li>.d-*-flex</li>
</ul>

<hr>
Для интеграции с 1С-Битрикс:
<ol>
    <li>Заливаем все содержимое папки /docs/local в шаблон сайта (/local/template/название_шаблона)</li>
    <li>template_styles.css подключиться сам, необходимо подключить js</li>
    <li>Все ссылки на изображения в HTML коде заменяем с "./local/img/..." на "<?=SITE_TEMPLATE_PATH?>/img/..."</li>
    <li>Предполагаемое деление на файлы header.php и footer.php отмечены в комментариях HTML</li>
</ol>