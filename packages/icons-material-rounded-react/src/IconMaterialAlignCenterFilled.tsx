import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignCenterFilled'

      short_name='AlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-440q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h720q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H120Zm200-120q-17 0-28.5-11.5T280-600v-40q0-17 11.5-28.5T320-680h320q17 0 28.5 11.5T680-640v40q0 17-11.5 28.5T640-560H320Zm0 280q-17 0-28.5-11.5T280-320v-40q0-17 11.5-28.5T320-400h320q17 0 28.5 11.5T680-360v40q0 17-11.5 28.5T640-280H320Z"/>
    </Icon>
  );
});

IconMaterialAlignCenterFilled.displayName = 'OnesyIconMaterialAlignCenterFilled';

export default IconMaterialAlignCenterFilled;
