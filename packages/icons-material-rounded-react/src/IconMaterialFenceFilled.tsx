import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceFilled'

      short_name='Fence'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-17 0-28.5-11.5T200-200v-120h-40q-17 0-28.5-11.5T120-360q0-17 11.5-28.5T160-400h40v-80h-40q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h40v-103q0-8 3-15.5t9-13.5l80-80q12-12 28-12t28 12l52 52 52-52q12-12 28.5-12t28.5 12l52 52 51-52q12-12 28.5-12t28.5 12l80 80q6 6 9 13.5t3 15.5v103h39q17 0 28.5 11.5T840-520q0 17-11.5 28.5T800-480h-39v80h39q17 0 28.5 11.5T840-360q0 17-11.5 28.5T800-320h-39v120q0 17-11.5 28.5T721-160H240Zm40-400h80v-87l-40-40-40 40v87Zm160 0h80v-87l-40-40-40 40v87Zm161 0h79v-87l-40-40-39 39v88ZM280-400h80v-80h-80v80Zm160 0h80v-80h-80v80Zm161 0h79v-80h-79v80ZM280-240h80v-80h-80v80Zm160 0h80v-80h-80v80Zm161 0h79v-80h-79v80Z"/>
    </Icon>
  );
});

IconMaterialFenceFilled.displayName = 'OnesyIconMaterialFenceFilled';

export default IconMaterialFenceFilled;
