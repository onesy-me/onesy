import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleHinduFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduFilled'

      short_name='TempleHindu'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m312-680 47-155v-85h80v80h81v-80h80v80l48 160H312ZM80-80v-440h80v80h640v-80h80v440H520v-200h-80v200H80Zm184-440 24-80h384l24 80H264Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduFilled.displayName = 'OnesyIconMaterialTempleHinduFilled';

export default IconMaterialTempleHinduFilled;
