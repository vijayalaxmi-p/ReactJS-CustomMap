<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


 header("Access-Control-Allow-Origin: *");
class CitiesController extends Controller
{
   public function getData()
   {
    $path=public_path() . "/json/cities.json";
    $json = json_decode(file_get_contents($path), true); 
    return $json;
   }
}
