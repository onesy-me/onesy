import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowW100Filled'

      short_name='LineEndArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M502-313v-153H136v-28h366v-153l263 167-263 167Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowW100Filled.displayName = 'OnesyIconMaterialLineEndArrowW100Filled';

export default IconMaterialLineEndArrowW100Filled;
