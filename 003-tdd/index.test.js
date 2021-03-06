const states = require('./index');

let statesAbbrList;

beforeEach(() => {
  statesAbbrList = states.getStatesAbbrList();
});

describe('getStatesAbbrList', () => {
  it('should return list of abbreviations', () => {
    expect(statesAbbrList.length).toBe(51);
    expect(statesAbbrList).toContain('CA');
  });
});

describe('getStatesTypeAhead', () => {
  it('should return empty array when no input', () => {
    const result = states.getStatesTypeAhead();
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([]);
  });
  it('should return array of states that starts with symbols', () => {
    const typeAheadInput = 'Al';
    const typeAheadResult = ['Alabama', 'Alaska'];
    const result = states.getStatesTypeAhead(typeAheadInput);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(typeAheadResult);
  });
  it('should return array of states that starts with symbols limitted to 3 matches', () => {
    const typeAheadInput = 'New';
    const typeAheadResult = ['New Hampshire', 'New Jersey', 'New Mexico'];
    const result = states.getStatesTypeAhead(typeAheadInput);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(typeAheadResult);
  });
});
