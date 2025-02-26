import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4mpFilled'

      short_name='4mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-500h60v-60h40v-60h-40v-120h-60v120h-60v-120h-60v180h120v60ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial4mpFilled.displayName = 'OnesyIconMaterial4mpFilled';

export default IconMaterial4mpFilled;
