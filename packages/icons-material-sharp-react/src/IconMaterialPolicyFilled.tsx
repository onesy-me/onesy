import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolicyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyFilled'

      short_name='Policy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 63-16.5 122.5T736-280L618-398q11-19 16.5-39.5T640-480q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47q21 0 41.5-5.5T560-342l129 128q-42 49-94.5 84T480-80Zm0-320q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialPolicyFilled.displayName = 'OnesyIconMaterialPolicyFilled';

export default IconMaterialPolicyFilled;
