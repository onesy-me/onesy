import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotTouchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchW100Filled'

      short_name='DoNotTouch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M447-118q-23.41 0-43.71-10.5Q383-139 369-159L130-509q-2-2-1.5-4.5t2.5-4.5q11-11 26-11.5t28 8.5l147 102v-169L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5l-87-87q-19 21-44.5 34T654-118H447Zm171-360v-307q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v279h114v-228q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v379q0 19.69-18.5 27.34Q751-320 737-334L636-435q-8-8-13-19.28-5-11.28-5-23.72ZM332-745.79v-10.35q0-5.86 4.04-9.86 4.03-4 10-4 5.96 0 9.96 3.97 4 3.96 4 9.82v10.35q0 5.86-4.04 9.86-4.03 4-10 4-5.96 0-9.96-3.97-4-3.96-4-9.82ZM475-602v-223q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v223q0 6.1-4.04 10.05-4.03 3.95-10 3.95-5.96 0-9.96-4.03-4-4.02-4-9.97Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchW100Filled.displayName = 'OnesyIconMaterialDoNotTouchW100Filled';

export default IconMaterialDoNotTouchW100Filled;
