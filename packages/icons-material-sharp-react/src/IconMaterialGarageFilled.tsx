import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageFilled'

      short_name='Garage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v800H80Zm280-320q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400ZM200-516v296h80v-80h400v80h80v-296l-77-224H277l-77 224Zm106-64 28-80h292l28 80H306Z"/>
    </Icon>
  );
});

IconMaterialGarageFilled.displayName = 'OnesyIconMaterialGarageFilled';

export default IconMaterialGarageFilled;
