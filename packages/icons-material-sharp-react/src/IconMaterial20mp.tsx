import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial20mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='20mp'

      short_name='20mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-500h180v-60H320v-40h120v-140H260v60h120v40H260v140Zm260 0h180v-240H520v240Zm60-60v-120h60v120h-60ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial20mp.displayName = 'OnesyIconMaterial20mp';

export default IconMaterial20mp;
