<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  
    
   <!-- <link rel="stylesheet" href="../css/ol3-sidebar.css" />-->


    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    
    
  
    <!--<script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>-->
        <!--layerswitcher
     
    <script src="{{ asset('js/ol-layerswitcher.js') }}"></script>-->
        <!--openlayers-->
       
        <!--sidebar
    <script src="https://rawgit.com/Turbo87/sidebar-v2/master/js/ol3-sidebar.js"></script>  
    <script src="{{ asset('js/sidebar.js') }}"></script>-->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

        <!--layerswitcher-->
    
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
   <!--
    <link href="{{ asset('css/ol-layerswitcher.css') }}" rel="stylesheet">
    <link href="{{ asset('css/sidebar.css') }}" rel="stylesheet">-->
    <script src="{{ asset('js/app.js') }}" ></script><!--para que laravel procese los componentes js, la configuracion esta en bootstrap-->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="//openlayers.org/en/latest/build/ol.js" type="text/javascript"></script>
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>

    <link rel="stylesheet" href="https://cdn.rawgit.com/Viglino/ol-ext/master/dist/ol-ext.min.css" />
    <script src="https://cdn.rawgit.com/Viglino/ol-ext/master/dist/ol-ext.min.js"></script>
    

    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    
    <!--<link rel="stylesheet" href="//turbo87.github.io/sidebar-v2/css/ol3-sidebar.css" />-->
    <link href="{{ asset('css/ol3-sidebar.css') }}" rel="stylesheet">

    <link href="{{ asset('css/ol-layerswitcher.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap-side-modals.css') }}" rel="stylesheet">
    <!--<script type="module" src="{{ asset('js/ol-layerswitcher.js') }}"></script>-->
    <script src="{{ asset('js/layers.js') }}" ></script>
    <link href="{{ asset('css/css-loader.css') }}" rel="stylesheet">
     <style>
        body {
            padding: 0;
            margin: 0;
            overflow: hidden;
        }

        html, body, #map {
            height: 100%;
            font: 12pt "Helvetica Neue", Arial, Helvetica, sans-serif;
        }

        .lorem {
            font-style: italic;
            color: #AAA;
        }

        #osm_map {
            position: absolute;
            width: 100%;
            height: calc(100% - 56px)
        }

        .sidebar-map{
            top:50px;
            z-index:1;
        }
        .navbar{
            z-index:2;
        }
        #cont{
            height: calc(100% - 156px)
        }
       
    </style>
    
  
</head>
<body>

    <div id="app" >
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{ url('/') }}">
                    GEOINFRA
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
        <!--<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>-->
       
        <main >
       
            @yield('content')

        </main>

    </div>
</body>
</html>
