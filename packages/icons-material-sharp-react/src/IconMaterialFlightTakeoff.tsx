import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightTakeoff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoff'

      short_name='FlightTakeoff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm74-200L80-514l62-12 70 62 192-52-162-274 78-24 274 246 200-54q32-9 58 12t26 56q0 22-13.5 39T830-492L194-320Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoff.displayName = 'OnesyIconMaterialFlightTakeoff';

export default IconMaterialFlightTakeoff;
