import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOtherAdmissionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherAdmissionFilled'

      short_name='OtherAdmission'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-210h60v-60h-60v60Zm110 0h60v-60h-60v60Zm110 0h60v-60h-60v60ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM280-600h400v-80H280v80Zm187 480H120v-720h720v348q-29-14-58.5-21t-61.5-7q-11 0-20.5.5T680-517v-3H280v80h245q-18 17-32.5 37T467-360H280v80h163q-2 10-2.5 19.5T440-240q0 33 6 61.5t21 58.5Z"/>
    </Icon>
  );
});

IconMaterialOtherAdmissionFilled.displayName = 'OnesyIconMaterialOtherAdmissionFilled';

export default IconMaterialOtherAdmissionFilled;
