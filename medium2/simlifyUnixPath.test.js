import simplifiedPath from "./simplifiedPath";

describe('simplifiedPath:', () => {
  it('should simplify unix path', () => {
    expect(simplifiedPath('/home/')).toBe('/home');
    expect(simplifiedPath('/a/./b/../../c/')).toBe('/c');
    expect(simplifiedPath('/../')).toBe('/');
    expect(simplifiedPath('/home//foo/')).toBe('/home/foo');
  });
});
