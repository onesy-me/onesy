import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDescriptionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionW100'

      short_name='Description'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-266h240q6 0 10-4t4-10q0-6-4-10t-10-4H360q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-160h240q6 0 10-4t4-10q0-6-4-10t-10-4H360q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-88 294q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22v-460H602q-13 0-21.5-8.5T572-682ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialDescriptionW100.displayName = 'OnesyIconMaterialDescriptionW100';

export default IconMaterialDescriptionW100;
