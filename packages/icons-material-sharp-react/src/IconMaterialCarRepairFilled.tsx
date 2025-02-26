import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarRepairFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRepairFilled'

      short_name='CarRepair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-120H160v-80h640v80H520v120h-80Zm-80-420q17 0 28.5-11.5T400-540q0-17-11.5-28.5T360-580q-17 0-28.5 11.5T320-540q0 17 11.5 28.5T360-500Zm240 0q17 0 28.5-11.5T640-540q0-17-11.5-28.5T600-580q-17 0-28.5 11.5T560-540q0 17 11.5 28.5T600-500ZM200-616l77-224h406l77 224v296h-80v-80H280v80h-80v-296Zm106-64h348l-28-80H334l-28 80Z"/>
    </Icon>
  );
});

IconMaterialCarRepairFilled.displayName = 'OnesyIconMaterialCarRepairFilled';

export default IconMaterialCarRepairFilled;
