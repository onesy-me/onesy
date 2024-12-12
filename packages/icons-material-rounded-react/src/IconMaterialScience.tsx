import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScience = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Science'

      short_name='Science'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z"/>
    </Icon>
  );
});

IconMaterialScience.displayName = 'OnesyIconMaterialScience';

export default IconMaterialScience;
