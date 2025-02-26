import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5gMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gMobiledataBadgeW100Filled'

      short_name='5gMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-172v-616h776v616H92Zm642-322h-94v28h66v132H534v-292h200v-28H506v348h228v-188ZM226-306h188v-188H254v-132h160v-28H226v188h160v132H226v28Z"/>
    </Icon>
  );
});

IconMaterial5gMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterial5gMobiledataBadgeW100Filled';

export default IconMaterial5gMobiledataBadgeW100Filled;
