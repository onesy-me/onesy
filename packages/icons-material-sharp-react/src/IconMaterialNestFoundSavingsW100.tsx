import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestFoundSavingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavingsW100'

      short_name='NestFoundSavings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-114-98-98H172v-616h616v616H578l-98 98ZM200-240h194l86 86 86-86h194v-560H200v560Zm280-280Zm0 174q75 0 124.5-52.5T654-520v-174H480q-70 0-122 49.5T306-520q0 26 10 54t29 57l-41 40 20 19 38-38q27 20 58.5 31t59.5 11Zm0-28q-25 0-50.5-9.5T385-410l138-137-21-20-137 137q-11-18-21-43t-10-47q0-63 43.5-104.5T480-666h146v146q0 60-43 103t-103 43Zm-36-115Z"/>
    </Icon>
  );
});

IconMaterialNestFoundSavingsW100.displayName = 'OnesyIconMaterialNestFoundSavingsW100';

export default IconMaterialNestFoundSavingsW100;
