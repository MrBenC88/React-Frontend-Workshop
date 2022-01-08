import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";

/**
 * A simple TopBar component which represents the bar at top of page.
 * It contains a simple title of application and new search button which when clicked will href user to homepage "/"
 */
export const TopBar = () => {
  return (
    <AppBar position="static" style={{ background: "#ffffff" }}>
      <Toolbar>
        <Typography variant="h6" style={{ color: "#000000" }}>
          GitHub Issue Explorer |
        </Typography>
        <Button color="#000000" href="/">
          New Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};
