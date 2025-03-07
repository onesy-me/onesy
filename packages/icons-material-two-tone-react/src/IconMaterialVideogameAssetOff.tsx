import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideogameAssetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetOff'

      short_name='VideogameAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24" y="0"/><path d="M10.83,8l8,8H20V8H10.83z M17.5,12c-0.83,0-1.5-0.67-1.5-1.5S16.67,9,17.5,9S19,9.67,19,10.5 S18.33,12,17.5,12z M13.17,16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17,8H4v8H13.17z" opacity=".3"/><path d="M17.5,9c0.83,0,1.5,0.67,1.5,1.5S18.33,12,17.5,12S16,11.33,16,10.5S16.67,9,17.5,9z M10.83,8H20v8h-1.17l1.87,1.87 C21.45,17.58,22,16.85,22,16V8c0-1.1-0.9-2-2-2H8.83L10.83,8z M19.78,22.61L15.17,18H4c-1.1,0-2-0.9-2-2V8 c0-0.85,0.55-1.58,1.3-1.87L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M13.17,16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17,8H4v8H13.17z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetOff.displayName = 'OnesyIconMaterialVideogameAssetOff';

export default IconMaterialVideogameAssetOff;
