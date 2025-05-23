import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBabyChangingStation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BabyChangingStation'

      short_name='BabyChangingStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-400l63-185q8-26 30-40.5t47-14.5q8 0 16 1.5t16 5.5l166 73h102v80H440l-108-47-52 157v370H120Zm240-120v-80h480v80H360Zm420-120q-25 0-42.5-17.5T720-380q0-25 17.5-42.5T780-440q25 0 42.5 17.5T840-380q0 25-17.5 42.5T780-320Zm-340 0v-120h-80v-80h160v80h80v-80h80v200H440ZM320-760q-33 0-56.5-23.5T240-840q0-33 23.5-56.5T320-920q33 0 56.5 23.5T400-840q0 33-23.5 56.5T320-760Z"/>
    </Icon>
  );
});

IconMaterialBabyChangingStation.displayName = 'OnesyIconMaterialBabyChangingStation';

export default IconMaterialBabyChangingStation;
