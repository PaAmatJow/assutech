export const introAnim = {
  show: {
    y: '-100vh',
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 1.5,
    },
    
  }
}

export const titleAnim = {
  hidden: {
    y: '50px'
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

export const navAnim = {
  hidden: {
    opacity: 0,
    scale: 1.3,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 2,
    },
  }

};

export const heroTitleAnim = {
	hidden: { y: 200 },
	show: {
		y: 0,
		transition: { duration: 1, 
    ease: 'easeOut',
    delay: 2.2, },
	},
};

export const fade = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { ease: 'easeOut',
    duration: 1,
    delay: 2.2,
  },
	},
};

export const photoAnim = {
	hidden: {
		scale: 1.3,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			ease: 'easeOut',
			duration: 0.75,
      delay: 2.2,
		},
	},
};

export const scrollAnim = {
  hidden: {
    y: '50px',
    opacity:0,
  },
  show: {
    y: 0,
    opacity:1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
}
}