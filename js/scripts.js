window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: 'output.jpg',
    is_stereo: false,
    width: "100%",
    height: "100%"

  });
}


