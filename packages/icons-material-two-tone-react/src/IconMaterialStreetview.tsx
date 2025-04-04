import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreetview = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Streetview'

      short_name='Streetview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"/><circle cx="18" cy="6" r="5"/><path d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z"/>
    </Icon>
  );
});

IconMaterialStreetview.displayName = 'OnesyIconMaterialStreetview';

export default IconMaterialStreetview;
