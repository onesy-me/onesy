import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDescriptionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionW100'

      short_name='Description'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-266h268v-28H346v28Zm0-160h268v-28H346v28ZM212-132v-696h374l162 162v534H212Zm360-520v-148H240v640h480v-492H572ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialDescriptionW100.displayName = 'OnesyIconMaterialDescriptionW100';

export default IconMaterialDescriptionW100;
