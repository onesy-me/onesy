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
      <path d="M868-480q0 95-66.5 161.5T640-252q-39 0-74.5-12T501-299q36-36 55.5-83t19.5-98q0-51-19.5-98T501-661q29-23 64.5-35t74.5-12q95 0 161.5 66.5T868-480ZM480-334q-6 0-12-3t-11-8q-21-29-33-63.5T412-480q0-37 12-71.5t33-63.5q5-5 11-8t12-3q6 0 12 3t11 8q21 29 33 63.5t12 71.5q0 37-12 71.5T503-345q-5 5-11 8t-12 3ZM92-480q0-45 17.5-87t49.5-74q54-54 129-65.5T429-681q5 3 7 9t-1 11q-3 5-9 6.5t-11-1.5q-58-32-123-22.5T179-621q-28 28-43.5 64.5T120-480q0 40 15.5 76.5T179-339q48 48 113 57.5T415-304q5-3 11-1.5t9 6.5q3 5 1 11t-7 9q-66 37-141 25.5T159-319q-32-32-49.5-74T92-480Z"/>
    </Icon>
  );
});

IconMaterialJoinRightW100.displayName = 'OnesyIconMaterialJoinRightW100';

export default IconMaterialJoinRightW100;
