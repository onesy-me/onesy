import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceOverOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceOverOffW100'

      short_name='VoiceOverOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453-588 335-708h10q45 0 76.5 31.5T453-600v12ZM77-242v-22q0-26 13-43t37-29q48-24 106-38t112-14q47 0 91 9.5t75 20.5L373-496q-7 2-13.5 3t-14.5 1q-45 0-76.5-31.5T237-600q0-8 1-15t3-13L87-782q-4-4-4.5-9.5T87-802q5-5 10-5t10 5l680 680q4 4 4.5 9.5T787-102q-5 5-10 5t-10-5L627-242h-14q0 13-8.5 21.5T583-212H107q-13 0-21.5-8.5T77-242Zm28 2h480v-24q0-16-9-27.5T549-312q-38-20-94.5-34T345-360q-53 0-109.5 14T141-312q-15 8-25.5 19T105-264v24Zm240 0Zm538-360q0 62-23 117t-61 98q-5 5-11 6.5t-11-3.5q-5-5-4.5-11t5.5-11q36-40 56.5-90T855-600q0-56-20.5-106T778-796q-5-5-5.5-11t4.5-11q5-5 11-3.5t11 6.5q38 43 61 98t23 117Zm-190 0q0 23-8 44.5T663-517q-4 5-9.5 5.5T643-516q-5-5-5-10.5t4-10.5q11-14 17-30t6-33q0-19-6-34t-17-29q-4-5-4-10.5t5-10.5q5-5 10.5-4.5t9.5 5.5q14 17 22 37.5t8 45.5Z"/>
    </Icon>
  );
});

IconMaterialVoiceOverOffW100.displayName = 'OnesyIconMaterialVoiceOverOffW100';

export default IconMaterialVoiceOverOffW100;
