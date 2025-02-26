import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3mpFilled'

      short_name='3mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-500h180v-240H400v60h120v40h-80v40h80v40H400v60ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial3mpFilled.displayName = 'OnesyIconMaterial3mpFilled';

export default IconMaterial3mpFilled;
