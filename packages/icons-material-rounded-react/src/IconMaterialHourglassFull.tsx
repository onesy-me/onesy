import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassFull'

      short_name='HourglassFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.425 0-.713-.288Q4 21.425 4 21t.287-.712Q4.575 20 5 20h1v-3q0-1.525.713-2.863Q7.425 12.8 8.7 12q-1.275-.8-1.987-2.138Q6 8.525 6 7V4H5q-.425 0-.713-.288Q4 3.425 4 3t.287-.713Q4.575 2 5 2h14q.425 0 .712.287Q20 2.575 20 3t-.288.712Q19.425 4 19 4h-1v3q0 1.525-.712 2.862Q16.575 11.2 15.3 12q1.275.8 1.988 2.137Q18 15.475 18 17v3h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 22 19 22Z"/>
    </Icon>
  );
});

IconMaterialHourglassFull.displayName = 'OnesyIconMaterialHourglassFull';

export default IconMaterialHourglassFull;
