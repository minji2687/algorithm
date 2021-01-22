function solution(S) {
  let arr = S.split("\n").map((i) => i.split(" "));
  let myMap = new Map(arr);

  let hash = {
    music: 0,
    images: 0,
    movies: 0,
    other: 0,
  };
  function getfileSize(value) {
    return Number(value.replace("b", ""));
  }

  for (let [key, value] of myMap) {
    if (key.includes("mp3") || key.includes("aac") || key.includes("flac")) {
      hash["music"] = hash["music"] + getfileSize(value);
    } else if (
      key.includes("jpg") ||
      key.includes("bmp") ||
      key.includes("gif")
    ) {
      hash["images"] = hash["images"] + getfileSize(value);
    } else if (
      key.includes("mp4") ||
      key.includes("avi") ||
      key.includes("mkv")
    ) {
      hash["movies"] = hash["movies"] + getfileSize(value);
    } else {
      hash["other"] = hash["other"] + getfileSize(value);
    }
  }
  return `music ${hash.music}b\nimages ${hash.images}b\nmovies ${hash.movies}b\nother ${hash.other}b`;
}

let S =
  "my.song.mp3 11b\ngreatSong.flac 1000b\nnot3.txt 5b\nvideo.mp4 200b\ngame.exe 100b\nmov!e.mkv 10000b";

console.log(solution(S));
