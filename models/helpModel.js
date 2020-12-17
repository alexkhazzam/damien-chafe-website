exports.helpModel = class {
  constructor(searched) {
    this.searched = searched;
  }

  fetchRefs() {
    const refs = [
      'sign-up-for-a-lesson&sign-up',
      'what-a-lesson-entails&what',
      'rates/payment&rates-payment',
      'why-me&why',
      'contact&contact',
      'about&about',
    ];
    const matchedRefs = [];
    refs.forEach((ref) => {
      if (
        this.searched
          .toUpperCase()
          .trim()
          .includes(ref.toUpperCase().split('&')[0]) ||
        ref
          .toUpperCase()
          .split('&')[0]
          .includes(this.searched.toUpperCase().trim())
      ) {
        matchedRefs.push(ref);
      } else {
        return;
      }
    });
    return matchedRefs;
  }
};
