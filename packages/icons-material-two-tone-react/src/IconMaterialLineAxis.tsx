import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineAxis = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineAxis'

      short_name='LineAxis'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon points="22,7.43 20.59,6.02 16.56,10.55 9.5,4 2,11.51 3.5,13.01 9.64,6.86 15.23,12.04 13.5,13.99 9.5,9.99 2,17.5 3.5,19 9.5,12.99 13.5,16.99 16.69,13.4 20.59,17.01 22,15.6 18.02,11.9"/></g>
    </Icon>
  );
});

IconMaterialLineAxis.displayName = 'OnesyIconMaterialLineAxis';

export default IconMaterialLineAxis;
