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
      <path d="M610-210q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm110 0q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm110 0q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v218q0 18-15 28t-32 4q-17-5-35.5-7.5T720-520q-11 0-20.5.5T680-517q-9-2-20-2.5t-20-.5H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440h205q-18 17-32.5 37T467-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280h123q-2 10-2.5 19.5T440-240q0 20 2 38t7 35q5 17-5 32t-27 15H200Z"/>
    </Icon>
  );
});

IconMaterialOtherAdmissionFilled.displayName = 'OnesyIconMaterialOtherAdmissionFilled';

export default IconMaterialOtherAdmissionFilled;
