import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloorLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampW100Filled'

      short_name='FloorLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.96-200q-5.96 0-9.96-4.02-4-4.03-4-9.98v-306H298q-15.45 0-24.73-12.5Q264-545 269-559l55-175q6-18.75 21.75-30.38Q361.5-776 381-776h200q19.5 0 35.25 11.62Q632-752.75 638-734l55 175q5 14-4.27 26.5Q679.45-520 664-520H495v306q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM361-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H361Z"/>
    </Icon>
  );
});

IconMaterialFloorLampW100Filled.displayName = 'OnesyIconMaterialFloorLampW100Filled';

export default IconMaterialFloorLampW100Filled;
