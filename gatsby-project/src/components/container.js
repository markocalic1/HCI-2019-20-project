import { jsx } from "theme-ui"

const Container = props => (
  <div
    {...props}
    sx={{
      width: "100%",
      maxWidth: "container",
      margin: "0 auto",
      px: [3, 4, 4],
    }}
  />
)

export default Container