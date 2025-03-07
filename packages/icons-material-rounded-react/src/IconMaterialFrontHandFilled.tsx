import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontHandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandFilled'

      short_name='FrontHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-40q-142 0-241-99t-99-241v-380q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v240h80v-320q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v320h80v-360q0-17 11.5-28.5T520-920q17 0 28.5 11.5T560-880v360h80v-280q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v230q-29 21-44.5 53T660-450v50h-50q-63 0-106.5 43.5T460-250v50q0 13 8.5 21.5T490-170q13 0 21.5-8.5T520-200v-50q0-38 26-64t64-26h70q17 0 28.5-11.5T720-380v-70q0-38 26-64t64-26q13 0 21.5 8.5T840-510v130q0 142-99 241T500-40Z"/>
    </Icon>
  );
});

IconMaterialFrontHandFilled.displayName = 'OnesyIconMaterialFrontHandFilled';

export default IconMaterialFrontHandFilled;
