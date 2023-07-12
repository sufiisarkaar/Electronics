<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MyOrders;

class MyOrdersController extends Controller
{
 public function postMyOrder(Request $request){
$myOrder = new MyOrders;
$myOrder->user_id = $request->user_id;
$myOrder->item_id = $request->item_id;
$myOrder->item_category = $request->item_category;
$myOrder->item_name = $request->item_name;
$myOrder->item_price = $request->item_price;
$myOrder->item_dsc = $request->item_dsc;
$myOrder->item_qty = $request->item_qty;
$myOrder->item_image = $request->item_image;
$myOrder->item_discount = $request->item_discount;
$myOrder->item_subtotal = $request->item_subtotal;
$myOrder->save();
return ["success"=>"Order Place To Successfully", "myOrder"=>$myOrder ];
 }


public function getMyOrder($id){
    $myOrder = MyOrders::where('user_id',$id)->get();
    $grandTotal = 0;
    foreach ($myOrder as $order) {
        $grandTotal += $order->item_subtotal;
    }
    return ["success"=>"My orders View", "data"=>$myOrder, "grandTotal" => $grandTotal];
}


public function cancelOrder($id){
$cancelOrder = MyOrders::find($id);
$cancelOrder->delete();
return ["success"=>"Order Cancel"];
}



}
