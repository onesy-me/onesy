import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastForEducationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastForEducationW100'

      short_name='CastForEducation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m588-498 136-78-136-78-136 78 136 78Zm0 112 102-58v-66l-102 60-102-60v66l102 58Zm-108-94Zm348 268H572q0-7-.25-14t-.75-14h229v-480H160v69q-7-.5-14-.75t-14-.25v-96h696v536Zm-696 0v-64q26 0 45 19t19 45h-64Zm164 0q0-68-48-115t-116-49v-28q80 0 136 55.89 56 55.88 56 136.11h-28Zm148 0q0-64.81-24.5-121.4-24.5-56.6-67-99.1-42.5-42.5-99.1-67Q196.81-524 132-524v-28q71 0 132.66 26.59t107.91 72.84q46.25 46.25 72.84 107.91Q472-283 472-212h-28Z"/>
    </Icon>
  );
});

IconMaterialCastForEducationW100.displayName = 'OnesyIconMaterialCastForEducationW100';

export default IconMaterialCastForEducationW100;
