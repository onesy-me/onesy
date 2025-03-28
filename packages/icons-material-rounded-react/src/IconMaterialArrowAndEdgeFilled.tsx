import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowAndEdgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowAndEdgeFilled'

      short_name='ArrowAndEdge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-273v-167q0-33-23.5-56.5T360-520H120q-33 0-56.5-23.5T40-600v-200q0-17 11.5-28.5T80-840q17 0 28.5 11.5T120-800v200h240q36 0 67 14.5t53 39.5q22-25 53-39.5t67-14.5h240v-200q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v200q0 33-23.5 56.5T840-520H600q-33 0-56.5 23.5T520-440v167l35-35q11-11 27.5-11t28.5 11q12 12 12 28.5T611-251L508-148q-12 12-28 12t-28-12L348-252q-11-11-11.5-27.5T348-308q11-11 28-11t28 11l36 35Z"/>
    </Icon>
  );
});

IconMaterialArrowAndEdgeFilled.displayName = 'OnesyIconMaterialArrowAndEdgeFilled';

export default IconMaterialArrowAndEdgeFilled;
