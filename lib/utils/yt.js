const yt = require("ytdl-core")
const yts = require("yt-search")

async function ytDonlodMp3(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let audio = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
            let aud = pormat[i]
            audio.push({ bitrate: aud.bitrate, audioBitrate: aud.audioBitrate, itag: aud.itag, contentLength: aud.contentLength, url: aud.url })
          }
        }
        //console.log(data)
        const result = {
          title: data.videoDetails.title,
          description: data.videoDetails.description,
          lengthSeconds: data.videoDetails.lengthSeconds,
          externalChannelId: data.videoDetails.externalChannelId,
          ownerProfileUrl: data.videoDetails.ownerProfileUrl,
          isFamilySafe: data.videoDetails.isFamilySafe,
          viewCount: data.videoDetails.viewCount,
          category: data.videoDetails.category,
          publishDate: data.videoDetails.publishDate,
          uploadDate: data.videoDetails.uploadDate,
          ownerChannelName: data.videoDetails.ownerChannelName,
          videoId: data.videoDetails.videoId,
          channelId: data.videoDetails.channelId,
          keywords: data.videoDetails.keywords,
          video_url: data.videoDetails.video_url,
          username: data.videoDetails.author.user,
          verified: data.videoDetails.author.verified,
          subscriber_count: data.videoDetails.author.subscriber_count,
          data: audio
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

async function ytDonlodMp4(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let video = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true) {
            let vid = pormat[i]
            video.push({ qualityLabel: vid.qualityLabel, bitrate: vid.bitrate, itag: vid.itag, width: vid.width, height: vid.height, contentLength: vid.contentLength, quality: vid.quality, fps: vid.fps, url: vid.url })
          }
        }
        const result = {
          title: data.videoDetails.title,
          description: data.videoDetails.description,
          lengthSeconds: data.videoDetails.lengthSeconds,
          externalChannelId: data.videoDetails.externalChannelId,
          ownerProfileUrl: data.videoDetails.ownerProfileUrl,
          isFamilySafe: data.videoDetails.isFamilySafe,
          viewCount: data.videoDetails.viewCount,
          category: data.videoDetails.category,
          publishDate: data.videoDetails.publishDate,
          uploadDate: data.videoDetails.uploadDate,
          ownerChannelName: data.videoDetails.ownerChannelName,
          videoId: data.videoDetails.videoId,
          channelId: data.videoDetails.channelId,
          keywords: data.videoDetails.keywords,
          video_url: data.videoDetails.video_url,
          username: data.videoDetails.author.user,
          verified: data.videoDetails.author.verified,
          subscriber_count: data.videoDetails.author.subscriber_count,
          data: video
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

async function ytPlayMp3(query) {
    return new Promise((resolve, reject) => {
        try {
            const search = yts(query)
            .then((data) => {
                const url = []
                const pormat = data.all
                for (let i = 0; i < pormat.length; i++) {
                    if (pormat[i].type == 'video') {
                        let dapet = pormat[i]
                        url.push(dapet.url)
                    }
                }
                const id = yt.getVideoID(url[0])
                const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
                .then((data) => {
                    let pormat = data.formats
                    let audio = []
                    for (let i = 0; i < pormat.length; i++) {
                      if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
                        let aud = pormat[i]
                        audio.push({ bitrate: aud.bitrate, audioBitrate: aud.audioBitrate, itag: aud.itag, contentLength: aud.contentLength, url: aud.url })
                      }
                    }
                    //console.log(data)
                    const result = {
                      title: data.videoDetails.title,
                      description: data.videoDetails.description,
                      lengthSeconds: data.videoDetails.lengthSeconds,
                      externalChannelId: data.videoDetails.externalChannelId,
                      ownerProfileUrl: data.videoDetails.ownerProfileUrl,
                      isFamilySafe: data.videoDetails.isFamilySafe,
                      viewCount: data.videoDetails.viewCount,
                      category: data.videoDetails.category,
                      publishDate: data.videoDetails.publishDate,
                      uploadDate: data.videoDetails.uploadDate,
                      ownerChannelName: data.videoDetails.ownerChannelName,
                      videoId: data.videoDetails.videoId,
                      channelId: data.videoDetails.channelId,
                      keywords: data.videoDetails.keywords,
                      video_url: data.videoDetails.video_url,
                      username: data.videoDetails.author.user,
                      verified: data.videoDetails.author.verified,
                      subscriber_count: data.videoDetails.author.subscriber_count,
                      data: audio
                    }
                    return(result)
                })
                return(yutub)
            })
            resolve(search)
        } catch (error) {
            reject(error)
        }
        console.log(error)
    })
}

async function ytPlayMp4(query) {
    return new Promise((resolve, reject) => {
        try {
            const search = yts(query)
            .then((data) => {
                const url = []
                const pormat = data.all
                for (let i = 0; i < pormat.length; i++) {
                    if (pormat[i].type == 'video') {
                        let dapet = pormat[i]
                        url.push(dapet.url)
                    }
                }
                const id = yt.getVideoID(url[0])
                const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
                .then((data) => {
                    let pormat = data.formats
                    let video = []
                    for (let i = 0; i < pormat.length; i++) {
                    if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true) {
                      let vid = pormat[i]
                      video.push({ qualityLabel: vid.qualityLabel, bitrate: vid.bitrate, itag: vid.itag, width: vid.width, height: vid.height, contentLength: vid.contentLength, quality: vid.quality, fps: vid.fps, url: vid.url })
                    }
                  }
                  const result = {
                    title: data.videoDetails.title,
                    description: data.videoDetails.description,
                    lengthSeconds: data.videoDetails.lengthSeconds,
                    externalChannelId: data.videoDetails.externalChannelId,
                    ownerProfileUrl: data.videoDetails.ownerProfileUrl,
                    isFamilySafe: data.videoDetails.isFamilySafe,
                    viewCount: data.videoDetails.viewCount,
                    category: data.videoDetails.category,
                    publishDate: data.videoDetails.publishDate,
                    uploadDate: data.videoDetails.uploadDate,
                    ownerChannelName: data.videoDetails.ownerChannelName,
                    videoId: data.videoDetails.videoId,
                    channelId: data.videoDetails.channelId,
                    keywords: data.videoDetails.keywords,
                    video_url: data.videoDetails.video_url,
                    username: data.videoDetails.author.user,
                    verified: data.videoDetails.author.verified,
                    subscriber_count: data.videoDetails.author.subscriber_count,
                    data: video
                  }
                  return(result)
                })
                return(yutub)
            })
            resolve(search)
        } catch (error) {
            reject(error)
        }
        console.log(error)
    })
}

async function ytSearch(query) {
    return new Promise((resolve, reject) => {
        try {
            const cari = yts(query)
            .then((data) => {
                res = data.all
                return res
            })
            resolve(cari)
        } catch (error) {
            reject(error)
        }
        console.log(error)
    })
}

module.exports = {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
};