import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerRounded'

      short_name='PowerRounded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.85q-.425 0-.712-.288Q11 12.275 11 11.85v-8q0-.425.288-.713.287-.287.712-.287t.713.287q.287.288.287.713v8q0 .425-.287.712-.288.288-.713.288Zm0 8q-1.875 0-3.512-.712-1.638-.713-2.85-1.926Q4.425 17 3.712 15.363 3 13.725 3 11.85q0-1.725.625-3.3.625-1.575 1.8-2.85.275-.3.7-.3.425 0 .725.3.275.275.25.687-.025.413-.3.738-.875.975-1.337 2.187Q5 10.525 5 11.85q0 2.925 2.038 4.962Q9.075 18.85 12 18.85t4.962-2.038Q19 14.775 19 11.85q0-1.325-.475-2.563-.475-1.237-1.35-2.212-.275-.3-.287-.7-.013-.4.262-.675.3-.3.725-.3t.7.3q1.175 1.275 1.8 2.85.625 1.575.625 3.3 0 1.875-.712 3.513-.713 1.637-1.925 2.849-1.213 1.213-2.85 1.926-1.638.712-3.513.712Z"/>
    </Icon>
  );
});

IconMaterialPowerRounded.displayName = 'OnesyIconMaterialPowerRounded';

export default IconMaterialPowerRounded;
