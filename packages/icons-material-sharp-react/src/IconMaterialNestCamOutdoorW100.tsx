import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamOutdoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamOutdoorW100'

      short_name='NestCamOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M549-237q-15 19-39 20.5T467-230L324-350q-24-20-42-45t-26-55q-9 14-22.72 22-13.73 8-29.28 8h-58v-252h58q27 0 44.5 21t17.5 50q26-58 80-90.5T464-724q36.43 0 69.21 13Q566-698 594-675l144 120q19 16 21 39.5T745-473L549-237ZM274-514q0 41 17 78t49 63l144 120q11 8 24 7.5t21-11.5l193-233q8-11 7.5-24T718-535L575-655q-24-20-53.98-31-29.98-11-62.02-11-76 0-130 53.5T274-514Zm230 45Z"/>
    </Icon>
  );
});

IconMaterialNestCamOutdoorW100.displayName = 'OnesyIconMaterialNestCamOutdoorW100';

export default IconMaterialNestCamOutdoorW100;
