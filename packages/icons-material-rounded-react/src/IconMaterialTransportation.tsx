import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransportation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Transportation'

      short_name='Transportation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-320q-72 0-127-45t-69-115h-79q-17 0-28.5-11.5T445-520q0-17 11.5-28.5T485-560h79q5-22 13.5-42t22.5-38H388q-17 0-28.5-11.5T348-680q0-17 11.5-28.5T388-720h254l-44-120H480q-17 0-28.5-11.5T440-880q0-17 11.5-28.5T480-920h118q26 0 46 14.5t29 38.5l54 147h33q83 0 141.5 58.5T960-520q0 83-58.5 141.5T760-320Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35h-3l25 69q6 16-1 31.5T758-519q-16 5-31-2t-21-23l-24-67q-20 17-31 41t-11 50q0 50 35 85t85 35ZM280-40q-50 0-85-35t-35-85H40q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h151q15-15 38-27.5t51-12.5q25 0 48 10t41 30h111v-80H40q-17 0-28.5-11.5T0-360q0-17 11.5-28.5T40-400h40v-120H40q-17 0-28.5-11.5T0-560q0-17 11.5-28.5T40-600h217q11 0 20.5 5t14.5 14l108 181h80q33 0 56.5 23.5T560-320v80q0 33-23.5 56.5T480-160h-80q0 50-35 85t-85 35ZM160-400h147l-72-120h-75v120Zm120 280q17 0 28.5-11.5T320-160q0-17-11.5-28.5T280-200q-17 0-28.5 11.5T240-160q0 17 11.5 28.5T280-120Zm-40-160Z"/>
    </Icon>
  );
});

IconMaterialTransportation.displayName = 'OnesyIconMaterialTransportation';

export default IconMaterialTransportation;
