import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPregnantWoman = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnantWoman'

      short_name='PregnantWoman'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80v-200h-80v-280q0-50 35-85t85-35q50 0 85 35t35 85q36 15 58 48t22 72v160H520v200H400Zm40-640q-33 0-56.5-23.5T360-800q0-33 23.5-56.5T440-880q33 0 56.5 23.5T520-800q0 33-23.5 56.5T440-720Z"/>
    </Icon>
  );
});

IconMaterialPregnantWoman.displayName = 'OnesyIconMaterialPregnantWoman';

export default IconMaterialPregnantWoman;
