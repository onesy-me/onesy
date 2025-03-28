import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltW100'

      short_name='ChairAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-196v-212q0-26 17-43t43-17h34v-84h-34q-26 0-43-17t-17-43v-86q0-26 17-43t43-17h296q26 0 43 17t17 43v86q0 26-17 43t-43 17h-34v84h34q26 0 43 17t17 43v212q0 6-4 10t-10 4q-6 0-10-4t-4-10v-106H300v106q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm60-384h296q12 0 22-10t10-22v-86q0-12-10-22t-22-10H332q-12 0-22 10t-10 22v86q0 12 10 22t22 10Zm62 112h172v-84H394v84Zm-94 138h360v-78q0-12-10-22t-22-10H332q-12 0-22 10t-10 22v78Zm0-250v-150 150Zm0 250v-110 110Z"/>
    </Icon>
  );
});

IconMaterialChairAltW100.displayName = 'OnesyIconMaterialChairAltW100';

export default IconMaterialChairAltW100;
