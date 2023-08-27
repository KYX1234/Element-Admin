module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'perf', // 性能优化
        'style', // 修改代码格式，不影响代码逻辑
        'docs', // 修改文档
        'test', // 修改测试用例
        'refactor', // 代码重构
        'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        'ci', // 持续集成
        'chore', // 其它提交
        'revert', // 代码回滚
        'types', // ts
        'wip' // 功能开发中
      ]
    ]
  }
}
