import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewRealSize = (props: IIcon) => {

  return (
    <Icon
      name='ViewRealSize'

      short_name='ViewRealSize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-320h-80v-80h160v400h-80Zm160 0v-80h80v80h-80Zm200 0v-320h-80v-80h160v400h-80ZM440-440v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialViewRealSize.displayName = 'OnesyIconMaterialViewRealSize';

export default IconMaterialViewRealSize;
