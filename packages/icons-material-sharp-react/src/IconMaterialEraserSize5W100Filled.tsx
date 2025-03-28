import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEraserSize5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize5W100Filled'

      short_name='EraserSize5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M409-172q-99 0-168-69t-69-168q0-45 17.5-88.5T242-576l144-144q35-35 78-52t89-17q98 0 167 69t69 167q0 46-17 89t-52 78L576-242q-35 35-78.5 52.5T409-172Z"/>
    </Icon>
  );
});

IconMaterialEraserSize5W100Filled.displayName = 'OnesyIconMaterialEraserSize5W100Filled';

export default IconMaterialEraserSize5W100Filled;
