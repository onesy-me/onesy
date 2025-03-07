import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandslideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideW100'

      short_name='Landslide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132h463q38 0 54.5-33t-6.5-63l-92-121q-5-6-10.5-10.5T588-367l-184-80-92-118q-8-11-20.5-17t-26.5-6h-73q-25 0-42.5 17.5T132-528v336q0 25 17.5 42.5T192-132Zm-32-60v-59l80 26 343-114 98 128q12 16 3 33.5T655-160H192q-14 0-23-9t-9-23Zm80-63-80-26v-120l80 26 147-49 157 68-304 101Zm493-196 68-31q12-5 19.5-16t7.5-25v-19q0-16-9.5-28T793-586l-59-13q-10-2-20 0t-18 9l-27 21q-8 7-12.5 16t-4.5 20v26q0 11 4.5 20t12.5 16l17 14q10 8 23 9.5t24-3.5Zm-493 46-80-26v-97q0-14 9-23t23-9h72q8 0 14.5 3t11.5 9l78 101-128 42Zm472-68-32-25v-44l40-32 80 18v44l-88 39ZM508-667l92-37q13-5 20.5-16t7.5-25v-55q0-16-10-28.5T592-844l-83-17q-9-2-17.5-.5T475-855l-43 30q-9 6-14.5 16t-5.5 21v56q0 11 5.5 21t14.5 16l34 24q9 6 20 7.5t22-3.5Zm-19-23-49-33v-74l57-38 103 21v80l-111 44Z"/>
    </Icon>
  );
});

IconMaterialLandslideW100.displayName = 'OnesyIconMaterialLandslideW100';

export default IconMaterialLandslideW100;
