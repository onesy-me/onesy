import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoFrame = (props: IIcon) => {

  return (
    <Icon
      name='PhotoFrame'

      short_name='PhotoFrame'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-80H40v-600h880v600H760v80H200Zm-80-160h720v-440H120v440Zm80-80h560L580-600 440-420 340-540 200-360Zm-80 80v-440 440Z"/>
    </Icon>
  );
};

IconMaterialPhotoFrame.displayName = 'OnesyIconMaterialPhotoFrame';

export default IconMaterialPhotoFrame;
