import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOn'

      short_name='RepeatOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40q-33 0-56.5-23.5T40-120v-720q0-33 23.5-56.5T120-920h720q33 0 56.5 23.5T920-840v720q0 33-23.5 56.5T840-40H120Zm160-40 56-58-62-62h486v-240h-80v160H274l62-62-56-58-160 160L280-80Zm-80-440h80v-160h406l-62 62 56 58 160-160-160-160-56 58 62 62H200v240Z"/>
    </Icon>
  );
});

IconMaterialRepeatOn.displayName = 'OnesyIconMaterialRepeatOn';

export default IconMaterialRepeatOn;
