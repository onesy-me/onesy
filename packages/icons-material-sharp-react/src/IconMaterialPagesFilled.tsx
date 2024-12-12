import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPagesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesFilled'

      short_name='Pages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm243-190 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/>
    </Icon>
  );
});

IconMaterialPagesFilled.displayName = 'OnesyIconMaterialPagesFilled';

export default IconMaterialPagesFilled;
