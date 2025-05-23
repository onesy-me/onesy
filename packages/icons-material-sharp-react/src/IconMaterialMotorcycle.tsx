import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotorcycle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Motorcycle'

      short_name='Motorcycle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M428-520h-70 150-80ZM200-200q-83 0-141.5-58.5T0-400q0-83 58.5-141.5T200-600h464l-80-80H440v-80h176l162 162q78 6 130 63t52 135q0 83-58.5 141.5T760-200q-83 0-141.5-58.5T560-400q0-18 2.5-35.5T572-470L462-360h-66q-14 70-69 115t-127 45Zm560-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-560 0q38 0 68.5-22t43.5-58H200v-80h112q-13-36-43.5-58T200-520q-50 0-85 35t-35 85q0 50 35 85t85 35Zm198-160h30l80-80H358q15 17 25 37t15 43Z"/>
    </Icon>
  );
});

IconMaterialMotorcycle.displayName = 'OnesyIconMaterialMotorcycle';

export default IconMaterialMotorcycle;
