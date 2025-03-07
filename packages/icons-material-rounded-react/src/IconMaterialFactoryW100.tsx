import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryW100'

      short_name='Factory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-25 0-42.5-17.5T132-192v-294q0-18 9.5-33.5T168-542l98-41q15-6 28.5 2t13.5 25v33l159-64q15-6 28 3t13 25v51h320v316q0 25-17.5 42.5T768-132H192Zm0-28h576q14 0 23-9t9-23v-288H480v-82l-200 80v-78l-101 45q-9 4-14 11.5t-5 17.5v294q0 14 9 23t23 9Zm260-104h56v-112h-56v112Zm-160 0h56v-112h-56v112Zm320 0h56v-112h-56v112Zm216-244H726l38-265q1-7 6-11t12-4q5 0 8.5 3.5t4.5 8.5l33 268ZM192-160h-32 640-608Z"/>
    </Icon>
  );
});

IconMaterialFactoryW100.displayName = 'OnesyIconMaterialFactoryW100';

export default IconMaterialFactoryW100;
