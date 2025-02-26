import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShuffleOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnFilled'

      short_name='ShuffleOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-40v-880h880v880H40Zm520-120h240v-240h-80v102L594-424l-57 57 127 127H560v80Zm-344 0 504-504v104h80v-240H560v80h104L160-216l56 56Zm151-377 56-56-207-207-56 56 207 207Z"/>
    </Icon>
  );
});

IconMaterialShuffleOnFilled.displayName = 'OnesyIconMaterialShuffleOnFilled';

export default IconMaterialShuffleOnFilled;
