import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBacklightHighOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightHighOffFilled'

      short_name='BacklightHighOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-360v-80h160v80H40Zm400-320v-200h80v200h-80Zm266 110-56-56 113-113 57 56-114 113Zm54 210v-80h160v80H760Zm31 305L606-240H280v-120h206L55-791l57-57 736 736-57 57Z"/>
    </Icon>
  );
});

IconMaterialBacklightHighOffFilled.displayName = 'OnesyIconMaterialBacklightHighOffFilled';

export default IconMaterialBacklightHighOffFilled;
