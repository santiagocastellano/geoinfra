<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Principal extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('principal');
    }
    public function mapa()
    {
        return view('mapa');
       // return view('contenido2');
    }
    public function sidebar()
    {
        return view('sidebar');
       // return view('contenido2');
    }
}
