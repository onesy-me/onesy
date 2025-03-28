import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterPumpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpW100Filled'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m479-559-24 36q-19 29-24 41t-5 27.41q0 22.1 15.5 37.85Q457-401 480-401t38.5-15.5Q534-432 534-455q0-13.87-5.5-27.43Q523-496 504-523l-25-36Zm.89 307Q385-252 318.5-318.61q-66.5-66.6-66.5-161.5 0-94.89 66.61-161.39 66.6-66.5 161.5-66.5 94.89 0 161.39 66.61 66.5 66.6 66.5 161.5 0 94.89-66.61 161.39-66.6 66.5-161.5 66.5ZM814-518v-28h-87q-14-54-48-95.5T597-708h217v-28h28v218h-28ZM118-224v-218h28v28h87q14 54 48 95.5t82 66.5H146v28h-28Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpW100Filled.displayName = 'OnesyIconMaterialWaterPumpW100Filled';

export default IconMaterialWaterPumpW100Filled;
