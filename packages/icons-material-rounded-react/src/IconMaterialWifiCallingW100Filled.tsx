import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiCallingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingW100Filled'

      short_name='WifiCalling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M745-172q-94 0-195.5-49.5T359-360q-88-89-137.5-190T172-745q0-18 12-30.5t30-12.5h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.5 30T745-172ZM639-589 520-708q-11-11-9-24.5t15-21.5q32-19 66.5-28.5T660-792q33 0 67.5 9.5T794-754q13 8 15 21.5t-9 24.5L681-589q-9 9-21 9t-21-9Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingW100Filled.displayName = 'OnesyIconMaterialWifiCallingW100Filled';

export default IconMaterialWifiCallingW100Filled;
