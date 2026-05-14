'use client'

import * as React from 'react'
import { previewRegistry, previewCodeRegistry } from '@/lib/preview-registry'
import { Copy, Check } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism-tomorrow.css'

interface ComponentPreviewProps {
  id: string
  code?: string
  title?: string
}

export function ComponentPreview({ id, code, title }: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false)
  const [tab, setTab] = React.useState<'preview' | 'code'>('preview')
  const codeRef = React.useRef<HTMLElement>(null)

  const Demo = previewRegistry[id]
  const displayCode = code || previewCodeRegistry[id] || ''

  React.useEffect(() => {
    if (tab === 'code' && codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [tab, displayCode])

  const handleCopy = () => {
    navigator.clipboard.writeText(displayCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="component-preview">
      {/* Tab bar */}
      <div className="component-preview-tabs">
        <button
          className={`component-preview-tab${tab === 'preview' ? ' active' : ''}`}
          onClick={() => setTab('preview')}
        >
          Preview
        </button>
        <button
          className={`component-preview-tab${tab === 'code' ? ' active' : ''}`}
          onClick={() => setTab('code')}
        >
          Code
        </button>
        <button className="component-preview-copy" onClick={handleCopy} aria-label="Copy code">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Preview pane */}
      {tab === 'preview' && (
        <div className="component-preview-pane">
          {Demo ? (
            <Demo />
          ) : (
            <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
              Preview not found: <code>{id}</code>
            </p>
          )}
        </div>
      )}

      {/* Code pane */}
      {tab === 'code' && (
        <div className="component-preview-code" style={{ position: 'relative' }}>
          <pre className="language-tsx">
            <code ref={codeRef} className="language-tsx">
              {displayCode}
            </code>
          </pre>
        </div>
      )}
    </div>
  )
}
