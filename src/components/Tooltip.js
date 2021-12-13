import MaterialTooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { withStyles } from "@material-ui/core/styles";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "#212121",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    textAlign: "center",
    maxWidth: "258px",
  },

  arrow: {
    color: theme.palette.common.white,
  },
}))(MaterialTooltip);

export const TooltipDiv = () => {
  return (
    <LightTooltip
      arrow
      title={
        <div>
          <p>
            This widget links directly to your public profile so that you can
            easily share your impact with your customers. Turn it off here if
            you do not want the badge to link to it.
          </p>
          <a href="google.com">View Public Profile</a>
          <p></p>
        </div>
      }
      aria-label="more info"
      enterDelay={250}
      leaveDelay={250}
      interactive
      PopperProps={{
        modifiers: {
          offset: {
            enabled: true,
            offset: "0px, -10px",
          },
        },
      }}
    >
      <InfoOutlinedIcon className="info-icon" />
    </LightTooltip>
  );
};
