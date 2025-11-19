import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenShare = (props: IIcon) => {

  return (
    <Icon
      name='ScreenShare'

      short_name='ScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-80h880v80H40Zm40-120v-600h800v600H80Zm80-80h640v-440H160v440Zm0 0v-440 440Zm160-80h80v-80q0-17 11.5-28.5T440-520h80v80l120-120-120-120v80h-80q-50 0-85 35t-35 85v80Z"/>
    </Icon>
  );
};

IconMaterialScreenShare.displayName = 'OnesyIconMaterialScreenShare';

export default IconMaterialScreenShare;
