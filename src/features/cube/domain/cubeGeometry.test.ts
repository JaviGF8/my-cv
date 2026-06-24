import { buildCubeTransformFromOrientation, buildFaceTransform } from './cubeGeometry';
import { IDENTITY, anglesForFace } from './orientation';

describe('buildCubeTransformFromOrientation', () => {
  it('IDENTITY contains translateZ and matrix3d', () => {
    const t = buildCubeTransformFromOrientation(IDENTITY, 100);
    expect(t).toContain('translateZ(-50px)');
    expect(t).toContain('matrix3d(');
  });

  it('IDENTITY produces identity matrix3d (1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)', () => {
    const t = buildCubeTransformFromOrientation(IDENTITY, 100);
    expect(t).toContain('matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)');
  });

  it('size 200 contains translateZ(-100px)', () => {
    const t = buildCubeTransformFromOrientation(IDENTITY, 200);
    expect(t).toContain('translateZ(-100px)');
  });

  it('right orientation produces non-identity matrix3d', () => {
    const t = buildCubeTransformFromOrientation(anglesForFace('right'), 100);
    expect(t).toContain('matrix3d(');
    expect(t).not.toContain('matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)');
  });
});

describe('buildFaceTransform', () => {
  it('front contains translateZ(50px)', () => {
    expect(buildFaceTransform('front', 100)).toContain('translateZ(50px)');
  });

  it('back contains translateZ(50px) and rotateX(180deg)', () => {
    const t = buildFaceTransform('back', 100);
    expect(t).toContain('translateZ(50px)');
    expect(t).toContain('rotateX(180deg)');
  });

  it('left contains rotateY(-90deg)', () => {
    expect(buildFaceTransform('left', 100)).toContain('rotateY(-90deg)');
  });

  it('right contains rotateY(90deg)', () => {
    expect(buildFaceTransform('right', 100)).toContain('rotateY(90deg)');
  });

  it('top contains rotateX(90deg)', () => {
    expect(buildFaceTransform('top', 100)).toContain('rotateX(90deg)');
  });

  it('bottom contains rotateX(-90deg)', () => {
    expect(buildFaceTransform('bottom', 100)).toContain('rotateX(-90deg)');
  });

  it('all 6 faces produce distinct transform strings', () => {
    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'] as const;
    const transforms = faces.map((f) => buildFaceTransform(f, 100));
    const unique = new Set(transforms);
    expect(unique.size).toBe(6);
  });
});
