import {rawJson} from './customSerializerPlugin';

const data = {
  aaa: 111,
  array: [1, 2, 3]
}

describe('test', () => {
  it('snapshot normal', () => {
    expect(data).toMatchSnapshot();
  })
  it('snapshot rawJson', () => {
    expect(rawJson(data)).toMatchSnapshot();
  })
})
