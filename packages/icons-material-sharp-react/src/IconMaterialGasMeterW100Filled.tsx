import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGasMeterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GasMeterW100Filled'

      short_name='GasMeter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-616h174v-80h28v80h132v-80h28v80h174v616H212Zm134-454h268v-28H346v28Zm133.83 311Q510-275 531-296t21-49.81q0-23.19-13.68-40.17Q524.64-402.97 480-455q-45 52-58.5 69.06-13.5 17.06-13.5 39.8Q408-317 428.83-296t51 21Z"/>
    </Icon>
  );
});

IconMaterialGasMeterW100Filled.displayName = 'OnesyIconMaterialGasMeterW100Filled';

export default IconMaterialGasMeterW100Filled;
