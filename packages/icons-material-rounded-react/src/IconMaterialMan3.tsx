import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3'

      short_name='Man3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-110v-240h-40q-17 0-28.5-11.5T320-390v-200q0-33 23.5-56.5T400-670h160q33 0 56.5 23.5T640-590v200q0 17-11.5 28.5T600-350h-40v240q0 17-11.5 28.5T520-70h-80q-17 0-28.5-11.5T400-110Zm52-618-34-34q-12-12-12-28t12-28l34-34q12-12 28-12t28 12l34 34q12 12 12 28t-12 28l-34 34q-12 12-28 12t-28-12Z"/>
    </Icon>
  );
});

IconMaterialMan3.displayName = 'OnesyIconMaterialMan3';

export default IconMaterialMan3;
