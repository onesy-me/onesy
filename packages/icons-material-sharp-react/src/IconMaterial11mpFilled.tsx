import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial11mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='11mpFilled'

      short_name='11mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-500h60v-240H320v60h60v180Zm200 0h60v-240H520v60h60v180ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial11mpFilled.displayName = 'OnesyIconMaterial11mpFilled';

export default IconMaterial11mpFilled;
