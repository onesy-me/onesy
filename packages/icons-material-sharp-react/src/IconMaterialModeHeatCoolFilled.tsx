import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatCoolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatCoolFilled'

      short_name='ModeHeatCool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M217-318q-45-33-71-82.5T120-510q0-79 37.5-140.5T240-754q45-42 82.5-64l37.5-22v99q0 25 18 42.5t43 17.5q14 0 26-6t20-17l13-16q38 21 65 53.5t41 72.5L483-491l-4.5-4.5-4.5-4.5-114-112-112 112q-22 22-35 50.5T200-389q0 20 4.5 37.5T217-318Zm98-5q-16-11-25.5-28.5T280-389q0-17 6.5-30t17.5-24l56-56 57 55q3 2 5 5t4 5L315-323ZM296-80l-56-56 544-544 56 56-144 144h144v80H616l-20 20 60 60h184v80H736l84 84-56 56-84-84v104h-80v-184l-60-60-20 20v224h-80v-144L296-80Z"/>
    </Icon>
  );
});

IconMaterialModeHeatCoolFilled.displayName = 'OnesyIconMaterialModeHeatCoolFilled';

export default IconMaterialModeHeatCoolFilled;
