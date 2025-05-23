import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEcgHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgHeartW100Filled'

      short_name='EcgHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M655-792q72 0 122.5 56T828-600q0 27-6.5 54T801-494H607l-73-114h-27l-71 215-69-101H159q-14-25-20.5-51.5T132-599q0-81 50-137t122-56q39 0 75.5 16t65.5 47l35 37 33-35q30-32 67-48.5t75-16.5ZM479-156 205-432q-8-8-15.5-16.5T176-466h176l75 113h27l70-216 69 103h191q-6 9-13.5 17.5T755-432L479-156Z"/>
    </Icon>
  );
});

IconMaterialEcgHeartW100Filled.displayName = 'OnesyIconMaterialEcgHeartW100Filled';

export default IconMaterialEcgHeartW100Filled;
