import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalCarWashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCarWashFilled'

      short_name='LocalCarWash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-760q-25 0-42.5-17.5T420-820q0-18 8-32t37-49q6-8 15-8t15 8q29 35 37 49t8 32q0 25-17.5 42.5T480-760Zm-200 0q-25 0-42.5-17.5T220-820q0-18 8-32t37-49q6-8 15-8t15 8q29 35 37 49t8 32q0 25-17.5 42.5T280-760Zm400 0q-25 0-42.5-17.5T620-820q0-18 8-32t37-49q6-8 15-8t15 8q29 35 37 49t8 32q0 25-17.5 42.5T680-760ZM240-120v20q0 25-17.5 42.5T180-40q-25 0-42.5-17.5T120-100v-286q0-7 1-14t3-13l75-213q8-24 29-39t47-15h410q26 0 47 15t29 39l75 213q2 6 3 13t1 14v286q0 25-17.5 42.5T780-40q-25 0-42.5-17.5T720-100v-20H240Zm-8-360h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm360 0q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Z"/>
    </Icon>
  );
});

IconMaterialLocalCarWashFilled.displayName = 'OnesyIconMaterialLocalCarWashFilled';

export default IconMaterialLocalCarWashFilled;
