import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableLampFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLampFilled'

      short_name='TableLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-120q-17 0-28.5-11.5T520-160q0-17 11.5-28.5T560-200h240q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H560Zm120-120q-17 0-28.5-11.5T640-280v-360q0-17-11.5-28.5T600-680H440v120q0 17-11.5 28.5T400-520H160q-22 0-34-18t-3-38l95-216q10-22 29.5-35t43.5-13h69q33 0 56.5 23.5T440-760h160q50 0 85 35t35 85v360q0 17-11.5 28.5T680-240Z"/>
    </Icon>
  );
});

IconMaterialTableLampFilled.displayName = 'OnesyIconMaterialTableLampFilled';

export default IconMaterialTableLampFilled;
