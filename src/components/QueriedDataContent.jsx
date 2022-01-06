import {
  Typography,
  Card,
  GridList,
  GridListTile,
  CardActionArea,
  CardContent,
} from "@material-ui/core";

export const QueriedDataContent = ({ queriedData }) => {
  return (
    <GridList cols={3} style={{ marginLeft: "10px", marginRight: "10px" }}>
      {queriedData.map((mapDatum, index) => {
        return (
          <GridListTile key={index}>
            <Card
              style={{
                height: "200px",
                overflowY: "scroll",
                background: "#ebf7ff",
              }}
            >
              <CardContent>
                {(mapDatum.pull_request && mapDatum.state !== "closed") ||
                (mapDatum.state === "open" && mapDatum.pull_request) ? (
                  <span>
                    <Typography>Pull Request</Typography>{" "}
                  </span>
                ) : mapDatum.state === "closed" ? (
                  <span>
                    <Typography> Closed</Typography>
                  </span>
                ) : (
                  <span>
                    {" "}
                    <Typography> Issue</Typography>
                  </span>
                )}
                <Typography variant="h6">
                  #{mapDatum.number} | State: {mapDatum.state}
                  <br />
                  {mapDatum.title}
                </Typography>
              </CardContent>
            </Card>
          </GridListTile>
        );
      })}
    </GridList>
  );
};
