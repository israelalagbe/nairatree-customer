import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

function AppPagination() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
}

export default AppPagination;