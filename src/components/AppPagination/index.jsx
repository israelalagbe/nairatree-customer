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

function AppPagination({ limit, total, page, onPageChange }) {
  const classes = useStyles();

  const totalPages = Math.ceil(total/limit);

  return (
    <div className={classes.root}>
      <Pagination page={page}  count={totalPages} onChange={(e, page) =>onPageChange(page)} variant="outlined" shape="rounded" />
    </div>
  );
}

export default AppPagination;
