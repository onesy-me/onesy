import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonRaisedHandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRaisedHandFilled'

      short_name='PersonRaisedHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-40v-80h800v80H80Zm80-120v-240q-33-54-51-114.5T91-638q0-61 15.5-120T143-874q8-21 26-33.5t40-12.5q31 0 53 21t18 50l-11 91q-6 48 8.5 91t43.5 75.5q29 32.5 70 52t89 19.5q60 0 120.5 12.5T706-472q45 23 69.5 58.5T800-326v166H400v-37q0-34 23-58.5t57-24.5h160v-80H480q-67 0-113.5 48T320-197v37H160Zm320-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialPersonRaisedHandFilled.displayName = 'OnesyIconMaterialPersonRaisedHandFilled';

export default IconMaterialPersonRaisedHandFilled;
