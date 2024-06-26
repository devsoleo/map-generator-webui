function getColor(value) {
  return 'rgba(0, 0, 0, ' + value + ')'
}

function display(data) {
  const canvas = document.getElementById('canvas')
        canvas.style.background = 'white'
  const ctx = canvas.getContext('2d')

  const rows = data.length
  const cols = data[0].length
  const cellWidth = canvas.width / cols
  const cellHeight = canvas.height / rows

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const value = data[i][j]
      const color = getColor(value)

      // Dessiner la cellule
      ctx.fillStyle = color
      ctx.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight)

      // Ajouter des bordures pour mieux voir les cases
      /*
      ctx.strokeStyle = 'black';
      ctx.strokeRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
      */
    }
  }
}