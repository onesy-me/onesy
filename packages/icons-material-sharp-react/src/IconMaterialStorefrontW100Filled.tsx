import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStorefrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorefrontW100Filled'

      short_name='Storefront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M814-526v380H146v-382q-26-18-37.5-47.5T108-638l53-176h636l55 176q11 33-.5 63.5T814-526Zm-246-8q42 0 62.5-22.5T648-602l-28-184H494v174q0 32 22 55t52 23Zm-180 0q35 0 56.5-23t21.5-55v-174H340l-28 188q-2 17 18 40.5t58 23.5Zm-178 0q29 0 49-19.5t25-48.5l26-184H181l-45 154q-11 35 9 66.5t65 31.5Zm540 0q38 0 62-29.5t12-68.5l-46-154H650l26 184q5 29 25 48.5t49 19.5Z"/>
    </Icon>
  );
});

IconMaterialStorefrontW100Filled.displayName = 'OnesyIconMaterialStorefrontW100Filled';

export default IconMaterialStorefrontW100Filled;
