import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocationAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltW100'

      short_name='EditLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-131Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q24 0 47 3.5t44 11.5l-21 22q-17-5-34-7.5t-36-2.5q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169q110-94 177.5-198.5T725-547q0-23-3.5-43.5T712-631l22-22q9 25 14 51t5 55q0 85-69 190T480-131Zm0-416Zm217-228-11-11-200 200v20h20l200-200-9-9Zm37-19 32-32-20-20-32 32 20 20Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltW100.displayName = 'OnesyIconMaterialEditLocationAltW100';

export default IconMaterialEditLocationAltW100;
