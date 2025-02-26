import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieW100Filled'

      short_name='Movie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h60l54 108h120l-54-108h80l54 108h120l-54-108h80l54 108h120l-54-108h116v536H132Z"/>
    </Icon>
  );
});

IconMaterialMovieW100Filled.displayName = 'OnesyIconMaterialMovieW100Filled';

export default IconMaterialMovieW100Filled;
