elements.watercondenser = {
	color: "#73fff8",
	behavior: behaviors.WALL,
	tick: function(pixel) {
		for (var i = 0; i < squareCoords.length; i++) {
                var coord = squareCoords[i];
                var x = pixel.x+coord[0];
                var y = pixel.y+coord[1];
                if (!isEmpty(x,y, true)) {
					if(pixelMap[x][y].temp < -230) {
                    pixelMap[x][y].temp = (pixelMap[x][y].temp + 7)
					} else if(pixelMap[x][y].temp > 270) {
						pixelMap[x][y].temp = (pixelMap[x][y].temp - 7)
					} else if (pixelMap[x][y].temp < 50) {
						pixelMap[x][y].temp = (pixelMap[x][y].temp + 1)
					} else if (pixelMap[x][y].temp > 50) {
						pixelMap[x][y].temp = (pixelMap[x][y].temp - 3)
					}
                }
            }
	},
	category:"machines",
	state:"solid",
	insulate: true,
	noMix: true,
	movable: false,
    temp: 150
};
