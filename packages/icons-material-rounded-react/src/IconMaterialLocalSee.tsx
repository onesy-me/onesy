import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalSee = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSee'

      short_name='LocalSee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400ZM160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h126l61-67q6-6 13.5-9t15.5-3q26 0 37 23.5t-7 43.5l-60 66q-11 13-26.5 19.5T287-640H160v480h640v-160q0-17 11.5-28.5T840-360q17 0 28.5 11.5T880-320v160q0 33-23.5 56.5T800-80H160Zm320-140q42 0 78.5-18t62.5-50q11-14 10-30.5T617-346q-14-11-30.5-9.5T560-340q-14 19-35 29.5T480-300q-42 0-71-29t-29-71q0-14 3.5-27.5T395-453q8-12 17.5-21.5T435-490q14-8 18.5-23.5T450-543q-8-14-24.5-19t-30.5 3q-22 12-39 29.5T326-492q-13 20-19.5 43.5T300-400q0 75 52.5 127.5T480-220Zm240-740q-95 0-167.5 66.5T480-714q0 98 73.5 183T693-385q6 5 12.5 7.5T720-375q8 0 15-2.5t12-7.5q66-61 139.5-146T960-714q0-113-72.5-179.5T720-960Zm0 493q-104-98-132-158t-28-89q0-81 50.5-123.5T720-880q59 0 109.5 42.5T880-714q0 29-28 89T720-467Zm0-207Zm-74 74 28-91-74-59h91l29-90 29 90h91l-74 59 28 91-74-56-74 56Z"/>
    </Icon>
  );
});

IconMaterialLocalSee.displayName = 'OnesyIconMaterialLocalSee';

export default IconMaterialLocalSee;
