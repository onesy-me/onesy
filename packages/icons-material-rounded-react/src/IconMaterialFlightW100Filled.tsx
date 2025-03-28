import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightW100Filled'

      short_name='Flight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-164-91 27q-6 2-11-1.76-5-3.75-5-9.94 0-5.3 1.36-8.46 1.37-3.16 3.64-4.84l69-52v-237l-295 88q-8 2-14-2.44-6-4.44-6-12.51 0-6.05 1.5-9.55 1.5-3.5 5.5-5.5l308-184v-219q0-13.75 9.68-23.38 9.67-9.62 23.5-9.62 13.82 0 23.32 9.62 9.5 9.63 9.5 23.38v219l308 184q4 2 5.5 5.71 1.5 3.72 1.5 9.29 0 8.1-6 12.55-6 4.45-14 2.45l-295-88v237l69 52q2.27 1.69 3.64 4.86 1.36 3.16 1.36 8.23 0 5.91-5 9.91t-11 2l-91-27Z"/>
    </Icon>
  );
});

IconMaterialFlightW100Filled.displayName = 'OnesyIconMaterialFlightW100Filled';

export default IconMaterialFlightW100Filled;
