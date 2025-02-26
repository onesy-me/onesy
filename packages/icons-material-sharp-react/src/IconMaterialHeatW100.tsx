import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatW100'

      short_name='Heat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M454-335q0 38 16 73t51 77l-21 16q-37-40-55.5-81T426-334q0-34 9.5-70t32.5-91q22-54 30-84t8-56q0-37-17-70.5T434-777l20-19q41 40 60.5 79t19.5 81q0 29-8.5 62T494-485q-23 57-31.5 89.5T454-335Zm174 2q0 38 16 73t51 77l-21 16q-37-40-55.5-81T600-332q0-34 9.5-70t32.5-91q22-54 30-84t8-56q0-37-17-70.5T608-775l20-19q41 40 60.5 79t19.5 81q0 29-8.5 62T668-483q-23 57-31.5 89.5T628-333Zm-348 0q0 38 16 73t51 77l-21 16q-37-40-55.5-81T252-332q0-34 9.5-70t32.5-91q22-54 30-84t8-56q0-37-17-70.5T260-775l20-19q41 40 60.5 79t19.5 81q0 29-8.5 62T320-483q-23 57-31.5 89.5T280-333Z"/>
    </Icon>
  );
});

IconMaterialHeatW100.displayName = 'OnesyIconMaterialHeatW100';

export default IconMaterialHeatW100;
