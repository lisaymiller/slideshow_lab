let slideshow = {
	
	photoList: ['cats', 'dogs', 'birds', 'goats', 'cows'],

	currentPhotoIndex: 0,
	
	nextPhoto: function() {
			
			if (this.currentPhotoIndex <= this.photoList.length) {
				return this.photoList[++this.currentPhotoIndex]
			}
			else { 
				return "End of slideshow";
			}
		},

	prevPhoto: function() {

			if (this.currentPhotoIndex >= 0) {
				return this.photoList[--this.currentPhotoIndex];
			}
			else { 
				return "Beginning of slideshow";
			}
		},

	getCurrentPhoto: function() {
		return this.photoList[this.currentPhotoIndex];
			}



}
console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.getCurrentPhoto())
// console.log(slideshow.prevPhoto());


for (i of slideshow.photoList) {
	console.log(slideshow.nextPhoto())
}
