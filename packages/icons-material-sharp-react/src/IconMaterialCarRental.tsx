import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarRental = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRental'

      short_name='CarRental'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-680q-50 0-85-35t-35-85q0-50 35-85t85-35q38 0 69 22.5t45 57.5h326v80h-40v80h-80v-80H434q-14 35-45 57.5T320-680Zm0-80q17 0 28.5-11.5T360-800q0-17-11.5-28.5T320-840q-17 0-28.5 11.5T280-800q0 17 11.5 28.5T320-760Zm40 500q17 0 28.5-11.5T400-300q0-17-11.5-28.5T360-340q-17 0-28.5 11.5T320-300q0 17 11.5 28.5T360-260Zm240 0q17 0 28.5-11.5T640-300q0-17-11.5-28.5T600-340q-17 0-28.5 11.5T560-300q0 17 11.5 28.5T600-260ZM200-80v-296l77-224h406l77 224v296h-80v-80H280v80h-80Zm106-360h348l-28-80H334l-28 80Zm-26 80v120-120Zm0 120h400v-120H280v120Z"/>
    </Icon>
  );
});

IconMaterialCarRental.displayName = 'OnesyIconMaterialCarRental';

export default IconMaterialCarRental;
