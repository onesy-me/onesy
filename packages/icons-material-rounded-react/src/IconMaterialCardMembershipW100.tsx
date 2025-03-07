import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardMembershipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipW100'

      short_name='CardMembership'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-462v70q0 12 10 22t22 10h576q12 0 22-10t10-22v-70H160Zm32-366h576q25 0 42.5 17.5T828-768v376q0 25-17.5 42.5T768-332H584v113q0 17-14 26t-29 1l-48-23q-6-3-13-3t-13 3l-48 23q-15 8-29-1t-14-26v-113H192q-25 0-42.5-17.5T132-392v-376q0-25 17.5-42.5T192-828Zm-32 290h640v-230q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v230Zm0 146v-408h32q-12 0-22 10t-10 22v376q0 12 10 22t22 10h-32v-32Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipW100.displayName = 'OnesyIconMaterialCardMembershipW100';

export default IconMaterialCardMembershipW100;
