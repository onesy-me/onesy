import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoFrameFilled = (props: IIcon) => {

  return (
    <Icon
      name='PhotoFrameFilled'

      short_name='PhotoFrame'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-80H40v-600h880v600H760v80H200Zm0-240h560L580-600 440-420 340-540 200-360Z"/>
    </Icon>
  );
};

IconMaterialPhotoFrameFilled.displayName = 'OnesyIconMaterialPhotoFrameFilled';

export default IconMaterialPhotoFrameFilled;
