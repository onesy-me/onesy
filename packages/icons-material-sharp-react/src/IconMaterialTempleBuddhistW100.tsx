import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleBuddhistW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistW100'

      short_name='TempleBuddhist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-106v-360q-45-7-76.5-35.5T69-573h28q10 33 38 56t64 23h67v-132q-45-9-75.5-36.5T149-733h28q10 33 38 56t64 23h34l167-223 167 223h34q36 0 64-23t38-56h28q-8 42-39 69.5T694-626v132h67q36 0 64-23t38-56h28q-7 42-38.5 70.5T774-466v360H546v-200H414v200H186Zm162-548h264L480-830 348-654Zm-54 160h372v-132H294v132Zm-80 360h172v-200h188v200h172v-332H214v332Zm266-332Zm0-188Zm0 160Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistW100.displayName = 'OnesyIconMaterialTempleBuddhistW100';

export default IconMaterialTempleBuddhistW100;
