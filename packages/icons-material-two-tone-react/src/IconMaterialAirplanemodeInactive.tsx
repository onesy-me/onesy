import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplanemodeInactive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeInactive'

      short_name='AirplanemodeInactive'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M10.5,7.67V3.5C10.5,2.67,11.17,2,12,2c0.83,0,1.5,0.67,1.5,1.5V9l8.5,5v2l-4.49-1.32L10.5,7.67z M19.78,22.61l1.41-1.41 L13.5,13.5L9.56,9.56L2.81,2.81L1.39,4.22l6.38,6.38L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19v-2.67L19.78,22.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g>
    </Icon>
  );
});

IconMaterialAirplanemodeInactive.displayName = 'OnesyIconMaterialAirplanemodeInactive';

export default IconMaterialAirplanemodeInactive;
