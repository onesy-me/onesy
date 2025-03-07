import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposureNeg2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg2'

      short_name='ExposureNeg2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.98 10.1c-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95l2.86-3.07c.38-.39.72-.79 1.04-1.18s.59-.78.82-1.17c.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46s-.44-.81-.78-1.11c-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15s.43.25.59.43c.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7zM2 11h8v2H2z"/>
    </Icon>
  );
});

IconMaterialExposureNeg2.displayName = 'OnesyIconMaterialExposureNeg2';

export default IconMaterialExposureNeg2;
