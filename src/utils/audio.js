const AudioCustom = (() => {
  let _instance = null;

  return {
    getInstance: () => {
      if (!_instance) {
        // eslint-disable-next-line no-undef
        _instance = new Audio();
      }
      return _instance;
    }
  };
})();

const ap = AudioCustom.getInstance();

export default {
  play(audioUrl) {
    ap.src = audioUrl;
    ap.play();
  },
  pause() {
    ap.pause();
  }
};
