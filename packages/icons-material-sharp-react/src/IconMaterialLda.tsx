import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lda'

      short_name='Lda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-137L200-318v-202h240v-120H320v-240h320v240H520v120h240v202L520-217v137h-80Zm-40-640h160v-80H400v80Zm40 416v-136H280v69l160 67Zm80 0 160-67v-69H520v136ZM400-720v-80 80Z"/>
    </Icon>
  );
});

IconMaterialLda.displayName = 'OnesyIconMaterialLda';

export default IconMaterialLda;
