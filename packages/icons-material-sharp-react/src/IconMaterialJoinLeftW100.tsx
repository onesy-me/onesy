import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinLeftW100'

      short_name='JoinLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-252q-95 0-161.5-66.5T92-480q0-95 66.5-161.5T320-708q39 0 74.5 12t64.5 35q-36 36-55.5 83T384-480q0 51 19.5 98t55.5 83q-29 23-64.5 35T320-252Zm320 0q-39 0-74.5-12T501-299q5-5 9.5-10.5T520-320q25 19 55.5 29.5T640-280q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680q-34 0-64.5 10.5T520-640q-5-5-9.5-10.5T501-661q29-23 64.5-35t74.5-12q95 0 161.5 66.5T868-480q0 95-66.5 161.5T640-252Zm-160-66q-32-32-50-74t-18-88q0-46 18-88t50-74q32 32 50 74t18 88q0 46-18 88t-50 74Z"/>
    </Icon>
  );
});

IconMaterialJoinLeftW100.displayName = 'OnesyIconMaterialJoinLeftW100';

export default IconMaterialJoinLeftW100;
