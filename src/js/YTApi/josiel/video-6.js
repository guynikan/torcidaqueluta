import { videosJosielECaio } from '../youtubeAPI'

let video = {
  height: '360',
  width: '640',
  videoId: 'k6oYAw97O6o',
  hideVideoInfo: true,
  events: {
    onReady: null,
    onStateChange: null
  },
  playerVars: {
    autohide: 1,
    controls: 1,
    fs: 0,
    iv_load_policy: 3,
    playlist: 'k6oYAw97O6o',
    showinfo: 0,
    autoplay: 0,
    disableRelatedVideos: 1,
    loop: 1
  }
}

videosJosielECaio.push(video)
