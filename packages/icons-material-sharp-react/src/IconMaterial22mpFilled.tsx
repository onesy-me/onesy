import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial22mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='22mpFilled'

      short_name='22mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-500h180v-60H320v-40h120v-140H260v60h120v40H260v140Zm260 0h180v-60H580v-40h120v-140H520v60h120v40H520v140ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial22mpFilled.displayName = 'OnesyIconMaterial22mpFilled';

export default IconMaterial22mpFilled;
