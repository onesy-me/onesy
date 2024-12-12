import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kFilled'

      short_name='4k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-140 0h60v-60h40v-60h-40v-120h-60v120h-60v-120h-60v180h120v60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial4kFilled.displayName = 'OnesyIconMaterial4kFilled';

export default IconMaterial4kFilled;
