let Direction2 = 0
basic.forever(function () {
    Direction2 = input.compassHeading()
    if (Direction2 >= 0 && Direction2 < 45) {
        basic.showArrow(ArrowNames.North)
    }
    if (Direction2 >= 45 && Direction2 < 90) {
        basic.showArrow(ArrowNames.NorthWest)
    }
    if (Direction2 >= 90 && Direction2 < 135) {
        basic.showArrow(ArrowNames.West)
    }
    if (Direction2 >= 135 && Direction2 < 180) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (Direction2 >= 180 && Direction2 < 225) {
        basic.showArrow(ArrowNames.South)
    }
    if (Direction2 >= 225 && Direction2 < 270) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (Direction2 >= 270 && Direction2 < 315) {
        basic.showArrow(ArrowNames.East)
    }
    if (Direction2 >= 315 && Direction2 < 360) {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
