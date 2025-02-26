import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoffeeMakerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerFilled'

      short_name='CoffeeMaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v80h-80v120H320v-120h-80v640h162q-38-27-60-68.5T320-320v-200h400v200q0 50-22 91.5T638-160h162v80H160Zm360-480q17 0 28.5-11.5T560-600q0-17-11.5-28.5T520-640q-17 0-28.5 11.5T480-600q0 17 11.5 28.5T520-560Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerFilled.displayName = 'OnesyIconMaterialCoffeeMakerFilled';

export default IconMaterialCoffeeMakerFilled;
