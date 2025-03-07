import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFramePersonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonW100Filled'

      short_name='FramePerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-188h28v160h160v28H132Zm0-508v-188h188v28H160v160h-28Zm508 508v-28h160v-160h28v188H640Zm160-508v-160H640v-28h188v188h-28ZM479.88-486q-38.88 0-66.38-27.5Q386-541 386-579.88 386-618 413.5-646q27.5-28 66.38-28Q518-674 546-646q28 28 28 66.12 0 38.88-28 66.38-28 27.5-66.12 27.5ZM266-286v-50q0-14.61 7.54-27.48Q281.08-376.35 294-384q42-25 89.5-37.5T480-434q49 0 96.5 12.5T666-384q12.92 7.65 20.46 20.52Q694-350.61 694-336v50H266Z"/>
    </Icon>
  );
});

IconMaterialFramePersonW100Filled.displayName = 'OnesyIconMaterialFramePersonW100Filled';

export default IconMaterialFramePersonW100Filled;
