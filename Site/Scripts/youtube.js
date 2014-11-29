$(function () {
    loadVideo("hBon00jon10");

    $("#youtubeLink p").click(function () {
        loadVideo($(this).html());
    });
});

function loadVideo(videoId) {
    $("#playerWrapper").html('<div id="player"></div>');
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: videoId,
            playerVars: {
                html5: 1,
                controls: 0,
                modestbranding: 1,
                showinfo: 0,
                origin: 'http://fiddle.jshell.net',
                rel: 0
            },
            events: {
                //'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onPlaybackRateChange': onPlaybackRateChange
            }
        });
    };

    var available_rates = $('#available_rates');
    var other_rates = $('#other_rates');
    var rate = $('#rate');

    function onPlayerReady(event) {
        // add one option for each supported playback rate
        jQuery.each(player.getAvailablePlaybackRates(),

        function (index, value) {
            addSpeedControl(index, value, available_rates);
        });

        // add one option for some extra values
        jQuery.each([0.1, 1.75, 5],

        function (index, value) {
            addSpeedControl(index, value, other_rates);
        });

        event.target.playVideo();
    }

    function addSpeedControl(index, value, el) {
        el.append($('<li>').append($('<a>', {
            text: value,
            href: '#',
            click: function () {
                player.setPlaybackRate(value);
            }
        })));
    }

    function onPlayerStateChange(event) {
        rate.html(player.getPlaybackRate());
    }

    function onPlaybackRateChange(event) {
        rate.html(player.getPlaybackRate());
    }

    function stopVideo() {
        player.stopVideo();
    }

    //var url = "Home/ChangeUrl";

    //var youtubeLink = "https://www.youtube.com/watch?v=";

    //$.get(url, { id: "hBon00jon10" }, function (data) {
    //    $("#player").attr("src", youtubeLink+data);
    //})
}