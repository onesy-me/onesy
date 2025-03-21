import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlindFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindFilled'

      short_name='Blind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-760q-33 0-56.5-23.5T380-840q0-33 23.5-56.5T460-920q33 0 56.5 23.5T540-840q0 33-23.5 56.5T460-760Zm260 260q0 17-11.5 28.5T680-460h-39L850-95q5 8 2.5 15T842-68q-8 5-15 3t-12-10L588-471q-40-13-72.5-37.5T460-568q-10 29-15.5 66.5T441-432l79 112v220q0 17-11.5 28.5T480-60q-17 0-28.5-11.5T440-100v-160l-71-102-9 142-96 128q-10 14-26 16t-30-8q-14-10-16-26t8-30l80-107v-213q0-31 5.5-68.5T300-596l-60 34v102q0 17-11.5 28.5T200-420q-17 0-28.5-11.5T160-460v-125q0-11 5.5-20.5T180-620l196-111q8-5 17-7t19-2q24 0 44 12t30 33l31 67q20 44 61 66t102 22q17 0 28.5 11.5T720-500Z"/>
    </Icon>
  );
});

IconMaterialBlindFilled.displayName = 'OnesyIconMaterialBlindFilled';

export default IconMaterialBlindFilled;
