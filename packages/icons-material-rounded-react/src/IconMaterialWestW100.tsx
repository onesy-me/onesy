import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestW100'

      short_name='West'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-467h630q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H184l203-203q3.67-3.75 3.83-9.38.17-5.62-3.83-9.79-3.67-3.83-9.33-3.83-5.67 0-9.67 4L153-502q-5 5-7 10.13-2 5.14-2 11 0 5.87 2.05 11.47 2.04 5.6 6.95 10.4l215 215q3.75 4 9.38 4 5.62 0 9.62-4 5-4 4.5-10t-4.5-10L185-467Z"/>
    </Icon>
  );
});

IconMaterialWestW100.displayName = 'OnesyIconMaterialWestW100';

export default IconMaterialWestW100;
