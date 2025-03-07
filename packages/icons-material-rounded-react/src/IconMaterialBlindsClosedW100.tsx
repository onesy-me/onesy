import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlindsClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindsClosedW100'

      short_name='BlindsClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-200v-528q0-24.75 17.63-42.38Q247.25-788 272-788h416q24.75 0 42.38 17.62Q748-752.75 748-728v528h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H625q0 16-11.18 27t-27 11Q571-134 560-145.13T549-172H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66Zm28-441h333v-119H272q-14 0-23 9t-9 23v87Zm361 0h119v-87q0-14-9-23t-23-9h-87v119ZM240-494h333v-119H240v119Zm361 0h119v-119H601v119ZM240-347h333v-119H240v119Zm361 0h119v-119H601v119ZM240-200h333v-119H240v119Zm361 0h119v-119H601v119Z"/>
    </Icon>
  );
});

IconMaterialBlindsClosedW100.displayName = 'OnesyIconMaterialBlindsClosedW100';

export default IconMaterialBlindsClosedW100;
