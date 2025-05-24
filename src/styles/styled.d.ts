import "styled-components";
import { Light } from "./Themes";

type ThemeType = typeof Light;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
