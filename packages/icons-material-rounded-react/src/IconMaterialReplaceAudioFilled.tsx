import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplaceAudioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceAudioFilled'

      short_name='ReplaceAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-640H640q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720h36q-39-39-90-59.5T480-800q-71 0-133 33.5T247-675q-14 20-30 23t-30-4q-14-7-19.5-21t2.5-27q48-81 130.5-128.5T480-880q82 0 155.5 35T760-746v-94q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840v160q0 17-11.5 28.5T800-640ZM420-80q-58 0-99-41t-41-99q0-58 41-99t99-41q16 0 31 3t29 10v-213h200v80H560v260q0 58-41 99t-99 41Z"/>
    </Icon>
  );
});

IconMaterialReplaceAudioFilled.displayName = 'OnesyIconMaterialReplaceAudioFilled';

export default IconMaterialReplaceAudioFilled;
