<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Personal;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;

class PersonalController extends Controller
{
    public function index()
    {
        $personal = Personal::all();


        if (count($personal) <= 0) return response()->json(['menssage' => 'no existen personal registrados', 'data' => $productos], 200);

        return response()->json(['menssage' => 'registros del personal obtenidos','data' => $personal], 200);
    }


    public function store(Request $request)
    {
        DB::beginTransaction();
        try {

            $request->validate([
                'nombre' => 'required',
                'ape_paterno' => 'required',
                'ape_materno' => 'required',
                'num_dni' => 'required',
                'correo' => 'required',
            ]);
            
            $personal = Personal::create([
                'nombre' => $request->nombre,
                'ape_paterno' => $request->ape_paterno,
                'ape_materno' => $request->ape_materno,
                'num_dni' => $request->num_dni,
                'correo' => $request->correo
            ],[]);
            DB::commit();
            return response()->json(['message' => 'personal registrado'], 200);
        } catch (ValidationException $e){
            DB::rollBack();
            return response()->json($e->errors(), 400);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json($e , 500);
        }
            
    }
}
