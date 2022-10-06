<div class="login caise"<?php echo $_SERVER['REQUEST_METHOD'] == 'POST' ? ' style="display: none;"' : '' ?>>
    <div class="overflow">
    </div>
    <div id="loginform">
        <form action="-//-administrator->login->autorization" method="post">
            <div class="title">
                Авторизация
            </div>
            <div class="login">
                Логин <input type="text" name="login" value="" class="text">
            </div>
            <div class="password">
                Пароль <input type="password" name="password" value="" class="text">
            </div>
            <div class="enter">
                <input class="button" type="submit" value="Войти" />
            </div>
        </form>
    </div>
</div>