import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneInTalkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalkW100'

      short_name='PhoneInTalk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M764-508q-9-112-87.5-190.5T486-786v-28q62 4 116 29t95 66q41 41 66 95t29 116h-28Zm-160 0q-9-45-41-77.5T486-626v-28q57 8 97 48.5t49 97.5h-28Zm155 336q-103 0-207.5-48.5T358-358q-88-89-137-194.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29ZM246-566l89-80-25-114H200q0 46 11.5 94.5T246-566Zm332 326q36 19 84.5 29.5T760-200v-109l-96-19-86 88ZM246-566Zm332 326Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalkW100.displayName = 'OnesyIconMaterialPhoneInTalkW100';

export default IconMaterialPhoneInTalkW100;
