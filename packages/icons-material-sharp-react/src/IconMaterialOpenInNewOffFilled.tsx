import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffFilled'

      short_name='OpenInNewOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-55-65-65H120v-606l-65-65 57-57 736 736-57 57ZM646-200 451-395l-63 63-56-56 63-63-195-195v446h446ZM314-760l-80-80h246v80H314Zm251 251-56-56 195-195H560v-80h280v280h-80v-144L565-509Zm275 275-80-80v-166h80v246Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOffFilled.displayName = 'OnesyIconMaterialOpenInNewOffFilled';

export default IconMaterialOpenInNewOffFilled;
