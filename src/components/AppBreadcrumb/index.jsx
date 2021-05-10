import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ArrowBack from "../../img/arrow-back.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      display: "flex",
    },
  },
  arrowContainer: {
    display: "inline",
    float: "left",
    marginRight: "10px",
    marginTop: "-1px",
  },
}));

/**
 *
 * @param {{product: Product}} param0
 */
function AppBreadcrumb({ product }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.arrowContainer}>
        <img src={ArrowBack} alt="arrow-back" onClick={history.goBack} className="pointer" />
      </div>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href={`/products?category=${product.category}`}>
          {product.category}
        </Link>
        <Link color="inherit" href={`/products?search=${product.subcategory}`}>
          {product.subcategory}
        </Link>
        <Typography color="textPrimary">{product.name}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default AppBreadcrumb;
