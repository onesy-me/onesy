import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward'

      short_name='Forward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity=".3"/><path d="M20 12l-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12 14 15.17V14H6z"/>
    </Icon>
  );
});

IconMaterialForward.displayName = 'OnesyIconMaterialForward';

export default IconMaterialForward;
