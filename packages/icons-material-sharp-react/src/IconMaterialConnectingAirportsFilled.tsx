import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConnectingAirportsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectingAirportsFilled'

      short_name='ConnectingAirports'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M624-104 520-280H400q-17 0-28.5-11.5T360-320q0-17 11.5-28.5T400-360h120l104-176h44l-52 176h114l30-40h40l-24 80 24 80h-40l-30-40H616l52 176h-44ZM292-424l52-176H230l-30 40h-40l24-80-24-80h40l30 40h114l-52-176h44l104 176h120q17 0 28.5 11.5T600-640q0 17-11.5 28.5T560-600H440L336-424h-44Z"/>
    </Icon>
  );
});

IconMaterialConnectingAirportsFilled.displayName = 'OnesyIconMaterialConnectingAirportsFilled';

export default IconMaterialConnectingAirportsFilled;
