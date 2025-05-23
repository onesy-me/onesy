import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffW100'

      short_name='KeyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 508-412h-52q-20 54-68 87t-108 33q-78 0-133-55T92-480q0-71 46-124t116-62L126-794l20-20 668 668-20 20Zm35-422 68 68-112 110-65-49-38 28-20-20 59-42 63 47 74-74-40-40H553l-28-28h304ZM280-320q51 0 95-31.5t59-88.5h46l-53-53-47-47-47-47-53-53q-73 0-116.5 50.5T120-480q0 66 47 113t113 47Zm0-120q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440Z"/>
    </Icon>
  );
});

IconMaterialKeyOffW100.displayName = 'OnesyIconMaterialKeyOffW100';

export default IconMaterialKeyOffW100;
