import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditFilled'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-608l92-112h536l92 112v93L640-435v-205H320v320l160-80 83 42-83 82v156H120Zm440 0v-123l263-262 123 122-263 263H560Zm263-224 37-39-37-37-38 38 38 38ZM216-720h528l-34-40H250l-34 40Z"/>
    </Icon>
  );
});

IconMaterialBoxEditFilled.displayName = 'OnesyIconMaterialBoxEditFilled';

export default IconMaterialBoxEditFilled;
