import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJavascript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Javascript'

      short_name='Javascript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-360q-25 0-42.5-17.5T240-420v-10q0-13 8.5-21.5T270-460q13 0 21.5 8.5T300-430v10h60v-150q0-13 8.5-21.5T390-600q13 0 21.5 8.5T420-570v150q0 25-17.5 42.5T360-360h-60Zm220 0q-17 0-28.5-11.5T480-400v-20q0-8 6-14t14-6h20q8 0 14 6t6 14h80v-40H520q-17 0-28.5-11.5T480-500v-60q0-17 11.5-28.5T520-600h120q17 0 28.5 11.5T680-560v20q0 8-6 14t-14 6h-20q-8 0-14-6t-6-14h-80v40h100q17 0 28.5 11.5T680-460v60q0 17-11.5 28.5T640-360H520Z"/>
    </Icon>
  );
});

IconMaterialJavascript.displayName = 'OnesyIconMaterialJavascript';

export default IconMaterialJavascript;
