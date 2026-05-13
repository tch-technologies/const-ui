'use client'

import * as React from 'react'
import ControlledZoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { cn } from '../../utils/cn'

export interface ImageZoomProps extends React.ComponentProps<typeof ControlledZoom> {
  className?: string
}

const ImageZoom = React.forwardRef<
  React.ElementRef<typeof ControlledZoom>,
  ImageZoomProps
>(({ className, children, ...props }, ref) => {
  // Default to slightly themed background color override for better system integration
  const customStyles = {
    overlay: 'rgba(var(--background) / 0.95)',
  }

  return (
    <div className={cn('inline-block relative overflow-hidden group', className)}>
      <ControlledZoom
        zoomMargin={40}
        {...props}
      >
        {children}
      </ControlledZoom>
    </div>
  )
})

ImageZoom.displayName = 'ImageZoom'

export { ImageZoom }
