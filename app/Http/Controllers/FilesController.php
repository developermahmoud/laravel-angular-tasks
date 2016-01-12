<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use File;
use App\Files;
use App\Books;
class FilesController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index($book_id)
	{
		return Books::find($book_id)->files;
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request,Files $file)
	{
		$filename = substr(md5(time()),0,20).'.'.$request->file('src')->getClientOriginalExtension(); 
    	$request->file('src')->move(base_path().'/public/upload',$filename);
    	$file->src        = $filename;
    	$file->notes      = $request->notes ? : '';
    	$file->date_store = $request->date_store;
    	$file->book_id    = $request->book_id; 
    	$file->save();
    	return response($file,'202');
	}

	public function getById($id)
	{
		return Files::find($id);
	}

	public function update(Request $request)
	{
		$file = Files::find($request->id);
    	$file->notes      = $request->notes;
    	$file->date_store = $request->date_store;
    	$file->save();
    	return Books::find($request->book_id)->files;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function delete($id)
	{
    	$file = Files::find($id);
		if( File::exists( 'public/upload/'.$file->src ))
		{
			File::delete('public/upload/'.$file->src );
		}

    	$file->delete();
    	return response('done',200);
	}

}
