<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Items;


class itemsController extends Controller
{
    public function postData(Request $request){
       $items = new Items;
       $items->item_name = $request->item_name;
       $items->item_category = $request->item_category;
       $items->item_price = $request->item_price;
       $items->item_discount = $request->item_discount;
       $items->item_image = $request->item_image;
       $items->item_dsc = $request->item_dsc;
       $items->item_qty = $request->item_qty;
        $items->save();

       return ["Results" => "Item Has Been Posted", $items];


    }

    public function getData(){

        $items = Items::all();
        return ["Result" => $items];

    }

    public function editProduct($id){
        $findPro = Items::find($id);
        return ["Data" => $findPro];
    }

    public function updateProducts(Request $request, $id){
        $updatePro = Items::find($id);
        if($updatePro){
            $updatePro->item_name = $request->item_name;
            $updatePro->item_category = $request->item_category;
            $updatePro->item_price = $request->item_price;
            $updatePro->item_discount = $request->item_discount;
            $updatePro->item_dsc = $request->item_dsc;
            $updatePro->item_image = $request->item_image;
            $updatePro->item_qty = $request->item_qty;
            $updatePro->save();

            return ["Message"=>"Updated Successfully","Data"=>$updatePro];
        }
         
    }

    public function deleteProduct($id){
        $deletePro = Items::find($id);
        if($deletePro){
            $deletePro->delete();
            return ["Message"=>"Items Has Been Deleted"];
        }
    }
}
