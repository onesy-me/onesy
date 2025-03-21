import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUlnaRadiusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UlnaRadiusW100Filled'

      short_name='UlnaRadius'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M685-134q-14 0-27-5t-22-14q-12-12-21-16.5t-21-4.5h-89q-20 0-34-14.5T457-223q0-11 5.5-21t15.5-18l39-33q9-8 14.5-18t5.5-22v-221q0-8-2-15.5t-7-14.5l-62-89q-5-6-7-12.5t-2-14.5q0-20 14-34t34-14h200q20 0 34 13.5t14 33.5q0 7-2.5 14t-6.5 14l-62 89q-5 6-7 14t-2 16v223q0 11 4 20t12 17l38 39q12 11 19 25.5t7 29.5q0 29-19.5 48.5T685-134Zm-320-47q-5 3-11 4.5t-12 1.5q-23 0-39-16t-16-38v-355q0-11-2-21t-7-19l-66-138q-2-5-3.5-10t-1.5-10q0-20 14-34t34-14h128v68q0 5 3.5 8.5t8.5 3.5h40q20 0 34 14t14 34q0 8-2 15t-7 14l-33 42q-9 12-13.5 26t-4.5 29v174q0 7 1 13.5t3 13.5q2 7 4.5 13t6.5 12l36 55q4 6 6.5 12.5T483-268q0 14-7.5 25T456-226l-91 45Z"/>
    </Icon>
  );
});

IconMaterialUlnaRadiusW100Filled.displayName = 'OnesyIconMaterialUlnaRadiusW100Filled';

export default IconMaterialUlnaRadiusW100Filled;
