import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOff'

      short_name='ExtensionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M18,13v2.17L8.83,6H11V4c0-0.28,0.22-0.5,0.5-0.5S12,3.72,12,4v2h6v6h2 c0.28,0,0.5,0.22,0.5,0.5S20.28,13,20,13H18z M8,12.5c0,1.5-0.83,3.57-3,4.37V19h2.13c0.8-2.17,2.87-3,4.37-3 c0.69,0,1.5,0.18,2.25,0.58l-6.33-6.33C7.82,11,8,11.81,8,12.5z" enableBackground="new" opacity=".3"/><path d="M1.39,4.22l1.62,1.62c0,0.05-0.01,0.1-0.01,0.16v3.8C5.7,9.8,6,11.96,6,12.5c0,0.54-0.29,2.7-3,2.7V19c0,1.1,0.9,2,2,2h3.8 c0-2.71,2.16-3,2.7-3c0.54,0,2.7,0.29,2.7,3H18c0.06,0,0.11,0,0.16-0.01l1.61,1.61l1.41-1.41L2.81,2.81L1.39,4.22z M11.5,16 c-1.5,0-3.57,0.83-4.37,3H5v-2.13c2.17-0.8,3-2.87,3-4.37c0-0.69-0.18-1.5-0.58-2.25l6.33,6.33C13,16.18,12.19,16,11.5,16z M8.83,6 l-2-2H9c0-1.38,1.12-2.5,2.5-2.5S14,2.62,14,4h4c1.1,0,2,0.9,2,2v4c1.38,0,2.5,1.12,2.5,2.5S21.38,15,20,15v2.17l-2-2V13h2 c0.28,0,0.5-0.22,0.5-0.5S20.28,12,20,12h-2V6h-6V4c0-0.28-0.22-0.5-0.5-0.5S11,3.72,11,4v2H8.83z"/>
    </Icon>
  );
});

IconMaterialExtensionOff.displayName = 'OnesyIconMaterialExtensionOff';

export default IconMaterialExtensionOff;
