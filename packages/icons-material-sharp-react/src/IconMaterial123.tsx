import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial123 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='123'

      short_name='123'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-360v-180h-60v-60h120v240h-60Zm140 0v-140h120v-40H360v-60h180v140H420v40h120v60H360Zm240 0v-60h120v-40h-80v-40h80v-40H600v-60h180v240H600Z"/>
    </Icon>
  );
});

IconMaterial123.displayName = 'OnesyIconMaterial123';

export default IconMaterial123;
