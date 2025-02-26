import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWoman = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman'

      short_name='Woman'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80v-240H280l143-360h114l143 360H560v240H400Zm80-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialWoman.displayName = 'OnesyIconMaterialWoman';

export default IconMaterialWoman;
