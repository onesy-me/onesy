import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpo2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2W100'

      short_name='Spo2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-212v-208h148v208H482Zm28-28h92v-152h-92v152ZM690-96v-118h122v-62H690v-28h150v118H718v62h122v28H690Zm-308-37q-109-7-179.5-85T132-408q0-82 66.5-182.5T400-812q91 81 151.5 155T641-520h-30q-28-56-80.5-119.5T400-774Q281-665 220.5-573T160-408q0 102 62 171t160 76v28Zm4-275Z"/>
    </Icon>
  );
});

IconMaterialSpo2W100.displayName = 'OnesyIconMaterialSpo2W100';

export default IconMaterialSpo2W100;
