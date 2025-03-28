import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMeasuringTapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeasuringTapeW100Filled'

      short_name='MeasuringTape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-212v-288q0-120.28 83.8-204.14Q399.6-788 519.8-788T724-704.2q84 83.8 84 204T724.14-296Q640.28-212 520-212H232Zm288-174q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm-.12-28Q484-414 459-439.12t-25-61Q434-536 459.12-561t61-25Q556-586 581-560.88t25 61Q606-464 580.88-439t-61 25ZM152-212v-148h28v148h-28Z"/>
    </Icon>
  );
});

IconMaterialMeasuringTapeW100Filled.displayName = 'OnesyIconMaterialMeasuringTapeW100Filled';

export default IconMaterialMeasuringTapeW100Filled;
