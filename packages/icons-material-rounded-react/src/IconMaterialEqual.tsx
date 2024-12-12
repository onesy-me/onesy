import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqual = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Equal'

      short_name='Equal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-280q-25 0-42.5-17.5T160-340q0-25 17.5-42.5T220-400h520q25 0 42.5 17.5T800-340q0 25-17.5 42.5T740-280H220Zm0-280q-25 0-42.5-17.5T160-620q0-25 17.5-42.5T220-680h520q25 0 42.5 17.5T800-620q0 25-17.5 42.5T740-560H220Z"/>
    </Icon>
  );
});

IconMaterialEqual.displayName = 'OnesyIconMaterialEqual';

export default IconMaterialEqual;
