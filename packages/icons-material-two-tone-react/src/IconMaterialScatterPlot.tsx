import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScatterPlot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScatterPlot'

      short_name='ScatterPlot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><circle cx="11" cy="6" opacity=".3" r="2"/><circle cx="16.6" cy="17.6" opacity=".3" r="2"/><circle cx="7" cy="14" opacity=".3" r="2"/><path d="M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8-10c0-2.21-1.79-4-4-4S7 3.79 7 6s1.79 4 4 4 4-1.79 4-4zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.6 5.6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </Icon>
  );
});

IconMaterialScatterPlot.displayName = 'OnesyIconMaterialScatterPlot';

export default IconMaterialScatterPlot;
