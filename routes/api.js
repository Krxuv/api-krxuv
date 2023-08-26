__path = process.cwd()
//=================[ let MODULE ]==================//
let favicon = require('serve-favicon');
let express = require('express');
let creator = 'Kimimaru'
let secure = require('ssl-express-www');
let cors = require('cors');
let fetch = require('node-fetch');
let cheerio = require('cheerio');
let request = require('request');
let zrapi = require('zrapi');
let thiccysapi = require('textmaker-thiccy');
let dotenv = require('dotenv').config()
let fs = require('fs');
let TikTokScraper = require(
  'tiktok-scraper');
let {
  EmojiAPI
} = require('emoji-api');
let {
  savefrom
} = require('@bochilteam/scraper')
let {
  tafsirsurah,
  ssweb,
  stickersearch,
  telesticker,
  styletext,
  ytdl,
  fbdown,
  twitter,
  pinterest,
  linkwa,
  wallpaperflare,
  ttdl,
  ringtone,
  wikimedia,
  wallpaper,
  komiku,
  tebakgambar,
  surah
} = require('../lib/scraper');
const {
  endpoints
} = require('../lib/utils/endpoints');
const feedid = require('feedid');
let emoji = new EmojiAPI();
let router = express.Router();
//=================[ let FOLDER ]==================//
let {
  color,
  bgcolor
} = require(__path + '/lib/color.js');
let {
  eBinary,
  dBinary
} = require(__path + '/lib/binary.js');
let {
  fetchJson
} = require(__path + '/lib/fetcher.js');
let options = require(__path + '/lib/options.js');
let {
  Searchnabi,
  Gempa,
  textpro,
  photooxy
} = require('./../lib');
let {
  igStalk,
  igDownload
} = require('./../lib/utils/ig');
let {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require('./../lib/utils/yt');
let {
  Cuaca,
  Lirik
} = require('./../lib/utils/information');
let {
  Base,
  WPUser
} = require('./../lib/utils/tools');
let tebakGambar = require('./../lib/utils/tebakGambar');
//=================[ LOGHANDLER ]==================//
loghandler = {
  notparam: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter apikey parameters'
  },
  noturl: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter url parameters'
  },
  notq: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter q parameters'
  },
  nottext: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter text parameters'
  },
  nottext2: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter text2 parameters'
  },
  notnabi: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter nabi parameters'
  },
  notcomment: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter comment parameters'
  },
  notusername: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter username parameters'
  },
  notdisplayname: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter displayname parameters'
  },
  nottext3: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter text3 parameters'
  },
  nottheme: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter theme parameters'
  },
  notvalue: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter value parameters'
  },
  invalidKey: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'Enter a valid apikey'
  },
  invalidlink: {
    status: false,
    creator: `${creator}`,
    message: 'Error, maybe your link is not valid.'
  },
  invalidkata: {
    status: false,
    creator: `${creator}`,
    message: 'Error, maybe word is not in api.'
  },
  error: {
    status: false,
    creator: `${creator}`,
    message: 'An error occurred'
  }
}
router.use(favicon(__path + '/views/favicon.ico'));
const listkey = ['k1mimaru'];
//=================[ SEARCH ]===================//
router.get('/search/stickersearch', async (req, res, next) => {
    const q = req.query.q;
    const apikey = req.query.apikey;
    if (!apikey) return res.json(loghandler.notparam)
    if (!q) return res.json(
      loghandler.notq)
    if (listkey.includes(apikey)) {
      stickersearch(q)
        .then((result) => {
          res.json({
            status: true,
            creator: creator,
            result
          });
        })
        .catch((error) => {
          res.json(error);
        });
    } else {
      res.json(loghandler.invalidKey)
    }
  });
router.get('/search/telesticker', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (!apikey) return res.json(loghandler.notparam)
    if (!url.includes('t.me/addstickers'))
      return res.json({
        message: 'enter a valid telegram sticker url'
      })
    if (listkey.includes(apikey)) {
      telesticker(url)
        .then((result) => {
          res.json({
            status: true,
            creator: creator,
            result
          });
        })
        .catch((error) => {
          res.json(error);
        });
    } else {
      res.json(loghandler.invalidKey)
    }
  });
router.get('/search/pinterest', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    pinterest(q)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/search/youtube', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    ytSearch(q)
      .then((results) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          results
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/search/playmp3', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    ytPlayMp3(q)
      .then((results) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          results
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/search/playmp4', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    ytPlayMp4(q)
      .then((results) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          results
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/search/linkwa', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    linkwa(q)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/search/wallpaperflare', async (req, res, next) => {
    const q = req.query.q;
    const apikey = req.query.apikey;
    if (!apikey) return res.json(loghandler.notparam)
    if (!q) return res.json(
      loghandler.notq)
    if (listkey.includes(apikey)) {
      wallpaperflare(q)
        .then((result) => {
          res.json({
            status: true,
            creator: creator,
            result
          });
        })
        .catch((error) => {
          res.json(error);
        });
    } else {
      res.json(loghandler.invalidKey)
    }
  });
router.get('/search/ringtone', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    ringtone(q)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/search/wikimedia', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    wikimedia(q)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/search/wallpaper', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    wallpaper(q)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/search/komiku', async (req, res, next) => {
  const q = req.query.q;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(apikey)) {
    komiku(q)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
//=================[ DOWNLOADER ]==================//
router.get('/download/youtubemp3', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!url) return res.json(loghandler.noturl)
  if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(url)) return res.json(loghandler.invalidlink)
  if (listkey.includes(apikey)) {
    ytDonlodMp3(url)
      .then((results) => {
        res.json({
          status: true,
          creator: creator,
          results
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/download/youtubemp4', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!url) return res.json(loghandler.noturl)
  if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(url)) return res.json(loghandler.invalidlink)
  if (listkey.includes(apikey)) {
    ytDonlodMp4(url)
      .then((results) => {
        res.json({
          status: true,
          creator: creator,
          results
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/download/facebook', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!url) return res.json(loghandler.noturl)
  if (!url.includes('facebook.com')) return res.json(loghandler.invalidlink)
  if (listkey.includes(apikey)) {
    fbdown(url)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/download/twitter', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!url) return res.json(loghandler.noturl)
  if (!url.includes('twitter.com')) return res.json(loghandler.invalidlink)
  if (listkey.includes(apikey)) {
    twitter(url)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/download/tiktok', async (req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (!url) return res.json(loghandler.noturl)
  if (!url.includes('tiktok.com')) return res.json(loghandler.invalidlink)
  if (listkey.includes(apikey)) {
    ttdl(url)
      .then((result) => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/download/instagram', async (req, res, next) => {
    let Apikey = req.query.apikey
    let url = req.query.url
    if (!Apikey) return res.json(loghandler.notparam)
    if (!url) return res.json(loghandler.noturl)
    if (!url.includes('instagram.com')) return res.json(loghandler.invalidlink)
    if (listkey.includes(Apikey)) {
      savefrom(url)
        .then(result => {
          res.json({
            status: true,
            creator: creator,
            result
          });
        })
        .catch(e => {
          console.log(e)
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  });
router.get('/download/savefrom', async (req, res, next) => {
  let Apikey = req.query.apikey
  let url = req.query.url
  if (!Apikey) return res.json(loghandler.notparam)
  if (!url) return res.json(loghandler.noturl)
  if (listkey.includes(Apikey)) {
    savefrom(url)
      .then(result => {
        res.json({
          status: true,
          creator: creator,
          result
        });
      })
      .catch(e => {
        console.log(e)
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
});
//=================[ GAMES  ]==================//
router.get('/game/asahotak', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const asuahot = JSON.parse(fs.readFileSync(__path + '/data/game/asahotak.json'));
    const AsahOtak = asuahot[Math
      .floor(Math.random() *
        asuahot.length)];
    let hasil = AsahOtak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/caklontong', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const caklont = JSON.parse(fs.readFileSync(__path + '/data/game/caklontong.json'));
    const CakLon = caklont[Math
      .floor(Math.random() *
        caklont.length)];
    let hasil = CakLon;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/family100', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const fam100 = JSON.parse(fs.readFileSync(__path + '/data/game/family100.json'));
    const Fam100 = fam100[Math
      .floor(Math.random() *
        fam100.length)];
    let hasil = Fam100;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/siapakahaku', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const asuahott = JSON.parse(fs.readFileSync(__path + '/data/game/siapakahaku.json'));
    const AsahOtakk = asuahott[
      Math.floor(Math.random() *
        asuahott.length)];
    let hasil = AsahOtakk;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/susunkata', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const asuahost = JSON.parse(fs.readFileSync(__path + '/data/game/susunkata.json'));
    const AsaahOtak = asuahost[
      Math.floor(Math.random() *
        asuahost.length)];
    let hasil = AsaahOtak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/tebakbendera', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const asuahuot = JSON.parse(fs.readFileSync(__path + '/data/game/tebakbendera.json'));
    const AssahOtak = asuahuot[
      Math.floor(Math.random() *
        asuahuot.length)];
    let hasil = AssahOtak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/tebakkabupaten', async (req, res, next) => {
    Apikey = req.query.apikey;
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      const asuaihot = JSON.parse(fs.readFileSync(__path + '/data/game/tebakkabupaten.json'
        ));
      const AsahOytak = asuaihot[
        Math.floor(Math.random() *
          asuaihot.length)];
      let hasil = AsahOytak;
      res.json(hasil)
    } else {
      res.json(loghandler.invalidKey)
    }
  });
router.get('/game/tebakkalimat', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const asuahhhot = JSON.parse(
      fs.readFileSync(__path +
        '/data/game/tebakkalimat.json'));
    const AsahhhOtak = asuahhhot[
      Math.floor(Math.random() *
        asuahhhot.length)];
    let hasil = AsahhhOtak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/tebakkata', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const asuahuhot = JSON.parse(
      fs.readFileSync(__path +
        '/data/game/tebakkata.json'));
    const AsatthOtak = asuahuhot[
      Math.floor(Math.random() *
        asuahuhot.length)];
    let hasil = AsatthOtak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/tebakkimia', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const asuhot = JSON.parse(fs.readFileSync(__path + '/data/game/tebakkimia.json'));
    const AsaOtak = asuhot[Math
      .floor(Math.random() *
        asuhot.length)];
    let hasil = AsaOtak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/tebaklirik', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const asuot = JSON.parse(fs.readFileSync(__path + '/data/game/tebaklirik.json'));
    const AsOtak = asuot[Math
      .floor(Math.random() *
        asuot.length)];
    let hasil = AsOtak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/tebaktebakan', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const ahhhsuahot = JSON.parse(
      fs.readFileSync(__path +
        '/data/game/tebaktebakan.json'));
    const Ashhak = ahhhsuahot[Math
      .floor(Math.random() *
        ahhhsuahot.length)];
    let hasil = Ashhak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/tekateki', async (req, res, next) => {
  Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    const suahot = JSON.parse(fs.readFileSync(__path + '/data/game/tekateki.json'));
    const sahOtak = suahot[Math
      .floor(Math.random() *
        suahot.length)];
    let hasil = sahOtak;
    res.json(hasil)
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/game/tebakgambar', async (req, res, next) => {
  let apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let result =
      await tebakGambar()
    if (result) {
      const hasil = {
        status: true,
        code: 200,
        creator: `${creator}`,
        image: result.img,
        jawaban: result.jawaban,
        clue: result.petunjuk
      }
      res.json(hasil)
    } else {
      return res.status(408)
        .json({
          status: res
            .statusCode,
          error: 'Emror'
        })
    }
  } else {
    res.json(loghandler.invalidKey)
  }
});
//=================[ ISLAMIC ]==================//
router.get('/muslim/tafsirsurah', async (req, res, next) => {
    let query = req.query.q,
      Apikey = req.query.apikey;
    if (!query) return res.json(
      loghandler.notq)
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      tafsirsurah(query)
        .then(result => {
          res.json({
            status: true,
            creator: creator,
            result
          })
        })
        .catch(e => {
          console.log('Error :',
            color(e, 'red'))
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/muslim/surah2', async (req, res, next) => {
  let no = req.query.no,
    Apikey = req.query.apikey;
  if (!no) return res.json({
    status: false,
    creator: creator,
    message: 'masukkan parameter no'
  })
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    surah(no)
      .then(result => {
        res.json({
          status: true,
          creator: creator,
          result
        })
      })
      .catch(e => {
        console.log('Error :',
          color(e, 'red'))
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/kisahnabi', async (req, res, next) => {
  let nabi = req.query.nabi,
    Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    Searchnabi(nabi)
      .then(result => {
        res.json({
          creator: creator,
          result
        })
      })
      .catch(e => {
        console.log('Error :',
          color(e, 'red'))
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/hadits', async (req, res, next) => {
  let Apikey = req.query.apikey,
    kitab = req.query.kitab,
    nomor = req.query.nomor
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!kitab) return res.json({
      status: false,
      creator: `${creator}`,
      message: 'masukan parameter kitab'
    })
    if (!nomor) return res.json({
      status: false,
      creator: `${creator}`,
      message: 'masukan parameter nomor'
    })
    fetch(encodeURI(
        `https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`
      ))
      .then(response => response
        .json())
      .then(data => {
        res.json(
          data
        )
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/quran', async (req, res, next) => {
  let Apikey = req.query.apikey,
    surah = req.query.surah,
    ayat = req.query.ayat
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!surah) return res.json({
      status: false,
      creator: `${creator}`,
      message: 'masukan parameter surah'
    })
    if (!ayat) return res.json({
      status: false,
      creator: `${creator}`,
      message: 'masukan parameter ayat'
    })
    fetch(encodeURI(
        `https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`
      ))
      .then(response => response
        .json())
      .then(data => {
        let result = data;
        res.json({
          result
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/surah', async (req, res, next) => {
  let Apikey = req.query.apikey,
    surah = req.query.surah
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    if (!surah) return res.json({
      status: false,
      creator: `${creator}`,
      message: 'masukan parameter surah'
    })
    fetch(encodeURI(
        `https://alquran-apiii.vercel.app/surah/${surah}`
      ))
      .then(response => response
        .json())
      .then(data => {
        let result = data;
        res.json({
          result
        })
      })
      .catch(e => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/tahlil', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    tahlill = JSON.parse(fs.readFileSync(__path + '/data/DoaTahlil.json'));
    res.json({
      tahlill
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/ayatkursi', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    //   ayatkursi = JSON.parse(fs.readFileSync(__path +'/data/AyatKursi.json'));
    res.json({
      'tafsir': "Allah adalah Tuhan Yang Maha Esa, tidak ada tuhan selain Dia, dan hanya Dia yang berhak untuk disembah. Adapun tuhan-tuhan yang lain yang disembah oleh sebagian manusia dengan alasan yang tidak benar, memang banyak jumlahnya. Akan tetapi Tuhan yang sebenarnya hanyalah Allah. Hanya Dialah Yang hidup abadi, yang ada dengan sendiri-Nya, dan Dia pulalah yang selalu mengatur makhluk-Nya tanpa ada kelalaian sedikit pun.\n\nKemudian ditegaskan lagi bahwa Allah tidak pernah mengantuk. Orang yang berada dalam keadaan mengantuk tentu hilang kesadarannya, sehingga dia tidak akan dapat melakukan pekerjaannya dengan baik, padahal Allah swt senantiasa mengurus dan memelihara makhluk-Nya dengan baik, tidak pernah kehilangan kesadaran atau pun lalai.\n\nKarena Allah tidak pernah mengantuk, sudah tentu Dia tidak pernah tidur, karena mengantuk adalah permulaan dari proses tidur. Orang yang tidur lebih banyak kehilangan kesadaran daripada orang yang mengantuk.\n\nSifat Allah yang lain yang disebutkan dalam ayat ini ialah bahwa Dialah yang mempunyai kekuasaan dan yang memiliki apa yang ada di langit dan di bumi. Dialah yang mempunyai kekuatan dan kekuasaan yang tak terbatas, sehingga Dia dapat berbuat apa yang dikehendaki-Nya. Semuanya ada dalam kekuasaan-Nya, sehingga tidak ada satu pun dari makhluk-Nya termasuk para nabi dan para malaikat yang dapat memberikan pertolongan kecuali dengan izin-Nya, apalagi patung-patung yang oleh orang-orang kafir dianggap sebagai penolong mereka.\n\nYang dimaksud dengan \'pertolongan\' atau \'syafaat\' dalam ayat ini ialah pertolongan yang diberikan oleh para malaikat, nabi dan orang-orang saleh kepada umat manusia pada hari kiamat untuk mendapatkan keringanan atau kebebasan dari hukuman Allah. Syafaat itu akan terjadi atas izin Allah. Dalam hadis disebutkan :\n\nNabi Saw bersabda, \'¦Kemudian Allah berfirman, \'Para Malaikat memberikan syafaat, para Nabi memberikan syafaat, dan orang-orang mukmin juga memberikan syafaat. (Riwayat Ahmad dan Muslim dari Abu Sa'id al-Khudri)\n\nSifat Allah yang lain yang disebutkan dalam ayat ini ialah: bahwa Allah senantiasa mengetahui apa saja yang terjadi di hadapan dan di belakang makhluk-Nya, sedang mereka tidak mengetahui sesuatu pun dari ilmu Allah, melainkan sekadar apa yang dikehendaki-Nya untuk mereka ketahui. Kursi Allah mencakup langit dan bumi. Allah tidak merasa berat sedikit pun dalam memelihara makhluk-Nya yang berada di langit dan di bumi, dan di semua alam ciptaan-Nya. Allah Mahatinggi lagi Mahabesar.\n\nMereka tidak mengetahui ilmu Allah, kecuali apa yang telah dikehendaki-Nya untuk mereka ketahui. Dengan demikian, yang dapat diketahui oleh manusia hanyalah sekadar apa yang dapat dijangkau oleh pengetahuan yang telah dikaruniakan Allah kepada mereka, dan jumlahnya amat sedikit dibanding dengan ilmu-Nya yang luas. Hal ini ditegaskan Allah dalam firman-Nya:\n\n\'¦ Sedangkan kamu diberi pengetahuan hanya sedikit.\' (al-Isra'/17:85)",
      'translation': "Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun tentang ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi, Mahabesar.",
      'arabic': 'اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ  لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ',
      'latin': "Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim."
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/doaharian', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    doahar = JSON.parse(fs.readFileSync(__path + '/data/DoaHarian.json'));
    res.json({
      doahar
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/bacaanshalat', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      bacaansalat = JSON.parse(fs.readFileSync(__path + '/data/BacaanShalat.json'
        ));
      res.json(bacaansalat)
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/muslim/niatshalat', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    niatslt = JSON.parse(fs.readFileSync(__path + '/data/NiatShalat.json')
    );
    res.json(niatslt)
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/wirid', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    niatiislt = JSON.parse(fs.readFileSync(__path + '/data/DoaWirid.json'));
    res.json(niatiislt)
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/muslim/asmaulhusna', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      asmaul = JSON.parse(fs.readFileSync(__path + '/data/AsmaulHusna.json'
        ));
      res.json(asmaul)
    } else {
      res.json(loghandler.invalidKey)
    }
  })
//==============[ CANVAS ]===============//
router.get('/canvas/gay', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/gay?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/glass', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/glass?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/wasted', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/wasted?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/passed', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/passed?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/jail', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/jail?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/comrade', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/comrade?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/triggered', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/triggered?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.gif', data)
    res.sendFile(__path +
      '/tmp/canvas.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/greyscale', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/greyscale?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/invert', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/invert?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/invertgreyscale', async (req, res, next) => {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (!url) return res.json(
      loghandler.noturl)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      let hasil =
        `https://some-random-api.com/canvas/invertgreyscale?avatar=${url}`
      data = await fetch(hasil)
        .then(v => v.buffer())
      await fs.writeFileSync(
        __path +
        '/tmp/canvas.jpeg', data)
      res.sendFile(__path +
        '/tmp/canvas.jpeg')
    } else {
      res.json(loghandler.invalidKey)
    }
  });
router.get('/canvas/brightness', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/brightness?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/threshold', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/threshold?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/sepia', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/sepia?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/red', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/red?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/green', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/green?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/blue', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/blue?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/blurple', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/blurple?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/blurple2', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/blurple2?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/pixelate', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/pixelate?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/blur', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/blur?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/youtubecomment', async (req, res, next) => {
    const apikey = req.query.apikey;
    const url = req.query.url;
    const comment = req.query.comment;
    const username = req.query.username;
    if (!url) return res.json(loghandler.noturl)
    if (!comment) return res.json(loghandler.notcomment)
    if (!username) return res.json(loghandler.notusername)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      let hasil =
        `https://some-random-api.com/canvas/youtube-comment?username=${username}&comment=${comment}&avatar=${url}`
      data = await fetch(hasil).then(v => v.buffer())
      await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
      res.sendFile(__path +'/tmp/canvas.jpeg')
    } else {
      res.json(loghandler.invalidKey)
    }
  });
router.get('/canvas/tweet', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  const comment = req.query.comment;
  const username = req.query.username;
  const displayname = req.query.displayname;
  if (!url) return res.json(loghandler.noturl)
  if (!comment) return res.json(loghandler.notcomment)
  if (!displayname) return res.json(loghandler.notdisplayname)
  if (!username) return res.json(loghandler.notusername)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/tweet?username=${username}&displayname=${displayname}&comment=${comment}&avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/simpcard', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/simpcard?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/horny', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/horny?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/lolice', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/lolice?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/lgbt', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/lgbt?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/pansexual', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/pansexual?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/nonbinary', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/nonbinary?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/lesbian', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/lesbian?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/bisexual', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    let hasil = `https://some-random-api.com/canvas/bisexual?avatar=${url}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/canvas.jpeg', data)
    res.sendFile(__path + '/tmp/canvas.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
//===================[ WALLPAPER ]====================//
router.get('/wallpaper/aesthetik', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/wallpaper/Aesthetik.json'))
      let result = Techno1[Math.floor(Math.random() * Techno1.length)];
      let hasil = result;
      try {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: hasil
        })
      } catch (err) {
        res.json(loghandler.error)
      }
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/wallpaper/anime', async (req, res, next) => {
  const Apikey = req.query.apikey;
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno = JSON.parse(fs.readFileSync(__path + '/data/wallpaper/Anime.json'))
    let result = Techno[Math.floor(Math.random() * Techno.length)];
    let hasil = result.url;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/wallp.jpg', data)
    res.sendFile(__path + '/tmp/wallp.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/wallpaper/cyber', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Muslim = JSON.parse(fs.readFileSync(__path + '/data/wallpaper/Cyber.json'));
    let result = Muslim[Math.floor(Math.random() * Muslim.length)];
    let hasil = result.url;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/wallp.jpg', data)
    res.sendFile(__path + '/tmp/wallp.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/wallpaper/nature', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Progam = JSON.parse(fs.readFileSync(__path + '/data/wallpaper/Nature.json'));
    let result = Progam[Math.floor(Math.random() * Progam.length)];
    let hasil = result.url;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/wallp.jpg', data)
    res.sendFile(__path + '/tmp/wallp.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/wallpaper/teknologi', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      let Techno2 = JSON.parse(fs.readFileSync(__path + '/data/wallpaper/Teknologi.json'));
      let result = Techno2[Math.floor(Math.random() * Techno2.length)];
      let hasil = result.url;
      data = await fetch(hasil).then(v => v.buffer())
      await fs.writeFileSync(__path + '/tmp/wallp.jpg', data)
      res.sendFile(__path + '/tmp/wallp.jpg')
    } else {
      res.json(loghandler.invalidKey)
    }
  })
//=====================[ DECODE & ENCODE ]======================//
router.get('/encode/base64', async (req, res, next) => {
  let Apikey = req.query.apikey,
    q = req.query.q;
  if (!Apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(Apikey)) {
    Base('b64enc', q)
      .then(result => {
        res.json({
          status: true,
          creator: `${creator}`,
          result
        })
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/encode/base32', async (req, res, next) => {
  let Apikey = req.query.apikey,
    q = req.query.q;
  if (!Apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(Apikey)) {
    Base('b32enc', q)
      .then(result => {
        res.json({
          status: true,
          creator: `${creator}`,
          result
        })
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/decode/base64', async (req, res, next) => {
  let Apikey = req.query.apikey,
    q = req.query.q;
  if (!Apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(Apikey)) {
    Base('b64dec', q)
      .then(result => {
        res.json({
          status: true,
          creator: `${creator}`,
          result
        })
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/decode/base32', async (req, res, next) => {
  let Apikey = req.query.apikey,
    q = req.query.q;
  if (!Apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(Apikey)) {
    Base('b32dec', q)
      .then(result => {
        res.json({
          status: true,
          creator: `${creator}`,
          result
        })
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/decode/binary', async (req, res, next) => {
  let Apikey = req.query.apikey,
    q = req.query.q;
  if (!Apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(Apikey)) {
    dBinary(q)
      .then(result => {
        res.json({
          status: true,
          creator: `${creator}`,
          result
        })
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/encode/binary', async (req, res, next) => {
  let Apikey = req.query.apikey,
    q = req.query.q;
  if (!Apikey) return res.json(loghandler.notparam)
  if (!q) return res.json(loghandler.notq)
  if (listkey.includes(Apikey)) {
    eBinary(q)
      .then(result => {
        res.json({
          status: true,
          creator: `${creator}`,
          result
        })
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cecan/vietnam', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/Asupan/img/vietnam.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cecan/thailand', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/Asupan/img/thailand.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cecan/cecan', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/Asupan/img/cecan.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cecan/china', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/Asupan/img/china.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cecan/indonesia', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/Asupan/img/indonesia.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cecan/korea', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/Asupan/img/korea.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cecan/japan', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/Asupan/img/japan.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/cecan/malaysia', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/Asupan/img/malaysia.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/anjing', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/anjing.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/blackpink', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/blackpink.json'))
      let result = Techno1[Math.floor(Math.random() * Techno1.length)];
      let hasil = result;
      try {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: hasil
        })
      } catch (err) {
        res.json(loghandler.error)
      }
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/randomimg/boneka', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/boneka.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/cecan', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/cecan.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/cecan2', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/cecan2.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/cogan', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/cogan.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/cogan2', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/cogan2.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/cosplay', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/cosplay.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/cosplaysagiri', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/cosplaysagiri.json'))
      let result = Techno1[Math.floor(Math.random() * Techno1.length)];
      let hasil = result;
      try {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: hasil
        })
      } catch (err) {
        res.json(loghandler.error)
      }
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/randomimg/cosplayloli', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/cosplayloli.json'))
      let result = Techno1[Math.floor(Math.random() * Techno1.length)];
      let hasil = result;
      try {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: hasil
        })
      } catch (err) {
        res.json(loghandler.error)
      }
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/randomimg/doraemon', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/doraemon.json'))
      let result = Techno1[Math.floor(Math.random() * Techno1.length)];
      let hasil = result;
      try {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: hasil
        })
      } catch (err) {
        res.json(loghandler.error)
      }
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/randomimg/hekel', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/hekel.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/jeni', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/jeni.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/jiso', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/jiso.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/justina', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/justina.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/kartun', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/kartun.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/kpop', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/kpop.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/kucing', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/kucing.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/katakata', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/katakata.json'))
      let result = Techno1[Math.floor(Math.random() * Techno1.length)];
      let hasil = result;
      try {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: hasil
        })
      } catch (err) {
        res.json(loghandler.error)
      }
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/randomimg/lisa', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/lisa.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/mobil', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/mobil.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/motor', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/motor.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/pokemon', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/pokemon.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/profil', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/profil.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/pentol', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/pentol.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/pubg', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/pubg.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/rose', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/rose.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/ryujin', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/ryujin.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/satanic', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/satanic.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/wallhp', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/wallhp.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/wallhp2', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/wallhp2.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/randomimg/yulibocil', async (req, res, next) => {
    let Apikey = req.query.apikey
    if (!Apikey) return res.json(loghandler.notparam)
    if (listkey.includes(Apikey)) {
      let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/randomimg/yulibocil.json'))
      let result = Techno1[Math.floor(Math.random() * Techno1.length)];
      let hasil = result;
      try {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: hasil
        })
      } catch (err) {
        res.json(loghandler.error)
      }
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/anime/akira', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/akira.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/akiyama', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/akiyama.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/ana', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/ana.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/asuna', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/asuna.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/ayuzawa', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/ayuzawa.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/boruto', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/boruto.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/chiho', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/chiho.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/chitoge', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/chitoge.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/deidara', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/deidara.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/eba', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/eba.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/elaina', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/elaina.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/emilia', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/emilia.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/erza', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/erza.json')
    )
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/gremory', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/gremory.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/hestia', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/hestia.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/hinata', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/hinata.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/inori', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/inori.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/isuzu', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/isuzu.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/itachi', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/itachi.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/itori', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/itori.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/kaga', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/kaga.json')
    )
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/kagura', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/kagura.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/kakashi', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/kakashi.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/kaneki', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/kaneki.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/kaori', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/kaori.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/kotori', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/kotori.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/kurumi', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/kurumi.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/madara', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/madara.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/megumin', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/megumin.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/mikasa', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/mikasa.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/miku', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/miku.json')
    )
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/minato', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/minato.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/naruto', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/naruto.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/neko', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/neko.json')
    )
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/nekonime', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/nekonime.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/nezuko', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/nezuko.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/onepiece', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/onepiece.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/rize', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/rize.json')
    )
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/sagiri', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/sagiri.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/sakura', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/sakura.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/sasuke', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/sasuke.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/shina', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/shina.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/shinka', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/shinka.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/shinomiya', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/shinomiya.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/shizuka', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/shizuka.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/shota', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/shota.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/tejina', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/tejina.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/toukachan', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/toukachan.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/tsunade', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/tsunade.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/waifu', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/waifu.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/waifu2', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/waifu2.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/yotsuba', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/yotsuba.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/yuki', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/yuki.json')
    )
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/anime/yumeko', async (req, res, next) => {
  let Apikey = req.query.apikey
  if (!Apikey) return res.json(loghandler.notparam)
  if (listkey.includes(Apikey)) {
    let Techno1 = JSON.parse(fs.readFileSync(__path + '/data/anime/yumeko.json'))
    let result = Techno1[Math.floor(Math.random() * Techno1.length)];
    let hasil = result;
    try {
      res.json({
        status: true,
        creator: creator,
        code: 200,
        result: hasil
      })
    } catch (err) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/1917style', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/1917-style-text-effect-online-980.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
        console.log(err)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/artistictypography', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-artistic-typography-online-1086.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/arcanetvseries', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/artpapercut', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/advancedglow', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/americanflag3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-american-flag-3d-text-effect-online-1051.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/abstragold', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/abstra-gold-text-effect-859.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/blackpinklogo', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/businesssign', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-business-sign-text-effect-1078.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/batmanlogo', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/make-a-batman-logo-online-free-1066.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/bluegem', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/blue-gem-text-effect-830.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/blackmetal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/black-metal-text-effect-829.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/blueglitter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/blue-glitter-text-effect-841.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/bronzeglitter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/bronze-glitter-text-effect-835.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/bluemetal', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/blue-metal-text-effect-831.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/bluejewelry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/blue-jewelry-text-effect-844.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/bagelstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/bagel-text-effect-857.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/biscuitstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/biscuit-text-effect-858.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/box3dstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-box-text-effect-online-880.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/breadeffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/bread-text-effect-online-887.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/bokehstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/bokeh-text-effect-876.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/breakwall', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/break-wall-text-effect-871.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/blueglass', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/blue-glass-text-effect-908.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/bluefoilballoon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/blue-foil-balloon-text-effect-923.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/bluesparkling', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/blue-sparkling-jewelry-text-effect-898.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/bloodfrostedglass', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/blood-text-on-the-frosted-glass-941.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/blackpinklogo2', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/blackwhitebear', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/brokenglass', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/broken-glass-text-effect-free-online-1023.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/berryeffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-berry-text-effect-online-free-1033.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/bluecircuit', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/carvedstone', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-carved-stone-text-effect-online-1074.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/christmastree', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/christmas-tree-text-effect-online-free-1057.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/christmascandy', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-christmas-candy-cane-text-effect-1056.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/christmas3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-christmas-text-effect-by-name-1055.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/carboneffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/carbon-text-effect-833.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/cyanjewelry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/cyan-jewelry-text-effect-845.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/chrome3d', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/3d-chrome-text-effect-827.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/christmasgift', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/chrismast-gift-text-effect-869.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/chocolatecake', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/chocolate-cake-text-effect-890.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/cyansparkling', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/captainamerica', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/captain-america-text-effect-905.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/cyanglass', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/cyan-glass-text-effect-909.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/cyanfoilballoon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/cyan-foil-balloon-text-effect-924.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/cloudeffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/christmasholiday', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/cloudonsky', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/decorativeglass', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/decorative-glass-text-effect-891.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/dropwater', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/dropwater-text-effect-872.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/denimstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/denim-text-effect-online-919.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/decorategreen', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/decorate-green-text-effect-918.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/decorativepurple', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/decorate-purple-text-effect-917.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/deepseametal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/deluxesilver', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/deluxe-silver-text-effect-970.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/deluxegold', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/deluxe-gold-text-effect-966.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/embossedcracked', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/elegantwhitegold', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/erodedmetal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/eroded-metal-text-effect-834.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/fireworksparkle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/firework-sparkle-text-effect-930.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/fruitjuice', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/fruit-juice-text-effect-861.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/futuristicneon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/fabricstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/fabric-text-effect-online-964.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/goldsparkling', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/gold-sparkling-jewelry-text-effect-895.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/goldglitter3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-decorative-gold-glitter-3d-text-effect-online-1089.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/gradientneonlight', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/golden3d', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/free-creative-3d-golden-text-effect-online-1075.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/giraffetext3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-3d-giraffe-text-effect-online-1069.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/glowingneonlight', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/goldenancient', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/greenglitter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/green-glitter-text-effect-838.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/goldglitter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/gold-glitter-text-effect-836.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/glowingmetal3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-glowing-metal-text-effect-828.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/greenjewelry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/green-jewelry-text-effect-846.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/greenneon', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/green-neon-text-effect-874.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/greensparkling', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/green-sparkling-jewelry-text-effect-897.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/greenglass', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/green-glass-text-effect-910.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/goldfoilballoon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/gold-foil-balloon-text-effect-922.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/greenfoilballoon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/green-foil-balloon-text-effect-925.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/glossybluemetal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/glossy-blue-metal-text-effect-967.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/glossycarbon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/glossy-carbon-text-effect-965.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/gluerealistic3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/gradient3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-gradient-text-effect-online-free-1002.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/glossymetal3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/gradient3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/online-3d-gradient-text-effect-generator-1020.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/greenhorror', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-green-horror-style-text-effect-online-1036.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/horrorgift', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/horror-gift-text-effect-866.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/holographic3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/holographic-3d-text-effect-975.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/happynewyear', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/happy-new-year-2022-greeting-3d-card-1058.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/hallowenfire', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/halloween-fire-text-effect-940.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/hallowenskeleton', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/horrorblood', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/horror-blood-text-effect-online-883.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/honeystyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/honey-text-effect-868.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/hotmetal', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/hot-metal-text-effect-843.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/hexagolden', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/hexa-golden-text-effect-842.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/impressiveglitch', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/icecold', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/ice-cold-text-effect-862.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/koifish', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/koi-fish-text-effect-online-888.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/luxurygold3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-luxury-gold-text-effect-online-1003.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/logojoker', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/create-logo-joker-online-934.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/lavastyle', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/lava-text-effect-online-914.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/luxurymetallic3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/lightglowsliced', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/leddisplayscreen', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/color-led-display-screen-text-effect-1059.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/metalrainbow', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/metal-rainbow-text-effect-854.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/marblestyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/marble-text-effect-863.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/marbleslabs', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/marble-slabs-text-effect-864.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/matrixstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/matrix-style-text-effect-online-884.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/minion3d', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/minion-text-effect-3d-online-978.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/metalpurpledual', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/metal-purple-dual-effect-973.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/metaldarkgold', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/metal-dark-gold-text-effect-984.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/magmahot', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get(
  '/textpro/multicolorpapercut', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/metalliceffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/neonstyle', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/neon-text-effect-online-963.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/neonlight3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/neondevilwings', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/neonlightgalaxy', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/neonlight', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/neon-light-text-effect-online-882.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/neonstyle2', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/neon-text-effect-online-879.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/naturalleaves', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/natural-leaves-text-effect-931.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get(
  '/textpro/neonlightblackpink', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/neonlightglitch', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/neon-light-glitch-text-generator-online-1063.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get(
  '/textpro/neonlightbrickwall', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-neon-light-on-brick-wall-online-1062.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/orangejuice3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/orangeglass', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/orange-glass-text-effect-911.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/orangejewelry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/orange-jewelry-text-effect-847.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/pottery3d', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/create-3d-pottery-text-effect-online-1088.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/pinkcandy', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/pink-candy-text-effect-832.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/pinkglitter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/pink-glitter-text-effect-839.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/purpleglitter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/purple-glitter-text-effect-840.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/purplejewelry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/purple-jewelry-text-effect-848.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/purplegem', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/purple-gem-text-effect-853.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/plasticbagdrug', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/plastic-bag-drug-text-effect-867.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/purpleshiny', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/purple-shiny-glass-text-effect-906.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/pinksparkling', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/pink-sparkling-jewelry-text-effect-899.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/purpleglass', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/purple-glass-text-effect-online-892.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/purplesparkling', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/purple-sparkling-jewelry-text-effect-896.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/purpleglass2', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/purple-glass-text-effect-912.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/peridotstone', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/peridot-stone-text-effect-916.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/purplefoilballoon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/purple-foil-balloon-text-effect-927.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/pinkfoilballoon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/pink-foil-balloon-text-effect-926.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/rustedmetal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-rusted-metal-text-effect-online-1087.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/realisticgolden', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-realistic-golden-text-effect-on-red-sparkles-online-1082.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/rustymetal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/rusty-metal-text-effect-860.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/redsparkling', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/red-sparkling-jewelry-text-effect-894.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/redjewelry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/red-jewelry-text-effect-849.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/roadwarning', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/road-warning-text-effect-878.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/rockstyle', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/rock-text-effect-online-915.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/redfoilballoon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/red-foil-balloon-text-effect-928.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get(
  '/textpro/rainbowcallighraphy', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/redglass', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/red-glass-text-effect-907.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/robotr2d2', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/robot-r2-d2-text-effect-903.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/rainbowequalizer', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/rainbow-equalizer-text-effect-902.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/summerwpalm', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/sparklingdiamonds', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-quick-sparkling-diamonds-text-effect-1077.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/summerneonlight', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/stone3d', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/styleglass3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-3d-style-glass-text-effect-online-1072.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/erodedmetal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/eroded-metal-text-effect-834.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/silverglitter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/silver-glitter-text-effect-837.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/silverjewelry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/silver-jewelry-text-effect-850.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/shinymetal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/shiny-metal-text-effect-852.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/scifistyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/sci-fi-text-effect-855.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/steelstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/steel-text-effect-online-921.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/sandsummer', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/write-in-sand-summer-beach-free-online-991.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/sandengraved', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/sand-engraved-3d-text-effect-989.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/sandwriting', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/sand-writing-text-effect-online-990.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/summerysand', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-summery-sand-writing-text-effect-988.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/skeleteton', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/skeleton-text-effect-online-929.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/sketcheffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-sketch-text-effect-online-1044.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/spaceeffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-space-text-effects-online-free-1042.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/sciencefiction', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-science-fiction-text-effect-online-free-1038.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/sparkleschristmas', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/sparkles-merry-christmas-text-effect-1054.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/scifieffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/snowwinter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/stonecracked', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/strawberry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/strawberry-text-effect-online-889.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/thunder', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/thunderstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-thunder-text-effect-online-881.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/toxiceffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/toxic-text-effect-online-901.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/transformer', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-transformer-text-effect-online-1035.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/uderwater', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/ultragloss', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/ultra-gloss-text-effect-online-920.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/wonderfulgraffiti', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/woodstyle', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/wood-text-effect-856.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/watercolor', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/waterpipe', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    textpro('https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/textpro/wickerstyle', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/wicker-text-effect-online-932.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/xmascards3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/xmas-cards-3d-online-942.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/yellowglass', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/yellow-glass-text-effect-913.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/textpro/yellowjewelry', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      textpro('https://textpro.me/yellow-jewelry-text-effect-851.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/whitestone3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/shadowonsky', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/writeoncup', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/romantic', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    photooxy('https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/photooxy/easysmoke', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/burnpaper', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/putonthecup', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/narutobanner', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/lovemessage', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/loveeffect', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/love-text-effect-372.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/undergrass', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/quoteonwood', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/flowerheart', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/coffeecup', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/summer3d', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    photooxy('https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/photooxy/woodenboards', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/wolfmetal', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/underwaterocean', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/nature3d', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    photooxy('https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/photooxy/yellowroses', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/fallleaves', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/leavestypography', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/create-a-layered-leaves-typography-text-effect-354.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/smokyneonglow', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/rainbowshine', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/graffiticover', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/banner-cover/graffiti-text-cover-222.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/glowing3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/create-a-3d-glowing-text-effect-220.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/camougflage', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/vintage', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    photooxy('https://photooxy.com/other-design/vintage-text-style-219.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/photooxy/honey', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    photooxy('https://photooxy.com/logo-and-text-effects/honey-text-effect-218.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/photooxy/gradientavatar', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/underwhite', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/glowrainbow', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/furgenerator', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/starsonsky', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/flaming', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    photooxy('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/photooxy/embroidery', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/crispchromed', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/create-a-crisp-chromed-text-effect-196.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/appybirthday', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/text-on-appy-birthday-cake-190.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/metallicglow', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/other-design/create-metallic-text-glow-online-188.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/rainbow3d', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/other-design/create-3d-text-on-rainbow-online-189.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/striking', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    photooxy('https://photooxy.com/other-design/striking-3d-text-effect-online-187.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/photooxy/watermelon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/watermelon-text-style-186.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/butterfly', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/woodblack', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/3d-wood-text-black-style-182.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/harrypotter', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/illuminated', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/textoncoffee', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/royalballoon', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/scarycemetery', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/carvedwood', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/smoketypo', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/simplesilk', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/simple-text-on-the-silk-167.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/sweetandy', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/royalpatterns', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/underflower', async (req, res, next) => {
    let apikey = req.query.apikey;
    let text1 = req.query.text
    if (!text1) return res.json(loghandler.nottext)
    if (!apikey) return res.json(loghandler.notparam)
    if (listkey.includes(apikey)) {
      photooxy('https://photooxy.com/logo-and-text-effects/text-under-flower-165.html', [text1])
        .then((data) => {
          res.json({
            status: true,
            creator: creator,
            code: 200,
            result: data
          })
        })
        .catch((err) => {
          res.json(loghandler.error)
        })
    } else {
      res.json(loghandler.invalidKey)
    }
  })
router.get('/photooxy/flower', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text1 = req.query.text
  if (!text1) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    photooxy('https://photooxy.com/art-effects/flower-typography-text-effect-164.html', [text1])
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          code: 200,
          result: data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/tools/sswebphone', async (req, res, next) => {
  let apikey = req.query.apikey;
  let url = req.query.url
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ssweb(url, 'phone')
      .then((data) => {
        res.set({
          'Content-Type': 'image/png'
        })
        res.send(data)
      })
      .catch((err) => {
        res.json(loghandler.invalidlink)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/tools/sswebtablet', async (req, res, next) => {
  let apikey = req.query.apikey;
  let url = req.query.url
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ssweb(url, 'tablet')
      .then((data) => {
        res.set({
          'Content-Type': 'image/png'
        })
        res.send(data)
      })
      .catch((err) => {
        res.json(loghandler.invalidlink)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/tools/sswebpc', async (req, res, next) => {
  let apikey = req.query.apikey;
  let url = req.query.url
  if (!url) return res.json(loghandler.noturl)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    ssweb(url, 'desktop')
      .then((data) => {
        res.set({
          'Content-Type': 'image/png'
        })
        res.send(data)
      })
      .catch((err) => {
        res.json(loghandler.invalidlink)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/tools/styletext', async (req, res, next) => {
  let apikey = req.query.apikey;
  let text = req.query.text
  if (!text) return res.json(loghandler.nottext)
  if (!apikey) return res.json(loghandler.notparam)
  if (listkey.includes(apikey)) {
    styletext(text)
      .then((data) => {
        res.json({
          status: true,
          creator: creator,
          data
        })
      })
      .catch((err) => {
        res.json(loghandler.error)
      })
  } else {
    res.json(loghandler.invalidKey)
  }
})
endpoints.forEach((endpoint) => {
  router.get(`/${endpoint.primary}/:category`, async (req, res) => {
      const apikey = req.query.apikey;
      const { category} = req.params;
      if (!apikey) return res.json(loghandler.notparam)
      if (listkey.includes(apikey)) {
        feedid[endpoint.primary][category]()
          .then((data) => {
            res.json({
              status: true,
              creator: creator,
              code: 200,
              result: data.data
            })
          })
          .catch((err) => {
            res.json(loghandler.error)
          })
      } else {
        res.json(loghandler.invalidKey)
      }
    });
});
module.exports = router