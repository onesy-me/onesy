import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleanHandsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsW100'

      short_name='CleanHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m561-90-312-92v50H113v-292h236l286 104v60h193v88L561-90Zm-420-70h80v-236h-80v236Zm418 40 241-73v-39H525l-124-40 10-27 117 39h79v-40l-262-96h-96v184l310 92Zm34-321-28-9v-46q0-61-42.5-103.5T419-642q-57 0-95 34t-49 84h-28q10-56 49.5-97T405-670v-130h-60v-28h194q21 0 41 5t37 14l-21 21q-13-6-27-9t-30-3H433v130q75 8 117.5 59.5T593-496v55Zm-174-63Zm315-76q-23 0-38.5-15.5T680-634q0-18 12.5-45t41.5-69q29 42 41.5 68.5T788-634q0 23-15.5 38.5T734-580Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsW100.displayName = 'OnesyIconMaterialCleanHandsW100';

export default IconMaterialCleanHandsW100;
