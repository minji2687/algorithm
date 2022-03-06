let dx = [0, -1, 0, 1];
let dy = [1, 0, -1, 0];

let x = 2;
let y = 2;

for (let i = 0; i < 4; i++) {
  let nx = x + dx[i];
  let ny = y + dy[i];
  console.log(nx, ny);
}
