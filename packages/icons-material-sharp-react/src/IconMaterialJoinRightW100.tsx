import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinRightW100'

      short_name='JoinRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-252q-39 0-74.5-12T501-299q36-36 55.5-83t19.5-98q0-51-19.5-98T501-661q29-23 64.5-35t74.5-12q95 0 161.5 66.5T868-480q0 95-66.5 161.5T640-252Zm-320 0q-95 0-161.5-66.5T92-480q0-95 66.5-161.5T320-708q39 0 74.5 12t64.5 35q-5 5-9.5 10.5T440-640q-25-19-55.5-29.5T320-680q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280q34 0 64.5-10.5T440-320q5 5 9.5 10.5T459-299q-29 23-64.5 35T320-252Zm160-66q-32-32-50-74t-18-88q0-46 18-88t50-74q32 32 50 74t18 88q0 46-18 88t-50 74Z"/>
    </Icon>
  );
});

IconMaterialJoinRightW100.displayName = 'OnesyIconMaterialJoinRightW100';

export default IconMaterialJoinRightW100;
