import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMaleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaleW100'

      short_name='Male'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M774-774v188h-28v-139L527-508q20 29 33.5 61.15T574-380q0 81.13-56.41 137.56Q461.18-186 380.09-186T242.5-242.41Q186-298.82 186-379.91t56.44-137.59Q298.87-574 380-574q35 0 66.5 13.5T507-527l219-219H586v-28h188ZM379.84-546Q311-546 262.5-497.34T214-379.84q0 68.84 48.66 117.34t117.5 48.5q68.84 0 117.34-48.66t48.5-117.5q0-68.84-48.66-117.34T379.84-546Z"/>
    </Icon>
  );
});

IconMaterialMaleW100.displayName = 'OnesyIconMaterialMaleW100';

export default IconMaterialMaleW100;
