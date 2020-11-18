<?php

Route::group(['middleware' =>'auth:api'], function (){
  Route::prefix('menu')->group( function(){
    $controlador = "MenuController";
    Route::get("listar-menu","$controlador@listar_menu_principal");
  });
});
