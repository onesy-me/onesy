import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Toc'

      short_name='Toc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-80h560v80H120Zm0-160v-80h560v80H120Zm0-160v-80h560v80H120Zm680 320q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280Zm0-160q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440Zm0-160q-17 0-28.5-11.5T760-640q0-17 11.5-28.5T800-680q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600Z"/>
    </Icon>
  );
});

IconMaterialToc.displayName = 'OnesyIconMaterialToc';

export default IconMaterialToc;
