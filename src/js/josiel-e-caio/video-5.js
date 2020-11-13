import { videos } from './youtubeAPI'

let video5 = {
  height: '360',
  width: '640',
  videoId: 'vyEqxf3ijQg',
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
    playlist: 'vyEqxf3ijQg',
    showinfo: 0,
    autoplay: 0,
    disableRelatedVideos: 1,
    loop: 1
  }
}

videos.push(video5)
