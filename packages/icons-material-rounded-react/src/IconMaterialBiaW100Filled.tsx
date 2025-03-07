import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBiaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiaW100Filled'

      short_name='Bia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-574h179q-14-13-21.5-29t-7.5-37q0-11 2.25-21t6.75-19H312q-14 0-23 9t-9 23v74Zm349.01 20q61.99 0 116.49-16.5Q800-587 800-640t-54.51-69.5Q690.98-726 628.99-726T512.5-709.5Q458-693 458-640t54.51 69.5q54.51 16.5 116.5 16.5ZM192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-242q0-24.75 17.63-42.38Q167.25-574 192-574h60v-74q0-24.75 17.63-42.38Q287.25-708 312-708h149q29-25 74.63-35.5Q581.25-754 629-754q73 0 136 25.5t63 88.5v368q0 24.75-17.62 42.37Q792.75-212 768-212H614v-108q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v108H454v-108q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v108H294v-108q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v108h-74Z"/>
    </Icon>
  );
});

IconMaterialBiaW100Filled.displayName = 'OnesyIconMaterialBiaW100Filled';

export default IconMaterialBiaW100Filled;
