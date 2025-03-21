import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowOrEdge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOrEdge'

      short_name='ArrowOrEdge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-273v-247H120q-33 0-56.5-23.5T40-600v-200q0-17 11.5-28.5T80-840q17 0 28.5 11.5T120-800v200h140q33 0 56.5 23.5T340-520v247l35-35q11-11 27.5-11t28.5 11q12 12 12 28.5T431-251L328-148q-12 12-28 12t-28-12L168-252q-11-11-11.5-27.5T168-308q11-11 28-11t28 11l36 35Zm440 1 35-36q11-12 27.5-11.5T791-308q12 12 12 28.5T791-251L688-148q-12 12-28 12t-28-12L528-252q-11-11-11.5-27.5T528-308q11-11 28-11t28 11l36 35v-247q0-33 23.5-56.5T700-600h140v-200q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v200q0 33-23.5 56.5T840-520H700v248Z"/>
    </Icon>
  );
});

IconMaterialArrowOrEdge.displayName = 'OnesyIconMaterialArrowOrEdge';

export default IconMaterialArrowOrEdge;
