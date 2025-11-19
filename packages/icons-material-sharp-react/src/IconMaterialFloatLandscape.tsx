import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloatLandscape = (props: IIcon) => {

  return (
    <Icon
      name='FloatLandscape'

      short_name='FloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v280h-80V336H160v480h440v80H80Zm600 0V616h200v280H680ZM480 576Z"/>
    </Icon>
  );
};

IconMaterialFloatLandscape.displayName = 'OnesyIconMaterialFloatLandscape';

export default IconMaterialFloatLandscape;
