import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Scanner'

      short_name='Scanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M704-480 178-670q-16-6-23-21t-1-31q6-16 21-23t31-1l586 214q20 8 34 28t14 44v220q0 33-23.5 56.5T760-160H200q-33 0-56.5-23.5T120-240v-160q0-33 23.5-56.5T200-480h504Zm56 240v-160H200v160h560Zm-320-40h240q17 0 28.5-11.5T720-320q0-17-11.5-28.5T680-360H440q-17 0-28.5 11.5T400-320q0 17 11.5 28.5T440-280Zm-160 0q17 0 28.5-11.5T320-320q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm-80 40v-160 160Z"/>
    </Icon>
  );
});

IconMaterialScanner.displayName = 'OnesyIconMaterialScanner';

export default IconMaterialScanner;
