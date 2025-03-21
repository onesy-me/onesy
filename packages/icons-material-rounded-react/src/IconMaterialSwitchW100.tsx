import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchW100'

      short_name='Switch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M584-306q13 0 21.5-8.5T614-336v-288q0-13-8.5-21.5T584-654H376q-13 0-21.5 8.5T346-624v288q0 13 8.5 21.5T376-306h208Zm-210-28v-292h212v292H374ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Zm280 270q13 0 21.5-8.5T510-520q0-13-8.5-21.5T480-550q-13 0-21.5 8.5T450-520q0 13 8.5 21.5T480-490Z"/>
    </Icon>
  );
});

IconMaterialSwitchW100.displayName = 'OnesyIconMaterialSwitchW100';

export default IconMaterialSwitchW100;
