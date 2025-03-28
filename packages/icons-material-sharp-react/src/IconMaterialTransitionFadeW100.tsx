import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitionFadeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionFadeW100'

      short_name='TransitionFade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h213v616H172Zm273-548v-68h68v68h-68Zm68 69v-69h69v69h-69Zm69-69v-68h68v68h-68Zm137 0v-68h68v68h-68Zm-69 69v-69h69v69h-69Zm-205 68v-68h68v68h-68Zm137 0v-68h68v68h-68Zm137 0v-68h68v68h-68Zm-206 69v-69h69v69h-69Zm137 0v-69h69v69h-69Zm-205 68v-68h68v68h-68Zm137 0v-68h68v68h-68Zm137 0v-68h68v68h-68Zm-206 69v-69h69v69h-69Zm137 0v-69h69v69h-69Zm-205 68v-68h68v68h-68Zm137 0v-68h68v68h-68Zm137 0v-68h68v68h-68Zm-206 69v-69h69v69h-69Zm137 0v-69h69v69h-69Zm-205 68v-68h68v68h-68Zm137 0v-68h68v68h-68Zm137 0v-68h68v68h-68Z"/>
    </Icon>
  );
});

IconMaterialTransitionFadeW100.displayName = 'OnesyIconMaterialTransitionFadeW100';

export default IconMaterialTransitionFadeW100;
