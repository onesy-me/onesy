import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCribW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribW100'

      short_name='Crib'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-372h480v-153H410v-195h-90q-33 0-56.5 25.56Q240-668.89 240-633v261Zm240.25 212q26.75 0 53.25-5t52.5-13v-166H374v166q26 8 52.75 13t53.5 5Zm-.25 28q-69.38 0-132.69-26.5T233-233l20-20q20 20 43.5 36.5T346-189v-155H212v-289q0-48 31.73-81.5Q275.45-748 320-748h118v195h310v209H614v155q26-11 49.5-27.5T707-253l20 20q-51 48-114.31 74.5T480-132Zm-70-393Z"/>
    </Icon>
  );
});

IconMaterialCribW100.displayName = 'OnesyIconMaterialCribW100';

export default IconMaterialCribW100;
