import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGastroenterologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GastroenterologyFilled'

      short_name='Gastroenterology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-50 35-85t85-35h80q50 0 85-35t35-85q0-17-11.5-28.5T400-600q-33 0-56.5-23.5T320-680v-160q0-17 11.5-28.5T360-880h160q17 0 28.5 11.5T560-840v40q117 0 198.5 81.5T840-520v40q0 117-81.5 198.5T560-200H400q-17 0-28.5 11.5T360-160v40q0 17-11.5 28.5T320-80H160Z"/>
    </Icon>
  );
});

IconMaterialGastroenterologyFilled.displayName = 'OnesyIconMaterialGastroenterologyFilled';

export default IconMaterialGastroenterologyFilled;
