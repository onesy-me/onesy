import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestAudioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudioFilled'

      short_name='NestAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-66 0-113-47t-47-113v-360q0-83 58.5-141.5T400-840h160q83 0 141.5 58.5T760-640v360q0 66-47 113t-113 47H360Zm0-320q17 0 28.5-11.5T400-480q0-17-11.5-28.5T360-520q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm120 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm120 0q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520q-17 0-28.5 11.5T560-480q0 17 11.5 28.5T600-440Z"/>
    </Icon>
  );
});

IconMaterialNestAudioFilled.displayName = 'OnesyIconMaterialNestAudioFilled';

export default IconMaterialNestAudioFilled;
