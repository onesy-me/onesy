import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAudioFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioFileW100Filled'

      short_name='AudioFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M429.83-216q31.17 0 52.67-21.38T504-290v-162h106v-56H476v166q-9-11-20.5-16.5T430-364q-31.24 0-52.62 21.33T356-290.17q0 31.17 21.33 52.67t52.5 21.5ZM212-132v-696h374l162 162v534H212Zm360-520h148L572-800v148Z"/>
    </Icon>
  );
});

IconMaterialAudioFileW100Filled.displayName = 'OnesyIconMaterialAudioFileW100Filled';

export default IconMaterialAudioFileW100Filled;
