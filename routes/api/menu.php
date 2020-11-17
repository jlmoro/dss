<?php

Route::group(['middleware' =>'auth:api'], function (){
  Route::prefix('menu')->group( function(){
    $controlador = "MenuController";
    Route::get("listar-menu-principal","$controlador@listar_menu_principal");
  });
});
