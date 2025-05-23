import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetShutterSpeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetShutterSpeedFilled'

      short_name='ResetShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q0-45 18.5-83t49.5-66l86 149H480Zm100 172q-37-21-62-55t-34-77h173l-77 132Zm77-212-77-132q23-13 48-20.5t52-7.5q17 0 32.5 3t30.5 8l-86 149Zm23 240q-17 0-32.5-3T617-91l86-149 77 132q-23 13-48 20.5T680-80Zm23-240 77-132q37 21 62 55t34 77H703Zm109 189-86-149h154q0 45-18 83t-50 66ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q65 0 139 38t195 187q11 13 3.5 28.5T792-563q-16 7-32 .5T739-585q-20-68-91.5-121.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetShutterSpeedFilled.displayName = 'OnesyIconMaterialResetShutterSpeedFilled';

export default IconMaterialResetShutterSpeedFilled;
