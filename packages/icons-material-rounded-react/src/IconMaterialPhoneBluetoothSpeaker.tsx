import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneBluetoothSpeaker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneBluetoothSpeaker'

      short_name='PhoneBluetoothSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-508v-124l-78 78q-6 6-14 6t-14-6q-6-6-6-14t6-14l98-98-98-98q-6-6-6-14t6-14q6-6 14-6t14 6l78 78v-123q0-14 12-19t22 5l72 72q12 12 11.5 29T785-736l-57 56 58 58q12 12 12 28t-12 28l-72 72q-10 10-22 5t-12-19Zm40-48 38-38-38-38v76Zm0-172 38-36-38-38v74Zm78 608q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeaker.displayName = 'OnesyIconMaterialPhoneBluetoothSpeaker';

export default IconMaterialPhoneBluetoothSpeaker;
