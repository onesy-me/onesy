import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial24mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='24mpFilled'

      short_name='24mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-500h180v-60H320v-40h120v-140H260v60h120v40H260v140Zm380 0h60v-60h40v-60h-40v-120h-60v120h-60v-120h-60v180h120v60ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial24mpFilled.displayName = 'OnesyIconMaterial24mpFilled';

export default IconMaterial24mpFilled;
