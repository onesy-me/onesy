import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreen'

      short_name='FitScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><rect height="4" opacity=".3" width="8" x="8" y="10"/><path d="M6,16h12V8H6V16z M8,10h8v4H8V10z M4,15H2v3c0,1.1,0.9,2,2,2h3v-2H4V15z M4,6h3V4H4C2.9,4,2,4.9,2,6v3h2V6z M20,4h-3v2h3v3 h2V6C22,4.9,21.1,4,20,4z M20,18h-3v2h3c1.1,0,2-0.9,2-2v-3h-2V18z"/></g>
    </Icon>
  );
});

IconMaterialFitScreen.displayName = 'OnesyIconMaterialFitScreen';

export default IconMaterialFitScreen;
