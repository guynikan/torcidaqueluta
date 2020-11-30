import { videosViviane } from '../youtubeAPI'

const videoId = 'zNG9kSPtmZs'

let video = {
  height: '360',
  width: '640',
  videoId: videoId,
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
    playlist: videoId,
    showinfo: 0,
    autoplay: 0,
    disableRelatedVideos: 1,
    loop: 1
  }
}

videosViviane.push(video)
