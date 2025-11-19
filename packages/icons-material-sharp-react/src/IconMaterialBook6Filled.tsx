import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book6Filled'

      short_name='Book6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm30-340h48l26-72h113l25 72h48L425-700h-50L270-420Zm88-112 41-116h2l41 116h-84Z"/>
    </Icon>
  );
});

IconMaterialBook6Filled.displayName = 'OnesyIconMaterialBook6Filled';

export default IconMaterialBook6Filled;
