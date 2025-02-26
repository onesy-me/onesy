import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial7mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7mp'

      short_name='7mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-500h70l58-188v-52H400v60h104l-54 180ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial7mp.displayName = 'OnesyIconMaterial7mp';

export default IconMaterial7mp;
