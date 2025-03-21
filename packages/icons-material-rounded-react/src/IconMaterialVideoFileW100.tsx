import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoFileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFileW100'

      short_name='VideoFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-260h160q8 0 14-6t6-14v-64l50 26q8 4 15-.5t7-12.5v-58q0-8-7-12.5t-15-.5l-50 26v-64q0-8-6-14t-14-6H366q-8 0-14 6t-6 14v160q0 8 6 14t14 6Zm-94 128q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22v-460H602q-13 0-21.5-8.5T572-682ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialVideoFileW100.displayName = 'OnesyIconMaterialVideoFileW100';

export default IconMaterialVideoFileW100;
