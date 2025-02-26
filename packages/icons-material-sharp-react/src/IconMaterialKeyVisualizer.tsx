import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyVisualizer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVisualizer'

      short_name='KeyVisualizer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h120v80H120Zm0-160v-80h320v80H120Zm0-160v-80h720v80H120Zm0-160v-80h320v80H120Zm0-160v-80h120v80H120Zm200 640v-80h120v80H320Zm0-640v-80h120v80H320Zm200 640v-80h120v80H520Zm0-160v-80h320v80H520Zm0-320v-80h320v80H520Zm0-160v-80h120v80H520Zm200 640v-80h120v80H720Zm0-640v-80h120v80H720Z"/>
    </Icon>
  );
});

IconMaterialKeyVisualizer.displayName = 'OnesyIconMaterialKeyVisualizer';

export default IconMaterialKeyVisualizer;
