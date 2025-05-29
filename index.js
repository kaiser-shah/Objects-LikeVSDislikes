// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function likeOrDislike(like) {
  // for loop > check first item, log status on variable.
  let status = 'nothing';
  for (let i = 0; i < like.length;) {
    //Check if next item is a pair. If yes, log status as 'nothing'.
    // if ((i = like.length - 1)) {
    //   // if current status is 'nothing' check previous item to see if it a pair. If not, can save status as 'i' else leave as 'nothing'.
    // }
    console.log('Comparing ' + like[i] + ' ' + like[i + 1], ' = ');
    if (like[i] === like[i + 1]) {
      status = 'nothing';
      i += 2;
    } else {
      status = like[i];
      i++;
    }
    console.log(status);
  }
  return status;
  // If not pair, check next item on array until last item and return the status.

  // likeDislike = [1,1,3,4,5,6,];
  // for (review of like) {
  //   if (review.toLowerCase() === 'like' || review.toLowerCase() === 'dislike') {
  //     likeDislike.push(review);
  //   }
  // disLike & dislike = nothing (has to be in pairs for it to cancel out to 'nothing')
  // like like like like. = .
  // }
  // console.log(likeDislike);
}

const userReview = ['like', 'dislike', 'like', 'like', 'like'];
console.log(likeOrDislike(userReview));

// if status is nothing, keep nothing. If previous != as current change to current. If current and last item is same, change to nothing.
