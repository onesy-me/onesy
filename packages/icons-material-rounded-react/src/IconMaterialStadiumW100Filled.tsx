import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStadiumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiumW100Filled'

      short_name='Stadium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M196-704v-80q0-8 7-12.5t15-.5l79 40q8 5 8 13t-8 13l-79 40q-8 4-15-.5t-7-12.5Zm480 0v-80q0-8 7-12.5t15-.5l79 40q8 5 8 13t-8 13l-79 40q-8 4-15-.5t-7-12.5Zm-224-32v-80q0-8 7-12.5t15-.5l79 40q8 5 8 13t-8 13l-79 40q-8 4-15-.5t-7-12.5Zm-92 616q-107-9-170.5-33.5T126-210v-320q0-20 26-37t73-29.5q47-12.5 112-20t143-7.5q78 0 143 7.5t112 20q47 12.5 73 29.5t26 37v320q0 32-63 56.5T600-120q-11 1-18.5-6t-7.5-18v-52q0-39-27.5-66.5T480-290q-39 0-66.5 27.5T386-196v51q0 11-7.5 18.5T360-120Zm120-344q100 0 191.5-17T806-527q-17-26-101.5-47.5T480-596q-140 0-224.5 21.5T154-527q43 29 123 46t203 17Z"/>
    </Icon>
  );
});

IconMaterialStadiumW100Filled.displayName = 'OnesyIconMaterialStadiumW100Filled';

export default IconMaterialStadiumW100Filled;
