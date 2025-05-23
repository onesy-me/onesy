import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIndeterminateQuestionBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateQuestionBoxFilled'

      short_name='IndeterminateQuestionBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-120q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v120h120q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H200Zm560 0H640q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h120v-120q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320v120q0 33-23.5 56.5T760-120ZM120-760q0-33 23.5-56.5T200-840h120q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760H200v120q0 17-11.5 28.5T160-600q-17 0-28.5-11.5T120-640v-120Zm720 0v120q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640v-120H640q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h120q33 0 56.5 23.5T840-760ZM480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm0-412q26 0 45.5 16t19.5 41q0 23-14.5 41T499-521q-26 23-39.5 43.5T444-428q-1 14 10 24.5t26 10.5q14 0 25.5-10t13.5-25q2-17 12-30t29-32q35-35 46.5-56.5T618-598q0-54-39-88t-99-34q-41 0-73.5 18.5T357-649q-6 12-.5 24.5T375-607q13 5 26.5 0t21.5-16q11-14 25.5-21.5T480-652Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateQuestionBoxFilled.displayName = 'OnesyIconMaterialIndeterminateQuestionBoxFilled';

export default IconMaterialIndeterminateQuestionBoxFilled;
