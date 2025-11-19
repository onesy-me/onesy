import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCamping = (props: IIcon) => {

  return (
    <Icon
      name='Camping'

      short_name='Camping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-186l350-472-70-94 64-48 56 75 56-75 64 48-70 94 350 472v186H80Zm400-591L160-240v80h120l200-280 200 280h120v-80L480-671ZM378-160h204L480-302 378-160Zm102-280 200 280-200-280-200 280 200-280Z"/>
    </Icon>
  );
};

IconMaterialCamping.displayName = 'OnesyIconMaterialCamping';

export default IconMaterialCamping;
