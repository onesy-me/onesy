import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneBluetoothSpeakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneBluetoothSpeakerW100'

      short_name='PhoneBluetoothSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M644-460v-160l-98 98-20-20 112-112-112-112 20-20 98 98v-160h12l108 108-86 86 86 86-108 108h-12Zm28-56 52-52-52-52v104Zm0-172 52-52-52-52v104Zm87 516q-103 0-207.5-48.5T358-358q-88-89-137-194.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29ZM246-566l89-80-25-114H200q0 46 11.5 94.5T246-566Zm332 326q36 19 84.5 29.5T760-200v-109l-96-19-86 88ZM246-566Zm332 326Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeakerW100.displayName = 'OnesyIconMaterialPhoneBluetoothSpeakerW100';

export default IconMaterialPhoneBluetoothSpeakerW100;
