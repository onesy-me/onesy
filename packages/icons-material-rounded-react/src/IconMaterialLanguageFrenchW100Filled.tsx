import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageFrenchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageFrenchW100Filled'

      short_name='LanguageFrench'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M225.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-304q0-12.75 8.63-21.38Q229.25-654 242-654h184q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H240v132h146q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H240v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm308 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-304q0-12.75 8.63-21.38Q537.25-654 550-654h138q24.75 0 42.38 17.62Q748-618.75 748-594v78q0 24.94-17.5 42.47Q713-456 688-456h-24l73 130q4 7-.18 13.5T725-306q-4 0-7.13-1.91T713-313l-81-143h-84v136q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM548-484h140q14 0 23-9t9-23v-78q0-14-9-23t-23-9H548v142Z"/>
    </Icon>
  );
});

IconMaterialLanguageFrenchW100Filled.displayName = 'OnesyIconMaterialLanguageFrenchW100Filled';

export default IconMaterialLanguageFrenchW100Filled;
