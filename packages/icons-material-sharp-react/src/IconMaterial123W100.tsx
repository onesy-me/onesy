import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial123W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='123W100'

      short_name='123'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-376v-180h-60v-28h88v208h-28Zm134 0v-118h122v-62H374v-28h150v118H402v62h122v28H374Zm236 0v-28h122v-62h-82v-28h82v-62H610v-28h150v208H610Z"/>
    </Icon>
  );
});

IconMaterial123W100.displayName = 'OnesyIconMaterial123W100';

export default IconMaterial123W100;
