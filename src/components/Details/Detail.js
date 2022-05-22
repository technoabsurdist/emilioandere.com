import * as React from 'react'

const Container = React.forwardRef(
  (props, ref) => {
    return (
      <div
        ref={ref}
        id="main"
        className="relative flex max-h-screen w-full flex-col overflow-y-auto"
        {...props}
      />
    )
  }
)
Container.displayName = "Container";

function ContentContainer(props) {
  return (
    <div
      className="mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8"
      {...props}
    />
  )
}

export const Detail = {
    Container,
    ContentContainer,
}
