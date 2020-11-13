import { videos } from './youtubeAPI'

let video7 = {
  height: '360',
  width: '640',
  videoId: 'iw27HGGKip4',
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
    playlist: 'iw27HGGKip4',
    showinfo: 0,
    autoplay: 0,
    disableRelatedVideos: 1,
    loop: 1
  }
}

videos.push(video7)
