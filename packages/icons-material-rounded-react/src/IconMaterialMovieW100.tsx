import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieW100'

      short_name='Movie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-748 39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h80l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h80l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h56q26 0 43 17t17 43v416q0 26-17 43t-43 17H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17Zm-32 136v340q0 14 9 23t23 9h576q14 0 23-9t9-23v-340H160Zm0 0v372-372Z"/>
    </Icon>
  );
});

IconMaterialMovieW100.displayName = 'OnesyIconMaterialMovieW100';

export default IconMaterialMovieW100;
