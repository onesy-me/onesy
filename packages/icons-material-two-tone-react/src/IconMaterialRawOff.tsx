import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRawOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOff'

      short_name='RawOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="17.15,14.32 17.74,11.96 18.5,15 19.98,15 21.48,9 19.98,9 19.24,12 18.5,9 16.98,9 16.24,12 15.5,9 14,9 14.72,11.9"/><path d="M1.39,4.22L6.17,9H3v6h1.5v-2h1.1l0.9,2H8l-0.9-2.1C7.6,12.6,8,12.1,8,11.5v-0.67l1.43,1.43L8.75,15h1.5l0.38-1.5h0.04 l9.11,9.11l1.41-1.41L2.81,2.81L1.39,4.22z M6.5,11.5h-2v-1h2V11.5z"/></g></g>
    </Icon>
  );
});

IconMaterialRawOff.displayName = 'OnesyIconMaterialRawOff';

export default IconMaterialRawOff;
