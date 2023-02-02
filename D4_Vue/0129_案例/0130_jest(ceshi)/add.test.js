/**
 * 配置
    "scripts": {
        "test": "jest"
    }
    运行
    npm run test
 */
const add = require('./add')

test('是不是等于3', () => {
  expect(add(1, 2)).toBe(3);
});