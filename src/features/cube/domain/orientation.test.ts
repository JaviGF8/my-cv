import {
  IDENTITY,
  anglesForFace,
  getFrontFace,
  rotateViewer,
  straightenCurrentFace,
} from './orientation';

describe('getFrontFace', () => {
  it('returns front for IDENTITY', () => {
    expect(getFrontFace(IDENTITY)).toBe('front');
  });

  it('returns back for anglesForFace(back)', () => {
    expect(getFrontFace(anglesForFace('back'))).toBe('back');
  });

  it('returns left for anglesForFace(left)', () => {
    expect(getFrontFace(anglesForFace('left'))).toBe('left');
  });

  it('returns right for anglesForFace(right)', () => {
    expect(getFrontFace(anglesForFace('right'))).toBe('right');
  });

  it('returns bottom for anglesForFace(top)', () => {
    expect(getFrontFace(anglesForFace('top'))).toBe('bottom');
  });

  it('returns top for anglesForFace(bottom)', () => {
    expect(getFrontFace(anglesForFace('bottom'))).toBe('top');
  });
});

describe('rotateViewer from front', () => {
  it('rotating left from front returns left', () => {
    expect(getFrontFace(rotateViewer(IDENTITY, 'left'))).toBe('left');
  });

  it('rotating right from front returns right', () => {
    expect(getFrontFace(rotateViewer(IDENTITY, 'right'))).toBe('right');
  });

  it('rotating up from front returns top', () => {
    expect(getFrontFace(rotateViewer(IDENTITY, 'up'))).toBe('top');
  });

  it('rotating down from front returns bottom', () => {
    expect(getFrontFace(rotateViewer(IDENTITY, 'down'))).toBe('bottom');
  });
});

describe('rotateViewer from top/bottom does not spin in place', () => {
  it('rotating left from top does not return top', () => {
    expect(getFrontFace(rotateViewer(anglesForFace('top'), 'left'))).not.toBe('top');
  });

  it('rotating right from top does not return top', () => {
    expect(getFrontFace(rotateViewer(anglesForFace('top'), 'right'))).not.toBe('top');
  });

  it('rotating left from bottom does not return bottom', () => {
    expect(getFrontFace(rotateViewer(anglesForFace('bottom'), 'left'))).not.toBe('bottom');
  });

  it('rotating right from bottom does not return bottom', () => {
    expect(getFrontFace(rotateViewer(anglesForFace('bottom'), 'right'))).not.toBe('bottom');
  });
});

describe('rotateViewer reversal', () => {
  it('from left, rotating right returns front', () => {
    expect(getFrontFace(rotateViewer(anglesForFace('left'), 'right'))).toBe('front');
  });

  it('from right, rotating left returns front', () => {
    expect(getFrontFace(rotateViewer(anglesForFace('right'), 'left'))).toBe('front');
  });

  it('from back, rotating left returns right', () => {
    expect(getFrontFace(rotateViewer(anglesForFace('back'), 'left'))).toBe('right');
  });
});

describe('360° closure', () => {
  it('rotating left 4 times returns to same face', () => {
    const start = anglesForFace('front');
    const r = rotateViewer(
      rotateViewer(rotateViewer(rotateViewer(start, 'left'), 'left'), 'left'),
      'left',
    );
    expect(getFrontFace(r)).toBe(getFrontFace(start));
  });

  it('rotating up 4 times returns to same face', () => {
    const start = anglesForFace('right');
    const r = rotateViewer(rotateViewer(rotateViewer(rotateViewer(start, 'up'), 'up'), 'up'), 'up');
    expect(getFrontFace(r)).toBe(getFrontFace(start));
  });
});

describe('straightenCurrentFace', () => {
  it('IDENTITY already front — straighten returns front canonical orientation', () => {
    const result = straightenCurrentFace(IDENTITY);
    expect(getFrontFace(result)).toBe('front');
    expect(result).toEqual(anglesForFace('front'));
  });

  it('left orientation — straighten returns left canonical orientation', () => {
    const result = straightenCurrentFace(anglesForFace('left'));
    expect(getFrontFace(result)).toBe('left');
    expect(result).toEqual(anglesForFace('left'));
  });

  it('after a path that keeps front facing but adds in-plane rotation, straighten returns canonical front', () => {
    const rotatedFront = rotateViewer(rotateViewer(IDENTITY, 'left'), 'right');
    expect(getFrontFace(rotatedFront)).toBe('front');
    const straightened = straightenCurrentFace(rotatedFront);
    expect(getFrontFace(straightened)).toBe('front');
    expect(straightened).toEqual(anglesForFace('front'));
  });

  it('straightenCurrentFace returns anglesForFace of the current front face', () => {
    const topOrientation = anglesForFace('top');
    const frontFaceOfTop = getFrontFace(topOrientation);
    const result = straightenCurrentFace(topOrientation);
    expect(result).toEqual(anglesForFace(frontFaceOfTop));
  });
});
