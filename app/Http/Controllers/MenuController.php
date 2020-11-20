<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
  public function listar_menu_principal()
  {
    try {
      $menuPadre = Menu::select('id','menu','icono','posicion','ruta')
      ->whereNull('menu_item')
      ->orderBy('posicion','ASC')
      ->get();

      foreach ($menuPadre as $key => $value) {
        $value->items = Menu::select('id','menu','icono','posicion','ruta')
        ->where('menu_item',$value->id)
        ->orderBy('posicion','ASC')
        ->get();
      }

      return $menuPadre;
      
    } catch (\Exception $e) {
      return $this->captura_error($e,"Error al mostrar menú");
    }

  }
}
