<?php

Route::get('/', function () {
    return view('master');
});


/**
 * Login router
 */
post('login','UserController@login');

post('upload/images','BooksController@upload');

/**
 * Category Routes.
 */
get('category','CategoryController@getAll'); // Return all categorys.
post('category/create','CategoryController@store'); // Create new category.
put('category/update','CategoryController@update'); // Edit category by id.
delete('category/delete/{id}','CategoryController@delete'); // Delete category by id.



/**
 * Books routes 
 */
post('book/create','BooksController@store');
get('books/category-id/{category_id}','BooksController@getAllByCategoryId');
get('book/id/{id}','BooksController@show');
post('book/edit/','BooksController@update');


/**
 * Files
 */
post('file/create','FilesController@store'); // Create new file.
get('files/book/{id}','FilesController@index'); // Show all file by book_id.
get('file/{id}','FilesController@getById'); // Retun data of file by id.
post('file/update','FilesController@update'); // Update file by id.
delete('file/delete/{id}','FilesController@delete'); // Delete file by id.


/**
 * Users routes.
 */
get('user','UserController@getAll'); // Show users page.
post('user/create','UserController@store'); // Create new user.
get('user/{id}','UserController@getById'); // Return by id.
post('user-edit','UserController@update'); // Update user.
delete('user/delete/{id}','UserController@delete'); // Delete user by id.


/**
 * Task 
 */
get('users-task/{auth_id}','TaskController@getUsersTask'); //  Return all users task
post('task/create','TaskController@store'); // Create new task
get('tasks/book/{id}','TaskController@returnAllByBookId'); // Return tasks of books
get('task/{id}','TaskController@returnTaskById'); // Return users of tasks
get('task/users/{id}','TaskController@usersOfTasks'); // Return users of tasks
get('count-tasks/{id}','TaskController@countTasks'); // Return count of tasks
get('get-tasks/{id}/{status}','TaskController@getTasks'); // Return count of tasks
get('get-tasks-by-id/{id}/{task}','TaskController@getTaskById'); // Return count of tasks
get('get-task-by-id/{id}/{task}','TaskController@reTurnDataOfTask'); // Return count of tasks
get('get-user-responsibility/{id}','UserController@getUserResposibiltiy'); // Return count of tasks
get('update-task/{id}/{task}/{status}','TaskController@updateTaskStatus'); // Update Task Status
post('task-done','TaskController@taskDone'); // Change status to done
get('close-task/{id}','TaskController@closeTask');