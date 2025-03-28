import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkspacePremiumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremiumFilled'

      short_name='WorkspacePremium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumFilled.displayName = 'OnesyIconMaterialWorkspacePremiumFilled';

export default IconMaterialWorkspacePremiumFilled;
