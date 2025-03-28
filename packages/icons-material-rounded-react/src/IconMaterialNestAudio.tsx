import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestAudio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudio'

      short_name='NestAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-66 0-113-47t-47-113v-360q0-83 58.5-141.5T400-840h160q83 0 141.5 58.5T760-640v360q0 66-47 113t-113 47H360Zm0-80h240q33 0 56.5-23.5T680-280v-360q0-50-35-85t-85-35H400q-50 0-85 35t-35 85v360q0 33 23.5 56.5T360-200Zm0-240q17 0 28.5-11.5T400-480q0-17-11.5-28.5T360-520q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm120 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm120 0q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520q-17 0-28.5 11.5T560-480q0 17 11.5 28.5T600-440Zm-120-40Z"/>
    </Icon>
  );
});

IconMaterialNestAudio.displayName = 'OnesyIconMaterialNestAudio';

export default IconMaterialNestAudio;
