import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSatelliteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteW100'

      short_name='Satellite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-528q66-11 113.5-58.5T432-700h-28q-11 55-50 94t-94 50v28Zm0-110q23-6 39.5-22.5T322-700h-62v62Zm-28 466q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32 0v-560 560Zm148-106h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8Z"/>
    </Icon>
  );
});

IconMaterialSatelliteW100.displayName = 'OnesyIconMaterialSatelliteW100';

export default IconMaterialSatelliteW100;
