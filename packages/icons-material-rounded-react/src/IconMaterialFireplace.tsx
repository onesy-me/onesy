import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireplace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fireplace'

      short_name='Fireplace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-282q13 11 27.5 15.5T480-262q29 0 52.5-18.5T560-334q5-47-29-69.5T480-462q-5 14-5 26t3 26q3 17 7 32t1 32q-5 18-22 37t-40 27ZM80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160q-33 0-56.5-23.5T80-160Zm400-80q50 0 85-35t35-85q0-24-10-40t-28-30q-38-27-63.5-56.5T458-546q-44 35-71 79.5T360-362q0 35 36 78.5t84 43.5Zm-320 80h80v-40q0-17 11.5-28.5T280-240h50q-23-29-36.5-61T280-362q0-105 48-168.5T463-646q10-6 20-6t19 5q9 5 15 14t7 20q2 34 29 66t53 51q33 24 53.5 56.5T680-360q0 35-11 64.5T640-240h40q17 0 28.5 11.5T720-200v40h80v-640H160v640Zm320-80Z"/>
    </Icon>
  );
});

IconMaterialFireplace.displayName = 'OnesyIconMaterialFireplace';

export default IconMaterialFireplace;
