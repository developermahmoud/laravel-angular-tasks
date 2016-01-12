<!DOCTYPE html>
<html lang="en" ng-app="Books">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>الموسوعة العالمية للأسواق</title>

<link href="{{ asset('public/libs/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
<link href="{{ asset('public/assets/css/bootstrap-rtl.min.css') }}" rel="stylesheet">
<link href="{{ asset('public/libs/wow/css/libs/animate.css') }}" rel="stylesheet">
<link href="{{ asset('public/libs/sweetalert/dist/sweetalert.css') }}" rel="stylesheet">
<script src="{{ asset('public/libs/sweetalert/dist/sweetalert.min.js') }}"></script>
<link href="{{ asset('public/assets/css/style.css') }}" rel="stylesheet">
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body>


<div ng-view></div>



<!-- Angular Files. -->
<script>var baseUrl = "{{ url('/') }}/";</script>

<script src="{{ asset('public/libs/angular/angular.min.js') }}"></script>
<script src="{{ asset('public/libs/angular-route/angular-route.min.js') }}"></script>
<script src="{{ asset('public/libs/angular-animate/angular-animate.min.js') }}"></script>
<script src="{{ asset('public/libs/angular-cookies/angular-cookies.min.js') }}"></script>
<script src="{{ asset('public/libs/angular-bootstrap/ui-bootstrap-tpls.min.js') }}"></script>
<script src="{{ asset('public/libs/ng-file-upload/ng-file-upload.min.js') }}"></script>
<script src="{{ asset('public/app/app.js') }}"></script>

<!-- Directives -->
<script src="{{ asset('public/app/directives/fileModel.js') }}"></script>
<script src="{{ asset('public/app/directives/navBar.js') }}"></script>
<script src="{{ asset('public/app/directives/userResponsibility.js') }}"></script>


<!-- Services -->
<script src="{{ asset('public/app/services/authService.js') }}"></script>
<script src="{{ asset('public/app/services/categoryService.js') }}"></script>
<script src="{{ asset('public/app/services/booksService.js') }}"></script>
<script src="{{ asset('public/app/services/filesService.js') }}"></script>
<script src="{{ asset('public/app/services/userService.js') }}"></script>
<script src="{{ asset('public/app/services/taskService.js') }}"></script>

<!-- Controllers -->
<script src="{{ asset('public/app/controllers/usersController.js') }}"></script>
<script src="{{ asset('public/app/controllers/navController.js') }}"></script>
<script src="{{ asset('public/app/controllers/homeController.js') }}"></script>
<script src="{{ asset('public/app/controllers/categoryController.js') }}"></script>
<script src="{{ asset('public/app/controllers/booksController.js') }}"></script>
<script src="{{ asset('public/app/controllers/singlebookController.js') }}"></script>
<script src="{{ asset('public/app/controllers/filesController.js') }}"></script>
<script src="{{ asset('public/app/controllers/taskController.js') }}"></script>
<script src="{{ asset('public/app/controllers/singleTaskController.js') }}"></script>
<script src="{{ asset('public/app/controllers/userTaskController.js') }}"></script>
<script src="{{ asset('public/app/controllers/singleUserTaskController.js') }}"></script>
<script src="{{ asset('public/app/controllers/singleUsersController.js') }}"></script>


<!-- Bootstrap Files. -->
<script src="{{ asset('public/libs/jquery/dist/jquery.min.js') }}"></script>
<script src="{{ asset('public/libs/bootstrap/dist/js/bootstrap.min.js') }}"></script>


</body>
</html>