import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMixtureMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MixtureMedFilled'

      short_name='MixtureMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m320-60-80-60v-160h-40q-33 0-56.5-23.5T120-360v-300H80v-80h160v-60h-60v-80h200v80h-60v60h160v80h-40v300q0 33-23.5 56.5T360-280h-40v220Zm360-20q-66 0-113-47t-47-113v-320q0-66 47-113t113-47q66 0 113 47t47 113v320q0 66-47 113T680-80ZM200-360h160v-60H260v-60h100v-60H260v-60h100v-60H200v300Zm400 40h160v-160H600v160Z"/>
    </Icon>
  );
});

IconMaterialMixtureMedFilled.displayName = 'OnesyIconMaterialMixtureMedFilled';

export default IconMaterialMixtureMedFilled;
