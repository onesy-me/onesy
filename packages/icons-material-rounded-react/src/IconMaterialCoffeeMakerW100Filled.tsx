import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoffeeMakerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerW100Filled'

      short_name='CoffeeMaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h462q6 0 10 4t4 10q0 6-4 10t-10 4h-92v36q0 12-8 20t-20 8H374q-12 0-20-8t-8-20v-36h-74q-14 0-23 9t-9 23v576q0 14 9 23t23 9h154q-35-20-57.5-52T346-292v-88q0-25 17.5-42.5T406-440h176q25 0 42.5 17.5T642-380v88q0 48-22.5 80T562-160h172q6 0 10 4t4 10q0 6-4 10t-10 4H272Zm222-428q11 0 19.5-8.5T522-588q0-11-8.5-19.5T494-616q-11 0-19.5 8.5T466-588q0 11 8.5 19.5T494-560Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerW100Filled.displayName = 'OnesyIconMaterialCoffeeMakerW100Filled';

export default IconMaterialCoffeeMakerW100Filled;
