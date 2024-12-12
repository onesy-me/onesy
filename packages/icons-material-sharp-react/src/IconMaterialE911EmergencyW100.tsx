import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialE911EmergencyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911EmergencyW100'

      short_name='E911Emergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-212v-28h57l87-294h200l87 294h57v28H236Zm87-28h314l-78-266H401l-78 266Zm143-406v-148h28v148h-28Zm212 88-20-20 105-104 19 19-104 105Zm68 192v-28h148v28H746ZM282-558 178-663l19-19 105 104-20 20ZM66-366v-28h148v28H66Zm414 126Z"/>
    </Icon>
  );
});

IconMaterialE911EmergencyW100.displayName = 'OnesyIconMaterialE911EmergencyW100';

export default IconMaterialE911EmergencyW100;
