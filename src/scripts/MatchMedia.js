import pixToRem from './utils/pixToRem.js'

const MatchMedia = {
	mobile: window.matchMedia(`(width <= ${pixToRem(1024.98)}rem)`),
}

export default MatchMedia
