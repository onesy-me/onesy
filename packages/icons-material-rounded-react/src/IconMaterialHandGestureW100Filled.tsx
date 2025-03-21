import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandGestureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureW100Filled'

      short_name='HandGesture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M243-104q-57.68 0-98.34-40.66Q104-185.32 104-243q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03 0 45.99 32.51 78.49Q197.01-132 243-132q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4Zm620.05-609q-6.05 0-10.05-3.97-4-3.96-4-10.03 0-42-29.5-71.5T748-828q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4 54 0 91.5 37.5T877-727q0 6.07-3.95 10.03-3.96 3.97-10 3.97ZM447-118q-23.41 0-43.71-10.5Q383-139 369-159L130-509q-2-2-1.5-4.5t2.5-4.5q11-11 26-11.5t28 8.5l147 102v-326q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v239h115v-319q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v319h115v-279q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v279h114v-228q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v482q0 56-39 95t-95 39H447Z"/>
    </Icon>
  );
});

IconMaterialHandGestureW100Filled.displayName = 'OnesyIconMaterialHandGestureW100Filled';

export default IconMaterialHandGestureW100Filled;
