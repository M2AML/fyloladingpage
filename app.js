const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
const Intersect = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("animation-active")
      observer.unobserve(entry.target)
    }
  });
}
const observer = new IntersectionObserver(Intersect, options);
document.querySelectorAll('[class*="animation-"]').forEach(function (r) {
  observer.observe(r)
})
