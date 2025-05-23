import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnterpriseOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseOffW100'

      short_name='EnterpriseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m826-94-78-78H192q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h100l28 28H192q-12 0-22 10t-10 22v376q0 12 10 22t22 10h528L134-786q-4-4-4.5-9.5T134-806q5-5 10-5t10 5l692 692q4 4 4.5 9.5T846-94q-5 5-10 5t-10-5Zm2-514v334q0 7-4.5 10.5T814-260q-5 0-9.5-3.5T800-274v-334q0-12-10-22t-22-10H453q-12 0-23.5-5T410-658l-24-24q-7-7-10.5-15.5T372-716q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43Zm-428-60h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48Zm214 214Zm-114 34Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseOffW100.displayName = 'OnesyIconMaterialEnterpriseOffW100';

export default IconMaterialEnterpriseOffW100;
