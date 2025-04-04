import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEntFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EntFilled'

      short_name='Ent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-17 0-28.5-11.5T240-120v-132q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v40q0 17-11.5 28.5T560-80H444l25-240h91q17 0 28.5-11.5T600-360q0-17-11.5-28.5T560-400h-83l5-44q2-15 13-25.5t26-10.5h119q17 0 28.5-11.5T680-520q0-17-11.5-28.5T640-560H522q-47 0-81 31t-39 77L364-80h-84Z"/>
    </Icon>
  );
});

IconMaterialEntFilled.displayName = 'OnesyIconMaterialEntFilled';

export default IconMaterialEntFilled;
