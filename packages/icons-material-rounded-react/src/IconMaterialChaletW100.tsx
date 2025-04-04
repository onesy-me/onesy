import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChaletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletW100'

      short_name='Chalet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-666h-44l-46 46q-4 4-9.5 4.5T596-620q-5-5-5-10t5-10l26-26h-42q-6 0-10-4t-4-10q0-6 4-10t10-4h42l-26-26q-4-4-4.5-9.5T596-740q4-4 9.5-4t10.5 4l46 45h44v-43l-46-46q-4-4-4.5-9.5T660-804q5-5 10-5t10 5l26 26v-42q0-6 4-10t10-4q6 0 10 4t4 10v42l26-26q4-4 9.5-4.5T780-804q5 5 5 10t-5 10l-46 46v44h44l46-46q4-4 9.5-4.5T844-740q5 5 5 10t-5 10l-26 26h42q6 0 10 4t4 10q0 6-4 10t-10 4h-42l26 26q4 4 4.5 9.5T844-620q-5 5-10 5t-10-5l-46-46h-44v44l46 46q4 4 4.5 9.5T780-556q-5 5-10 5t-10-5l-26-26v42q0 6-4 10t-10 4q-6 0-10-4t-4-10v-42l-26 26q-4 4-9.5 4.5T660-556q-5-5-5-10t5-10l46-46v-44ZM584-363l-36-36v157q0 13-8.5 21.5T518-212H282q-13 0-21.5-8.5T252-242v-158l-27 27q-4 4-9.5 3.5T206-374q-4-4-4-9.5t4-9.5l152-151q17-17 42-17t42 17l162 162q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5ZM280-240h106v-80q0-6 4-10t10-4q6 0 10 4t4 10v80h106v-187L400-547 280-428v188Zm0 0h240-240Z"/>
    </Icon>
  );
});

IconMaterialChaletW100.displayName = 'OnesyIconMaterialChaletW100';

export default IconMaterialChaletW100;
