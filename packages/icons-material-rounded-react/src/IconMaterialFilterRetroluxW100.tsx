import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterRetroluxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterRetroluxW100'

      short_name='FilterRetrolux'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m572-190-78-78q2 42-28 73t-72 31q-42.14 0-71.07-28.9-28.93-28.9-28.93-71t28.93-71.1q28.93-29 71.07-29 20 0 37.5 7t32.5 21L306-574q-6-9-5.5-19t8.45-18l150.28-151.2q4.77-4.8 9.9-6.8 5.14-2 11-2 5.87 0 10.87 2 5 2 9.77 6.8L651.05-611q7.95 8 8.45 18 .5 10-5.5 19L496-336v30l96 96q4 4 4.5 9.5t-4.28 10.5q-5.22 5-10.22 5-5 0-10-5Zm-178-2q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm86-170 152-230-152-152-152 152 152 230Zm0-191Z"/>
    </Icon>
  );
});

IconMaterialFilterRetroluxW100.displayName = 'OnesyIconMaterialFilterRetroluxW100';

export default IconMaterialFilterRetroluxW100;
