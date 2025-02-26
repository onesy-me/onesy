import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeMuteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteW100Filled'

      short_name='VolumeMute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M462-412H362q-12.75 0-21.37-8.63Q332-429.25 332-442v-76q0-12.75 8.63-21.38Q349.25-548 362-548h100l100-100q7-7 16.5-3.28T588-638v316q0 9.56-9.5 13.28Q569-305 562-312L462-412Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteW100Filled.displayName = 'OnesyIconMaterialVolumeMuteW100Filled';

export default IconMaterialVolumeMuteW100Filled;
