import 'styled-components';

import { Theme } from '@interfaces/theme/themesInterfaces';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
