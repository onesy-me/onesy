import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryVert020Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert020Filled'

      short_name='BatteryVert020'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-.425 0-.713-.288Q7 21.425 7 21V5q0-.425.287-.713Q7.575 4 8 4h2V3q0-.425.288-.713Q10.575 2 11 2h2q.425 0 .713.287Q14 2.575 14 3v1h2q.425 0 .712.287Q17 4.575 17 5v16q0 .425-.288.712Q16.425 22 16 22Zm1-5h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBatteryVert020Filled.displayName = 'OnesyIconMaterialBatteryVert020Filled';

export default IconMaterialBatteryVert020Filled;
