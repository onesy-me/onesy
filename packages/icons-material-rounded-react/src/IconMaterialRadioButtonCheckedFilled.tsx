import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadioButtonCheckedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioButtonCheckedFilled'

      short_name='RadioButtonChecked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialRadioButtonCheckedFilled.displayName = 'OnesyIconMaterialRadioButtonCheckedFilled';

export default IconMaterialRadioButtonCheckedFilled;
