<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use File;
use Illuminate\Http\Request;
use App\Category;
use App\Books;
class BooksController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getAllByCategoryId($category_id)
	{	
		return Category::find($category_id)->books;
		
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request,Books $books)
	{	
		if( $request->hasFile('cover') )
		{
			$filename = substr(md5(time()),0,20).'.'.$request->file('cover')->getClientOriginalExtension(); 
	    	$request->file('cover')->move(base_path().'/public/upload',$filename);
		}
		else
		{
			$filename = "";
		}
    	$books->name                 = $request->name;
    	$books->local_number         = $request->local_number ? : '';
    	$books->international_number = $request->international_number ? : '';
    	$books->priority             = $request->priority ? : '';
    	$books->category_id          = $request->category_id;
    	$books->status               = 'no';
    	$books->cover                = $filename;
    	$books->save();
		return response($request->name,'202');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Books::find($id);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request)
	{
		$books = Books::find($request->id);
		if( $request->hasFile('cover') )
		{
			$filename = substr(md5(time()),0,20).'.'.$request->file('cover')->getClientOriginalExtension(); 
	    	$request->file('cover')->move(base_path().'/public/upload',$filename);
			if( File::exists( 'public/upload/'.$books->cover ))
			{
				File::delete('public/upload/'.$books->cover );
			}
			$books->cover = $filename;
		}
    	$books->name                 = $request->name;
    	$books->local_number         = $request->local_number ? :'';
    	$books->international_number = $request->international_number ? :'';
    	$books->priority             = $request->priority;
    	$books->save();
    	return response($books,'202');

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
