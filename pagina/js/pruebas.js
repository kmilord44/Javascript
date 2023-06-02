<!--triangulo-->
<div id="ventanamodalatr" class="modalatr">
    <div class="contenidomodalatr">
        <button class="cerrarmodalatr">X</button>
        <span class="cerrarmodalatr"> <i class="fa-solid fa-xmark"></i> </span>
        <h4>Area de triangulo</h4>

        <label for="m">Digite medida 1</label>
        <input type="m" id="m" name="m">

        <label for="m2">Digite medida 2</label>
        <input type="text" id="m2" name="m2">

        <label for="m3">Digite medida 3</label>
        <input type="text" id="m3" name="m3">

        <button id="calcularatri" onclick="calcularatri(event)">Calcular</button>
    </div>
</div>


<!--cuadrado-->
<div id="ventanamodalacu" class="modalacu">
    <div class="contenidomodalacu">
        <button class="cerrarmodalacu">X</button>
        <span class="cerrarmodalacu"> <i class="fa-solid fa-xmark"></i> </span>
        <h4>Area de cuadrado</h4>

        <label for="mc1">Digite un lado de cuadrado</label>
        <input type="mc1" id="mc1" name="mc1">

        <button id="calcularacu" onclick="calcularacu(event)">Calcular</button>
    </div>
</div>


<!--rectangulo-->
<div id="ventanamodalare" class="modalare">
    <div class="contenidomodalare">
        <button class="cerrarmodalare">X</button>
        <span class="cerrarmodalare"> <i class="fa-solid fa-xmark"></i> </span>
        <h4>Area de rectangulo</h4>

        <label for="mr1">Digite un lado de rectangulo</label>
        <input type="mre1" id="mre1" name="mre1">

        <label for="mre2">Digite otro lado del rectangulo</label>
        <input type="mre2" id="mre2" name="mre2">

        <button id="calculararect" onclick="calculararect(event)">Calcular</button>
    </div>
</div>

<script src="../js/reto5.js"></script>
</body>

</html>