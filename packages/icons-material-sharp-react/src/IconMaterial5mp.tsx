import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5mp'

      short_name='5mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-500h180v-140H460v-40h120v-60H400v140h120v40H400v60ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial5mp.displayName = 'OnesyIconMaterial5mp';

export default IconMaterial5mp;
