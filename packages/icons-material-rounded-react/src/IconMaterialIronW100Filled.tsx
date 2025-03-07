import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIronW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronW100Filled'

      short_name='Iron'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M817-668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4-29.33 0-49.16 19.5Q748-601 748-574v132q0 39.17-28.58 66.58Q690.83-348 650-348h-3v26q0 12.75-8.62 21.37Q629.75-292 617-292H162q-12.75 0-21.37-8.63Q132-309.25 132-322v-42q0-51.15 37.5-87.58Q207-488 261-488h358v-46q0-27-19.84-46.5Q579.33-600 550-600H444q-13.57 0-26.28 5Q405-590 395-581q-1.78 2.27-4.44 3.64-2.67 1.36-5.52 1.36-6.04 0-10.04-4.31-4-4.32-4-10.69 0-3 1.09-5.63 1.09-2.62 2.91-4.37 13.8-13.11 31.25-20.06Q423.71-628 444-628h106q41 0 69 27.42 28 27.41 28 66.58v158h3q29 0 49.5-19.5T720-442v-132q0-39.17 28-66.58Q776-668 817-668Z"/>
    </Icon>
  );
});

IconMaterialIronW100Filled.displayName = 'OnesyIconMaterialIronW100Filled';

export default IconMaterialIronW100Filled;
