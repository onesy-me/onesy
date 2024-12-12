import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckFilled'

      short_name='SafetyCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm66-106-86-86v-128h40v112l74 74-28 28Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckFilled.displayName = 'OnesyIconMaterialSafetyCheckFilled';

export default IconMaterialSafetyCheckFilled;
