@extends('layouts.base')

@section('content')

<script src="//openlayers.org/en/latest/build/ol.js" type="text/javascript"></script>

<link rel="stylesheet" href="//openlayers.org/en/latest/css/ol.css" type="text/css">
<!--<script src="{{ asset('js/ol-layerswitcher.js') }}" ></script>-->



<!--sidebar-->
<!--sidebar-->

<div id="cont">
<div id="sidebar" class="sidebar collapsed " >
        <!-- Nav tabs -->
        <div class="sidebar-tabs">
            <ul role="tablist">
                <li><a href="#home" role="tab"><i class="fa fa-bars"></i></a></li>
                <li><a href="#profile" role="tab"><i class="fa fa-user"></i></a></li>
                <li class="disabled"><a href="#messages" role="tab"><i class="fa fa-envelope"></i></a></li>
                <li><a href="https://github.com/Turbo87/sidebar-v2" role="tab" target="_blank"><i class="fa fa-github"></i></a></li>
            </ul>

            <ul role="tablist">
                <li><a href="#settings" role="tab"><i class="fa fa-gear"></i></a></li>
            </ul>
        </div>

        <!-- Tab panes -->
        <div class="sidebar-content">
            <div class="sidebar-pane" id="home">
                <h1 class="sidebar-header">
                    Capas
                    <span class="sidebar-close"><i class="fa fa-caret-left"></i></span>
                </h1>
<!--bloque de capas-->
                <div id="layers" class="layer-switcher"></div>
            </div>

            <div class="sidebar-pane" id="profile">
                <h1 class="sidebar-header">Resultado Busqueda<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
                <div id="info"></div>
            </div>

            <div class="sidebar-pane" id="messages">
                <h1 class="sidebar-header">Messages<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
            </div>

            <div class="sidebar-pane" id="settings">
                <h1 class="sidebar-header">Settings<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
                
            </div>
        </div>
    </div>

<!--=====================spinner de espera========================-->
<!-- Loader 
<div class="loader loader-default"></div>-->

<!-- Loader active -->
<style>

</style>
<div class="loader loader-default " id="spin" data-text="Consultando..."></div>

<!--===============================================================-->

<!-- ============Ventana modal de informacion=================== -->

    <div class="modal bottom fade" id="ventana_info" tabindex="-1" role="dialog" aria-labelledby="bottom_modal">
        
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Informacion de Capas</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id='tabla'> 
                    
                    <!--tabla inyectada por el javascript-->
                </div>
                <div class="modal-footer modal-footer-fixed d-none">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

<!-- ==================================================== -->



    <div id="osm_map" class="sidebar-map" ></div>
    </div>
    
  
  
    <script src="//turbo87.github.io/sidebar-v2/js/ol3-sidebar.js" ></script>

    <script src="https://unpkg.com/ol-layerswitcher@3.6.0"></script>

<script type="text/javascript">
    window.my_map.display();   
</script>




@endsection