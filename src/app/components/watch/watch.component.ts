import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css'
})
export class WatchComponent {

 

  playerHeight = 270;
  playerWidth = 480;

  playlist = [
    {
      id: 'ng-esYatKZA',
      title: 'The Great Commision(Assignment)',
      description: 'In this sermon, the prophet talks of God’s anointing, gifts and the calling of God on all His Children for the Great Commission to bring souls to Christ.',
      posterUrl: 'assets/img/project/h5_project_img04.jpg'
    },
    {
      id: '-cJb3FE8d4Y',
      title: 'Understanding God’s Time and Seasons.',
      description: 'In this sermon, Prophet Givens explains the mysteries of God’s time and how God works with and outside the realm of time to bring His intentions to fulfilment on His people. ',
      posterUrl: 'assets/img/project/h5_project_img05.jpg'
    },
    {
      id: 'aNK19JjqkRQ',
      title: 'The Promised Land',
      description: 'In this prophetic livestream, Prophet Givens delves across the promises of God in the scriptures and how God has purposed to seal His blessing in both your spiritual realm and your physical life.',
      posterUrl: 'assets/img/project/h5_project_img04.jpg'
    },
    {
      id: 'DIL1Fis1Kh4',
      title: 'The Anointing Upon You (Deliverance)',
      description: 'Here Prophet Givens speaks on the power and freedom granted upon all believers through The Cross and how you can access and enjoy your promised freedom in Christ in every way. ',
      posterUrl: 'assets/img/project/h5_project_img05.jpg'
    },
  ];

  currentVideoId = this.playlist[this.playlist.length - 1].id;
  currentVideoTitle = this.playlist[this.playlist.length - 1].title;
  currentVideDescription = this.playlist[this.playlist.length - 1].description;

  playVideo(video: { id: string; title: string; description: string }) {
    this.currentVideoId = video.id;
    this.currentVideoTitle = video.title;
    this.currentVideDescription = video.description;
  }
  // onPlayerReady(event: any) {
  //   this.player = event.target;
  //   this.playCurrentVideo();
  // }

  // onPlayerStateChange(event: any) {
  //   if (event.data === YT.PlayerState.ENDED) {
  //     this.playNextVideo();
  //   }
  // }

  // playCurrentVideo() {
  //   const videoId = this.videoIds[this.currentVideoIndex];
  //   this.player?.cueVideoById(videoId);
  // }

  // playNextVideo() {
  //   this.currentVideoIndex++;
  //   if (this.currentVideoIndex < this.videoIds.length) {
  //     this.playCurrentVideo();
  //   } else {
  //     // Playlist ended
  //     // You can handle what to do when the playlist ends
  //   }
  // }

  // onPlayerError(event: any) {
  //   // Error occurred in the player
  // }
}
