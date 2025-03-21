import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFootprintW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FootprintW100'

      short_name='Footprint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M315-292q-47 0-75.5-38T212-431v-9l-26-41q-23-36-38.5-92T132-680q0-81 36.5-134.5T260-868q54 0 91 54.5T388-680q0 51-16.5 103.5T339-489l21 35q13 21 20.5 43t7.5 38q0 35-20.5 58T315-292Zm-86-174 79-21q15-32 33.5-88.5T360-680q0-66-29-113t-71-47q-42 0-71 47t-29 113q0 56 19 114.5t50 99.5Zm86 146q20 0 32.5-15t12.5-38q0-17-9.5-40T323-462l-83 22q0 56 20 88t55 32ZM645-92q-32 0-52.5-23T572-173q0-16 7.5-38t20.5-43l21-35q-15-34-32-87t-17-104q0-79 37-133.5t91-54.5q55 0 91.5 53.5T828-480q0 51-15 106t-39 93l-26 41v10q1 60-28 99t-75 39Zm82-168q42-65 57.5-112T800-480q0-66-29-113t-71-47q-42 0-71 47t-29 113q0 48 19 104t33 89l75 27Zm-82 140q33 0 54-31t21-82l-82-30q-11 20-24.5 43.5T600-173q0 21 13.5 37t31.5 16Z"/>
    </Icon>
  );
});

IconMaterialFootprintW100.displayName = 'OnesyIconMaterialFootprintW100';

export default IconMaterialFootprintW100;
