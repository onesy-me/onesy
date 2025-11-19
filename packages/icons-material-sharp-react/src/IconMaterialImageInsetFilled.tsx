import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageInsetFilled = (props: IIcon) => {

  return (
    <Icon
      name='ImageInsetFilled'

      short_name='ImageInset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h480v-320H240v320Zm80-80 85-113 55 73 75-100 105 140H320ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialImageInsetFilled.displayName = 'OnesyIconMaterialImageInsetFilled';

export default IconMaterialImageInsetFilled;
