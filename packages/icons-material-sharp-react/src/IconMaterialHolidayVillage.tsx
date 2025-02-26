import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHolidayVillage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillage'

      short_name='HolidayVillage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-400l240-240 240 240v400H80Zm80-80h120v-120h80v120h120v-287L320-687 160-527v287Zm120-200v-80h80v80h-80Zm360 280v-433L433-800h113l174 174v466h-80Zm160 0v-499L659-800h113l108 108v532h-80Zm-640-80h320-320Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillage.displayName = 'OnesyIconMaterialHolidayVillage';

export default IconMaterialHolidayVillage;
