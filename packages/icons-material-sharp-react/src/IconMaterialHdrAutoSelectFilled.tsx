import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrAutoSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoSelectFilled'

      short_name='HdrAutoSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-632 40-116h4l40 116h-84Zm42 232q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70ZM350-520h48l26-72h112l26 72h48L504-800h-50L350-520ZM820-80v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Zm-300 0v-240h200v156h-36l36 84h-60l-36-80h-44v80h-60Zm60-140h80v-40h-80v40ZM0-80v-240h60v80h80v-80h60v240h-60v-100H60v100H0Zm260 0v-240h170l30 30v180l-30 30H260Zm60-60h80v-120h-80v120Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoSelectFilled.displayName = 'OnesyIconMaterialHdrAutoSelectFilled';

export default IconMaterialHdrAutoSelectFilled;
