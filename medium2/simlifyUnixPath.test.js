import simplifyUnixPath from "./simplifyUnixPath";

describe.skip('simplifyUnixPath:', () => {
  it('should simplify unix path', () => {
    expect(simplifyUnixPath('/home/')).toBe('/home');
    expect(simplifyUnixPath('/a/./b/../../c/')).toBe('/c');
    expect(simplifyUnixPath('/../')).toBe('/');
    expect(simplifyUnixPath('/home//foo/')).toBe('/home/foo');
  });
});
