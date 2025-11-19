import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationSmallFilled = (props: IIcon) => {

  return (
    <Icon
      name='MagnificationSmallFilled'

      short_name='MagnificationSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-520h160v-160H200v160ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialMagnificationSmallFilled.displayName = 'OnesyIconMaterialMagnificationSmallFilled';

export default IconMaterialMagnificationSmallFilled;
