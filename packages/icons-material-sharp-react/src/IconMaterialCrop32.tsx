import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop32 = (props: IIcon) => {

  return (
    <Icon
      name='Crop32'

      short_name='Crop32'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240v-480h720v480H120Zm80-80h560v-320H200v320Zm0 0v-320 320Z"/>
    </Icon>
  );
};

IconMaterialCrop32.displayName = 'OnesyIconMaterialCrop32';

export default IconMaterialCrop32;
