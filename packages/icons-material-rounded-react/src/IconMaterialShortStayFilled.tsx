import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShortStayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStayFilled'

      short_name='ShortStay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-288v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v100q0 2 6 14l67 67q6 6 14 6t14-6q6-6 6-14t-6-14l-61-61ZM380-600q-33 0-56.5-23.5T300-680q0-33 23.5-56.5T380-760q33 0 56.5 23.5T460-680q0 33-23.5 56.5T380-600ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-480 0q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h360q33 0 56.5 23.5T640-800v213q0 13-8 23t-21 13q-14 4-26.5 8.5T560-533v-267H200v261q18-11 38-16t42-5h286v24q-51 23-88.5 62T420-384v-16q0-17-11.5-28.5T380-440q-17 0-28.5 11.5T340-400v40h-40q-17 0-28.5 11.5T260-320q0 17 11.5 28.5T300-280h40v40q0 17 11.5 28.5T380-200q8 0 16-3t13-9q5 20 13 40t19 38q11 18 2 36t-28 18H200Z"/>
    </Icon>
  );
});

IconMaterialShortStayFilled.displayName = 'OnesyIconMaterialShortStayFilled';

export default IconMaterialShortStayFilled;
