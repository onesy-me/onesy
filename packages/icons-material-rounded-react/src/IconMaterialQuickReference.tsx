import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReference = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReference'

      short_name='QuickReference'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-800v640-640 200-200Zm120 400h100q17 0 28.5-11.5T460-440q0-17-11.5-28.5T420-480H320q-17 0-28.5 11.5T280-440q0 17 11.5 28.5T320-400Zm0 160h40q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320h-40q-17 0-28.5 11.5T280-280q0 17 11.5 28.5T320-240ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v13q0 17-11.5 28.5T720-554q-17 0-28.5-11.5T680-594v-6H520q-17 0-28.5-11.5T480-640v-160H200v640h221q17 0 28.5 11.5T461-120q0 17-11.5 28.5T421-80H200Zm480-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Z"/>
    </Icon>
  );
});

IconMaterialQuickReference.displayName = 'OnesyIconMaterialQuickReference';

export default IconMaterialQuickReference;
