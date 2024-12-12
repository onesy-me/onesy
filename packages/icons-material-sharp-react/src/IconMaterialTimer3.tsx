import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3'

      short_name='Timer3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200v-120h240v-100H360v-120h200v-100H320v-120h360v220l-60 60 60 60v220H320Z"/>
    </Icon>
  );
});

IconMaterialTimer3.displayName = 'OnesyIconMaterialTimer3';

export default IconMaterialTimer3;
