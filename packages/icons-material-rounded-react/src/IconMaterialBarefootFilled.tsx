import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarefootFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarefootFilled'

      short_name='Barefoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-640q-17 0-28.5-11.5T180-680q0-17 11.5-28.5T220-720q17 0 28.5 11.5T260-680q0 17-11.5 28.5T220-640ZM400-80q-66 0-113-47t-47-113v-240q0-100 70-170t170-70h73q69 0 118 46.5T720-559q0 46-24.5 84.5T629-416q-32 15-50.5 44.5T560-307v67q0 67-46.5 113.5T400-80Zm-80-640q-17 0-28.5-11.5T280-760v-20q0-17 11.5-28.5T320-820q17 0 28.5 11.5T360-780v20q0 17-11.5 28.5T320-720Zm80 560q33 0 56.5-23.5T480-240v-67q0-58 30.5-107t83.5-74q21-10 33.5-29.5T640-560q0-35-26-57.5T553-640h-73q-66 0-113 47t-47 113v240q0 33 23.5 56.5T400-160Zm40-600q-17 0-28.5-11.5T400-800v-20q0-17 11.5-28.5T440-860q17 0 28.5 11.5T480-820v20q0 17-11.5 28.5T440-760Zm120 0q-17 0-28.5-11.5T520-800v-40q0-17 11.5-28.5T560-880q17 0 28.5 11.5T600-840v40q0 17-11.5 28.5T560-760Zm140 40q-25 0-42.5-17.5T640-780v-40q0-25 17.5-42.5T700-880q25 0 42.5 17.5T760-820v40q0 25-17.5 42.5T700-720Z"/>
    </Icon>
  );
});

IconMaterialBarefootFilled.displayName = 'OnesyIconMaterialBarefootFilled';

export default IconMaterialBarefootFilled;
