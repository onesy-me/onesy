import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Home'

      short_name='Home'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
    </Icon>
  );
});

IconMaterialHome.displayName = 'OnesyIconMaterialHome';

export default IconMaterialHome;
