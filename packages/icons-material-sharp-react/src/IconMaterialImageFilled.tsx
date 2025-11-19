import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageFilled = (props: IIcon) => {

  return (
    <Icon
      name='ImageFilled'

      short_name='Image'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h480L570-480 450-320l-90-120-120 160ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialImageFilled.displayName = 'OnesyIconMaterialImageFilled';

export default IconMaterialImageFilled;
