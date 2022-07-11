export function VolumeToText(volume) {
    let volume_text = ''
    if(volume.length >= 0 && volume.length <= 3){
        volume_text = '$' + volume
    }
    else if(volume.length >= 4 && volume.length <= 6){
        volume_text = '$' + (volume / Math.pow(10, 3)).toFixed(2) + ' K'
    }
    else if(volume.length >= 7 && volume.length <= 9){
        volume_text = '$' + (volume / Math.pow(10, 6)).toFixed(2) + ' M'
    }
    else if(volume.length >= 10 && volume.length <= 12) {
        volume_text = '$' + (volume / Math.pow(10, 9)).toFixed(2) + ' B'
    }
    else {
        volume_text = 'unknown'
    }

    return volume_text
}