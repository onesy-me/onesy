import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeStorageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeStorageFilled'

      short_name='HomeStorage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-120q-29 0-51.5-19T189-187l-61-366q-3-18 8.5-32.5T167-600h626q19 0 30.5 14.5T832-553l-61 366q-5 29-27.5 48T692-120H268Zm132-240h160q17 0 28.5-11.5T600-400q0-17-11.5-28.5T560-440H400q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360ZM240-640q-17 0-28.5-11.5T200-680q0-17 11.5-28.5T240-720h480q17 0 28.5 11.5T760-680q0 17-11.5 28.5T720-640H240Zm80-120q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H320Z"/>
    </Icon>
  );
});

IconMaterialHomeStorageFilled.displayName = 'OnesyIconMaterialHomeStorageFilled';

export default IconMaterialHomeStorageFilled;
