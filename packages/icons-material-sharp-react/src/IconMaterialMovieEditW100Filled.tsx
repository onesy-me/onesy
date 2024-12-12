import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEditW100Filled'

      short_name='MovieEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h60l54 108h120l-54-108h80l54 108h120l-54-108h80l54 108h120l-54-108h56q26 0 43 17t17 43v43L472-292v80H132Zm440 40v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialMovieEditW100Filled.displayName = 'OnesyIconMaterialMovieEditW100Filled';

export default IconMaterialMovieEditW100Filled;
