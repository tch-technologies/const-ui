import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/cn'

const progressVariants = cva('', {
  variants: {
    variant: {
      bar: 'h-4 w-full overflow-hidden rounded-full bg-secondary',
      circle: 'relative flex items-center justify-center',
      box: 'flex w-full gap-1',
    },
  },
  defaultVariants: {
    variant: 'bar',
  },
})

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorClassName?: string
  circleSize?: number
  circleStrokeWidth?: number
  boxCount?: number
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value,
      variant = 'bar',
      indicatorClassName,
      circleSize = 64,
      circleStrokeWidth = 8,
      boxCount = 10,
      ...props
    },
    ref
  ) => {
    const progressValue = value || 0

    if (variant === 'circle') {
      const radius = (circleSize - circleStrokeWidth) / 2
      const circumference = radius * 2 * Math.PI
      const offset = circumference - (progressValue / 100) * circumference

      return (
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(progressVariants({ variant }), className)}
          {...props}
          style={{ width: circleSize, height: circleSize }}
        >
          <svg width={circleSize} height={circleSize} className="rotate-[-90deg]">
            <circle
              className="stroke-secondary"
              strokeWidth={circleStrokeWidth}
              fill="transparent"
              r={radius}
              cx={circleSize / 2}
              cy={circleSize / 2}
            />
            <circle
              className={cn('stroke-primary transition-all duration-500 ease-in-out', indicatorClassName)}
              strokeWidth={circleStrokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx={circleSize / 2}
              cy={circleSize / 2}
            />
          </svg>
        </ProgressPrimitive.Root>
      )
    }

    if (variant === 'box') {
      const filledBoxes = Math.round((progressValue / 100) * boxCount)

      return (
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(progressVariants({ variant }), className)}
          {...props}
        >
          {Array.from({ length: boxCount }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'h-4 flex-1 rounded-sm transition-all duration-300',
                i < filledBoxes ? 'bg-primary' : 'bg-secondary',
                indicatorClassName && i < filledBoxes ? indicatorClassName : ''
              )}
            />
          ))}
        </ProgressPrimitive.Root>
      )
    }

    // Default bar variant
    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressVariants({ variant }), className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            'h-full w-full flex-1 bg-primary transition-all',
            indicatorClassName
          )}
          style={{ transform: `translateX(-${100 - progressValue}%)` }}
        />
      </ProgressPrimitive.Root>
    )
  }
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress, progressVariants }
