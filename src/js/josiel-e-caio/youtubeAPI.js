export const videos = []

document.addEventListener('DOMContentLoaded', function () {
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script')

  tag.src = 'https://www.youtube.com/iframe_api'
  var bundle = document.querySelector('[src="/dist/bundle.js"]')
  console.log(bundle)
  bundle.parentNode.insertBefore(tag, bundle)

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player1

  window.onYouTubePlayerAPIReady = function () {
    console.log(videos)
    videos.map((video, i) => {
      ;(video.events.onReady = onPlayerReady),
        (video.events.onStateChange = onPlayerStateChange)

      return new YT.Player(`video-${i + 1}`, video)
    })
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady (event) {
    event.target.mute()
    event.target.playVideo()
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false
  function onPlayerStateChange (event) {
    done = true
  }
})
