'use strict';
const formateerTweet = tekst =>
    tekst.lenght < 20 ? tekst.substring(0, 20) + "..." : tekst;

const formateerPost = tekst => `${tekst} #awesome`

const formateercombo = tekst => formateerPost(), formateerTweet()