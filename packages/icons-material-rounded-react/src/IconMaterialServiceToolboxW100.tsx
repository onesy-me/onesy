import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialServiceToolboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServiceToolboxW100'

      short_name='ServiceToolbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342-668v-48q0-11 8.5-19.5T370-744h220q11 0 19.5 8.5T618-716v48h90q7.67 0 14.33 4 6.67 4 9.67 12l88 198q4 9.5 6 19t2 19v176q0 11-8.5 19.5T800-212H160q-11 0-19.5-8.5T132-240v-176q0-9.5 2-19t6-19l88-198q3-8 9.67-12 6.66-4 14.33-4h90Zm28 0h220v-48H370v48Zm-64 224v-27q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v27h292v-27q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v27h140l-86-196H252l-86 196h140Zm0 28H160v176h640v-176H654v27q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-27H334v27q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-27Zm174-14Zm0-14Zm0 28Z"/>
    </Icon>
  );
});

IconMaterialServiceToolboxW100.displayName = 'OnesyIconMaterialServiceToolboxW100';

export default IconMaterialServiceToolboxW100;
