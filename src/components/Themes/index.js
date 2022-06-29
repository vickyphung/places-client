
import { extendTheme } from "@chakra-ui/react";


function ThemeExtension() {
    const theme = extendTheme({
      textStyles: {
        h1: {
          fontSize: ["48px", "72px"],
          fontWeight: "bold",
          lineHeight: "110%",
          letterSpacing: "-2%",
        },
        h2: {
          fontSize: ["36px", "48px"],
          fontWeight: "semibold",
          lineHeight: "110%",
          letterSpacing: "-1%",
        },
      },
    });
}
//   return <Box textStyle="h1">This is a box</Box>;
// }

export default ThemeExtension;
