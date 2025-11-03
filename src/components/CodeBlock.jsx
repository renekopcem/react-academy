import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Custom theme based on global.css colors
const customTheme = {
  ...vscDarkPlus,
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    color: '#e2e8f0',
    background: 'transparent',
    fontFamily: "'Monaco', 'Consolas', 'Courier New', monospace",
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: 'transparent',
    margin: 0,
    padding: 0,
  },
};

function CodeBlock({ children, language = 'jsx' }) {
  return (
    <div className="code-preview">
      <SyntaxHighlighter
        language={language}
        style={customTheme}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: 'transparent',
        }}
        codeTagProps={{
          style: {
            background: 'none',
            padding: 0,
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
