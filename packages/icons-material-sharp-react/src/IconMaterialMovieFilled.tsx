import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilled'

      short_name='Movie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h80l80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h200v640H80Z"/>
    </Icon>
  );
});

IconMaterialMovieFilled.displayName = 'OnesyIconMaterialMovieFilled';

export default IconMaterialMovieFilled;
