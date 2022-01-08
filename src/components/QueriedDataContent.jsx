import {
  Typography,
  Card,
  GridList,
  GridListTile,
  CardContent,
} from "@material-ui/core";

/**
 * This is the component for the queried data portion of our application.
 * It contains a grid of cards which each contain a different issue found in the repo specified.
 *
 * We use a map function to iterate and apply properties/methods to each element of the array.
 * Remember that queriedData is a json! We have an array of jsons within one larger json.
 * Each entry in the json response is a single issue.
 *
 * We iterate through the json array and for each component we create a GridListTile, Card, and CardContent while extracting the properties!
 */
export const QueriedDataContent = ({ queriedData }) => {
  return (
    // GridList is the parent component wrapping the components within.
    // We use map function to create the components for each entry.
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
                {/* This is a conditional ternary statement. It checks if the issue is a pull request and is open.
                If it is, we know that it is a pull request! */}
                {(mapDatum.pull_request && mapDatum.state !== "closed") ||
                (mapDatum.state === "open" && mapDatum.pull_request) ? (
                  <span>
                    <Typography>Pull Request</Typography>
                  </span>
                ) : // In the case it is not pull request, (first statement is false), we check if the state is closed.
                // If it is closed, we can mark it as a closed issue
                mapDatum.state === "closed" ? (
                  <span>
                    <Typography> Closed</Typography>
                  </span>
                ) : (
                  // else: it means it is neither a pull request or closed issue, so we can just call it an issue.
                  <span>
                    <Typography> Issue</Typography>
                  </span>
                )}

                {/*  ================================================================================================================================================ */}
                {/* TODO #14: Add the following properties into the card! (from the API response)
                    - number
                    - state
                    - title 
                */}
                {/* Note how we can simply access the properties within the json! */}
                <Typography variant="h6">

                  <br />

                </Typography>

                {/*  ================================================================================================================================================ */}
              </CardContent>
            </Card>
          </GridListTile>
        );
      })}
    </GridList>
  );
};
