import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPresentToAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllW100'

      short_name='PresentToAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-550v180q0 6 4 10t10 4q6 0 10-4t4-10v-180l80 80q4 4 9.5 4.5T594-470q5-5 5-10t-5-10l-93-93q-9-9-21-9t-21 9l-93 93q-4 4-4.5 9.5T366-470q5 5 10 5t10-5l80-80ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllW100.displayName = 'OnesyIconMaterialPresentToAllW100';

export default IconMaterialPresentToAllW100;
