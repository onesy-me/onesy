import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSceneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SceneW100Filled'

      short_name='Scene'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M826-106v-574q0-44-31-75t-75-31h-66v52q0 12-8 20t-20 8H468q-17 0-23.5-13.5T444-747l57-124q6-13 14.5-18t24.5-5h86q12 0 20 8t8 20v52h66q56 0 95 39t39 95v574h-28Zm-626 0q-40 0-67-27t-27-67v-86q0-29 15.5-44.5T166-346q29 0 44.5 15.5T226-286v60h348v-60q0-29 15.5-44.5T634-346q29 0 44.5 15.5T694-286v86q0 40-27 67t-67 27H200Zm54-148v-46q0-26-18.5-47T186-374v-100q0-25 17.5-42.5T246-534h308q25 0 42.5 17.5T614-474v100q-31 7-49.5 27.5T546-300v46H254Z"/>
    </Icon>
  );
});

IconMaterialSceneW100Filled.displayName = 'OnesyIconMaterialSceneW100Filled';

export default IconMaterialSceneW100Filled;
