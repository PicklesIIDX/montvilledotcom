var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var documentId = 'player';
var videoId = 'none';
var controls = 0;
var showInfo = 0;
var modestBranding = 1;
var loop = true;

var player;
function onYouTubeIframeAPIReady(){
	player = new YT.Player(documentId, {
		videoId: videoId,
		playerVars: {'controls':controls, 'showinfo':showInfo, 'modestbranding':modestBranding},
		events: {
			'onReady': onPlayerReady
		}
	});
}

function playVideo(documentId, videoId, controls = 0, showInfo = 0, modestBranding = 1, loop = true){
	this.documentId = documentId;
	this.videoId = videoId;
	this.controls = controls;
	this.showInfo = showInfo;
	this.modestBranding = modestBranding;
	this.loop = loop;
}

function onPlayerReady(event){
	player.loadPlaylist([this.videoId], 0, 0);
	player.mute();
	player.setLoop(true);
}