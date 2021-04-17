import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ArrowBack from "../../img/arrow-back.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      display: "flex",
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

/**
 * 
 * @param {{product: Product}} param0 
 */
function AppBreadcrumb({product}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img src={ArrowBack} alt="arrow-back" />
      </div>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          {product.category}
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          {product.subcategory}
        </Link>
        <Typography color="textPrimary">{product.name}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default AppBreadcrumb;
