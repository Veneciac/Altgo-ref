const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    const hexToRgb = hex =>
          hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
                ,(m, r, g, b) => '#' + r + r + g + g + b + b)
          .substring(1).match(/.{2}/g)
          .map(x => parseInt(x, 16))

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return `rgba(${hexToRgb(color).join(', ')}, 0.7)`;
}
export default getRandomColor