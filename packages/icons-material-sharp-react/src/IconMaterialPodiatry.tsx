import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPodiatry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Podiatry'

      short_name='Podiatry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m684-389 179-179 57 57-180 179-56-57ZM40-160v-167q35-5 67-20t61-37l70 75 28-28-67-72 15.5-15.5Q222-432 230-441l68 72 29-29-69-71q5-10 10.5-20.5T278-512l81 82 29-29-93-93 41-114 216-214 282 283-414 437H40Zm345-80 337-355-337 355Zm-265 0h265l337-355-171-171-146 145-29 81 88 86-230 230-62-67q-13 8-25.5 14T120-266v26Z"/>
    </Icon>
  );
});

IconMaterialPodiatry.displayName = 'OnesyIconMaterialPodiatry';

export default IconMaterialPodiatry;
