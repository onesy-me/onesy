import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrackpadInput2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInput2W100'

      short_name='TrackpadInput2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M716-132H547L354-324l33-35 111 24v-292h28v329l-139-34 151 153q10 10 21.5 14.5T585-160h131q44 0 75-31t31-75v-131h28v131q0 56-39 95t-95 39ZM606-382v-299h28v299h-28Zm108 0v-115h28v115h-28Zm2 222H538h178Zm-584-92v-536h656v191h-28v-163H160v480h104l28 28H132Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInput2W100.displayName = 'OnesyIconMaterialTrackpadInput2W100';

export default IconMaterialTrackpadInput2W100;
