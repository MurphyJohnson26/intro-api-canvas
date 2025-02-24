// 1. Obtener el elemento <canvas> del documento HTML
var canvas = document.getElementById("canvas");
/*
   - `document.getElementById("canvas")`: Busca un elemento en el DOM con el ID "canvas".
   - Si el elemento existe en la página, se almacena en la variable `canvas`.
   - Si no existe, `canvas` será `null`, lo que generaría un error en las siguientes líneas.
*/

// 2. Obtener el contexto de dibujo en 2D
var ctx = canvas.getContext("2d");
/*
   - `canvas.getContext("2d")`: Obtiene el contexto de renderizado en 2D del canvas.
   - El contexto 2D proporciona métodos y propiedades para dibujar en el lienzo.
   - Sin esta línea, no podríamos dibujar nada en el canvas.
*/

// 3. Establecer el color de relleno en verde
ctx.fillStyle = "rgb(11, 162, 26)";
/*
   - `fillStyle`: Propiedad del contexto que define el color de relleno de las formas dibujadas.
   - `"green"`: Especifica que el color de relleno será verde.
   - Puede usarse otros formatos de color como HEX (#00FF00) o RGB (rgb(0,255,0)).
*/

// 4. Dibujar un rectángulo verde en el canvas
ctx.fillRect(1, 1, 200, 200);
/*
   - `fillRect(x, y, width, height)`: Método que dibuja un rectángulo lleno de color.
   - **x = 1**: Coordenada X donde comienza el rectángulo (desde el borde izquierdo del canvas).
   - **y = 1**: Coordenada Y donde comienza el rectángulo (desde la parte superior del canvas).
   - **width = 200**: Ancho del rectángulo en píxeles.
   - **height = 200**: Altura del rectángulo en píxeles.
   - Se rellena con el color definido en `fillStyle` (verde).
*/
