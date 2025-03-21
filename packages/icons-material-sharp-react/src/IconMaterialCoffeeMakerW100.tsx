import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoffeeMakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerW100'

      short_name='CoffeeMaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h536v28H642v64H346v-64H240v640h186q-35-20-57.5-52T346-292v-148h296v148q0 48-22.5 80T562-160h186v28H212Zm282-40q50 0 85-35t35-85v-120H374v120q0 50 35 85t85 35Zm0-388q11 0 19.5-8.5T522-588q0-11-8.5-19.5T494-616q-11 0-19.5 8.5T466-588q0 11 8.5 19.5T494-560Zm0 148Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerW100.displayName = 'OnesyIconMaterialCoffeeMakerW100';

export default IconMaterialCoffeeMakerW100;
