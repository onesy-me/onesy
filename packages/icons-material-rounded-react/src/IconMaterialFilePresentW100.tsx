import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilePresentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentW100'

      short_name='FilePresent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-241q51 0 85.5-38t34.5-91v-176q0-6-4-10t-10-4q-6 0-10 4t-4 10v176q0 41-26.5 71T480-269q-39 0-65.5-30T388-370v-218q0-18 11-31.5t28-13.5q17 0 28 13.5t11 31.5v204q0 6 4 10t10 4q6 0 10-4t4-10v-204q0-29-19-51t-48-22q-29 0-48 22t-19 51v218q0 53 34.5 91t85.5 38ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h314l162 162v474q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22v-460H602q-13 0-21.5-8.5T572-682v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10Zm-32-640v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialFilePresentW100.displayName = 'OnesyIconMaterialFilePresentW100';

export default IconMaterialFilePresentW100;
