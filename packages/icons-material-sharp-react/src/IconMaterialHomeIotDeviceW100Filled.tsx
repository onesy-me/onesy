import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeIotDeviceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeIotDeviceW100Filled'

      short_name='HomeIotDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-544h72v-140q0-15-9.9-25.5T272-720q-14 0-25 10.5T236-684v140Zm35.5 332q-54.5 0-93-38.5T140-344q0-38.32 18.5-68.66Q177-443 208-460v-224q0-26.88 19-45.44T272-748q28 0 46 18.56T336-684v224q30 17 49 48t19 69q0 54-39 92.5T271.5-212ZM517-370q-41-26-71-69.5T416-546q0-84.17 58.88-143.08 58.88-58.92 143-58.92T761-689.08q59 58.91 59 143.08 0 63-30 106.5T719-370H517Zm101 158q-20 0-35-15t-15-35h100q0 20-15 35t-35 15Zm-90-90v-28h180v28H528Z"/>
    </Icon>
  );
});

IconMaterialHomeIotDeviceW100Filled.displayName = 'OnesyIconMaterialHomeIotDeviceW100Filled';

export default IconMaterialHomeIotDeviceW100Filled;
