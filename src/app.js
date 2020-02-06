import './style.scss'

const centerContent = document.getElementById('center-content')
  const centerFold = document.getElementById('center-fold')

  let overflowHeight =  centerContent.offsetHeight - centerFold.offsetHeight

  document.body.style.height = overflowHeight + window.innerHeight + "px";
  let foldsContent = Array.from(document.getElementsByClassName('fold-content'))
  let tick = () => {
  let scroll = -(
      document.documentElement.scrollTop || document.body.scrollTop
  );
  foldsContent.forEach((content) => {
      content.style.transform = `translateY(${scroll}px)`;
  })
  requestAnimationFrame(tick);
}
tick();
