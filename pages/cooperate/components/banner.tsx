import { borderBottom, fontStyle } from "@mui/system";

const textCss = {
    color: "#ffffff",
    fontSize: "45pt",
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: "-0.5px",
    lineHeight: "1.26",
    paddingBottom: "18px",
};
const container = {
    height: "300px",
    backgroundColor: "#D9D0C2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const border = {
    borderBottomStyle: "solid",
    borderBottomWidth: "8px",
    borderColor: "rgba(206, 169, 100, 1)",
    borderBottomColor: "rgb(206, 169, 100)",
    width: "100px"
}

const Banner = () => {
    return (
        <div style={container}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={textCss}>
                    合作品牌案例
                </div>
                <div style={border} />
            </div>
        </div>
    )
}

export default Banner;