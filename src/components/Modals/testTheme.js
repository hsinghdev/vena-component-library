export default {
  typography: {
    htmlFontSize: 10,
    fontFamily:
      '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    useNextVariants: true,
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "12px",
        wordBreak: "break-word",
      },
    },
    MuiIconButton: {
      root: {
        fontSize: "14px",
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: "#0085FF",
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: "14px",
        paddingTop: "6px",
        paddingBottom: "6px",
      },
    },
    MuiListItemIcon: {
      root: {
        fontSize: "16px",
      },
    },
    MuiDialog: {
      paperWidthSm: {
        minWidth: "400px",
        minHeight: "200px",
        borderRadius: "0px",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.42)",
      },
    },
    MuiDialogTitle: {
      root: {
        fontSize: "24px",
        fontWeight: "300",
        /* Since we need to disable typography in the DialogTitle component
      in order to override font properties, we need to set fontFamily here too */
        fontFamily:
          '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      },
    },
    MuiDialogActions: {
      root: {
        margin: "24px",
      },
    },
    MuiPaper: {
      root: {
        fontFamily:
          '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      },
    },
  },
};
