import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileHandLeftOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileHandLeftOffFilled'

      short_name='MobileHandLeftOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m819-28-52-52H464l138-165-57-57-161 193q-11 14-27.5 21.5T322-80h-42q-50 0-85-35t-35-85v-320l84-84L28-820l56-56L876-84l-57 56Zm-19-244L280-792v-88h520v608ZM540-680q17 0 28.5-11.5T580-720q0-17-11.5-28.5T540-760q-17 0-28.5 11.5T500-720q0 17 11.5 28.5T540-680ZM320-260l178-89-178-179v268Z"/>
    </Icon>
  );
});

IconMaterialMobileHandLeftOffFilled.displayName = 'OnesyIconMaterialMobileHandLeftOffFilled';

export default IconMaterialMobileHandLeftOffFilled;
