import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPatientListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PatientListFilled'

      short_name='PatientList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM400-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T640-360q56 0 106.5 13.5T842-306q18 11 28 30t10 40v76H400ZM120-400v-80h320v80H120Zm0-320v-80h480v80H120Zm324 160H120v-80h360q-14 17-22.5 37T444-560Z"/>
    </Icon>
  );
});

IconMaterialPatientListFilled.displayName = 'OnesyIconMaterialPatientListFilled';

export default IconMaterialPatientListFilled;
