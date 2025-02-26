import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2mp'

      short_name='2mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm150-280h180v-60H450v-40h120v-140H390v60h120v40H390v140Zm150 280h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial2mp.displayName = 'OnesyIconMaterial2mp';

export default IconMaterial2mp;
