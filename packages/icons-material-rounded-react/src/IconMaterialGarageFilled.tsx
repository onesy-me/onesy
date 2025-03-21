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
      <path d="M160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm200-320q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400ZM240-220q17 0 28.5-11.5T280-260v-40h400v40q0 17 11.5 28.5T720-220q17 0 28.5-11.5T760-260v-243q0-7-1-13.5t-3-12.5l-54-157q-8-24-29-39t-47-15H334q-26 0-47 15t-29 39l-54 157q-2 6-3 12.5t-1 13.5v243q0 17 11.5 28.5T240-220Zm66-360 28-80h292l28 80H306Z"/>
    </Icon>
  );
});

IconMaterialGarageFilled.displayName = 'OnesyIconMaterialGarageFilled';

export default IconMaterialGarageFilled;
