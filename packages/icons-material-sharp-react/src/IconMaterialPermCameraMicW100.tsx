import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermCameraMicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicW100'

      short_name='PermCameraMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-172H132v-536h176l74-80h196l74 80h176v536H574v-28h226v-480H640l-74-80H394l-74 80H160v480h226v28Zm80 0h28v-140q75-8 124.5-61T668-500h-28q0 63-46 111.5T480-340q-68 0-114-48.5T320-500h-28q0 74 49.5 127T466-312v140Zm14-288q17 0 28.5-11.5T520-500v-160q0-17-11.5-28.5T480-700q-17 0-28.5 11.5T440-660v160q0 17 11.5 28.5T480-460ZM160-200h640-640Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicW100.displayName = 'OnesyIconMaterialPermCameraMicW100';

export default IconMaterialPermCameraMicW100;
