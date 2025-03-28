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
      <path d="M680-480v-152l-92 92-28-28 112-112-112-112 28-28 92 92v-152h20l114 116-86 84 86 86-114 114h-20Zm40-76 38-38-38-38v76Zm0-172 38-36-38-38v74Zm78 608q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM241-600l66-66-17-94h-89q5 45 15 84.5t25 75.5Zm358 358q40 17 80.5 27t80.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeaker.displayName = 'OnesyIconMaterialPhoneBluetoothSpeaker';

export default IconMaterialPhoneBluetoothSpeaker;
