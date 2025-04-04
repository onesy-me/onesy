import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnlicenseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnlicenseFilled'

      short_name='Unlicense'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m722-352-56-56q26-32 40-70t14-82q0-100-70-170t-170-70q-44 0-82 14t-70 40l-56-56q42-36 95-57t113-21q133 0 226.5 93.5T800-560q0 60-21 113t-57 95ZM580-494 414-660q14-9 31-14.5t35-5.5q50 0 85 35t35 85q0 18-5.5 35T580-494ZM480-120 293-58q-20 7-36.5-5T240-95v-253q-38-44-59-97t-21-115q0-29 4.5-55.5T180-668l-96-96q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-27.5 11.5T764-83l-44-43v31q0 20-16.5 32T667-58l-187-62Zm0-200q11 0 21-1t21-3L244-602q-2 11-3 21t-1 21q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialUnlicenseFilled.displayName = 'OnesyIconMaterialUnlicenseFilled';

export default IconMaterialUnlicenseFilled;
