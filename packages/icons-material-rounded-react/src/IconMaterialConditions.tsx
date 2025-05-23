import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConditions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Conditions'

      short_name='Conditions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-720q-33 0-56.5-23.5T320-800q0-33 23.5-56.5T400-880q33 0 56.5 23.5T480-800q0 33-23.5 56.5T400-720Zm260 480q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm96 52q-22 14-46 21t-50 7q-75 0-127.5-52.5T480-340q0-75 52.5-127.5T660-520q75 0 127.5 52.5T840-340q0 26-7 50t-21 46l80 80q11 11 11 28t-11 28q-11 11-28 11t-28-11l-80-80Zm-316-13q15 24 35.5 44t44.5 36v1q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-81Zm-80-119v200q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120v-480q-50-4-99-11t-98-18q-17-4-27.5-19T50-680q5-17 20.5-25t32.5-4q73 17 147.5 23t149.5 6q75 0 149.5-6T697-709q17-4 32.5 4t20.5 25q5 17-5.5 32T717-629q-49 11-98 18t-99 11v41q-54 35-87 92.5T400-340v10q0 5 1 10h-41Z"/>
    </Icon>
  );
});

IconMaterialConditions.displayName = 'OnesyIconMaterialConditions';

export default IconMaterialConditions;
