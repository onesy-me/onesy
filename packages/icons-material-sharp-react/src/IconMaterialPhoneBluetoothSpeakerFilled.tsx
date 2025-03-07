import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneBluetoothSpeakerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneBluetoothSpeakerFilled'

      short_name='PhoneBluetoothSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-480v-152l-92 92-28-28 112-112-112-112 28-28 92 92v-152h20l114 116-86 84 86 86-114 114h-20Zm40-76 38-38-38-38v76Zm0-172 38-36-38-38v74Zm78 608q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeakerFilled.displayName = 'OnesyIconMaterialPhoneBluetoothSpeakerFilled';

export default IconMaterialPhoneBluetoothSpeakerFilled;
