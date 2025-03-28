import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTibiaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaW100Filled'

      short_name='Tibia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-614 312-714q-10-10-15-21.5t-5-25.5q0-28 19-47.5t47-19.5h244q27 0 46 19.5t19 46.5q0 14-5.5 26.5T646-712l-98 97v265l100 99q9 10 14.5 22.5T668-202q0 29-20 49t-49 20q-14 0-26-5.5T551-153q-14-14-32.5-22t-38.5-8q-20 0-38 8t-32 22q-10 9-22.5 14.5T361-133q-29 0-48.5-20T292-202q0-14 5-26.5t15-21.5l100-99v-265Z"/>
    </Icon>
  );
});

IconMaterialTibiaW100Filled.displayName = 'OnesyIconMaterialTibiaW100Filled';

export default IconMaterialTibiaW100Filled;
