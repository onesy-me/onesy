import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabled'

      short_name='PrintDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 640-206h80v6q0 33-23.5 56.5T640-120H320q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160q0-51 35-85.5t85-34.5h6L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM320-200h320v-6L486-360H320v160Zm560-160q0 33-23.5 56.5T800-280h-6q-17 0-28.5-11.5T754-320q0-17 11.5-28.5T794-360h6v-160q0-17-11.5-28.5T760-560H517q-20 0-30-12.5T477-600q0-15 10-27.5t30-12.5h243q51 0 85.5 34.5T880-520v160ZM160-520v160h80q0-33 23.5-56.5T320-440h86L286-560h-86q-17 0-28.5 11.5T160-520Zm480-120v-120H317q-20 0-30-12.5T277-800q0-15 10-27.5t30-12.5h323q33 0 56.5 23.5T720-760v120h-80Zm80 180q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm40-100h40-283 243Zm-600 0h126-126Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabled.displayName = 'OnesyIconMaterialPrintDisabled';

export default IconMaterialPrintDisabled;
