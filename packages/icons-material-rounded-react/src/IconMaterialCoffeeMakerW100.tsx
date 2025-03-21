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
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h462q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-92v36q0 11.9-8.05 19.95Q625.9-736 614-736H374q-11.9 0-19.95-8.05Q346-752.1 346-764v-36h-74q-14 0-23 9t-9 23v576q0 14 9 23t23 9h154q-35-20-57.5-52T346-292v-88q0-24.75 17.63-42.38Q381.25-440 406-440h176q24.75 0 42.38 17.62Q642-404.75 642-380v88q0 48-22.5 80T562-160h172q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H272Zm222-40q50 0 85-35t35-85v-88q0-14-9-23t-23-9H406q-14 0-23 9t-9 23v88q0 50 35 85t85 35Zm0-388q11 0 19.5-8.5T522-588q0-11-8.5-19.5T494-616q-11 0-19.5 8.5T466-588q0 11 8.5 19.5T494-560Zm0 148Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerW100.displayName = 'OnesyIconMaterialCoffeeMakerW100';

export default IconMaterialCoffeeMakerW100;
