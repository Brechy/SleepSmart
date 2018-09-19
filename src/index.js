//stop button
stopButton = document.querySelector('#stop')
stopButton.addEventListener('click', () => {
  setStatus('STOP');
  console.log(`Status = STOP AUDIO (")(=^.^=)(") !`)
})

//play button
//store status of playing in flask
playButton = document.querySelector('#play')
playButton.addEventListener('click', () => {
  setStatus('PLAY');
  console.log(`Status = PLAY AUDIO (")(=^.^=)(") !`)
})

function setStatus(status) {
  axios.post('http://34.217.46.191:5000/status', {
    status: status
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
