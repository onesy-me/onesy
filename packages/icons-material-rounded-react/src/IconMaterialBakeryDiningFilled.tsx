import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBakeryDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningFilled'

      short_name='BakeryDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m835-252-99-34 78-215 85 175q14 27-12 55t-52 19Zm-251-38 43-374q2-15 13.5-20.5t27.5-.5l100 37q14 6 18.5 18t-.5 26L673-290h-89Zm-296 0L175-604q-5-14-.5-26.5T193-648l100-37q14-6 26.5-.5T334-664l42 374h-88Zm-172 38q-26 8-47-19.5T62-326l86-175 77 215-109 34Zm320-38-48-430q-2-17 9.5-28.5T426-760h108q17 0 28.5 11.5T572-720l-48 430h-88Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningFilled.displayName = 'OnesyIconMaterialBakeryDiningFilled';

export default IconMaterialBakeryDiningFilled;
