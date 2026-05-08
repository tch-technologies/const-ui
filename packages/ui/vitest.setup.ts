import '@testing-library/jest-dom'

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock PointerEvent
if (typeof global.PointerEvent === 'undefined') {
  global.PointerEvent = class PointerEvent extends Event {
    pointerId: number
    constructor(type: string, params: any = {}) {
      super(type, params)
      this.pointerId = params.pointerId || 0
    }
  } as any
}

// Mock DOMRect
if (typeof global.DOMRect === 'undefined') {
  global.DOMRect = class DOMRect {
    bottom = 0
    left = 0
    right = 0
    top = 0
    constructor(public x = 0, public y = 0, public width = 0, public height = 0) {}
    static fromRect(other?: DOMRectInit) {
      return new DOMRect(other?.x, other?.y, other?.width, other?.height)
    }
    toJSON() {
      return JSON.stringify(this)
    }
  }
}

window.HTMLElement.prototype.scrollIntoView = function () {}
window.HTMLElement.prototype.hasPointerCapture = function () {
  return false
}
window.HTMLElement.prototype.releasePointerCapture = function () {}
