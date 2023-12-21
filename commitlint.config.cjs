// module.exports = { extends: ['@commitlint/config-conventional'] }

// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'], // extends can be nested
  parserPreset: 'conventional-changelog-conventionalcommits',
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit'
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  新功能', emoji: '✨ ' },
      { value: 'fix', name: 'fix:      🐛  bug修复', emoji: '🐛 ' },
      { value: 'docs', name: 'docs:     📝  文档修改', emoji: '📝 ' },
      {
        value: 'style',
        name: 'style:    💄  不影响代码含义的更改',
        emoji: '💄 '
      },
      {
        value: 'refactor',
        name: 'refactor: 📦️   既不修复错误也不添加功能的代码更改',
        emoji: '📦️ '
      },
      {
        value: 'perf',
        name: 'perf:     🚀  提高性能的代码更改',
        emoji: '🚀 '
      },
      {
        value: 'test',
        name: 'test:     🚨  添加缺失的测试或更正现有测试',
        emoji: '🚨 '
      },
      {
        value: 'build',
        name: 'build:    🛠   影响生成系统或外部依赖项的更改',
        emoji: '🛠 '
      },
      {
        value: 'ci',
        name: 'ci:       🎡  更改CI配置文件和脚本',
        emoji: '🎡 '
      },
      {
        value: 'chore',
        name: 'chore:    🔨  其他不修改src或测试文件的更改',
        emoji: '🔨 '
      },
      { value: 'revert', name: 'revert:   ⏪️  恢复以前的提交', emoji: ':rewind:' }
    ],
    useEmoji: true,
    confirmColorize: true,
    emojiAlign: 'center',
    questions: {
      scope: {
        description: '此更改的范围是什么（例如组件或文件名）'
      },
      subject: {
        description: '写一个简短的命令式时态描述变化'
      },
      body: {
        description: '提供更改的详细说明'
      },
      isBreaking: {
        description: '有什么突破性的变化吗？'
      },
      breakingBody: {
        description: '重大变更提交需要一个主体。请输入提交本身的较长描述'
      },
      breaking: {
        description: '描述重大变更'
      },
      isIssueAffected: {
        description: '此更改是否会影响任何悬而未决的问题？'
      },
      issuesBody: {
        description: '如果问题已关闭，则提交需要正文。请输入对提交本身的较长描述'
      },
      issues: {
        description: '添加问题引用（如 "fix #123"、"re #123"）。'
      }
    }
  }
}
