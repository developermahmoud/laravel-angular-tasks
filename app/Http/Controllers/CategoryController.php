<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Category;
class CategoryController extends Controller
{

    /**
     * Return all category
     */
    public function getAll()
    {
        return Category::all();
    }
    
	/**
	 * Create new category.
	 */
    public function store(Request $request)
    {
    	if( $category = Category::create($request->all()) )
    	{
    		$data = [
    			'id'   => $category->id,
    			'name' => $category->name,
    		];
    		return response($data,200);
    	}	
    	return response("Error", 403);
    }

    /**
     * Upadet category by id
     */
    public function update(Request $request){
        $category       = Category::find($request->id);
        $category->name = $request->name;
        $category->save();
        return response("تم التعديل",200);
    }

    /**
     * Delete category by id
     */
    public function delete($id)
    {
    	$category = Category::find($id);
    	$category->delete();
    	return response('done',200);
    }

}
