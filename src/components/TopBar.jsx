import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";

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
