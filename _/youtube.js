var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var documentId = 'player';
var videoId = 'none';
var controls = 0;
var loop = true;

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player(documentId, {
		videoId : videoId,
		playerVars : {
			'controls' : controls,
			'rel' : 0,
			'iv_load_policy' : 3,
			'fs' : 0,
			'disablekb' : 1
		},
		events : {'onReady' : onPlayerReady}
	});
}

function playVideo(documentId, videoId, controls = 0, loop = true) {
	this.documentId = documentId;
	this.videoId = videoId;
	this.controls = controls;
	this.loop = loop;
}

function onPlayerReady(event) {
	player.loadPlaylist([ this.videoId ], 0, 0);
	player.mute();
	player.setLoop(true);
}