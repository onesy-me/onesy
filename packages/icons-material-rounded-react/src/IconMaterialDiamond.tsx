import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diamond'

      short_name='Diamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-165q-17 0-33-7.5T419-194L113-560q-9-11-13.5-24T95-611q0-9 1.5-18.5T103-647l75-149q11-20 29.5-32t41.5-12h462q23 0 41.5 12t29.5 32l75 149q5 8 6.5 17.5T865-611q0 14-4.5 27T847-560L541-194q-12 14-28 21.5t-33 7.5Zm-95-475h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"/>
    </Icon>
  );
});

IconMaterialDiamond.displayName = 'OnesyIconMaterialDiamond';

export default IconMaterialDiamond;
