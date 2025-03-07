import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStroller = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stroller'

      short_name='Stroller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80q-33 0-56.5-23.5T560-160q0-33 23.5-56.5T640-240q33 0 56.5 23.5T720-160q0 33-23.5 56.5T640-80Zm-400 0q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm144-280h216v-253L384-360Zm-173 80 437-513q20-23 44.5-35t53.5-12q56 0 95 39t39 95v26h-80v-26q0-23-15.5-38.5T746-760q-11 0-19.5 4T711-744l-31 35v429H211Zm173-296L189-771q48-34 101-51.5T400-840q45 0 88.5 11t83.5 33L384-576Zm-5-118 55-64q-8-1-17-1.5t-17-.5q-20 0-38.5 3t-37.5 8l55 55Zm0 0Zm113 207Z"/>
    </Icon>
  );
});

IconMaterialStroller.displayName = 'OnesyIconMaterialStroller';

export default IconMaterialStroller;
