import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRedeemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedeemW100'

      short_name='Redeem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-302v70q0 12 10 22t22 10h576q12 0 22-10t10-22v-70H160Zm32-364h147q-5-9-9-19t-4-21q0-29 19.5-48.5T394-774q17.4 0 32.19 9.19Q440.98-755.63 452-742l26 36 26-36q11-14 25.97-23 14.97-9 32.24-9 28.79 0 48.29 19.5T630-706q0 11-3.5 21t-9.5 19h151q26 0 43 17t17 43v374q0 26-17 43t-43 17H192q-26 0-43-17t-17-43v-374q0-26 17-43t43-17Zm-32 288h640v-228q0-12-10-22t-22-10H526l70 97q3 5 2.5 10.5T593-522q-5 3-10.5 2.5T574-525l-96-131-96 131q-3 5-8.5 5.5T363-522q-5-3-5.5-8.5T360-541l70-97H192q-12 0-22 10t-10 22v228Zm234-288q17 0 28.5-11.5T434-706q0-17-11.5-28.5T394-746q-17 0-28.5 11.5T354-706q0 17 11.5 28.5T394-666Zm168 0q17 0 28.5-11.5T602-706q0-17-11.5-28.5T562-746q-17 0-28.5 11.5T522-706q0 17 11.5 28.5T562-666Z"/>
    </Icon>
  );
});

IconMaterialRedeemW100.displayName = 'OnesyIconMaterialRedeemW100';

export default IconMaterialRedeemW100;
