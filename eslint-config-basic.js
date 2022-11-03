module.exports = {
  'plugins': ['prefer-arrow'],
  'overrides': [
    {
      'files': ['*.ts'],
      'extends': [
        'plugin:@angular-eslint/ng-cli-compat',
        'plugin:@angular-eslint/ng-cli-compat--formatting-add-on',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
      'rules': {
        // Possible Errors
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': [
          'error',
          'all',
          { 'nestedBinaryExpressions': false, 'returnAssign': false }
        ],
        'no-template-curly-in-string': 'error',
        'no-unsafe-optional-chaining': 'error',
        'require-atomic-updates': 'error',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            'allowTernary': true,
            'allowShortCircuit': true
          }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-duplicate-imports': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': ['error'],
        'deprecation/deprecation': 'warn',
        'no-restricted-imports': [
          'error',
          {
            'paths': [
              {
                'name': 'rxjs/Rx',
                'message': 'Never import the whole Rx library.'
              }
            ]
          }
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        // Best Practice
        '@typescript-eslint/no-explicit-any': ['error', { 'ignoreRestArgs': true }],
        'complexity': ['error', { 'max': 5 }],
        'consistent-return': ['error', { 'treatUndefinedAsUnspecified': true }],
        'eqeqeq': 'error',
        'no-caller': 'error',
        'no-else-return': 'error',
        'no-implicit-coercion': 'error',
        'no-iterator': 'error',
        'no-loop-func': 'error',
        'no-new-func': 'error',
        'no-return-assign': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'yoda': ['error', 'never', { 'exceptRange': true }],
        'curly': 'error',

        // Stylistic Issues
        '@angular-eslint/component-selector': [
          'error',
          {
            'type': 'element',
            'prefix': 'app',
            'style': 'kebab-case'
          }
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            'type': 'attribute',
            'prefix': 'app',
            'style': 'kebab-case'
          }
        ],
        'brace-style': 'error',
        'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        'max-len': ['error',
          {
            'code': 120,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true
          }
        ],
        'object-curly-spacing': [
          'error', 'always', { 'arraysInObjects': true }
        ],
        'eol-last': ['error', 'always'],
        'keyword-spacing': ['error', { 'before': true }],
        'semi-spacing': 'error',
        'semi': 'off',
        '@typescript-eslint/semi': ['error'],
        'space-before-function-paren': ['error',
          {
            'anonymous': 'never',
            'asyncArrow': 'always',
            'named': 'never'
          }
        ],
        'arrow-body-style': 0,
        'prefer-arrow/prefer-arrow-functions': [
          'error',
          {
            'disallowPrototype': true,
            'singleReturnOnly': false,
            'classPropertiesAllowed': false,
            'allowStandaloneDeclarations': true
          }
        ],
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/naming-convention': [
          'error',
          {
            'selector': 'classProperty',
            'modifiers': ['private'],
            'format': ['camelCase'],
            'leadingUnderscore': 'allowSingleOrDouble'
          }
        ],
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            'default': [
              'static-field',
              'instance-field',
              'static-method',
              'instance-method'
            ]
          }
        ],
      }
    },
    {
      'files': ['*.spec.ts', '*.e2e-spec.ts'],
      'rules': {
        'no-restricted-globals': [
          'error',
          {
            'name': 'fdescribe',
            'message': 'Do not commit with fdescribe. Use describe instead.'
          },
          {
            'name': 'fit',
            'message': 'Do not commit with fit. Use it instead.'
          }
        ]
      }
    },
    {
      'files': ['*.html'],
      'extends': [
        'plugin:@angular-eslint/template/recommended'
      ],
      'rules': {}
    },
    {
      'files': ['*.js'],
      'extends': [
        'eslint:recommended'
      ],
      'parserOptions': {
        'ecmaVersion': 9
      },
      'env': {
        'node': true,
        'es6': true
      },
      'rules': {
        // Possible Errors
        'no-extra-parens': ['error', 'all', { 'nestedBinaryExpressions': false }],
        'no-template-curly-in-string': 'error',
        'no-unsafe-optional-chaining': 'error',
        'require-atomic-updates': 'error',

        // Best Practice
        'complexity': ['error', { 'max': 3 }],
        'consistent-return': ['error', { 'treatUndefinedAsUnspecified': true }],
        'eqeqeq': 'error',
        'no-caller': 'error',
        'no-else-return': 'error',
        'no-implicit-coercion': 'error',
        'no-iterator': 'error',
        'no-loop-func': 'error',
        'no-new-func': 'error',
        'no-return-assign': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'yoda': ['error', 'never', { 'exceptRange': true }],
        'no-shadow': 'error',
        'curly': 'error',

        // Stylistic Issues
        'brace-style': 'error',
        'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        'max-len': ['error',
          {
            'code': 120,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true
          }
        ],
        'object-curly-spacing': [
          'error', 'always', { 'arraysInObjects': true }
        ],
        'eol-last': ['error', 'always'],
        'keyword-spacing': ['error', { 'before': true }],
        'semi-spacing': 'error',
        'semi': 'error',
        'space-before-function-paren': ['error',
          {
            'anonymous': 'never',
            'asyncArrow': 'always',
            'named': 'never'
          }
        ],
        'arrow-body-style': 0,
        'prefer-arrow/prefer-arrow-functions': [
          'error',
          {
            'disallowPrototype': true,
            'singleReturnOnly': false,
            'classPropertiesAllowed': false,
            'allowStandaloneDeclarations': true
          }
        ]
      }
    }
  ]
};
