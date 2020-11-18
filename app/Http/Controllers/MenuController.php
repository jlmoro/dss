<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
  public function listar_menu_principal()
  {
    try {
      return Menu::all();

    } catch (\Exception $e) {
      return $this->captura_error($e,"Error al mostrar menú");
    }

  }
}
