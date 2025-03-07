import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivacyScreenOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenOffFilled'

      short_name='PrivacyScreenOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M790 999 686 896H136l275-275-56-56L80 840V673l191-192-56-56L80 560V336q0-10 4-17.5T94 304l-40-40q-12-12-11.5-28.5T55 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790 999Zm90-137L525 507l251-251h24q33 0 56.5 23.5T880 336v526ZM469 451l-84-84 111-111h167L469 451ZM329 311l-55-55h110l-55 55Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenOffFilled.displayName = 'OnesyIconMaterialPrivacyScreenOffFilled';

export default IconMaterialPrivacyScreenOffFilled;
