import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNature = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nature'

      short_name='Nature'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.17 4.17c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.25-5-5-5z" opacity=".3"/><path d="M19.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88h-.03c3.49-.4 6.2-3.36 6.2-6.95zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.25 5-5 5z"/>
    </Icon>
  );
});

IconMaterialNature.displayName = 'OnesyIconMaterialNature';

export default IconMaterialNature;
