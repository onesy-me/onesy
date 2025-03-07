import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAltOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOff'

      short_name='FilterAltOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m592-481-57-57 143-182H353l-80-80h487q25 0 36 22t-4 42L592-481Zm-32 194v87q0 17-11.5 28.5T520-160h-80q-17 0-28.5-11.5T400-200v-247L84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T819-84q-12 11-28 11.5T763-84L560-287Zm-25-251Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOff.displayName = 'OnesyIconMaterialFilterAltOff';

export default IconMaterialFilterAltOff;
