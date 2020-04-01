let slideshow = {
	
	photoList: ['cats', 'dogs', 'birds', 'goats', 'cows'],

	currentPhotoIndex: 0,
	
	nextPhoto: function() {
			
			if (this.currentPhotoIndex < this.photoList.length-1) {
				this.currentPhotoIndex++;

			} else if (this.currentPhotoIndex >= this.photoList.length-1){
				return "End of slideshow";
				}
			
			return this.photoList[this.currentPhotoIndex];
		},

	prevPhoto: function() {

			if (this.currentPhotoIndex > 0) {
				this.currentPhotoIndex--;
			
			} else if (this.currentPhotoIndex === 0){
				return "Beginning of slideshow";
				}
			
			return this.photoList[this.currentPhotoIndex];
		},

	getCurrentPhoto: function() {

		return this.photoList[this.currentPhotoIndex];
			},





	playInterval: null,
    play: function() {
        var self = this;
        this.playInterval = setInterval(function() {
            self.nextPhoto()
        }, 2000)
        return slideshow.nextPhoto();
    },
    pause: function() {
        clearInterval(this.playInterval);
    }


}

slideshow.play();

// console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());


// console.log(slideshow.getCurrentPhoto());

// console.log(slideshow.prevPhoto());
// console.log(slideshow.prevPhoto());
// console.log(slideshow.prevPhoto());
// console.log(slideshow.prevPhoto());
// console.log(slideshow.prevPhoto());



