import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneMissedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedW100'

      short_name='PhoneMissed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M163-179 52-288l21-22q84-86 192.5-128T480-480q106 0 213.5 42.5T886-310l22 22-111 109-131-99v-140q-48-17-95-25.5t-91-8.5q-44 0-91 8.5T294-418v140l-131 99Zm103-229q-50 23-96 54t-78 64l74 74 100-76v-116Zm428 0v114l100 78 76-72q-39-36-82-66t-94-54Zm-428 0Zm428 0ZM481-540 281-740v140h-28v-188h188v28H301l180 180 209-209 20 20-229 229Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedW100.displayName = 'OnesyIconMaterialPhoneMissedW100';

export default IconMaterialPhoneMissedW100;
