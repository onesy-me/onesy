import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationSmall = (props: IIcon) => {

  return (
    <Icon
      name='MagnificationSmall'

      short_name='MagnificationSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-520h160v-160H200v160ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialMagnificationSmall.displayName = 'OnesyIconMaterialMagnificationSmall';

export default IconMaterialMagnificationSmall;
